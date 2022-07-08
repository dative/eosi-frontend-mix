import Headroom from 'headroom.js'
import { toggleControlButton, TOGGLE_CLOSE_EVENT } from './toggle-control-button'
import './video-modal.ts'
import './numbers-count-up.ts'

toggleControlButton();

const siteHeaderEl = document.getElementById("site-header");

const siteHeader = new Headroom(siteHeaderEl, {
  offset: 144,
  tolerance: { up: 20, down: 10 },
  onUnpin: () => {
    const hamburger = document.getElementById("hamburger-menu-button");
    hamburger?.dispatchEvent(new Event(TOGGLE_CLOSE_EVENT));

    document.body.click()
  }
});
siteHeader.init();
