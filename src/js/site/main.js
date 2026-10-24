// The site's behaviour, ported from the approved design (designs/src/js/lumen/main.js): the menu,
// REASSURED, the map, and loading the opening film. Each part does nothing on a page without its
// markup. The film is a separate bundle (it carries three.js) and is only fetched when it will play.

// The map's data: one list of states, places, and what each layer marks.
import { PLACES } from '../map/india-cells.js';
import { STATES } from '../map/india-states.js';
import { BORDERS } from '../map/india-borders.js';
import { LAYERS, LAYER_ORDER, WORK, chip, said } from '../map/map-layers.js';

// This file is loaded as a module, where document.currentScript is null: the film's bundle is found
// beside this one through import.meta.url.
const sceneUrl = new URL('site-scene.js', import.meta.url).href;
const root = document.documentElement;
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

// The film. The head script has already decided whether it can play by itself (WebGL, and no
// request for reduced motion). Where it can play but should not start unasked, the still image
// carries a button that starts it.
function initFilm() {
  if (!document.querySelector('[data-film]')) return;
  const load = () => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = sceneUrl;
    // If the film cannot be fetched, the still stays, alone: the button that offered the film goes.
    script.onerror = () => {
      root.classList.remove('film-can', 'film-live');
      const play = document.querySelector('[data-film-play]');
      if (play) play.hidden = true;
    };
    document.head.appendChild(script);
  };
  // The film is fetched once the opening has been painted, so that its heading and text never wait
  // for three.js.
  if (root.classList.contains('film-live')) { requestAnimationFrame(() => setTimeout(load, 0)); return; }
  const play = document.querySelector('[data-film-play]');
  if (!play || !root.classList.contains('film-can')) return;
  play.hidden = false;
  play.addEventListener('click', () => {
    root.classList.add('film-live');
    load();
    const toggle = document.querySelector('[data-film-toggle]');
    if (toggle) toggle.focus();
  }, { once: true });
}

// ---- The map --------------------------------------------------------------------------------
// Every state is drawn to its own outline and filled by how strongly the chosen layer marks it.
// Choosing a layer changes the sentence and the key beside the map; picking a state out, by
// pointing at it, tapping it or stepping to it with the arrow keys, replaces the sentence with what
// the map knows about that state, under every layer at once.

const SVG = 'http://www.w3.org/2000/svg';
const PAD = 1.5; // map units of clear space round the country
const VIEW = { x: -44.1 - PAD, y: -50 - PAD, w: 88.2 + PAD * 2, h: 100 + PAD * 2 }; // the borders' own extent
const CARD = { w: 1.12, h: 2.36, x0: -44.52, z0: -50.74 }; // the film's cards, two by two, for the grid drawn over the map
const MARK = 0.9; // how far a fully marked state goes to sun amber
const PALE = 0.45; // the half-way colour: this far from paper towards sun amber
const TONE = { strong: 1, pale: 0.42, faint: 0.1 }; // the key's swatches, as the levels in map-layers.js
// A name sits at the middle of its state. Where neighbours' names would run into each other, or a
// name would cover a place too small to be seen under it, these move it, in map units east and south.
const NAME_NUDGE = { MP: [-4.2, -0.6], CG: [0.3, 2.4], OD: [3.2, 0.9], DL: [5.4, 0.3] };
// On a small map the names are no smaller, so they need moving further.
const NAME_NUDGE_SMALL = { GJ: [-4.5, -0.6], MP: [-1.5, -4.2], MH: [1.5, 1.5], CG: [-1.2, 3.4], OD: [7.2, 4.4], DL: [8.2, 0.4], PB: [-1.5, -1], WB: [5.5, 3] };
const SMALL_MAP = 430; // pixels across, below which the names use the second set
const NAMES_FROM = 235; // and below which the map is too small to carry more than one name
// A pin's chip sits to the right of its place, or to the left east of the map's middle, so that it
// stays on the map.
const PIN_LEFT_FROM = 0;

function hexToRgb(css) {
  const probe = hexToRgb.ctx || (hexToRgb.ctx = document.createElement('canvas').getContext('2d'));
  probe.fillStyle = '#000';
  probe.fillStyle = css.trim();
  const hex = probe.fillStyle;
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
}

