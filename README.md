# Lightening Lives: landing page

Seven design options for the Lightening Lives homepage, each built as a production page, with a comparison toolbar so the client can switch between them and try variations before choosing.

| File | What it is |
| --- | --- |
| `sample-card.html` | Design 01 · Sample Card. Printed like a dried blood spot collection card, with a 3D map of India in the hero. |
| `daylight.html` | Design 02 · Daylight. The logo's sun at scale. |
| `scale.html` | Design 03 · Scale. A 3D page: the camera follows one dried blood spot card out to a map of India made of cards. Green and yellow, with its own copy. |
| `strand.html` | Design 04 · Strand. A 3D page: a strand of DNA built from lettered card tiles. The camera travels along it to five tiles lit in sun yellow, one for each test developed so far, and a blank tile with a sun's outline: the place open for the next. White, with the logo's four colours for the four letters of DNA, and its own copy. |
| `tree.html` | Design 05 · Tree. A 3D page: the company's emblem (sun, figure, five leaves) built as a paper sculpture. The camera goes from the whole emblem to its five leaves, one for each test developed so far, where a sixth, new leaf opens for the next; then to the figure at its centre. White, maroon ink from the logo's lettering, and its own copy. |
| `helix.html` | Design 06 · Helix. A 3D page: a classic double helix as a glass-and-brass model on a stand. Its story follows the company's own tagline, Innovate • Diagnose • Transform Lives, and ends looking straight down on the model, where it reads as the sun in the logo. Pearl grey, graphite ink, and its own copy. |
| `sun-card.html` | Design 07 · Sun Card. Design 01's layout and copy, with the logo's sun as its pattern language: India on the face of a rising sun in the hero, a sun in the corner of every test card, rows of rays between sections. Sixteen rays every time, in shades from dawn to noon and three textures. Kumbh Sans and DM Mono. |
| `index.html` | Opens whichever design was viewed last (Sample Card on a first visit). |

## View it

Open `index.html` in a browser; no server is needed. For live rebuilds while editing:

```sh
npm install
npm run dev      # http://localhost:4173
```

## The comparison toolbar

The dark bar above each page comes from `assets/compare/compare.js`. It offers:

- **Design**: switch between the seven pages. A design chosen here always opens as designed, with its own typography, background and ink selected in the controls; variations tried on one design are not carried to another.
- **Typography, Background, Accent**: the first option is always the design as drawn. For designs 01 and 02 the others are the other direction's typefaces and colours, plus two tones taken from the logo and the Daylight palette. Design 03 offers a regular-width cut of its typeface, a pale yellow or green-white background, and a lighter green ink. Design 04 offers sans-serif headings, a pale sun or pale leaf background, and maroon ink; the colours of the four DNA letters stay as they are, because they carry meaning. Design 05 offers Mukta or Familjen Grotesk headings, a pale sun or pale leaf background, and deep green ink; the emblem keeps the logo's own colours. Design 06 offers IBM Plex Sans or Familjen Grotesk headings, a white or pale brass background, and deep green ink; the model's metal, glass and sun colours are not varied. Design 07 offers Design 01's or Design 02's typefaces, a white or butter background, and maroon or rust ink; its suns keep their own shades.
- **Copy link**: every choice is mirrored in the URL, so a link reproduces exactly what is on screen and a reload keeps it. Variations are not remembered between visits: opening a design without them in the link shows it as designed.
- **Reset** and **Hide**.

Variations only override the page's CSS custom properties; "as designed" sets nothing.

## Edit it

Sources live in `src/`; the pages load compiled files from `assets/css` and `assets/js`, which are committed so the site runs without a build.

```sh
npm run build    # Tailwind CSS v4 + esbuild
```

