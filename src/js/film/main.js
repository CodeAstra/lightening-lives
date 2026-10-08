// Design 08 · Film: page behaviour. Bundled to assets/js/film.js.
// Everything here is progressive enhancement: without it the film still plays (with the browser's
// own controls) and the page reads and navigates as plain HTML.

window.__film = true; // tells the inline script beside the video that this bundle arrived

const root = document.documentElement;

function ready(fn) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
  else fn();
}

/* ---------- Small-screen menu: a <details> element, closed again after choosing a link or pressing Escape ---------- */

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
  document.addEventListener('pointerdown', (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
}

/* ---------- The film and the headline it plays ----------
   The film is one file in three parts, joined by short cross-fades, and it loops. Each part has a
   mark under the film (a button) and a line of the headline. While a part plays, yellow travels
   along its line; when the part ends, the yellow leaves the line the way it came in. */

const EXIT = 0.5;        // seconds for the yellow to leave a line once its part is over
const FADE_HALF = 0.2;   // a mark sits half-way through the cross-fade into its part
const LOOP = 16.5;       // the film's length, until the file itself reports it

function initFilm() {
  const frame = document.querySelector('[data-film]');
  const video = frame && frame.querySelector('video');
  const toggle = frame && frame.querySelector('[data-film-toggle]');
  const marks = [...document.querySelectorAll('[data-mark]')];
  const lines = [...document.querySelectorAll('[data-line]')];
  const texts = lines.map((line) => line.querySelector('.line-text'));
  if (!video || !toggle || marks.length === 0 || marks.length !== lines.length) return;

  const starts = marks.map((mark) => Number(mark.dataset.at));
  const stills = marks.map((mark) => mark.dataset.still);
  const wrap = Number(video.dataset.wrap) || LOOP; // from here to the end, the first part is already fading in
  let live = root.classList.contains('film-live'); // may the film start by itself?

  let current = -1;          // the part on screen
  let leaving = -1;          // the part whose line the yellow is still leaving
  let leftAt = 0;
  let started = false;       // has the film ever played?
  let pausedByVisitor = false;
  let pausedOffscreen = false;
  let pendingPart = 0;       // chosen while the film was still a poster
  let onScreen = true;
  let ticking = 0;

  const length = () => (Number.isFinite(video.duration) && video.duration > 0 ? video.duration : LOOP);

  // Which part a moment of the film belongs to, and how far through that part it is.
  function locate(time) {
    let t = time >= wrap ? time - length() : time;
    let index = 0;
    for (let i = 1; i < starts.length; i += 1) if (t >= starts[i]) index = i;
    const from = index === 0 ? wrap - length() : starts[index];
    const to = index + 1 < starts.length ? starts[index + 1] : wrap;
    return { index, progress: Math.min(1, Math.max(0, (t - from) / (to - from))) };
  }

  function flag(index) {
    marks.forEach((button, i) => {
      if (i === index) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }

  function setLine(i, p, q) {
    texts[i].style.setProperty('--p', p.toFixed(4));
    texts[i].style.setProperty('--q', q.toFixed(4));
  }

  // One line fully marked, the others clear: the look of a still, and of a part chosen but not yet playing.
  function showStill(index) {
    current = index;
    leaving = -1;
    texts.forEach((_, i) => setLine(i, i === index ? 1 : 0, 0));
    flag(index);
  }

  function paint(now) {
    const { index, progress } = locate(video.currentTime);
    if (index !== current) {
      if (current !== -1) { leaving = current; leftAt = now; }
      current = index;
      flag(index);
    }
    const exit = leaving === -1 ? 1 : Math.min(1, (now - leftAt) / (EXIT * 1000));
    if (exit >= 1) leaving = -1;
    texts.forEach((_, i) => {
      if (i === index) setLine(i, progress, 0);
      else if (i === leaving) setLine(i, 1, 1 - (1 - exit) ** 3);
      else setLine(i, 0, 0);
    });
  }

  function tick(now) {
    ticking = 0;
    if (!started) return;
    paint(now);
    if (!video.paused || leaving !== -1) ticking = requestAnimationFrame(tick);
  }
  const run = () => { if (!ticking) ticking = requestAnimationFrame(tick); };

  function play() {
    const attempt = video.play();
    // A browser may refuse (low power mode, for one); the button then simply stays on "Play".
    if (attempt && attempt.catch) attempt.catch(() => {});
  }

  function sync() {
    const playing = !video.paused && !video.ended;
    frame.classList.toggle('is-playing', playing);
    toggle.setAttribute('aria-label', playing ? 'Pause the film' : 'Play the film');
    if (playing && !onScreen) {
      pausedOffscreen = true;
      video.pause();
      return;
    }
    if (playing) {
      if (!started) {
        started = true;
        if (pendingPart > 0) video.currentTime = starts[pendingPart] + FADE_HALF;
      }
      run();
    }
  }

  function goTo(index) {
    // Nothing has been played yet and nothing should start by itself: show that part's still.
    if (!started && !live) {
      pendingPart = index;
      video.poster = stills[index];
      showStill(index);
      return;
    }
    // Chosen, not reached: the yellow starts this line afresh and is simply gone from the others.
    current = index;
    leaving = -1;
    flag(index);
    video.currentTime = index === 0 ? 0 : starts[index] + FADE_HALF;
    pausedByVisitor = false;
    play();
    run();
  }

  toggle.addEventListener('click', () => {
    if (video.paused) { pausedByVisitor = false; play(); }
    else { pausedByVisitor = true; video.pause(); }
  });
  marks.forEach((button, i) => button.addEventListener('click', () => goTo(i)));
  // The lines repeat the marks for a mouse or a finger; the marks are the keyboard's way in.
  lines.forEach((line, i) => line.addEventListener('click', () => goTo(i)));

  ['play', 'playing', 'pause', 'ended'].forEach((type) => video.addEventListener(type, sync));
  video.addEventListener('seeked', run);

  // A film that cannot be fetched leaves its poster, and the marks still change the picture.
  const sources = video.querySelectorAll('source');
  const failed = () => {
    frame.classList.add('is-failed');
    started = false;
    live = false;
    showStill(Math.max(0, current));
  };
  if (sources.length) sources[sources.length - 1].addEventListener('error', failed);
  video.addEventListener('error', failed);

  // Out of sight, the film waits; it picks up again unless the visitor paused it.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (!entry.isIntersecting && !video.paused) {
        pausedOffscreen = true;
        video.pause();
      } else if (entry.isIntersecting && pausedOffscreen) {
        pausedOffscreen = false;
        if (!pausedByVisitor) play();
      }
    }, { threshold: 0.15 }).observe(frame);
  }

  video.controls = false;
  video.removeAttribute('controls');
  toggle.hidden = false;
  root.classList.add('film-ready');

  sync();
  if (live) {
    if (video.paused) play();
  } else {
    showStill(0);
  }
}

/* ---------- Header: mark the part of the page being read ---------- */

function initSpy() {
  const links = [...document.querySelectorAll('[data-spy]')];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const byId = new Map(links.map((link) => [link.getAttribute('href').slice(1), link]));
  const inView = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) inView.add(entry.target.id);
      else inView.delete(entry.target.id);
    });
    byId.forEach((link, id) => {
      if (inView.has(id)) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
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

ready(() => {
  initMenu();
  initFilm();
  initSpy();
  initPhotos();
});
