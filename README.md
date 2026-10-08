# Lightening Lives: landing page

Three design options for the Lightening Lives homepage, each built as a production page, with a comparison toolbar so the client can switch between them and try variations before choosing.

| File | What it is |
| --- | --- |
| `sample-card.html` | Design 01 · Sample Card. Printed like a dried blood spot collection card, with a 3D map of India in the hero. |
| `daylight.html` | Design 02 · Daylight. The logo's sun at scale. |
| `scale.html` | Design 03 · Scale. A 3D page: the camera follows one dried blood spot card out to a map of India made of cards. Green and yellow, with its own copy. |
| `index.html` | Opens whichever design was viewed last (Sample Card on a first visit). |

## View it

Open `index.html` in a browser; no server is needed. For live rebuilds while editing:

```sh
npm install
npm run dev      # http://localhost:4173
```

## The comparison toolbar

The dark bar above each page comes from `assets/compare/compare.js`. It offers:

- **Design**: switch between the three pages.
- **Typography, Background, Accent**: the first option is always the design as drawn. For designs 01 and 02 the others are the other direction's typefaces and colours, plus two tones taken from the logo and the Daylight palette. Design 03 offers a regular-width cut of its typeface, a pale yellow or green-white background, and a lighter green ink.
- **Copy link**: every choice is mirrored in the URL, so a link reproduces exactly what is on screen.
- **Reset** and **Hide**.

Variations only override the page's CSS custom properties; "as designed" sets nothing.

## Edit it

Sources live in `src/`; the pages load compiled files from `assets/css` and `assets/js`, which are committed so the site runs without a build.

```sh
npm run build    # Tailwind CSS v4 + esbuild
```

- `src/css/<design>.css`: design tokens (`:root`) and component styles for that design.
- `src/js/sample-card/india-map.js`: the hero map (three.js). It is bundled separately and loaded after first paint; without WebGL the flat map in `assets/img/india-map-*.svg` stays in place.
- `src/js/sample-card/india-data.js`: state outlines and the map's three layers. Edit the `SICKLE`, `THAL` and `PLACES` lists there if the programme data changes.
- `src/js/scale/scene.js`: design 03's 3D scene (three.js, bundled separately as `scale-scene.js`). Camera stops, card proportions and timings are constants at the top of the file; every colour is read from the page's CSS custom properties.
- `src/js/scale/india-cells.js`: India as a grid of cells, one card per cell, plus the four highlighted places.
- `assets/img/scale-*.webp`: still images of design 03's camera stops. They replace the live scene for visitors without WebGL or who have asked for reduced motion. If the scene's look changes, capture them again.

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

- **Photos are representative.** They show the real places (Nandurbar, Kothagudem, Jharkhand), a dried blood spot card and a CSIR-CCMB bench, but none is Lightening Lives' own. Sources and licences are in `assets/img/CREDITS.md` and in each page's footer; swap in the client's field photos before launch.
- **Partner names are typeset, not logos.** The brief rules out using the ICMR or CSIR-CCMB logos without permission.
- **News items are evergreen facts from the brief** (ICMR validation, the CSIR-CCMB MOU, the national mission), not dated news. Replace them as real coverage arrives. Design 03 has no news section; add one when there is news to show.
- **Claims the brief asks to confirm before publishing**: LitLife™-SCA as ™ or ®; "tests" versus "kits"; what the thalassaemia, DMD and coagulation tests detect; and that "no large equipment or specialised laboratory" matches each test's instructions for use.
