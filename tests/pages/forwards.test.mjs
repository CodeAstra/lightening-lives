// Old addresses (content file 3.3; 25 October 2026): GitHub Pages cannot send a 301, so each old
// address is a forwarding page. It moves the visitor on at once, keeping any #part (a person's slug on
// the old team page), names the new page as canonical, keeps itself out of search and the sitemap, and
// shows a link for anyone without script. An old .php address is a folder of that name.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import * as cheerio from 'cheerio';
import { load } from '../helpers.mjs';

const FORWARDS = JSON.parse(readFileSync('src/site/_data/forwards.json', 'utf8'));
const file = (from) => `dist/${from.replace(/^\//, '').replace(/\/?$/, '/')}index.html`;

test('every old address has a forwarding page that moves on at once, with a link for anyone without script', () => {
  assert.ok(FORWARDS.length >= 15);
  for (const { from, to, name } of FORWARDS) {
    assert.ok(existsSync(file(from)), from);
    const $ = cheerio.load(readFileSync(file(from), 'utf8'));
    assert.equal($('meta[http-equiv=refresh]').attr('content'), `0; url=${to}`, from);
    assert.equal($('link[rel=canonical]').attr('href'), `https://lighteninglives.in${to}`, from);
    assert.equal($('meta[name=robots]').attr('content'), 'noindex', from);
    assert.equal($('body a').attr('href'), to, from);
    assert.equal($('body a').text(), name, from);
    // The script keeps the old address's #part.
    assert.match($('script').html(), /location\.replace\(location\.hash \? base \+ location\.hash : to\)/, from);
    assert.equal($('script').html().match(/var to = ("[^"]*")/)[1], JSON.stringify(to), from);
  }
});

test('each forward lands on a page that exists, and on its anchor when it names one', () => {
  for (const { to } of FORWARDS) {
    const [path, hash] = to.split('#');
    const $ = load(path);
    assert.ok($('main').length, to);
    if (hash) assert.equal($(`[id="${hash}"]`).length, 1, to);
  }
});

test('the forwarding pages are not in the sitemap', () => {
  const map = readFileSync('dist/sitemap.xml', 'utf8');
  for (const { from } of FORWARDS) assert.ok(!map.includes(`<loc>https://lighteninglives.in${from}`), from);
});

test('the old routes that moved on 25 October 2026 forward to their new places', () => {
  const to = Object.fromEntries(FORWARDS.map((f) => [f.from, f.to]));
  assert.equal(to['/partnerships/'], '/partners/');
  assert.equal(to['/programmes/'], '/partners/#programmes');
  assert.equal(to['/partnerships.php'], '/partners/');
  assert.equal(to['/impact-stories.php'], '/our-work/');
  assert.ok(!existsSync('src/site/partnerships.njk') && !existsSync('src/site/programmes.njk'));
});
