// R1 and R2 from the Phase 1 review (plan, "Requirements from the Phase 1 review"; content file, its
// opening section): copy short enough to read, each thing said once, and places named by state.
// Counted on the built pages, not by eye.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { load as cheerio } from 'cheerio';
import { load, pages } from './helpers.mjs';

// A word is a run of characters with a letter or a digit in it: "•" and "·" between words are not words.
const words = (s) => s.replace(/\s+/g, ' ').trim().split(' ').filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
const text = ($, el) => $(el).text().replace(/\s+/g, ' ').trim();
const PROOF_TAGS = ['Approved by ICMR', 'Patented in India and Japan'];
// The open place's name, which the content file gives Develop a test's opening label (5.9) and the
// last row and carton on the home page and Solutions: five words, its own wording, kept as written.
const OPEN_PLACE = 'The condition you need next';

test('the home lead is short, and each proof under it is a label of six words or fewer', () => {
  const $ = load('/');
  assert.ok(words(text($, '.hero-lead')) <= 25, `lead: ${words(text($, '.hero-lead'))} words`);
  $('.hero-proof .cred-text').each((i, li) => assert.ok(words(text($, li)) <= 6, `proof: ${text($, li)}`));
});

// Every place on a page whose words run over R1's limit, as "<what> (<n> words): <text>". The bodies
// under a test page's "The condition(s)" (#the-condition) may run to 60 words, as FAQ answers do
// (R1; the controller's Phase 5 ruling 2): Thalassaemia's four conditions are up to 57.
function overLimits($, url) {
  const home = url === '/';
  const found = [];
  const over = (selector, limit, what, except) => $(selector).each((i, e) => {
    if (except && $(e).closest(except).length) return;
    const n = words(text($, e));
    if (n > limit) found.push(`${url} ${what} (${n} words): ${text($, e).slice(0, 60)}`);
  });
  over('.page-open .lead, section .lead', 30, 'lead');
  // A test page's rows, its numbered gaps and the problems answered (.spec, .gaps, .answers) stop at 35;
  // the conditions a test also reads (.subs) are written as the condition is, and may run to 60.
  over('.steps li > p:not(.label), .why p, .kinds p, .test-what > p, .proof p, .audiences p, .steps-numbered li p, .rows > :is(li, div) p, .families p:not(.label), .pair p, .spec p, .gaps p, .answers p', home ? 25 : 35, 'body');
  over('.subs p', 60, 'condition body');
  over('main p', 60, 'paragraph');
  // A heading set in the label voice is a heading, not a label. The two proof tags are the content
  // file's own wording (4.3), which its R1 revision kept: "Patented in India and Japan" is five; so
  // is Develop a test's opening label, the open place's name (5.9), on that page's opening only.
  $('.label:not(h1, h2, h3, h4), .tag, .places b').each((i, e) => {
    const t = $(e).clone().children('small').remove().end().text().replace(/\s+/g, ' ').trim();
    if ($(e).is('.tag-proof') && PROOF_TAGS.includes(t)) return;
    if (url === '/solutions/develop-a-test/' && $(e).closest('.page-open').length && t === OPEN_PLACE) return;
    if (words(t) > 4) found.push(`${url} label (${words(t)} words): ${t}`);
  });
  return found;
}

test('leads, bodies, paragraphs and labels keep to the limits on every page', () => {
  for (const url of pages()) assert.deepEqual(overLimits(load(url), url), [], url);
});

test('a test page\'s row body stops at 35 words; a condition the test also reads may run to 60', () => {
  const body = (n) => Array.from({ length: n }, (_, i) => `word${i}`).join(' ');
  const $ = cheerio(`<main><ul class="spec"><li><p>${body(36)}</p></li></ul><ul class="subs"><li><p>${body(57)}</p></li></ul></main>`);
  assert.deepEqual(overLimits($, '/solutions/thalassaemia/').map((f) => f.split(':')[0]), ['/solutions/thalassaemia/ body (36 words)']);
  const $$ = cheerio(`<main><ul class="subs"><li><p>${body(61)}</p></li></ul></main>`);
  assert.deepEqual(overLimits($$, '/solutions/thalassaemia/').map((f) => f.split(':')[0]),
    ['/solutions/thalassaemia/ condition body (61 words)', '/solutions/thalassaemia/ paragraph (61 words)']);
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

test('"We work with" heads the partner strip, once', () => {
  const $ = load('/');
  assert.equal(text($, '#partners h2'), 'We work with');
  assert.equal($('main h2').filter((i, h) => /^We work with/.test(text($, h))).length, 1);
});

test('places by state on the home page', () => {
  const $ = load('/');
  const towns = /Nandurbar|Jamshedpur|Gudalur|Udaipur|Bhopal|Bilaspur|Nagpur|Dhule|Valsad|Chandrapur|Mumbai|Kothagudem|Mysore|Patratu/;
  // The visible copy and what is written for sharing; alt text may still name the exact place.
  assert.doesNotMatch($('main').clone().find('img').remove().end().text(), towns);
  assert.doesNotMatch(`${$('title').text()} ${$('meta[name=description]').attr('content')} ${$('meta[property="og:image:alt"]').attr('content') ?? ''}`, towns);
  // The film pins every state we work in with the emblem, each named and nothing more.
  assert.deepEqual($('.places b').map((i, b) => [[$(b).contents().first().text().trim(), $(b).find('small').text().trim()]]).get(), [
    ['Delhi', ''], ['Rajasthan', ''], ['Gujarat', ''], ['Madhya Pradesh', ''], ['Jharkhand', ''], ['Chhattisgarh', ''],
    ['Maharashtra', ''], ['Telangana', ''], ['Karnataka', ''], ['Tamil Nadu', '']]);
  assert.equal($('.places li img.place-emblem[src="/assets/logo/lightening-lives-emblem.svg"][alt=""]').length, 10);
});
