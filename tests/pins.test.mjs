// The film's pins (DESIGN.md, Pins): sized from the nearest two so no two meet, down to 12px. Where two
// states' points are closer than that (Delhi inside Haryana, on a small window), the pins are eased
// apart by the few pixels needed, along the line between them, and the rest stay where they are.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spread } from '../src/js/site/pins.js';

const gap = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

test('two pins closer than the room they need are eased apart to exactly that room', () => {
  const spots = [{ id: 'DL', x: 100, y: 100 }, { id: 'HR', x: 110, y: 100 }, { id: 'MH', x: 300, y: 300 }];
  spread(spots, 18);
  assert.ok(gap(spots[0], spots[1]) >= 18 - 0.01, `${gap(spots[0], spots[1])}`);
  // Each moved half the shortfall, along the line between them: the pair keeps its middle.
  assert.equal(Math.round(spots[0].x), 96);
  assert.equal(Math.round(spots[1].x), 114);
  assert.equal(spots[0].y, 100);
  assert.deepEqual(spots[2], { id: 'MH', x: 300, y: 300 });
});

test('pins already far enough apart are left exactly where they are', () => {
  const spots = [{ id: 'A', x: 0, y: 0 }, { id: 'B', x: 30, y: 0 }];
  spread(spots, 18);
  assert.deepEqual(spots, [{ id: 'A', x: 0, y: 0 }, { id: 'B', x: 30, y: 0 }]);
});

test('a cluster of three settles with every pair clear, and two pins on one point are parted', () => {
  const spots = [{ id: 'A', x: 50, y: 50 }, { id: 'B', x: 58, y: 52 }, { id: 'C', x: 54, y: 60 }, { id: 'D', x: 200, y: 50 }, { id: 'E', x: 200, y: 50 }];
  spread(spots, 18);
  for (let i = 0; i < spots.length; i += 1) for (let j = i + 1; j < spots.length; j += 1) assert.ok(gap(spots[i], spots[j]) >= 18 - 0.5, `${spots[i].id}-${spots[j].id}: ${gap(spots[i], spots[j])}`);
});
