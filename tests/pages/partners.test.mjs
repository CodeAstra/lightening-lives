// Partners (content file 5.6; one page since 25 October 2026, the reviewer's site map, 3.1): where every
// "Partner with us" leads. The three doors above the fold, a section for each reader, the partners'
// logos in their groups, and how a partnership starts. It replaces /partnerships/ and /programmes/.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const $ = load('/partners/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const PARTNERS = JSON.parse(readFileSync('src/site/_data/partners.json', 'utf8'));

test('the page: title, description, a two-tone heading in the opening, and no label over it', () => {
  assert.equal($('title').text(), 'Partner for genetic screening in India | Lightening Lives');
  assert.match($('meta[name=description]').attr('content'), /^Hospitals, diagnostic labs, public health programmes and NGOs partner with us/);
  assert.equal(text('h1'), 'Partner with us. Choose how we work together.');
  assert.equal(text('h1 .h-mark'), 'Choose how we work together.');
  assert.equal($('.page-open .label').length, 0, 'no eyebrow label');
  assert.deepEqual($('.page-open .page-proof .cred-text').map((i, li) => text(li)).get(), ['ICMR approved', 'Patents granted in India and Japan', '15 sites, 9 states and Delhi']);
});

test('the sections, in the reviewer\'s order, each labelled', () => {
  assert.deepEqual($('main > section').map((i, s) => $(s).attr('id')).get().filter(Boolean),
    ['start', 'laboratories', 'programmes', 'funders', 'partners', 'how-it-starts']);
  assert.ok($('main > section.closing').length === 1);
  $('main > section[aria-labelledby]').each((i, s) => assert.ok($(`#${$(s).attr('aria-labelledby')}`).length, $(s).attr('id')));
});

test('three doors above the fold lead to the three readers\' sections on this page', () => {
  assert.deepEqual($('#start .door').map((i, a) => $(a).attr('href')).get(), ['#laboratories', '#programmes', '#funders']);
  assert.equal($('#start .door .icon-tile svg.icon').length, 3);
  assert.equal($('#start .doors-else a').attr('href'), '/contact/?enquiry=other');
  assert.equal($('#start .doors-else a').attr('data-enquire'), 'other');
});

test('each reader\'s section ends in its own action', () => {
  // Each opens the enquiry form with who the reader is chosen (26 October 2026).
  const acts = (id) => $(`#${id} .audience-act .btn`).map((i, a) => [[text(a), $(a).attr('href'), $(a).attr('data-enquire')]]).get();
  assert.deepEqual(acts('laboratories'), [['Talk to our scientific team', '/contact/?enquiry=laboratory', 'laboratory']]);
  assert.deepEqual(acts('programmes'), [['Plan a programme', '/contact/?enquiry=programme', 'programme']]);
  assert.deepEqual(acts('funders'), [['Fund a programme', '/contact/?enquiry=funder', 'funder']]);
  assert.equal($('#programmes .model-step').length, 6, 'the testing model');
  assert.equal($('#funders .faq details').length, 3);
});

test('who we work with: all thirteen logos under their three groups', () => {
  assert.deepEqual($('#partners .logo-group-h').map((i, h) => text(h)).get(), Object.values(PARTNERS.groups));
  assert.deepEqual($('#partners .logo-row img').map((i, img) => img.attribs.alt).get().sort(), PARTNERS.logos.map((p) => p.name).sort());
  assert.equal($('#how-it-starts .start-steps > li').length, 4);
});

test('nothing unconfirmed renders, and no town is named', () => {
  const words = $('main').clone().find('script').remove().end().text();
  assert.doesNotMatch(words, /\[|CONFIRM|TBC/);
  assert.doesNotMatch(words, /Nandurbar|Jamshedpur|Gudalur|Udaipur|Bhopal|Bilaspur|Nagpur|Dhule|Valsad|Chandrapur|Mumbai|Kothagudem|Mysore/);
});
