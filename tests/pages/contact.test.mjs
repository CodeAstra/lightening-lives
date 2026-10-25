// Phase 4, Task 4.6: the Contact page (content/website-content.md 5.15, with 4.4 and 4.6), and its
// small script, src/js/site/contact.js. The four contact actions are the home page's, from one data
// source (src/site/_data/actions.json), here with the line under each. Each is an email link with its
// subject filled in, so it works without JavaScript (Review Focus 5); the form ("Write to us") waits
// for Phase 7 (the plan's decision "Email links at launch"). A test page's "Ask about LitLife™-SCA"
// (Phase 5) lands here as /contact/?about=tests&condition=sickle-cell-anaemia, and contact.js adds the
// condition to each email's body.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { exists, load } from '../helpers.mjs';
import { CONDITIONS, initContact, withCondition } from '../../src/js/site/contact.js';

let cached;
const $ = (...args) => (cached ??= load('/contact/'))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const ACTIONS = JSON.parse(readFileSync('src/site/_data/actions.json', 'utf8'));
const SITE = JSON.parse(readFileSync('src/site/_data/site.json', 'utf8'));
const MAILTO = 'mailto:admin@lighteninglives.in?subject=';
const HREFS = [
  `${MAILTO}Partnership`,
  `${MAILTO}Request%20tests`,
  `${MAILTO}Awareness%20and%20counselling`,
  `${MAILTO}Sales`,
];

test('title, description, label, h1 and lead (5.15, 4.6)', () => {
  assert.equal($('title').text(), 'Contact | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'Contact Lightening Lives about a partnership, tests, awareness and counselling programmes, or an institutional order. Hyderabad, India.');
  assert.equal($('.page-open .label').length, 0); // no label over the heading (25 October 2026)
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'Tell us what your programme needs');
  assert.equal(text('.page-open .lead'), 'Choose where you would like to begin. We work with institutions, and each request is discussed on its own terms.');
});

test('the h2s are 5.15\'s, in its order, each labelling its own section; no closing band asks for contact again', () => {
  assert.deepEqual(texts('main h2'), ['Where to begin', 'Write or call', 'Where we are']);
  $('main > section[aria-labelledby]').each((i, s) => {
    for (const id of $(s).attr('aria-labelledby').split(' ')) assert.equal($(`#${id}`).closest('section')[0], s);
  });
  assert.equal($('.closing').length, 0);
});

test('where to begin: the four actions, each an email with its subject, the line under each as 5.15 writes it', () => {
  const actions = $('#where-to-begin a.action');
  assert.equal(actions.length, 4);
  assert.deepEqual(actions.map((i, a) => $(a).attr('href')).get(), HREFS);
  for (const href of actions.map((i, a) => $(a).attr('href')).get()) assert.ok(href.startsWith(MAILTO), href);
  assert.deepEqual(actions.map((i, a) => [[text($(a).find('.action-label')), text($(a).find('.action-line'))]]).get(), [
    ['Explore a partnership', 'For hospitals, laboratories, government programmes, NGOs and CSR funders planning screening or diagnosis.'],
    ['Request tests', 'For institutions that want to use a test we have already developed.'],
    ['Ask about awareness and counselling', 'For programmes that need communities informed and families counselled.'],
    ['Talk to sales', 'For anything about an institutional order.']]);
  // One source: actions.json, label, subject and line.
  assert.deepEqual(ACTIONS.map((a) => a.label), actions.map((i, a) => text($(a).find('.action-label'))).get());
});

test('Partners closes on its own ask, not the four contact actions (one page since 25 October 2026)', () => {
  const page = load('/partners/');
  assert.equal(page('.closing .actions a.action').length, 0);
  assert.deepEqual(page('.closing .btn').map((i, a) => page(a).attr('href')).get(), ['/contact/', '/technology/']);
});

