// Design 09 · Drop: page behaviour.
// The 3D scene is a separate bundle (it carries three.js) and is only fetched when it will be used.

import { STATES } from './india-states.js';
import { LAYERS, LAYER_ORDER } from './map-layers.js';

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

// The map. Choosing a layer changes the sentence and the key beside the map; the live scene listens
// for the same choice and recolours its cards, and where there is no live scene the still picture is
// swapped. Picking a state out on the map replaces the sentence with what the map knows about that
// state, under every layer at once.
function initMap() {
  const inputs = [...document.querySelectorAll('input[name="map-layer"]')];
  const readout = document.querySelector('[data-map-readout]');
  const key = document.querySelector('[data-map-key]');
  const still = document.querySelector('[data-map-still]');
  const country = document.querySelector('[data-map-country]');
  const card = document.querySelector('[data-map-state]');
  const title = document.querySelector('[data-state-title]');
  const facts = document.querySelector('[data-state-facts]');
  if (!inputs.length || !readout || !card) return;

  const layer = () => (inputs.find((input) => input.checked) || inputs[0]).value;
  let shown = null; // the state whose facts are on show, by its code

  function showLayer() {
    const input = inputs.find((item) => item.checked) || inputs[0];
    readout.textContent = input.dataset.readout;
    if (still && input.dataset.still) still.src = input.dataset.still;
    if (key) {
      key.replaceChildren(...LAYERS[input.value].key.map((entry) => {
        const item = document.createElement('li');
        const swatch = document.createElement('i');
        swatch.className = `key key-${entry.tone}`;
        item.append(swatch, entry.text);
        return item;
      }));
    }
    showState(shown);
  }

  function showState(id) {
    shown = id;
    const state = id && STATES.find((item) => item.id === id);
    country.hidden = Boolean(state);
    card.hidden = !state;
    if (!state) return;
    title.textContent = state.n;
    const current = layer();
    facts.replaceChildren(...LAYER_ORDER.filter((name) => LAYERS[name].note(id)).map((name) => {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = LAYERS[name].name;
      detail.textContent = LAYERS[name].note(id);
      if (name === current) row.className = 'is-showing';
      row.append(term, detail);
      return row;
    }));
  }

  inputs.forEach((input) => input.addEventListener('change', showLayer));
  // The live map reports the state it has picked out: the one being pointed at, else the one tapped.
  document.addEventListener('ll:map-state', (event) => showState(event.detail.state));
  // A page restored from history can come back with a different layer already chosen.
  window.addEventListener('pageshow', showLayer);
  showLayer();
}

// The head script has already decided whether the live scene can run (WebGL, no reduced-motion request).
function loadScene() {
  if (!root.classList.contains('story-live') || !scriptUrl) return;
  const script = document.createElement('script');
  script.src = scriptUrl.replace(/drop\.js(\?.*)?$/, 'drop-scene.js$1');
  script.async = true;
  script.onerror = () => root.classList.remove('story-live');
  document.head.appendChild(script);
}

ready(() => {
  initMenu();
  initReassured();
  initMap();
  loadScene();
});
