/**
 * FOODIES Digital Menu — Menu Controller
 * Compact scannable menu previews paired with an immersive, premium Product View experience.
 */

import { MENU_CATEGORIES, MENU_ITEMS } from './menuData.js';
import { cart } from './cart.js';

export class MenuController {
  constructor() {
    this.container = document.getElementById('menu-items-container');
    this.categoryTabs = document.querySelectorAll('.category-tab');
    this.activeCategory = 'all';

    // Modal Elements
    this.modal = document.getElementById('product-view-modal');
    this.modalCard = document.getElementById('product-modal-card');
    this.modalCloseBtn = document.getElementById('btn-close-modal');
    this.modalFoodImg = document.getElementById('modal-food-img');
    this.modalCategoryBadge = document.getElementById('modal-category-badge');
    this.modalTitle = document.getElementById('modal-product-title');
    this.modalDesc = document.getElementById('modal-product-desc');
    this.modalSizesSection = document.getElementById('modal-sizes-section');
    this.modalSizesGroup = document.getElementById('modal-sizes-group');
    this.modalPortionSection = document.getElementById('modal-portion-section');
    this.modalPortionPrice = document.getElementById('modal-portion-price');
    this.qtyCountVal = document.getElementById('qty-count-val');
    this.btnQtyMinus = document.getElementById('btn-qty-minus');
    this.btnQtyPlus = document.getElementById('btn-qty-plus');
    this.btnModalAddToOrder = document.getElementById('btn-modal-add-to-order');
    this.modalCalcTotal = document.getElementById('modal-calc-total');
    this.btnModalLabel = document.getElementById('btn-add-label');

    // Toast
    this.toast = document.getElementById('foodies-toast');
    this.toastMsg = document.getElementById('toast-message');
    this.toastTimeout = null;

    // Sticky Cart Elements
    this.stickyCartContainer = document.getElementById('sticky-cart-container');
    this.btnStickyCart = document.getElementById('btn-sticky-cart');
    this.cartBtnCount = document.getElementById('cart-btn-count');
    this.cartBtnTotal = document.getElementById('cart-btn-total');

    // Cart Drawer Elements
    this.cartModal = document.getElementById('cart-drawer-modal');
    this.cartDrawerCard = document.getElementById('cart-drawer-card');
    this.btnCloseCart = document.getElementById('btn-close-cart');
    this.cartItemsList = document.getElementById('cart-items-list');
    this.cartDrawerItemsCount = document.getElementById('cart-drawer-items-count');
    this.cartModalGrandTotal = document.getElementById('cart-modal-grand-total');
    this.cartDrawerFooter = document.getElementById('cart-drawer-footer');
    this.btnCartContinue = document.getElementById('btn-cart-continue-browsing');
    this.btnCartSendOrder = document.getElementById('btn-cart-send-order');
    this.btnSendPrice = document.getElementById('btn-send-price');

    // Cart Confirmation Step Elements (READY TO SEND?)
    this.cartConfirmView = document.getElementById('cart-confirm-view');
    this.confirmItemsVal = document.getElementById('confirm-items-val');
    this.confirmTotalVal = document.getElementById('confirm-total-val');
    this.confirmErrorAlert = document.getElementById('confirm-error-alert');
    this.confirmErrorText = document.getElementById('confirm-error-text');
    this.btnConfirmSend = document.getElementById('btn-confirm-send');
    this.btnConfirmSendText = document.getElementById('btn-confirm-send-text');
    this.btnConfirmBack = document.getElementById('btn-confirm-back');

    // Cart Order Sent Success Elements
    this.cartSuccessView = document.getElementById('cart-success-view');
    this.successOrderNumber = document.getElementById('success-order-number');
    this.btnSuccessBackToMenu = document.getElementById('btn-success-back-to-menu');

    // Active Cart View State: 'review' | 'confirm' | 'success'
    this.cartViewState = 'review';
    this.isOrderSubmitting = false;

    // Active Product View State
    this.activeItem = null;
    this.selectedSize = null;
    this.quantity = 1;
    this.lastFocusedElement = null;
    this.isSubmitting = false;
  }

  init() {
    this.renderMenu();
    this.bindCategoryTabs();
    this.bindOrderOptions();
    this.bindModalEvents();
    this.bindCartEvents();
    this.initCartSubscription();
  }

