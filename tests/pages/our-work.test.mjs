// Our work (content file 5.7; since 25 October 2026 the reviewer's site map, 3.1): the field programmes
// by state with accounts from the field, the patents, and conferences and media. No filter, no entry
// pages, no map (one map on the site, the home page's), and no photos until consent is on record.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const $ = load('/our-work/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const SITES = JSON.parse(readFileSync('src/site/_data/sites.json', 'utf8'));
const TOWNS = /Udaipur|Bhopal|Jamshedpur|Bilaspur|Nandurbar|Nagpur|Dhule|Valsad|Chandrapur|Mumbai|Kothagudem|Mysore|Gudalur/;

test('the page: title, a two-tone heading, no label, the proof', () => {
  assert.equal($('title').text(), 'Our work: programmes, patents and media | Lightening Lives');
  assert.equal(text('h1'), 'In the field, in the lab, in print.');
  assert.equal($('.page-open .label').length, 0);
  assert.equal($('.page-open .page-proof li').length, 3);
});

test('the sections, in order: recent work, the field, patents, media; the news only with articles', () => {
  const NEWS = JSON.parse(readFileSync('src/site/_data/news.json', 'utf8'));
  const expected = ['recent', 'field', 'publications', ...(NEWS.articles.length ? ['news'] : []), 'media'];
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), expected);
  assert.equal($('.map-band, [data-filter]').length, 0, 'not the home page\'s map, and no filter');
});

test('recent work: the photographs as slides, a story on some, controls, and the representative note', () => {
  const G = JSON.parse(readFileSync('src/site/_data/gallery.json', 'utf8'));
  const slides = $('#recent [data-gallery-slide]');
  assert.equal(slides.length, G.slides.length);
  assert.equal($('#recent .gallery-story').length, G.slides.filter((s) => s.title).length);
  $('#recent .gallery-story a').each((i, a) => assert.ok($(a).attr('href')));
  assert.equal($('#recent [data-gallery-dot]').length, G.slides.length);
  assert.equal($('#recent [data-gallery-toggle]').attr('aria-label'), 'Pause the photos');
  assert.equal(text('#recent .gallery-note'), G.note);
  const main = readFileSync('src/js/site/main.js', 'utf8');
  assert.match(main, /function initGallery\(\)/);
  assert.match(main, /let stopped = reducedMotion\.matches;/, 'never moves by itself for reduced motion');
});

test('the field map: every worked state drawn and pinned, a chip and a panel for each, in the page without script', () => {
  const states = [...new Set(SITES.map((s) => s.state))];
  assert.equal($('#field path.fm-state.is-worked').length, states.length);
  assert.equal($('#field [data-fm-pin]').length, states.length);
  assert.equal($('#field [data-fm-pick]').length, states.length);
  const panels = $('#field [data-fm-panel]');
  assert.equal(panels.length, states.length);
  assert.deepEqual(panels.map((i, p) => text($(p).find('h3'))).get().sort(), states.sort());
  const total = panels.map((i, p) => Number(text($(p).find('.fm-sites')).split(' ')[0])).get().reduce((a, b) => a + b, 0);
  assert.equal(total, SITES.length);
  assert.equal($('#field [data-fm-panel]:not([hidden])').length, states.length, 'every panel shows without script');
  assert.ok($('#fm-panel-MP a[href="#a-diagnosis-at-three"]').length, 'an account links from its state');
  assert.match(text('#field .sites-thanks'), /^Source: Lightening Lives field records/);
});

test('three accounts from the field, each by its state, the second half opening in place', () => {
  const stories = $('#field .field-story');
  assert.equal(stories.length, 3);
  stories.each((i, s) => {
    assert.ok($(s).attr('id'));
    assert.equal($(s).find('details.field-more').length, 1);
    assert.ok(!$(s).find('details').is('[open]'));
  });
});

test('patents and media: three patent lines, the poster first, opened full size, and the channel', () => {
  assert.equal($('#patents li').length, 3);
  assert.equal($('#media .media-poster').attr('href'), '/assets/img/work-fullposter-v9-1920.webp');
  assert.equal($('#media a[href="https://www.youtube.com/@LighteningLivesLLP"]').length, 1);
});

test('places by state (R2): no town in the words; nothing unconfirmed renders', () => {
  const words = $('main').clone().find('img, script').remove().end().text();
  assert.doesNotMatch(words, TOWNS);
  assert.doesNotMatch(words, /\[|CONFIRM|TBC/);
  assert.doesNotMatch(`${$('title').text()} ${$('meta[name=description]').attr('content')}`, TOWNS);
});
