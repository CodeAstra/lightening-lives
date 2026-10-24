// Phase 5, Task 5.5: Duchenne and limb-girdle muscular dystrophy (content file 5.7 and 5.8) as drafts.
// Both files carry draft: true, so neither is in dist/; publishing is a one-flag change. The second
// half flips the flag in a temporary build (the real files, copied to a temp folder through the real
// config, as test-layout.test.mjs does) and checks each renders as ruling 9 says. Nothing reaches
// dist/ or src/site.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { load } from 'cheerio';
import Eleventy from '@11ty/eleventy';
import { exists } from '../helpers.mjs';

const PAGES = {
  '/solutions/duchenne-muscular-dystrophy/': {
    file: 'duchenne-muscular-dystrophy', h1: 'Duchenne muscular dystrophy', slug: 'duchenne-muscular-dystrophy',
    name: 'Duchenne muscular dystrophy', why: 'Why an earlier diagnosis matters', closingH2: 'Need DMD testing for your patients?',
    solid: 'Ask about DMD testing', paragraphs: 1, whyParagraphs: 1,
    family: [['Spinal muscular atrophy', '/solutions/spinal-muscular-atrophy/'], ['Limb-girdle muscular dystrophy', '/solutions/develop-a-test/#musculopathies'], ['Develop a test with us', '/solutions/develop-a-test/']],
  },
  '/solutions/limb-girdle-muscular-dystrophy/': {
    file: 'limb-girdle-muscular-dystrophy', h1: 'Limb-girdle muscular dystrophy', slug: 'limb-girdle-muscular-dystrophy',
    name: 'Limb-girdle muscular dystrophy', why: 'Why the subtype matters', closingH2: 'Seeing patients with limb-girdle weakness?',
    solid: 'Ask about LGMD testing', paragraphs: 2, whyParagraphs: 2,
    family: [['Spinal muscular atrophy', '/solutions/spinal-muscular-atrophy/'], ['Duchenne muscular dystrophy', '/solutions/develop-a-test/#musculopathies'], ['Develop a test with us', '/solutions/develop-a-test/']],
  },
};

let dir;
let built;

before(async () => {
  dir = mkdtempSync(path.join(tmpdir(), 'll-drafts-'));
  const input = path.join(dir, 'site');
  cpSync('src/site/_includes', path.join(input, '_includes'), { recursive: true });
  cpSync('src/site/_data', path.join(input, '_data'), { recursive: true });
  cpSync('src/js/map', path.join(dir, 'js', 'map'), { recursive: true });
  for (const { file } of Object.values(PAGES)) {
    const source = readFileSync(`src/site/solutions/${file}.njk`, 'utf8');
    writeFileSync(path.join(input, `${file}.njk`), source.replace(/^draft: true\n/m, 'draft: false\n'));
  }
  const eleventy = new Eleventy(input, path.join(dir, 'out'), { configPath: 'eleventy.config.mjs', quietMode: true, source: 'cli' });
  const pages = await eleventy.toJSON();
  built = Object.fromEntries(pages.filter((p) => p.url.endsWith('/')).map((p) => [p.url, load(p.content)]));
});

after(() => rmSync(dir, { recursive: true, force: true }));

const text = ($, el) => $(el).text().replace(/\s+/g, ' ').trim();

test('both files are drafts and neither route is in dist/', () => {
  for (const [url, { file }] of Object.entries(PAGES)) {
    assert.match(readFileSync(`src/site/solutions/${file}.njk`, 'utf8'), /^draft: true$/m, file);
    assert.ok(!exists(url), `${url} must not be built`);
    assert.ok(!existsSync(`dist${url}`), `dist${url} must not exist`);
  }
});

test('flipping draft to false in a temporary build renders each page', () => {
  for (const [url, p] of Object.entries(PAGES)) {
    const $ = built[`/${p.file}/`];
    assert.ok($, `${p.file} renders with draft: false`);
    assert.equal($('h1').length, 1);
    assert.equal(text($, 'h1'), p.h1);
    assert.equal(text($, '.page-open .label'), 'Musculopathy');
    assert.equal(text($, '#the-condition h2'), 'The condition');
    assert.equal($('#the-condition .story p:not(.source)').length, p.paragraphs);
    assert.equal(text($, '#why h2'), p.why);
    assert.equal($('#why .story p').length, p.whyParagraphs);
    assert.equal($('#the-condition .source, #why .source').length, 0, 'bracket-only sources are left out');
    assert.equal($('.page-open .tag').length, 0, 'the bracket-only chip is left out');
    assert.equal(text($, '#who-it-is-for h2'), 'Who it is for');
    assert.equal($('#who-it-is-for li').length, 4);
    assert.deepEqual($('#also-in-this-family a').map((i, a) => [[text($, a), $(a).attr('href')]]).get(), p.family, url);
  }
});

test('"The test" keeps its h2 and shows "Details on request." in place of every row', () => {
  for (const p of Object.values(PAGES)) {
    const $ = built[`/${p.file}/`];
    assert.equal(text($, '#the-test h2'), 'The test');
    assert.equal($('#the-test .rows').length, 0);
    assert.equal($('#the-test h3').length, 0);
    assert.deepEqual($('#the-test p').map((i, e) => text($, e)).get(), ['Details on request.']);
  }
});

test('the closing band: the condition\'s email, Partner with us, and the notice', () => {
  for (const p of Object.values(PAGES)) {
    const $ = built[`/${p.file}/`];
    const band = $('main > section').last();
    assert.equal(text($, band.find('h2')), p.closingH2);
    assert.equal(text($, band.find('.btn-solid')), p.solid);
    assert.equal(band.find('.btn-solid').attr('href'), `mailto:admin@lighteninglives.in?subject=Request%20tests&body=${encodeURIComponent(`Condition: ${p.name}`)}`);
    assert.deepEqual([text($, band.find('.btn-line')), band.find('.btn-line').attr('href')], ['Partner with us', '/partnerships/']);
    assert.equal(band.find('.notice').length, 1);
  }
});

test('no bracket and no kit renders on either page', () => {
  for (const p of Object.values(PAGES)) {
    const $ = built[`/${p.file}/`];
    const main = $('main').clone().find('script').remove().end().text();
    assert.doesNotMatch(main, /\[|\]|TBC/);
    assert.doesNotMatch(main, /\bkits?\b/i);
    assert.equal($('#in-the-box, #where-used, [data-map]').length, 0);
  }
});