- `src/css/<design>.css`: design tokens (`:root`) and component styles for that design.
- `src/js/sample-card/india-map.js`: the hero map (three.js). It is bundled separately and loaded after first paint; without WebGL the flat map in `assets/img/india-map-*.svg` stays in place.
- `src/js/sample-card/india-data.js`: state outlines and the map's three layers. Edit the `SICKLE_BELT`, `SICKLE`, `THAL` and `PLACES` lists there if the programme data changes. On the sickle cell layer the five states the central belt runs through stand tall and the other mission focus states only just lift; `assets/img/india-map-sickle.svg`, the flat fallback, is coloured to match by hand. Designs 01 and 07 share this map.
- `src/js/scale/scene.js`: design 03's 3D scene (three.js, bundled separately as `scale-scene.js`). Camera stops, card proportions, timings and where the card sits across the page's column are constants at the top of the file; every colour is read from the page's CSS custom properties. The card is modelled on the company's own (cover flap with the logo, one collection circle, barcoded pocket) and drawn in code; the logo is inlined into the bundle so the scene also works from `file://`. Every card prints its own barcode and six-digit code (`SCM / 100001` on the card the camera follows, a generated one on each of the others); they are illustrative, not real sample codes.
- `src/js/scale/india-cells.js`: India as a grid of cells, one card per cell, plus the four highlighted places.
- `assets/img/scale-*.webp`: still images of design 03's camera stops. They replace the live scene for visitors without WebGL or who have asked for reduced motion. If the scene's look changes, capture them again.
- `src/js/strand/scene.js`: design 04's 3D scene (three.js, bundled separately as `strand-scene.js`). The strand's proportions, which tiles are marked (`MARKS` for the tests so far, `OPEN` for the open place), the camera stops for wide and narrow screens, and the load animation are constants at the top of the file; colours and the typeface on the tiles are read from the page's CSS custom properties. The tiles are drawn as textured card with pressed letters, lit as a small model in a studio would be, and seen through a shallow depth of field; on a machine that cannot keep up, the depth-of-field pass switches itself off before anything else is reduced. The letters on the strand are illustrative, generated from a fixed seed; they are not a real sequence.
- `src/js/strand/main.js`: the page's own behaviour (the mobile menu, and loading the scene). The names on the five marked tiles are the `[data-pin]` items in `strand.html`; change them there if the range changes.
- `assets/img/strand-*.webp`: still images of design 04's three camera stops, used the same way as design 03's.
- `src/js/tree/scene.js`: design 05's 3D scene (three.js, bundled separately as `tree-scene.js`). The emblem's proportions (`SUN`, `LEAVES`, the figure's outline), the new leaf that opens at the second stop (`BUD`), the camera stops for wide and narrow screens, and the arrival sequence are constants at the top of the file; every colour is read from the page's CSS custom properties. The parts are drawn as textured card at different depths in front of the page, and the key light follows the pointer, so the shadows move with it. The names on the five leaves are the `[data-pin]` items in `tree.html`.
- `assets/img/tree-*.webp`: still images of design 05's three camera stops, used the same way as design 03's.
- `src/js/helix/scene.js`: design 06's 3D scene (three.js, bundled separately as `helix-scene.js`). The model (`RUNGS`, `RISE`, `TWIST`, `BASE`), the five lit rungs (`MARKS`) and the open one above them (`OPEN`), the lights, the lens and the four camera stops for wide and narrow screens are constants at the top of the file; every colour is read from the page's CSS custom properties. On a machine that cannot keep up it gives up depth of field first, then the glass's refraction, then pixels. The names on the five lit rungs are the `[data-pin]` items and the `.five` list in `helix.html`.
- `assets/img/helix-*.webp`: still images of design 06's four camera stops, used the same way as design 03's. They are baked on the design's pearl grey, so with another background chosen from the toolbar the fallback shows a faint grey edge round them.
- `sun-card.html` is generated from `sample-card.html`, so the two stay the same in structure and copy. The generator is not in the repo; edit `sun-card.html` directly, and carry over by hand any copy change made to Design 01. Its suns are four SVG symbols at the top of the page (`#sun-solid`, `#sun-lines`, `#sun-dots`, `#sun-open`), coloured where they are used through `data-tone`; the shades are the `--butter`, `--apricot`, `--blush`, `--sage` and `--noon` tokens in `src/css/sun-card.css`.
- `src/js/sun-card/main.js`: design 07's behaviour. It is Design 01's, plus the suns: they turn a little as the page scrolls, the hero's leans toward the pointer and changes shade with the map's layer. The hero map itself is Design 01's (`assets/js/india-map.js`), unchanged.
- In designs 03 to 06 the story's text and its 3D subject keep to the same centred column as the rest of the page (`--frame` and `--gutter` in each stylesheet), and on monitors wider than a laptop's the whole page scales up with the window (`html { font-size }`).

## Publish to GitHub Pages

```sh
npm run pages                      # builds, then copies only the site into dist/
npx gh-pages --dist dist --dotfiles   # pushes dist/ to the gh-pages branch
```

All paths are relative, so the site works from a `/<repo>/` subpath. Publishing `dist/` rather than the whole branch matters: Pages serves every file it is given, and this repo also holds the internal brief in `content/`.

## Going live with the chosen design

1. Rename the chosen file to `index.html` (replacing the redirect page) and delete the other design.
2. Delete the line marked `Comparison toolbar` in its `<head>`, and the `assets/compare` folder.
3. Delete the `noindex` robots line marked `Comparison build`.
4. Point the nav, "Privacy policy" and "Terms" links at the real pages as they are built. For now the nav scrolls to sections of the landing page and enquiry buttons open an email to `admin@lighteninglives.in`.

## Content still to settle

- **Photos are representative.** They show the real places (Nandurbar, Kothagudem, Jharkhand) and a CSIR-CCMB bench, but none is Lightening Lives' own. Sources and licences are in `assets/img/CREDITS.md` and in each page's footer; swap in the client's field photos before launch.
- **"Any inherited condition" is the client's positioning (8 October 2026), not the brief's wording.** All six designs now lead with it: the company develops a genetic test for any inherited condition a programme needs, and the five existing tests are shown as tests developed so far, each for an institution that needed one. The brief says only that the company "can develop tests for other genetic conditions too". No client or request is named as an example. Have the scientific and regulatory side confirm "any inherited condition" before launch.
- **The card is drawn, not photographed.** All three designs show the company's real card: a cover flap, one dashed collection circle with a single dried blood spot, and a barcoded pocket. Photos of the real card are kept for reference in `content/assets/kit-reference-*.jpg`. They are internal: they show a handwritten name and a real sample code, and are not part of the published site. The copy still says "a few drops of blood on a card" and "dried blood spot", because the brief rules out "one drop" and "single drop".
- **Partner names are typeset, not logos.** The brief rules out using the ICMR or CSIR-CCMB logos without permission.
- **News items are evergreen facts from the brief** (ICMR validation, the CSIR-CCMB MOU, the national mission), not dated news. Replace them as real coverage arrives. Designs 03 to 06 have no news section; add one when there is news to show.
- **Design 04 says little that is not in the brief.** Its story is the company's own description: REASSURED genetic tests, ICMR validation of LitLife™-SCA. One plain-language line is added: that inherited disorders are "written in DNA". The yellow tiles are a picture of the tests so far, not real positions in the genome. Have the scientific team check that wording before launch.
- **Design 05 adds nothing to the brief.** Its headline is the company's mission statement. The emblem's five leaves stand for the five tests so far; the sixth, new leaf that opens at the second step is not in the logo and stands for the next test.
- **Design 06 adds nothing to the brief either.** Its three steps are the campaign tagline, and "faster, simpler, affordable, accessible, scalable" is the client's own summary. The model is not a real sequence, and the five amber rungs are a picture of the tests so far, not positions in a genome; the pale yellow rung above them is the place open for the next.
- **Claims the brief asks to confirm before publishing**: LitLife™-SCA as ™ or ®; "tests" versus "kits"; what the thalassaemia, DMD and coagulation tests detect; and that "no large equipment or specialised laboratory" matches each test's instructions for use.
