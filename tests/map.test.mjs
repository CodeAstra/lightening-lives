// The map's "Our work" layer and the film's labels: the fifteen sites of content 6.1 as the record, and
// on the map and in the film the nine states and Delhi they lie in, with the lines and sentence of 6.2
// (R2: places by state, no town pins).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { LAYERS, WORK, chip, said, stateChip } from '../src/js/map/map-layers.js';
import { GRID, LABELS, PLACES, RUNS } from '../src/js/map/india-cells.js';
import { STATES } from '../src/js/map/india-states.js';
import { load } from './helpers.mjs';

// Content 6.1, as written: site, state, and the five columns.
const SITES = [
  ['Delhi', 'Delhi'], ['Udaipur', 'Rajasthan'], ['Bhopal', 'Madhya Pradesh'], ['Jamshedpur', 'Jharkhand'],
  ['Bilaspur', 'Chhattisgarh'], ['Nandurbar', 'Maharashtra'], ['Nagpur', 'Maharashtra'], ['Dhule', 'Maharashtra'],
  ['Valsad', 'Gujarat'], ['Chandrapur', 'Maharashtra'], ['Mumbai', 'Maharashtra'], ['Kothagudem', 'Telangana'],
  ['Hyderabad', 'Telangana'], ['Mysore', 'Karnataka'], ['Gudalur', 'Tamil Nadu']];
const COLUMNS = {
  'SCA population': ['Delhi', 'Udaipur', 'Bhopal', 'Jamshedpur', 'Bilaspur', 'Nandurbar', 'Nagpur', 'Valsad', 'Chandrapur', 'Mumbai', 'Kothagudem', 'Hyderabad', 'Mysore', 'Gudalur'],
  'SCA newborn': ['Udaipur', 'Nagpur', 'Dhule'],
  'Sickle-beta thal. population': ['Nandurbar', 'Valsad', 'Kothagudem'],
  'Sickle-beta thal. newborn': ['Nandurbar'],
  'Beta thal. population': ['Nandurbar', 'Kothagudem'],
};
// Content 6.2: what the state panel says under "Our work", naming the state's screening, not its towns.
const LINES = {
  'Delhi': 'Population screening for sickle cell anaemia.',
  'Rajasthan': 'Population and newborn screening for sickle cell anaemia.',
  'Madhya Pradesh': 'Population screening for sickle cell anaemia.',
  'Jharkhand': 'Population screening for sickle cell anaemia.',
  'Chhattisgarh': 'Population screening for sickle cell anaemia.',
  'Maharashtra': 'Population and newborn screening for sickle cell anaemia and for sickle-beta thalassaemia, and population screening for beta thalassaemia, at five sites.',
  'Gujarat': 'Population screening for sickle cell anaemia and sickle-beta thalassaemia.',
  'Telangana': 'Our laboratory and office, and population screening for sickle cell anaemia, sickle-beta thalassaemia and beta thalassaemia, at two sites.',
  'Karnataka': 'Population screening for sickle cell anaemia.',
  'Tamil Nadu': 'Population screening for sickle cell anaemia.',
};
const TOWNS = /Delhi to|Udaipur|Bhopal|Jamshedpur|Bilaspur|Nandurbar|Nagpur|Dhule|Valsad|Chandrapur|Mumbai|Kothagudem|Hyderabad\b(?!, Telangana)|Mysore|Gudalur/;
const stateName = (id) => STATES.find((s) => s.id === id)?.n;

test('fifteen sites in the order of 6.1', () => {
  assert.deepEqual(WORK.map((p) => p.name), SITES.map(([name]) => name));
  assert.deepEqual(WORK.map((p) => stateName(p.state)), SITES.map(([, state]) => state));
  assert.deepEqual(WORK.find((p) => p.name === 'Nandurbar').screened, ['SCA population', 'Sickle-beta thal. population', 'Sickle-beta thal. newborn', 'Beta thal. population']);
  assert.deepEqual(WORK.find((p) => p.name === 'Dhule').screened, ['SCA newborn']);
});

test('what was screened at each site is 6.1, column by column, and nothing else', () => {
  for (const [column, names] of Object.entries(COLUMNS))
    assert.deepEqual(WORK.filter((p) => p.screened.includes(column)).map((p) => p.name), names, column);
  for (const p of WORK) for (const s of p.screened) assert.ok(s in COLUMNS, `${p.name}: ${s}`);
});

