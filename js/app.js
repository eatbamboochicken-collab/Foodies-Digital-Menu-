/**
 * FOODIES Digital Ordering System — App Bootstrap
 * Official Digital Menu
 */

import { FOODIES_CONFIG } from './config.js';
import { MenuController } from './menuController.js';
import { LaunchExperience } from './launchExperience.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log(`${FOODIES_CONFIG.brand.name} Digital Menu initialized.`);

  // 1. Trigger the Foodies Launch Experience immediately
  const launch = new LaunchExperience({ duration: 2100 });
  launch.init();

  // 2. Prepare & Initialize Menu & Ordering Controller in the background
  const menu = new MenuController();
  menu.init();
});
