// Phase 3, Task 3.3: a preview card for every page. Each page's og:image is its own 1200 x 630 PNG,
// made by scripts/social.mjs from the page's card at /_social/<slug>/; the home page keeps the
// opening at the film's end (social.png). The card pages are for the script only: noindex, outside
// the collections, the sitemap and pages().
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { load as cheerio } from 'cheerio';
import Eleventy from '@11ty/eleventy';
import { load, pages } from './helpers.mjs';

const DOMAIN = 'https://lighteninglives.in';
const slug = (url) => url.replace(/^\/|\/$/g, '').replace(/\//g, '-');
const png = (file) => {
  const b = readFileSync(file);
  assert.equal(b.toString('ascii', 1, 4), 'PNG', `${file} is not a PNG`);
  return [b.readUInt32BE(16), b.readUInt32BE(20)];
};

test('every page names its own preview card, a 1200 x 630 PNG under 300 KB on the domain', () => {
  for (const url of pages()) {
    const $ = load(url);
    const image = $('meta[property="og:image"]').attr('content');
    const expected = url === '/' ? '/assets/img/social.png' : `/assets/img/social/${slug(url)}.png`;
    assert.equal(image, DOMAIN + expected, url);
    const file = `dist${expected}`;
    assert.ok(existsSync(file), `${url}: ${file} is missing (run npm run social)`);
    assert.deepEqual(png(file), [1200, 630], file);
    assert.ok(statSync(file).size <= 300 * 1024, `${file}: ${statSync(file).size} bytes`);
    assert.equal($('meta[property="og:image:width"]').attr('content'), '1200');
    assert.equal($('meta[property="og:image:height"]').attr('content'), '630');
  }
});

test('every card PNG belongs to a page that is built', () => {
  if (!existsSync('src/assets/img/social')) return;
  const built = new Set(pages().filter((u) => u !== '/').map(slug));
  for (const f of readdirSync('src/assets/img/social').filter((f) => f.endsWith('.png'))) {
    assert.ok(built.has(f.replace(/\.png$/, '')), `src/assets/img/social/${f} has no page`);
  }
});

test('the card pages are noindex and appear in neither pages(), the sitemap nor the robots file', () => {
  assert.ok(!pages().some((u) => u.startsWith('/_social/')), 'pages() reads a card page');
  const cards = existsSync('dist/_social') ? readdirSync('dist/_social') : [];
  for (const card of cards) {
    const $ = cheerio(readFileSync(`dist/_social/${card}/index.html`, 'utf8'));
    assert.match($('meta[name="robots"]').attr('content') ?? '', /noindex/, card);
  }
  // A card for every page but the home page.
  assert.deepEqual(cards.sort(), pages().filter((u) => u !== '/').map(slug).sort());
  if (existsSync('dist/sitemap.xml')) assert.doesNotMatch(readFileSync('dist/sitemap.xml', 'utf8'), /_social/);
  if (existsSync('dist/robots.txt')) assert.match(readFileSync('dist/robots.txt', 'utf8'), /^Disallow: \/_social\/$/m);
});

// Fixture pages through the real config, layout and data: the card for an inner page, a nested one,
// and none for the home page or a draft.
let dir;
let built;
let broken;
before(async () => {
  try {
    dir = mkdtempSync(path.join(tmpdir(), 'll-social-'));
    const input = path.join(dir, 'site');
    // The layout, partials, data and the card template; not the site's own pages, whose addresses
    // the fixtures share.
    for (const part of ['_includes', '_data', '_social']) cpSync(`src/site/${part}`, path.join(input, part), { recursive: true });
    cpSync('src/js/map', path.join(dir, 'js', 'map'), { recursive: true });
    writeFileSync(path.join(input, 'index.njk'), `---
title: Home | Lightening Lives
description: A fixture home page, which opens on the film and keeps the film's preview card.
film: true
---
<section class="hero"><h1>Genetic testing from a spot of blood on a card.</h1></section>
`);
    writeFileSync(path.join(input, 'technology.njk'), `---
title: Technology | Lightening Lives
description: A fixture inner page with a label, an h1 and a shorter title for its preview card.
label: Technology
h1: Genetic testing that starts with a spot of blood on a card
og_title: Genetic testing from a spot of blood
lead: A lead.
---
`);
    writeFileSync(path.join(input, 'sickle.njk'), `---
title: Sickle cell anaemia | Lightening Lives
description: A fixture test page, two levels down, with no og_title, so its card takes the h1.
permalink: /solutions/sickle-cell-anaemia/
label: Haemoglobinopathies
h1: Sickle cell anaemia
lead: A lead.
---
`);
    writeFileSync(path.join(input, 'dmd.njk'), `---
title: DMD | Lightening Lives
description: A fixture draft page, which is not built and so has no card.
h1: Duchenne muscular dystrophy
lead: A lead.
draft: true
---
`);
    const eleventy = new Eleventy(input, path.join(dir, 'out'), { configPath: 'eleventy.config.mjs', quietMode: true, source: 'cli' });
    built = Object.fromEntries((await eleventy.toJSON()).map((p) => [p.url, cheerio(p.content)]));
  } catch (error) { broken = error; }
});
after(() => rmSync(dir, { recursive: true, force: true }));
const fixture = (url) => { if (broken) throw broken; return built[url]; };

test('an inner page points at its card, and its card page shows its label and title on the brand', () => {
  assert.equal(fixture('/technology/')('meta[property="og:image"]').attr('content'), `${DOMAIN}/assets/img/social/technology.png`);
  const $ = fixture('/_social/technology/');
  assert.ok($, 'no card page for /technology/');
  assert.match($('meta[name="robots"]').attr('content'), /noindex/);
  assert.equal($('.social-card .label').text().trim(), 'Technology');
  assert.equal($('.social-card h1').text().trim(), 'Genetic testing from a spot of blood'); // og_title over h1
  assert.equal($('.social-card img[src="/assets/logo/lightening-lives-emblem.svg"]').length, 1);
  assert.match($('.social-card').text(), /Lightening Lives/);
  assert.match($('.social-card').text(), /lighteninglives\.in/);
  assert.equal($('link[rel=stylesheet][href="/assets/css/site.css"]').length, 1);
  // The card has no header, footer or script of the site's own.
  assert.equal($('.site-header, .site-footer, script[src]').length, 0);
});

test('a nested page\'s card takes its h1 and a slug from its whole path', () => {
  assert.equal(fixture('/solutions/sickle-cell-anaemia/')('meta[property="og:image"]').attr('content'), `${DOMAIN}/assets/img/social/solutions-sickle-cell-anaemia.png`);
  assert.equal(fixture('/_social/solutions-sickle-cell-anaemia/')('.social-card h1').text().trim(), 'Sickle cell anaemia');
});

test('the home page keeps the film\'s card, and no card page is made for it, a draft or a card', () => {
  assert.equal(fixture('/')('meta[property="og:image"]').attr('content'), `${DOMAIN}/assets/img/social.png`);
  const cards = Object.keys(built ?? {}).filter((u) => u.startsWith('/_social/')).sort();
  assert.deepEqual(cards, ['/_social/solutions-sickle-cell-anaemia/', '/_social/technology/']);
});
