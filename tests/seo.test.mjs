// Phase 6, Task 6.2: robots.txt, the sitemap, canonical links, structured data and llms.txt (content
// 2.9; the plan's launch checklist "Sitemap and robots.txt" and "AI visibility"; decision D5: AI
// crawlers are allowed). The 404 page is not a page of its own address (Task 6.3), so it is in
// neither the sitemap nor llms.txt and has no canonical; the preview cards (/_social/) and the drafts
// are never listed.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { load as cheerio } from 'cheerio';
import { load, pages } from './helpers.mjs';

const DOMAIN = 'https://lighteninglives.in';
const read = (f) => readFileSync(`dist/${f}`, 'utf8');
const DRAFTS = ['/solutions/duchenne-muscular-dystrophy/', '/solutions/limb-girdle-muscular-dystrophy/'];
const jsonld = ($) => $('script[type="application/ld+json"]').map((i, el) => JSON.parse($(el).text())).get();
const ofType = ($, type) => jsonld($).filter((d) => d['@type'] === type);
// Each page's name, as content 3.1's "Page" column gives it: the breadcrumbs' and llms.txt's names
// (a page's title is written for search results: "Diagnostic solutions | Lightening Lives").
const NAMES = {
  '/': 'Home', '/technology/': 'Technology', '/solutions/': 'Solutions',
  '/solutions/sickle-cell-anaemia/': 'Sickle cell anaemia',
  '/solutions/thalassaemia/': 'Thalassaemia',
  '/solutions/spinal-muscular-atrophy/': 'Spinal muscular atrophy',
  '/our-work/': 'Our work',
  '/about/': 'About', '/partners/': 'Partners', '/contact/': 'Contact',
  '/privacy/': 'Privacy', '/terms/': 'Terms',
};

test('robots.txt allows everyone, keeps out only the preview cards, and names the sitemap', () => {
  const robots = read('robots.txt');
  const lines = robots.split('\n').map((l) => l.trim()).filter(Boolean);
  assert.deepEqual(lines, ['User-agent: *', 'Allow: /', 'Disallow: /_social/', `Sitemap: ${DOMAIN}/sitemap.xml`]);
  for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) assert.ok(!robots.includes(bot), bot);
});

test('every built page is one of content 3.1\'s, by name', () => {
  assert.deepEqual(pages().sort(), Object.keys(NAMES).sort());
});

test('the sitemap lists every built page once, with the domain and a lastmod, and nothing else', () => {
  const $ = cheerio(read('sitemap.xml'), { xml: true });
  const locs = $('url > loc').map((i, el) => $(el).text()).get();
  assert.deepEqual([...locs].sort(), pages().map((u) => DOMAIN + u).sort());
  assert.equal(new Set(locs).size, locs.length);
  $('url').each((i, el) => assert.match($(el).find('lastmod').text(), /^\d{4}-\d{2}-\d{2}$/, $(el).find('loc').text()));
  for (const bad of [...DRAFTS, '/_social/', '/404.html']) assert.ok(!locs.some((l) => l.includes(bad)), bad);
});

test('every page\'s canonical is its sitemap entry; the 404 page has none and is noindex', () => {
  const locs = new Set(cheerio(read('sitemap.xml'), { xml: true })('loc').map((i, el) => cheerio(el).text()).get());
  for (const url of pages()) {
    const $ = load(url);
    assert.equal($('link[rel=canonical]').length, 1, url);
    assert.ok(locs.has($('link[rel=canonical]').attr('href')), url);
  }
  if (existsSync('dist/404.html')) {
    const $ = load('/404.html');
    assert.equal($('link[rel=canonical]').length, 0);
    assert.equal($('meta[name=robots]').attr('content'), 'noindex');
  }
});

