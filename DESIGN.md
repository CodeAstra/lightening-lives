---
version: alpha
name: Lightening Lives
description: The design of the Lightening Lives website, taken from the approved landing page (Design 11, Lumen). DNA-blue ink on ice white, Exo and Roboto Mono, frosted glass under pools of blue light and sunlight, and one opening film in which a drop of blood becomes a map of India.
colors:
  # Each name is the CSS custom property of the same name in src/css/lumen.css (--canopy, --mist, ...).
  primary: "#0C4A6E" # canopy, under the role name that design tools look for
  canopy: "#0C4A6E"
  leaf: "#0369A1"
  moss: "#475569"
  mist: "#F0F9FF"
  paper: "#FFFFFF"
  sprout: "#E0F2FE"
  meadow: "#BAE6FD"
  sun: "#FFC53D"
  drop: "#A61B18"
  blood: "#6A2A20"
  line: "#0C4A6E2E" # canopy at 18%
  pool-blue: "#0369A129" # leaf at 16%: the light behind a band, from the left
  pool-sun: "#FFC53D33" # sun at 20%: the light behind a band, from the right
  glass: "#FFFFFF9E" # paper at 62%, blurred: what stands on the page
  glass-strong: "#FFFFFFDB" # paper at 86%: where what is on it must stay readable over the film
typography:
  # Sizes are the largest each level reaches. Most are fluid: the Typography section gives the full range.
  display:
    fontFamily: Exo
    fontSize: 4.75rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.022em
  h2:
    fontFamily: Exo
    fontSize: 3.3rem
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: -0.022em
  h3:
    fontFamily: Exo
    fontSize: 1.7rem
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.012em
  row-title:
    fontFamily: Exo
    fontSize: 1.3rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.008em
  vision-line:
    fontFamily: Exo
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.022em
  film-line:
    fontFamily: Exo
    fontSize: 1.55rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.022em
  action:
    fontFamily: Exo
    fontSize: 1.6rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.012em
  word:
    fontFamily: Exo
    fontSize: 9rem
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: -0.03em
  lead:
    fontFamily: Exo
    fontSize: 1.35rem
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: Exo
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Exo
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.45
  small:
    fontFamily: Exo
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
  fine:
    fontFamily: Exo
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: Roboto Mono
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.1em
  button:
    fontFamily: Exo
    fontSize: 1.0625rem
    fontWeight: 700
    lineHeight: 1.2
  tag:
    fontFamily: Roboto Mono
    fontSize: 0.8125rem
    fontWeight: 500
    letterSpacing: 0.01em
rounded:
  xs: 0.3rem
  sm: 0.85rem
  md: 1rem
  lg: 1.25rem
  full: 999px
spacing:
  frame: 82rem # the centred column's greatest width
  gutter: 4.5rem # side padding: clamp(1.25rem, 5vw, 4.5rem)
  section: 8rem # a section's top and bottom padding: clamp(4.5rem, 9vw, 8rem)
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
    rounded: "{rounded.full}"
    height: 3.25rem
    padding: 1.5rem
  button-solid-hover:
    backgroundColor: "{colors.canopy}"
    textColor: "{colors.paper}"
  button-line:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.canopy}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: 3.25rem
    padding: 1.5rem
  button-line-hover:
    backgroundColor: "{colors.sprout}"
    textColor: "{colors.canopy}"
  nav-link:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.full}"
    height: 2.75rem
    padding: 0.9rem
  nav-link-hover:
    backgroundColor: "{colors.sprout}"
    textColor: "{colors.canopy}"
  highlight: # the bar of sun under the name is an underline; see Shapes
    backgroundColor: "{colors.mist}"
    textColor: "{colors.canopy}"
  tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.canopy}"
    typography: "{typography.tag}"
    rounded: "{rounded.full}"
    height: 1.75rem
    padding: 0.6rem
  tag-proof:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.canopy}"
  segmented-control:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.full}"
    padding: 0.25rem
  segmented-control-selected:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    height: 2.5rem
  kind-card:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.lg}"
    padding: 1.5rem
  notice:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.lg}"
    padding: 1.4rem
  vision-band:
    backgroundColor: "{colors.sprout}"
    textColor: "{colors.canopy}"
    typography: "{typography.vision-line}"
  film-toggle:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.canopy}"
    rounded: "{rounded.full}"
    size: 2.75rem
  place-chip:
    backgroundColor: "{colors.glass-strong}"
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
  band-light-left:
    backgroundColor: "{colors.pool-blue}"
    width: min(64vw, 56rem)
  band-light-right:
    backgroundColor: "{colors.pool-sun}"
    width: min(64vw, 56rem)
  rule:
    backgroundColor: "{colors.line}"
    height: 1px
  sample-drop:
    backgroundColor: "{colors.drop}"
  sample-spot:
    backgroundColor: "{colors.blood}"
