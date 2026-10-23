// Image work done by hand (npm run images), whose results are committed with the site's sources.
//   favicon.ico, for older browsers and crawlers that ask for it at the root, from the logo's own
//   32 and 48 px icons in the logo kit, designs/assets/logo (the logo is never redrawn).
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pngToIco from 'png-to-ico';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const at = (p) => path.join(root, p);

const icons = ['icon-32.png', 'icon-48.png'].map((name) => at(`designs/assets/logo/icons/${name}`));
writeFileSync(at('src/site/favicon.ico'), await pngToIco(icons));
console.log('  Wrote src/site/favicon.ico from the logo kit\'s icon-32.png and icon-48.png.');