test('structured data: one Organization on every page; the home page adds one WebSite; Solutions one FAQPage', () => {
  for (const url of pages()) assert.equal(ofType(load(url), 'Organization').length, 1, url);
  const home = load('/');
  assert.equal(ofType(home, 'WebSite').length, 1);
  assert.deepEqual(ofType(home, 'WebSite')[0], { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Lightening Lives', url: DOMAIN, inLanguage: 'en-IN' });
  assert.equal(ofType(home, 'BreadcrumbList').length, 0);
  assert.equal(ofType(load('/solutions/'), 'FAQPage').length, 1);
  for (const url of pages().filter((u) => u !== '/')) assert.equal(ofType(load(url), 'WebSite').length, 0, url);
});

test('every inner page has one BreadcrumbList from Home to the page, through its parents', () => {
  for (const url of pages().filter((u) => u !== '/')) {
    const $ = load(url);
    const lists = ofType($, 'BreadcrumbList');
    assert.equal(lists.length, 1, url);
    const items = lists[0].itemListElement;
    assert.deepEqual(items.map((i) => i.position), items.map((i, n) => n + 1), url);
    assert.deepEqual(items[0], { '@type': 'ListItem', position: 1, name: 'Home', item: `${DOMAIN}/` }, url);
    assert.equal(items.at(-1).item, $('link[rel=canonical]').attr('href'), url);
    assert.deepEqual(items.map((i) => i.name), items.map((i) => NAMES[new URL(i.item).pathname]), url);
    // The parents are the page's own path, one step at a time.
    const steps = url.split('/').filter(Boolean);
    assert.deepEqual(items.map((i) => i.item), ['/', ...steps.map((s, n) => `/${steps.slice(0, n + 1).join('/')}/`)].map((p) => DOMAIN + p), url);
  }
  const sca = ofType(load('/solutions/sickle-cell-anaemia/'), 'BreadcrumbList')[0].itemListElement.map((i) => i.name);
  assert.deepEqual(sca, ['Home', 'Solutions', 'Sickle cell anaemia']);
});

test('llms.txt: the company in one paragraph, every public page, then the facts and the notice', () => {
  const site = JSON.parse(readFileSync('src/site/_data/site.json', 'utf8'));
  const llms = read('llms.txt');
  const blocks = llms.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  assert.equal(blocks[0], '# Lightening Lives');
  assert.equal(blocks[1], `> ${site.about}`);
  assert.equal(blocks[2], site.search.worksWith);
  assert.equal(blocks[3], '## Pages');
  const pageLines = blocks[4].split('\n');
  assert.deepEqual(pageLines.map((l) => l.match(/\]\((.+?)\)/)?.[1]).sort(), pages().map((u) => DOMAIN + u).sort());
  for (const line of pageLines) {
    const m = line.match(/^- \[(.+?)\]\((.+?)\): (.+)$/);
    assert.ok(m, line);
    const $ = load(new URL(m[2]).pathname);
    assert.equal(m[1], NAMES[new URL(m[2]).pathname]);
    assert.equal(m[3], $('meta[name=description]').attr('content'));
  }
  assert.equal(blocks[5], '## Facts');
  const facts = blocks.slice(6).join('\n');
  // The proof (proof.njk's four items; About shows the company at a glance since 25 October 2026).
  for (const head of ['- Approved by ICMR', '- Patented in India and Japan', '- Working with CSIR-CCMB', '- Proven at 15 sites']) {
    assert.ok(facts.split('\n').some((l) => l.startsWith(`${head}: `)), head);
  }
  assert.ok(!/&#|&amp;|&quot;/.test(llms), 'llms.txt is text, not escaped HTML');
  assert.ok(facts.includes(site.notice.body));
  for (const bad of [...DRAFTS, '/_social/', '404']) assert.ok(!llms.includes(bad), bad);
  assert.ok(!/\[(TBC|PLACEHOLDER)/.test(llms));
});

test('every page\'s main is in headed sections, and no heading is set as a picture', () => {
  for (const url of pages({ include404: true })) {
    const $ = load(url);
    const sections = $('main section[aria-labelledby]');
    assert.ok(sections.length >= 1, url);
    sections.each((i, s) => {
      for (const id of $(s).attr('aria-labelledby').split(' ')) assert.equal($(`[id="${id}"]`).length, 1, `${url} #${id}`);
    });
    assert.equal($('main :is(h1, h2, h3, h4) img').length, 0, url);
  }
});
