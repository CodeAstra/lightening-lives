// The Not found page (content 5.18) and the current site's old addresses (3.4). Hosting is static, so
// the server cannot redirect: GitHub Pages serves 404.html at whatever address was asked for, and this
// script, finding an old .php address there, adds one line above the page's links naming the new page.
// Nothing else changes, and without script the page's six links are the whole behaviour.

const TEAM = (slug, name) => ({ href: `/about/team/#${slug}`, name: `${name}, on our team page` });

export const OLD = new Map([
  ['/index.php', { href: '/', name: 'Home' }],
  ['/about-us.php', { href: '/about/', name: 'About' }],
  ['/services.php', { href: '/solutions/', name: 'Solutions' }],
  ['/impact-stories.php', { href: '/programmes/#from-the-field', name: 'From the field, on our Programmes page' }],
  ['/our-team.php', { href: '/about/team/', name: 'Team' }],
  ['/abhishek-chandak-details.php', TEAM('abhishek-chandak', 'Mr. Abhishek Chandak')],
  ['/manisha-arumalla-details.php', TEAM('manisha-arumalla', 'Ms. Manisha Arumalla')],
  ['/punyasri-pskdb-details.php', TEAM('punyasri-pskdb', 'Ms. Punyasri PSKDB')],
  ['/mehraj-begum-details.php', TEAM('mehraj-begum', 'Ms. Mehraj Begum')],
  ['/pruthvi-details.php', TEAM('pruthvi-bellamkonda', 'Mr. Pruthvi Bellamkonda')],
  ['/jyothi-details.php', TEAM('jyothi-vislavath', 'Jyothi Vislavath')],
  ['/partnerships.php', { href: '/partnerships/', name: 'Partnerships' }],
  ['/contact-us.php', { href: '/contact/', name: 'Contact' }],
]);

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
