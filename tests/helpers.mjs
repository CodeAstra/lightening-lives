// Helpers for tests that read the built site in dist/.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { load as cheerio } from 'cheerio';

// '/technology/' is served by dist/technology/index.html; '/404.html' by dist/404.html.
export const file = (url) => (url.endsWith('.html') ? `dist${url}` : `dist${url}index.html`);

// The built page at a URL such as '/', '/technology/' or '/404.html', as a cheerio $.
export const load = (url) => cheerio(readFileSync(file(url), 'utf8'));

// Whether a page has been built yet (later phases add most of them).
export const exists = (url) => existsSync(file(url));

// Every built page's URL. 404.html is not an index.html, so it is left out unless asked for. The
// preview cards under /_social/ are not pages of the site (Task 3.3), so they are never read.
export function pages({ include404 = false } = {}) {
  const urls = readdirSync('dist', { recursive: true })
    .filter((f) => f === 'index.html' || f.endsWith('/index.html'))
    .filter((f) => !f.startsWith('_social/'))
    .map((f) => `/${f.slice(0, -'index.html'.length)}`)
    .sort();
  if (include404 && existsSync('dist/404.html')) urls.push('/404.html');
  return urls;
}
