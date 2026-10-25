// Motion outside the film (DESIGN.md, Motion; plan, Task 2.1). The film is the one orchestrated
// moment; everything here moves only in answer to the reader, briefly, and starts from wherever the
// thing is on screen, so it can be taken up again at any instant (overwrite: 'auto'). The keyboard
// gets what the pointer gets. A reader who has asked for less motion gets none of it: the
// stylesheet's states alone. The one scroll-linked motion is a section's opening settling in, once,
// the first time it comes into view (decision D1, B); nothing is scrubbed and nothing here loops (the
// partners sliding along the opening's foot are the stylesheet's one loop, with a button that stops it).
//
// What moves, and what does not: colour (hover fills, REASSURED's green) stays the stylesheet's
// short transitions; GSAP moves things (a press, the link's arrow, the contact row, the settle-ins), and the stylesheet's own movement for those is switched off while it does
// (html.motion-on).

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Every element initMotion answers, by what it does (tests/motion.test.mjs pins this list).
export const BOUND = {
  press: '.btn, .nav-link, .tag, .test-row, .action',
  arrow: '.link',
  slide: '.actions a',
  settle: 'main > section.section > .wrap > :first-child, main > section.vision > .wrap',
  segment: '.seg',
  disclosure: 'details.map-sources, details.about, .faq details, details.credits',
  menu: 'details[data-menu]',
  gel: '[data-gel]',
  gelLane: '.lane',
  gelBand: '.lane-band',
};

const EASE = 'power2.out'; // decelerates, no overshoot: nothing here was thrown
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

  // A disclosure's contents ease in under its summary as it opens (0.2 s); it closes at once. Its
  // plus turns into a minus in the stylesheet (html.motion-on), as the open state changes.
  for (const details of all(BOUND.disclosure)) {
    on(details, 'toggle', () => {
      if (details.open) gsap.fromTo(details.querySelectorAll(':scope > :not(summary)'), { opacity: 0, y: -4 }, { opacity: 1, y: 0, duration: 0.2, ease: EASE, overwrite: 'auto', clearProps: 'opacity,transform' });
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
    gsap.from(el, { opacity: 0, y: 10, duration: 0.5, ease: EASE, scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  }

  // The gel: the first time it comes into view, each band travels down from its well to where it
  // settles, the way DNA moves through a gel, lane by lane (the home page's one authored moment
  // outside the film). Without script, or with less motion, the bands simply stand where they read.
  const gel = document.querySelector(BOUND.gel);
  if (gel) {
    const lanes = [...gel.querySelectorAll(BOUND.gelLane)];
    const bands = [...gel.querySelectorAll(BOUND.gelBand)];
    const tl = gsap.timeline({ scrollTrigger: { trigger: gel, start: 'top 75%', once: true } });
    bands.forEach((band) => {
      const lane = lanes.indexOf(band.closest(BOUND.gelLane));
      const track = band.parentElement;
      const travel = band.offsetTop - track.clientHeight * 0.06;
      tl.from(band, { y: -travel, opacity: 0.2, scaleX: 0.85, duration: 1.4, ease: 'power3.out' }, lane * 0.09);
    });
  }
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
    return () => {
      stop.abort();
      document.documentElement.classList.remove('motion-on');
    };
  });
}
