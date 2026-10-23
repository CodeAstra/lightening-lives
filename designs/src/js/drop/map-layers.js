// What the map can show, by state. Written by hand: edit here if the programme data changes.
// Design 01's map uses the same lists (src/js/sample-card/india-data.js); change both together.
//
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
export const WORK = {
  TS: 'Our laboratory and office, in Hyderabad. Field work in Kothagudem.',
  MH: 'Field work in Nandurbar.',
  JH: 'Field work.',
};

// For each layer:
//   name    what the reader chooses
//   level   how strongly a state's cards are marked, 0 to 1 (a state at 1 is also named on the map)
//   note    what is said about a state when it is pointed at or tapped ('' = nothing to say)
//   key     the legend: a tone (strong, pale or faint, matching the levels) and what it means
//   places  1 pins the places we have worked to the map, and lights the cards round them
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
    level: (id) => (WORK[id] ? 0.3 : 0),
    note: (id) => WORK[id] || '',
    key: [
      { tone: 'strong', text: 'Our laboratory and our field work' },
    ],
    places: 1,
  },
};
