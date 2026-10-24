// Phase 6, Task 6.1: Privacy and Terms (content/website-content.md 5.16 and 5.17). Plain-language
// drafts for a lawyer to review. The brackets never render: a sentence keeps its words without the
// note, and a part whose words are only a bracket is left out with its heading ("How long we keep
// it"). The "Last updated" line waits for a date. The typefaces are self-hosted, so the privacy page
// has no Google Fonts line; the analytics line follows site.analytics (Task 6.5).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const SITE = JSON.parse(readFileSync('src/site/_data/site.json', 'utf8'));
const text = ($, el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = ($, selector) => $(selector).map((i, el) => text($, el)).get();

test('privacy: title, description, h1 and lead (5.16)', () => {
  const $ = load('/privacy/');
  assert.equal($('title').text(), 'Privacy | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'What the Lightening Lives website collects, why, and how to reach us about it.');
  assert.equal($('h1').length, 1);
  assert.equal(text($, 'h1'), 'Privacy');
  assert.equal(text($, '.page-open .lead'), 'What this website collects, why, and how to reach us about it.');
});

test('privacy: the headings in 5.16\'s order, without the one whose words are only a bracket', () => {
  const $ = load('/privacy/');
  assert.deepEqual(texts($, 'main h2'), ['Who we are', 'What we collect', 'What we do not collect', 'Why we use it', 'Who sees it', 'Your choices', 'Changes']);
  assert.ok(!/How long we keep it/.test($('main').text()));
});

test('privacy: every part is a section named by its heading', () => {
  const $ = load('/privacy/');
  $('main h2').each((i, h) => {
    const section = $(h).closest('section');
    assert.equal(section.attr('aria-labelledby'), $(h).attr('id'), text($, h));
  });
});

test('privacy and terms: no "Last updated" line until a date is supplied', () => {
  for (const url of ['/privacy/', '/terms/']) assert.ok(!/Last updated/.test(load(url)('main').text()), url);
});

test('privacy: what we collect, without the typefaces line (self-hosted), and the analytics line', () => {
  const $ = load('/privacy/');
  const items = texts($, '#what-we-collect li');
  assert.deepEqual(items.map((s) => s.split('.')[0]), ['What you send us', 'What the server records', 'Analytics']);
  assert.ok(!/Google Fonts|typeface/i.test($('main').text()));
  assert.equal(SITE.analytics ?? null, null);
  assert.equal(items[2], 'Analytics. We do not use analytics or advertising trackers.');
  assert.equal(items[1], 'What the server records. Like most websites, ours is hosted by another company, whose servers record the internet address a request comes from, the page asked for and the time.');
});

test('privacy: sentences that need their missing facts are left out, the rest read whole', () => {
  const $ = load('/privacy/');
  assert.equal(text($, '#who-sees-it p'), 'The members of our staff who handle enquiries, and the companies that host our website and email. We disclose it to anyone else only where the law requires.');
  const choices = text($, '#your-choices');
  assert.match(choices, /Write to our Grievance Officer at admin@lighteninglives\.in or at the address above\./);
  assert.ok(!/reply within|Officer,|,\s*at admin/.test(choices), choices);
  assert.equal($('#your-choices a[href="mailto:admin@lighteninglives.in"]').length, 1);
  assert.equal(text($, '#who-we-are p'), 'This website is published by Lightening Lives LLP, D-306, Sy. No. 117, Indu Aranya Pallavi, GSI (SR), Bandlaguda, Hayathnagar, Hyderabad, Telangana 500068, India.');
});

test('terms: title, description, h1, no lead (5.17)', () => {
  const $ = load('/terms/');
  assert.equal($('title').text(), 'Terms of use | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'The terms on which Lightening Lives LLP publishes this website.');
  assert.equal(text($, 'h1'), 'Terms of use');
  assert.equal($('.page-open .lead').length, 0);
});

test('terms: the headings in 5.17\'s order, each naming its section', () => {
  const $ = load('/terms/');
  assert.deepEqual(texts($, 'main h2'), ['About this website', 'Not medical advice', 'Our tests', 'No offer', 'Names and marks', 'Using what is here', 'Links to other websites', 'Accuracy', 'Law', 'Contact']);
  $('main h2').each((i, h) => assert.equal($(h).closest('section').attr('aria-labelledby'), $(h).attr('id')));
});

test('terms: bracketed notes go, the sentences before them stay; contact is the email and the phone', () => {
  const $ = load('/terms/');
  assert.equal(text($, '#our-tests p'), 'Our tests are for use by institutions, by trained staff, following the instructions supplied with each test. Nothing on this website replaces those instructions.');
  assert.equal(text($, '#names-and-marks p'), 'Lightening Lives, the Lightening Lives logo and LitLife are trade marks of Lightening Lives LLP. Other names and logos belong to their owners and appear with their permission.');
  assert.equal(text($, '#law p'), 'These terms are governed by the laws of India, and the courts at Hyderabad have jurisdiction.');
  assert.equal($('#contact a[href="mailto:admin@lighteninglives.in"]').length, 1);
  assert.equal($('#contact a[href="tel:+919182588191"]').length, 1);
});

test('privacy and terms: no closing band and no notice (5.16 and 5.17 list neither)', () => {
  for (const url of ['/privacy/', '/terms/']) {
    const $ = load(url);
    assert.equal($('.closing').length, 0, url);
    assert.equal($('.notice').length, 0, url);
  }
});