test('Review Focus 5: without JavaScript every action is already an email with its subject filled in', () => {
  // What the server sends is what a reader without script gets: the built HTML, no rewriting needed.
  const html = readFileSync('dist/contact/index.html', 'utf8');
  for (const href of HREFS) assert.ok(html.includes(`href="${href}"`), href);
  // The script is loaded the site's one way, as a module, and nothing in the page depends on it.
  assert.equal($('script[src="/assets/js/site.js"][type="module"]').length, 1);
  assert.equal($('[data-contact] noscript').length, 0);
});

test('write or call: the email and the phone, each a link; the phone for calls or WhatsApp', () => {
  const block = $('#write-or-call');
  assert.equal(text(block.find('h2')), 'Write or call');
  assert.equal(block.find('a[href="mailto:admin@lighteninglives.in"]').length, 1);
  assert.equal(text(block.find('a[href="mailto:admin@lighteninglives.in"]')), 'admin@lighteninglives.in');
  assert.equal(block.find('a[href="tel:+919182588191"]').length, 1);
  assert.equal(text(block.find('a[href="tel:+919182588191"]')), '+91 91825 88191');
  assert.match(text(block), /\+91 91825 88191 \(call or WhatsApp\)/);
});

test('where we are: both addresses as 5.15 writes them, each with "Open in maps"', () => {
  const places = $('#where-we-are .addresses > li');
  assert.equal(places.length, 2);
  const want = [
    ['Laboratory and corporate office', 'Flat No. 201, 2nd Floor, S B Hare Krishna Towers, H.No. 4-7-195/2/55, HMT Nagar, Nacharam, Hyderabad, Telangana 500076'],
    ['Registered office', 'D-306, Sy. No. 117, Indu Aranya Pallavi, GSI (SR), Bandlaguda, Hayathnagar, Hyderabad, Telangana 500068'],
  ];
  assert.deepEqual(places.map((i, li) => [[text($(li).find('h3')), text($(li).find('address'))]]).get(), want);
  places.each((i, li) => {
    const link = $(li).find('a');
    assert.equal(link.length, 1);
    assert.equal(text(link.clone().find('.sr-only').remove().end()), 'Open in maps');
    assert.equal(link.attr('href'), `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(want[i][1])}`);
    assert.equal(link.attr('rel'), 'noopener');
    // The two links say which address each opens, to a screen reader as well as by their place.
    assert.match(text(link), new RegExp(want[i][0]));
  });
  // The addresses are site.json's, as the footer's are (one source).
  assert.equal(Object.keys(SITE.addresses).length, 2);
});