function initMap() {
  const layout = document.querySelector('[data-map-layout]');
  const figure = document.querySelector('[data-map]');
  const inputs = [...document.querySelectorAll('input[name="map-layer"]')];
  const readout = document.querySelector('[data-map-readout]');
  const key = document.querySelector('[data-map-key]');
  const still = document.querySelector('[data-map-still]');
  const country = document.querySelector('[data-map-country]');
  const card = document.querySelector('[data-map-state]');
  const title = document.querySelector('[data-state-title]');
  const facts = document.querySelector('[data-state-facts]');
  if (!figure || !inputs.length || !readout || !card) return;

  const layer = () => (inputs.find((input) => input.checked) || inputs[0]).value;
  const at = (x, z) => [`${(((x - VIEW.x) / VIEW.w) * 100).toFixed(2)}%`, `${(((z - VIEW.y) / VIEW.h) * 100).toFixed(2)}%`];

  // --- Draw it ---
  const svg = document.createElementNS(SVG, 'svg');
  svg.setAttribute('viewBox', `${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`);
  svg.setAttribute('aria-hidden', 'true');
  const states = document.createElementNS(SVG, 'g');
  const paths = BORDERS.map((d, index) => {
    const path = document.createElementNS(SVG, 'path');
    path.setAttribute('d', d);
    path.setAttribute('class', 'state');
    path.dataset.state = String(index);
    states.appendChild(path);
    return path;
  });
  // The grid of cards: fine lines over the whole country, cut to its outline.
  const clip = document.createElementNS(SVG, 'clipPath');
  clip.id = 'lumen-map-outline';
  const outline = document.createElementNS(SVG, 'path');
  outline.setAttribute('d', BORDERS.join(''));
  clip.appendChild(outline);
  const weave = document.createElementNS(SVG, 'path');
  let lines = '';
  for (let x = CARD.x0; x < VIEW.x + VIEW.w; x += CARD.w) lines += `M${x.toFixed(2)} ${VIEW.y}V${VIEW.y + VIEW.h}`;
  for (let z = CARD.z0; z < VIEW.y + VIEW.h; z += CARD.h) lines += `M${VIEW.x} ${z.toFixed(2)}H${VIEW.x + VIEW.w}`;
  weave.setAttribute('d', lines);
  weave.setAttribute('class', 'weave');
  weave.setAttribute('clip-path', `url(#${clip.id})`);
  weave.setAttribute('vector-effect', 'non-scaling-stroke');
  svg.append(clip, states, weave);

  const names = document.createElement('ol');
  names.className = 'map-names';
  names.setAttribute('aria-hidden', 'true');
  const nameItems = STATES.map((state) => {
    const item = document.createElement('li');
    const name = document.createElement('b');
    name.textContent = state.n;
    item.appendChild(name);
    names.appendChild(item);
    return item;
  });
  // The places we have worked: a dot for each of the fifteen sites. A site's chip, its name and
  // what was screened there, shows only while its pin is pointed at, focused or tapped, so that
  // fifteen names never crowd the map. Each pin is a button whose name says it all in full.
  const pins = document.createElement('ol');
  pins.className = 'map-pins';
  const pinItems = PLACES.map((place) => {
    const site = WORK.find((entry) => entry.id === place.id);
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pin';
    button.setAttribute('aria-label', said(site));
    const name = document.createElement('b');
    const note = document.createElement('small');
    note.textContent = chip(site);
    name.append(`${place.name} `, note);
    name.setAttribute('aria-hidden', 'true');
    item.append(button, name);
    if (place.x > PIN_LEFT_FROM) item.dataset.side = 'left';
    [item.style.left, item.style.top] = at(place.x, place.z);
    pins.appendChild(item);
    return item;
  });
  figure.append(svg, names, pins);
  figure.classList.add('is-live');
  figure.tabIndex = 0;
  figure.setAttribute('role', 'group');
  figure.setAttribute('aria-label', 'Map of India. Use the arrow keys to step through the states; Escape lets go.');
  if (layout) layout.classList.add('is-live');

  // --- What it shows ---
  let hovered = -1; // the state under the pointer
  let pinned = -1; // the state chosen by a click, a tap or the arrow keys
  let pointedPin = -1; // the site whose pin is pointed at or has the keyboard's focus
  let keptPin = -1; // and the one a click or a tap keeps open
  let small = false;
  let tiny = false;
  const picked = () => (hovered !== -1 ? hovered : pinned);
  const level = (index) => LAYERS[layer()].level(STATES[index].id);

  // A state's colour: meadow blue, lightened towards paper and then warmed to sun amber by as much
  // as the layer marks it (a warm colour mixed straight into a blue one goes through khaki), and
  // lightened further while it is picked out. The key's swatches are painted the same way.
  let colours = null;
  const markedColour = (mark, light = 0) => {
    if (!colours) {
      const style = getComputedStyle(root);
      colours = ['--meadow', '--sun', '--paper'].map((name) => hexToRgb(style.getPropertyValue(name)));
    }
    const [meadow, sun, paper] = colours;
    const half = MARK / 2;
    const mixed = meadow.map((channel, k) => {
      const pale = paper[k] + (sun[k] - paper[k]) * PALE;
      const marked = mark < half ? channel + (pale - channel) * (mark / half) : pale + (sun[k] - pale) * ((mark - half) / half);
      return Math.round(marked + (paper[k] - marked) * light);
    });
    return `rgb(${mixed.join(' ')})`;
  };
  const fillOf = (index) => markedColour(level(index) * MARK, index === picked() ? 0.5 : 0);
  const paintKey = () => {
    if (key) key.querySelectorAll('.key').forEach((swatch) => { swatch.style.background = markedColour(TONE[swatch.dataset.tone] * MARK); });
  };

  function placeNames() {
    const nudges = small ? NAME_NUDGE_SMALL : NAME_NUDGE;
    STATES.forEach((state, index) => {
      const nudge = nudges[state.id] || [0, 0];
      [nameItems[index].style.left, nameItems[index].style.top] = at(state.x + nudge[0], state.z + nudge[1]);
    });
  }

  // Which names and outlines stand out: the states the layer marks fully are named, and so is a
  // picked state, except while our places are pinned on the map, where its name would sit on theirs.
  function showMarks() {
    const places = LAYERS[layer()].places === 1;
    const chosen = picked();
    paths.forEach((path, index) => path.classList.toggle('is-on', index === chosen));
    if (chosen !== -1) states.appendChild(paths[chosen]); // drawn last, so its heavier outline is not overlapped
    nameItems.forEach((item, index) => {
      const marked = level(index) >= 0.9 && !tiny;
      item.classList.toggle('is-shown', !places && (index === chosen || marked));
      item.classList.toggle('is-on', index === chosen);
    });
    pins.classList.toggle('is-shown', places);
    // Pins that cannot be seen cannot be reached.
    pins.inert = !places;
    if (!places) pointedPin = keptPin = -1;
    showPin();
  }

  function showPin() {
    const open = pointedPin !== -1 ? pointedPin : keptPin;
    pinItems.forEach((item, index) => item.classList.toggle('is-on', index === open));
  }
  // A pin also picks out its state, so the panel beside the map says what was done there while the
  // chip names the site: pointing at a pin is pointing at its state; focusing or tapping one keeps it.
  pinItems.forEach((item, index) => {
    const button = item.querySelector('button');
    const state = STATES.findIndex((entry) => entry.id === WORK.find((site) => site.id === PLACES[index].id).state);
    const point = (to) => { pointedPin = to; showPin(); };
    button.addEventListener('pointerenter', (event) => { if (event.pointerType !== 'touch') { point(index); hover(state); } });
    button.addEventListener('pointerleave', (event) => { point(-1); hover(stateOf(event.relatedTarget)); });
    // A mouse click focuses the button too; only the keyboard's focus opens the chip by itself.
    button.addEventListener('focus', () => { if (button.matches(':focus-visible')) { point(index); keep(state); } });
    button.addEventListener('blur', () => point(-1));
    button.addEventListener('click', () => {
      keptPin = keptPin === index ? -1 : index;
      if (keptPin === index) keep(state);
      showPin();
    });
  });

  // A change of layer spreads across the map from the middle of what the new layer marks.
  function paint(spread) {
    let from = null;
    if (spread && !reducedMotion.matches) {
      const marked = STATES.filter((state) => LAYERS[layer()].level(state.id) >= 0.9);
      from = marked.length
        ? { x: marked.reduce((sum, state) => sum + state.x, 0) / marked.length, z: marked.reduce((sum, state) => sum + state.z, 0) / marked.length }
        : PLACES.find((place) => place.id === 'hyderabad');
    }
    paths.forEach((path, index) => {
      const wait = from ? Math.round(Math.hypot(STATES[index].x - from.x, STATES[index].z - from.z) * 11) : 0;
      const fill = reducedMotion.matches ? 'fill 0s' : from ? `fill 0.5s ease ${wait}ms` : 'fill 0.15s ease';
      path.style.transition = `${fill}, stroke-opacity 0.15s ease, stroke-width 0.15s ease`;
      path.style.fill = fillOf(index);
    });
  }

  function showState() {
    const index = picked();
    const state = index === -1 ? null : STATES[index];
    country.hidden = Boolean(state);
    card.hidden = !state;
    if (!state) return;
    title.textContent = state.n;
    const current = layer();
    facts.replaceChildren(...LAYER_ORDER.filter((name) => LAYERS[name].note(state.id)).map((name) => {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = LAYERS[name].name;
      detail.textContent = LAYERS[name].note(state.id);
      if (name === current) row.className = 'is-showing';
      row.append(term, detail);
      return row;
    }));
  }

  function showLayer(spread) {
    const input = inputs.find((item) => item.checked) || inputs[0];
    readout.textContent = input.dataset.readout;
    if (still && input.dataset.still && !figure.classList.contains('is-live')) still.src = input.dataset.still;
    if (key) {
      key.replaceChildren(...LAYERS[input.value].key.map((entry) => {
        const item = document.createElement('li');
        const swatch = document.createElement('i');
        swatch.className = `key key-${entry.tone}`;
        swatch.dataset.tone = entry.tone;
        item.append(swatch, entry.text);
        return item;
      }));
    }
    paintKey();
    paint(spread);
    showMarks();
    showState();
  }

  function pick() {
    paint(false);
    showMarks();
    showState();
  }
  const hover = (index) => { if (index !== hovered) { hovered = index; pick(); } };
  const keep = (index) => { if (index !== pinned) { pinned = index; pick(); } };
  const stateOf = (target) => {
    const path = target && target.closest ? target.closest('[data-state]') : null;
    return path ? Number(path.dataset.state) : -1;
  };

  // Pointing at a state picks it out for as long as the pointer is on it. A click or a tap keeps it
  // picked out; a click or tap on the same state, or off the country, lets it go.
  svg.addEventListener('pointerover', (event) => { if (event.pointerType !== 'touch') hover(stateOf(event.target)); });
  svg.addEventListener('pointerout', (event) => {
    // Moving from a state onto one of the pins over it keeps the state picked out (the pin says so).
    if (event.relatedTarget && event.relatedTarget.closest && event.relatedTarget.closest('.map-pins')) return;
    if (stateOf(event.relatedTarget) === -1) hover(-1);
  });
  svg.addEventListener('click', (event) => {
    const index = stateOf(event.target);
    keep(index === pinned ? -1 : index);
    if (keptPin !== -1) { keptPin = -1; showPin(); }
  });
  // The arrow keys step through the states in the order of their names.
  const byName = STATES.map((state, index) => index).sort((a, b) => STATES[a].n.localeCompare(STATES[b].n));
  figure.addEventListener('keydown', (event) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (step) {
      event.preventDefault();
      const here = byName.indexOf(pinned);
      keep(byName[(here === -1 ? (step > 0 ? 0 : byName.length - 1) : here + step + byName.length) % byName.length]);
    } else if (event.key === 'Escape' && (pinned !== -1 || keptPin !== -1)) {
      keep(-1);
      keptPin = -1;
      showPin();
    }
  });

  inputs.forEach((input) => input.addEventListener('change', () => showLayer(true)));
  // The names keep their size when the map shrinks, so a small map places them differently and a
  // very small one shows only the name of a picked state.
  const measure = () => {
    const width = figure.clientWidth;
    const nowSmall = width < SMALL_MAP;
    const nowTiny = width < NAMES_FROM;
    if (nowSmall === small && nowTiny === tiny && nameItems[0].style.left) return;
    small = nowSmall;
    tiny = nowTiny;
    placeNames();
    showMarks();
  };
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(figure);
  window.addEventListener('resize', measure);
  // A page restored from history can come back with a different layer already chosen.
  window.addEventListener('pageshow', () => showLayer(false));
  measure();
  showLayer(false);
}

ready(() => {
  initMenu();
  initReassured();
  initMap();
  initFilm();
});
