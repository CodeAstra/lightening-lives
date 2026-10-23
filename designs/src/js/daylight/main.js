// Design 02 · Daylight: page behaviour. Bundled to assets/js/daylight.js.
// Everything here is progressive enhancement; the page reads and navigates without it.

window.__daylight = true; // tells the inline head script that the bundle arrived

const root = document.documentElement;
const motionQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const motionOk = () => motionQuery.matches;

/* ---------- Disclosures: the Tests dropdown and the small-screen menu ---------- */

function disclosure(button, panel, { closeOnLinkClick = true } = {}) {
  if (!button || !panel) return;
  const scope = button.closest('[data-dropdown]') || button.closest('header') || document.body;

  const isOpen = () => button.getAttribute('aria-expanded') === 'true';
  const set = (open) => {
    button.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  };

  button.addEventListener('click', () => set(!isOpen()));

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !isOpen()) return;
    const hadFocus = panel.contains(document.activeElement) || document.activeElement === button;
    set(false);
    if (hadFocus) button.focus();
  });

  // Outside click or tap
  document.addEventListener('pointerdown', (event) => {
    if (isOpen() && !panel.contains(event.target) && !button.contains(event.target)) set(false);
  });

  // Keyboard focus leaving the button + panel pair
  scope.addEventListener('focusout', (event) => {
    const next = event.relatedTarget;
    if (isOpen() && next && !panel.contains(next) && !button.contains(next)) set(false);
  });

  if (closeOnLinkClick) {
    panel.addEventListener('click', (event) => {
      if (event.target.closest('a')) set(false);
    });
  }

  return { set, isOpen };
}

function initMenus() {
  document.querySelectorAll('[data-dropdown]').forEach((wrap) => {
    const button = wrap.querySelector('button[aria-controls]');
    disclosure(button, button && document.getElementById(button.getAttribute('aria-controls')));
  });

  const menuButton = document.querySelector('[data-menu-button]');
  const menu = menuButton && document.getElementById(menuButton.getAttribute('aria-controls'));
  const mobile = disclosure(menuButton, menu);
  if (mobile) {
    const label = () => { menuButton.textContent = mobile.isOpen() ? 'Close' : 'Menu'; };
    new MutationObserver(label).observe(menuButton, { attributes: true, attributeFilter: ['aria-expanded'] });
    // The panel only exists below the desktop breakpoint; close it if the window grows past that.
    window.matchMedia('(min-width: 80rem)').addEventListener('change', (event) => { if (event.matches) mobile.set(false); });
  }
}

/* ---------- Photos: keep the striped backdrop if a file is missing ---------- */

function initPhotos() {
  document.querySelectorAll('img[data-photo]').forEach((img) => {
    const missing = () => img.classList.add('is-missing');
    if (img.complete && img.naturalWidth === 0 && img.currentSrc) missing();
    img.addEventListener('error', missing);
    img.addEventListener('load', () => img.classList.remove('is-missing'));
  });
}

/* ---------- Flagship card: the blood spots soak in once, when the card first scrolls into view ---------- */

function initSoak() {
  const cards = [...document.querySelectorAll('[data-dbs]')];
  const show = (el) => el.classList.add('is-in');

  if (!root.classList.contains('motion') || !('IntersectionObserver' in window)) {
    cards.forEach(show);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      show(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  cards.forEach((el) => observer.observe(el));

  // Printing, or a late switch to reduced motion, must never leave the spots hidden.
  const showAll = () => cards.forEach(show);
  window.addEventListener('beforeprint', showAll);
  motionQuery.addEventListener('change', () => {
    if (!motionOk()) { root.classList.remove('motion'); showAll(); }
  });
}

/* ---------- Eased pointer follower shared by the parallax and the card tilt ---------- */

function follower(apply, ease = 0.08) {
  let targetX = 0, targetY = 0, x = 0, y = 0, frame = 0;
  const step = () => {
    x += (targetX - x) * ease;
    y += (targetY - y) * ease;
    apply(x, y);
    frame = Math.abs(targetX - x) > 0.0005 || Math.abs(targetY - y) > 0.0005 ? requestAnimationFrame(step) : 0;
  };
  return (nextX, nextY) => {
    targetX = nextX; targetY = nextY;
    if (!frame) frame = requestAnimationFrame(step);
  };
}

/* ---------- Hero: the sun and its dotted orbits drift a few pixels against the pointer ---------- */

function initHeroParallax() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;
  const layers = [...hero.querySelectorAll('[data-depth]')].map((el) => ({ el, depth: Number(el.dataset.depth) }));
  if (!layers.length) return;

  const move = follower((x, y) => {
    layers.forEach(({ el, depth }) => {
      el.style.translate = `${(-x * depth).toFixed(2)}px ${(-y * depth).toFixed(2)}px`;
    });
  }, 0.06);

  // Listen on the window: the header sits above the hero and would otherwise swallow the pointer.
  window.addEventListener('pointermove', (event) => {
    if (!motionOk() || !finePointer.matches || event.pointerType === 'touch') return;
    const box = hero.getBoundingClientRect();
    if (box.bottom < 0 || event.clientY > box.bottom) { move(0, 0); return; }
    move((event.clientX - box.left) / box.width * 2 - 1, (event.clientY - box.top) / box.height * 2 - 1);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => move(0, 0));
}

/* ---------- Flagship card: the dried blood spot card tilts toward the pointer ---------- */

function initCardTilt() {
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    const tilt = card.querySelector('.dbs-tilt');
    if (!tilt) return;
    const move = follower((x, y) => {
      tilt.style.setProperty('--ry', `${(x * 16).toFixed(2)}deg`);
      tilt.style.setProperty('--rx', `${(-y * 11).toFixed(2)}deg`);
    }, 0.1);

    card.addEventListener('pointermove', (event) => {
      if (!motionOk() || !finePointer.matches || event.pointerType === 'touch') return;
      const box = card.getBoundingClientRect();
      move((event.clientX - box.left) / box.width * 2 - 1, (event.clientY - box.top) / box.height * 2 - 1);
    }, { passive: true });
    card.addEventListener('pointerleave', () => move(0, 0));
  });
}

function init() {
  initMenus();
  initPhotos();
  initSoak();
  initHeroParallax();
  initCardTilt();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
