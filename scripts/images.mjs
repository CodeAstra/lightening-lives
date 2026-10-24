// Image work done by hand (npm run images), whose results are committed with the site's sources.
//   1. favicon.ico, for older browsers and crawlers that ask for it at the root, from the logo's own
//      32 and 48 px icons in the logo kit, designs/assets/logo (the logo is never redrawn).
//   2. Every photograph in src/images-src (jpg or png, at most 2400 px on its long side) is cropped
//      where CROPS says, then written to src/assets/img as <name>-640.webp, <name>-1280.webp and,
//      when the picture is at least 1920 px wide, <name>-1920.webp: quality 80, metadata stripped.
//   3. src/site/_data/images.json (the widths and the 640's height, read by picture.njk) and
//      src/site/_data/credits.json (the table in src/assets/img/CREDITS.md, read by the footer).
// A file is written only when its bytes change, so running it twice changes nothing.
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pngToIco from 'png-to-ico';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const at = (p) => path.join(root, p);
let written = 0;

function put(file, bytes) {
  const buffer = Buffer.isBuffer(bytes) ? bytes : Buffer.from(bytes);
  if (existsSync(at(file)) && readFileSync(at(file)).equals(buffer)) return;
  writeFileSync(at(file), buffer);
  written++;
  console.log(`  Wrote ${file}`);
}

// 1. The favicon.
const icons = ['icon-32.png', 'icon-48.png'].map((name) => at(`designs/assets/logo/icons/${name}`));
put('src/site/favicon.ico', await pngToIco(icons));

// 2. The photographs. A crop first cuts `left` (a share of the width) off the left edge, then cuts
// the rest to `ratio` (width over height); `y` places that cut as object-position does: 0 keeps the
// top, 1 the bottom. CREDITS.md, "Changes made to the originals", says why each is made.
const CROPS = {
  'place-kothagudem': { ratio: 16 / 10, y: 0.375 }, // part of the foreground shore and sky removed
  'place-jharkhand': { ratio: 16 / 10, y: 0 }, // the roadside kerb at the bottom edge removed
  'method-paper': { left: 0.16 }, // part of the card's printed serial number, a sample code
};
const WIDTHS = [640, 1280, 1920];

const manifest = {};
const sources = readdirSync(at('src/images-src')).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort();
for (const file of sources) {
  const name = file.replace(/\.\w+$/, '');
  const input = readFileSync(at(`src/images-src/${file}`));
  // The size as the picture is seen: a phone's original may be stored on its side with an EXIF
  // orientation, which .rotate() applies when writing.
  let { width, height } = (await sharp(input).metadata()).autoOrient;
  let region = null;
  if (CROPS[name]) {
    const { left = 0, ratio, y = 0.5 } = CROPS[name];
    const x = Math.round(width * left);
    width -= x;
    const h = ratio ? Math.round(width / ratio) : height;
    if (h > height) throw new Error(`${file}: too short for its crop`);
    region = { left: x, top: Math.round((height - h) * y), width, height: h };
    height = h;
  }
  if (width < 1280) throw new Error(`${file} is ${width} px wide: a source needs at least 1280`);
  const widths = WIDTHS.filter((w) => w <= 1280 || width >= w);
  let height640;
  for (const w of widths) {
    let image = sharp(input).rotate();
    if (region) image = image.extract(region);
    const { data, info } = await image.resize({ width: w }).webp({ quality: 80, effort: 5 }).toBuffer({ resolveWithObject: true });
    put(`src/assets/img/${name}-${w}.webp`, data);
    if (w === 640) height640 = info.height; // what was written, not a sum that can round the other way
  }
  manifest[name] = { widths, height640 };
}
put('src/site/_data/images.json', `${JSON.stringify(manifest, null, 2)}\n`);

// 3. The credits, read from CREDITS.md's table so that the table stays the one record.
const link = (cell) => {
  const m = cell.match(/^\[(.+?)\]\((\S+?)\)$/);
  return m ? { text: m[1], url: m[2] } : { text: cell, url: null };
};
const rows = [];
for (const line of readFileSync(at('src/assets/img/CREDITS.md'), 'utf8').split('\n')) {
  const m = line.match(/^\| `([\w-]+)` \|(.+)\|$/);
  if (!m) continue;
  const [shows, label, author, licence, source, changes] = m[2].split(' | ').map((c) => c.trim());
  const a = link(author);
  const l = link(licence);
  const s = link(source);
  rows.push({
    basename: m[1], shows, label,
    author: a.text, authorUrl: a.url,
    licence: l.text, licenceUrl: l.url,
    source: s.text, sourceUrl: s.url,
    changes: changes === '-' ? '' : changes,
  });
}
for (const name of Object.keys(manifest)) {
  if (!rows.some((r) => r.basename === name)) throw new Error(`src/images-src/${name} has no row in src/assets/img/CREDITS.md`);
}
put('src/site/_data/credits.json', `${JSON.stringify(rows, null, 2)}\n`);

console.log(written ? `  ${written} file(s) written.` : '  Nothing changed.');
