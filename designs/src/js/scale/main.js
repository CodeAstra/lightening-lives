// Design 03 · Scale: page behaviour.
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

// REASSURED: each big letter and its criterion light up together, whichever one is pointed at or focused.
function initReassured() {
  const letters = [...document.querySelectorAll('[data-word] button')];
  const rows = [...document.querySelectorAll('[data-criteria] > li')];
  if (!letters.length || letters.length !== rows.length) return;

  const select = (index) => {
    letters.forEach((letter, i) => letter.classList.toggle('is-on', i === index));
    rows.forEach((row, i) => row.classList.toggle('is-on', i === index));
  };
  letters.forEach((letter, index) => {
    letter.addEventListener('pointerenter', () => select(index));
    letter.addEventListener('focus', () => select(index));
    letter.addEventListener('click', () => {
      select(index);
      // On a phone the list is below the fold of the word; bring the chosen criterion into view.
      if (window.matchMedia('(max-width: 43.99rem)').matches) rows[index].scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  });
  rows.forEach((row, index) => row.addEventListener('pointerenter', () => select(index)));
}

// The head script has already decided whether the live scene can run (WebGL, no reduced-motion request).
function loadScene() {
  if (!root.classList.contains('story-live') || !scriptUrl) return;
  const script = document.createElement('script');
  script.src = scriptUrl.replace(/scale\.js(\?.*)?$/, 'scale-scene.js$1');
  script.async = true;
  script.onerror = () => root.classList.remove('story-live');
  document.head.appendChild(script);
}

ready(() => {
  initMenu();
  initReassured();
  loadScene();
});
