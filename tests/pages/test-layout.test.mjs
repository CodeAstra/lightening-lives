// The test-page layout (content file 5.4.0; since 25 October 2026 the reviewer's seven parts, 3.1):
// the sickle cell, thalassaemia and SMA pages select layout: test-page.njk and differ only in their
// front matter. Read here from the built pages, with one temporary build to show that a page missing a
// required key stops the build.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import Eleventy from '@11ty/eleventy';
import { load } from '../helpers.mjs';

const PAGES = ['/solutions/sickle-cell-anaemia/', '/solutions/thalassaemia/', '/solutions/spinal-muscular-atrophy/'];
const text = ($, el) => $(el).text().replace(/\s+/g, ' ').trim();
const bands = ($) => $('main > section').map((i, s) => $(s).attr('id') ?? ($(s).hasClass('page-open') ? 'opening' : $(s).hasClass('closing') ? 'closing' : '?')).get();

test('the seven parts, in order: opening, about the condition, detects, why, laboratory, evidence, questions, close', () => {
  assert.deepEqual(bands(load(PAGES[0])), ['opening', 'about', 'detects', 'why-dna', 'laboratory', 'evidence', 'questions', 'closing']);
  assert.deepEqual(bands(load(PAGES[1])), ['opening', 'about', 'detects', 'why-dna', 'laboratory', 'evidence', 'questions', 'closing']);
  assert.deepEqual(bands(load(PAGES[2])), ['opening', 'about', 'detects', 'why-dna', 'laboratory', 'evidence', 'questions', 'closing']);
});

test('the opening: a two-tone heading, no label over it, the proof with icons', () => {
  for (const url of PAGES) {
    const $ = load(url);
    assert.equal($('h1 .h-mark').length, 1, url);
    assert.equal($('.page-open .label').length, 0, url);
    assert.equal($('.page-open .page-proof li svg.icon').length, 3, url);
  }
  assert.equal(text(load(PAGES[0]), 'h1'), 'Sickle cell anaemia, screened and confirmed in one test.');
});

test('hide the explanation, never the proof: the condition and the kit open on a click; the rest is in view', () => {
  for (const url of PAGES) {
    const $ = load(url);
    const about = $('#about details.about-condition');
    assert.equal(about.length, 1, url);
    assert.ok(!about.is('[open]'), url);
    assert.equal(text($, about.find('summary')), 'About the condition', url);
    assert.ok(about.find('p').length >= 1, url);
    assert.ok($('#detects .spec li').length >= 2, url);
    assert.ok($('#evidence .spec li').length >= 1, url);
  }
  assert.equal(load(PAGES[0])('#laboratory details.kit-contents li').length, 4);
  assert.equal(load(PAGES[2])('#laboratory details.kit-contents .kit-h').length, 2);
});

test('the bands after the opening alternate paper and stone, paper first; the close is sprout', () => {
  for (const url of PAGES) {
    const $ = load(url);
    const after = $('main > section').not('.page-open, #about, .closing');
    after.each((i, s) => assert.equal($(s).hasClass('bg-paper'), i % 2 === 0, `${url} ${$(s).attr('id')}`));
    assert.ok($('main > section.closing').length === 1, url);
  }
});

test('a row, a question or a line that is only a bracket is left out; a trailing bracket is stripped', () => {
  for (const url of PAGES) {
    const $ = load(url);
    const words = $('main').clone().find('script').remove().end().text();
    assert.doesNotMatch(words, /\[|\]|CONFIRM|TBC|PLACEHOLDER/, url);
  }
  assert.equal(load(PAGES[0])('#questions .faq details').length, 4, 'SCA: the question about the national mission waits');
  assert.equal(load(PAGES[1])('#questions .faq details').length, 2, 'Thalassaemia: two questions wait');
  const sma = load(PAGES[2]);
  assert.equal(sma('#detects .spec li').length, 2, 'SMA: the families row waits');
  assert.equal(sma('#evidence .spec li').length, 1, 'SMA: patents only, until validation is confirmed');
  assert.equal(sma('#evidence .audience-where').length, 0, 'SMA: no states until they are confirmed');
});

test('the conditions a test also reads have their anchors, as Solutions links to them', () => {
  const sca = load(PAGES[0]);
  assert.equal(sca('#sickle-beta h3').text(), 'Sickle-beta thalassaemia');
  assert.equal(sca('#hbd h3').text(), 'HbD');
  const thal = load(PAGES[1]);
  for (const id of ['beta', 'alpha', 'hbe']) assert.equal(thal(`#${id}`).length, 1, id);
});

test('the family and Develop a test, beside the questions; the close asks for the test by email', () => {
  for (const url of PAGES) {
    const $ = load(url);
    const links = $('#questions .family-links a').map((i, a) => $(a).attr('href')).get();
    assert.equal(links.at(-1), '/solutions/#develop', url);
    assert.match($('.closing .btn-solid').attr('href'), /^mailto:admin@lighteninglives\.in\?subject=Request%20tests&body=Condition%3A%20/, url);
    assert.equal($('.closing .btn-line').attr('href'), '/partners/', url);
    assert.equal($('.closing .notice').length, 1, url);
  }
  assert.deepEqual(load(PAGES[2])('#questions .family-links a').map((i, a) => load(PAGES[2])(a).attr('href')).get(), ['/solutions/#dmd', '/solutions/#lgmd', '/solutions/#develop']);
});

test('no map on a test page (one map, on the home page) and no town named', () => {
  for (const url of PAGES) {
    const $ = load(url);
    assert.equal($('.map-band').length, 0, url);
    assert.doesNotMatch($('main').text(), /Nandurbar|Jamshedpur|Gudalur|Udaipur|Bhopal|Bilaspur|Nagpur|Dhule|Valsad|Chandrapur|Mumbai|Kothagudem|Mysore/, url);
  }
});

test('a page missing a required key stops the build, naming the page and the key', async () => {
  const body = readFileSync('src/site/solutions/sickle-cell-anaemia.njk', 'utf8');
  for (const key of ['condition', 'detects', 'lab', 'evidence']) {
    const without = body.replace(new RegExp(`\\n${key}:\\n`), `\nnot${key}:\n`);
    const d = mkdtempSync(path.join(tmpdir(), 'll-test-layout-'));
    let message = null;
    try {
      const input = path.join(d, 'site');
      cpSync('src/site/_includes', path.join(input, '_includes'), { recursive: true });
      cpSync('src/site/_data', path.join(input, '_data'), { recursive: true });
      cpSync('src/js/map', path.join(d, 'js', 'map'), { recursive: true });
      writeFileSync(path.join(input, 'missing.njk'), without);
      await new Eleventy(input, path.join(d, 'out'), { configPath: 'eleventy.config.mjs', quietMode: true, source: 'cli' }).toJSON();
    } catch (e) {
      process.exitCode = 0;
      message = String(e.originalError?.originalError?.message ?? e.originalError?.message ?? e.message) + String(e.message);
    } finally {
      rmSync(d, { recursive: true, force: true });
    }
    assert.ok(message, `${key}: the build stops`);
    assert.match(message, new RegExp(`missing\\.njk.*${key}|${key}.*missing\\.njk`, 's'), key);
  }
});
