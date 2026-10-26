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

test('recent work: the photographs as a mosaic, all at once, a story under some, and the representative note', () => {
  // 26 October 2026 (the user: the slideshow's progress, pause and arrows "seems old and not modern"):
  // every photograph is on the page together, in the data's order; nothing moves by itself, so there
  // is nothing to pause and nothing to step through.
  const G = JSON.parse(readFileSync('src/site/_data/gallery.json', 'utf8'));
  const tiles = $('#recent [data-mosaic-tile]');
  assert.equal(tiles.length, G.slides.length);
  assert.deepEqual(tiles.map((i, t) => $(t).find('img').attr('src').replace(/^\/assets\/img\/|-\d+\.webp$/g, '')).get(), G.slides.map((s) => s.image));
  assert.equal($('#recent .tile-story').length, G.slides.filter((s) => s.title).length);
  assert.equal($('#recent .tile-photo .tile-caption').length, G.slides.filter((s) => !s.title).length);
  assert.equal($('#recent .tile-pic .tile-caption, #recent .tile-pic .tile-words').length, 0, 'words under the photograph, never over it');
  $('#recent .tile-words a').each((i, a) => assert.ok($(a).attr('href')));
  assert.ok(G.slides[0].title, 'the feature tells a story');
  assert.equal($('#recent [data-gallery], #recent [aria-roledescription="slide"], #recent [data-gallery-dot]').length, 0, 'no slideshow and no controls');
  // In sets of six (many more photographs are to come): slot by place in the set, every other set
  // mirrored; a short last set an even row. Six now: one full set.
  assert.deepEqual(tiles.map((i, t) => (t.attribs.class.match(/slot-[\w]+/) || [''])[0]).get(), ['slot-1', 'slot-2', 'slot-3', 'slot-4', 'slot-5', 'slot-6']);
  // "Show more photographs" only past twelve.
  assert.equal($('#recent [data-mosaic-more]').length, G.slides.length > 12 ? 1 : 0);
  // Each opens large in the viewer: a link to its largest file, with its size and every width.
  tiles.each((i, t) => {
    const a = $(t).find('a.tile-pic');
    assert.match(a.attr('href'), /^\/assets\/img\/[\w-]+-\d+\.webp$/);
    assert.ok(Number(a.attr('data-pswp-width')) >= 1280 && Number(a.attr('data-pswp-height')) > 0, a.attr('href'));
    assert.match(a.attr('data-pswp-srcset'), /640w/);
  });
  const mainjs = readFileSync('src/js/site/main.js', 'utf8');
  assert.match(mainjs, /import\('photoswipe\/lightbox'\)/, 'the viewer is fetched only where it is needed');
  assert.match(mainjs, /pswpModule: \(\) => import\('photoswipe'\)/);
  assert.match(mainjs, /textContent = (kind|title|body)/, 'captions are set as text, never as HTML');
  // No line under the photographs saying they are representative (the user, 26 October 2026); their
  // credits stay in the footer.
  assert.equal($('#recent .gallery-note').length, 0);
  assert.doesNotMatch(text('#recent'), /Representative photographs/);
  assert.doesNotMatch(readFileSync('src/js/site/main.js', 'utf8'), /initGallery/);
  // They develop once (motion.js), marked before the first paint so none is shown and then hidden;
  // the stylesheet uncovers them itself if the script never runs.
  assert.match(readFileSync('src/js/site/motion.js', 'utf8'), /ScrollTrigger\.batch\(rest/);
  const head = readFileSync('dist/our-work/index.html', 'utf8').split('</head>')[0];
  assert.match(head, /mosaic-pending/);
  assert.match(head, /prefers-reduced-motion: reduce/);
  assert.match(readFileSync('src/css/site.css', 'utf8'), /html\.mosaic-pending \.mosaic \.tile-pic \{[^}]*animation: mosaic-fallback/);
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
