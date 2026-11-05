// The film's pins (scene.js, arrangePlaces). Pins are sized from the nearest two so no two meet, down
// to a smallest size; where two states' points are closer than even that (Delhi inside Haryana, on a
// small window), the pins are eased apart, each half the shortfall along the line between them, until
// every pair has the room it needs. Pins with room are not moved. Changes the spots in place.
export function spread(spots, need, rounds = 12) {
  for (let round = 0; round < rounds; round += 1) {
    let moved = false;
    for (let i = 0; i < spots.length; i += 1) {
      for (let j = i + 1; j < spots.length; j += 1) {
        const a = spots[i];
        const b = spots[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let d = Math.hypot(dx, dy);
        if (d >= need - 0.01) continue;
        if (d < 0.001) { dx = 1; dy = 0; d = 1; a.x -= 0.5; b.x += 0.5; } // on one point: part them east and west
        const push = (need - Math.hypot(b.x - a.x, b.y - a.y)) / 2;
        a.x -= (dx / d) * push;
        a.y -= (dy / d) * push;
        b.x += (dx / d) * push;
        b.y += (dy / d) * push;
        moved = true;
      }
    }
    if (!moved) break;
  }
  return spots;
}
