// Every internal link and file reference resolves to a file in dist/, and every #anchor exists on the
// page it points into. Absolute addresses on the site's own domain (canonical, og:url, og:image) count
// as internal.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { load as cheerio } from 'cheerio';
import { load, pages } from './helpers.mjs';

const DOMAIN = 'https://lighteninglives.in';

// Addresses the site already links to whose pages or files later phases build (content 3.1). Each
// leaves this list in the task that builds it; the last test fails if one is built and still listed.
const PENDING = new Map([
  ['/solutions/sickle-cell-anaemia/', 'Phase 5, Task 5.1'],
  ['/solutions/thalassaemia/', 'Phase 5, Task 5.2'],
  ['/solutions/spinal-muscular-atrophy/', 'Phase 5, Task 5.3'],
  ['/solutions/develop-a-test/', 'Phase 5, Task 5.4'],
  ['/privacy/', 'Phase 6, Task 6.1'],
  ['/terms/', 'Phase 6, Task 6.1'],
]);

// The file in dist/ that serves an address's path, or null.
function served(pathname) {
  const file = `dist${decodeURIComponent(pathname)}`;
  if (pathname.endsWith('/')) return existsSync(`${file}index.html`) ? `${file}index.html` : null;
  if (existsSync(file) && statSync(file).isFile()) return file;
  return null;
}

// Every address on a page that points into the site, with where it was found.
function references($, url) {
  const found = [];
  const add = (raw, where) => raw.trim() && found.push({ raw: raw.trim(), where });
  $('a[href], link[href]').each((i, el) => add(el.attribs.href, `<${el.name} href>`));
  $('img[src], script[src], source[src], iframe[src], video[src], audio[src]').each((i, el) => add(el.attribs.src, `<${el.name} src>`));
  // srcset alone is a list: "a.png 640w, b.png 1280w".
  $('img[srcset], source[srcset]').each((i, el) => {
    for (const candidate of el.attribs.srcset.split(',')) add(candidate.trim().split(/\s+/)[0], `<${el.name} srcset>`);
  });
  $('meta[property="og:url"], meta[property="og:image"]').each((i, el) => add(el.attribs.content, `<meta ${el.attribs.property}>`));
  // The structured data's own addresses on the site (its url and logo).
  const walk = (value) => {
    if (typeof value === 'string') { if (value.startsWith(DOMAIN)) add(value, '<script ld+json>'); }
    else if (value && typeof value === 'object') Object.values(value).forEach(walk);
  };
  $('script[type="application/ld+json"]').each((i, el) => walk(JSON.parse($(el).text())));
  return found
    .filter(({ raw }) => !/^(mailto|tel|data|javascript):/i.test(raw))
    .filter(({ raw }) => !/^(https?:)?\/\//i.test(raw) || raw.startsWith(DOMAIN))
    .map(({ raw, where }) => ({ raw, where, address: new URL(raw, DOMAIN + url) }));
}

test('every internal link and file reference resolves', () => {
  for (const url of pages({ include404: true })) {
    const $ = load(url);
    for (const { raw, where, address } of references($, url)) {
      if (PENDING.has(address.pathname)) continue;
      assert.ok(served(address.pathname), `${url}: ${where} "${raw}" has no file in dist/`);
    }
  }
});

test('every #anchor exists on the page it points into', () => {
  for (const url of pages({ include404: true })) {
    const $ = load(url);
    for (const { raw, where, address } of references($, url)) {
      if (!address.hash) continue;
      assert.notEqual(address.hash, '#', `${url}: ${where} "${raw}" points nowhere`);
      const id = decodeURIComponent(address.hash.slice(1));
      const samePage = address.pathname === new URL(url, DOMAIN).pathname;
      if (!samePage && (PENDING.has(address.pathname) || !served(address.pathname))) continue;
      const target = samePage ? $ : load(address.pathname);
      assert.equal(target(`[id="${id}"]`).length, 1, `${url}: ${where} "${raw}" has no element with id "${id}"`);
    }
  }
});

test('nothing on the pending list has been built yet', () => {
  for (const [address, task] of PENDING) assert.equal(served(address), null, `${address} exists now: take it off the pending list (${task})`);
});

test('an address with a comma in it stays whole; only srcset is a comma-separated list', () => {
  const $ = cheerio(`
    <a href="mailto:admin@lighteninglives.in?subject=Thalassaemia,%20SMA">Ask</a>
    <img src="data:image/svg+xml;utf8,<svg/>" alt="">
    <img src="/x/a,b.png" alt="">
    <img srcset="/a.png 640w, /b.png 1280w" alt="">`);
  assert.deepEqual(references($, '/').map((r) => r.address.pathname), ['/x/a,b.png', '/a.png', '/b.png']);
});

test('every logo file the site ships is used by a page, the stylesheet or the manifest', () => {
  const used = new Set();
  for (const url of pages({ include404: true })) for (const { address } of references(load(url), url)) used.add(address.pathname);
  for (const { src } of JSON.parse(readFileSync('dist/site.webmanifest', 'utf8')).icons) used.add(src);
  for (const [, url] of readFileSync('dist/assets/css/site.css', 'utf8').matchAll(/url\(["']?([^)"']+)/g)) used.add(new URL(url, `${DOMAIN}/assets/css/`).pathname);
  const shipped = readdirSync('dist/assets/logo', { recursive: true }).map((f) => `/assets/logo/${f}`).filter((p) => statSync(`dist${p}`).isFile());
  assert.deepEqual(shipped.filter((p) => !used.has(p)), []);
});

