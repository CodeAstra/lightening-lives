// Every link out of the site (plan Task 6.4 Step 3): each external href and src across dist/, asked
// for with HEAD (then GET where the server refuses HEAD), and any status of 400 or more, or no answer
// in 15 s, reported with the pages that carry it. Exits with 1 if any is broken. Two hosts refuse
// every script and are listed to open by hand instead (BLOCKS).
//   npm run build && node scripts/check-links.mjs
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { load } from 'cheerio';

const files = readdirSync('dist', { recursive: true }).filter((f) => f.endsWith('.html') && !f.startsWith('_social/'));
const where = new Map();
for (const f of files) {
  const $ = load(readFileSync(path.join('dist', f), 'utf8'));
  $('a[href], link[href], script[src], img[src]').each((i, el) => {
    const url = el.attribs.href ?? el.attribs.src;
    if (!/^https?:\/\//.test(url)) return;
    if (el.name === 'link' && /canonical|alternate/.test(el.attribs.rel ?? '')) return; // the site's own address
    if (url.startsWith('https://lighteninglives.in')) return; // the site itself, before it is published
    where.set(url, [...(where.get(url) ?? []), `/${f}`]);
  });
}

const ask = async (url, method) => {
  const res = await fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(15000), headers: { 'user-agent': 'Mozilla/5.0 (link check for lighteninglives.in)' } });
  return res.status;
};
const results = await Promise.all([...where.keys()].map(async (url) => {
  try {
    let status = await ask(url, 'HEAD');
    if (status === 405 || status === 403 || status === 404 || status === 999) status = await ask(url, 'GET');
    return { url, status };
  } catch (error) {
    return { url, status: 0, error: error.name };
  }
}));
// Hosts that refuse any script (LinkedIn's 999 and sign-in wall, Unsplash's bot page) cannot be
// checked this way: they are listed for a person to open, not counted as broken.
const BLOCKS = /^https:\/\/(www\.)?(linkedin\.com|unsplash\.com)\//;
const unchecked = results.filter((r) => BLOCKS.test(r.url) && [401, 403, 429, 999].includes(r.status));
const broken = results.filter((r) => (!r.status || r.status >= 400) && !unchecked.includes(r));
for (const r of results.sort((a, b) => a.url.localeCompare(b.url))) console.log(`${r.status || r.error}\t${r.url}`);
for (const r of broken) console.log(`\nBROKEN ${r.status || r.error} ${r.url}\n  on ${[...new Set(where.get(r.url))].slice(0, 5).join(', ')}${where.get(r.url).length > 5 ? ' …' : ''}`);
for (const r of unchecked) console.log(`\nNOT CHECKABLE (${r.status}: the host refuses scripts; open it by hand) ${r.url}`);
console.log(`\n${results.length} external links, ${broken.length} broken, ${unchecked.length} to open by hand.`);
process.exit(broken.length ? 1 : 0);