test('no form until Phase 7; the notice present; no bracket renders', () => {
  assert.equal($('form').length, 0);
  assert.equal($('input, select, textarea').length, 0);
  assert.equal($('.notice').length, 1);
  assert.match(text('.notice'), /^For individuals Looking for a test for yourself or your family\? We work with institutions and don't test individuals\./);
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[TBC|PLACEHOLDER|\[|\]/);
  assert.doesNotMatch(text('main'), /Write to us|Send enquiry/);
});

// ---- contact.js -------------------------------------------------------------------------------

const ASK = '/contact/?about=tests&condition=sickle-cell-anaemia';

test('a test page\'s "Ask about LitLife™-SCA" link resolves to this page', () => {
  const url = new URL(ASK, 'https://lighteninglives.in');
  assert.equal(url.pathname, '/contact/');
  assert.ok(exists(url.pathname));
});

test('withCondition adds the condition as the body of each of the four emails', () => {
  const search = new URL(ASK, 'https://lighteninglives.in').search;
  assert.deepEqual(HREFS.map((href) => withCondition(href, search)), HREFS.map((href) => `${href}&body=Condition%3A%20Sickle%20cell%20anaemia`));
  // Decoded, the body reads as the brief writes it.
  assert.equal(decodeURIComponent(withCondition(HREFS[1], search).split('&body=')[1]), 'Condition: Sickle cell anaemia');
});

test('the five conditions, by slug, named as 5.15\'s list names them', () => {
  assert.deepEqual([...CONDITIONS], [
    ['sickle-cell-anaemia', 'Sickle cell anaemia'],
    ['thalassaemia', 'Thalassaemia, HbD or HbE'],
    ['spinal-muscular-atrophy', 'Spinal muscular atrophy'],
    ['duchenne-muscular-dystrophy', 'Duchenne muscular dystrophy'],
    ['limb-girdle-muscular-dystrophy', 'Limb-girdle muscular dystrophy']]);
  assert.equal(withCondition(HREFS[0], '?condition=thalassaemia'), `${HREFS[0]}&body=${encodeURIComponent('Condition: Thalassaemia, HbD or HbE')}`);
});

test('an unknown condition, none, or anything that is not a slug leaves the emails as they are', () => {
  for (const search of ['', '?about=tests', '?condition=', '?condition=cancer', '?condition=__proto__', '?condition=constructor', '?condition=toString',
    '?condition=%3Cscript%3Ealert(1)%3C%2Fscript%3E', '?condition=Sickle-Cell-Anaemia'])
    assert.equal(withCondition(HREFS[1], search), HREFS[1], search);
});

test('withCondition replaces a body already there rather than adding a second, and leaves other links alone', () => {
  const once = withCondition(HREFS[0], '?condition=sickle-cell-anaemia');
  assert.equal(withCondition(once, '?condition=spinal-muscular-atrophy'), `${HREFS[0]}&body=${encodeURIComponent('Condition: Spinal muscular atrophy')}`);
  assert.equal(withCondition('/partners/', '?condition=sickle-cell-anaemia'), '/partners/');
  assert.equal(withCondition('https://example.org/?a=1', '?condition=sickle-cell-anaemia'), 'https://example.org/?a=1');
});

// A document with only what initContact reads and writes: the contact block and its links.
function page({ contact = true, hrefs = HREFS } = {}) {
  const anchors = hrefs.map((initial) => {
    let href = initial;
    return { getAttribute: (name) => (name === 'href' ? href : null), setAttribute: (name, value) => { if (name === 'href') href = value; } };
  });
  return {
    anchors,
    querySelector: (selector) => (selector === '[data-contact]' && contact ? {} : null),
    querySelectorAll: (selector) => (contact && /a\.action/.test(selector) ? anchors : []),
  };
}

test('initContact rewrites the four actions on the contact page when the address names a condition', () => {
  const doc = page();
  initContact(doc, '?about=tests&condition=sickle-cell-anaemia');
  assert.deepEqual(doc.anchors.map((a) => a.getAttribute('href')), HREFS.map((href) => `${href}&body=Condition%3A%20Sickle%20cell%20anaemia`));
});

test('initContact does nothing on a page without the contact block, or without a known condition', () => {
  const elsewhere = page({ contact: false });
  initContact(elsewhere, '?condition=sickle-cell-anaemia');
  assert.equal(elsewhere.anchors[0].getAttribute('href'), HREFS[0]);
  const plain = page();
  initContact(plain, '?about=tests');
  assert.deepEqual(plain.anchors.map((a) => a.getAttribute('href')), HREFS);
});

test('the page\'s behaviour loads contact.js, and the contact block is marked for it', () => {
  assert.match(readFileSync('src/js/site/main.js', 'utf8'), /import \{ initContact \} from '\.\/contact\.js'/);
  assert.match(readFileSync('src/js/site/main.js', 'utf8'), /initContact\(/);
  assert.equal($('[data-contact]').length, 1);
  assert.equal($('[data-contact] a.action').length, 4);
  // The condition is never written into the page: the script changes only the four hrefs.
  const code = readFileSync('src/js/site/contact.js', 'utf8').replace(/\/\/.*$/gm, '');
  assert.doesNotMatch(code, /innerHTML|outerHTML|insertAdjacentHTML|document\.write/);
});
