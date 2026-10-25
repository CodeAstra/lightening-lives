// Contact (content file 5.9; three sections since 25 October 2026, the reviewer's site map, 3.1): who
// you are (four choices) and the form, direct contact and the addresses, the notice for individuals.
// The form posts to Web3Forms with a key in site.json, otherwise opens the visitor's email app.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { exists, load } from '../helpers.mjs';
import { CONDITIONS, ENQUIRIES, enquiryEmail, initContact, withCondition } from '../../src/js/site/contact.js';

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

test('the page: title, a two-tone heading, no label, no closing band asking for contact again', () => {
  assert.equal($('title').text(), 'Contact Lightening Lives | Hyderabad, India');
  assert.equal(text('h1'), 'Talk to us. Tell us who you are and what you need.');
  assert.equal($('.page-open .label').length, 0);
  assert.equal($('.closing').length, 0);
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), ['enquiry', 'direct']);
  assert.match($('main').text(), /We work with institutions and don't test individuals/);
});

test('who you are: four choices, the first chosen, each a radio the form sends', () => {
  const radios = $('form[data-enquiry] input[type=radio][name=enquiry]');
  assert.deepEqual(radios.map((i, r) => $(r).attr('value')).get(), [...ENQUIRIES.keys()]);
  assert.ok(radios.first().is('[checked]'));
  assert.deepEqual($('.who-label').map((i, l) => text(l)).get(), [...ENQUIRIES.values()]);
});

test('the form: its fields, labelled, the required ones required; the conditions; consent and a hidden bot check', () => {
  const form = $('form[data-enquiry]');
  for (const name of ['name', 'organisation', 'email', 'message']) assert.ok(form.find(`[name=${name}]`).is('[required]'), name);
  for (const name of ['role', 'state', 'phone']) assert.ok(!form.find(`[name=${name}]`).is('[required]'), name);
  form.find('input:not([type=hidden]):not([name=botcheck]):not([type=radio]):not([type=checkbox]), textarea').each((i, el) => assert.ok($(el).closest('label').length, $(el).attr('name')));
  assert.deepEqual(form.find('input[name="conditions[]"]').map((i, c) => $(c).attr('data-slug')).get(), [...CONDITIONS.keys(), 'other']);
  assert.equal(form.find('a[href="/privacy/"]').length, 1);
  assert.equal(form.find('input[name=botcheck]').attr('tabindex'), '-1');
});

test('without a Web3Forms key the form is a mailto form to the company; with one it posts to Web3Forms', () => {
  const form = $('form[data-enquiry]');
  if (SITE.forms.web3formsKey) {
    assert.equal(form.attr('action'), SITE.forms.endpoint);
    assert.equal(form.find('input[name=access_key]').attr('value'), SITE.forms.web3formsKey);
  } else {
    assert.equal(form.attr('action'), `mailto:${SITE.email}?subject=Enquiry`);
    assert.equal(form.attr('data-mode'), 'email');
    assert.equal(form.find('input[name=access_key]').length, 0);
  }
});

test('direct: email, call and WhatsApp, and both addresses with "Open in maps"', () => {
  assert.deepEqual($('#direct .direct-ways a').map((i, a) => $(a).attr('href')).get(), [`mailto:${SITE.email}`, `tel:${SITE.tel}`, `https://wa.me/${SITE.tel.replace('+', '')}`]);
  assert.equal($('#direct .addresses-cards li').length, Object.keys(SITE.addresses).length);
  $('#direct .addresses-cards a').each((i, a) => assert.match($(a).attr('href'), /^https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=/));
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[|CONFIRM|TBC/);
});

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

// A form with only what initContact reads at load: the radios and the condition boxes.
function fakeForm() {
  const boxes = {};
  const el = () => ({ checked: false });
  return {
    boxes,
    querySelector(selector) {
      if (selector === '[data-enquiry]') return this;
      if (selector === '[data-enquiry-status]') return { hidden: true, classList: { toggle() {} } };
      const m = selector.match(/value="([^"]+)"|data-slug="([^"]+)"/);
      if (!m) return null;
      const key = m[1] || m[2];
      return (boxes[key] ??= el());
    },
    addEventListener() {},
  };
}

test('initContact sets who the visitor is and ticks the condition the address names, and nothing for unknown values', () => {
  const doc = fakeForm();
  initContact(doc, '?enquiry=programme&condition=sickle-cell-anaemia');
  assert.equal(doc.boxes.programme.checked, true);
  assert.equal(doc.boxes['sickle-cell-anaemia'].checked, true);
  const other = fakeForm();
  initContact(other, '?enquiry=__proto__&condition=%3Cscript%3E');
  assert.deepEqual(Object.keys(other.boxes), []);
});

test('the enquiry as an email: its subject names who is asking, its body one field to a line, empty fields left out', () => {
  const { subject, body } = enquiryEmail({ enquiry: 'funder', name: 'A. Rao', organisation: 'A Trust', email: 'a@example.org', phone: '', conditions: ['Sickle cell anaemia', 'Spinal muscular atrophy'], message: ' Two districts. ' });
  assert.equal(subject, 'Enquiry: CSR or NGO');
  assert.equal(body, 'Who: CSR or NGO\nName: A. Rao\nOrganisation: A Trust\nEmail: a@example.org\nConditions: Sickle cell anaemia, Spinal muscular atrophy\n\nTwo districts.');
  assert.equal(enquiryEmail({ enquiry: 'nonsense', message: 'x' }).subject, 'Enquiry: Enquiry');
});

test('the page\'s behaviour loads contact.js; the script never writes markup', () => {
  assert.match(readFileSync('src/js/site/main.js', 'utf8'), /import \{ initContact \} from '\.\/contact\.js'/);
  assert.equal($('[data-contact] form[data-enquiry]').length, 1);
  const code = readFileSync('src/js/site/contact.js', 'utf8').replace(/\/\/.*$/gm, '');
  assert.doesNotMatch(code, /innerHTML|outerHTML|insertAdjacentHTML|document\.write/);
});
