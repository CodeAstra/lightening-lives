// The map's "Our work" data for the templates, from the module the page's scripts use
// (src/js/map/map-layers.js), so the markup and the map cannot say different things.
import { FILM_PLACES, LAYERS } from '../../js/map/map-layers.js';
import { STATES } from '../../js/map/india-states.js';

const name = (id) => STATES.find((state) => state.id === id).n;
// The states with a site, in the order of content 6.1's table (north to south, as the poster lists them).
const ORDER = ['DL', 'RJ', 'MP', 'JH', 'CG', 'MH', 'GJ', 'TS', 'KA', 'TN'];
const listed = ORDER.filter((id) => LAYERS.work.states[id]).map(name);

export default {
  // The layer's sentence beside the map (content file 6.2).
  sentence: LAYERS.work.sentence,
  // The end of the map's text summary for screen readers (6.2).
  summary: `Where we have worked: population and newborn screening at 15 sites in nine states and Delhi: ${listed.slice(0, -1).join(', ')} and ${listed.at(-1)}.`,
  // The states the film names in chips as it comes to rest, each with a short note (5.1, R2).
  film: FILM_PLACES.map((place) => ({ id: place.id, name: name(place.id), note: place.note, shortSide: place.shortSide })),
};
