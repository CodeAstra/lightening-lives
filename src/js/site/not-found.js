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
