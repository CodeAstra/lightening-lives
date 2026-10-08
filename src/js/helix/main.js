// Design 06 · Helix: page behaviour.
// The 3D scene is a separate bundle (it carries three.js) and is only fetched when it will be used.

const scriptUrl = document.currentScript ? document.currentScript.src : '';
const root = document.documentElement;

function ready(fn) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
  else fn();
}

// Mobile menu: a <details> element, closed again after choosing a link or pressing Escape.
function initMenu() {
  const menu = document.querySelector('[data-menu]');
  if (!menu) return;
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) menu.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
}

// The head script has already decided whether the live scene can run (WebGL, no reduced-motion request).
function loadScene() {
  if (!root.classList.contains('story-live') || !scriptUrl) return;
  const script = document.createElement('script');
  script.src = scriptUrl.replace(/helix\.js(\?.*)?$/, 'helix-scene.js$1');
  script.async = true;
  script.onerror = () => root.classList.remove('story-live');
  document.head.appendChild(script);
}

ready(() => {
  initMenu();
  loadScene();
});
