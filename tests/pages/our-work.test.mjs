// Phase 4, Task 4.7: the Our work page (content/website-content.md 5.11, with 6.1, 6.2, 4.5 and 4.6).
// The field record: the fifteen sites of 6.1 grouped by state in 6.2's order (R2), the state naming
// each group with 6.2's line for what was screened there and its towns following as detail; a mark,
// the proof tag, for each screening done and nothing for one not done; no numbers of people. The map
// is the home page's, opened on "Our work". Recent work has no entries until the company sends its
// photographs (Phase 7). The [PLACEHOLDER] under the table, and the guidance on photographs, are not
// rendered.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { LAYERS } from '../../src/js/map/map-layers.js';
import { load } from '../helpers.mjs';

let cached;
const $ = (...args) => (cached ??= load('/our-work/'))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();

const SITES = JSON.parse(readFileSync('src/site/_data/sites.json', 'utf8'));
// 6.2's order, with each state's code in map-layers.js.
const STATES = [['DL', 'Delhi'], ['RJ', 'Rajasthan'], ['MP', 'Madhya Pradesh'], ['JH', 'Jharkhand'], ['CG', 'Chhattisgarh'],
  ['MH', 'Maharashtra'], ['GJ', 'Gujarat'], ['TS', 'Telangana'], ['KA', 'Karnataka'], ['TN', 'Tamil Nadu']];
const COLUMNS = ['sca_pop', 'sca_nb', 'sbt_pop', 'sbt_nb', 'bt_pop'];
const TOWNS = /Udaipur|Bhopal|Jamshedpur|Bilaspur|Nandurbar|Nagpur|Dhule|Valsad|Chandrapur|Mumbai|Kothagudem|Mysore|Gudalur/;

test('title, description, label, h1 and lead (5.11, 4.6)', () => {
  assert.equal($('title').text(), 'Our work: 15 sites across India | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'Where Lightening Lives has run population and newborn screening for sickle cell anaemia and thalassaemia: 15 sites in nine states and Delhi. Photographs from the field and the laboratory.');
  assert.equal(text('.page-open .label'), 'Our work');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'Where we have worked');
  assert.equal(text('.page-open .lead'), 'Population and newborn screening at 15 sites in nine states and Delhi, with government programmes, hospitals and NGOs. We add to this page as the work goes on.');
});

test('the h2s are 5.11\'s, in its order', () => {
  assert.deepEqual(texts('main h2'), ['Population and newborn screening, by state', 'On the map', 'Recent work', 'Planning work like this?']);
});

// By state, never by town (the user, 24 October 2026: "mention the state name rather than city names
// for marketing purpose"): one row for each of the nine states and Delhi, with how many sites it has
// and a mark for each screening done at any of them.
test('the sites: a real table, one row a state, in 6.2\'s order, headed by the state and its number of sites', () => {
  const table = $('#sites table.sites');
  assert.equal(table.length, 1);
  assert.equal(table.attr('aria-labelledby'), $('#sites h2').attr('id'));
  assert.deepEqual(table.find('thead th[scope=colgroup]').map((i, th) => text(th)).get(),
    ['Sickle cell anaemia', 'Sickle-beta thalassaemia', 'Beta thalassaemia']);
  assert.deepEqual(table.find('thead th[scope=col]').map((i, th) => text(th)).get(),
    ['State', 'Population', 'Newborn', 'Population', 'Newborn', 'Population']);
  const rows = table.find('tbody tr');
  assert.equal(rows.length, 10);
  rows.each((i, tr) => {
    const [code, state] = STATES[i];
    const here = SITES.filter((site) => site.state === state);
    assert.equal(text($(tr).find('th[scope=row]')), `${state} ${here.length} ${here.length === 1 ? 'site' : 'sites'}`);
    const cells = $(tr).find('td');
    assert.equal(cells.length, 5, state);
    cells.each((k, td) => assert.equal($(td).find('.tag-proof').length, here.some((site) => site[COLUMNS[k]]) ? 1 : 0, `${state} ${COLUMNS[k]}`));
    assert.ok(!text(tr).includes(LAYERS.work.states[code]), `${state}: 6.2's line stays on the map`);
  });
  assert.equal(SITES.length, 15);
  // No town is named in the table.
  for (const site of SITES) if (site.name !== site.state) assert.ok(!text(table).includes(site.name), site.name);
  // A mark says what it marks to assistive technology (and on a phone, to everyone): its column's name.
  const names = ['Sickle cell anaemia, population', 'Sickle cell anaemia, newborn', 'Sickle-beta thalassaemia, population', 'Sickle-beta thalassaemia, newborn', 'Beta thalassaemia, population'];
  rows.find('td').each((i, td) => {
    const mark = $(td).find('.tag-proof');
    if (mark.length) assert.equal(text(mark), names[$(td).index() - 1]);
  });
  // No numbers of people screened (5.11's note): the only figures are the number of sites a state has.
  assert.doesNotMatch(text(table.clone().find('.sites-count').remove().end()), /\d/);
});