  // --------------------------------------------------------------------------
  // Header Order Options Interaction (Pickup • Dine-In)
  // --------------------------------------------------------------------------
  bindOrderOptions() {
    const optButtons = document.querySelectorAll('.order-opt-btn');
    optButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const mode = targetBtn.getAttribute('data-mode');
        const modeLabel = mode === 'dinein' ? 'Dine-In' : 'Pickup';

        optButtons.forEach(b => {
          const isActive = b === targetBtn;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-checked', isActive ? 'true' : 'false');
        });

        this.showToast(`Order mode: ${modeLabel}`);
      });
    });
  }

  // --------------------------------------------------------------------------
  // Menu Rendering Logic (PIZZA ONLY)
  // --------------------------------------------------------------------------
  renderMenu() {
    if (!this.container) return;

    // Filter items based on active category
    const filteredItems = MENU_ITEMS.filter(item => {
      return this.activeCategory === 'all' || item.category === this.activeCategory;
    });

    if (this.activeCategory === 'all') {
      // Grouped sequence for "All" pizzas
      const groups = [
        { id: 'vegetarian', name: 'Vegetarian Pizza' },
        { id: 'classic', name: 'Classic Pizza' },
        { id: 'deluxe', name: 'Deluxe Pizza' },
      ];

      let html = '';
      groups.forEach(grp => {
        const grpItems = filteredItems.filter(item => item.category === grp.id);
        if (grpItems.length === 0) return;

        html += `
          <section class="category-group-section" id="section-${grp.id}" aria-labelledby="cat-heading-${grp.id}">
            <div class="category-group-header">
              <div class="category-header-left">
                <span class="category-title-pip" aria-hidden="true"></span>
                <h2 class="category-title" id="cat-heading-${grp.id}">${grp.name}</h2>
              </div>
              <span class="category-count">${grpItems.length} items</span>
            </div>
            <div class="grid-container">
              ${grpItems.map(item => this.createCompactCardMarkup(item)).join('')}
            </div>
          </section>
        `;
      });

      this.container.innerHTML = html;
    } else {
      // Single pizza category view
      const catObj = MENU_CATEGORIES.find(c => c.id === this.activeCategory);
      const catName = catObj ? catObj.name : 'Pizza Selection';

      this.container.innerHTML = `
        <section class="category-group-section" id="section-${this.activeCategory}" aria-labelledby="cat-heading-${this.activeCategory}">
          <div class="category-group-header">
            <div class="category-header-left">
              <span class="category-title-pip" aria-hidden="true"></span>
              <h2 class="category-title" id="cat-heading-${this.activeCategory}">${catName}</h2>
            </div>
            <span class="category-count">${filteredItems.length} items</span>
          </div>
          <div class="grid-container">
            ${filteredItems.map(item => this.createCompactCardMarkup(item)).join('')}
          </div>
        </section>
      `;
    }

    this.bindCardEvents();
  }

  // --------------------------------------------------------------------------
  // Compact Menu Card Template (High Scannability & Flow)
  // --------------------------------------------------------------------------
  createCompactCardMarkup(item) {
    const startingPriceText = item.isPizza 
      ? `From ${item.sizes[0].formattedPrice}`
      : item.formattedPrice;

    return `
      <article 
        class="menu-card compact-card" 
        id="card-${item.id}" 
        data-item-id="${item.id}" 
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="${item.name}, ${startingPriceText}. Tap to view details and options."
      >
        <!-- Consistent Food Thumbnail -->
        <div class="card-thumb-box">
          <img 
            src="${item.image}" 
            alt="${item.alt || item.name}" 
            class="card-thumb-img" 
            loading="lazy" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <!-- Product Details -->
        <div class="card-details">
          <div class="card-title-row">
            <h3 class="card-title">${item.name}</h3>
          </div>
          
          <!-- Very short ingredient preview line -->
          <p class="card-short-desc">${item.shortDesc || item.description}</p>
          
          <!-- Starting Price & Clear Tap Action -->
          <div class="card-footer-row">
            <div class="card-price-tag">
              ${item.isPizza ? '<span class="price-from-label">From </span>' : ''}
              <span class="price-val">${item.isPizza ? item.sizes[0].formattedPrice : item.formattedPrice}</span>
            </div>

            <button 
              type="button" 
              class="btn-card-action" 
              data-item-id="${item.id}"
              aria-label="Order ${item.name}"
              tabindex="-1"
            >
              <span class="btn-action-text">Order</span>
              <svg class="btn-action-plus" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // --------------------------------------------------------------------------
  // Card Event Listeners
  // --------------------------------------------------------------------------
  bindCardEvents() {
    const cards = this.container.querySelectorAll('.menu-card.compact-card');
    cards.forEach(card => {
      // Tap/click opens Product View
      card.addEventListener('click', (e) => {
        const itemId = card.getAttribute('data-item-id');
        const item = MENU_ITEMS.find(it => it.id === itemId);
        if (item) {
          this.openProductView(item, card);
        }
      });

      // Keyboard accessibility (Enter or Space opens modal)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const itemId = card.getAttribute('data-item-id');
          const item = MENU_ITEMS.find(it => it.id === itemId);
          if (item) {
            this.openProductView(item, card);
          }
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // Product View (Modal / Bottom Sheet) Interaction
  // --------------------------------------------------------------------------
  openProductView(item, triggerElement = null) {
    if (!this.modal) return;

    this.activeItem = item;
    this.quantity = 1;
    this.lastFocusedElement = triggerElement || document.activeElement;
    this.isSubmitting = false;

    // Reset button state
    if (this.btnModalLabel) {
      this.btnModalLabel.textContent = 'Add to Order';
    }
    this.btnModalAddToOrder?.classList.remove('btn-added-success');

    // Populate Product Information
    if (this.modalFoodImg) {
      this.modalFoodImg.src = item.image;
      this.modalFoodImg.alt = item.alt || item.name;
    }

    if (this.modalCategoryBadge) {
      this.modalCategoryBadge.textContent = item.categoryName || 'Foodies Special';
    }

    if (this.modalTitle) {
      this.modalTitle.textContent = item.name;
    }

    if (this.modalDesc) {
      // Proper appetising full description
      this.modalDesc.textContent = item.description;
    }

    // Configure Sizes
    if (item.isPizza && item.sizes && item.sizes.length > 0) {
      // Select Regular by default (or first available size)
      this.selectedSize = item.sizes[0];
      this.modalSizesSection.style.display = 'block';
      this.modalPortionSection.style.display = 'none';

      // Render Pizza Sizes: REGULAR, MEDIUM, LARGE with exact prices
      this.renderSizeOptions(item.sizes);
    } else {
      this.selectedSize = null;
      this.modalSizesSection.style.display = 'none';
      this.modalPortionSection.style.display = 'block';

      if (this.modalPortionPrice) {
        this.modalPortionPrice.textContent = item.formattedPrice;
      }
    }

    // Reset Quantity
    this.updateQuantityDisplay();
    this.updateModalPrice();

    // Open Modal
    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-scroll-lock');

    // Focus close button for accessible keyboard focus trap
    setTimeout(() => {
      this.modalCloseBtn?.focus();
    }, 50);
  }

  renderSizeOptions(sizes) {
    if (!this.modalSizesGroup) return;

    this.modalSizesGroup.innerHTML = sizes.map((s, index) => {
      const isSelected = this.selectedSize && this.selectedSize.size === s.size;
      return `
        <button 
          type="button" 
          class="modal-size-option ${isSelected ? 'active' : ''}" 
          role="radio" 
          aria-checked="${isSelected ? 'true' : 'false'}"
          data-size="${s.size}"
          id="modal-size-opt-${s.size.toLowerCase()}"
          aria-label="${s.size} size, ${s.formattedPrice}"
        >
          <div class="size-option-radio-dot" aria-hidden="true">
            <span class="radio-inner-pip"></span>
          </div>
          <div class="size-option-text-col">
            <span class="size-option-name">${s.size}</span>
            <span class="size-option-subtitle">${s.label} Pizza</span>
          </div>
          <div class="size-option-price-col">
            <span class="size-option-price">${s.formattedPrice}</span>
          </div>
        </button>
      `;
    }).join('');

    // Bind size click events
    const optionBtns = this.modalSizesGroup.querySelectorAll('.modal-size-option');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const sizeCode = targetBtn.getAttribute('data-size');
        const chosenSize = this.activeItem.sizes.find(s => s.size === sizeCode);
        if (chosenSize) {
          this.selectedSize = chosenSize;

          // Update active states
          optionBtns.forEach(b => {
            const active = b === targetBtn;
            b.classList.toggle('active', active);
            b.setAttribute('aria-checked', active ? 'true' : 'false');
          });

          this.updateModalPrice();
        }
      });
    });
  }

  closeProductView() {
    if (!this.modal || !this.modal.classList.contains('open')) return;

    this.modal.classList.remove('open');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-scroll-lock');

    // Return focus naturally to the item card so the customer can continue browsing seamlessly
    if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === 'function') {
      this.lastFocusedElement.focus();
    }
  }

  updateQuantityDisplay() {
    if (this.qtyCountVal) {
      this.qtyCountVal.textContent = this.quantity.toString();
    }

    if (this.btnQtyMinus) {
      this.btnQtyMinus.disabled = this.quantity <= 1;
      this.btnQtyMinus.classList.toggle('disabled', this.quantity <= 1);
    }
  }

  updateModalPrice() {
    if (!this.activeItem) return;

    const unitPrice = this.activeItem.isPizza && this.selectedSize
      ? this.selectedSize.price
      : (this.activeItem.price || 0);

    const total = unitPrice * this.quantity;
    const formattedTotal = `$${total.toFixed(2).replace(/\.00$/, '')}`;

    if (this.modalCalcTotal) {
      this.modalCalcTotal.textContent = formattedTotal;
    }
  }

  bindModalEvents() {
    // 1. Close Button
    this.modalCloseBtn?.addEventListener('click', () => {
      this.closeProductView();
    });

    // 2. Backdrop Tap to Dismiss
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeProductView();
      }
    });

    // 3. Escape Key to Dismiss
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal?.classList.contains('open')) {
        this.closeProductView();
      }
    });

    // 4. Quantity Stepper
    this.btnQtyMinus?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.quantity > 1) {
        this.quantity -= 1;
        this.updateQuantityDisplay();
        this.updateModalPrice();
      }
    });

    this.btnQtyPlus?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.quantity < 20) {
        this.quantity += 1;
        this.updateQuantityDisplay();
        this.updateModalPrice();
      }
    });

    // 5. Add to Order Button
    this.btnModalAddToOrder?.addEventListener('click', () => {
      if (!this.activeItem || this.isSubmitting) return;
      this.isSubmitting = true;

      // Add item directly to the real cart
      cart.addItem(this.activeItem, this.selectedSize, this.quantity);

      // Provide immediate tactile response on button
      if (this.btnModalLabel) {
        this.btnModalLabel.textContent = '✓ Added to Order';
      }
      this.btnModalAddToOrder.classList.add('btn-added-success');

      // Prepare feedback message
      const sizeLabel = this.activeItem.isPizza && this.selectedSize
        ? ` (${this.selectedSize.label})`
        : '';
      const message = `Added ${this.quantity} × ${this.activeItem.name}${sizeLabel} to order`;

      // Show toast notification
      this.showToast(message);

      // Return customer naturally to the menu so they can continue browsing
      setTimeout(() => {
        this.closeProductView();
        this.isSubmitting = false;
      }, 350);
    });
  }

  // --------------------------------------------------------------------------
  // Cart Subscriptions & UI Updates
  // --------------------------------------------------------------------------
  initCartSubscription() {
    cart.subscribe((state) => {
      this.updateCartUI(state);
    });
  }

  updateCartUI(state) {
    const { itemCount, formattedTotal, isEmpty, items } = state;

    // 1. Sticky Cart Button Visibility & Display
    // Shows: 🛒 Order · 1 item · $5
    if (this.stickyCartContainer && this.cartBtnCount && this.cartBtnTotal) {
      if (isEmpty) {
        this.stickyCartContainer.classList.remove('visible');
        this.stickyCartContainer.setAttribute('aria-hidden', 'true');
        // If the cart modal was open and user removed everything, close it so empty cart isn't placed over menu
        if (this.cartModal?.classList.contains('open')) {
          this.closeCartDrawer();
        }
      } else {
        const itemLabel = itemCount === 1 ? '1 item' : `${itemCount} items`;
        this.cartBtnCount.textContent = itemLabel;
        this.cartBtnTotal.textContent = formattedTotal;
        this.stickyCartContainer.classList.add('visible');
        this.stickyCartContainer.setAttribute('aria-hidden', 'false');
      }
    }

    // 2. Cart Drawer Header & Grand Total
    if (this.cartDrawerItemsCount) {
      const itemLabel = itemCount === 1 ? '1 item' : `${itemCount} items`;
      this.cartDrawerItemsCount.textContent = itemLabel;
    }

    if (this.cartModalGrandTotal) {
      this.cartModalGrandTotal.textContent = formattedTotal;
    }

    if (this.btnSendPrice) {
      this.btnSendPrice.textContent = formattedTotal;
    }

    if (this.confirmItemsVal) {
      const itemLabel = itemCount === 1 ? '1 item' : `${itemCount} items`;
      this.confirmItemsVal.textContent = itemLabel;
    }

    if (this.confirmTotalVal) {
      this.confirmTotalVal.textContent = formattedTotal;
    }

    // 3. Render Cart Items inside Drawer
    this.renderCartItems(items);
  }

  renderCartItems(items) {
    if (!this.cartItemsList) return;

    if (!items || items.length === 0) {
      this.cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 32px 16px; color: var(--color-text-muted);">
          Your order is empty.
        </div>
      `;
      return;
    }

    this.cartItemsList.innerHTML = items.map(item => {
      const itemSubtotal = item.unitPrice * item.quantity;
      const formattedSubtotal = `$${itemSubtotal.toFixed(2).replace(/\.00$/, '')}`;
      const formattedUnitPrice = `$${item.unitPrice.toFixed(2).replace(/\.00$/, '')}`;

      return `
        <div class="cart-item-row" id="cart-item-${item.id}">
          <!-- Product Image -->
          <div class="cart-item-thumb">
            <img 
              src="${item.image}" 
              alt="${item.alt || item.name}" 
              class="cart-item-img" 
              loading="lazy" 
              referrerPolicy="no-referrer"
            />
          </div>

          <!-- Product Details -->
          <div class="cart-item-info">
            <div class="cart-item-title-row">
              <h4 class="cart-item-name">${item.name}</h4>
            </div>

            ${item.sizeLabel ? `<span class="cart-item-size-pill">${item.sizeLabel}</span>` : ''}

            <div class="cart-item-unit-price">${formattedUnitPrice} each</div>
          </div>

          <!-- Right Controls: Subtotal, Stepper (+/-), Remove -->
          <div class="cart-item-actions">
            <div class="cart-item-subtotal">${formattedSubtotal}</div>

            <div class="cart-stepper-wrap">
              <div class="cart-stepper" role="group" aria-label="Quantity controls for ${item.name}">
                <button 
                  type="button" 
                  class="btn-cart-step btn-cart-minus" 
                  data-cart-id="${item.id}"
                  aria-label="Decrease quantity for ${item.name}"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <span class="cart-step-val" aria-live="polite">${item.quantity}</span>
                <button 
                  type="button" 
                  class="btn-cart-step btn-cart-plus" 
                  data-cart-id="${item.id}"
                  aria-label="Increase quantity for ${item.name}"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>

              <!-- Remove option button -->
              <button 
                type="button" 
                class="btn-cart-remove" 
                data-cart-id="${item.id}"
                aria-label="Remove ${item.name} from order"
                title="Remove item"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.bindCartItemRowEvents();
  }

  bindCartItemRowEvents() {
    if (!this.cartItemsList) return;

    // Quantity Plus
    this.cartItemsList.querySelectorAll('.btn-cart-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cartId = btn.getAttribute('data-cart-id');
        cart.increment(cartId);
      });
    });

    // Quantity Minus
    this.cartItemsList.querySelectorAll('.btn-cart-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cartId = btn.getAttribute('data-cart-id');
        cart.decrement(cartId);
      });
    });

    // Remove Option
    this.cartItemsList.querySelectorAll('.btn-cart-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cartId = btn.getAttribute('data-cart-id');
        cart.removeItem(cartId);
        this.showToast('Item removed from order');
      });
    });
  }

  // --------------------------------------------------------------------------
  // Cart Drawer Interactions (Deliberate opening, closing)
  // --------------------------------------------------------------------------
  // Cart Drawer Interactions & Multi-Step Send Order Flow
  // --------------------------------------------------------------------------
  bindCartEvents() {
    // 1. Deliberate tap on sticky cart button opens cart drawer
    this.btnStickyCart?.addEventListener('click', () => {
      if (cart.getItemCount() > 0) {
        this.openCartDrawer();
      }
    });

    // 2. Close button in cart drawer
    this.btnCloseCart?.addEventListener('click', () => {
      this.closeCartDrawer();
    });

    // 3. Continue Browsing button in cart footer
    this.btnCartContinue?.addEventListener('click', () => {
      this.closeCartDrawer();
    });

    // 4. Send Order button in cart footer -> Open "READY TO SEND?" confirmation step
    this.btnCartSendOrder?.addEventListener('click', () => {
      if (cart.getItemCount() === 0) return;
      this.setCartViewState('confirm');
    });

    // 5. Confirmation Step: Go Back button -> Return to Review Order
    this.btnConfirmBack?.addEventListener('click', () => {
      this.setCartViewState('review');
    });

    // 6. Confirmation Step: SEND ORDER button -> Actually submit order
    this.btnConfirmSend?.addEventListener('click', () => {
      this.submitOrder();
    });

    // 7. Order Sent Success Screen: BACK TO MENU button -> Clear cart & return to menu
    this.btnSuccessBackToMenu?.addEventListener('click', () => {
      this.completeOrderAndReturnToMenu();
    });

    // 8. Backdrop click closes cart drawer (only if not currently submitting)
    this.cartModal?.addEventListener('click', (e) => {
      if (e.target === this.cartModal && !this.isOrderSubmitting) {
        if (this.cartViewState === 'success') {
          this.completeOrderAndReturnToMenu();
        } else {
          this.closeCartDrawer();
        }
      }
    });

    // 9. Escape key closes cart drawer
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.cartModal?.classList.contains('open') && !this.isOrderSubmitting) {
        if (this.cartViewState === 'success') {
          this.completeOrderAndReturnToMenu();
        } else {
          this.closeCartDrawer();
        }
      }
    });
  }

  // Switch between 'review', 'confirm', and 'success' inside the cart modal
  setCartViewState(viewState) {
    this.cartViewState = viewState;

    if (viewState === 'review') {
      if (this.cartItemsList) this.cartItemsList.style.display = '';
      if (this.cartDrawerFooter) this.cartDrawerFooter.style.display = '';
      if (this.cartConfirmView) this.cartConfirmView.style.display = 'none';
      if (this.cartSuccessView) this.cartSuccessView.style.display = 'none';
      if (this.confirmErrorAlert) this.confirmErrorAlert.style.display = 'none';

      // Update header
      const titleEl = document.getElementById('cart-modal-title');
      if (titleEl) titleEl.textContent = 'Review Order';
      if (this.cartDrawerItemsCount) this.cartDrawerItemsCount.style.display = '';
      if (this.btnCloseCart) this.btnCloseCart.style.display = '';
    } else if (viewState === 'confirm') {
      if (this.cartItemsList) this.cartItemsList.style.display = 'none';
      if (this.cartDrawerFooter) this.cartDrawerFooter.style.display = 'none';
      if (this.cartConfirmView) this.cartConfirmView.style.display = 'flex';
      if (this.cartSuccessView) this.cartSuccessView.style.display = 'none';
      if (this.confirmErrorAlert) this.confirmErrorAlert.style.display = 'none';

      // Update header
      const titleEl = document.getElementById('cart-modal-title');
      if (titleEl) titleEl.textContent = 'Confirm Order';
      if (this.cartDrawerItemsCount) this.cartDrawerItemsCount.style.display = 'none';
      if (this.btnCloseCart) this.btnCloseCart.style.display = '';

      // Update confirmation details
      const count = cart.getItemCount();
      const itemLabel = count === 1 ? '1 item' : `${count} items`;
      if (this.confirmItemsVal) this.confirmItemsVal.textContent = itemLabel;
      if (this.confirmTotalVal) this.confirmTotalVal.textContent = cart.getState().formattedTotal;
      this.btnConfirmSend?.focus();
    } else if (viewState === 'success') {
      if (this.cartItemsList) this.cartItemsList.style.display = 'none';
      if (this.cartDrawerFooter) this.cartDrawerFooter.style.display = 'none';
      if (this.cartConfirmView) this.cartConfirmView.style.display = 'none';
      if (this.cartSuccessView) this.cartSuccessView.style.display = 'flex';

      // Header on success
      const titleEl = document.getElementById('cart-modal-title');
      if (titleEl) titleEl.textContent = 'Order Confirmed';
      if (this.cartDrawerItemsCount) this.cartDrawerItemsCount.style.display = 'none';
      if (this.btnCloseCart) this.btnCloseCart.style.display = 'none'; // Customer taps BACK TO MENU

      this.btnSuccessBackToMenu?.focus();
    }
  }

  // Real Order Submission with API call & error handling
  async submitOrder() {
    if (this.isOrderSubmitting) return;

    const cartState = cart.getState();
    if (cartState.isEmpty || cartState.items.length === 0) {
      this.setCartViewState('review');
      return;
    }

    this.isOrderSubmitting = true;
    if (this.confirmErrorAlert) this.confirmErrorAlert.style.display = 'none';
    if (this.btnConfirmSend) {
      this.btnConfirmSend.classList.add('loading');
      if (this.btnConfirmSendText) this.btnConfirmSendText.textContent = 'SENDING ORDER...';
    }

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartState.items,
          total: cartState.total,
          orderMode: 'pickup'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server error occurred while sending order.');
      }

      const data = await response.json();

      if (!data.success || !data.orderNumber) {
        throw new Error(data.error || 'Invalid confirmation response.');
      }

      // Successful order received!
      if (this.successOrderNumber) {
        this.successOrderNumber.textContent = data.orderNumber;
      }

      // Transition to clean Foodies confirmation screen
      this.setCartViewState('success');

    } catch (err) {
      console.error('[FOODIES] Failed to submit order:', err);
      // Show clear error message and allow customer to try again
      if (this.confirmErrorAlert && this.confirmErrorText) {
        this.confirmErrorText.textContent = err.message || 'Unable to send order. Please try again.';
        this.confirmErrorAlert.style.display = 'block';
      }
    } finally {
      this.isOrderSubmitting = false;
      if (this.btnConfirmSend) {
        this.btnConfirmSend.classList.remove('loading');
        if (this.btnConfirmSendText) this.btnConfirmSendText.textContent = 'SEND ORDER';
      }
    }
  }

  // Once customer finishes reviewing the success screen and taps BACK TO MENU
  completeOrderAndReturnToMenu() {
    // Clear cart completely
    cart.clear();

    // Reset cart view state back to review
    this.setCartViewState('review');

    // Close the drawer
    this.closeCartDrawer();

    // Subtle feedback on returning to the menu
    this.showToast('Thank you! Your order is on its way.');
  }

  openCartDrawer() {
    if (!this.cartModal || (cart.getItemCount() === 0 && this.cartViewState !== 'success')) return;

    // Ensure we start in review mode unless already showing success
    if (this.cartViewState !== 'success') {
      this.setCartViewState('review');
    }

    this.cartModal.classList.add('open');
    this.cartModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-scroll-lock');

    setTimeout(() => {
      this.btnCloseCart?.focus();
    }, 50);
  }

  closeCartDrawer() {
    if (!this.cartModal || !this.cartModal.classList.contains('open')) return;

    this.cartModal.classList.remove('open');
    this.cartModal.setAttribute('aria-hidden', 'true');
    // Only remove scroll-lock if product view modal is also not open
    if (!this.modal?.classList.contains('open')) {
      document.body.classList.remove('modal-scroll-lock');
    }

    // Reset view state to review when closed
    this.setCartViewState('review');

    if (this.btnStickyCart && cart.getItemCount() > 0) {
      this.btnStickyCart.focus();
    }
  }

  // --------------------------------------------------------------------------
  // Elegant Feedback Toast (Non-intrusive confirmation)
  // --------------------------------------------------------------------------
  showToast(message) {
    if (!this.toast) return;

    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    if (this.toastMsg) {
      this.toastMsg.textContent = message;
    }

    this.toast.classList.add('show');
    this.toast.setAttribute('aria-hidden', 'false');

    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove('show');
      this.toast.setAttribute('aria-hidden', 'true');
    }, 2800);
  }

  // --------------------------------------------------------------------------
  // Category Tab Interactions
  // --------------------------------------------------------------------------
  bindCategoryTabs() {
    this.categoryTabs = document.querySelectorAll('.category-tab');
    this.categoryTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetTab = e.currentTarget;
        const category = targetTab.getAttribute('data-category');
        this.setActiveCategory(category);

        // Smoothly bring tab into view horizontally if scrolled
        targetTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    });
  }

  setActiveCategory(category) {
    this.activeCategory = category;

    // Update active tab visual state
    this.categoryTabs.forEach(tab => {
      const isSelected = tab.getAttribute('data-category') === category;
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    // Re-render menu
    this.renderMenu();
  }
}