---

# Lightening Lives: design

This file describes the design the client chose for production on 13 October 2026: Design 11, "Lumen" (`lumen.html`). It is Design 10, "Reel" (`reel.html`, approved on 12 October), on the same page and with the same film, in another light: ice white instead of pale green, DNA blue instead of leaf green, Exo and Roboto Mono instead of Quicksand and Nunito, and frosted glass lit from the sides where Design 10 had flat paper. It is the reference for building the live site and any page added to it. The values in the front matter were read from `src/css/lumen.css` and `src/js/lumen/scene.js`; change them there and here together.

## Overview

Lightening Lives is a molecular diagnostics company in Hyderabad. It develops genetic tests that work from a dried blood spot on a card, and supplies them in bulk to hospitals, laboratories and public health programmes. The people reading the site are clinicians, laboratory heads, district health officers, programme officers, NGOs and CSR funders. It is not for individuals looking for a test, and it says so.

The site should feel light, clear and sure of itself: a healthcare technology company with evidence behind it, not a charity. The client's one visual wish was lightness, and the name of the company is a kind of light. Lumen takes that literally: the page is ice white, and each white band is lit from one side, by DNA blue from the left or by sunlight from the right.

The whole design rests on one picture: a single drop of blood falls onto a card, the card joins a batch, and the batch becomes a map of India made of cards. That is the opening film, and it is the only showpiece on the site. Everything after it is a quiet page: white bands under soft light, blue ink, thin rules, and glass only where something stands on the page.

Four things were chosen by the client and stay as they are unless the client asks:

