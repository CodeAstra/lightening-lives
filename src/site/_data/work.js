// The map's "Our work" data for the templates, from the module the page's scripts use
// (src/js/map/map-layers.js), so the markup and the map cannot say different things.
import { FILM_PLACES, LAYERS, WORK } from '../../js/map/map-layers.js';

export default {
  // The layer's sentence beside the map (content file 6.2).
  sentence: LAYERS.work.sentence,
  // The places the film names in chips as it comes to rest, each with a short note.
  film: FILM_PLACES.map((place) => ({ ...place, name: WORK.find((site) => site.id === place.id).name })),
};
