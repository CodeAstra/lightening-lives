// Design 01 · Sample Card: page behaviour.
// Everything here enhances markup that already works without JavaScript.

const scriptUrl = document.currentScript ? document.currentScript.src : '';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

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

// Map layers: the radios drive the readout, the flat fallback image and (once loaded) the 3D map.
function initMapLayers() {
  const stage = document.getElementById('india-map');
  const readout = document.getElementById('map-readout');
  const flat = document.querySelector('[data-map-flat]');
  const radios = document.querySelectorAll('input[name="map-layer"]');
  if (!stage || !radios.length) return;

  const apply = (input) => {
    stage.dataset.layer = input.value;
    if (readout) readout.textContent = input.dataset.readout || '';
    if (flat) flat.src = flat.src.replace(/india-map-[a-z]+\.svg/, `india-map-${input.value}.svg`);
    document.dispatchEvent(new CustomEvent('ll:map-layer', { detail: { layer: input.value } }));
  };
  radios.forEach((input) => input.addEventListener('change', () => input.checked && apply(input)));
}

// The 3D map carries three.js, so it loads after the page has painted and only where WebGL exists.
function loadMap() {
  const stage = document.getElementById('india-map');
  if (!stage || !scriptUrl) return;
  try {
    const probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) return;
  } catch (error) {
    return;
  }
  const inject = () => {
    const script = document.createElement('script');
    script.src = scriptUrl.replace(/sample-card\.js(\?.*)?$/, 'india-map.js$1');
    script.async = true;
    document.head.appendChild(script);
  };
  const whenIdle = () => ('requestIdleCallback' in window ? requestIdleCallback(inject, { timeout: 1500 }) : setTimeout(inject, 300));
  if (document.readyState === 'complete') whenIdle();
  else window.addEventListener('load', whenIdle, { once: true });
}

// REASSURED: pointing at, focusing or tapping a letter names its criterion. Nothing moves on its own.
function initReassured() {
  const root = document.querySelector('[data-rsd]');
  if (!root) return;
  const buttons = [...root.querySelectorAll('button')];
  const now = root.querySelector('[data-rsd-now]');

  const select = (chosen) => {
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button === chosen)));
    now.textContent = chosen.dataset.criterion;
  };
  buttons.forEach((button) => {
    button.addEventListener('pointerenter', () => select(button));
    button.addEventListener('focus', () => select(button));
    button.addEventListener('click', () => select(button));
  });
}

// "What REASSURED means": the full list is in the page; this folds it away until asked for.
function initDisclosures() {
  document.querySelectorAll('[data-disclose]').forEach((button) => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) return;
    const icon = button.querySelector('svg');
    const set = (open) => {
      button.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
      if (icon) icon.style.transform = open ? 'rotate(180deg)' : '';
    };
    set(false);
    button.addEventListener('click', () => set(button.getAttribute('aria-expanded') !== 'true'));
    // Deep links such as #reassured-list still open it.
    if (location.hash === `#${panel.id}`) set(true);
  });
}

// Sample-to-result sequence: plays once, the first time it scrolls into view, then rests complete.
function initSequence() {
  const sequence = document.querySelector('[data-seq]');
  if (!sequence || reducedMotion.matches || !('IntersectionObserver' in window)) return;
  sequence.classList.add('is-armed');
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    sequence.classList.replace('is-armed', 'is-running');
  }, { threshold: 0.35 });
  observer.observe(sequence);
}

ready(() => {
  initMenu();
  initMapLayers();
  initReassured();
  initDisclosures();
  initSequence();
  loadMap();
});