- **Type:** Exo for everything, with Roboto Mono for the label voice.
- **Colour:** DNA-blue ink on ice white, with sun amber for what is being pointed out (chosen on 13 October 2026 in place of the theme's emerald, which sat badly with the blue).
- **The film:** it plays by itself, in one continuous take of about six and a half seconds. It does not follow the scroll.
- **The layout:** Design 10's, line for line. Sections, sizes, borders and breakpoints are the same; only what things are made of changed.

## Colors

One family of blues does nearly all the work. Sun amber and red each have a single job.

| Token | Value | Role |
| --- | --- | --- |
| `canopy` | `#0C4A6E` | The ink: all text, borders of controls, the hover state of the solid button. `primary` is the same colour. |
| `leaf` | `#0369A1` | DNA blue: labels, link underlines, the solid button, the chosen map layer. |
| `moss` | `#475569` | Secondary text: lead paragraphs, descriptions, notes. |
| `mist` | `#F0F9FF` | Ice white: the page, and the haze the film's cards fade into. Also the browser's `theme-color`. |
| `paper` | `#FFFFFF` | The second surface: alternate sections, the footer, the card stock in the film, and the white the glass is made of. |
| `sprout` | `#E0F2FE` | Hover fills, and the one tinted band behind the vision statement. |
| `meadow` | `#BAE6FD` | The map: a state that is not marked, and the field of cards seen from far away. |
| `sun` | `#FFC53D` | Sun amber: what is being pointed out. See below. |
| `drop` | `#A61B18` | The blood while it is a falling drop. |
| `blood` | `#6A2A20` | The blood once it has dried into the paper. |
| `line` | `canopy` at 18% | Hairlines between rows. |
| `pool-blue` | `leaf` at 16% | The light behind a `paper` band, from the left. |
| `pool-sun` | `sun` at 20% | The light behind every fourth `paper` band, from the right; behind the vision, with the blue, from both sides. |
| `glass` | `paper` at 62%, blurred 16px | What stands on the page: outline buttons, the film's button, the map's control, the portfolio cards, the notice. |
| `glass-strong` | `paper` at 86%, blurred | The menu panel and the chips over the film and the map, which must stay readable over whatever is behind them. |

**Sun amber means "this is being pointed out".** It is the logo's own sun, a shade softer, and the one warm colour on a cool page. It marks named proof (the bar under "ICMR" and "CSIR-CCMB", the "Validated by ICMR" tag), the states and places the map marks, the REASSURED letter and criterion the reader is on, keyboard focus and selected text; and, at a fifth of its strength, it is the sunlight behind every fourth band. It is never a section background, never a button colour and never text.

**Red is the sample and nothing else.** `drop` and `blood` appear only in the film and in the stills taken from it. Nothing in the interface is red.

**Blue and amber are never mixed straight.** A warm colour mixed into a blue one goes through khaki, so a map state, a card in the film and a swatch in the key are first lightened towards `paper` and then warmed to `sun`: half-way is a pale amber (`#FFE5A8`), not a muddy green. The map, the film and the key share this rule (`markedColour` in `src/js/lumen/main.js`, `PALE` in the film).

### Contrast

Measured against WCAG 2 (4.5:1 is the minimum for text of this size).

| Text | on `mist` | on `paper` | on `sprout` | on `meadow` | on `sun` |
| --- | --- | --- | --- | --- | --- |
| `canopy` | 8.87 | 9.46 | 8.24 | 7.13 | 5.99 |
| `moss` | 7.11 | 7.58 | 6.60 | 5.71 | 4.80 |
| `leaf` | 5.57 | 5.93 | 5.17 | 4.47 (too low) | 3.76 (too low) |

`paper` text is 9.46 on `canopy` and 5.93 on `leaf` (the solid button). Glass over `mist` is about `#F9FDFF`, where `canopy` is 9.24 and `leaf` 5.80. The pools are faint enough not to matter: at their densest, `leaf` is 5.39 on the sun pool and 4.68 on the blue pool, and the dense part of a pool lies beyond the column's content.

So: `leaf` is for labels on `mist`, `paper`, `sprout` and glass, never on `meadow` or `sun`. `sun` is 1.5:1 on `mist` and can never carry meaning as text or as a thin line by itself: it is always a fill with `canopy` text on it, a bar under `canopy` text, or a dot with a `canopy` border.

### Colours in the film

The film is drawn in WebGL but takes its colours from the same custom properties: `--mist` for its background and fog, `--paper` for the card stock, `--canopy` for the card's print, `--meadow` and `--sun` for the map (lightened first, then warmed, as above), `--drop` and `--blood` for the sample. Its lighting is set so that a matte surface facing up shows exactly its own colour, which is why the cards match the page. Change a token and the film follows; do not hard-code a colour in the scene.

## Typography

Two faces from Google Fonts. **Exo** (400, 500, 600, 700) is everything that is read: headings at 600, the film's captions, the big REASSURED letters and the vision at 700, body at 400. **Roboto Mono** (400, 500, 700) is the label voice: the small capitals, the tags, the chips on the film and the map, the facts about a state, and the codes printed on the cards in the film. Load only those weights.

| Level | Face and weight | Size | Line height | Tracking | Used for |
| --- | --- | --- | --- | --- | --- |
| `display` | Exo 600 | `clamp(2.6rem, 5vw, 4.75rem)`; under 30rem wide, `clamp(1.95rem, 9.4vw, 2.6rem)` | 1 | -0.022em | The page's one `h1` |
| `h2` | Exo 600 | `clamp(2rem, 3.7vw, 3.3rem)` | 1.06 | -0.022em | Section headings |
| `h3` | Exo 600 | `clamp(1.4rem, 1.9vw, 1.7rem)` | 1.12 | -0.012em | Headings inside a section |
| `row-title` | Exo 600 | 1.3rem | 1.2 | -0.008em | Titles in dense lists ("Why", REASSURED criteria) |
| `vision-line` | Exo 700 | `clamp(1.7rem, 3.4vw, 3rem)` | 1.12 | -0.022em | The vision statement |
| `film-line` | Exo 700 | `clamp(1.2rem, 1.75vw, 1.55rem)` | 1.15 | -0.022em | The caption under the film |
| `action` | Exo 600 | `clamp(1.25rem, 2vw, 1.6rem)` | 1.15 | -0.012em | The contact section's rows |
| `word` | Exo 700 | `clamp(2.5rem, 9.8vw, 9rem)` | 0.92 | -0.03em | The nine letters of REASSURED |
| `brand` | Exo 700 | 1.4rem | 1 | -0.022em | The name beside the emblem in the header |
| `lead` | Exo 400 | `clamp(1.15rem, 1.5vw, 1.35rem)` | 1.5 | | The paragraph beside a section heading, in `moss` |
| `body` | Exo 400 | 1.125rem | 1.55 | | Running text |
| `body-sm` | Exo 400 | 1.0625rem | 1.45 | | Descriptions under a `row-title`, the map's sentence |
| `small` | Exo 400 | 1rem | 1.55 | | Notes, footnotes, the footer's small print |
| `fine` | Exo 400 | 0.9375rem | 1.4 | | The map's key, sources and credits |
| `label` | Roboto Mono 500 | 0.8125rem | 1.3 | 0.1em, uppercase | Labels and data, in `leaf` |
| `button` | Exo 700 | 1.0625rem | 1.2 | | Buttons. Nav links are the same size at 600; text links are `body` at 600. |
| `tag` | Roboto Mono 500 | 0.8125rem | | 0.01em | Tags, and the chips on the film and the map |
| `map-name` | Exo 700 | 0.8125rem | | | A marked state's name on the map, with a `paper` glow |

- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
- Headings are sentence case. Only `label` is uppercase.
- Emphasis inside a paragraph is weight 600 in `canopy`, not italics.
- **The whole page scales on large monitors.** `html { font-size: clamp(100%, 0.5vw + 0.55rem, 137.5%) }` keeps 16px up to a 1440px window and grows to 22px at 2640px. Every size, radius and breakpoint is in `rem` so that it scales together: do not introduce `px` sizes.
- The stylesheet sets `font-stretch` on some headings. Exo has no width axis, so it does nothing here; it is there for the comparison toolbar's other typefaces.
- The label voice's weight and tracking are tokens (`--label-weight`, `--label-tracking`), so that a sans-serif can take the monospace's place with its own weight. Roboto Mono at 500 and 0.1em is the design.

## Layout

**One centred column.** `.wrap` is 82rem at its widest (`--frame`) with side padding of `clamp(1.25rem, 5vw, 4.5rem)` (`--pad`). `--gutter` is the distance from the window's edge to the column's content; the header and the film, which span the window, use it to line up with the column.

**Sections** have `clamp(4.5rem, 9vw, 8rem)` of padding above and below, and alternate between the two surfaces so that each reads as its own sheet. Every `paper` band is lit from one side:

| Order | Section | Surface | Light |
| --- | --- | --- | --- |
| 1 | Opening film (hero) | `mist` | |
| 2 | How it works | `paper` | blue, from the left |
| 3 | Why | `mist` | |
| 4 | Tests (portfolio) | `paper` | sun, from the right |
| 5 | Evidence | `mist` | |
| 6 | Map | `paper` | blue, from the left |
| 7 | REASSURED | `mist` | |
| 8 | Who we work with | `paper` | sun, from the right |
| 9 | Programmes | `mist` | |
| 10 | Vision | `sprout` band | blue from the left and sun from the right |
| 11 | Contact | `paper` | blue, from the left |
| 12 | Footer | `paper`, under a 2px `canopy` rule | |

A pool is a radial gradient the full height of its band and `min(64vw, 56rem)` wide, with its centre 14vw outside the window, clipped to the band (`overflow: clip`, so nothing widens the page). Which side it falls on follows from the band's place in the page (`:nth-of-type(4n)` takes the sun), not from a class: add a band and the light stays in step.

**A section's opening** is a twelve-column row on wide screens: the `h2` takes seven columns and a `lead` paragraph takes five, aligned to the heading's last line, with a 1.5rem gap. On small screens they stack. The section's content starts 3rem below.

**Splits** inside sections are 5/7 or 7/5 of twelve columns, with a 3rem gap growing to 4rem.

**Spacing** steps: 0.5rem, 0.75rem, 1rem, 1.5rem, 3rem, 4rem. Rows in lists have 1.2rem to 1.9rem of padding above and below.

**Breakpoints** are in `rem` and are chosen per component, where its content needs them, not from a global set. The ones that matter:

- 64rem: the header's links replace the "Menu" button.
- 64rem to 78rem: the emblem stands alone in the header, because the links and the name do not both fit on one line (Design 10 showed the name from 73rem, and its links wrapped between 73rem and 78rem).
- 56.25rem wide and a window at least 21:20: the film fills the whole opening with the text over its left side. Narrower or taller than that, the film has a frame of its own under the heading.
- 40rem, 56rem, 60rem, 72rem and 75rem: lists go from one column to two, three or four.

**Touch.** Every control is at least 2.75rem (44px) tall. Buttons are 3.25rem.

**Other pages.** The film belongs to the landing page. Pages still to be built (privacy policy, terms) have no approved layout yet: build them from the same header, column, type scale and footer, on `mist` with the same lit bands, without the film.

## Elevation & Depth

The page is a sheet of ice white under soft light, and the few things that stand on it are glass. Three materials, in this order of depth:

- **The page.** `mist`, and `paper` bands lit from one side by a pool (see Layout). The light is in the surface, not on it: the pools sit behind the band's content and never over it.
- **Glass.** `glass` (`paper` at 62%, blurred 16px and saturated 150%) for what stands on the page: outline buttons, the film's button, the map's segmented control, the four portfolio cards, the notice, and `glass-strong` (86%) for the menu panel and the chips over the film and the map. Glass carries one shadow, `--shadow`: a 1px white line inside its top edge, a soft 44px shadow in `canopy` at 30% under it, and a 6px contact shadow at 10%. The same shadow lies under the stills, the field photos and the blank card. There is no other shadow and no second blur.
- **Rules and outlines**, as in Design 10. A 1px `line` hairline separates rows. A 2px `canopy` rule opens a list or table (the first test, the evidence row, each audience, the first contact action) and tops the footer. Controls have a 2px `canopy` border; small chips 1.5px.

Glass is a material, not a layout: it never changes a thing's size, border or position, and a browser without backdrop blur gets `paper` in its place, which is exactly Design 10. Do not stack glass on glass, and do not make a whole band or the header glass.

The film is the only place with real depth: soft shadow under the card's open cover, and cards fading into `mist` with distance.

**Focus** is a 3px `canopy` outline, offset 3px, with a 3px `sun` ring inside it, so it shows on every surface.

## Shapes

- **Pills** (`rounded.full`): buttons, nav links, tags, the segmented control, the skip link. They go with the rounded type.
- **1.25rem** (`rounded.lg`): pictures, the glass cards, the notice, the menu panel.
- **1rem** (`rounded.md`): the three field photos. **0.85rem** (`rounded.sm`): labels on the map. **0.3rem** (`rounded.xs`): the map key's swatches.
- **The dashed circle.** The card's collection circle is the design's one motif. It appears as a small dashed `leaf` ring between the five words under "Why". Use it sparingly, and only as a separator.
- **The proof-reader's bar.** A name that is being pointed out carries a bar of `sun` under it: an underline 0.14em thick, 0.12em below the baseline, that does not skip descenders. It is a bar, not a box: the letters stay ink on paper, and a name that wraps gets a bar on each line instead of a slab. (A filled box, as in Design 10, and a stroke under the lower half of the words were both tried on 13 October 2026 and turned down.)
- **Icons** are drawn inline as SVG with a 2px to 2.2px stroke in `currentColor`: a right arrow on links and contact rows, and play, pause and replay on the film. There is no icon set. The plus and minus on disclosures are drawn in CSS.
- **Pictures** are square (the film's stills), 4:5 (the blank card) or 5:6 (field photos; 4:5 on phones).

## Components

### Header

Lies over the top of the film and scrolls away with it (`position: absolute`, not sticky). Left: the emblem (3.25rem, 3.75rem from 75rem wide) with "Lightening Lives" beside it in Exo 700 at 1.4rem and "Every Life Matters" under it as a 0.7rem Roboto Mono label. Right: five nav links and a solid "Partner with us" button in `leaf`. Below 64rem the links become a "Menu" line button in glass that opens a `glass-strong` panel with a 2px border; it is a `<details>` element, so it works without script, and closes on choosing a link or pressing Escape. Where there is no room for the name beside the links (64rem to 78rem, and under 22rem) the emblem stands alone.

### Buttons and links

- **Solid button:** `leaf` fill, `paper` text; `canopy` on hover. For the main action ("Partner with us").
- **Line button:** glass with a 2px `canopy` border; `sprout` on hover. For the second action beside it.
- **Nav link:** a 2.75rem pill with no border; `sprout` on hover.
- **Text link** (`.link`): weight 600, underlined 2px in `leaf` with a 5px offset; on hover the underline thickens to 3px and its arrow moves 4px right.
- Colour changes take 0.16s.

### Label, highlight, tags

- **Label:** the small uppercase voice, Roboto Mono 500 at 0.1em, in `leaf`. Names a thing ("One drop", "Inherited blood disorder", "Sources"); never a sentence.
- **Highlight** (`.hl`): the bar of `sun` under a name inside a heading (see Shapes). Only for proof a reader can check.
- **Tag:** a 1.75rem pill with a 1.5px border, in Roboto Mono. **Proof tag:** the same, filled `sun`.

### Steps (How it works)

Three items: a square still from the film under the soft shadow, a label, an `h3` and a paragraph in `moss`. One column on phones, picture beside text from 40rem, three columns from 60rem. The three `h3` lines are the film's three captions, word for word.

### Lists and rows

- **Why:** five large words separated by dashed circles, then eight `row-title` and description pairs in a grid of one, two or four columns with hairlines above each.
- **Kinds of test:** four glass cards on a lit `paper` band, radius 1.25rem, no border.
- **Tests developed so far:** a table-like list. Each row has the condition's name and a label on the left, and a description, tags and an "About the condition" disclosure on the right. The last row is always the open place: "The condition you need next", with a link to contact.
- **Evidence:** four columns under a 2px rule, divided by hairlines, each heading carrying one highlighted name.
- **Audiences:** three columns, each under its own 2px rule.
- **Disclosure:** a `<details>` whose summary is a `leaf` line of text with a plus that becomes a minus.
- **Notice:** a glass box with a 2px border and a label, for the one message to individuals.

### The map

A map of India the reader can question. It is drawn in SVG, not WebGL, from the data in `src/js/drop/`.

- **Segmented control:** three choices (Sickle cell, Thalassaemia, Our work) in a glass pill with a 2px border; the chosen one is `leaf` with `paper` text.
- **States** are filled `meadow`, lightened towards `paper` and then warmed to `sun` by how strongly the chosen layer marks them: a fully marked state goes 90% of the way, which is `sun` itself; the others stop at a pale amber. The key's swatches are painted by the same rule, so they match the map in any colour the toolbar tries. Borders are 1px `canopy` at 40%. A grid of fine `paper` lines lies over the country, so it reads as the film's field of cards.
- **Names:** fully marked states are named in 0.8125rem Exo 700 with a `paper` glow. Under 430px across the names are moved apart; under 235px only a picked state is named.
- **Picking a state** (pointing, tapping, or the arrow keys) lightens it halfway to `paper`, outlines it at 2.5px and replaces the sentence beside the map with what the map knows about that state under every layer. Escape, a second tap on the state, or a tap off the country lets go. The panel's space is reserved so the page does not jump.
- **Our work** pins the four places: a `sun` dot with a `canopy` border, a short leader and a `glass-strong` chip in Roboto Mono naming the place and what is there.
- **Changing the layer** spreads the new colours outward from the middle of what it marks.
- A key, a line of sources and a full text summary for screen readers always accompany it. Without script the map is a still image.

### REASSURED

The word set as nine buttons across the column at up to 9rem, above nine criteria in one, two or three columns. Pointing at or focusing a letter fills it `sun`, and its criterion's title fills the same way (a rounded box, 0.2em of padding, cloned across a wrapped line), so the pair light up as one; and the reverse. This is the one place a name is filled rather than underlined, because here the mark is the reader's own pointing, not proof.

### Programmes, vision, contact, footer

- **Field photos:** three in a row, 5:6, under the soft shadow, each with a label naming the place.
- **Vision:** a `sprout` band lit from both sides, with a label and one statement in `vision-line`.
- **Contact actions:** four full-width rows in `action` type with an arrow at the right; on hover the row fills `sprout` and its text moves in 0.75rem. Each opens an email.
- **Footer:** the full logo at 11rem, a short description and the campaign line as a label; contact links; two addresses; then, under a hairline, the disclaimer, a credits disclosure, the copyright line and the policy links.

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
| 5.2 to 6.0 | The cards have become a map of India, seen from straight above, north up. The places the company works light up in sun amber. | |
| 5.92 to 6.4 | The four places are named, in glass chips. The camera comes to rest, for the first time. | |
| 6.56 | The film is over. Its button offers a replay. | |

**Rules the client set. Do not undo them without being asked.**

- It plays by itself and keeps its own time, like a video. Scrolling does not drive it, and scrolling it off screen does not pause it. Only the reader's pause button or a hidden tab holds it.
- It is one continuous take. The camera is moving in the first frame and rests only on the map. No holds between the parts, no cuts.
- One drop falls, from above, slowly enough to be seen as a drop. It is small: its radius is 0.036 of the card's length, a little under a quarter of the collection circle's (`DROP.radius` in the film's code). The client asked for it smaller on 13 October 2026 (it had been 0.05); do not enlarge it without being asked.
- The map is flat and upright: straight above, north up, not tilted.
- No progress bar and no chapter markers. The film has one control: a 2.75rem round glass button at the end of the caption's line that pauses, plays or, at the end, replays.
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

**The card** is the company's own, drawn in code: a matchbook card with a cover flap carrying the full logo, one dashed collection circle on filter paper, and a pocket with a barcode and a code (`SCM / 100001`; the codes are illustrative, set in Roboto Mono). Do not swap in a generic card or a photograph.

All the timing is in two tables at the top of `src/js/lumen/scene.js`: `TAKE` (where the camera is at each second) and `TIMING` (everything else). The README explains how to change them and how to capture new stills. The film's code is Design 10's (`src/js/reel/scene.js`) with three differences: it reads `--ff-mono` first for the codes on the cards, it lightens a card before warming it, and its warning text names this design.

## Motion

The film is the one orchestrated moment. Everything else moves only in answer to the reader, and briefly. The light and the glass do not move at all.

| What | Motion |
| --- | --- |
| Hero text on load | Rises 14px and fades in over 0.8s, `cubic-bezier(0.2, 0.7, 0.2, 1)`, each item 90ms after the last |
| Hover and selection colour | 0.14s to 0.16s, `ease` |
| Link arrow, contact row | 0.2s |
| Film caption change | 0.45s fade, rising 6px |
| Map layer change | 0.5s per state, spreading outward |
| Map names and pins | 0.35s to 0.4s fade |
| Anchor links | Smooth scrolling |

There are no scroll-triggered reveals, no parallax and nothing that loops. With reduced motion requested, the hero text does not rise, scrolling is not smoothed, the map's colours change at once and the film waits for its button.

## Imagery

- **The card is drawn, not photographed.** The stills (`assets/img/lumen-*.webp`) are rendered from the same model as the film, in this design's own colours. If the film's look or a colour changes, capture them again (the README says how); the map's two stills come from the drawn map, and show the key's colours.
- **The preview card** for links shared on social networks and in chat (`assets/img/lumen-social.png`, 1200 by 630) is the opening at the film's end, captured from the page. It is named in the page's `og:image`, which must be an absolute address on the site's domain.
- **Field photos** are of the places the company has worked: Nandurbar, Kothagudem and Jharkhand. Nobody in a photo may be identifiable. The current three are representative images from Wikimedia Commons and need the client's own before launch; their credits are in the footer and in `assets/img/CREDITS.md`.
- **No stock illustrations, no icon sets, no decorative shapes.** If a section seems to need a picture, it gets a still of the card or none.
- **Partner names are typeset.** No ICMR, CSIR-CCMB or other partner logos without written permission.

### The logo

The logo is the client's existing identity and is never redrawn, recoloured or restyled. Files and rules are in `assets/logo/README.md`.

- Header: the emblem alone, with the name and tagline set beside it in the page's type.
- Footer: the full logo, once, at 11rem. Its lettering cannot be read below about 160px wide.
- Browser tab and home screen: `assets/logo/icons/`.
- The logo's own colours (its yellows, `#69A129` green, the brown and maroon lettering) belong to the logo. `sun` is the one colour taken from it, a shade softer than its rays so that it sits with the blue; nothing else in the interface uses them.

## Voice and content

Clear, evidence-led and warm. Short sentences, plain verbs, Indian English (anaemia, thalassaemia, haemophilia, programme, organisation).

- **Say what the company is:** an innovation-driven molecular diagnostics company that develops tests. Not a charity, an NGO or a laboratory.
- **Proof stands beside the claim:** ICMR validation, the CSIR-CCMB collaboration, the national programmes.
- **Any inherited condition.** The company develops a test for whatever condition a programme needs. The five existing tests are "developed so far", and any list of them ends with an open place for the next. Do not name a client or a request as an example.
- **Institutions only.** Say so near every way of making contact, and tell individuals where to go instead.
- **"A single drop of blood"** is the client's wording for this design (12 October 2026). It overrides the original brief, which ruled the phrase out. The larger claims built on it stay out: "limitless", "any genetic test is possible", "revolutionising", "endless possibilities".
- **Collection is "minimally invasive"**, never "painless".
- **No prices, procurement figures or clinical performance figures.**
- **Headings** are sentence case. Section headings have no full stop; the hero's heading and the film's three lines do, because they are read as statements. **Buttons** start with a verb and say what happens: "Partner with us", "See our tests", "Request tests".
- **The map** says "reported in", never "highest in", and always carries its sources.

Claims still waiting for the client's confirmation are listed in the README under "Content still to settle".

## Accessibility

- Text meets 4.5:1 everywhere (see Contrast), including the "Our vision" label (`leaf` on `sprout`, 5.17).
- A skip link is the first thing in the page. Every section is labelled by its heading. The page has one `h1`.
- Focus is always visible, and nothing is reachable only by pointer: the map answers to the arrow keys and Escape, and the REASSURED letters are buttons.
- The film's captions are hidden from screen readers because the same three lines, with more to say, are under "How it works". The film's button always says what it will do ("Pause the film", "Play the film", "Replay the film").
- The map has a full text summary for screen readers, and its changing sentence is a polite live region.
- Menus and disclosures are `<details>` elements and work without script. Without script the film and the map are still images.
- `prefers-reduced-motion` is respected throughout (see Motion). Glass and light are still, so they add no motion to respect.
- Where the browser cannot blur, glass becomes `paper`, and nothing is lost but the material.

## Do's and Don'ts

- Do keep Exo and Roboto Mono, and `canopy` ink on `mist`. They are the client's choice.
- Do let the film be the only showpiece. Keep everything after it quiet.
- Do use `sun` only to point something out: a bar under a name that is proof, a fill under what the reader is pointing at, a fill with `canopy` text or border on it, a dot with a `canopy` border, the map's marks. Lighten before you warm when a blue thing turns amber.
- Do keep red for the blood sample.
- Do light a `paper` band from one side only, and let the band's place in the page decide which. The pools are the only gradients on the page besides the film's fades.
- Do use glass for what stands on the page and nothing else, with `--shadow` and no other, and let it fall back to `paper`.
- Do separate things with surface, rules and outlines, as Design 10 does; the material changes nothing about where things stand.
- Do size everything in `rem`, and read colours from the custom properties, in the film as well.
- Do give every list of the five tests an open place for the next.
- Do keep a still image behind anything that needs WebGL or script.
- Don't make the film follow the scroll, add stops or a progress bar to it, or slow it down.
- Don't tilt the map or show more than one drop.
- Don't add a second shadow, a second blur, glass on glass, a glass header or a glass band, or decorative illustration.
- Don't use `leaf` for text on `meadow` or `sun`, or `sun` for text anywhere.
- Don't mix `sun` straight into a blue: go through `paper`.
- Don't restyle the logo. Its colours stay in the logo, except `sun`.
- Don't use partner logos without permission, or photos with identifiable people.
- Don't add a cookie or consent banner. Say what analytics the site uses in the privacy policy.
- Don't add scroll-triggered animation, parallax or anything that loops.

## Where things live

| What | File |
| --- | --- |
| The page | `lumen.html` |
| Tokens (`:root`) and every component's styles | `src/css/lumen.css` (Tailwind CSS v4; tokens are exposed as utilities such as `bg-paper`, `text-moss`, `border-line`). It is `src/css/reel.css` with Lumen's values, and everything Lumen adds (the light, the glass, the label voice, the blue button, the bar under a name, the key) is under one heading at its end |
| Menu, REASSURED, the map, loading the film | `src/js/lumen/main.js` |
| The film: `TAKE`, `TIMING`, `DROP`, the card | `src/js/lumen/scene.js` |
| The map's facts and wording | `src/js/drop/map-layers.js` (Designs 01 and 07 keep a copy in `src/js/sample-card/india-data.js`) |
| State outlines, names and the grid of cards | `src/js/drop/india-borders.js`, `india-states.js`, `india-cells.js` |
| Stills and the preview card | `assets/img/lumen-*.webp`, `assets/img/lumen-social.png` |
| Logo | `assets/logo/` |
| Steps for going live, and content still to settle | `README.md` |

Compiled files in `assets/css` and `assets/js` are committed; run `npm run build` after changing anything in `src/`.
