// What the map can show, by state. Written by hand: edit here if the programme data changes.
// Ported from designs/src/js/drop/map-layers.js; the designs keep their own copy, which this site
// does not read.

import { STATES } from './india-states.js';

// Sickle cell: the states the central belt of highest frequency runs through (Hockham et al.,
// Scientific Reports, 2018: "a belt stretching across central India, extending from southeastern
// Gujarat to southwestern Odisha"), then the other focus states of the National Sickle Cell Anaemia
// Elimination Mission, 17 in all.
//
// Thalassaemia: "prevalent across the country, with an average frequency of carriers being 3-4%. A
// higher frequency has been observed in certain communities, such as Sindhis, Punjabis, Gujaratis,
// Bengalis, Mahars, Kolis, Saraswats, Lohanas and Gaurs" (National Health Mission, Guidelines for
// Prevention and Control of Hemoglobinopathies in India, 2016). The places marked are where screening
// has measured it: Ludhiana 3.96% and Kolkata 3.64%, the two highest of six cities (Mohanty et al.,
// J Community Genet, 2013, where Vadodara was 2.68%, Mumbai 2.55%, Bengaluru 2.16% and Dibrugarh
// 1.48%); Delhi 5.47% of schoolchildren against Mumbai's 2.68% (Madan et al., Indian J Hum Genet,
// 2010); and Gujarat and Maharashtra, home to most of the communities the guidelines name, where
// district-by-district screening found frequencies differing widely from one district to the next
// (Colah et al., Br J Haematol, 2010). Frequencies differ more between communities than between
// states, so the wording says "reported in", not "highest in".
//
// Indicative only, shown by state.
export const SICKLE_BELT = ['GJ', 'MP', 'MH', 'CG', 'OD'];
export const SICKLE = ['GJ', 'MH', 'RJ', 'MP', 'JH', 'CG', 'WB', 'OD', 'TN', 'TS', 'AP', 'KA', 'AS', 'UP', 'KL', 'BR', 'UK'];
export const THAL = ['PB', 'DL', 'GJ', 'MH', 'WB'];
const THAL_NOTE = {
  PB: 'Higher carrier frequencies reported: Ludhiana was the highest of six cities screened.',
  DL: 'Higher carrier frequencies reported among schoolchildren screened.',
  WB: 'Higher carrier frequencies reported: Kolkata was the second highest of six cities screened.',
  GJ: 'Higher carrier frequencies reported in some communities and districts.',
  MH: 'Higher carrier frequencies reported in some communities and districts.',
};

// Where we have worked: the fifteen sites of population and newborn screening on the conference
// poster (content file 6.1), in its order. `state` is the state's code in india-states.js; `lat` and
// `lon` are the town's, from a gazetteer; `screened` is the poster's columns, by their short names.
// Hyderabad is also the laboratory and office.
export const WORK = [
  { name: 'Delhi', state: 'DL', lat: 28.61, lon: 77.21, screened: ['SCA population'] },
  { name: 'Udaipur', state: 'RJ', lat: 24.58, lon: 73.71, screened: ['SCA population', 'SCA newborn'] },
  { name: 'Bhopal', state: 'MP', lat: 23.26, lon: 77.41, screened: ['SCA population'] },
  { name: 'Jamshedpur', state: 'JH', lat: 22.8, lon: 86.2, screened: ['SCA population'] },
  { name: 'Bilaspur', state: 'CG', lat: 22.08, lon: 82.15, screened: ['SCA population'] },
  { name: 'Nandurbar', state: 'MH', lat: 21.37, lon: 74.24, screened: ['SCA population', 'Sickle-beta thal. population', 'Sickle-beta thal. newborn', 'Beta thal. population'] },
  { name: 'Nagpur', state: 'MH', lat: 21.15, lon: 79.09, screened: ['SCA population', 'SCA newborn'] },
  { name: 'Dhule', state: 'MH', lat: 20.9, lon: 74.77, screened: ['SCA newborn'] },
  { name: 'Valsad', state: 'GJ', lat: 20.61, lon: 72.93, screened: ['SCA population', 'Sickle-beta thal. population'] },
  { name: 'Chandrapur', state: 'MH', lat: 19.96, lon: 79.3, screened: ['SCA population'] },
  { name: 'Mumbai', state: 'MH', lat: 19.08, lon: 72.88, screened: ['SCA population'] },
  { name: 'Kothagudem', state: 'TS', lat: 17.55, lon: 80.62, screened: ['SCA population', 'Sickle-beta thal. population', 'Beta thal. population'] },
  { name: 'Hyderabad', state: 'TS', lat: 17.39, lon: 78.49, screened: ['SCA population'], laboratory: true },
  { name: 'Mysore', state: 'KA', lat: 12.3, lon: 76.64, screened: ['SCA population'] },
  { name: 'Gudalur', state: 'TN', lat: 11.5, lon: 76.5, screened: ['SCA population'] },
].map((site) => ({ id: site.name.toLowerCase(), ...site }));