test('the Our work layer marks the nine states and Delhi, as the other layers mark theirs, and says 6.2', () => {
  const marked = STATES.filter((state) => LAYERS.work.level(state.id) > 0).map((state) => state.id);
  assert.deepEqual(marked.sort(), ['DL', 'RJ', 'MP', 'JH', 'CG', 'MH', 'GJ', 'TS', 'KA', 'TN'].sort());
  // Fully, as the other two layers mark their strongest states: so each is named on the map.
  for (const id of marked) assert.equal(LAYERS.work.level(id), 1, id);
  for (const state of STATES) assert.equal(LAYERS.work.note(state.id), LINES[state.n] ?? '', state.n);
  for (const line of Object.values(LAYERS.work.states)) assert.doesNotMatch(line, TOWNS);
  assert.equal(LAYERS.work.sentence, 'Our laboratory is in Hyderabad, Telangana. We have run population and newborn screening at 15 sites in nine states and Delhi.');
  // No pins for towns: the layer marks states only. The one mark the script draws is the emblem, one
  // per state with a site, keyed by the state (25 October 2026), never a town's position.
  assert.equal(LAYERS.work.places, 0);
  const main = readFileSync('src/js/site/main.js', 'utf8');
  assert.doesNotMatch(main, /map-pins|PLACES/);
  assert.match(main, /if \(LAYERS\.work\.states\[state\.id\]\) \{[\s\S]*?map-emblem/);
});

test('a state\'s chip names it and what was screened there, in the shortest form (6.2)', () => {
  assert.equal(stateChip('MH'), 'Maharashtra · SCA, sickle-beta thal., beta thal. · population and newborn');
  assert.equal(stateChip('TS'), 'Telangana · Laboratory · SCA, sickle-beta thal., beta thal. · population');
  assert.equal(stateChip('RJ'), 'Rajasthan · SCA · population and newborn');
  assert.equal(stateChip('GJ'), 'Gujarat · SCA, sickle-beta thal. · population');
  assert.equal(stateChip('DL'), 'Delhi · SCA · population');
  assert.equal(stateChip('UP'), '', 'a state with no site has no chip');
});

test('the sites are placed on the map as its first pins were', () => {
  assert.deepEqual(PLACES.map((p) => p.name), WORK.map((p) => p.name));
  assert.equal(new Set(PLACES.map((p) => p.id)).size, 15);
  assert.ok(PLACES.some((p) => p.id === 'hyderabad'), 'the open card lies in Hyderabad\'s cell');
  // The approved map's pins, from the same projection: each new position is within a hair of the old.
  const before = { Hyderabad: [-12.87, 17.25], Nandurbar: [-25.67, 4.52], Kothagudem: [-6.44, 16.73] };
  for (const [name, [x, z]] of Object.entries(before)) {
    const p = PLACES.find((place) => place.name === name);
    assert.ok(Math.hypot(p.x - x, p.z - z) < 0.05, `${name} at ${p.x}, ${p.z}`);
  }
  // Each site lies on its own state: a card of that state is within one card's length of the pin.
  const cells = [];
  RUNS.forEach((row, r) => { for (let i = 0; i < row.length; i += 3) for (let c = row[i]; c <= row[i + 1]; c += 1) cells.push({ x: GRID.x0 + (c + 0.5) * GRID.pitchX, z: GRID.z0 + (r + 0.5) * GRID.pitchZ, state: STATES[row[i + 2]].id }); });
  for (const site of WORK) {
    const p = PLACES.find((place) => place.name === site.name);
    assert.ok(cells.some((c) => c.state === site.state && Math.hypot(c.x - p.x, c.z - p.z) < 1.3), `${site.name} is not on ${stateName(site.state)}`);
  }
});

test('a pin\'s chip says what was screened in the shortest form, and its name says it in full (6.2)', () => {
  const site = (name) => WORK.find((p) => p.name === name);
  assert.equal(chip(site('Nandurbar')), 'SCA, sickle-beta thal., beta thal. · population and newborn');
  assert.equal(chip(site('Dhule')), 'SCA · newborn');
  assert.equal(chip(site('Udaipur')), 'SCA · population and newborn');
  assert.equal(chip(site('Valsad')), 'SCA, sickle-beta thal. · population');
  assert.equal(chip(site('Hyderabad')), 'Laboratory · SCA · population');
  assert.equal(said(site('Nandurbar')), 'Nandurbar, Maharashtra: population screening for sickle cell anaemia, sickle-beta thalassaemia and beta thalassaemia, and newborn screening for sickle-beta thalassaemia.');
  assert.equal(said(site('Udaipur')), 'Udaipur, Rajasthan: population and newborn screening for sickle cell anaemia.');
  assert.equal(said(site('Hyderabad')), 'Hyderabad, Telangana: our laboratory and office, and population screening for sickle cell anaemia.');
  assert.equal(said(site('Delhi')), 'Delhi: population screening for sickle cell anaemia.', 'a city that is its own state is named once');
  assert.equal(said(site('Dhule')), 'Dhule, Maharashtra: newborn screening for sickle cell anaemia.');
});

test('the home page says what the map\'s script says, and the film pins every state we work in (R2)', () => {
  const $ = load('/');
  assert.equal($('#map input[value=work]').attr('data-readout'), LAYERS.work.sentence);
  const named = $('.hero [data-places] [data-place]').map((i, li) => [[li.attribs['data-place'], $(li).find('b').contents().first().text().trim()]]).get();
  assert.deepEqual(named, [['DL', 'Delhi'], ['RJ', 'Rajasthan'], ['GJ', 'Gujarat'], ['MP', 'Madhya Pradesh'], ['JH', 'Jharkhand'], ['CG', 'Chhattisgarh'], ['MH', 'Maharashtra'], ['TS', 'Telangana'], ['KA', 'Karnataka'], ['TN', 'Tamil Nadu']]);
  assert.deepEqual(named.map(([id]) => id).sort(), Object.keys(LAYERS.work.states).sort(), 'one pin for each state with a site');
  // Each label is placed on its own state.
  const cells = [];
  RUNS.forEach((row, r) => { for (let i = 0; i < row.length; i += 3) for (let c = row[i]; c <= row[i + 1]; c += 1) cells.push({ x: GRID.x0 + (c + 0.5) * GRID.pitchX, z: GRID.z0 + (r + 0.5) * GRID.pitchZ, state: STATES[row[i + 2]].id }); });
  for (const [id] of named) {
    const label = LABELS.find((l) => l.id === id);
    assert.ok(label, id);
    assert.ok(cells.some((c) => c.state === id && Math.hypot(c.x - label.x, c.z - label.z) < 0.8), `${id}'s label is not on ${stateName(id)}`);
  }
});
