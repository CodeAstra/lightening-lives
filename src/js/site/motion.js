// Motion outside the film (DESIGN.md, Motion). The film is the opening's orchestrated moment and the
// gel's run is Innovate's; everything here either answers the reader, briefly,
// or, once, shows what a section says happening: the testing model's rule drawing from a finger prick
// to care, the LitLife™ column filling down the comparison, the path from a brief to a rollout. Each
// plays the first time it comes into view and never again, and nothing the reader can already see is
// ever hidden to be revealed. Tweens start from wherever the thing is on screen, so they can be taken
// up again at any instant (overwrite: 'auto'); the keyboard gets what the pointer gets. A reader who
// has asked for less motion gets none of it: the stylesheet's finished states alone.
//
// One vocabulary for all of it (the motion study, 25 October 2026): an answer takes 0.2 s, an arrival
// 0.5 s, a process (a rule drawing, a column filling) about a second; power2.out for what answers or
// arrives, power1.inOut for what travels along a path; siblings 0.09 s apart; arrivals move 10 px.
//
// What moves, and what does not: colour (hover fills, REASSURED's green) stays the stylesheet's short
// transitions; GSAP moves things, and the stylesheet's own movement for those is switched off while it
// does (html.motion-on).

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Every element initMotion answers, by what it does (tests/motion.test.mjs pins this list).
export const BOUND = {
  press: '.btn, .nav-link, .tag, .action',
  arrow: '.link',
  go: 'svg[data-icon="arrow-right"], svg[data-icon="arrow-up-right"]',
  slide: '.actions a',
  // A section's first block, past a heading only screen readers hear; inner openings rise in by CSS.
  settle: 'main > section.section:not(.page-open) > .wrap > :first-child:not(.sr-only), main > section.section:not(.page-open) > .wrap > .sr-only + *',
  segment: '.seg',
  disclosure: 'details:not([data-menu])',
  menu: 'details[data-menu]',
  gel: '[data-gel]',
  gelLane: '.lane',
  gelBand: '.lane-band',
  logos: '[data-logos]',
  model: '.model',
  compare: '.compare-table',
  develop: '.develop-path',
  sequence: '.method-steps, .start-steps',
};

const EASE = 'power2.out'; // decelerates, no overshoot: nothing here was thrown
const PATH = 'power1.inOut'; // for what travels along a line
const STAGGER = 0.09;
const once = (trigger, start = 'top 75%') => ({ trigger, start, once: true });
// Already on screen when the page binds: left as it is, never hidden to be shown again.
const inView = (el, share = 0.01) => ScrollTrigger.isInViewport(el, share);
const rem = () => parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;

