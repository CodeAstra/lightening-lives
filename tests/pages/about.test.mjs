// Phase 4, Task 4.5: About (/about/, content/website-content.md 5.12) and Team (/about/team/, 5.13).
// The copy is the content file's as written: [TBC] brackets stripped with the sentence before them
// kept, [PLACEHOLDER] entries left out (the founding year, the LLP number, the patron's and the
// advisers' blurbs). The people are src/site/_data/team.json; the portraits are the company's own
// (person-…, never upscaled, never credited), shown with consent pending Part 8 item 22.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const TEAM = JSON.parse(readFileSync('src/site/_data/team.json', 'utf8'));
const EVERYONE = [...TEAM.founders, ...TEAM.team, ...TEAM.patron, ...TEAM.advisers];
const words = (s) => s.replace(/\s+/g, ' ').trim().split(' ').filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

function page(url) {
  let cached;
  const $ = (...args) => (cached ??= load(url))(...args);
  const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
  const texts = (selector) => $(selector).map((i, el) => text(el)).get();
  const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();
  // A person's name: the h3, without the credentials set after it.
  const name = (person) => $(person).find('h3').clone().find('.person-credentials').remove().end().text().replace(/\s+/g, ' ').trim();
  return { $, text, texts, links, name };
}

// ---------- About ----------
const about = page('/about/');

test('About: title, description, label, h1 and lead (5.12)', () => {
  const { $, text } = about;
  assert.equal($('title').text(), 'About Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'Lightening Lives LLP is a Hyderabad healthcare technology company founded by Dr. Giriraj Ratan Chandak, formerly of CSIR-CCMB, to make genetic diagnosis reach everyone. Patented in India and Japan; approved by ICMR.');
  assert.equal(text('.page-open .label'), 'About');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'A genetic diagnosis should not depend on where you live');
  assert.equal(text('.page-open .lead'), 'Lightening Lives is an innovation-driven healthcare technology company in Hyderabad. We develop genetic tests that work outside specialised laboratories, so that diagnosis can reach everyone.');
});

test('About: the h2s in 5.12\'s order, each section labelled by its own heading', () => {
  const { $, texts } = about;
  assert.deepEqual(texts('main h2:not(.label)'), [
    'How the company began', 'Why, how and what, in that order', 'Founders', 'The company in brief',
    'What stands behind the tests', 'Tell us what your programme needs']);
  $('main > section').each((i, s) => {
    for (const id of $(s).attr('aria-labelledby').split(' ')) assert.equal($(`#${id}`).closest('section')[0], s, id);
  });
});

test('About: how the company began, in three paragraphs, the founding year left out', () => {
  const { $, text } = about;
  const section = $('h2').filter((i, h) => text(h) === 'How the company began').closest('section');
  assert.deepEqual(section.find('p').map((i, p) => text(p)).get(), [
    'Lightening Lives grew out of more than 25 years of work in genetic and molecular diagnostics, alongside clinicians, the health ministry and its district health authorities, NGOs, universities and companies.',
    'Over those years one thing kept showing. The people who most need a genetic diagnosis are often the least likely to get one, because the test needs a laboratory, equipment and specialists that their district does not have.',
    'We started the company to develop tests that do not need them. The first, for sickle cell anaemia, was built for the National Sickle Cell Anaemia Elimination Mission, approved by ICMR, and patented in India and Japan. More have followed, for the other haemoglobinopathies and for the musculopathies.']);
  assert.doesNotMatch(text(section), /\b(19|20)\d\d\b/);
});

test('About: why, how and what, as three columns', () => {
  const { $, text } = about;
  const section = $('h2').filter((i, h) => text(h) === 'Why, how and what, in that order').closest('section');
  assert.deepEqual(section.find('.audiences > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['Why', 'The burden of genetic disorders is large, and testing is hard to reach: too far, too slow, too costly, too dependent on infrastructure. A different kind of test can change that.'],
    ['How', 'By making genetic and molecular tests robust, simple, affordable and easy to use, with a sample that is easy to take, a result that needs no second test, and results that come back quickly.'],
    ['What', 'Tests that make early diagnosis practical, newborn screening above all, so that treatment starts on time. And tests that make carrier screening and counselling routine, so that fewer families meet a genetic disorder unprepared.']]);
});

test('About: the mission and the vision, each with its label, the vision in the company\'s own words', () => {
  const { texts } = about;
  assert.deepEqual(texts('.vision .label'), ['Our mission', 'Our vision']);
  assert.deepEqual(texts('.vision .vision-line'), [
    'To make molecular diagnosis accessible to all by developing innovative REASSURED genetic tests, with simple, affordable, minimally invasive sample collection and a quick turnaround for results.',
    'To make precision genetic diagnosis accessible to every individual, through innovative technologies that need only a single drop of blood.']);
});

