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

test('the page: title, the kicker, the client\'s heading and lead, the proof', () => {
  assert.equal($('title').text(), 'Genetic screening programmes in India | Lightening Lives');
  assert.equal(text('h1'), 'In the field. In the lab. In print.');
  assert.equal(text('h1 .h-mark'), 'In print.');
  assert.equal(text('.page-open .lead'), "Public health screening across India's underserved belts, hands-on laboratory capacity building, and the scientific evidence behind every LitLife™ test.");
  // The client review's opening label (U2, 5 November 2026).
  assert.deepEqual($('.page-open .label').map((i, e) => $(e).text().trim()).get(), ['Real-world impact and evidence']);
  assert.equal($('.page-open .page-proof li').length, 3);
});

test('the sections, in order: the pillars, recent work, the field, media (with the patents); the news only with articles', () => {
  const NEWS = JSON.parse(readFileSync('src/site/_data/news.json', 'utf8'));
  const expected = ['pillars', 'recent', 'field', 'media', ...(NEWS.articles.length ? ['news'] : [])];
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), expected);
  assert.equal($('.map-band, [data-filter]').length, 0, 'not the home page\'s map, and no filter');
});

test('the pillars: four ways the work happens, each with who it serves or where it runs', () => {
  assert.equal(text('#pillars h2'), 'Where screening has to reach. How we make it happen.');
  assert.equal(text('#pillars .lead'), 'From remote tribal villages to district molecular laboratories, we work with state governments, CSR foundations, NGOs and hospitals to build self-sustaining diagnostic programmes.');
  const cards = $('#pillars .pillar');
  assert.equal(cards.length, 4);
  assert.deepEqual(cards.map((i, c) => text($(c).find('h3'))).get(), [
    'In the community: screening and awareness camps',
    'Newborn screening: a diagnosis from day one',
    'In the laboratory: high-throughput batches',
    'Capacity building: training the people who run the tests',
  ]);
  assert.deepEqual(cards.map((i, c) => text($(c).find('.pillar-tag'))).get(), [
    'For public health and CSR programmes', 'Rajasthan and Maharashtra', 'For hospitals and diagnostic chains', 'For laboratories and health workers',
  ]);
  cards.each((i, c) => assert.ok(text($(c).find('.pillar-body')).length > 40));
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
  assert.equal(text('#field .lead'), 'Fifteen sites in nine states and Delhi, concentrated in the sickle cell and thalassaemia belt of central and western India, where the need is greatest.');
  assert.equal($('#field path.fm-state.is-worked').length, states.length);
  assert.equal($('#field [data-fm-pin]').length, states.length + 1, 'and Odisha, the field account');
  assert.equal($('#field [data-fm-pick]').length, states.length + 1);
  const panels = $('#field [data-fm-panel]');
  assert.equal(panels.length, states.length + 1);
  assert.deepEqual(panels.map((i, p) => text($(p).find('h3'))).get().sort(), [...states, 'Odisha'].sort());
  const total = panels.find('.fm-sites').map((i, s) => Number(text(s).split(' ')[0])).get().reduce((a, b) => a + b, 0);
  assert.equal(total, SITES.length);
  assert.equal($('#field [data-fm-panel]:not([hidden])').length, states.length + 1, 'every panel shows without script');
  assert.ok($('#fm-panel-MP a[href="#a-diagnosis-at-three"]').length, 'an account links from its state');
  assert.match(text('#field .sites-thanks'), /^Source: Lightening Lives field records, 15 sites in 9 states and Delhi\./);
});

