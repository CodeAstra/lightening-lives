---
version: alpha
name: Lightening Lives
description: The design of the Lightening Lives website, chosen for production on 23 October 2026 (Design 11, Lumen) and refined on 25 October 2026. DNA-blue ink on ice white, Archivo for every voice, flat paper with hairline edges, named proof set in DNA blue, life green for what is pointed out, and one opening film in which a small drop of blood becomes a map of India.
colors:
  # Each name is the CSS custom property of the same name in the production stylesheet src/css/site.css (--canopy, --mist, ...); designs/src/css/lumen.css keeps the comparison page's copy.
  primary: "#0C4A6E" # canopy, under the role name that design tools look for
  canopy: "#0C4A6E"
  leaf: "#0369A1"
  moss: "#475569"
  mist: "#F0F9FF"
  paper: "#FFFFFF"
  sprout: "#E0F2FE"
  meadow: "#BAE6FD"
  sun: "#6EE7B7" # life green: what is being pointed out; the token keeps the name it had when it was amber
  drop: "#A61B18"
  blood: "#6A2A20"
  line: "#0C4A6E2E" # canopy at 18%
typography:
  # Sizes are the largest each level reaches. Most are fluid: the Typography section gives the full range.
  display:
    fontFamily: Archivo
    fontSize: 4.1rem
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -0.03em
  h2:
    fontFamily: Archivo
    fontSize: 2.4rem
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.03em
  h3:
    fontFamily: Archivo
    fontSize: 1.35rem
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: -0.015em
  row-title:
    fontFamily: Archivo
    fontSize: 1.125rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.015em
  vision-line:
    fontFamily: Archivo
    fontSize: 2.35rem
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: -0.03em
  film-line:
    fontFamily: Archivo
    fontSize: 1.3rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.03em
  action:
    fontFamily: Archivo
    fontSize: 1.6rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.03em
  word:
    fontFamily: Archivo
    fontSize: 7.25rem
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -0.03em
  lead:
    fontFamily: Archivo
    fontSize: 1.3125rem
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: Archivo
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Archivo
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: Archivo
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
  fine:
    fontFamily: Archivo
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: Archivo
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.07em
  button:
    fontFamily: Archivo
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.2
  tag:
    fontFamily: Archivo
    fontSize: 0.8125rem
    fontWeight: 600
    letterSpacing: 0.01em
rounded:
  xs: 0.3rem # the map key's swatches
  sm: 0.5rem # every corner: buttons, tags, nav links, panels, pictures
  full: 999px # circles only: the film's button
spacing:
  frame: 82rem # the centred column's greatest width
  gutter: 4.5rem # side padding: clamp(1.25rem, 5vw, 4.5rem)
  section: 4.25rem # a section's top and bottom padding: clamp(2.75rem, 4.8vw, 4.25rem)
  header: 4.75rem # the sticky header's height
  xs: 0.5rem
  sm: 0.75rem
  base: 1rem
  md: 1.5rem
  lg: 3rem
  xl: 4rem
components:
  page:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  secondary-text:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.moss}"
  label:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.leaf}"
    typography: "{typography.label}"
  button-solid:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 3rem
    padding: 1.3rem
  button-solid-hover:
    backgroundColor: "{colors.canopy}"
    textColor: "{colors.paper}"
  button-line:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.canopy}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 3rem
    padding: 1.3rem
  button-line-hover:
    backgroundColor: "{colors.sprout}"
    textColor: "{colors.canopy}"
  nav-link:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.sm}"
    height: 2.75rem
    padding: 0.9rem
  nav-link-hover:
    backgroundColor: "{colors.sprout}"
    textColor: "{colors.canopy}"
  highlight: # a name that is proof is set in DNA blue, with no bar and no box; see Shapes
    backgroundColor: "{colors.mist}"
    textColor: "{colors.leaf}"
  tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.canopy}"
    typography: "{typography.tag}"
    rounded: "{rounded.sm}"
    height: 1.75rem
    padding: 0.6rem
  tag-proof:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.canopy}"
  segmented-control:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.sm}"
    padding: 0.25rem
  segmented-control-selected:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    height: 2.5rem
  kind-card: # the four kinds of test, as rows under a 2px canopy rule
    backgroundColor: "{colors.mist}"
    textColor: "{colors.canopy}"
    padding: 1rem
  notice:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.sm}"
    padding: 1.4rem
  vision-band:
    backgroundColor: "{colors.sprout}"
    textColor: "{colors.canopy}"
    typography: "{typography.vision-line}"
  film-toggle:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.full}"
    size: 2.75rem
  place-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.sm}"
  map-state:
    backgroundColor: "{colors.meadow}"
    textColor: "{colors.canopy}"
  map-state-marked:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.canopy}"
  map-key-swatch:
    backgroundColor: "{colors.meadow}"
    rounded: "{rounded.xs}"
    size: 1.1rem
  rule:
    backgroundColor: "{colors.line}"
    height: 1px
  sample-drop:
    backgroundColor: "{colors.drop}"
  sample-spot:
    backgroundColor: "{colors.blood}"
---

# Lightening Lives: design

This file describes the design of the production site. It began as Design 11, "Lumen" (`designs/lumen.html`, chosen on 23 October 2026: DNA blue on ice white, a name that is proof set in DNA blue, the drop at its smallest, life green `#6EE7B7` for what is pointed out), and was **refined on 25 October 2026** after the user's review of the built site ("it has too much space"; the glass and the rounded type felt dated and not professional enough). The refinement kept Lumen's colours, film, page order and components, and changed what they are made of and how much room they take:

