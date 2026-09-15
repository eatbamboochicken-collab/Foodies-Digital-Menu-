/**
 * FOODIES Digital Menu — Food Vector Visuals
 * Lightweight, zero-network, crisp vector food illustrations for all menu items.
 */

export function getItemGraphic(itemId) {
  switch (itemId) {
    // ------------------------------------------------------------------------
    // VEGETARIAN PIZZAS
    // ------------------------------------------------------------------------
    case 'margherita':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <defs>
            <radialGradient id="crust-grad-${itemId}" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stop-color="#E2872A" />
              <stop offset="90%" stop-color="#C26A18" />
              <stop offset="100%" stop-color="#8F4608" />
            </radialGradient>
            <radialGradient id="sauce-grad-${itemId}" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FFF0A0" />
              <stop offset="70%" stop-color="#FFDD55" />
              <stop offset="95%" stop-color="#D9230F" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="url(#crust-grad-${itemId})" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="url(#sauce-grad-${itemId})" />
          <!-- Mozzarella pools -->
          <circle cx="68" cy="54" r="10" fill="#FFFBE6" opacity="0.95" />
          <circle cx="94" cy="58" r="11" fill="#FFFBE6" opacity="0.95" />
          <circle cx="80" cy="74" r="9" fill="#FFFBE6" opacity="0.95" />
          <!-- Sliced Tomatoes -->
          <circle cx="62" cy="52" r="7" fill="#D9230F" />
          <circle cx="62" cy="52" r="4.5" fill="#EF4444" />
          <circle cx="98" cy="55" r="7" fill="#D9230F" />
          <circle cx="98" cy="55" r="4.5" fill="#EF4444" />
          <circle cx="82" cy="72" r="7" fill="#D9230F" />
          <circle cx="82" cy="72" r="4.5" fill="#EF4444" />
          <!-- Fresh Basil Leaves -->
          <path d="M72 45 C75 40 82 42 80 47 C77 50 72 48 72 45 Z" fill="#15803D" />
          <path d="M88 64 C93 60 98 65 94 69 C90 70 87 67 88 64 Z" fill="#15803D" />
          <path d="M68 68 C64 64 68 59 73 63 C74 67 70 69 68 68 Z" fill="#16A34A" />
        </svg>
      `;

    case 'veggie-feast':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <defs>
            <radialGradient id="crust-grad-${itemId}" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stop-color="#E2872A" />
              <stop offset="90%" stop-color="#C26A18" />
              <stop offset="100%" stop-color="#8F4608" />
            </radialGradient>
            <radialGradient id="cheese-grad-${itemId}" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FFF0A0" />
              <stop offset="85%" stop-color="#FFD642" />
              <stop offset="100%" stop-color="#D9230F" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="url(#crust-grad-${itemId})" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="url(#cheese-grad-${itemId})" />
          <!-- Bell peppers -->
          <path d="M60 48 Q68 44 74 50" stroke="#16A34A" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M88 46 Q96 52 92 60" stroke="#DC2626" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M65 72 Q75 76 82 70" stroke="#16A34A" stroke-width="4" stroke-linecap="round" fill="none" />
          <!-- Mushrooms -->
          <ellipse cx="78" cy="56" rx="6" ry="4" fill="#E4D5C7" />
          <rect x="76" y="58" width="4" height="4" fill="#CBB7A2" rx="1" />
          <ellipse cx="102" cy="66" rx="6" ry="4" fill="#E4D5C7" />
          <rect x="100" y="68" width="4" height="4" fill="#CBB7A2" rx="1" />
          <!-- Red Onions -->
          <circle cx="58" cy="64" r="5" fill="none" stroke="#9333EA" stroke-width="2.2" />
          <circle cx="94" cy="74" r="4.5" fill="none" stroke="#9333EA" stroke-width="2.2" />
          <!-- Sweetcorn niblets -->
          <circle cx="70" cy="58" r="2.5" fill="#FBBF24" />
          <circle cx="85" cy="46" r="2.5" fill="#FBBF24" />
          <circle cx="88" cy="68" r="2.5" fill="#FBBF24" />
          <circle cx="74" cy="78" r="2.5" fill="#FBBF24" />
          <!-- Black Olives -->
          <circle cx="66" cy="42" r="3" fill="#18181B" />
          <circle cx="66" cy="42" r="1.2" fill="#FFF0A0" />
          <circle cx="82" cy="64" r="3" fill="#18181B" />
          <circle cx="82" cy="64" r="1.2" fill="#FFF0A0" />
        </svg>
      `;

    case 'pizza-pie':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <defs>
            <radialGradient id="pie-crust-${itemId}" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#FCD34D" />
              <stop offset="65%" stop-color="#D97706" />
              <stop offset="100%" stop-color="#92400E" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#92400E" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="60" rx="54" ry="40" fill="url(#pie-crust-${itemId})" />
          <!-- Crimped crust border -->
          <ellipse cx="80" cy="60" rx="52" ry="38" fill="none" stroke="#B45309" stroke-width="3" stroke-dasharray="4 6" />
          <!-- Pie Vent slits showing savory fillings -->
          <path d="M72 52 L62 44" stroke="#D9230F" stroke-width="3.5" stroke-linecap="round" />
          <path d="M88 52 L98 44" stroke="#D9230F" stroke-width="3.5" stroke-linecap="round" />
          <path d="M80 66 L80 78" stroke="#D9230F" stroke-width="3.5" stroke-linecap="round" />
          <circle cx="80" cy="58" r="4" fill="#D9230F" />
          <circle cx="80" cy="58" r="2" fill="#FFFBE6" />
          <!-- Herbs & Steam -->
          <circle cx="70" cy="62" r="1.5" fill="#15803D" />
          <circle cx="90" cy="62" r="1.5" fill="#15803D" />
          <circle cx="84" cy="48" r="1.5" fill="#15803D" />
        </svg>
      `;

    case 'roasted-veg':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <defs>
            <radialGradient id="crust-grad-${itemId}" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stop-color="#E2872A" />
              <stop offset="90%" stop-color="#B45309" />
              <stop offset="100%" stop-color="#78350F" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="url(#crust-grad-${itemId})" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#FBBF24" />
          <!-- Charred roasted peppers -->
          <path d="M62 46 Q70 50 66 60" stroke="#DC2626" stroke-width="4.5" stroke-linecap="round" fill="none" />
          <line x1="64" y1="52" x2="68" y2="54" stroke="#451A03" stroke-width="1.5" />
          <path d="M94 48 Q98 58 90 66" stroke="#EA580C" stroke-width="4.5" stroke-linecap="round" fill="none" />
          <line x1="93" y1="56" x2="96" y2="58" stroke="#451A03" stroke-width="1.5" />
          <!-- Caramelized onions -->
          <path d="M72 70 Q82 76 90 70" stroke="#9333EA" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" />
          <path d="M74 50 Q80 44 86 52" stroke="#7E22CE" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" />
          <!-- Roasted Garlic Cloves -->
          <ellipse cx="78" cy="62" rx="4" ry="3" fill="#FEF3C7" stroke="#D97706" stroke-width="1" />
          <ellipse cx="102" cy="60" rx="4" ry="3" fill="#FEF3C7" stroke="#D97706" stroke-width="1" />
          <!-- Herb Flecks -->
          <circle cx="75" cy="56" r="1.5" fill="#16A34A" />
          <circle cx="85" cy="66" r="1.5" fill="#16A34A" />
        </svg>
      `;

    // ------------------------------------------------------------------------
    // CLASSIC PIZZAS
    // ------------------------------------------------------------------------
    case 'bbq-steak':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#A15413" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#F59E0B" />
          <!-- Smoky BBQ Sauce Swirls -->
          <path d="M56 50 Q80 34 104 52 Q84 76 60 70" stroke="#5B1607" stroke-width="4" stroke-linecap="round" fill="none" />
          <!-- Steak Strips with grill marks -->
          <g transform="translate(64, 46) rotate(15)">
            <rect width="18" height="7" rx="2" fill="#451A03" />
            <line x1="4" y1="1" x2="4" y2="6" stroke="#1F2937" stroke-width="1.2" />
            <line x1="9" y1="1" x2="9" y2="6" stroke="#1F2937" stroke-width="1.2" />
            <line x1="14" y1="1" x2="14" y2="6" stroke="#1F2937" stroke-width="1.2" />
          </g>
          <g transform="translate(86, 60) rotate(-20)">
            <rect width="20" height="7" rx="2" fill="#451A03" />
            <line x1="5" y1="1" x2="5" y2="6" stroke="#1F2937" stroke-width="1.2" />
            <line x1="10" y1="1" x2="10" y2="6" stroke="#1F2937" stroke-width="1.2" />
            <line x1="15" y1="1" x2="15" y2="6" stroke="#1F2937" stroke-width="1.2" />
          </g>
          <g transform="translate(68, 68) rotate(5)">
            <rect width="17" height="6.5" rx="2" fill="#451A03" />
          </g>
          <!-- Red Onions -->
          <circle cx="80" cy="46" r="4.5" fill="none" stroke="#C084FC" stroke-width="2" />
          <circle cx="60" cy="62" r="4" fill="none" stroke="#C084FC" stroke-width="2" />
        </svg>
      `;

    case 'hawaiian':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#C26A18" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#FBBF24" />
          <!-- Ham slices -->
          <rect x="58" y="46" width="14" height="11" rx="2" fill="#F472B6" />
          <rect x="88" y="48" width="14" height="11" rx="2" fill="#F472B6" />
          <rect x="74" y="68" width="14" height="11" rx="2" fill="#F472B6" />
          <!-- Golden Pineapple Chunks -->
          <polygon points="76,46 86,44 82,54 72,52" fill="#FDE047" stroke="#D97706" stroke-width="1" />
          <polygon points="62,64 72,62 68,72 58,70" fill="#FDE047" stroke="#D97706" stroke-width="1" />
          <polygon points="92,66 102,64 98,74 88,72" fill="#FDE047" stroke="#D97706" stroke-width="1" />
          <!-- Mozzarella gloss -->
          <circle cx="80" cy="60" r="3" fill="#FFFBE6" />
        </svg>
      `;

    case 'mince-n-onion':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#B45309" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#F59E0B" />
          <!-- Beef Mince Crumbles -->
          <circle cx="62" cy="48" r="3.5" fill="#582914" />
          <circle cx="68" cy="52" r="3" fill="#78350F" />
          <circle cx="86" cy="46" r="3.5" fill="#582914" />
          <circle cx="94" cy="52" r="3" fill="#78350F" />
          <circle cx="76" cy="64" r="3.5" fill="#582914" />
          <circle cx="84" cy="72" r="3.5" fill="#78350F" />
          <circle cx="64" cy="70" r="3" fill="#582914" />
          <circle cx="98" cy="66" r="3.5" fill="#78350F" />
          <!-- Sliced Sweet Onions -->
          <path d="M58 56 Q66 48 74 54" stroke="#FEF08A" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M82 54 Q90 60 96 52" stroke="#FEF08A" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M70 76 Q78 80 86 74" stroke="#FEF08A" stroke-width="3" stroke-linecap="round" fill="none" />
        </svg>
      `;

    case 'chicken-mushroom':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#C26A18" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#FBBF24" />
          <!-- Grilled Chicken pieces -->
          <rect x="62" y="46" width="13" height="8" rx="2" fill="#FCD34D" stroke="#D97706" stroke-width="0.8" />
          <rect x="88" y="48" width="14" height="8" rx="2" fill="#FCD34D" stroke="#D97706" stroke-width="0.8" />
          <rect x="74" y="68" width="13" height="8" rx="2" fill="#FCD34D" stroke="#D97706" stroke-width="0.8" />
          <!-- Mushroom Slices -->
          <ellipse cx="78" cy="54" rx="7" ry="5" fill="#E5E7EB" />
          <rect x="76" y="57" width="4" height="4" fill="#9CA3AF" rx="1" />
          <ellipse cx="64" cy="66" rx="7" ry="5" fill="#E5E7EB" />
          <rect x="62" y="69" width="4" height="4" fill="#9CA3AF" rx="1" />
          <ellipse cx="96" cy="64" rx="7" ry="5" fill="#E5E7EB" />
          <rect x="94" y="67" width="4" height="4" fill="#9CA3AF" rx="1" />
          <!-- Garlic Herb flakes -->
          <circle cx="70" cy="58" r="1.5" fill="#15803D" />
          <circle cx="86" cy="64" r="1.5" fill="#15803D" />
        </svg>
      `;

    case 'tropical-chicken':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#C26A18" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#FBBF24" />
          <!-- Chicken cubes -->
          <rect x="60" y="48" width="11" height="8" rx="2" fill="#FEF3C7" stroke="#D97706" stroke-width="1" />
          <rect x="90" y="52" width="11" height="8" rx="2" fill="#FEF3C7" stroke="#D97706" stroke-width="1" />
          <rect x="72" y="68" width="11" height="8" rx="2" fill="#FEF3C7" stroke="#D97706" stroke-width="1" />
          <!-- Pineapple Triangles -->
          <polygon points="76,46 86,44 82,54 72,52" fill="#FDE047" stroke="#D97706" stroke-width="1" />
          <polygon points="62,64 72,62 68,72 58,70" fill="#FDE047" stroke="#D97706" stroke-width="1" />
          <!-- Tangy tomato drizzle -->
          <path d="M58 52 Q80 68 102 54" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round" fill="none" />
        </svg>
      `;

    case 'sweet-chilli':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#C26A18" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#F59E0B" />
          <!-- Sweet Chilli Glaze -->
          <path d="M56 50 Q78 38 102 52 Q82 76 62 68" stroke="#DC2626" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.85" />
          <!-- Chicken Pieces -->
          <rect x="64" y="48" width="12" height="7" rx="2" fill="#FDE68A" />
          <rect x="86" y="56" width="12" height="7" rx="2" fill="#FDE68A" />
          <rect x="70" y="66" width="12" height="7" rx="2" fill="#FDE68A" />
          <!-- Chili Flakes -->
          <circle cx="80" cy="50" r="1.8" fill="#B91C1C" />
          <circle cx="74" cy="58" r="1.8" fill="#B91C1C" />
          <circle cx="92" cy="66" r="1.8" fill="#B91C1C" />
          <!-- Red Onions -->
          <circle cx="60" cy="60" r="4" fill="none" stroke="#A855F7" stroke-width="1.8" />
        </svg>
      `;

    // ------------------------------------------------------------------------
    // DELUXE PIZZAS
    // ------------------------------------------------------------------------
    case 'golden-bliss':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <defs>
            <radialGradient id="gold-grad-${itemId}" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FEF08A" />
              <stop offset="60%" stop-color="#FBBF24" />
              <stop offset="90%" stop-color="#D97706" />
              <stop offset="100%" stop-color="#92400E" />
            </radialGradient>
          </defs>
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#92400E" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="url(#gold-grad-${itemId})" />
          <!-- Golden Cheese Bubbles -->
          <ellipse cx="70" cy="52" rx="10" ry="7" fill="#FEF9C3" opacity="0.9" />
          <ellipse cx="94" cy="56" rx="12" ry="8" fill="#FEF9C3" opacity="0.9" />
          <ellipse cx="80" cy="70" rx="9" ry="6" fill="#FEF9C3" opacity="0.9" />
          <!-- Garlic Butter Gloss & Herb Specks -->
          <circle cx="74" cy="50" r="1.5" fill="#15803D" />
          <circle cx="90" cy="54" r="1.5" fill="#15803D" />
          <circle cx="82" cy="66" r="1.5" fill="#15803D" />
          <circle cx="64" cy="62" r="1.5" fill="#15803D" />
          <circle cx="98" cy="68" r="1.5" fill="#15803D" />
          <!-- Sparkle crown / bliss rays -->
          <path d="M80 40 L82 44 L86 44 L83 47 L84 51 L80 48 L76 51 L77 47 L74 44 L78 44 Z" fill="#F59E0B" />
        </svg>
      `;

    case 'meat-deluxe':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#A15413" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#F59E0B" />
          <!-- Pepperoni Slices -->
          <circle cx="64" cy="50" r="8" fill="#B91C1C" />
          <circle cx="64" cy="50" r="6" fill="#DC2626" />
          <circle cx="94" cy="52" r="8" fill="#B91C1C" />
          <circle cx="94" cy="52" r="6" fill="#DC2626" />
          <circle cx="78" cy="68" r="8.5" fill="#B91C1C" />
          <circle cx="78" cy="68" r="6.5" fill="#DC2626" />
          <!-- Beef Mince Bits -->
          <circle cx="78" cy="52" r="3" fill="#451A03" />
          <circle cx="84" cy="58" r="2.8" fill="#451A03" />
          <circle cx="62" cy="66" r="3" fill="#451A03" />
          <circle cx="96" cy="68" r="3" fill="#451A03" />
          <!-- Bacon Strips -->
          <rect x="70" y="44" width="10" height="4" rx="1" fill="#7F1D1D" transform="rotate(20 75 46)" />
          <rect x="84" y="66" width="10" height="4" rx="1" fill="#7F1D1D" transform="rotate(-15 89 68)" />
        </svg>
      `;

    case 'foodies-melt-mix':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#C26A18" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#FBBF24" />
          <!-- Melted Cheddar-Mozzarella Swirl -->
          <path d="M58 48 Q80 36 102 48 Q86 66 60 64" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round" fill="none" />
          <path d="M64 68 Q80 78 98 64" stroke="#FFFBE6" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.95" />
          <!-- Chicken & Beef mix -->
          <rect x="66" y="50" width="10" height="6" rx="2" fill="#FEF3C7" />
          <circle cx="86" cy="52" r="3" fill="#582914" />
          <rect x="82" y="62" width="10" height="6" rx="2" fill="#FEF3C7" />
          <circle cx="70" cy="64" r="3" fill="#582914" />
          <!-- Mushrooms -->
          <ellipse cx="94" cy="58" rx="5" ry="3.5" fill="#E5E7EB" />
        </svg>
      `;

    case 'foodies-supreme':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#A15413" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#FBBF24" />
          <!-- Pepperoni -->
          <circle cx="64" cy="50" r="7.5" fill="#DC2626" />
          <circle cx="94" cy="54" r="7.5" fill="#DC2626" />
          <circle cx="78" cy="68" r="8" fill="#DC2626" />
          <!-- Peppers -->
          <path d="M72 46 Q78 42 84 48" stroke="#16A34A" stroke-width="3.5" stroke-linecap="round" fill="none" />
          <!-- Mushrooms -->
          <ellipse cx="62" cy="66" rx="5" ry="3.5" fill="#E5E7EB" />
          <ellipse cx="94" cy="68" rx="5" ry="3.5" fill="#E5E7EB" />
          <!-- Black Olives -->
          <circle cx="80" cy="54" r="3" fill="#18181B" />
          <circle cx="80" cy="54" r="1.2" fill="#FBBF24" />
          <circle cx="88" cy="64" r="3" fill="#18181B" />
          <circle cx="88" cy="64" r="1.2" fill="#FBBF24" />
        </svg>
      `;

    case 'chicken-hawaiian':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#C26A18" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#FBBF24" />
          <!-- Chicken strips -->
          <rect x="62" y="48" width="13" height="7" rx="2" fill="#FEF3C7" stroke="#D97706" stroke-width="0.8" />
          <rect x="86" y="52" width="13" height="7" rx="2" fill="#FEF3C7" stroke="#D97706" stroke-width="0.8" />
          <!-- Ham -->
          <rect x="74" y="66" width="12" height="9" rx="2" fill="#F472B6" />
          <!-- Pineapple -->
          <polygon points="76,46 86,44 82,54 72,52" fill="#FDE047" stroke="#D97706" stroke-width="1" />
          <polygon points="62,64 72,62 68,72 58,70" fill="#FDE047" stroke="#D97706" stroke-width="1" />
        </svg>
      `;

    case 'fully-loaded':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#8F4608" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#F59E0B" />
          <!-- Loaded Topping Layers -->
          <circle cx="62" cy="50" r="7" fill="#DC2626" />
          <circle cx="96" cy="54" r="7" fill="#DC2626" />
          <rect x="74" y="44" width="12" height="7" rx="2" fill="#FEF3C7" />
          <circle cx="78" cy="68" r="8" fill="#DC2626" />
          <path d="M60 66 Q68 62 74 68" stroke="#16A34A" stroke-width="3" stroke-linecap="round" fill="none" />
          <ellipse cx="90" cy="66" rx="5" ry="3.5" fill="#E5E7EB" />
          <circle cx="84" cy="54" r="3" fill="#18181B" />
          <circle cx="84" cy="54" r="1.2" fill="#F59E0B" />
          <circle cx="70" cy="56" r="2.8" fill="#451A03" />
        </svg>
      `;

    case 'cheeseburger-pizza':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <ellipse cx="80" cy="62" rx="60" ry="46" fill="#C26A18" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.18))" />
          <ellipse cx="80" cy="61" rx="51" ry="38" fill="#FBBF24" />
          <!-- Cheddar sauce drizzle -->
          <path d="M56 48 Q78 36 102 48 Q82 72 62 66" stroke="#F59E0B" stroke-width="4.5" stroke-linecap="round" fill="none" />
          <!-- Ground beef -->
          <circle cx="62" cy="52" r="3.5" fill="#582914" />
          <circle cx="74" cy="46" r="3.5" fill="#582914" />
          <circle cx="94" cy="52" r="3.5" fill="#582914" />
          <circle cx="76" cy="66" r="3.5" fill="#582914" />
          <!-- Pickle Slices (Green rounds with ridged edge) -->
          <circle cx="86" cy="50" r="5" fill="#65A30D" />
          <circle cx="86" cy="50" r="3.2" fill="#84CC16" />
          <circle cx="66" cy="66" r="5" fill="#65A30D" />
          <circle cx="66" cy="66" r="3.2" fill="#84CC16" />
          <!-- Diced white onions -->
          <rect x="70" y="56" width="3" height="3" fill="#FFFFFF" rx="0.5" />
          <rect x="90" y="62" width="3" height="3" fill="#FFFFFF" rx="0.5" />
        </svg>
      `;

    // ------------------------------------------------------------------------
    // EXTRAS (Wings & Breadsticks)
    // ------------------------------------------------------------------------
    case 'peri-peri-wings':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <defs>
            <radialGradient id="wing-grad-${itemId}" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#EF4444" />
              <stop offset="60%" stop-color="#DC2626" />
              <stop offset="100%" stop-color="#991B1B" />
            </radialGradient>
          </defs>
          <!-- Wing 1 -->
          <g transform="translate(48, 38) rotate(-18)">
            <ellipse cx="28" cy="18" rx="20" ry="12" fill="url(#wing-grad-${itemId})" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.18))" />
            <circle cx="8" cy="18" r="5" fill="#FDE68A" />
            <circle cx="4" cy="18" r="3.5" fill="#FEF3C7" />
          </g>
          <!-- Wing 2 -->
          <g transform="translate(74, 46) rotate(15)">
            <ellipse cx="26" cy="16" rx="20" ry="12" fill="url(#wing-grad-${itemId})" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.18))" />
            <circle cx="44" cy="16" r="5" fill="#FDE68A" />
            <circle cx="48" cy="16" r="3.5" fill="#FEF3C7" />
          </g>
          <!-- Fiery Peri Peri drizzle & droplets -->
          <circle cx="70" cy="50" r="2.5" fill="#B91C1C" />
          <circle cx="86" cy="56" r="2.2" fill="#B91C1C" />
          <circle cx="102" cy="54" r="2.5" fill="#B91C1C" />
          <circle cx="78" cy="74" r="2" fill="#B91C1C" />
          <!-- Fresh Herb flecks -->
          <circle cx="74" cy="46" r="1.5" fill="#15803D" />
          <circle cx="92" cy="62" r="1.5" fill="#15803D" />
        </svg>
      `;

    case 'bbq-wings':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <defs>
            <radialGradient id="bbq-wing-grad-${itemId}" cx="45%" cy="45%" r="55%">
              <stop offset="0%" stop-color="#7C2D12" />
              <stop offset="65%" stop-color="#5B1607" />
              <stop offset="100%" stop-color="#350E04" />
            </radialGradient>
          </defs>
          <!-- Wing 1 -->
          <g transform="translate(50, 40) rotate(-15)">
            <ellipse cx="26" cy="16" rx="21" ry="13" fill="url(#bbq-wing-grad-${itemId})" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.22))" />
            <circle cx="6" cy="16" r="4.5" fill="#FDE68A" />
          </g>
          <!-- Wing 2 -->
          <g transform="translate(76, 48) rotate(12)">
            <ellipse cx="26" cy="16" rx="21" ry="13" fill="url(#bbq-wing-grad-${itemId})" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.22))" />
            <circle cx="46" cy="16" r="4.5" fill="#FDE68A" />
          </g>
          <!-- Sticky Glaze Sheen -->
          <path d="M68 44 Q76 40 84 46" stroke="#EA580C" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
          <!-- Toasted Sesame seeds -->
          <ellipse cx="72" cy="48" rx="1.8" ry="1" fill="#FEF3C7" transform="rotate(25 72 48)" />
          <ellipse cx="88" cy="54" rx="1.8" ry="1" fill="#FEF3C7" transform="rotate(-30 88 54)" />
          <ellipse cx="82" cy="64" rx="1.8" ry="1" fill="#FEF3C7" transform="rotate(40 82 64)" />
          <ellipse cx="100" cy="60" rx="1.8" ry="1" fill="#FEF3C7" transform="rotate(-15 100 60)" />
        </svg>
      `;

    case 'cheesy-breadsticks':
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <!-- 4 Golden Baked Breadsticks -->
          <g transform="translate(34, 30)">
            <!-- Stick 1 -->
            <rect x="10" y="8" width="72" height="11" rx="5" fill="#D97706" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
            <rect x="12" y="10" width="68" height="7" rx="3" fill="#FBBF24" />
            <!-- Stick 2 -->
            <rect x="10" y="22" width="72" height="11" rx="5" fill="#D97706" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
            <rect x="12" y="24" width="68" height="7" rx="3" fill="#FBBF24" />
            <!-- Stick 3 -->
            <rect x="10" y="36" width="72" height="11" rx="5" fill="#D97706" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
            <rect x="12" y="38" width="68" height="7" rx="3" fill="#FBBF24" />
            <!-- Stick 4 -->
            <rect x="10" y="50" width="72" height="11" rx="5" fill="#D97706" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
            <rect x="12" y="52" width="68" height="7" rx="3" fill="#FBBF24" />
            <!-- Bubbling Mozzarella Top Layer -->
            <path d="M22 6 Q46 16 70 8 Q56 36 68 56 Q36 48 24 58 Z" fill="#FFFBE6" opacity="0.9" />
            <!-- Parsley / Garlic Herb Flecks -->
            <circle cx="34" cy="28" r="1.5" fill="#15803D" />
            <circle cx="48" cy="22" r="1.5" fill="#15803D" />
            <circle cx="58" cy="38" r="1.5" fill="#15803D" />
            <circle cx="44" cy="46" r="1.5" fill="#15803D" />
          </g>
        </svg>
      `;

    default:
      return `
        <svg viewBox="0 0 160 120" class="food-illustration" aria-hidden="true">
          <circle cx="80" cy="60" r="40" fill="#FBBF24" />
        </svg>
      `;
  }
}
