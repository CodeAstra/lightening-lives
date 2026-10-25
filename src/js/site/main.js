// The site's behaviour, ported from the approved design (designs/src/js/lumen/main.js): the menu,
// REASSURED, the map, and loading the opening film; and the contact page's condition (contact.js)
// and the Not found page's old addresses (not-found.js), each a few hundred bytes, so it rides in this bundle rather than costing a request of its own). Each
// part does nothing on a page without its markup. The film is a separate bundle (it carries three.js) and is only fetched when it will play.

// The map's data: one list of states, their outlines, and what each layer marks.
import { STATES } from '../map/india-states.js';
import { BORDERS } from '../map/india-borders.js';
import { LAYERS, LAYER_ORDER } from '../map/map-layers.js';
import { initMotion } from './motion.js';
import { initContact } from './contact.js';
import { initNotFound } from './not-found.js';

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
    const screen = document.querySelector('[data-film-screen]');
    if (screen) { screen.tabIndex = -1; screen.focus({ preventScroll: true }); }
  }, { once: true });
}

// ---- The opening's announcement ---------------------------------------------------------------
// The build keeps the items that have not ended (src/lib/announcements.mjs); the reader's own clock
// decides which one is running now, so a pill never outlives its last day between deploys. Days are
// days in India. A preview (the dev server only) always shows.
const IST = '+05:30';
function initNews() {
  const list = document.querySelector('[data-news]');
  if (!list) return;
  const now = Date.now();
  let shown = false;
  for (const item of list.children) {
    const live = item.hasAttribute('data-preview')
      || (Date.parse(`${item.dataset.start}T00:00:00${IST}`) <= now && now <= Date.parse(`${item.dataset.end}T23:59:59.999${IST}`));
    item.hidden = shown || !live;
    if (live) shown = true;
  }
  list.hidden = !shown;
}

// ---- The partners along the opening's foot ------------------------------------------------------
// The row slides by itself (the stylesheet's one loop) and stops while it is pointed at or holds the
// focus. There is no button (the user's call, 25 October 2026), so a tap, or a click, stops it and
// starts it again: a touch screen and a keyboard can still hold it still (WCAG 2.2.2).
function initMarquee() {
  const band = document.querySelector('[data-marquee]');
  const strip = band && band.querySelector('.marquee');
  if (!strip) return;
  strip.addEventListener('click', () => band.classList.toggle('is-paused'));
  strip.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); band.classList.toggle('is-paused'); }
  });
}

// ---- Our work's map of the field programmes ------------------------------------------------------
// The map and its panels are in the page; without script every panel shows, one after another.
// With it, one state at a time: pointing at a worked state, tapping it, or choosing its chip (or the
// arrow keys among the chips) shows that state's panel and lights its outline and its pin.
function initFieldMap() {
  const root = document.querySelector('[data-fieldmap]');
  if (!root) return;
  const chips = [...root.querySelectorAll('[data-fm-pick]')];
  const panels = new Map([...root.querySelectorAll('[data-fm-panel]')].map((p) => [p.dataset.fmPanel, p]));
  const paths = new Map([...root.querySelectorAll('[data-fm-state]')].map((p) => [p.dataset.fmState, p]));
  const pins = new Map([...root.querySelectorAll('[data-fm-pin]')].map((p) => [p.dataset.fmPin, p]));
  let current = chips[0] && chips[0].dataset.fmPick;
  root.classList.add('is-live');
  const select = (id, focus) => {
    if (!panels.has(id)) return;
    current = id;
    panels.forEach((panel, key) => { panel.hidden = key !== id; });
    chips.forEach((chip) => chip.setAttribute('aria-pressed', String(chip.dataset.fmPick === id)));
    paths.forEach((path, key) => path.classList.toggle('is-on', key === id));
    pins.forEach((pin, key) => pin.classList.toggle('is-on', key === id));
    const path = paths.get(id);
    if (path) path.parentNode.appendChild(path); // drawn last, so its outline is whole
    if (focus) chips.find((c) => c.dataset.fmPick === id)?.focus();
  };
  chips.forEach((chip, k) => {
    chip.addEventListener('click', () => select(chip.dataset.fmPick));
    chip.addEventListener('keydown', (e) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!step) return;
      e.preventDefault();
      select(chips[(k + step + chips.length) % chips.length].dataset.fmPick, true);
    });
  });
  const svg = root.querySelector('.fieldmap-svg');
  svg.addEventListener('click', (e) => { const id = e.target.closest('[data-fm-state]')?.dataset.fmState; if (id) select(id); });
  svg.addEventListener('pointerover', (e) => { if (e.pointerType !== 'mouse') return; const id = e.target.closest('[data-fm-state]')?.dataset.fmState; if (id) select(id); });
  select(current);
}