- **Archivo** for every voice, chosen over Instrument Sans and the previous Quicksand and Nunito (the user: "Let us go with Archivo"). Headings are set wide (`font-stretch: 112%`), text at normal width.
- **Less space:** sections about half the padding they had (68 px at a laptop's width, was 128), a smaller type scale, heading and lead aligned at the top, landscape pictures.
- **Flat material:** no frosted glass, no blur, no pools of light, no soft shadows. Paper on ice white with hairline edges, and one corner radius, 0.5rem, in place of pills.
- **A sticky header** that takes a solid ground once the page moves under it, and marks the page it is on.

The rules live in `src/css/site.css` (the tokens at the top; the "Refinement, 25 October 2026" block at the end). `designs/` keeps the comparison pages as they were and is not the reference any more. Where the site and this file differ, this file is the reference.

## Overview

Lightening Lives is a healthcare technology company in Hyderabad that develops molecular diagnostics for inherited blood and muscle conditions. Its tests work from a dried blood spot on a card, and it builds them into solutions for hospitals, laboratories and public health programmes. The people reading the site are clinicians, laboratory heads, district health officers, programme officers, NGOs and CSR funders. It is not for individuals looking for a test, and it says so.

The site should feel light, clear and sure of itself: a healthcare technology company with evidence behind it, not a charity. The line the user chose for it is **"Lab-grade trust, human warmth"**: serious science from an established company that invents things, with warmth because the work is about families. The client's visual wish is lightness: the page is ice white, with white bands, blue ink and one green for what is pointed out.

The whole design rests on one picture: a drop of blood falls onto a card, the card joins a batch, and the batch becomes a map of India made of cards. That is the opening film, and it is the only showpiece on the site. Everything after it is a quiet, exact page: white and ice-white bands, blue ink, a precise grotesque, hairline rules and flat paper.

Five things were chosen by the client and stay as they are unless the client asks:

- **Type:** Archivo for everything, headings at width 112%. Chosen on 25 October 2026 (it replaced Quicksand and Nunito, chosen on 23 October).
- **Colour:** DNA-blue ink on ice white, with life green (`#6EE7B7`, the Lumen theme's own highlight; chosen on 24 October 2026 over the sun amber that had stood in for it since 13 October) for what is being pointed out on the map, in REASSURED and in the proof tags. A name that is proof is set in DNA blue, not marked in colour (23 October 2026; a bar, a box and a stroke were all tried first).
- **The film:** it plays by itself, in one continuous take of about six and a half seconds. It does not follow the scroll.
- **The drop:** small. Its radius is 0.027 of the card's length, the toolbar's "Smaller still" (23 October 2026, after "smaller" on 13 October).
- **The layout:** Design 10's order of sections and components, tightened on 25 October 2026 (see Layout).

## Colors

One family of blues does nearly all the work. Life green and red each have a single job.

| Token | Value | Role |
| --- | --- | --- |
| `canopy` | `#0C4A6E` | The ink: all text, borders of controls, the hover state of the solid button. `primary` is the same colour. |
| `leaf` | `#0369A1` | DNA blue: labels, link underlines, the solid button, the chosen map layer, and a name that is proof inside a heading. |
| `moss` | `#475569` | Secondary text: lead paragraphs, descriptions, notes. |
| `mist` | `#F0F9FF` | Ice white: the page, and the haze the film's cards fade into. Also the browser's `theme-color`. |
| `paper` | `#FFFFFF` | The second surface: alternate sections, the footer, the card stock in the film. |
| `sprout` | `#E0F2FE` | Hover fills, and the one tinted band behind the vision statement. |
| `meadow` | `#BAE6FD` | The map: a state that is not marked, and the field of cards seen from far away. |
| `sun` | `#6EE7B7` | Life green: what is being pointed out. See below. The token keeps the name it had when it was amber: it is `--sun` in the stylesheet and the film. |
| `drop` | `#A61B18` | The blood while it is a falling drop. |
| `blood` | `#6A2A20` | The blood once it has dried into the paper. |
| `line` | `canopy` at 18% | Hairlines between rows. |

**Life green means "this is being pointed out".** It is the Lumen theme's own highlight, the mint the first round of designs called life green, chosen on 24 October 2026 after sun amber had stood in for it since 13 October; it is the one colour on the page that is neither blue nor white. It fills the proof tag ("Approved by ICMR"), the states and places the map marks, and the REASSURED letter and criterion the reader is on; it rings keyboard focus and selected text; and, at a fifth of its strength, it is the green light behind every fourth band. It is never a section background, never a button colour and never text.

**A name that is proof is DNA blue.** Inside a heading, "ICMR", "CSIR-CCMB" and the like are set in `leaf` with no bar, box or fill (`.hl`). The blue says "you can check this" the way it says "this is a link" elsewhere. Chosen on 23 October 2026 in place of the bar of highlight colour under the name; the toolbar's **Mark** choice still offers the bar, Design 10's box and the stroke for comparison.

**Red is the sample and nothing else.** `drop` and `blood` appear only in the film and in the stills taken from it. Nothing in the interface is red.

**Blue and green are mixed through paper.** A map state, a card in the film and a swatch in the key are first lightened towards `paper` and then moved to `sun`: half-way is a pale mint (`#B6F3DB`), so a partly marked state reads as a lighter green and not as a third blue-green competing with `meadow`. The map, the film and the key share this rule (`markedColour` in `designs/src/js/lumen/main.js`, `PALE` in the film). It was written when the highlight was amber, which mixed straight into blue went through khaki, and it holds as it is.

### Contrast

Measured against WCAG 2 (4.5:1 is the minimum for text of this size).

| Text | on `mist` | on `paper` | on `sprout` | on `meadow` | on `sun` |
| --- | --- | --- | --- | --- | --- |
| `canopy` | 8.87 | 9.46 | 8.24 | 7.13 | 6.21 |
| `moss` | 7.11 | 7.58 | 6.60 | 5.71 | 4.97 |
| `leaf` | 5.57 | 5.93 | 5.17 | 4.47 (too low) | 3.89 (too low) |

`paper` text is 9.46 on `canopy` and 5.93 on `leaf` (the solid button). There are no tinted or blurred surfaces to measure beyond the colours in the table. A proof name in `leaf` sits in a heading on `mist` or `paper`, at heading size, so it clears the minimum with room.

So: `leaf` is for labels, links and proof names on `mist`, `paper` and `sprout`, never on `meadow` or `sun`. `sun` is 1.4:1 on `mist` and can never carry meaning as text or as a thin line by itself: it is always a fill with `canopy` text on it, or a dot with a `canopy` border.

### Colours in the film

The film is drawn in WebGL but takes its colours from the same custom properties: `--mist` for its background and fog, `--paper` for the card stock, `--canopy` for the card's print, `--meadow` and `--sun` for the map (lightened first, then moved to green, as above), `--drop` and `--blood` for the sample. Its lighting is set so that a matte surface facing up shows exactly its own colour, which is why the cards match the page. Change a token and the film follows; do not hard-code a colour in the scene.

## Typography

One face, **Archivo**, self-hosted as one variable file with a weight and a width axis (`@fontsource-variable/archivo`, the "standard" files: latin, and latin-ext fetched only for a character outside latin), offered across weights 400 to 800. The display voice (every heading, the film's captions, the REASSURED letters, the vision, the contact rows, the name beside the emblem, a marked state's name) is Archivo **700 at width 112%** with -0.03em tracking. Text is Archivo 400 at width 100%; buttons, tags and nav links 600; the label voice 700 at 0.07em, uppercase. The weights in use are 400, 600, 700 and 800; do not add others.

| Level | Weight and width | Size | Line height | Tracking | Used for |
| --- | --- | --- | --- | --- | --- |
| `display` | 700, 112% | home `clamp(2.4rem, 4.3vw, 4.1rem)`; inner pages `clamp(2.2rem, 3.8vw, 3.5rem)`; under 30rem wide `clamp(1.95rem, 9.4vw, 2.6rem)` | 1.02 | -0.03em | The page's one `h1` |
| `h2` | 700, 112% | `clamp(1.7rem, 2.6vw, 2.4rem)` | 1.08 | -0.03em | Section headings |
| `h3` | 700, 112% | `clamp(1.15rem, 1.4vw, 1.35rem)` | 1.22 | -0.015em | Headings inside a section |
| `row-title` | 700, 112% | 1.125rem | 1.25 | -0.015em | Titles in dense lists ("Why", REASSURED criteria, people) |
| `vision-line` | 700, 112% | `clamp(1.5rem, 2.6vw, 2.35rem)` | 1.16 | -0.03em | The vision statement |
| `film-line` | 700, 112% | `clamp(1.05rem, 1.4vw, 1.3rem)` | 1.15 | -0.03em | The caption under the film |
| `word` | 700, 112% | `clamp(2.4rem, 8.4vw, 7.25rem)` | 0.95 | -0.03em | The nine letters of REASSURED |
| `brand` | 700, 112% | 1.25rem | 1 | -0.03em | The name beside the emblem in the header |
| `lead` | 400 | `clamp(1.125rem, 1.4vw, 1.3125rem)` | 1.45 | | The paragraph beside a section heading, in `moss`, at most 38rem |
| `body` | 400 | 1rem | 1.6 | | Running text, in `canopy` |
| `body-sm` | 400 | 1rem | 1.5 | | Descriptions under a `row-title`, the map's sentence |
| `small` | 400 | 1rem | 1.55 | | Notes, footnotes, the footer's small print |
| `fine` | 400 | 0.875rem to 0.9375rem | 1.4 | | The map's key, hint, sources and credits |
| `label` | 700 | 0.75rem | 1.3 | 0.07em, uppercase | Labels and data, in `leaf` |
| `button` | 600 | 1rem | 1.2 | | Buttons and nav links; text links are `body` at 600 |
| `tag` | 600 | 0.8125rem | | 0.01em | Tags, and the chips on the film and the map |

- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`. Headings are sentence case; only `label` is uppercase.
- **Ink and grey.** Substance (row descriptions, bios, the facts, the steps) is `canopy`. `moss` is kept for leads, captions and small print, so the lead and the text below it differ in size and colour.
- Emphasis inside a paragraph is weight 600 in `canopy`, not italics.
- **The whole page scales on large monitors**: `html { font-size: clamp(100%, 0.5vw + 0.55rem, 150%) }` keeps 16px up to a 1440px window and grows with the window. Sizes are in `rem`: do not add `px` sizes (a test counts them).
- The type is tokens: `--ff-display`, `--ff-body` and `--ff-mono` (all Archivo; the film reads `--ff-mono` for the codes on its cards), `--display-stretch` 112%, `--display-weight` 700, `--display-tracking` -0.03em, `--label-weight` 700, `--label-tracking` 0.07em. Everything set in the display face takes all three display tokens, so the page has one display voice.
- The latin file is preloaded on every page, so the text is set once in its own type.

## Layout

**One centred column.** `.wrap` is 82rem at its widest (`--frame`) with side padding of `clamp(1.25rem, 5vw, 4.5rem)` (`--pad`). `--gutter` is the distance from the window's edge to the column's content; the header and the film, which span the window, use it to line up with the column.

**Sections** have `clamp(2.75rem, 4.8vw, 4.25rem)` of padding above and below (`--section-y`: 68 px at 1440 px, was 128), and alternate between `mist` and `paper` so that each reads as its own sheet. There is no light or gradient behind a band. The order on the home page:

| Order | Section | Surface |
| --- | --- | --- |
| 1 | Opening film (hero) | `mist` |
| 2 | How it works | `paper` |
| 3 | Why | `mist` |
| 4 | Tests (portfolio) | `paper` |
| 5 | Evidence | `mist` |
| 6 | Map | `paper` |
| 7 | REASSURED | `mist` |
| 8 | Who we work with | `paper` |
| 9 | Programmes | `mist` |
| 10 | Who we are | `paper` |
| 11 | Vision | `sprout` band, `clamp(2.75rem, 4.5vw, 4rem)` of padding |
| 12 | Contact | `paper` |
| 13 | Footer | `paper`, under a 2px `canopy` rule |

**A section's opening** is a twelve-column row on wide screens: the `h2` takes seven columns and a `lead` paragraph takes five, **aligned at the top** (`lg:items-start`; the lead drops 0.4em to meet the heading's cap height), with a 1.5rem gap. On small screens they stack. The section's content starts `clamp(1.75rem, 2.8vw, 2.5rem)` below (`--head-gap`).

**Splits** inside sections are 5/7 or 7/5 of twelve columns, with a 3rem gap growing to 4rem.

**Spacing** steps: 0.5rem, 0.75rem, 1rem, 1.5rem, 3rem, 4rem. Rows in lists have 0.95rem to 1.4rem of padding above and below.

**Breakpoints** are in `rem` and are chosen per component, where its content needs them, not from a global set. The ones that matter:

- 64rem: the header's links replace the "Menu" button.
- 64rem to 78rem: the name stays beside the emblem but "Every Life Matters" is dropped from the header, and the links tighten, so that everything fits on one line.
- 56.25rem wide and a window at least 21:20: the film fills the whole opening with the text over its left side. Narrower or taller than that, the film has a frame of its own under the heading.
- 40rem, 56rem, 60rem, 72rem and 75rem: lists go from one column to two, three or four.

**Touch.** Every control is at least 2.75rem (44px) tall. Buttons are 3rem.

**Other pages.** The film belongs to the landing page. The inner pages (`content/website-content.md`, Parts 3 to 5) are built from the same header, column, type scale and footer, on `mist` with the same bands, without the film: each opens with a label on a row of its own, then the `h1` and a lead in the seven-and-five split, with proof tags under the lead where the page has them. The comparison table, the numbered steps, the rows, the two families, the row of boxes, the questions, the pairs of sections, the accounts from the field, four up, the collaborators, the people (portrait entries) and the facts table are described under Components ("Inner pages"). The sites table and the entries on Our work are described there too; the components still to be agreed and added here are the boxes' 3D view and the enquiry form. On an inner page the bands alternate back from the closing band, which is always `paper`: the opening has 2.5rem under it and the first section 2.5rem above it, whichever surface it is on.

## Elevation & Depth

The page is flat. Two surfaces and hairlines do all the work:

- **The page.** `mist`, and `paper` bands. Nothing is lit, blurred or glowing.
- **What stands on it** (outline buttons, the film's button, the map's segmented control, the notice, the menu panel, the chips over the film and the map) is `paper`, edged with a 1px `line` or a 2px `canopy` border. Pictures are edged with a 1px `line` drawn inside them. There is no shadow, except a faint one under the open mobile menu, so that it reads as lying over the page.
- **Rules.** A 1px `line` hairline separates rows. A 2px `canopy` rule opens a list or table (the first test, the evidence row, each audience, each kind of test, the first contact action) and tops the footer. Controls have a 2px `canopy` border.

The film is the only place with real depth: the shadow under the card's open cover, and cards fading into `mist` with distance.

**Focus** is a 3px `canopy` outline, offset 3px, with a 3px `sun` ring inside it, so it shows on every surface.

## Shapes

- **One corner, 0.5rem** (`rounded.sm`), for buttons, nav links, tags, the segmented control, the notice, the menu panel and every picture. Only the film's round button is a circle (`rounded.full`); the map key's swatches are 0.3rem (`rounded.xs`).
- **The dashed circle.** The card's collection circle is the design's one motif. It appears as a small dashed `leaf` ring between the five words under "Why". Use it sparingly, and only as a separator.
- **A name that is proof** is set in `leaf`, in the heading's own face, weight and size, with nothing drawn on or under it, and never broken across a line. The colour is the mark.
- **Icons** are drawn inline as SVG with a 2px to 2.2px stroke in `currentColor`: a right arrow on links and contact rows, and play, pause and replay on the film. There is no icon set. The plus and minus on disclosures are drawn in CSS.
- **Pictures** are landscape: 4:3 for the steps and the blank card, 5:4 for the field photos; the people's portraits keep their own shape.

## Components

### Header

Sticky, 4.75rem tall (`--header-h`), and laid over the top of the film by a negative margin of its own height. Transparent at the top of the page; once the page moves under it, it takes a `mist` ground and a hairline under it (`.is-stuck`, set by a few lines of script in `layout.njk`). Anchors stop below it (`scroll-padding-top`). Left: the emblem (3.25rem, 3.75rem from 75rem wide) with "Lightening Lives" beside it in the display voice at 1.25rem and "Every Life Matters" under it as a label. Right: five nav links, the current page's underlined 2px in `leaf` (`aria-current`), and a solid "Partner with us" button in `leaf`. Below 64rem the links become a "Menu" button that opens a full-width `paper` panel under the header; it is a `<details>` element, so it works without script. From 64rem to 78rem the tagline is dropped so the name stays; under 22rem the emblem stands alone.

### Buttons and links

- **Solid button:** `leaf` fill, `paper` text; `canopy` on hover. For the main action ("Partner with us").
- **Line button:** `paper` with a 2px `canopy` border; `sprout` on hover. For the second action beside it.
- **Nav link:** 2.75rem tall, 0.5rem corners, no border; `sprout` on hover; the current page underlined in `leaf`.
- **Text link** (`.link`): weight 600, underlined 2px in `leaf` with a 5px offset; on hover the underline thickens to 3px and its arrow moves 4px right.
- Colour changes take 0.16s.

### Label, proof name, tags

- **Label:** the small uppercase voice, Archivo 700 at 0.07em, in `leaf`. Names a thing ("One card", "Haemoglobinopathy", "Sources"); never a sentence.
- **Proof name** (`.hl`): a name inside a heading set in `leaf`, with no bar, box or fill (see Shapes). Only for proof a reader can check: "ICMR", "India and Japan", "CSIR-CCMB", "15 sites".
- **Tag:** 1.75rem tall, 0.5rem corners, a 1.5px border, Archivo 600. **Proof tag:** the same, filled `sun`, for "Approved by ICMR" and "Patented in India and Japan". In Our work's sites table a screened site is a small filled circle, not an empty tag.

### Steps (How it works)

Three items: a 4:3 still from the film with a hairline edge, a label, an `h3` and a paragraph. One column on phones, picture beside text from 40rem, three columns from 60rem. The three `h3` lines are the film's three captions, word for word.

### Lists and rows

- **Why:** five large words separated by dashed circles, then eight `row-title` and description pairs in a grid of one, two or four columns with hairlines above each.
- **Kinds of test:** four rows, each under a 2px `canopy` rule, in one, two or four columns: the grammar of "Why", not boxes.
- **Tests developed so far:** a table-like list. Each row has the condition's name and a label on the left, and a description, tags and a link on the right. The last row is always the open place: "The condition you need next", with a link to contact.
- **Evidence:** four columns under a 2px rule, divided by hairlines, each heading carrying one proof name in `leaf`.
- **Audiences:** three columns, each under its own 2px rule.
- **Disclosure:** a `<details>` whose summary is a `leaf` line of text with a plus that becomes a minus.
- **Notice:** a `paper` box with a 1px border and a label, at most 48rem wide, its text in `moss`: the one message to individuals.

### The map

A map of India the reader can question. It is drawn in SVG, not WebGL, from the data in `designs/src/js/drop/`.

- **Segmented control:** three choices (Sickle cell, Thalassaemia, Our work) in a `paper` control with a 2px border and 0.5rem corners; the chosen one is `leaf` with `paper` text.
- **States** are filled `meadow`, lightened towards `paper` and then moved to `sun` by how strongly the chosen layer marks them: a fully marked state goes 90% of the way, which is `sun` itself; the others stop at a pale mint. The key's swatches are painted by the same rule, so they match the map in any colour the toolbar tries. Borders are 1px `canopy` at 40%. A grid of fine `paper` lines lies over the country, so it reads as the film's field of cards.
- **Names:** fully marked states are named in 0.8125rem Archivo 700 with a `paper` glow. Under 430px across the names are moved apart; under 235px only a picked state is named.
- **Picking a state** (pointing, tapping, or the arrow keys) lightens it halfway to `paper`, outlines it at 2.5px and replaces the sentence beside the map with what the map knows about that state under every layer. Escape, a second tap on the state, or a tap off the country lets go. The panel's space is reserved so the page does not jump.
- **Our work** marks the nine states and Delhi where the company has worked, as the other two layers mark theirs, with no pins for towns (R2; `LAYERS.work.places` is 0). A picked state (pointing, tapping or focusing it) carries its chip under its name on the map, what was screened there in the shortest form (content 6.2: "Maharashtra · SCA, sickle-beta thal., beta thal. · population and newborn"), and the panel beside the map gives 6.2's line for the state. Which town saw which screening is Our work's sites table.
- **Changing the layer** spreads the new colours outward from the middle of what it marks.
- A key, a line of sources and a full text summary for screen readers always accompany it. Without script the map is a still image.
- **One partial** on the home page and Our work: `mapSection({ layer, h2, body })` in `src/site/_includes/map.njk`, imported with context. `layer` is the choice it opens on (the home page's is Sickle cell; Our work opens on Our work); the checked choice, the sentence, the key (from `map-layers.js` through `work.keys`) and the still all follow it, so the page says the same thing before the script runs, after it, and without it. `body` is a paragraph under the heading (`.map-body`, `moss`, at most 34rem), set above the choices on a phone too. A test's page (sickle cell, "Where it has been used") also passes `id` (the band's anchor, `where-used`; `map` unless named), `surface` (`""` sets the band on `mist` where the page's alternation of bands needs it; `paper` unless named) and `link` (`{ text, href }`, a text link under the body, kept with it on a phone: `.map-link`). The band's overflow is clipped by its class, `.map-band`, whatever its id.

### REASSURED

The word set as nine buttons across the column at up to 9rem, above nine criteria in one, two or three columns. Pointing at or focusing a letter fills it `sun`, and its criterion's title fills the same way (a rounded box, 0.2em of padding, cloned across a wrapped line), so the pair light up as one; and the reverse. This is the one place a name is filled, because here the mark is the reader's own pointing, not proof.

### Programmes, vision, contact, footer

- **Field photos:** three in a row, 5:4, with a hairline edge, each with a label naming the state (R2). Under 24rem two go side by side and the third runs the width under them, so the labels never meet. The home page's Programmes section and Programmes' "Where we have worked" show the same three until Our work has entries of its own.
- **Vision:** a `sprout` band, with a label and one statement in `vision-line`. On About it carries the mission above the vision, each a label (an `h2` in the label voice) and its statement in `vision-line`, 3rem to 4rem apart.
- **Contact actions:** four full-width rows in `action` type with an arrow at the right; on hover the row fills `sprout` and its text moves in 0.75rem. Each opens an email until a form service is chosen. One source for every page that offers them (home, Partnerships' closing band, Contact): `src/site/_data/actions.json` (label, subject, and the line Contact sets under each), rendered by `actionList()` in `src/site/_includes/actions.njk`. On Contact, `actionList(classes, { lines: true })` sets each action's line under its label (see Inner pages, "Contact").
- **Footer:** 2.75rem of padding above, the full logo at 7rem, a short description and the campaign line as a label; contact links; two addresses; then, under a hairline, the disclaimer, a credits disclosure, the copyright line and the policy links.

### Inner pages

Added with the Technology page (Phase 4, Task 4.1) and shared with the pages after it.

- **Rows** (`.rows`): a title and a sentence or two about it, one under another, as the tests are listed: a 2px `canopy` rule opens the list, hairlines divide it, and a hairline closes it. Titles are `row-title`, words in `moss`. From 56rem the title takes five columns of twelve and the words seven, on one baseline. Used wherever the content file says *rows* ("What a laboratory needs", "In development", a test's "The test").
- **Numbered steps** (`.steps-numbered`): an ordered list in which each step has a picture, its number, an `h3` and its words. The number is the list's own counter, in Archivo 700 at up to 2.5rem in `leaf`, hung to the left of the heading with the words under the heading; it is hidden from screen readers, which hear the list's numbering. The list carries `role="list"`, because Safari and VoiceOver drop the role of a list drawn without markers (an inline html-validate allowance names the two rules it trips). Pictures are 4:3 with radius 0.5rem and a hairline edge: the film's stills, or representative photographs through `picture()`, never captioned as the company's work. Where representative photographs stand for the company's own work, a quiet line under the steps says so (`.steps-note`, Archivo 400 at 1rem in `moss`, at most 44rem; Technology's method). One column on a phone, two from 40rem, three from 64rem. Used for a real sequence only (the method, the testing model, how a collaboration starts).
- **Numbered steps in words alone** (`.steps-numbered.steps-text`, Programmes' testing model; four up, `.four-up`, on Partnerships and Develop a test): the same list where no step has a fitting picture of its own (a report, a treatment or a follow-up would show a patient, or put a named centre forward as the company's work). Each step stands under its own 2px `canopy` rule, as the audiences do, with its number hung beside its words, and the step's name is run in at the start of its sentence (`.run-in`, Archivo 700 in `canopy`, with the content file's full stop), so the six read as the poster's six. At most 26rem of words a step.
- **A pair of sections** (`.pair`, Programmes): two short sections that belong together, side by side in one band, each with its own `h2` and anchor, under its own 2px `canopy` rule, its words in `moss` at most 34rem; one column on a phone and a tablet, two from 56rem. For "Before the test" beside "After the result", and training beside help with setting up, where a band each would be a heading and a sentence in a sheet of empty space. Column bodies keep the 35-word limit.
- **Accounts from the field** (`.accounts`, Programmes): the rows, larger: a 2px `canopy` rule opens the list and hairlines divide it; each account's title is an `h3` in five columns of twelve from 56rem, and its two paragraphs (split at a sentence, R1) take seven, in `moss`, at most 40rem. No photographs and no names: the accounts identify no family.
- **Four up** (`.four-up`, Partnerships): the audiences' columns (`.audiences.four-up`) and the numbered steps (`.steps-numbered.four-up`) where there are four of them: one column on a phone, two by two from 40rem, four in a row from 75rem, so that four never breaks into three and one.
- **Collaborators** (`.collaborators`, Partnerships): the organisations the company works with, typeset, never as logos (no partner logo without written permission; Part 8 item 25), from `src/site/_data/collaborators.json` in the content file's order. A register: one 2px `canopy` rule over the list, each name in Archivo 700 at 1.1875rem in `canopy` over a `line` hairline, balanced when it wraps, flowing down one column on a phone, two from 40rem and three from 64rem (CSS columns, so the names read down in order and no column is left with one). Under it, "Approved by ICMR" is a single row (`.rows` with one `div`), its `ICMR` a proof name.
- **Closing band with the contact actions** (Partnerships): `closing.actions: true` in a page's front matter sets the four contact actions in the two buttons' place, under the band's words in the same five columns; the heading then stands level with the words' first line rather than their last.
- **Comparison table** (`.compare-table`): a real `<table>` named by its section's heading (`aria-labelledby`), with `scope` on every header and its source as the `<caption>`, under it in 1rem `moss`. On a wide screen: column names in Archivo 700, a 2px `canopy` rule under them, hairlines between the rows, row names in Archivo 700, answers in `moss`. The company's own column is the one thing pointed out: a band of `sun` lightened through `paper` (22%), rounded 0.5rem at its ends, its answers in `canopy` at 700. Below 48rem each row becomes a `paper` card: its name as the title, then each answer under its column's name in the label voice (the cell's `data-label`, drawn by CSS, no script), the company's answer last on its pale green band; from 26rem the column's name stands beside its answer. The cards are not drawn as a table, so the table's semantics go with it; the head row is removed (`display: none`) rather than left to be heard as a stray run of column names, since each answer names its column itself.
- **Two families** (`.families`, Solutions): two columns from 56rem, each under its own 2px `canopy` rule as the audiences are, with the family's anchor as its id (`#haemoglobinopathies`, `#musculopathies`). In each: the `h3`, what the family is and what a test does for it as two paragraphs in `moss`, a "Tests" label over the tests by name (`.family-tests`, Archivo 700 at 1.125rem in `canopy`, each kept whole), and the family's pages as text links whose arrow stays with the last word when a name wraps.
- **Tests developed so far** is one partial (`src/site/_includes/test-rows.njk`) on the home page and Solutions; a page sets the rows' heading level (`h4` under the home page's `h3`, `h3` under Solutions' `h2`).
- **Row of boxes** (`.boxes`, Solutions; the test pages' "In the box" later): the company's own photographs of its boxes, as stills until the 3D view (Phase 7): LitLife™-SiBThal217, LitLife™-BThal, LitLife™-AlphaThal and LitLife™-SMA. The LitLife™-SCA box joins the row, first, when the company gives written permission for the CSIR-CCMB logo its pictures carry and confirms their printed claims (content 7.1); until then no picture of it is in the sources or published. Each is a 4:3 picture, radius 0.5rem, with a hairline edge, with the box's name under it in Archivo 700; two to a row on a phone, three from 40rem, all in one row from 64rem (five places now, six with the SCA box). The row ends with the open place (`.boxes .open`): a plain, unprinted carton drawn in CSS (no image) in 2px dashed `leaf` on a `mist` tile of the same size, its three faces sized in the tile's container units so the drawing keeps its shape, labelled "The condition you need next" and linking to Develop a test; pointing or focusing turns the tile `sprout`. The dash is the card's dashed circle carried into a box: the place still waiting for its test.
- **Questions** (`.faq`, Solutions and Partnerships): one partial, `faq(items)` in `src/site/_includes/faq.njk`, over `{ q, a }`. A list of closed `<details>` under a 2px `canopy` rule, divided by hairlines; each question in Archivo 700 at 1.25rem in `canopy` (`leaf` on hover and focus), with the disclosure's `leaf` plus before it that becomes a minus, and its answer in `moss` hung under the question's first word, at most 40rem. The same words are written as a `FAQPage` in structured data.
- **People** (`.people`, `.person`, About and Team; `person()` in `src/site/_includes/person.njk`, from `src/site/_data/team.json`): a register of entries under one 2px `canopy` rule, each entry over a `line` hairline, its `id` the person's slug. An entry is the name as an `h3` (Archivo 700 at 1.3rem in `canopy`, as a row's title), any credentials after it (Archivo 600 at 1rem in `moss`, kept on one line), the role under it as a label, and the bio in `moss`, at most 36rem a line (a paragraph over 60 words split at a sentence, R1). A portrait, where the entry has one (`.has-photo`), is the company's own, 370 px wide, so it is small: 6.5rem on a phone, 8rem from 30rem, 10rem from 64rem (never drawn much wider than its pixels: 160 px on a laptop, 320 at 2x), 370:431, radius 0.5rem, with a hairline edge; it stands at the entry's left with the name and role beside its foot, like a caption, and the bio runs the entry's full width under both, so the words are never squeezed beside the picture. Its `alt` is the person's name. The team's six are one column on a phone, two from 48rem and three from 100rem; the founders' names on Team are two from 40rem, with a link to About. Where an entry has no bio (the patron, the advisers, `.people-figures`) the name and role sit under the portrait. The patron and the advisory board share one band (`.people-groups`): stacked on a phone and a tablet, side by side from 64rem, the advisers taking twice the patron's room so the three portraits stand in one row at one size. Portraits are the one exception to "no identifiable people" (see Imagery).
- **Founders** (`.founders`, About `#founders`): the founders' one joint portrait (670 px wide, so at most 20rem; 670:860, radius 0.5rem, a hairline edge, `alt` naming both) beside their two entries without pictures, from 56rem in five columns of twelve and seven, on the page's own five-and-seven line.
- **Facts** (`.facts`, About's "The company in brief"): a real `<table>` named by its section's heading, a row name (`th scope="row"`, Archivo 700 at 1.15rem in `canopy`) and its answer (`moss`, at most 40rem), drawn as the rows are: a 2px `canopy` rule opens it, hairlines divide it, a hairline closes it. From 40rem the name takes five columns of twelve; on a phone each name stands over its answer. The company's addresses come from `site.json`, as the footer's do.
- **Evidence** is one partial, `evidence(links)` in `src/site/_includes/proof.njk`, on the home page and About, where two text links follow the four items ("Meet the team", "Who we work with").
- **Contact** (Contact, content 5.15). *The actions with their lines* (`.actions.actions-lined`): the contact actions as above, each row now the label in `action` type over its line (`.action-line`, Archivo 400 at 1rem in `moss`, at most 34rem), the whole row one link, the arrow level with the label; rows at least 5rem tall. They take seven columns of twelve under a heading in the label voice ("Where to begin"), and carry `data-contact`, by which `src/js/site/contact.js` adds the condition a test's page sends (`?condition=`) to each email's body; without script each is still an email with its subject. *Write or call* (`.reach`): in four columns at the right under its own label-voice heading, the email and the phone as text links at 1.125rem, drawn as the actions' list is drawn (a 2px `canopy` rule, hairlines), "(call or WhatsApp)" in `moss` after the number; under the actions on a phone and a tablet. *Where we are* (`.addresses`): on a `paper` band, the `h2` in five columns and the two offices in seven, each under its own 2px `canopy` rule: the office's name as an `h3`, the address (`<address>`, `moss`, at most 26rem), and an "Open in maps" text link to Google Maps' search for the address (same tab, `rel="noopener"`, the office named to screen readers). Side by side from 40rem, sharing their rows (a subgrid) so the two links stand level. The page has no closing band (it would ask the reader to contact the company, on the contact page); the notice closes it in its own band. The form waits for Phase 7.
- **Sites table** (`.sites`, Our work `#sites`): the field record, content 6.1's fifteen sites grouped by state in 6.2's order (R2), from `src/site/_data/sites.json` and `work.states`. 6.2's line for each state stays on the map, not here: six states share one line, which the table would repeat (R1), and the marks already say what was screened. From 64rem a real `<table>` named by its section's heading, drawn as the facts are: the three conditions in Archivo 700 at 1.125rem over their columns (`scope="colgroup"`, each over a hairline that spans its pair), population and newborn under them in the label voice, a 2px `canopy` rule under the head. The head is sticky: the site's header scrolls away, so it holds at the top of the window while the states pass under it, on solid `mist`, and stops where the table ends. The table's borders are separate and its rules are drawn by the cells, because a collapsed border would show through the head. Each state is a `<tbody>` opened by a `th scope="rowgroup"` with the state's name in Archivo 700 at 1.3rem in `canopy`, then its towns as rows (`th scope="row"`, Archivo 700 in `canopy`), with a hairline over each state. A screening done is the proof tag, drawn as a small filled lozenge (2.25rem by 1.125rem, `sun` with its 1.5px `canopy` border) centred in its column; its text, the column's name ("Sickle cell anaemia, population"), is visually hidden there so assistive technology hears what it marks. A screening not done is an empty cell, as the poster leaves it; no numbers of people. Under 64rem (the five columns would be too narrow for their names) the same markup is a list, by CSS alone: the head row removed (`display: none`; the list has lost the table's semantics, and each mark names its column itself), each state an entry under its own rule (2px `canopy` for the first, hairlines after), its name, then each town with the screenings done there as proof tags that now show their names, wrapping; empty cells are not drawn. Under it, the acknowledgement in `moss` at 1rem.
- **Entry list** (`.entries`, Our work "Recent work"): the company's work in pictures, newest first, when the photographs arrive (Phase 7): each entry one to four photographs, a label for its kind, the state as its title (R2), the month and year and 30 to 50 words. Until then it holds the five kinds of entry (In the field · In the laboratory · Training · With our partners · At a conference) in the label voice under a 2px `canopy` rule, run on with a `moss` middot before each (clipped where a kind begins a line, and given empty alternative text, `content: "·" / ""`, so it is not read aloud), closed by a hairline, with the section's one line ("Photographs from our work are on their way.") as its lead. No placeholder pictures.
- **A test's page** (`src/site/_includes/test-page.njk`, Phase 5): one layout for the sickle cell, thalassaemia, SMA, DMD and LGMD pages, which select it with `layout: test-page.njk` and differ only in front matter (the schema is in the file's header). The opening, then "The condition(s)" (`#the-condition`), "Why…" (`#why`), "The test(s)" (`#the-test`), "Where it has been used" (`#where-used`, optional), "In the box" (`#in-the-box`, optional), "Who it is for" beside "Also in this family" as a pair (`#who-and-family`), and the closing band with the notice. Its bands alternate back from the closing band's paper whichever optional sections a page has. Brackets never render: the layout strips a `[TBC: …]` after a sentence and leaves out a chip, row, list item or source that is only a bracket (the `unbracket` and `bracketless` filters); a test whose rows are all brackets keeps its heading over the single line "Details on request.". The closing band's solid button is the email asking for the test (`solid: { text, condition }`, the condition named in its body as `contact.js` names it), its line button "Partner with us". It is built only from the parts above, and adds:
  - **Line under the lead** (`.lead-line`): a page's short motto between the lead and the tags (SMA's "Early detection. Timely care. Better outcomes."), in the lead's size in Archivo 700 in `canopy`, so it reads as a motto, not a second lead.
  - **Words beside a heading** (`.beside`, with About's `.story`): the `h2` in five columns of twelve and the paragraphs in seven, as About's "How the company began"; a source under them as the footnote (`.source`, 1rem `moss`). A picture (`.aside-picture`, 4:3, radius 0.5rem, a hairline edge; SMA's newborn) or a box stands under the heading on a wide screen, where the words span both rows so the picture keeps close to its heading, and after the words on a phone.
  - **Lines** (`.lines`): a short list read down, one entry to a line between `line` hairlines, closed by one, in ink at most 40rem: who a test is for, what is in its box.
  - **In the box** (`.kit`): the box's words, then its list, or one list for each part the box comes in under its name in the label voice (SMA's sample collection kit and reagent kit), side by side from 40rem; the box's still beside them under the heading (`.boxes.boxes-aside`, two to a row at most). The SCA box is withheld (Phase 4 note).
  - **A test page's row of boxes** (`.boxes.boxes-few`, Thalassaemia's three under its tests): the row of boxes at the size Solutions shows them, a fifth of the column each from 64rem, never stretched across the row; no open place.
  - **Also in this family**: the family's pages as Solutions' family links (the arrow kept with the last word), a note under a link where the page has one, then "Develop a test with us" (content 3.3). A test whose page is a draft is linked at `/solutions/develop-a-test/#musculopathies` by its name.
- **REASSURED** is one partial (`src/site/_includes/reassured.njk`) on the home page and Technology. A page may give it a `paper` surface where its order of bands needs one, and a sentence under the source (`.reassured-after`, `moss`, 44rem at most).
- **A policy** (`.policy`, Privacy and Terms; `policy(parts, updated)` in `src/site/_includes/policy.njk`): the page read part by part, drawn as the rows are: a 2px `canopy` rule opens it, hairlines divide the parts, a hairline closes it. Each part is a section named by its heading (Archivo 700 at 1.3rem in `canopy`), the heading in five columns of twelve from 56rem and the words in seven, at most 40rem, in ink (here the words are the page, not a note on it). A list's terms are run in (`.run-in`). A link inside a sentence stays in its line; the email and phone under Terms' Contact are ordinary text links. A "Last updated" line in `moss` opens the policy once a date is supplied. No closing band and no notice.
- **Not found** (`.not-found`, `/404.html`): the heading alone in the opening, then the sentence in `moss` and the six pages as the contact actions' rows (`.actions`), at most 44rem. For an old `.php` address of the current site, the one line `src/js/site/not-found.js` adds above the rows ("You may be looking for: …", `.not-found-hint`) is the thing pointed out: `canopy` on `sun` lightened through `paper` (22%), radius 0.5rem. Every link and asset on the page is root-relative, since Pages serves it at any address.

## Opening film

The signature. About six and a half seconds, shot as one take, in three parts that match the three steps under "How it works".

| Seconds | What happens | Caption |
| --- | --- | --- |
| 0 to 0.48 | The card's cover swings back (106 degrees). The camera is low beside the card and already moving. | "A single drop of blood, dried on a card." |
| 0.24 to 1.04 | A drop of blood swells where it hangs and draws out into the shape of a drop. | |
| 1.04 to 1.6 | It lets go and falls into the collection circle (0.56 s). This is the nearest the camera comes. | |
| 1.6 to 2.56 | The paper draws it in and the spot soaks outward, as the camera climbs over it. | |
| 2.6 | | "From card to result without a DNA extraction step." |
| 2.72 to 3.52 | The cover folds shut. The card is one of a batch. | |
| 4.16 | The camera passes over the batch, still climbing. | |
| 5.0 | | "Built for screening at the scale of a nation." |
| 5.2 to 6.0 | The cards have become a map of India, seen from straight above, north up. The places the company works light up in life green. | |
| 5.92 to 6.4 | The places are named, in `paper` chips. The camera comes to rest, for the first time. | |
| 6.56 | The film is over. Its button offers a replay. | |

The first caption is the page's wording as approved on 12 October. The content file (`content/website-content.md`, Part 8 item 1) proposes "A spot of blood, dried on a card." for the site; the film does not change either way.

**Rules the client set. Do not undo them without being asked.**

- It plays by itself and keeps its own time, like a video. Scrolling does not drive it, and scrolling it off screen does not pause it. Only the reader's pause button or a hidden tab holds it.
- It is one continuous take. The camera is moving in the first frame and rests only on the map. No holds between the parts, no cuts.
- One drop falls, from above, slowly enough to be seen as a drop. It is small: its radius is **0.027 of the card's length**, about a sixth of the collection circle's radius of 0.155. The client asked for it smaller on 13 October 2026 (0.05 became 0.036) and chose the toolbar's "Smaller still" (0.75 of that, 0.027) on 23 October. Do not enlarge it without being asked. In the code the designed radius is `DROP.radius` in `designs/src/js/lumen/scene.js`, and `--film-drop` on the page is a multiple of it; the chosen size is either `DROP.radius: 0.027` with no multiple, or 0.036 with `--film-drop: 0.75`, which is how the toolbar shows it now.
- The map is flat and upright: straight above, north up, not tilted.
- No progress bar and no chapter markers. The film has one control: a 2.75rem round `paper` button at the end of the caption's line that pauses, plays or, at the end, replays.
- Its pace is settled: 6.56 seconds. Do not slow it down.

**How it sits on the page.**

- *Wide windows:* the film fills the whole opening, at least 36rem and otherwise the height of the window. The heading, lead, two buttons and a note stand over its left side in a column of `min(38rem, 44vw)`. A veil of `mist` behind the text fades out where the column ends, so the text is readable whatever the film shows. The film's subject is centred 74% of the way across the page's column. The caption and the button run along the foot.
- *Small screens:* heading first, then the film in a frame the full width of the screen and `min(100vw, 58svh)` tall, its top and bottom edges fading into `mist`; then the caption and button, the lead, the buttons and the note.
- The heading, lead, buttons and note rise in on load, one after another (see Motion).

**When the film cannot or should not play.**

- *Reduced motion requested:* a still of the drop above the card, with a solid "Play the film" button on it. The film starts only when asked.
- *No WebGL 2, or the film has not started within 7 seconds:* the still alone. Nothing is lost: the three steps under "How it works" say the same thing.
- The film's code carries three.js (about 700 KB before compression) and is fetched only when the film will play.
- On a slow machine it lowers its resolution before anything else, and still keeps to real time.

**The card** is the company's own, drawn in code: a matchbook card with a cover flap carrying the full logo, one dashed collection circle on filter paper, and a pocket with a barcode and a code (`SCM / 100001`; the codes are illustrative, set in the label voice, Archivo). Do not swap in a generic card or a photograph.

All the timing is in two tables at the top of `designs/src/js/lumen/scene.js`: `TAKE` (where the camera is at each second) and `TIMING` (everything else). The README explains how to change them and how to capture new stills. The film's code is Design 10's (`designs/src/js/reel/scene.js`) with three differences: it reads `--ff-mono` first for the codes on the cards, it lightens a card before warming it, and its warning text names this design.

## Motion

The film is the one orchestrated moment. Everything else moves only in answer to the reader, and briefly.

| What | Motion |
| --- | --- |
| Hero text on load | Rises 14px and fades in over 0.8s, `cubic-bezier(0.2, 0.7, 0.2, 1)`, each item 90ms after the last |
| Hover and selection colour | 0.14s to 0.16s, `ease` (the stylesheet's transitions) |
| A press (buttons, nav links, tags, test rows, contact rows) | Scales to 0.985 on the way down and back on release, 0.18s, `power2.out` |
| Link arrow, contact row | The arrow moves 0.25rem, the row slides in 0.75rem, 0.2s, on pointing or keyboard focus |
| Film caption change | 0.45s fade, rising 6px |
| A section's opening, the first time it comes into view | Rises 10px and fades in over 0.5s, once, never again (decision D1, B, 24 October 2026) |
| Map layer change | 0.5s per state, spreading outward |
| Map names | 0.35s fade |
| Anchor links | Smooth scrolling |

What moves outside the film is `src/js/site/motion.js` (GSAP): every tween starts from where the thing is on screen, so it can be taken up again at any instant, and the keyboard's focus gets what the pointer gets. Colour stays in the stylesheet. The one motion tied to scrolling is the settle-in, and it plays once: nothing is scrubbed with the scroll, there is no parallax and nothing loops. With reduced motion requested, `motion.js` binds nothing, the hero text does not rise, scrolling is not smoothed, the map's colours change at once and the film waits for its button.

## Imagery

- **The card is drawn, not photographed.** The stills (`designs/assets/img/lumen-*.webp`) are rendered from the same model as the film, in this design's own colours. They were captured with Roboto Mono on the cards and the larger drop; capture them again once the chosen type and drop are the page's defaults (the README says how). The map's two stills come from the drawn map, and show the key's colours.
- **The preview card** for links shared on social networks and in chat (`designs/assets/img/lumen-social.png`, 1200 by 630) is the opening at the film's end, captured from the page. It is named in the page's `og:image`, which must be an absolute address on the site's domain. Capture it again with the chosen type. On the site it is `src/assets/img/social.png` (`npm run stills`).
- **Every other page's preview card** (added in Phase 3) is made of this file's materials and nothing new: the flat `mist` page under a 0.5rem `leaf` rule along its top, the emblem at 6rem with "Lightening Lives" in Archivo 700 beside it, the page's label in the label voice, its title (`og_title`, or the `h1`) in Archivo 700 at 4rem in `canopy`, at most three lines, and "lighteninglives.in" in the label voice in `leaf` at the foot. Built at `/_social/<slug>/` (`src/site/_social/card.njk`, never indexed) and photographed by `npm run social` into `src/assets/img/social/<slug>.png`.
- **Field photos** are of the places the company has worked. Nobody in a photo may be identifiable. The current three are representative images from Wikimedia Commons and need the client's own before launch; their credits are in the footer and in `src/assets/img/CREDITS.md`. They are labelled as places, never captioned as the company's work.
- **Portraits** of the company's own people (About and Team) are the one exception to "nobody identifiable": they are the company's own photographs of its founders, staff, patron and advisers, shown with their consent pending Part 8 item 22, each named in its `alt` and beside it. They are small (370 by 431; the founders' 670 by 860) and are drawn no larger than their pixels allow (see People); the content file asks for the originals.
- **Representative photographs** on the inner pages (places, laboratory equipment, the material of the method, care settings) are stand-ins until the company's own arrive (decision D4): captioned by place or subject, never as the company's work or as a patient. Their originals are in `src/images-src/`; `npm run images` writes each at 640, 1280 and, when wide enough, 1920 px, and the `picture()` include (`src/site/_includes/picture.njk`) offers every width. The footer's "Photo and map credits" lists only what its page shows, from the table in `src/assets/img/CREDITS.md`, with one line saying the photographs are representative.
- **Photographs of the work** (the six steps of the method, the boxes, the field) belong on the inner pages, as the content file says, and are to be the company's own. Until the poster's originals arrive (content 7.1), the method's steps 3 to 6 are representative stand-ins, labelled where they are seen by a line under the steps (content 5.2); steps 1 and 2 are the film's stills.
- **The company's own pictures** (sources named `box-…` or `person-…`: the boxes, from the conference poster and the SMA box's artwork, and the portraits; the SCA box is withheld, see Components) are small and are not stand-ins. `npm run images` never enlarges them: each is written at the widths of 640, 1280 and 1920 it is wide enough for and, below 1280, at its own width as the widest, so a source under 640 px is written once at its own width; every file is named by its true width, and `picture()` gives the narrowest's true width and height. They have no row in `CREDITS.md`, are not listed under "Photo and map credits", and a page whose only photographs are the company's own has no "representative" line.
- **No stock illustrations, no icon sets, no decorative shapes.** If a section seems to need a picture, it gets a still of the card or none.
- **Partner names are typeset.** No ICMR, CSIR-CCMB or other partner logos without written permission.

### The logo

The logo is the client's existing identity and is never redrawn, recoloured or restyled. Files and rules are in `designs/assets/logo/README.md`.

- Header: the emblem alone, with the name and tagline set beside it in the page's type.
- Footer: the full logo, once, at 11rem. Its lettering cannot be read below about 160px wide.
- Browser tab and home screen: `designs/assets/logo/icons/`.
- The logo's own colours (its yellows, `#69A129` green, the brown and maroon lettering) belong to the logo. None of them is used in the interface: the highlight, `sun`, is the Lumen theme's own life green, not the logo's leaf green, and the amber that was taken from the logo's sun between 13 and 24 October 2026 is gone.

## Voice and content

Clear, evidence-led and warm. Short sentences, plain verbs, Indian English (anaemia, thalassaemia, haemophilia, programme, organisation). The site's copy, page by page, is `content/website-content.md`; its Part 2 is the strategy and its Part 8 the list of facts still to confirm.

- **Say what the company is:** an innovation-driven healthcare technology company that develops molecular diagnostics for inherited blood and muscle conditions. Not a charity, an NGO, a laboratory or a seller of kits.
- **Proof stands beside the claim:** approved by ICMR, patented in India and Japan, built with CSIR-CCMB know-how, used at fifteen sites.
- **Any inherited condition.** The company develops a test for whatever condition a programme needs. The tests so far are two families, haemoglobinopathies and musculopathies, and any list of them ends with an open place for the next. Do not name a client or a request as an example.
- **Institutions only.** Say so near every way of making contact, and tell individuals where to go instead.
- **The sample is "a spot of blood on a card"**, or a "dried blood spot": the company's choice for the site's content on 12 October 2026. The approved page's heading and first caption still say "a single drop of blood", and so does the company's vision statement, which keeps its own words; the content file asks the company to confirm the change (Part 8, item 1). The larger claims built on it stay out: "limitless", "any genetic test is possible", "revolutionising", "endless possibilities".
- **Collection is "minimally invasive"**, never "painless".
- **No prices, procurement figures or clinical performance figures.**
- **Headings** are sentence case. Section headings have no full stop; the hero's heading and the film's three lines do, because they are read as statements. **Buttons** start with a verb and say what happens: "Partner with us", "See our solutions", "Request tests".
- **The map** says "reported in", never "highest in", and always carries its sources.

## Accessibility

- Text meets 4.5:1 everywhere (see Contrast), including the "Our vision" label (`leaf` on `sprout`, 5.17) and a proof name in `leaf` on `mist` (5.57).
- A skip link is the first thing in the page. Every section is labelled by its heading. The page has one `h1`.
- Focus is always visible, and nothing is reachable only by pointer: the map answers to the arrow keys and Escape, and the REASSURED letters are buttons.
- The film's captions are hidden from screen readers because the same three lines, with more to say, are under "How it works". The film's button always says what it will do ("Pause the film", "Play the film", "Replay the film").
- The map has a full text summary for screen readers, and its changing sentence is a polite live region.
- Menus and disclosures are `<details>` elements and work without script. Without script the film and the map are still images.
- `prefers-reduced-motion` is respected throughout (see Motion).
- A proof name is told apart by colour alone, as a link is; it sits inside a heading that makes sense without it, and the proof tag beside it says the same thing in words.

## Do's and Don'ts

- Do keep Archivo (headings at width 112%), and `canopy` ink on `mist`. They are the client's choice.
- Do let the film be the only showpiece. Keep everything after it quiet.
- Do set a name that is proof in `leaf`, with nothing drawn on or under it.
- Do use `sun` only to point something out: the fill of a proof tag, the fill under what the reader is pointing at in REASSURED, the map's marks, a dot with a `canopy` border, the focus ring. Lighten before you move a blue thing to green.
- Do keep red for the blood sample.
- Do keep the page flat: `mist` and `paper` bands, hairlines and 2px rules. The film's fades are the only gradients.
- Do keep one corner (0.5rem) and one edge (a 1px `line`) for everything that stands on the page.
- Do separate things with surface, rules and outlines, as Design 10 does; the material changes nothing about where things stand.
- Do size everything in `rem`, and read colours from the custom properties, in the film as well.
- Do give every list of the tests an open place for the next.
- Do keep a still image behind anything that needs WebGL or script.
- Don't make the film follow the scroll, add stops or a progress bar to it, slow it down, or enlarge the drop.
- Don't tilt the map or show more than one drop.
- Don't put a bar, a box or a fill on a proof name; the coloured mark was turned down.
- Don't bring back glass, blur, pools of light, soft shadows, pills or decorative illustration. Don't loosen the spacing back towards the 128 px sections the user called too much space.
- Don't use `leaf` for text on `meadow` or `sun`, or `sun` for text anywhere.
- Don't mix `sun` straight into a blue: go through `paper`.
- Don't restyle the logo. Its colours stay in the logo; none of them is used in the interface.
- Don't use partner logos without permission, or photos with identifiable people (the company's own portraits of its people on About and Team are the exception).
- Don't add a cookie or consent banner. Say what analytics the site uses in the privacy policy.
- Don't add scroll-scrubbed animation, parallax or anything that loops. The one scroll-linked motion is a section's opening settling in, once (see Motion).

## Where things live

| What | File |
| --- | --- |
| The page | `designs/lumen.html` |
| Tokens (`:root`) and every component's styles | `src/css/site.css` (Tailwind CSS v4; tokens are exposed as utilities such as `bg-paper`, `text-moss`, `border-line`). The tokens are at the top; the refinement of 25 October 2026 is one block at its end. `designs/src/css/lumen.css` keeps the comparison page as it was |
| Menu, REASSURED, the map, loading the film | `designs/src/js/lumen/main.js` |
| The film: `TAKE`, `TIMING`, `DROP`, the card | `designs/src/js/lumen/scene.js` |
| The map's facts and wording | `designs/src/js/drop/map-layers.js` (Designs 01 and 07 keep a copy in `designs/src/js/sample-card/india-data.js`) |
| Stills and the preview card | `designs/assets/img/lumen-*.webp`, `designs/assets/img/lumen-social.png`; on the site `src/assets/img/site-*.webp`, `social.png` and `social/*.png` |
| Photographs and their credits | `src/images-src/` (originals), `src/assets/img/CREDITS.md`, `scripts/images.mjs` |
| Logo | `designs/assets/logo/` |
| The site's copy, strategy and open facts | `content/website-content.md` |
| Steps for going live | `designs/README.md` |

Compiled files in `designs/assets/css` and `designs/assets/js` are committed; run `npm run build` in `designs/` after changing anything in `designs/src/`.

**The comparison page is history.** `designs/lumen.html` and `designs/src/` keep Design 11 as it was compared in October 2026 (Exo and Roboto Mono by default, the toolbar's variations, glass and pools). They are not updated with the refinement and are not the reference; build from `src/` and this file.

**Retaken after the refinement** (25 October 2026): the film's stills and the home page's card (`npm run stills`) and every page's preview card (`npm run social`). Retake both whenever the type or the card changes.