// Where a place lies on the map, in its units (x east, z south, origin at the middle of the country):
// the projection the map's outlines were drawn in, a Mercator with one scale on both axes, centred at
// 82.758° E and 22.759° N. Fitted to the approved map's pins, which it reproduces to 0.01 of a unit.
const PROJECTION = { scale: 172.7, lon: 82.758, lat: 22.759 };
const mercator = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
export function project(lat, lon) {
  const round = (value) => Math.round(value * 100) / 100;
  return {
    x: round(PROJECTION.scale * (((lon - PROJECTION.lon) * Math.PI) / 180)),
    z: round(-PROJECTION.scale * (mercator(lat) - mercator(PROJECTION.lat))),
  };
}

// What the state panel says under "Our work" for each state with a site (content file 6.2): the
// state and what was screened there, not its towns (R2). Which town saw which screening is WORK above.
const WORK_STATES = {
  DL: 'Population screening for sickle cell anaemia.',
  RJ: 'Population and newborn screening for sickle cell anaemia.',
  MP: 'Population screening for sickle cell anaemia.',
  JH: 'Population screening for sickle cell anaemia.',
  CG: 'Population screening for sickle cell anaemia.',
  MH: 'Population and newborn screening for sickle cell anaemia and for sickle-beta thalassaemia, and population screening for beta thalassaemia, at five sites.',
  GJ: 'Population screening for sickle cell anaemia and sickle-beta thalassaemia.',
  TS: 'Our laboratory and office, and population screening for sickle cell anaemia, sickle-beta thalassaemia and beta thalassaemia, at two sites.',
  KA: 'Population screening for sickle cell anaemia.',
  TN: 'Population screening for sickle cell anaemia.',
};

// The conditions in the poster's columns: the short name a pin's chip uses, and the name in full.
const CONDITIONS = [
  { column: 'SCA', short: 'SCA', full: 'sickle cell anaemia' },
  { column: 'Sickle-beta thal.', short: 'sickle-beta thal.', full: 'sickle-beta thalassaemia' },
  { column: 'Beta thal.', short: 'beta thal.', full: 'beta thalassaemia' },
];
const KINDS = ['population', 'newborn'];
const conditionsOf = (site, kind) => CONDITIONS.filter((c) => site.screened.includes(`${c.column} ${kind}`));
const list = (words) => (words.length < 2 ? words.join('') : `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}`);

// What was screened at a site, in the shortest form (content 6.2), as "SCA, sickle-beta thal., beta
// thal. · population and newborn"; for Our work's sites table (5.11).
export function chip(site) {
  const conditions = CONDITIONS.filter((c) => KINDS.some((kind) => site.screened.includes(`${c.column} ${kind}`)));
  const kinds = KINDS.filter((kind) => conditionsOf(site, kind).length);
  return [site.laboratory ? 'Laboratory' : '', conditions.map((c) => c.short).join(', '), list(kinds)].filter(Boolean).join(' · ');
}

// A state's chip on the map (content 6.2): its name, then what was screened at its sites taken
// together, as "Maharashtra · SCA, sickle-beta thal., beta thal. · population and newborn".
export function stateChip(id) {
  const sites = WORK.filter((site) => site.state === id);
  if (!sites.length) return '';
  const all = { screened: [...new Set(sites.flatMap((site) => site.screened))], laboratory: sites.some((site) => site.laboratory) };
  return `${STATES.find((state) => state.id === id).n} · ${chip(all)}`;
}