function bind(signal) {
  const on = (el, type, fn) => el.addEventListener(type, fn, { signal });
  const all = (selector) => [...document.querySelectorAll(selector)];

  // A press answers on the way down, not on release, and lets go wherever it has got to.
  const press = (el, down) => gsap.to(el, { scale: down ? 0.985 : 1, duration: 0.18, ease: EASE, overwrite: 'auto' });
  for (const el of all(BOUND.press)) {
    on(el, 'pointerdown', (event) => { if (event.button === 0) press(el, true); });
    for (const type of ['pointerup', 'pointercancel', 'pointerleave']) on(el, type, () => press(el, false));
    on(el, 'keydown', (event) => { if ((event.key === 'Enter' || event.key === ' ') && event.target === el) press(el, true); });
    on(el, 'keyup', () => press(el, false));
    on(el, 'blur', () => press(el, false));
  }

  // A text link's arrow moves 0.25rem towards where the link goes; a contact row slides in 0.75rem.
  const arrowTo = (link, x) => { const arrow = link.querySelector('svg'); if (arrow) gsap.to(arrow, { x, duration: 0.2, ease: EASE, overwrite: 'auto' }); };
  for (const link of all(BOUND.arrow)) {
    for (const type of ['pointerenter', 'focus']) on(link, type, (event) => { if (type === 'pointerenter' || link.matches(':focus-visible')) arrowTo(link, 0.25 * rem()); });
    for (const type of ['pointerleave', 'blur']) on(link, type, () => { if (!link.matches(':hover')) arrowTo(link, 0); });
  }
  // Every other "go" arrow answers its link or card the same way; one that leaves the site
  // (arrow-up-right) moves up and out.
  for (const svg of all(BOUND.go)) {
    const host = svg.closest('a, button');
    if (!host || host.matches(BOUND.arrow)) continue;
    const out = svg.dataset.icon === 'arrow-up-right';
    const go = (live) => gsap.to(svg, { x: live ? (out ? 0.18 : 0.25) * rem() : 0, y: live && out ? -0.18 * rem() : 0, duration: 0.2, ease: EASE, overwrite: 'auto' });
    on(host, 'pointerenter', () => go(true));
    on(host, 'pointerleave', () => { if (host !== document.activeElement) go(false); });
    on(host, 'focus', () => { if (host.matches(':focus-visible')) go(true); });
    on(host, 'blur', () => { if (!host.matches(':hover')) go(false); });
  }
  const slideTo = (row, x) => gsap.to(row, { paddingLeft: x, duration: 0.2, ease: EASE, overwrite: 'auto' });
  for (const row of all(BOUND.slide)) {
    for (const type of ['pointerenter', 'focus']) on(row, type, () => { if (type === 'pointerenter' || row.matches(':focus-visible')) slideTo(row, 0.75 * rem()); });
    for (const type of ['pointerleave', 'blur']) on(row, type, () => { if (!row.matches(':hover') && document.activeElement !== row) slideTo(row, 0); });
  }

  // The map's choices: the chosen pill slides to the new choice, so the change reads as one control
  // changing its mind rather than two pills swapping colour (0.26 s; the text's colour follows).
  for (const seg of all(BOUND.segment)) {
    const thumb = document.createElement('span');
    thumb.className = 'seg-thumb';
    thumb.setAttribute('aria-hidden', 'true');
    seg.prepend(thumb);
    const place = (animate) => {
      const label = seg.querySelector('input:checked')?.closest('label');
      if (!label) return;
      // In the control's own layout (offsets ignore transforms, such as a settle-in still running).
      const to = { x: label.offsetLeft - thumb.offsetLeft, y: label.offsetTop - thumb.offsetTop, width: label.offsetWidth, height: label.offsetHeight };
      if (animate) gsap.to(thumb, { ...to, duration: 0.26, ease: EASE, overwrite: 'auto' });
      else gsap.set(thumb, to);
    };
    place(false);
    on(seg, 'change', () => place(true));
    const resized = new ResizeObserver(() => place(false));
    resized.observe(seg);
    signal.addEventListener('abort', () => { resized.disconnect(); thumb.remove(); });
  }

  // A disclosure opens and closes in place: its own height eases (0.24 s open, 0.2 s closed), so the
  // rows under it glide instead of jumping, and its contents fade in under the summary. Opened from
  // elsewhere (find in page, an address with its #), it simply opens.
  for (const details of all(BOUND.disclosure)) {
    const summary = details.querySelector(':scope > summary');
    if (!summary) continue;
    let running = null;
    const done = () => { gsap.set(details, { clearProps: 'height,overflow' }); running = null; };
    on(summary, 'click', (event) => {
      event.preventDefault();
      if (running) running.kill();
      const from = details.offsetHeight;
      if (!details.open) {
        details.open = true;
        running = gsap.timeline({ onComplete: done })
          .fromTo(details, { height: from, overflow: 'clip' }, { height: 'auto', duration: 0.24, ease: EASE })
          .fromTo(details.querySelectorAll(':scope > :not(summary)'), { opacity: 0, y: -4 }, { opacity: 1, y: 0, duration: 0.24, ease: EASE, clearProps: 'opacity,transform' }, 0);
      } else {
        details.open = false;
        const to = details.offsetHeight;
        details.open = true;
        running = gsap.fromTo(details, { height: from, overflow: 'clip' }, { height: to, duration: 0.2, ease: 'power2.inOut', onComplete: () => { details.open = false; done(); } });
      }
    });
  }

  // The small screens' menu: the panel grows out of its button (0.2 s) and closes at once.
  for (const menu of all(BOUND.menu)) {
    on(menu, 'toggle', () => {
      const panel = menu.querySelector('.menu-panel');
      if (menu.open && panel) gsap.fromTo(panel, { opacity: 0, scale: 0.97, y: -6 }, { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: EASE, overwrite: 'auto', transformOrigin: '100% 0', clearProps: 'opacity,transform' });
    });
  }

  // A section's opening settles in the first time it comes into view: 10px and a fade, half a second.
  for (const el of all(BOUND.settle)) {
    if (inView(el)) continue;
    gsap.from(el, { opacity: 0, y: 10, duration: 0.5, ease: EASE, scrollTrigger: once(el, 'top 92%') });
  }

  // Transform lives: the testing model as what it is, a sample's way from a finger prick to a family in
  // care. The Testing rule draws left to right as steps one to four arrive along it; then the Care rule,
  // and steps five and six, whose tiles turn green as care takes over. Where the rules are not shown
  // (narrower than 75rem) the steps simply arrive in reading order.
  for (const model of all(BOUND.model)) {
    if (inView(model, 0.15)) continue;
    const test = model.querySelector('.model-phase-test');
    const care = model.querySelector('.model-phase-care');
    const steps = [...model.querySelectorAll('.model-step')];
    const testing = steps.filter((step) => !step.classList.contains('is-care'));
    const caring = steps.filter((step) => step.classList.contains('is-care'));
    const ruled = test && getComputedStyle(test).display !== 'none';
    model.classList.add('is-waiting');
    const tl = gsap.timeline({ scrollTrigger: once(model) });
    if (ruled) tl.fromTo(test, { '--draw': 0 }, { '--draw': 1, duration: 0.7, ease: PATH }, 0);
    tl.from(testing, { opacity: 0, x: -10, duration: 0.5, ease: EASE, stagger: STAGGER }, 0);
    if (ruled) tl.fromTo(care, { '--draw': 0 }, { '--draw': 1, duration: 0.4, ease: PATH }, 0.7);
    tl.call(() => model.classList.remove('is-waiting'), null, 0.75);
    tl.from(caring, { opacity: 0, x: -10, duration: 0.5, ease: EASE, stagger: STAGGER }, 0.7);
  }

  // What changes when you switch: the LitLife™ column fills down the table, cell after cell, so the eye
  // travels down our answers after the conventional ones (on a phone, where each row is a card, each
  // answer fills from the left). The words stay legible all the while: only the ground moves.
  for (const table of all(BOUND.compare)) {
    const cells = [...table.querySelectorAll('.is-ours')];
    if (!cells.length || inView(table, 0.25)) continue;
    const tl = gsap.timeline({ scrollTrigger: once(table) });
    cells.forEach((cell, i) => tl.fromTo(cell, { '--fill': '0%' }, { '--fill': '100%', duration: 0.24, ease: 'none' }, i * 0.12));
  }

  // Develop a test: the line from a brief to a rollout draws down from node to node, each step arriving
  // as the line reaches it.
  for (const path of all(BOUND.develop)) {
    if (inView(path, 0.15)) continue;
    const items = [...path.children];
    const beat = 0.18;
    const tl = gsap.timeline({ scrollTrigger: once(path) });
    items.forEach((li, i) => {
      const node = li.querySelector('.develop-node');
      const words = [...li.children].filter((child) => child !== node);
      if (node) tl.from(node, { opacity: 0, scale: 0.85, duration: 0.5, ease: EASE }, i * beat);
      tl.from(words, { opacity: 0, x: 10, duration: 0.5, ease: EASE }, i * beat);
      if (i < items.length - 1) tl.fromTo(li, { '--line': 0 }, { '--line': 1, duration: beat, ease: PATH }, i * beat + 0.1);
    });
  }

  // Steps that are a sequence (the method on Technology; how a partnership starts on Partners) arrive
  // in their order, along the line they are read in; a step's rule draws as it comes.
  for (const list of all(BOUND.sequence)) {
    if (inView(list, 0.15)) continue;
    const items = [...list.children];
    const tl = gsap.timeline({ scrollTrigger: once(list) });
    tl.from(items, { opacity: 0, x: -10, duration: 0.5, ease: EASE, stagger: STAGGER }, 0);
    if (list.matches('.start-steps')) tl.fromTo(items, { '--draw': 0 }, { '--draw': 1, duration: 0.5, ease: PATH, stagger: STAGGER }, 0);
  }

  // A jump within the page lands with a ring: after the scroll, the card asked for is outlined in life
  // green, which fades (1.2 s), so the eye finds it among its neighbours. Whole sections are not ringed.
  const ring = (target) => {
    if (!target || target.matches('section, main, body') || target.offsetHeight > window.innerHeight * 0.7) return;
    target.classList.add('is-landing');
    gsap.fromTo(target, { outlineColor: 'rgba(110, 231, 183, 1)' }, { outlineColor: 'rgba(110, 231, 183, 0)', duration: 1.2, delay: 0.1, ease: PATH, onComplete: () => { target.classList.remove('is-landing'); gsap.set(target, { clearProps: 'outlineColor' }); } });
  };
  const afterScroll = (fn) => {
    let called = false;
    const go = () => { if (!called) { called = true; fn(); } };
    window.addEventListener('scrollend', go, { once: true, signal });
    setTimeout(go, 900);
  };
  on(document, 'click', (event) => {
    const link = event.target.closest('a[href*="#"]');
    if (!link || link.origin !== location.origin || link.pathname !== location.pathname || !link.hash) return;
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (target) afterScroll(() => ring(target));
  });
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) afterScroll(() => ring(target));
  }

  // The type arrives after the page binds; measure the triggers again once it has.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!signal.aborted) ScrollTrigger.refresh(); });

  // The gel: the first time it comes into view, every band travels down from its well to where it
  // settles, all lanes at once, the way DNA moves through a gel; then the page reads it (main.js,
  // initGel, on ll:gel-ran). Without script, or with less motion, the bands simply stand where they read.
  const gel = document.querySelector(BOUND.gel);
  if (gel && !inView(gel, 0.3)) {
    const bands = [...gel.querySelectorAll(BOUND.gelBand)];
    const tl = gsap.timeline({ scrollTrigger: { trigger: gel, start: 'top 75%', once: true, invalidateOnRefresh: true }, onComplete: () => gel.dispatchEvent(new CustomEvent('ll:gel-ran')) });
    bands.forEach((band) => {
      const track = band.parentElement;
      // Every lane runs at once, as a gel does; the travel is measured when it plays.
      tl.from(band, { y: () => -(band.offsetTop - track.clientHeight * 0.06), opacity: 0.2, scaleX: 0.85, duration: 1.4, ease: 'power3.out' }, 0);
    });
  }
}