test('About: the founders, beside their one joint portrait', () => {
  const { $, text, name } = about;
  const people = $('#founders .person');
  assert.equal(people.length, 2);
  assert.deepEqual(people.map((i, p) => name(p)).get(), ['Dr. Giriraj Ratan Chandak', 'Mrs. Nidhi Chandak']);
  assert.deepEqual(people.map((i, p) => $(p).attr('id')).get(), ['giriraj-ratan-chandak', 'nidhi-chandak']);
  assert.equal(text(people.eq(0).find('.person-credentials')), 'MD, PhD, DNB');
  assert.deepEqual(people.map((i, p) => text($(p).find('.person-role'))).get(), ['Founder and CEO', 'Co-Founder']);
  // One portrait of both, shown once, not inside either entry.
  const img = $('#founders img');
  assert.equal(img.length, 1);
  assert.equal(img.attr('alt'), 'Dr. Giriraj Ratan Chandak and Mrs. Nidhi Chandak');
  assert.match(img.attr('src'), /^\/assets\/img\/person-founders-\d+\.webp$/);
  assert.equal(people.find('img').length, 0);
  // The bios word for word; a paragraph over 60 words is split at a sentence (R1).
  people.each((i, p) => {
    const paras = $(p).find('p:not(.person-role)').map((j, q) => text(q)).get();
    assert.equal(paras.join(' '), TEAM.founders[i].bio.join(' '), TEAM.founders[i].slug);
    for (const q of paras) assert.ok(words(q) <= 60, `${words(q)} words: ${q.slice(0, 40)}`);
  });
  assert.deepEqual(people.eq(0).find('p:not(.person-role)').map((j, q) => text(q)).get().slice(0, 2), [
    'Dr. Chandak is a physician, scientist and medical researcher who works on molecular diagnostics and genetic disorders. He was Chief Scientist at the CSIR-Centre for Cellular and Molecular Biology (CCMB), Hyderabad, and is a founding faculty member and former Director of the Centre for DNA Fingerprinting and Diagnostics (CDFD).',
    'His research on genetic disease includes work on sickle cell anaemia among populations in several states that have had little access to testing.']);
});

test('About: the company in brief is a table of eight rows, without the registration placeholder', () => {
  const { $, text } = about;
  const table = $('h2').filter((i, h) => text(h) === 'The company in brief').closest('section').find('table');
  assert.equal(table.length, 1);
  assert.equal(table.find('tbody th[scope="row"]').length, 8);
  assert.deepEqual(table.find('tbody tr').map((i, tr) => [[text($(tr).find('th')), text($(tr).find('td'))]]).get(), [
    ['Name', 'Lightening Lives LLP'],
    ['What it is', 'A limited liability partnership. An innovation-driven healthcare technology company'],
    ['What it does', 'Develops molecular diagnostics for inherited conditions, and builds them into solutions for institutions'],
    ['Who it works with', 'Hospitals, laboratories, clinicians, government health programmes, NGOs and CSR funders'],
    ['Approvals and patents', 'LitLife™-SCA approved by ICMR. Patents granted in India and Japan; a patent published internationally'],
    ['Where its tests are made', 'In India, by a third-party manufacturer that holds a quality certification'],
    ['Laboratory and corporate office', 'Flat No. 201, 2nd Floor, S B Hare Krishna Towers, H.No. 4-7-195/2/55, HMT Nagar, Nacharam, Hyderabad, Telangana 500076'],
    ['Registered office', 'D-306, Sy. No. 117, Indu Aranya Pallavi, GSI (SR), Bandlaguda, Hayathnagar, Hyderabad, Telangana 500068']]);
  assert.doesNotMatch(text(table), /Registration|LLP identification/);
});

test('About: the evidence is the home page\'s, from one include, then the two links', () => {
  const { $, links } = about;
  const strip = (html) => html.replace(/\s+/g, ' ').trim();
  assert.equal($('#proof .proof > li').length, 4);
  assert.equal(strip($('#proof .proof').html()), strip(load('/')('#proof .proof').html()));
  assert.deepEqual(links('#proof a.link'), [['Meet the team', '/about/team/'], ['Who we work with', '/partnerships/']]);
  assert.equal(load('/')('#proof a').length, 0, 'the home page\'s evidence has no links');
});

test('About: the closing band is 4.5\'s; no notice; no bracket; the portrait is not credited', () => {
  const { $, text, links } = about;
  assert.equal(text('.closing h2'), 'Tell us what your programme needs');
  assert.equal(text('.closing .lead'), 'Tell us the condition you need to test for and where the testing will happen. We will take it from there.');
  assert.deepEqual(links('.closing .btn'), [['Partner with us', '/partnerships/'], ['Contact us', '/contact/']]);
  assert.equal($('.notice').length, 0);
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[|\]|TBC|PLACEHOLDER/);
  assert.equal($('footer .credits').length, 0);
});

