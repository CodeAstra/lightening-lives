// What a search result and an AI assistant read (26 October 2026, the user's choices): someone in India
// types "genetic testing in India", and every page should say who the company currently works with:
// hospitals, diagnostic labs, public health programmes and NGOs. The home page keeps its brand line
// with India added; every other page puts the words a person searches first and the brand last.
// Individuals are not mentioned (the user: "You don't have to mention individuals"), and only the
// sickle cell test claims ICMR approval, because it is the one approved. The visible text, the footer's
// sentence among it, is unchanged; what is added is read behind the scenes: the structured data and
// llms.txt. Content file 6.5 records the titles and descriptions.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load, pages } from './helpers.mjs';

const read = (f) => readFileSync(`dist/${f}`, 'utf8');
const meta = (url) => {
  const $ = load(url);
  return { title: $('title').text(), description: $('meta[name=description]').attr('content') ?? '' };
};
const organization = (url) => {
  const $ = load(url);
  return $('script[type="application/ld+json"]').map((i, el) => JSON.parse($(el).text())).get().find((d) => d['@type'] === 'Organization');
};
const WHO = /\bhospitals\b.*\bdiagnostic lab(s|oratories)\b.*\bpublic health\b.*\bNGOs\b/i;

test('every page\'s title fits a search result and ends with the brand, after the words people search', () => {
  for (const url of pages()) {
    const { title } = meta(url);
    assert.ok(title.length <= 65, `${url}: ${title.length} characters, "${title}"`);
    assert.ok(title.endsWith(' | Lightening Lives'), `${url}: "${title}"`);
    assert.ok(!title.startsWith('Lightening Lives'), `${url}: "${title}"`);
  }
});

test('every page\'s description fits a search result: 50 to 155 characters (content file 6.5)', () => {
  for (const url of pages()) {
    const { description } = meta(url);
    assert.ok(description.length >= 50 && description.length <= 155, `${url}: ${description.length} characters`);
  }
});

test('the home page answers "genetic testing in India" and says who we currently work with', () => {
  const { title, description } = meta('/');
  assert.equal(title, 'Genetic testing for every community in India | Lightening Lives');
  assert.match(description, /^Genetic testing\b/);
  assert.match(description, /\bCurrently for\b/);
  assert.match(description, WHO);
  assert.match(description, /\bIndia\.$/);
});

test('the pages for each kind of partner name them, and Contact asks each of them', () => {
  assert.match(meta('/partners/').description, WHO);
  assert.match(meta('/contact/').description, /\bhospital\b.*\bdiagnostic lab\b.*\bpublic health programme\b.*\bNGO\b/);
  for (const url of ['/', '/partners/', '/our-work/']) assert.match(meta(url).title, /\bIndia\b/, url);
});

test('each test is searched for by its condition, which opens its title', () => {
  assert.equal(meta('/solutions/sickle-cell-anaemia/').title, 'ICMR-approved sickle cell test | Lightening Lives');
  assert.equal(meta('/solutions/thalassaemia/').title, 'Thalassaemia carrier test, beta and alpha | Lightening Lives');
  assert.equal(meta('/solutions/spinal-muscular-atrophy/').title, 'SMA genetic test for newborn screening | Lightening Lives');
  assert.equal(meta('/solutions/').title, 'Sickle cell, thalassaemia and SMA tests | Lightening Lives');
});

test('only the sickle cell test claims ICMR approval: no other test\'s title or description does', () => {
  assert.match(meta('/solutions/sickle-cell-anaemia/').title, /ICMR/);
  for (const url of ['/solutions/thalassaemia/', '/solutions/spinal-muscular-atrophy/', '/technology/', '/solutions/']) {
    const { title, description } = meta(url);
    assert.doesNotMatch(`${title} ${description}`, /ICMR/, url);
  }
});

test('no title or description mentions individuals, and none claims premarital screening (unconfirmed)', () => {
  for (const url of pages()) {
    const { title, description } = meta(url);
    assert.doesNotMatch(`${title} ${description}`, /individual|yourself|your family|premarital/i, url);
  }
});

test('the share preview says what the search result says', () => {
  for (const url of pages()) {
    const $ = load(url);
    assert.equal($('meta[property="og:title"]').attr('content'), $('title').text(), url);
    assert.equal($('meta[property="og:description"]').attr('content'), $('meta[name=description]').attr('content'), url);
  }
});

test('the structured data says where we work and who with, beside the footer\'s sentence word for word', () => {
  const site = JSON.parse(readFileSync('src/site/_data/site.json', 'utf8'));
  for (const url of ['/', '/solutions/thalassaemia/', '/contact/']) {
    const org = organization(url);
    assert.equal(org.description, site.about, url);
    assert.equal(org.disambiguatingDescription, 'We currently work with hospitals, diagnostic laboratories, public health programmes and NGOs across India.', url);
    assert.deepEqual(org.areaServed, { '@type': 'Country', name: 'India' }, url);
    for (const topic of ['Genetic testing', 'Sickle cell anaemia', 'Thalassaemia', 'Spinal muscular atrophy', 'Dried blood spot testing']) {
      assert.ok(org.knowsAbout.includes(topic), `${url}: ${topic}`);
    }
  }
  // The footer, which people read, keeps the sentence and gains nothing.
  assert.equal(load('/')('.foot-about').text().trim(), site.about);
});

test('llms.txt says who we work with straight after the company\'s sentence', () => {
  const blocks = read('llms.txt').split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  assert.equal(blocks[2], 'We currently work with hospitals, diagnostic laboratories, public health programmes and NGOs across India.');
  assert.equal(blocks[3], '## Pages');
});
