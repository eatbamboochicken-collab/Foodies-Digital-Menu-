/**
 * FOODIES Digital Ordering System — Configuration
 * Fast Food Digital Menu
 */

export const FOODIES_CONFIG = {
  brand: {
    name: 'FOODIES',
    tagline: 'Fast Food • Fresh & Crisp',
    version: '1.0.0',
    currency: '$',
    storeHours: '11:00 AM - 10:30 PM',
  },

  features: {
    cart: true,
    checkout: false,
    payments: false,
    tableOrdering: false,
    orderTracking: false,
  },

  ui: {
    scrollThreshold: 10,
    animationDuration: 200,
  }
};
