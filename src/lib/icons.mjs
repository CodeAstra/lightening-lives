// The site's icons (DESIGN.md, Icons): Lucide line icons (lucide-static, ISC), inlined at build time
// so no icon font or script ships, all at one stroke; and three social marks, filled. An unknown name
// stops the build rather than leave an empty picture on a page.
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const lucide = (name) => path.join(root, 'node_modules/lucide-static/icons', `${name}.svg`);
const cache = new Map();

const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** A Lucide icon as inline SVG. Decorative unless given a label, which makes it an image with that name. */
export function icon(name, label) {
  if (!cache.has(name)) {
    const file = lucide(name);
    if (!existsSync(file)) throw new Error(`Unknown icon: ${name}`);
    const svg = readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '').trim();
    const inner = svg.slice(svg.indexOf('>') + 1, svg.lastIndexOf('</svg>')).replace(/\s*\n\s*/g, '').trim();
    cache.set(name, inner);
  }
  const a11y = label ? `role="img" aria-label="${escape(label)}"` : 'aria-hidden="true" focusable="false"';
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ${a11y}>${cache.get(name)}</svg>`;
}

// LinkedIn's mark is in neither library, so its glyph is written here; YouTube and X come from
// simple-icons (CC0).
const LINKEDIN = '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>';

/** A social mark, filled, always decorative: the link around it carries the name. */
export function brand(name) {
  let inner;
  if (name === 'linkedin') inner = LINKEDIN;
  else {
    const file = path.join(root, 'node_modules/simple-icons/icons', `${name}.svg`);
    if (!existsSync(file)) throw new Error(`Unknown brand: ${name}`);
    const svg = readFileSync(file, 'utf8');
    inner = (svg.match(/<path[^>]*\/>/) || [''])[0];
  }
  return `<svg class="icon icon-brand" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">${inner}</svg>`;
}
