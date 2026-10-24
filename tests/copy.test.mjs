// R1 and R2 from the Phase 1 review (plan, "Requirements from the Phase 1 review"; content file, its
// opening section): copy short enough to read, each thing said once, and places named by state.
// Counted on the built pages, not by eye.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { load, pages } from './helpers.mjs';

// A word is a run of characters with a letter or a digit in it: "•" and "·" between words are not words.
const words = (s) => s.replace(/\s+/g, ' ').trim().split(' ').filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
const text = ($, el) => $(el).text().replace(/\s+/g, ' ').trim();
const PROOF_TAGS = ['Approved by ICMR', 'Patented in India and Japan'];

test('the home lead and note are short', () => {
  const $ = load('/');
  assert.ok(words(text($, '.hero-lead')) <= 25, `lead: ${words(text($, '.hero-lead'))} words`);
  assert.ok(words(text($, '.hero-note')) <= 12, `note: ${words(text($, '.hero-note'))} words`);
});

test('leads, bodies, paragraphs and labels keep to the limits on every page', () => {
  for (const url of pages()) {
    const $ = load(url);
    const home = url === '/';
    const over = (selector, limit, what) => $(selector).each((i, e) => {
      const n = words(text($, e));
      assert.ok(n <= limit, `${url} ${what} (${n} words): ${text($, e).slice(0, 60)}`);
    });
    over('.page-open .lead, section .lead', 30, 'lead');
    over('.steps li > p:not(.label), .why p, .kinds p, .test-what > p, .proof p, .audiences p, .steps-numbered li p, .rows > :is(li, div) p, .families p:not(.label), .pair p', home ? 25 : 35, 'body');
    over('main p', 60, 'paragraph');
    // A heading set in the label voice is a heading, not a label. The two proof tags are the content
    // file's own wording (4.3), which its R1 revision kept: "Patented in India and Japan" is five.
    $('.label:not(h1, h2, h3, h4), .tag, .places b').each((i, e) => {
      const t = $(e).clone().children('small').remove().end().text().replace(/\s+/g, ' ').trim();
      if ($(e).is('.tag-proof') && PROOF_TAGS.includes(t)) return;
      assert.ok(words(t) <= 4, `${url} label (${words(t)} words): ${t}`);
    });
  }
});

// Sentences in the visible copy of main. Left out: the film's three captions and How it works' three
// headings, which mirror each other on purpose (R1); tags, which label rows and repeat by design
// ("Dried blood spot" on three); links and buttons, which name an action ("Ask about this test" on
// the two rows whose pages are not open yet, content 5.1); and what is hidden from the eye.
// A run of text ends wherever an element begins or ends (a heading, a paragraph, a list item, a
// table cell), except the text-level elements that sit inside a sentence (PHRASING). A span is part
// of its sentence where it sits in running text ("How <span>LitLife™</span> compares…"); where its
// parent holds no text of its own (a cell's name and line, the map's three hints) or it is a label,
// it is a line of its own. Only sentences are counted, text that ends in . ? or !: a table's values
// ("Cold chain", "Yes") and headings repeat by design.
const PHRASING = new Set(['a', 'abbr', 'b', 'br', 'cite', 'code', 'em', 'i', 'mark', 'q', 's', 'small', 'strong', 'sub', 'sup', 'time', 'u', 'wbr']);
const inRunningText = ($, e) => e.tagName === 'span' && !$(e).is('.label')
  && $(e).parent().contents().toArray().some((node) => node.type === 'text' && node.data.trim());
function sentences($) {
  const main = $('main').clone();
  main.find('.film-captions, #how h3, .tags, .tag, a, button, .sr-only, [aria-hidden="true"], script, template').remove();
  // Decided for every element before any mark is added, since a mark is text in its parent.
  const ends = main.find('*').toArray().filter((e) => !PHRASING.has(e.tagName) && !inRunningText($, e));
  for (const e of ends) $(e).prepend(' ¶ ').append(' ¶ ');
  return main.text().replace(/\s+/g, ' ').split(/(?<=[.?!])\s+|\s*¶\s*/).map((s) => s.trim())
    .filter((s) => /[.?!]$/.test(s) && words(s) >= 4);
}

test('no sentence twice on a page, the film captions and step headings aside', () => {
  for (const url of pages()) {
    const seen = new Map();
    for (const s of sentences(load(url))) seen.set(s, (seen.get(s) ?? 0) + 1);
    const twice = [...seen].filter(([, n]) => n > 1).map(([s]) => s);
    assert.deepEqual(twice, [], url);
  }
});

test('"We work with institutions" is said once on the home page, and in the notice', () => {
  const $ = load('/');
  const said = $('main *').filter((i, e) => $(e).children().length === 0 || $(e).is('p, h2, h3'))
    .filter((i, e) => /We work with institutions/.test($(e).text())).map((i, e) => $(e).closest('section').attr('id')).get();
  assert.deepEqual([...new Set(said)], ['partners']);
  assert.match(text($, '#partners h2'), /^We work with institutions$/);
  assert.match(text($, '#partners .notice'), /We work with institutions/);
});

test('places by state on the home page', () => {
  const $ = load('/');
  const towns = /Nandurbar|Jamshedpur|Gudalur|Udaipur|Bhopal|Bilaspur|Nagpur|Dhule|Valsad|Chandrapur|Mumbai|Kothagudem|Mysore|Patratu/;
  // The visible copy and what is written for sharing; alt text may still name the exact place.
  assert.doesNotMatch($('main').clone().find('img').remove().end().text(), towns);
  assert.doesNotMatch(`${$('title').text()} ${$('meta[name=description]').attr('content')} ${$('meta[property="og:image:alt"]').attr('content') ?? ''}`, towns);
  assert.deepEqual($('.places b').map((i, b) => $(b).contents().first().text().trim()).get().sort(),
    ['Delhi', 'Jharkhand', 'Maharashtra', 'Tamil Nadu', 'Telangana']);
  assert.deepEqual($('.places b').map((i, b) => [[$(b).contents().first().text().trim(), $(b).find('small').text().trim()]]).get(), [
    ['Delhi', 'Screening'], ['Maharashtra', 'Screening'], ['Jharkhand', 'Screening'],
    ['Telangana', 'Our laboratory, and screening'], ['Tamil Nadu', 'Screening']]);
  assert.deepEqual($('.fieldwork figcaption').map((i, f) => text($, f)).get(), ['Maharashtra', 'Telangana', 'Jharkhand']);
});