test('the sites: the line under the table, and no placeholder', () => {
  assert.equal(text($('#sites table').nextAll('p').first()), 'We thank the participating individuals, clinicians and frontline health workers at every site.');
  assert.doesNotMatch(text('#sites'), /PLACEHOLDER|month and year|institution worked with/);
});

test('the map: 5.11\'s heading and body, opened on "Our work", a still without script', () => {
  const map = $('#map');
  assert.equal(text(map.find('h2')), 'On the map');
  assert.equal(text(map.find('.map-body')), 'Fifteen sites in nine states and Delhi, from Delhi in the north to Tamil Nadu in the south, and from Gujarat in the west to Jharkhand in the east. Most lie in the sickle cell belt across central India, where the need is greatest.');
  assert.deepEqual(map.find('input[name=map-layer]').map((i, el) => el.attribs.value).get(), ['sickle', 'thal', 'work']);
  assert.equal(map.find('input[name=map-layer]:checked').val(), 'work');
  assert.equal(map.find('input[name=map-layer][checked]').length, 1);
  assert.equal(text(map.find('[data-map-readout]')), LAYERS.work.sentence);
  assert.deepEqual(map.find('[data-map-key] li').map((i, li) => text(li)).get(), LAYERS.work.key.map((entry) => entry.text));
  assert.equal(map.find('img.map-still').attr('src'), '/assets/img/site-map-work.webp');
  assert.match(text(map.find('.sr-only:not(legend)')), /Where we have worked: population and newborn screening at 15 sites in nine states and Delhi: Delhi, Rajasthan, Madhya Pradesh, Jharkhand, Chhattisgarh, Maharashtra, Gujarat, Telangana, Karnataka and Tamil Nadu\.$/);
});

test('recent work: the heading, the five labels, one line and no entries yet', () => {
  const recent = $('main h2').filter((i, h) => text(h) === 'Recent work').closest('section');
  assert.equal(recent.attr('id'), 'recent');
  assert.equal(recent.find('.entries').length, 1);
  assert.deepEqual(recent.find('.entries-kinds li').map((i, li) => text(li)).get(),
    ['In the field', 'In the laboratory', 'Training', 'With our partners', 'At a conference']);
  assert.equal(recent.find('.entries .entry, .entries article').length, 0);
  assert.equal(recent.find('img').length, 0);
  assert.match(text(recent), /Photographs from our work are on their way\./);
});

test('places by state (R2): towns only as detail in the sites table', () => {
  const outside = $('main').clone();
  outside.find('#sites table, img, script').remove();
  assert.doesNotMatch(outside.text(), TOWNS);
  assert.doesNotMatch(`${$('title').text()} ${$('meta[name=description]').attr('content')}`, TOWNS);
});

test('no photographs; the footer credits the map alone', () => {
  // The map's key shows the emblem that marks a state we have worked in; that is a mark, not a photograph.
  assert.deepEqual($('main img').map((i, img) => $(img).attr('src')).get(), ['/assets/logo/lightening-lives-emblem.svg', '/assets/img/site-map-work.webp']);
  assert.deepEqual($('footer [data-credit]').map((i, li) => $(li).attr('data-credit')).get(), ['map-india']);
});

test('no bracket renders; no notice; the closing band asks for a partnership', () => {
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[TBC|PLACEHOLDER|\[|\]/);
  assert.equal($('.notice').length, 0);
  assert.equal(text('.closing h2'), 'Planning work like this?');
  assert.equal(text('.closing .lead'), 'Tell us the community, the condition and who you are working with.');
  assert.deepEqual(links('.closing .btn-solid'), [['Partner with us', '/partnerships/']]);
  assert.deepEqual(links('.closing .btn-line'), [['See our programmes', '/programmes/']]);
});