// ---- Our work's photographs -------------------------------------------------------------------
// A row of slides that scrolls by itself, one slide every data-interval ms, from the slide in view.
// It holds while the pointer is over it or a control has the focus, stops for good with its pause
// button, and never moves by itself for a reader who has asked for less motion; the arrows, the dots,
// a swipe and the arrow keys move it by hand. Without script it is a row that scrolls sideways.
function initGallery() {
  const root = document.querySelector('[data-gallery]');
  if (!root) return;
  const track = root.querySelector('[data-gallery-track]');
  const slides = [...root.querySelectorAll('[data-gallery-slide]')];
  const dots = [...root.querySelectorAll('[data-gallery-dot]')];
  const toggle = root.querySelector('[data-gallery-toggle]');
  const controls = root.querySelector('[data-gallery-controls]');
  if (!track || slides.length < 2) return;
  controls.hidden = false;
  root.classList.add('is-live');
  const every = Number(root.dataset.interval) || 6000;
  let index = 0;
  let timer = 0;
  let stopped = reducedMotion.matches;
  let held = false;
  const show = (i, smooth = true) => {
    index = (i + slides.length) % slides.length;
    track.scrollTo({ left: slides[index].offsetLeft - track.offsetLeft, behavior: smooth && !reducedMotion.matches ? 'smooth' : 'auto' });
    dots.forEach((d, k) => { d.classList.toggle('is-on', k === index); d.setAttribute('aria-current', k === index ? 'true' : 'false'); });
    restart();
  };
  const restart = () => {
    clearTimeout(timer);
    root.classList.remove('is-running');
    void root.offsetWidth; // restart the dot's fill
    if (stopped || held) return;
    root.classList.add('is-running');
    timer = setTimeout(() => show(index + 1), every);
  };
  const setStopped = (value) => {
    stopped = value;
    toggle.setAttribute('aria-pressed', String(value));
    toggle.setAttribute('aria-label', value ? 'Play the photos' : 'Pause the photos');
    root.classList.toggle('is-stopped', value);
    restart();
  };
  root.style.setProperty('--gallery-interval', `${every}ms`);
  root.querySelector('[data-gallery-prev]').addEventListener('click', () => show(index - 1));
  root.querySelector('[data-gallery-next]').addEventListener('click', () => show(index + 1));
  dots.forEach((d, k) => d.addEventListener('click', () => show(k)));
  toggle.addEventListener('click', () => setStopped(!stopped));
  root.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { held = true; restart(); } });
  root.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { held = false; restart(); } });
  root.addEventListener('focusin', () => { held = true; restart(); });
  root.addEventListener('focusout', (e) => { if (!root.contains(e.relatedTarget)) { held = false; restart(); } });
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
  });
  // A swipe or a scroll by hand: follow the slide that ends up in view.
  let settle = 0;
  track.addEventListener('scroll', () => {
    clearTimeout(settle);
    settle = setTimeout(() => {
      const near = slides.reduce((best, s, k) => (Math.abs(s.offsetLeft - track.offsetLeft - track.scrollLeft) < Math.abs(slides[best].offsetLeft - track.offsetLeft - track.scrollLeft) ? k : best), 0);
      if (near !== index) { index = near; dots.forEach((d, k) => d.classList.toggle('is-on', k === index)); restart(); }
    }, 120);
  }, { passive: true });
  // Only while it is on screen.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      const seen = entries[entries.length - 1].isIntersecting;
      if (seen) restart(); else { clearTimeout(timer); root.classList.remove('is-running'); }
    }, { threshold: 0.35 }).observe(root);
  }
  if (stopped) setStopped(true);
  show(0, false);
}

