// Partner With Us (client review of 27 October 2026, plan 2026-11-05 Task 6): where every "Partner with
// us" leads. The opening, three doors, one tab for each reader (laboratories and hospitals, public
// health programmes, CSR and NGOs), how a partnership starts, and the close. Without script the three
// tabs are three plain sections, one after the other; with it (src/js/site/tabs.js) one shows at a time.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const $ = load('/partner-with-us/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();

test('the page: title, description, kicker, heading, lead and proof', () => {
  assert.equal($('title').text(), 'Partner for genetic screening in India | Lightening Lives');
  assert.match($('meta[name=description]').attr('content'), /^Hospitals, diagnostic labs, public health programmes and NGOs partner with us/);
  assert.deepEqual(texts('.page-open .label'), ['Institutional collaboration models']);
  assert.equal(text('h1'), 'Partner with us. Choose how we work together.');
  assert.equal(text('.page-open .lead'), 'Diagnostic lab chains, hospitals, national health missions and CSR foundations partner with us to bring confirmed, affordable molecular diagnosis to the people who need it most.');
  assert.deepEqual(texts('.page-open .page-proof .cred-text'), ['ICMR approved', 'Patents granted in India and Japan', '15 sites, 9 states and Delhi']);
  assert.match(text('.notice'), /don't test individuals/);
});

test('the sections, in order; the three readers\' sections are the tabs', () => {
  assert.deepEqual($('main section[id]').map((i, s) => $(s).attr('id')).get(), ['start', 'laboratories', 'programmes', 'funders', 'how-it-starts']);
  assert.equal($('main > section.closing').length, 1);
  const panels = $('[data-tabs] [data-tab-label]');
  assert.deepEqual(panels.map((i, p) => $(p).attr('id')).get(), ['laboratories', 'programmes', 'funders']);
  assert.deepEqual(panels.map((i, p) => $(p).attr('data-tab-label')).get(), ['Laboratories and hospitals', 'Public health programmes', 'CSR and NGOs']);
  assert.equal($('[data-tabs] [data-tab-label][hidden]').length, 0, 'without script every tab is readable');
  // The tab bar is drawn at build time, hidden until the script makes it a tablist.
  const bar = $('[data-tabs] [data-tabbar]');
  assert.ok(bar.is('[hidden]'));
  assert.deepEqual(bar.find('[data-tab-for]').map((i, b) => $(b).attr('data-tab-for')).get(), ['laboratories', 'programmes', 'funders']);
  assert.deepEqual(bar.find('[data-tab-for]').map((i, b) => text(b)).get(), ['Laboratories and hospitals', 'Public health programmes', 'CSR and NGOs']);
});

test('three doors, each to its tab; something else opens the form', () => {
  assert.deepEqual($('#start .door').map((i, a) => $(a).attr('href')).get(), ['#laboratories', '#programmes', '#funders']);
  assert.deepEqual(texts('#start .door-who'), ['Hospitals, standalone labs and diagnostic chains', 'Public health and government programmes', 'CSR foundations and NGOs']);
  assert.deepEqual(texts('#start .door-go'), ['View lab partnership', 'View programme partnership', 'View CSR and NGO partnership']);
  assert.equal(text('#start .doors-else'), 'Looking for something else? Research collaborations, custom test co-development or media enquiries: talk to us');
  assert.equal($('#start .doors-else a').attr('data-enquire'), 'other');
});

test('laboratories and hospitals: five changes, what a lab needs, three steps, one ask', () => {
  assert.equal(text('#laboratories h2'), 'Turn any basic PCR room into a high-throughput genetic lab.');
  assert.deepEqual(texts('#laboratories .ticks strong'), ['Zero DNA extraction.', 'Zero cold chain.', 'One test instead of two.', 'High throughput.', 'Reports clinicians can act on.']);
  assert.equal($('#laboratories .audience-card a').attr('href'), '/technology/#laboratory');
  assert.deepEqual(texts('#laboratories .flow strong'), ['Scientific consultation.', 'Hands-on training.', 'Supply and support.']);
  const act = $('#laboratories .audience-act .btn');
  assert.deepEqual([text(act), act.attr('data-enquire')], ['Talk to our scientific team', 'laboratory']);
});

test('public health programmes: three bottlenecks, the testing model, the states, two asks', () => {
  assert.equal(text('#programmes h2'), 'Removing the three biggest bottlenecks in public health screening.');
  assert.equal($('#programmes .answers li').length, 3);
  assert.equal($('#programmes .model-step').length, 6, 'the testing model');
  assert.match(text('#programmes .audience-where'), /15 sites in nine states and Delhi/);
  const act = $('#programmes .audience-act .btn');
  assert.deepEqual([text(act), act.attr('data-enquire')], ['Plan a public health programme', 'programme']);
  assert.equal($('#programmes .audience-act a.link').attr('href'), '/our-work/');
  assert.equal(text('#programmes .audience-act a.link'), 'Explore our field work');
});

test('CSR and NGOs: from testing to complete care, three answers, one ask', () => {
  assert.equal(text('#funders h2'), 'From testing to complete care.');
  assert.equal($('#funders .ticks li').length, 3);
  assert.equal($('#funders .faq details').length, 3);
  const act = $('#funders .audience-act .btn');
  assert.deepEqual([text(act), act.attr('data-enquire')], ['Fund or co-design a programme', 'funder']);
});

test('how a partnership starts, and the close opening the form', () => {
  assert.equal($('#how-it-starts .start-steps > li').length, 4);
  assert.equal(text('.closing .btn-solid'), 'Start a conversation');
  assert.equal($('.closing .btn-solid').attr('data-enquire'), '');
});

test('the tabs script: the WAI-ARIA pattern, chosen by the address, the address kept', () => {
  const js = readFileSync('src/js/site/tabs.js', 'utf8');
  assert.match(js, /export function initTabs\(/);
  for (const bit of ["'tablist'", "'tab'", "'tabpanel'", 'aria-selected', 'aria-controls', 'tabindex', 'ArrowRight', 'ArrowLeft', 'Home', 'End', 'history.replaceState', 'hashchange']) {
    assert.ok(js.includes(bit), bit);
  }
  assert.match(readFileSync('src/js/site/main.js', 'utf8'), /initTabs/);
});

test('the tabs script, after the final review: the bar comes back into view, odd addresses and new-tab clicks are safe', () => {
  const js = readFileSync('src/js/site/tabs.js', 'utf8');
  // Choosing a tab from the bar held under the header brings the new panel's top into view.
  assert.match(js, /const select = [\s\S]*?root\.getBoundingClientRect\(\)\.top < 0[\s\S]*?scrollIntoView/);
  // A malformed address (#100%) does not throw and stop the page's other scripts.
  assert.match(js, /try \{ return decodeURIComponent\(/);
  // Ctrl-, Cmd-, Shift- or middle-clicking a door opens it in a new tab as usual.
  for (const k of ['e.metaKey', 'e.ctrlKey', 'e.shiftKey', 'e.button', 'e.defaultPrevented']) assert.ok(js.includes(k), k);
});

test('nothing unconfirmed renders, and no town is named', () => {
  const words = $('main').clone().find('script').remove().end().text();
  assert.doesNotMatch(words, /\[|CONFIRM|TBC/);
  assert.doesNotMatch(words, /Nandurbar|Jamshedpur|Gudalur|Udaipur|Bhopal|Bilaspur|Nagpur|Dhule|Valsad|Chandrapur|Mumbai|Kothagudem|Mysore/);
});
