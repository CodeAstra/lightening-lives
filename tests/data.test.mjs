// Phase 4, Task 4.0: the JSON data the inner pages read (content/website-content.md Part 6, 5.12 to 5.14).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const read = (n) => JSON.parse(readFileSync(new URL(`../src/site/_data/${n}.json`, import.meta.url), 'utf8'));
const sites = read('sites');
const tests = read('tests');
const team = read('team');
const collaborators = read('collaborators');
const names = (k) => sites.filter((s) => s[k]).map((s) => s.name);

test('sites.json: 15 rows in 6.1 order, each with its state and boolean flags', () => {
  assert.equal(sites.length, 15);
  assert.deepEqual(sites.map((s) => s.name), ['Delhi', 'Udaipur', 'Bhopal', 'Jamshedpur', 'Bilaspur', 'Nandurbar', 'Nagpur', 'Dhule', 'Valsad', 'Chandrapur', 'Mumbai', 'Kothagudem', 'Hyderabad', 'Mysore', 'Gudalur']);
  assert.deepEqual(sites.map((s) => s.state), ['Delhi', 'Rajasthan', 'Madhya Pradesh', 'Jharkhand', 'Chhattisgarh', 'Maharashtra', 'Maharashtra', 'Maharashtra', 'Gujarat', 'Maharashtra', 'Maharashtra', 'Telangana', 'Telangana', 'Karnataka', 'Tamil Nadu']);
  for (const s of sites) for (const k of ['sca_pop', 'sca_nb', 'sbt_pop', 'sbt_nb', 'bt_pop']) assert.equal(typeof s[k], 'boolean', `${s.name}.${k}`);
});

test('sites.json: the screening flags match 6.1', () => {
  assert.equal(names('sca_pop').length, 14);
  assert.ok(!names('sca_pop').includes('Dhule'));
  assert.deepEqual(names('sca_nb'), ['Udaipur', 'Nagpur', 'Dhule']);
  assert.deepEqual(names('sbt_pop'), ['Nandurbar', 'Valsad', 'Kothagudem']);
  assert.deepEqual(names('sbt_nb'), ['Nandurbar']);
  assert.deepEqual(names('bt_pop'), ['Nandurbar', 'Kothagudem']);
});

test('tests.json: 11 rows in three families', () => {
  assert.equal(tests.length, 11);
  const count = (f) => tests.filter((t) => t.family === f).length;
  assert.equal(count('Haemoglobinopathy'), 6);
  assert.equal(count('Musculopathy'), 3);
  assert.equal(count('In development'), 2);
  assert.equal(tests[0].name, 'LitLife™-SCA');
  assert.equal(tests[1].status, 'Available; used at 3 sites');
  assert.equal(tests[3].status, 'Available');
  assert.equal(tests[4].sample, undefined);
  assert.equal(tests[7].name, undefined);
  assert.equal(tests[7].for, 'Duchenne muscular dystrophy');
  assert.equal(tests[8].name, undefined);
  assert.equal(tests[9].status, 'Coming soon');
});

test('team.json: founders, team, patron, advisers', () => {
  assert.equal(team.founders.length, 2);
  assert.equal(team.team.length, 6);
  assert.equal(team.patron.length, 1);
  assert.equal(team.advisers.length, 2);
  assert.deepEqual([...team.founders, ...team.team, ...team.patron, ...team.advisers].map((p) => p.slug), [
    'giriraj-ratan-chandak', 'nidhi-chandak', 'abhishek-chandak', 'manisha-arumalla', 'punyasri-pskdb', 'mehraj-begum',
    'pruthvi-bellamkonda', 'jyothi-vislavath', 'd-nageshwar-reddy', 'kalyanaraman-kumaran', 'gv-krishnaveni']);
  assert.equal(team.founders[0].name, 'Dr. Giriraj Ratan Chandak');
  assert.equal(team.founders[0].credentials, 'MD, PhD, DNB');
  assert.equal(team.founders[0].role, 'Founder and CEO');
  assert.equal(team.founders[1].role, 'Co-Founder');
  assert.ok(team.founders.every((p) => p.photo === 'founder-1.jpg'));
  assert.equal(team.team[0].name, 'Mr. Abhishek Chandak');
  assert.equal(team.team[5].name, 'Jyothi Vislavath');
  assert.equal(team.patron[0].role, 'Founder of AIG Hospitals');
  assert.equal(team.advisers[0].name, 'Prof Kalyanaraman Kumaran');
  for (const p of [...team.founders, ...team.team, ...team.patron, ...team.advisers]) {
    assert.ok(existsSync(new URL(`../content/assets/people/${p.photo}`, import.meta.url)), `${p.slug} photo ${p.photo}`);
    assert.ok(p.name && p.slug);
  }
  for (const p of [...team.founders, ...team.team]) assert.ok(Array.isArray(p.bio) && p.bio.length >= 1, p.slug);
  for (const p of [...team.patron, ...team.advisers]) assert.equal(p.bio, undefined, p.slug);
  assert.equal(team.founders[0].bio.length, 2);
});

test('collaborators.json: thirteen names as 5.14 types them', () => {
  assert.equal(collaborators.length, 13);
  assert.equal(collaborators[0], 'CSIR-Centre for Cellular and Molecular Biology (CCMB)');
  assert.equal(collaborators[11], 'Indigenous Development Organization (IDO)');
  assert.equal(collaborators[12], 'NASCO');
});

test('credits.json exists', () => {
  assert.ok(existsSync(new URL('../src/site/_data/credits.json', import.meta.url)));
});

test('no value in the data files carries a [TBC or [PLACEHOLDER bracket', () => {
  for (const n of ['sites', 'tests', 'team', 'collaborators']) {
    const s = readFileSync(new URL(`../src/site/_data/${n}.json`, import.meta.url), 'utf8');
    assert.ok(!/\[(TBC|PLACEHOLDER)/.test(s), n);
  }
});