// ---- The film's pins --------------------------------------------------------------------------
// Once the film has pinned every state we work in (scene.js lifts the wrapper's inert), each pin is a
// button. Pointing at one, focusing it or tapping it opens the card beside it: the state, what was
// screened there (map-layers.js, the Our work layer's line) and a link down to the map, which opens
// on Our work with the state picked. A tap goes to the nearest pin, since on a small map the pins'
// tap areas overlap; the arrow keys step between pins, and Escape, or a tap elsewhere, closes it.
function initPins() {
  const wrap = document.querySelector('[data-places-wrap]');
  if (!wrap) return;
  const card = wrap.querySelector('#place-card');
  const name = card.querySelector('[data-place-name]');
  const line = card.querySelector('[data-place-line]');
  const link = card.querySelector('[data-place-link]');
  const items = [...wrap.querySelectorAll('[data-place]')];
  const pins = items.map((item) => item.querySelector('.place-pin'));
  let open = -1;
  let held = false; // opened by a click or tap, so it stays when the pointer leaves

  const close = () => {
    if (open === -1) return;
    pins[open].setAttribute('aria-expanded', 'false');
    items[open].classList.remove('is-open');
    card.hidden = true;
    open = -1;
    held = false;
  };
  const show = (index, hold = false) => {
    if (index === open) { held = held || hold; return; }
    close();
    const item = items[index];
    const id = item.dataset.place;
    const state = STATES.find((entry) => entry.id === id);
    name.textContent = state ? state.n : id;
    line.textContent = LAYERS.work.note(id);
    link.dataset.state = id;
    // The card opens to the pin's east, away from the page's text, unless it would leave the film
    // there. On a phone there is no room beside a pin: it is docked along the foot of the map.
    const docked = window.matchMedia('(max-width: 39.99rem)').matches;
    (docked ? wrap : item).appendChild(card);
    card.classList.toggle('is-docked', docked);
    item.classList.remove('is-west');
    card.hidden = false;
    const box = wrap.getBoundingClientRect();
    if (!docked && card.getBoundingClientRect().right > box.right - 8) item.classList.add('is-west');
    item.classList.add('is-open');
    pins[index].setAttribute('aria-expanded', 'true');
    open = index;
    held = hold;
  };
  const nearest = (x, y) => {
    let best = -1;
    let gap = Infinity;
    pins.forEach((pin, index) => {
      const r = pin.getBoundingClientRect();
      const d = Math.hypot(r.left + r.width / 2 - x, r.top + r.height / 2 - y);
      if (d < gap) { gap = d; best = index; }
    });
    return best;
  };

  pins.forEach((pin, index) => {
    pin.addEventListener('click', (event) => {
      const chosen = event.detail === 0 ? index : nearest(event.clientX, event.clientY);
      if (chosen === open && held) close();
      else show(chosen, true);
    });
    pin.addEventListener('focus', () => { if (pin.matches(':focus-visible')) show(index); });
    items[index].addEventListener('pointerenter', (event) => { if (event.pointerType === 'mouse') show(index); });
    items[index].addEventListener('pointerleave', (event) => { if (event.pointerType === 'mouse' && !held && open === index) close(); });
    items[index].addEventListener('focusout', (event) => { if (!items[index].contains(event.relatedTarget) && !held && open === index) close(); });
  });
  wrap.addEventListener('keydown', (event) => {
    const here = pins.indexOf(document.activeElement);
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (step && here !== -1) {
      event.preventDefault();
      pins[(here + step + pins.length) % pins.length].focus();
    } else if (event.key === 'Escape' && open !== -1) {
      const back = pins[open];
      close();
      back.focus();
    }
  });
  document.addEventListener('pointerdown', (event) => { if (open !== -1 && !wrap.contains(event.target)) close(); });
  link.addEventListener('click', (event) => {
    const id = link.dataset.state;
    const map = document.getElementById('map');
    if (!map || !id) return;
    event.preventDefault();
    close();
    document.dispatchEvent(new CustomEvent('ll:map-show', { detail: { layer: 'work', state: id } }));
    map.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    const figure = map.querySelector('[data-map]');
    if (figure) figure.focus({ preventScroll: true });
  });
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
const MARK = 0.9; // how far a fully marked state goes to life green (--sun)
const PALE = 0.45; // the half-way colour: this far from paper towards life green, a pale mint
const TONE = { strong: 1, pale: 0.42, faint: 0.1 }; // the key's swatches, as the levels in map-layers.js
// A name sits at the middle of its state. Where neighbours' names would run into each other, or a
// name would cover a place too small to be seen under it, these move it, in map units east and south.
const NAME_NUDGE = { MP: [-4.2, -0.6], JH: [2, 0.5], CG: [0.3, 2.4], OD: [4.2, 2.6], DL: [5.4, 0.3] };
// On a small map the names are no smaller, so they need moving further.
const NAME_NUDGE_SMALL = { GJ: [-4.5, -0.6], MP: [-1.5, -4.2], MH: [1.5, 0.9], JH: [3.5, 2.6], TS: [2, 2.4], CG: [-1.2, 3.4], OD: [7.2, 4.4], DL: [8.2, 0.4], PB: [-1.5, -1], WB: [5.5, 3] };
// A state with the emblem has it on the state itself, and its name under it: these move the pair
// where the state's middle would put it on a neighbour's name, or off a state too small to hold it.
const EMBLEM_NUDGE = { MP: [-2.5, -1.8], CG: [0.3, -1.2], JH: [0.6, -0.6], MH: [-1.2, -0.8], DL: [0, -0.4] };
const EMBLEM = '/assets/logo/lightening-lives-emblem.svg';
const SMALL_MAP = 430; // pixels across, below which the names use the second set
const NAMES_FROM = 235; // and below which the map is too small to carry more than one name

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
  // Under Our work a picked state's name becomes its chip: the name, then what was screened there
  // (content 6.2). States, not towns, are marked (R2): a state we have worked in carries the
  // emblem, on every layer, with its name under it (25 October 2026, after the poster's map).
  const nameItems = STATES.map((state) => {
    const item = document.createElement('li');
    const name = document.createElement('b');
    const line = document.createElement('small');
    name.append(state.n, line);
    if (LAYERS.work.states[state.id]) {
      const emblem = document.createElement('img');
      emblem.className = 'map-emblem';
      emblem.src = EMBLEM;
      emblem.alt = '';
      emblem.width = emblem.height = 60;
      item.classList.add('has-emblem');
      item.appendChild(emblem);
    }
    item.appendChild(name);
    names.appendChild(item);
    return item;
  });
  figure.append(svg, names);
  figure.classList.add('is-live');
  figure.tabIndex = 0;
  figure.setAttribute('role', 'group');
  if (layout) layout.classList.add('is-live');

  // --- What it shows ---
  let hovered = -1; // the state under the pointer
  let pinned = -1; // the state chosen by a click, a tap or the arrow keys
  let small = false;
  let tiny = false;
  const picked = () => (hovered !== -1 ? hovered : pinned);
  const level = (index) => LAYERS[layer()].level(STATES[index].id);

  // A state's colour: meadow blue, lightened towards paper and then moved to life green by as much
  // as the layer marks it (through paper, so half-way is a pale mint, not a third blue-green), and
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
      const nudge = (LAYERS.work.states[state.id] ? EMBLEM_NUDGE : nudges)[state.id] || [0, 0];
      [nameItems[index].style.left, nameItems[index].style.top] = at(state.x + nudge[0], state.z + nudge[1]);
    });
  }

  // Which names and outlines stand out: the states the layer marks fully are named, and so is a
  // picked state; under Our work a picked state's name carries its chip line.
  function showMarks() {
    const chosen = picked();
    const chipOf = LAYERS[layer()].chip;
    paths.forEach((path, index) => path.classList.toggle('is-on', index === chosen));
    // Drawn last, so its heavier outline is not overlapped; but a state that has the focus (a
    // television's spatial navigation) stays where it is, since moving it would drop the focus.
    if (chosen !== -1 && document.activeElement !== paths[chosen]) states.appendChild(paths[chosen]);
    nameItems.forEach((item, index) => {
      // On a small map a state with the emblem is marked by it alone; its name comes with a pick.
      const marked = level(index) >= 0.9 && !tiny && !(small && LAYERS.work.states[STATES[index].id]);
      // The picked state's card carries its name and line, so its own label steps aside.
      item.querySelector('small').textContent = '';
      item.classList.remove('has-chip');
      item.classList.toggle('is-shown', index !== chosen && marked);
      item.classList.toggle('is-on', index === chosen);
    });
  }

  // A change of layer spreads across the map from the middle of what the new layer marks.
  function paint(spread) {
    let from = null;
    if (spread && !reducedMotion.matches) {
      const marked = STATES.filter((state) => LAYERS[layer()].level(state.id) >= 0.9);
      from = marked.length
        ? { x: marked.reduce((sum, state) => sum + state.x, 0) / marked.length, z: marked.reduce((sum, state) => sum + state.z, 0) / marked.length }
        : null;
    }
    paths.forEach((path, index) => {
      const wait = from ? Math.round(Math.hypot(STATES[index].x - from.x, STATES[index].z - from.z) * 11) : 0;
      const fill = reducedMotion.matches ? 'fill 0s' : from ? `fill 0.5s ease ${wait}ms` : 'fill 0.15s ease';
      path.style.transition = `${fill}, stroke-opacity 0.15s ease, stroke-width 0.15s ease`;
      path.style.fill = fillOf(index);
    });
  }

  // What the map knows about the picked state, in a card beside the state itself (25 October 2026):
  // the current layer's line first, the others under it. It sits to the state's right, or its left
  // near the edge, or above or below where neither side fits; on a small map, or where there is no
  // hover, it docks under the map. The text column keeps the country's sentence and key; a pick by
  // click, tap or keys is also said to screen readers there.
  const tip = document.createElement('div');
  tip.className = 'map-tip';
  tip.hidden = true;
  tip.setAttribute('aria-hidden', 'true');
  const tipLayer = document.createElement('p'); tipLayer.className = 'map-tip-layer';
  const tipName = document.createElement('p'); tipName.className = 'map-tip-name';
  const tipNote = document.createElement('p'); tipNote.className = 'map-tip-note';
  const tipRest = document.createElement('dl'); tipRest.className = 'map-tip-rest';
  tip.append(tipLayer, tipName, tipNote, tipRest);
  figure.appendChild(tip);
  const said = document.createElement('p');
  said.className = 'sr-only';
  country.appendChild(said);
  card.hidden = true;
  const docked = () => figure.clientWidth < 448 || window.matchMedia('(hover: none)').matches;

  function placeTip(index) {
    const fig = figure.getBoundingClientRect();
    const box = paths[index].getBoundingClientRect();
    const b = { left: box.left - fig.left, right: box.right - fig.left, top: box.top - fig.top, bottom: box.bottom - fig.top };
    const w = tip.offsetWidth; const h = tip.offsetHeight; const W = fig.width; const H = fig.height; const gap = 12;
    const cy = (b.top + b.bottom) / 2; const cx = (b.left + b.right) / 2;
    const clampY = (y) => Math.min(Math.max(8, y), H - h - 8);
    const clampX = (x) => Math.min(Math.max(8, x), W - w - 8);
    let x; let y;
    if (b.right + gap + w <= W - 4) { x = b.right + gap; y = clampY(cy - h / 2); }
    else if (b.left - gap - w >= 4) { x = b.left - gap - w; y = clampY(cy - h / 2); }
    else if (b.top - gap - h >= 4) { x = clampX(cx - w / 2); y = b.top - gap - h; }
    else { x = clampX(cx - w / 2); y = Math.min(b.bottom + gap, H - h - 4); }
    tip.style.left = `${Math.round(x)}px`;
    tip.style.top = `${Math.round(y)}px`;
  }

  function showState() {
    const index = picked();
    const state = index === -1 ? null : STATES[index];
    country.hidden = false;
    if (!state) { tip.hidden = true; tip.classList.remove('is-shown'); return; }
    const current = layer();
    tipLayer.textContent = LAYERS[current].name;
    tipName.textContent = state.n;
    const chipOf = LAYERS[current].chip;
    const chip = chipOf ? chipOf(state.id).replace(`${state.n} · `, '') : '';
    tipNote.textContent = LAYERS[current].note(state.id) || chip || 'Nothing marked here on this layer.';
    tipRest.replaceChildren(...LAYER_ORDER.filter((name) => name !== current && LAYERS[name].note(state.id)).map((name) => {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = LAYERS[name].name;
      detail.textContent = LAYERS[name].note(state.id);
      row.append(term, detail);
      return row;
    }));
    tip.hidden = false;
    tip.classList.toggle('is-docked', docked());
    if (!docked()) placeTip(index);
    else { tip.style.left = ''; tip.style.top = ''; }
    requestAnimationFrame(() => tip.classList.add('is-shown'));
    if (index === pinned && hovered === -1) said.textContent = `${state.n}. ${LAYERS[current].name}: ${tipNote.textContent}`;
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
  // With no pointer (a television), the browser's own hover follows its focus a step behind; the
  // focus picks the state there (see focusin below), so hover is not listened to.
  const pointless = () => window.matchMedia('(pointer: none)').matches;
  svg.addEventListener('pointerover', (event) => { if (event.pointerType !== 'touch' && !pointless()) hover(stateOf(event.target)); });
  svg.addEventListener('pointerout', (event) => { if (!pointless() && stateOf(event.relatedTarget) === -1) hover(-1); });
  svg.addEventListener('click', (event) => {
    const index = stateOf(event.target);
    keep(index === pinned ? -1 : index);
  });
  // The arrow keys step through the states in the order of their names, while the map holds them.
  // With a keyboard it holds them as soon as it has the focus. With a remote and no pointer, as on a
  // television, the arrow keys are how the reader moves about the page, so the map holds them only
  // after Enter ("Select a state", the hint says). Escape lets go, and so does moving on (R3).
  const byName = STATES.map((state, index) => index).sort((a, b) => STATES[a].n.localeCompare(STATES[b].n));
  const remote = pointless;
  let holding = false; // whether the arrow keys are the map's
  let keyed = false; // whether the picked state was picked with the keys
  const label = () => figure.setAttribute('aria-label', remote()
    ? 'Map of India. Press Enter, then use the arrow keys to step through the states; Escape lets go.'
    : 'Map of India. Use the arrow keys to step through the states; Escape lets go.');
  label();
  const letGo = () => { holding = false; if (keyed) { keyed = false; keep(-1); } };
  figure.addEventListener('focus', () => { label(); holding = !remote(); });
  // A television's browser moves its focus over the states themselves with the arrow keys (spatial
  // navigation treats each state as a target, since the map answers to clicks): the state with the
  // focus is the picked one, as a state pointed at is.
  figure.addEventListener('focusin', (event) => {
    const index = stateOf(event.target);
    if (index !== -1) { keyed = true; keep(index); }
  });
  figure.addEventListener('focusout', (event) => { if (!figure.contains(event.relatedTarget)) letGo(); });
  figure.addEventListener('keydown', (event) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (step && holding) {
      event.preventDefault();
      const here = byName.indexOf(pinned);
      keyed = true;
      keep(byName[(here === -1 ? (step > 0 ? 0 : byName.length - 1) : here + step + byName.length) % byName.length]);
    } else if ((event.key === 'Enter' || event.key === ' ') && !holding) {
      event.preventDefault();
      holding = true;
      keyed = true;
      if (pinned === -1) keep(byName[0]);
    } else if (event.key === 'Escape' && (holding || pinned !== -1)) {
      event.preventDefault();
      holding = false;
      keyed = false;
      keep(-1);
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
  // The film's card sends the reader here with a state: the map opens on that layer with it picked.
  document.addEventListener('ll:map-show', (event) => {
    const { layer: wanted, state } = event.detail || {};
    const input = inputs.find((item) => item.value === wanted);
    if (input && !input.checked) { input.checked = true; showLayer(true); }
    const index = STATES.findIndex((entry) => entry.id === state);
    if (index !== -1) { hovered = -1; keep(index); }
  });
  window.addEventListener('resize', measure);
  // A page restored from history can come back with a different layer already chosen.
  window.addEventListener('pageshow', () => showLayer(false));
  measure();
  showLayer(false);
}

ready(() => {
  initMenu();
  initNews();
  initMarquee();
  initPins();
  initGallery();
  initFieldMap();
  initReassured();
  initMap();
  initFilm();
  initMotion();
  initContact();
  initNotFound();
});