// ---------- Team ----------
const team = page('/about/team/');

test('Team: title, description, label, h1 and lead (5.13)', () => {
  const { $, text } = team;
  assert.equal($('title').text(), 'Our team | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'The scientists, laboratory specialists and operations staff of Lightening Lives, with its patron and advisory board.');
  assert.equal(text('.page-open .label'), 'Team');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'The people behind the tests');
  assert.equal(text('.page-open .lead'), 'A small team of scientists, laboratory specialists and operations staff, led by the company\'s founders and guided by a patron and an advisory board.');
});

test('Team: the h2s in 5.13\'s order, each section labelled by its own heading', () => {
  const { $, texts } = team;
  assert.deepEqual(texts('main h2'), ['Founders', 'Team', 'Patron', 'Advisory board', 'Work with us']);
  $('main > section').each((i, s) => {
    for (const id of $(s).attr('aria-labelledby').split(' ')) assert.equal($(`#${id}`).closest('section')[0], s, id);
  });
});

test('Team: eleven entries, each with its slug as its id (3.2) and its portrait named by its alt', () => {
  const { $, name } = team;
  const people = $('.person');
  assert.equal(people.length, 11);
  assert.deepEqual(people.map((i, p) => $(p).attr('id')).get(), EVERYONE.map((p) => p.slug));
  assert.deepEqual(people.map((i, p) => name(p)).get(), EVERYONE.map((p) => p.name));
  people.each((i, p) => $(p).find('img').each((j, img) => assert.equal(img.attribs.alt, name(p))));
  // Everyone but the founders, whose one portrait is on About, has a portrait at its true size.
  assert.equal($('.person img').length, 9);
  $('.person img').each((i, img) => {
    assert.match(img.attribs.src, /^\/assets\/img\/person-[a-z-]+-370\.webp$/);
    assert.equal(img.attribs.width, '370');
    assert.equal(img.attribs.height, '431');
  });
});

test('Team: the founders lead with their portrait, names, credentials and roles, and the way to their bios on About (25 October 2026)', () => {
  const { $, text, links } = team;
  const section = $('h2').filter((i, h) => text(h) === 'Founders').closest('section');
  assert.deepEqual(section.find('.person').map((i, p) => [[team.name(p), text($(p).find('.person-role'))]]).get(), [
    ['Dr. Giriraj Ratan Chandak', 'Founder and CEO'], ['Mrs. Nidhi Chandak', 'Co-Founder']]);
  // The founders lead the page (design review, 25 October 2026): their joint portrait and credentials; bios stay on About.
  assert.deepEqual(section.find('.person-credentials').map((i, c) => text(c)).get(), ['MD, PhD, DNB']);
  assert.equal(section.find('.founders-photo img').length, 1);
  assert.equal(section.find('.person p:not(.person-role)').length, 0);
  assert.deepEqual(links(section.find('a.link')), [['Read about the founders', '/about/#founders']]);
});

test('Team: the six, each with role and bio as written', () => {
  const { $, text } = team;
  const section = $('h2').filter((i, h) => text(h) === 'Team').closest('section');
  const people = section.find('.person');
  assert.equal(people.length, 6);
  people.each((i, p) => {
    assert.equal(text($(p).find('.person-role')), TEAM.team[i].role);
    assert.deepEqual($(p).find('p:not(.person-role)').map((j, q) => text(q)).get(), TEAM.team[i].bio);
  });
});

test('Team: the patron with his role, the advisers by name; their blurbs wait for Part 8', () => {
  const { $, text } = team;
  const patron = $('#d-nageshwar-reddy');
  assert.equal(text(patron.find('.person-role')), 'Founder of AIG Hospitals');
  assert.equal(patron.closest('section').find('h2#patron-h').length, 1);
  for (const slug of ['d-nageshwar-reddy', 'kalyanaraman-kumaran', 'gv-krishnaveni']) {
    assert.equal($(`#${slug} img`).length, 1, slug);
    assert.equal($(`#${slug} p:not(.person-role)`).length, 0, slug);
  }
  for (const slug of ['kalyanaraman-kumaran', 'gv-krishnaveni']) assert.equal(text($(`#${slug} .person-role`)), 'Adviser', slug);
});

test('Team: the closing band is 5.13\'s; no bracket; no credits', () => {
  const { $, text, links } = team;
  assert.equal(text('.closing h2'), 'Work with us');
  assert.equal(text('.closing .lead'), 'Most of our work begins as a collaboration with an institution.');
  assert.deepEqual(links('.closing .btn'), [['Partner with us', '/partnerships/'], ['Contact us', '/contact/']]);
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[|\]|TBC|PLACEHOLDER/);
  assert.equal($('footer .credits').length, 0);
});
