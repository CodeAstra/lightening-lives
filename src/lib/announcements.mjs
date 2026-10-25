// The hero's announcements (src/site/_data/announcements.json). Dates are days in India: an item is
// live from the start of its first day to the end of its last, Indian time. The build keeps every
// item that has not ended, marks which is live, and the page checks again in the reader's browser
// (main.js, initNews), so an event never outlives its last day between deploys.
const IST = '+05:30';
export const startsAt = (day) => Date.parse(`${day}T00:00:00${IST}`);
export const endsAt = (day) => Date.parse(`${day}T23:59:59.999${IST}`);

/**
 * The items still to come or running, soonest first, each with `live` (running now). With `preview`
 * (the dev server) and nothing to come, the latest item is shown anyway, marked `preview`, so the
 * pill can be seen while it is being written; a build for the site never does this.
 */
export function upcoming(items = [], now = Date.now(), preview = false) {
  const valid = items.filter((item) => item && item.text && item.start && item.end && item.link && item.link.href);
  const left = valid
    .filter((item) => endsAt(item.end) >= now)
    .sort((a, b) => startsAt(a.start) - startsAt(b.start))
    .map((item) => ({ ...item, live: startsAt(item.start) <= now }));
  if (left.length || !preview || !valid.length) return left;
  const latest = [...valid].sort((a, b) => endsAt(b.end) - endsAt(a.end))[0];
  return [{ ...latest, live: true, preview: true }];
}
