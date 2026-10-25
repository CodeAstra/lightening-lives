// The Not found page (content 5.18) and the old site's addresses (3.3). Each old address has a
// forwarding page; should a visitor still reach 404.html at one (a typo in its case, say), this script
// adds one line above the page's links naming the new page.
// Nothing else changes, and without script the page's six links are the whole behaviour.

import FORWARDS from '../../site/_data/forwards.json' with { type: 'json' };

// The old site's .php addresses and where each now lives: the same list the forwarding pages are made
// from (src/site/_data/forwards.json), so the two cannot disagree.
export const OLD = new Map(FORWARDS.filter((f) => f.from.endsWith('.php')).map((f) => [f.from, { href: f.to, name: f.name }]));

// The new page for an old address, read without regard to case or a trailing slash; or null.
export function suggest(pathname) {
  const key = pathname.toLowerCase().replace(/(.)\/+$/, '$1');
  return OLD.get(key) ?? null;
}

// The line the page gains for an old address, as HTML (the names and addresses are this file's own);
// empty for any other address.
export function suggestion(pathname) {
  const to = suggest(pathname);
  return to ? `<p class="not-found-hint">You may be looking for: <a class="link" href="${to.href}">${to.name}</a></p>` : '';
}

// On the Not found page ([data-not-found]), the line goes above the list of links.
export function initNotFound(doc = document, pathname = location.pathname) {
  const list = doc.querySelector('[data-not-found] ul');
  const line = suggestion(pathname);
  if (list && line) list.insertAdjacentHTML('beforebegin', line);
}

// The gel on the Not found page: the visitor's address printed as the sample, and "Run it again",
// which restarts the bands' own CSS animations. The result never changes; the line under it does,
// and stays on the last once it is reached.
export const RERUNS = [
  'Result: no band where the page should be.',
  'Run 2: still no band. The test is not the problem.',
  'Run 3: not detected, and confirmed. One test, no second needed.',
  'Run 4: the gel is sure. One of the links is a better bet.',
];

export function initLostGel(doc = document, pathname = location.pathname) {
  const gel = doc.querySelector('[data-lost-gel]');
  if (!gel) return;
  const sample = gel.querySelector('[data-lost-sample]');
  if (sample && pathname && pathname !== '/404.html') {
    let shown = pathname;
    try { shown = decodeURI(pathname); } catch { /* a malformed address is shown as it came */ }
    sample.querySelector('code').textContent = shown;
    sample.hidden = false;
  }
  const button = gel.querySelector('[data-lost-rerun]');
  const line = gel.querySelector('[data-lost-line]');
  const slab = gel.querySelector('.gel-slab');
  if (!button || !line || !slab || typeof slab.getAnimations !== 'function') return;
  let run = 0;
  button.hidden = false;
  button.addEventListener('click', () => {
    run = Math.min(run + 1, RERUNS.length - 1);
    const moving = slab.getAnimations({ subtree: true });
    for (const a of moving) { a.cancel(); a.play(); }
    // With reduced motion nothing moves, so the new line shows at once; otherwise once the stamp lands.
    const wait = moving.length ? 1500 : 0;
    window.setTimeout(() => { line.textContent = RERUNS[run]; }, wait);
  });
}