// The same in full, for a screen reader: "Udaipur, Rajasthan: population and newborn screening for
// sickle cell anaemia."
export function said(site) {
  const [population, newborn] = KINDS.map((kind) => conditionsOf(site, kind).map((c) => c.full));
  const parts = population.join() === newborn.join()
    ? [`population and newborn screening for ${list(population)}`]
    : [population.length ? `population screening for ${list(population)}` : '', newborn.length ? `newborn screening for ${list(newborn)}` : ''].filter(Boolean);
  if (site.laboratory) parts.unshift('our laboratory and office');
  // The parts have commas of their own, so the last is joined with ", and".
  const words = parts.length > 1 ? `${parts.slice(0, -1).join(', ')}, and ${parts[parts.length - 1]}` : parts[0];
  const state = STATES.find((entry) => entry.id === site.state).n;
  return `${state === site.name ? site.name : `${site.name}, ${state}`}: ${words}.`;
}

// The states the film names in chips as the camera comes to rest (content 5.1, R2): Delhi, and four
// states at the country's edges, west, east and south, with Telangana, where our laboratory is and
// where the open card lies; so the chips stand apart and say what the caption says, "at the scale of
// a nation". Each chip sits to the right of a point on its state, chosen so that no two chips meet:
// Maharashtra's is north of the state's middle and Telangana's south of it, since the two states
// are neighbours and the chips run east.
export const FILM_PLACES = [
  { id: 'DL', lat: 28.61, lon: 77.21, note: 'Screening' },
  { id: 'MH', lat: 20.3, lon: 75.4, note: 'Screening', shortSide: 'left' }, // west on a short screen: see site.css
  { id: 'JH', lat: 23.55, lon: 85.3, note: 'Screening' },
  { id: 'TS', lat: 17.05, lon: 78.9, note: 'Our laboratory, and screening' },
  { id: 'TN', lat: 11.1, lon: 78.4, note: 'Screening' },
];

// For each layer:
//   name    what the reader chooses
//   level   how strongly a state's cards are marked, 0 to 1 (a state at 1 is also named on the map)
//   note    what is said about a state when it is pointed at or tapped ('' = nothing to say)
//   key     the legend: a tone (strong, pale or faint, matching the levels) and what it means
//   chip    a picked state's line on the map itself, under its name (Our work only)
//   places  0: no layer pins towns (R2); the film's labels name states
export const LAYER_ORDER = ['sickle', 'thal', 'work'];
export const LAYERS = {
  sickle: {
    name: 'Sickle cell',
    level: (id) => (SICKLE_BELT.includes(id) ? 1 : SICKLE.includes(id) ? 0.42 : 0),
    note: (id) => {
      if (SICKLE_BELT.includes(id)) return 'In the central belt, where it is most common. A focus state of the national mission.';
      return SICKLE.includes(id) ? 'A focus state of the national elimination mission.' : 'Not one of the mission’s 17 focus states.';
    },
    key: [
      { tone: 'strong', text: 'The central belt, where it is most common' },
      { tone: 'pale', text: 'Other focus states of the national mission' },
    ],
    places: 0,
  },
  thal: {
    name: 'Thalassaemia',
    level: (id) => (THAL.includes(id) ? 1 : 0.1),
    note: (id) => THAL_NOTE[id] || 'Found here, as it is across India.',
    key: [
      { tone: 'strong', text: 'Higher carrier frequencies reported' },
      { tone: 'faint', text: 'Found across India' },
    ],
    places: 0,
  },
  work: {
    name: 'Our work',
    level: (id) => (WORK_STATES[id] ? 1 : 0),
    note: (id) => WORK_STATES[id] || '',
    chip: stateChip,
    states: WORK_STATES,
    sentence: 'Our laboratory is in Hyderabad, Telangana. We have run population and newborn screening at 15 sites in nine states and Delhi.',
    key: [
      { tone: 'strong', text: 'Our laboratory and our field work' },
    ],
    places: 0,
  },
};