test('Odisha: a field account, selectable, marked apart, with no site count and not in the totals', () => {
  assert.ok(!SITES.some((s) => s.state === 'Odisha'), 'no site of ours in Odisha');
  assert.equal($('#field path.fm-state.is-account[data-fm-state="OD"]').length, 1);
  assert.equal($('#field path.fm-state.is-worked[data-fm-state="OD"]').length, 0);
  assert.equal($('#field [data-fm-pin="OD"].is-account').length, 1);
  assert.equal($('#field [data-fm-pick="OD"] small').length, 0, 'no count on its chip');
  const panel = $('#fm-panel-OD');
  assert.equal(panel.find('.fm-sites').length, 0);
  assert.equal(text(panel.find('.fm-account')), 'Field account');
  assert.equal(panel.find('a[href="#what-had-been-called-fate"]').length, 1);
  assert.deepEqual($('#field .fieldmap-key li').map((i, l) => text(l)).get(), ['Screening sites', 'Field account']);
});

test('three accounts from the field, each by its state, with what it led to in sight', () => {
  assert.equal(text('#field #accounts'), 'From the field: when molecular diagnosis reaches the last mile');
  assert.equal(text('#field .field-note'), 'Three accounts from our work with partner institutions, NGOs and government programmes. Identifying details have been left out to protect families.');
  const stories = $('#field .field-story');
  assert.deepEqual(stories.map((i, s) => $(s).attr('id')).get(), ['a-diagnosis-at-three', 'two-carriers-one-plan', 'what-had-been-called-fate']);
  assert.deepEqual(stories.map((i, s) => text($(s).find('h4'))).get(), ['A diagnosis at three, ending the poor-nutrition myth', 'Two carriers, one plan', 'Replacing fate with informed prevention']);
  assert.deepEqual(stories.map((i, s) => $(s).find('.field-impact li').length).get(), [3, 2, 2]);
  assert.equal($('#field details').length, 0, 'nothing to open');
  assert.equal(text($(stories[0]).find('.field-impact li').first()), 'Ended the search for a diagnosis, and treatments that could not help.');
});

test('conferences, publications and media: the poster, the patents, the channel, in one section', () => {
  assert.equal(text('#media h2'), 'Conferences, publications and media. Where we have presented.');
  assert.equal(text('#media .lead'), 'Our patents, our poster to the haematology community, and talks and films from our work.');
  assert.equal($('#media #patents li').length, 3);
  assert.equal(text('#media .patents-line'), 'Protecting the direct dried blood spot amplification chemistry behind our tests.');
  assert.equal($('#media .media-poster').attr('href'), '/assets/img/work-fullposter-v9-1920.webp');
  assert.equal(text('#media .media-body > p'), 'How LitLife™ meets the WHO REASSURED criteria, the six-step dried blood spot workflow, a comparison with HPLC and point-of-care tests, our hub-and-spoke model and field results from 15 sites.');
  assert.equal(text('#media .media-act .btn'), 'See the full poster');
  const yt = $('#media a[href="https://www.youtube.com/@LighteningLivesLLP"]');
  assert.equal(yt.length, 1);
  assert.equal(text(yt.find('small')), 'Talks by Dr. Giriraj Ratan Chandak, laboratory demonstrations of the LitLife™ workflow, and films from our screening camps.');
  assert.equal($('#publications').length, 0);
});

test('the closing: programmes and CSR in the form, laboratories as the second door', () => {
  assert.equal(text('.closing h2'), 'Want to run a screening programme like these?');
  assert.equal(text('.closing .lead'), 'Tell us the community, the condition and the institution you work with. We help design, run and monitor it.');
  assert.equal(text('.closing .btn-solid'), 'Talk to us about programmes and CSR');
  assert.equal($('.closing .btn-solid').attr('data-enquire'), 'programme');
  assert.equal(text('.closing .btn-line'), 'Partner with us: labs and hospitals');
});

test('places by state (R2): no town in the words; nothing unconfirmed renders', () => {
  const words = $('main').clone().find('img, script').remove().end().text();
  assert.doesNotMatch(words, TOWNS);
  assert.doesNotMatch(words, /\[|CONFIRM|TBC/);
  assert.doesNotMatch(`${$('title').text()} ${$('meta[name=description]').attr('content')}`, TOWNS);
});
