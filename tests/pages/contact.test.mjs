// Contact (content file 5.9; three sections since 25 October 2026, the reviewer's site map, 3.1): the
// enquiry form, direct contact and the addresses, the notice for individuals. Since 26 October 2026 the
// form is the company's Fillout form (src/site/_data/enquire.json): set in this page, and opened in a
// dialog from every other page's "Partner with us" (enquire.njk, src/js/site/enquire.js), filled in
// with what the button knew. No page carries Fillout's script until the form is opened.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';
import { paramsFor, paramsFromSearch } from '../../src/js/site/enquire.js';

let cached;
const $ = (...args) => (cached ??= load('/contact/'))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const SITE = JSON.parse(readFileSync('src/site/_data/site.json', 'utf8'));
const ENQUIRE = JSON.parse(readFileSync('src/site/_data/enquire.json', 'utf8'));
const LABELS = { who: ENQUIRE.who, condition: ENQUIRE.conditions, topic: ENQUIRE.topics };

test('the page: title, a two-tone heading, no label, no closing band asking for contact again', () => {
  assert.equal($('title').text(), 'Contact our genetic testing team | Lightening Lives');
  assert.equal(text('h1'), 'Talk to us. Tell us who you are and what you need.');
  assert.equal($('.page-open .label').length, 0);
  assert.equal($('.closing').length, 0);
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), ['enquiry', 'direct']);
  assert.match($('main').text(), /We work with institutions and don't test individuals/);
});

test('the form: the company\'s Fillout form in the page, and without script a link to it and the email', () => {
  const host = $('#enquiry [data-enquire-inline]');
  assert.equal(host.length, 1);
  assert.equal(host.attr('data-form-id'), ENQUIRE.id);
  assert.equal(host.attr('data-form-script'), ENQUIRE.script);
  assert.deepEqual(JSON.parse(host.attr('data-labels')), LABELS);
  assert.equal(host.find('.enquire-noscript a').first().attr('href'), ENQUIRE.url);
  assert.equal(host.find(`.enquire-noscript a[href="mailto:${SITE.email}"]`).length, 1);
  // If Fillout cannot be reached, the way round is in the page, waiting.
  assert.ok(host.find('[data-enquire-failed]').is('[hidden]'));
  // No page carries another host's script: Fillout's is fetched only when the form is shown.
  assert.equal($(`script[src^="https://server.fillout.com"]`).length, 0);
  assert.equal($('form').length, 0, 'the old mailto form is gone');
});

test('every page has the dialog the buttons open, and the buttons say what they know', () => {
  for (const url of ['/', '/partners/', '/solutions/', '/solutions/sickle-cell-anaemia/', '/technology/']) {
    const page = load(url);
    const dialog = page('dialog[data-enquire-dialog]');
    assert.equal(dialog.length, 1, url);
    assert.equal(dialog.attr('aria-labelledby'), 'enquire-h', url);
    assert.equal(page('#enquire-h').text().trim(), ENQUIRE.title, url);
    assert.equal(dialog.find('[data-enquire-close]').attr('aria-label'), 'Close the form', url);
    page('[data-enquire]').each((i, a) => {
      const href = page(a).attr('href');
      assert.match(href, /^\/contact\/(\?|$)/, `${url}: ${href}`);
      const who = a.attribs['data-enquire'];
      if (who) assert.ok(ENQUIRE.who[who], `${url}: who ${who}`);
      if (a.attribs['data-condition']) assert.ok(ENQUIRE.conditions[a.attribs['data-condition']], `${url}: ${a.attribs['data-condition']}`);
      if (a.attribs['data-topic']) assert.ok(ENQUIRE.topics[a.attribs['data-topic']], `${url}: ${a.attribs['data-topic']}`);
    });
  }
});

test('direct: email, call and WhatsApp, and both addresses with "Open in maps"', () => {
  assert.deepEqual($('#direct .direct-ways a').map((i, a) => $(a).attr('href')).get(), [`mailto:${SITE.email}`, `tel:${SITE.tel}`, `https://wa.me/${SITE.tel.replace('+', '')}`]);
  assert.equal($('#direct .addresses-cards li').length, Object.keys(SITE.addresses).length);
  $('#direct .addresses-cards a').each((i, a) => assert.match($(a).attr('href'), /^https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=/));
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[|CONFIRM|TBC/);
});

test('a button sends the form the labels for what it knows, and the page it was opened from', () => {
  const link = (data) => ({ dataset: data });
  assert.deepEqual(paramsFor(link({ enquire: 'programme' }), LABELS, '/partners/'), [['enquiry', 'A public health programme'], ['source', '/partners/']]);
  assert.deepEqual(paramsFor(link({ enquire: '', condition: 'sickle-cell-anaemia' }), LABELS, '/solutions/sickle-cell-anaemia/'), [['condition', 'Sickle cell anaemia'], ['source', '/solutions/sickle-cell-anaemia/']]);
  assert.deepEqual(paramsFor(link({ enquire: '', topic: 'dossier' }), LABELS, '/technology/'), [['topic', 'The technical dossier'], ['source', '/technology/']]);
  assert.deepEqual(paramsFor(link({ enquire: '' }), LABELS, '/'), [['source', '/']]);
});

test('anything a button or the address names that enquire.json does not know is left out', () => {
  const link = (data) => ({ dataset: data });
  assert.deepEqual(paramsFor(link({ enquire: '__proto__', condition: 'constructor', topic: '<script>' }), LABELS, '/'), [['source', '/']]);
  assert.deepEqual(paramsFromSearch('?enquiry=funder&condition=thalassaemia&topic=nope', LABELS, '/contact/'), [['enquiry', 'A CSR team or NGO'], ['condition', 'Beta thalassaemia'], ['source', '/contact/']]);
  assert.deepEqual(paramsFromSearch('?enquiry=%3Cimg%3E', LABELS, '/contact/'), [['source', '/contact/']]);
});

test('the page\'s behaviour loads enquire.js, which writes no markup from text', () => {
  assert.match(readFileSync('src/js/site/main.js', 'utf8'), /import \{ initEnquire \} from '\.\/enquire\.js'/);
  const code = readFileSync('src/js/site/enquire.js', 'utf8').replace(/\/\/.*$/gm, '');
  assert.doesNotMatch(code, /innerHTML|insertAdjacentHTML|outerHTML|document\.write/);
  // The dialog closes on Escape (a modal dialog), its button and a click outside, and gives the focus back.
  assert.match(code, /showModal\(\)/);
  assert.match(code, /addEventListener\('close'/);
  assert.match(code, /event\.target === dialog/);
});
