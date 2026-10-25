// Our work's map of the field programmes (25 October 2026): every state's outline from the map's own
// modules, the states with a site marked, and for each of those what the panel beside the map says:
// its sites, what was screened there (the poster's five columns), a line where there is more to say,
// and the accounts from the field set in it. Drawn at build time, so the map is there without script.
import { readFileSync } from 'node:fs';
import { BORDERS } from '../../js/map/india-borders.js';
import { STATES } from '../../js/map/india-states.js';

const sites = JSON.parse(readFileSync(new URL('./sites.json', import.meta.url), 'utf8'));
const stories = JSON.parse(readFileSync(new URL('./fieldStories.json', import.meta.url), 'utf8'));
const PAD = 1.5;
const VIEW = { x: -44.1 - PAD, y: -50 - PAD, w: 88.2 + PAD * 2, h: 100 + PAD * 2 };
// Where a pin sits, moved off a neighbour where two would meet (map units, east and south).
const NUDGE = { MP: [-2.5, -1.8], CG: [0.3, -1.2], JH: [0.6, -0.6], MH: [-1.2, -0.8], DL: [0, -0.4] };
const COLUMNS = [
  { key: 'sca_pop', condition: 'Sickle cell anaemia', kind: 'Population' },
  { key: 'sca_nb', condition: 'Sickle cell anaemia', kind: 'Newborn' },
  { key: 'sbt_pop', condition: 'Sickle-beta thalassaemia', kind: 'Population' },
  { key: 'sbt_nb', condition: 'Sickle-beta thalassaemia', kind: 'Newborn' },
  { key: 'bt_pop', condition: 'Beta thalassaemia', kind: 'Population' },
];
const ORDER = ['DL', 'RJ', 'MP', 'JH', 'CG', 'MH', 'GJ', 'TS', 'KA', 'TN'];

const states = STATES.map((s, i) => {
  const here = sites.filter((site) => site.state === s.n);
  const worked = here.length > 0;
  const [dx, dy] = NUDGE[s.id] || [0, 0];
  const screened = COLUMNS.filter((c) => here.some((site) => site[c.key]));
  const conditions = [...new Set(screened.map((c) => c.condition))].map((condition) => ({
    condition, kinds: screened.filter((c) => c.condition === condition).map((c) => c.kind),
  }));
  return {
    id: s.id, name: s.n, d: BORDERS[i], worked,
    pin: { left: (((s.x + dx - VIEW.x) / VIEW.w) * 100).toFixed(2), top: (((s.z + dy - VIEW.y) / VIEW.h) * 100).toFixed(2) },
    sites: here.length, conditions,
    // The panel's line only where it adds to the list of what was screened: the laboratory's state.
    line: s.id === 'TS' ? 'Our laboratory and office are here.' : '',
    newborn: screened.some((c) => c.kind === 'Newborn'),
    stories: stories.filter((st) => st.state === s.n).map((st) => ({ id: st.id, title: st.title, condition: st.condition })),
  };
});

export default {
  viewBox: `${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`,
  states,
  worked: ORDER.map((id) => states.find((s) => s.id === id)).filter((s) => s && s.worked),
  totals: { sites: sites.length, states: ORDER.length - 1 },
};