// The partners along the opening's foot (25 October 2026, evening, after gsap.com's "Brands using
// GSAP"): a row of cells whose logos change in place, cell after cell, every few seconds, so that all
// of them are seen in turn without a strip sliding past. Each new logo rises into its cell as the old
// one leaves upwards, like a roll. It holds while pointed at or focused, stops and starts on a tap, a click, Enter or
// Space (WCAG 2.2.2), and waits while it is off screen or the tab is hidden. With less motion asked
// for, this is never bound: the first logos simply stand.
const LOGO_EVERY = 4200; // ms between waves
function cycleLogos(signal) {
  const band = document.querySelector(BOUND.logos);
  const list = band && band.querySelector('[data-logo-pool]');
  const group = band && band.querySelector('.logo-cycle');
  if (!list || !group) return;
  let pool;
  try { pool = JSON.parse(list.dataset.logoPool); } catch { return; }
  const cells = [...list.children];
  if (pool.length <= cells.length) return;
  const images = pool.map((logo) => {
    const img = new Image(logo.w, logo.h);
    img.decoding = 'async';
    img.alt = '';
    img.src = logo.src;
    img.style.setProperty('--ratio', logo.ratio);
    return img;
  });
  let offset = 0;
  let timer = 0;
  let stopped = false;
  let held = false;
  let seen = true;
  const live = () => cells.filter((cell) => cell.offsetParent !== null);
  // A wave: each cell rolls its logo up and out as the next rolls up into its place, both by the cell's
  // own height and on one curve, so the two never meet; cell after cell. The next logos are decoded
  // first, so no cell is ever empty.
  const wave = async () => {
    const shown = live();
    const n = shown.length;
    if (!n) return;
    offset = (offset + n) % pool.length;
    const nexts = shown.map((cell, j) => images[(offset + j) % pool.length].cloneNode());
    await Promise.all(nexts.map((img) => (img.decode ? img.decode().catch(() => {}) : null)));
    if (signal.aborted) return;
    shown.forEach((cell, j) => {
      const next = nexts[j];
      const old = [...cell.children];
      const height = cell.clientHeight;
      cell.appendChild(next);
      const roll = { duration: 0.75, delay: j * 0.09, ease: 'power3.inOut' };
      gsap.fromTo(next, { y: height, opacity: 0 }, { y: 0, opacity: 1, ...roll, clearProps: 'transform' });
      gsap.to(old, { y: -height, opacity: 0, ...roll, onComplete: () => old.forEach((img) => img.remove()) });
    });
  };
  const schedule = () => {
    clearTimeout(timer);
    if (stopped || held || !seen || document.hidden) return;
    timer = setTimeout(() => { wave(); schedule(); }, LOGO_EVERY);
  };
  const on = (el, type, fn) => el.addEventListener(type, fn, { signal });
  on(group, 'pointerenter', (event) => { if (event.pointerType === 'mouse') { held = true; schedule(); } });
  on(group, 'pointerleave', (event) => { if (event.pointerType === 'mouse') { held = false; schedule(); } });
  on(group, 'focusin', () => { held = true; schedule(); });
  on(group, 'focusout', (event) => { if (!group.contains(event.relatedTarget)) { held = false; schedule(); } });
  const status = band.querySelector('[data-logo-status]');
  const toggle = () => {
    stopped = !stopped;
    group.classList.toggle('is-paused', stopped);
    if (status) status.textContent = stopped ? 'Stopped.' : 'Changing again.';
    schedule();
  };
  on(group, 'click', (event) => { if (!event.target.closest('a')) toggle(); });
  on(group, 'keydown', (event) => { if ((event.key === 'Enter' || event.key === ' ') && event.target === group) { event.preventDefault(); toggle(); } });
  on(document, 'visibilitychange', schedule);
  const watch = new IntersectionObserver((entries) => { seen = entries[entries.length - 1].isIntersecting; schedule(); });
  watch.observe(group);
  signal.addEventListener('abort', () => { clearTimeout(timer); watch.disconnect(); });
  schedule();
}

// Binds the page's motion, unless the reader has asked for less, and undoes it all if they ask later
// (gsap.matchMedia reverts every tween and trigger made under it).
export function initMotion({ reduced } = {}) {
  if (reduced === true) return;
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const stop = new AbortController();
    document.documentElement.classList.add('motion-on');
    bind(stop.signal);
    cycleLogos(stop.signal);
    return () => {
      stop.abort();
      document.documentElement.classList.remove('motion-on');
    };
  });
}
