// Phase 6, Task 6.5: analytics (decision D5). The site has no consent banner, so analytics, if any,
// must set no cookie and are said on the privacy page (content 5.16). site.json's analytics is null at
// launch: no page carries a third-party script and the privacy page says so. With a Cloudflare Web
// Analytics token (the user's to supply), every page carries the one deferred beacon and the privacy
// page names it. The token case is built from fixtures through the real config, layout and data.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { load as cheerio } from 'cheerio';
import Eleventy from '@11ty/eleventy';
import { load, pages } from './helpers.mjs';

const NONE = 'Analytics. We do not use analytics or advertising trackers.';
const BEACON = 'https://static.cloudflareinsights.com/beacon.min.js';
const site = JSON.parse(readFileSync('src/site/_data/site.json', 'utf8'));

test('at launch: analytics is null in site.json', () => {
  assert.ok('analytics' in site);
  assert.equal(site.analytics, null);
});

test('at launch: no page carries a script from another host', () => {
  for (const url of pages({ include404: true })) {
    load(url)('script[src]').each((i, el) => assert.ok(el.attribs.src.startsWith('/'), `${url}: ${el.attribs.src}`));
  }
});

test('at launch: the privacy page says the site uses no analytics', () => {
  const $ = load('/privacy/');
  assert.equal($('#what-we-collect li').last().text().replace(/\s+/g, ' ').trim(), NONE);
});

// Two fixture builds: one with a token, one with the provider named but no token yet.
const builds = {};
let dir;
before(async () => {
  dir = mkdtempSync(path.join(tmpdir(), 'll-analytics-'));
  for (const [name, analytics] of [['token', { provider: 'cloudflare', token: 'abc123' }], ['empty', { provider: 'cloudflare', token: '' }]]) {
    const input = path.join(dir, name, 'site');
    cpSync('src/site/_includes', path.join(input, '_includes'), { recursive: true });
    cpSync('src/site/_data', path.join(input, '_data'), { recursive: true });
    cpSync('src/site/privacy.njk', path.join(input, 'privacy.njk'));
    cpSync('src/js/map', path.join(dir, name, 'js', 'map'), { recursive: true }); // work.js reads the map's data
    writeFileSync(path.join(input, '_data', 'site.json'), JSON.stringify({ ...site, analytics }));
    writeFileSync(path.join(input, 'inner.njk'), '---\ntitle: Inner | Lightening Lives\ndescription: A fixture page standing in for every page of the site, to carry the beacon.\nh1: Inner\nlead: A lead.\n---\n');
    const out = path.join(dir, name, 'out');
    const eleventy = new Eleventy(input, out, { configPath: 'eleventy.config.mjs', quietMode: true, source: 'cli' });
    await eleventy.write();
    builds[name] = (file) => cheerio(readFileSync(path.join(out, file), 'utf8'));
  }
});
after(() => rmSync(dir, { recursive: true, force: true }));

test('with a token: every page carries exactly one deferred Cloudflare beacon with the token', () => {
  for (const file of ['inner/index.html', 'privacy/index.html']) {
    const $ = builds.token(file);
    const beacons = $(`script[src="${BEACON}"]`);
    assert.equal(beacons.length, 1, file);
    assert.ok(beacons.is('[defer]'), file);
    assert.deepEqual(JSON.parse(beacons.attr('data-cf-beacon')), { token: 'abc123' }, file);
    assert.equal($('script[src]').filter((i, el) => !el.attribs.src.startsWith('/')).length, 1, file);
  }
});

test('with a token: the privacy page names the service and says it sets no cookie', () => {
  const $ = builds.token('privacy/index.html');
  assert.equal($('#what-we-collect li').last().text().replace(/\s+/g, ' ').trim(),
    'Analytics. We use Cloudflare Web Analytics, which counts visits without cookies and without collecting personal information.');
});

test('a provider without a token yet is the same as none', () => {
  for (const file of ['inner/index.html', 'privacy/index.html']) assert.equal(builds.empty(file)(`script[src="${BEACON}"]`).length, 0, file);
  assert.equal(builds.empty('privacy/index.html')('#what-we-collect li').last().text().replace(/\s+/g, ' ').trim(), NONE);
});
