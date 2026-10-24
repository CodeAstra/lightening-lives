---
version: alpha
name: Lightening Lives
description: The design of the Lightening Lives website, chosen for production on 23 October 2026 (Design 11, Lumen, in its chosen variation). DNA-blue ink on ice white, Quicksand and Nunito, frosted glass under pools of blue light and green light, named proof set in DNA blue, and one opening film in which a small drop of blood becomes a map of India.
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
  pool-blue: "#0369A129" # leaf at 16%: the light behind a band, from the left
  pool-sun: "#6EE7B733" # sun (life green) at 20%: the light behind a band, from the right
  glass: "#FFFFFF9E" # paper at 62%, blurred: what stands on the page
  glass-strong: "#FFFFFFDB" # paper at 86%: where what is on it must stay readable over the film
typography:
  # Sizes are the largest each level reaches. Most are fluid: the Typography section gives the full range.
  display:
    fontFamily: Quicksand
    fontSize: 4.75rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.02em
  h2:
    fontFamily: Quicksand
    fontSize: 3.3rem
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: -0.02em
  h3:
    fontFamily: Quicksand
    fontSize: 1.7rem
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.012em
  row-title:
    fontFamily: Quicksand
    fontSize: 1.3rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.008em
  vision-line:
    fontFamily: Quicksand
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.02em
  film-line:
    fontFamily: Quicksand
    fontSize: 1.55rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  action:
    fontFamily: Quicksand
    fontSize: 1.6rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.012em
  word:
    fontFamily: Quicksand
    fontSize: 9rem
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: -0.03em
  lead:
    fontFamily: Nunito
    fontSize: 1.35rem
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: Nunito
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Nunito
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.45
  small:
    fontFamily: Nunito
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
  fine:
    fontFamily: Nunito
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: Nunito
    fontSize: 0.8125rem
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: 0.08em
  button:
    fontFamily: Nunito
    fontSize: 1.0625rem
    fontWeight: 700
    lineHeight: 1.2
  tag:
    fontFamily: Nunito
    fontSize: 0.8125rem
    fontWeight: 800
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
  highlight: # a name that is proof is set in DNA blue, with no bar and no box; see Shapes
    backgroundColor: "{colors.mist}"
    textColor: "{colors.leaf}"
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

This file describes the design chosen for production on 23 October 2026: Design 11, "Lumen" (`designs/lumen.html`), in the variation the client settled on after comparing the toolbar's options: **Quicksand and Nunito** for the type (the comparison toolbar's "Quicksand + Nunito (from Reel)"), **a name that is proof set in DNA blue** with no coloured mark ("The name in DNA blue, no amber"), and **the drop at its smallest** ("Smaller still"), and **life green for what is pointed out** (the Highlight choice "Life green", `#6EE7B7`, chosen on 24 October 2026 in place of sun amber). It is Design 10, "Reel" (approved on 12 October), on the same page and with the same film, in another light: ice white instead of pale green, DNA blue instead of leaf green, and frosted glass lit from the sides where Design 10 had flat paper. It is the reference for building the live site and any page added to it.

The page's own stylesheet does not yet carry these three choices as its defaults: `designs/src/css/lumen.css` and `designs/src/js/lumen/scene.js` still open on Exo and Roboto Mono, sun amber, the amber bar and the larger drop, and the toolbar sets the chosen values over them. The production site's own stylesheet, `src/css/site.css`, already carries the type and the proof mark, but the home page built in Phase 1 still shows sun amber: its `--sun` reads `#FFC53D` (and the `--pool-sun` fallback `rgba(255, 197, 61, 0.2)`), because the build plan was written before green was chosen and its stylesheet test pins amber. The change to `#6EE7B7` is Step 3a of Task 2.0 in the build plan, the first task of Phase 2, after which the stills and the social card are recaptured. Where the site and this file differ, this file is the reference. "Where things live" at the end lists the edits that make the chosen design the page's own. Until then, the chosen design is `designs/lumen.html?type=reel&proof=ink&drop=smaller`.

## Overview

Lightening Lives is a healthcare technology company in Hyderabad that develops molecular diagnostics for inherited blood and muscle conditions. Its tests work from a dried blood spot on a card, and it builds them into solutions for hospitals, laboratories and public health programmes. The people reading the site are clinicians, laboratory heads, district health officers, programme officers, NGOs and CSR funders. It is not for individuals looking for a test, and it says so.

The site should feel light, clear and sure of itself: a healthcare technology company with evidence behind it, not a charity. The client's one visual wish was lightness, and the name of the company is a kind of light. Lumen takes that literally: the page is ice white, and each white band is lit from one side, by DNA blue from the left or by life green from the right.

The whole design rests on one picture: a drop of blood falls onto a card, the card joins a batch, and the batch becomes a map of India made of cards. That is the opening film, and it is the only showpiece on the site. Everything after it is a quiet page: white bands under soft light, blue ink, rounded type, thin rules, and glass only where something stands on the page.

Five things were chosen by the client and stay as they are unless the client asks:

- **Type:** Quicksand for headings and Nunito for everything else, including the label voice. Chosen on 23 October 2026 over Lumen's first pairing, Exo and Roboto Mono.
- **Colour:** DNA-blue ink on ice white, with life green (`#6EE7B7`, the Lumen theme's own highlight; chosen on 24 October 2026 over the sun amber that had stood in for it since 13 October) for what is being pointed out on the map, in REASSURED and in the proof tags. A name that is proof is set in DNA blue, not marked in colour (23 October 2026; a bar, a box and a stroke were all tried first).
- **The film:** it plays by itself, in one continuous take of about six and a half seconds. It does not follow the scroll.
- **The drop:** small. Its radius is 0.027 of the card's length, the toolbar's "Smaller still" (23 October 2026, after "smaller" on 13 October).
- **The layout:** Design 10's, line for line. Sections, sizes, borders and breakpoints are the same; only what things are made of changed.

## Colors

One family of blues does nearly all the work. Life green and red each have a single job.

| Token | Value | Role |
| --- | --- | --- |
| `canopy` | `#0C4A6E` | The ink: all text, borders of controls, the hover state of the solid button. `primary` is the same colour. |
| `leaf` | `#0369A1` | DNA blue: labels, link underlines, the solid button, the chosen map layer, and a name that is proof inside a heading. |
| `moss` | `#475569` | Secondary text: lead paragraphs, descriptions, notes. |
| `mist` | `#F0F9FF` | Ice white: the page, and the haze the film's cards fade into. Also the browser's `theme-color`. |
| `paper` | `#FFFFFF` | The second surface: alternate sections, the footer, the card stock in the film, and the white the glass is made of. |
| `sprout` | `#E0F2FE` | Hover fills, and the one tinted band behind the vision statement. |
| `meadow` | `#BAE6FD` | The map: a state that is not marked, and the field of cards seen from far away. |
| `sun` | `#6EE7B7` | Life green: what is being pointed out. See below. The token keeps the name it had when it was amber: it is `--sun` in the stylesheet and the film. |
| `drop` | `#A61B18` | The blood while it is a falling drop. |
| `blood` | `#6A2A20` | The blood once it has dried into the paper. |
| `line` | `canopy` at 18% | Hairlines between rows. |
| `pool-blue` | `leaf` at 16% | The light behind a `paper` band, from the left. |
| `pool-sun` | `sun` at 20% | The light behind every fourth `paper` band, from the right; behind the vision, with the blue, from both sides. |
| `glass` | `paper` at 62%, blurred 16px | What stands on the page: outline buttons, the film's button, the map's control, the portfolio cards, the notice. |
| `glass-strong` | `paper` at 86%, blurred | The menu panel and the chips over the film and the map, which must stay readable over whatever is behind them. |

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

`paper` text is 9.46 on `canopy` and 5.93 on `leaf` (the solid button). Glass over `mist` is about `#F9FDFF`, where `canopy` is 9.24 and `leaf` 5.80. The pools are faint enough not to matter: at their densest, `leaf` is 5.42 on the green pool and 4.68 on the blue pool, and the dense part of a pool lies beyond the column's content. A proof name in `leaf` sits in a heading on `mist` or `paper`, at heading size, so it clears the minimum with room.

So: `leaf` is for labels, links and proof names on `mist`, `paper`, `sprout` and glass, never on `meadow` or `sun`. `sun` is 1.4:1 on `mist` and can never carry meaning as text or as a thin line by itself: it is always a fill with `canopy` text on it, or a dot with a `canopy` border.

### Colours in the film

The film is drawn in WebGL but takes its colours from the same custom properties: `--mist` for its background and fog, `--paper` for the card stock, `--canopy` for the card's print, `--meadow` and `--sun` for the map (lightened first, then moved to green, as above), `--drop` and `--blood` for the sample. Its lighting is set so that a matte surface facing up shows exactly its own colour, which is why the cards match the page. Change a token and the film follows; do not hard-code a colour in the scene.

## Typography

Two faces from Google Fonts. **Quicksand** (600, 700) is the display face: every heading, the film's captions, the five words under "Why", the big REASSURED letters, the vision, the contact rows, the name beside the emblem and a marked state's name on the map. Headings are 700; the contact rows are 600. **Nunito** (400, 600, 700, 800) is everything else: body at 400, buttons at 700, nav and text links at 600, and the label voice at 800: the small capitals, the tags, the chips on the film and the map, the facts about a state, and the codes printed on the cards in the film. Load only those weights.

| Level | Face and weight | Size | Line height | Tracking | Used for |
| --- | --- | --- | --- | --- | --- |
| `display` | Quicksand 700 | `clamp(2.6rem, 5vw, 4.75rem)`; under 30rem wide, `clamp(1.95rem, 9.4vw, 2.6rem)` | 1 | -0.02em | The page's one `h1` |
| `h2` | Quicksand 700 | `clamp(2rem, 3.7vw, 3.3rem)` | 1.06 | -0.02em | Section headings |
| `h3` | Quicksand 700 | `clamp(1.4rem, 1.9vw, 1.7rem)` | 1.12 | -0.012em | Headings inside a section |
| `row-title` | Quicksand 700 | 1.3rem | 1.2 | -0.008em | Titles in dense lists ("Why", REASSURED criteria) |
| `vision-line` | Quicksand 700 | `clamp(1.7rem, 3.4vw, 3rem)` | 1.12 | -0.02em | The vision statement |
| `film-line` | Quicksand 700 | `clamp(1.2rem, 1.75vw, 1.55rem)` | 1.15 | -0.02em | The caption under the film |
| `action` | Quicksand 600 | `clamp(1.25rem, 2vw, 1.6rem)` | 1.15 | -0.012em | The contact section's rows |
| `word` | Quicksand 700 | `clamp(2.5rem, 9.8vw, 9rem)` | 0.92 | -0.03em | The nine letters of REASSURED |
| `brand` | Quicksand 700 | 1.4rem | 1 | -0.02em | The name beside the emblem in the header |
| `lead` | Nunito 400 | `clamp(1.15rem, 1.5vw, 1.35rem)` | 1.5 | | The paragraph beside a section heading, in `moss` |
| `body` | Nunito 400 | 1.125rem | 1.55 | | Running text |
| `body-sm` | Nunito 400 | 1.0625rem | 1.45 | | Descriptions under a `row-title`, the map's sentence |
| `small` | Nunito 400 | 1rem | 1.55 | | Notes, footnotes, the footer's small print |
| `fine` | Nunito 400 | 0.9375rem | 1.4 | | The map's key, sources and credits |
| `label` | Nunito 800 | 0.8125rem | 1.3 | 0.08em, uppercase | Labels and data, in `leaf` |
| `button` | Nunito 700 | 1.0625rem | 1.2 | | Buttons. Nav links are the same size at 600; text links are `body` at 600. |
| `tag` | Nunito 800 | 0.8125rem | | 0.01em | Tags, and the chips on the film and the map |
| `map-name` | Quicksand 700 | 0.8125rem | | | A marked state's name on the map, with a `paper` glow |

- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
- Headings are sentence case. Only `label` is uppercase.
- Emphasis inside a paragraph is weight 600 in `canopy`, not italics.
- **The whole page scales on large monitors.** `html { font-size: clamp(100%, 0.5vw + 0.55rem, 137.5%) }` keeps 16px up to a 1440px window and grows to 22px at 2640px. Every size, radius and breakpoint is in `rem` so that it scales together: do not introduce `px` sizes.
- The stylesheet sets `font-stretch` on some headings. Quicksand has no width axis, so it does nothing here; it is there for the comparison toolbar's other typefaces.
- The type is four tokens: `--ff-display` (Quicksand), `--ff-body` (Nunito), `--ff-mono` (Nunito: the label voice, and the codes on the film's cards, which the film reads first), and the display and label voices' weight and tracking (`--display-weight` 700, `--display-tracking` -0.02em, `--label-weight` 800, `--label-tracking` 0.08em). Lumen's first pairing, Exo at 600 with Roboto Mono at 500 and 0.1em, remains in the toolbar as a comparison and nowhere else.
- The sizes, line heights and layout are Design 10's exactly: the same type at the same sizes was the page the client approved on 12 October.

## Layout

**One centred column.** `.wrap` is 82rem at its widest (`--frame`) with side padding of `clamp(1.25rem, 5vw, 4.5rem)` (`--pad`). `--gutter` is the distance from the window's edge to the column's content; the header and the film, which span the window, use it to line up with the column.

**Sections** have `clamp(4.5rem, 9vw, 8rem)` of padding above and below, and alternate between the two surfaces so that each reads as its own sheet. Every `paper` band is lit from one side:

| Order | Section | Surface | Light |
| --- | --- | --- | --- |
| 1 | Opening film (hero) | `mist` | |
| 2 | How it works | `paper` | blue, from the left |
| 3 | Why | `mist` | |
| 4 | Tests (portfolio) | `paper` | green, from the right |
| 5 | Evidence | `mist` | |
| 6 | Map | `paper` | blue, from the left |
| 7 | REASSURED | `mist` | |
| 8 | Who we work with | `paper` | green, from the right |
| 9 | Programmes | `mist` | |
| 10 | Who we are (added on the site, content file 5.1) | `paper` | blue, from the left |
| 11 | Vision | `sprout` band | blue from the left and green from the right |
| 12 | Contact | `paper` | green, from the right (blue on the approved page, before "Who we are" moved it a place down) |
| 13 | Footer | `paper`, under a 2px `canopy` rule | |

A pool is a radial gradient the full height of its band and `min(64vw, 56rem)` wide, with its centre 14vw outside the window, clipped to the band (`overflow: clip`, so nothing widens the page). Which side it falls on follows from the band's place in the page (`:nth-of-type(4n)` takes the green), not from a class: add a band and the light stays in step.

**A section's opening** is a twelve-column row on wide screens: the `h2` takes seven columns and a `lead` paragraph takes five, aligned to the heading's last line, with a 1.5rem gap. On small screens they stack. The section's content starts 3rem below.

**Splits** inside sections are 5/7 or 7/5 of twelve columns, with a 3rem gap growing to 4rem.

**Spacing** steps: 0.5rem, 0.75rem, 1rem, 1.5rem, 3rem, 4rem. Rows in lists have 1.2rem to 1.9rem of padding above and below.

**Breakpoints** are in `rem` and are chosen per component, where its content needs them, not from a global set. The ones that matter:

- 64rem: the header's links replace the "Menu" button.
- 64rem to 78rem: the emblem stands alone in the header, because the links and the name do not both fit on one line (Design 10 showed the name from 73rem, and its links wrapped between 73rem and 78rem).
- 56.25rem wide and a window at least 21:20: the film fills the whole opening with the text over its left side. Narrower or taller than that, the film has a frame of its own under the heading.
- 40rem, 56rem, 60rem, 72rem and 75rem: lists go from one column to two, three or four.

**Touch.** Every control is at least 2.75rem (44px) tall. Buttons are 3.25rem.

**Other pages.** The film belongs to the landing page. The inner pages (`content/website-content.md`, Parts 3 to 5) are built from the same header, column, type scale and footer, on `mist` with the same lit bands, without the film: each opens with a label, the `h1` and a lead in the seven-and-five split, with proof tags under the lead where the page has them. The components they add that this file does not yet describe (a comparison table, numbered steps with a photograph each, a two-column family section, a sites table, a group of question disclosures, a list of collaborators, portraits of named staff, the box view, the enquiry form, the entries on Our work) are to be agreed and then added here.

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
- **A name that is proof** is set in `leaf`, in the heading's own face, weight and size, with nothing drawn on or under it. The colour is the mark. (A filled box, as in Design 10, a stroke under the lower half of the words, and a bar of highlight colour under the name were each tried in October 2026 and turned down; the toolbar keeps them for comparison.)
- **Icons** are drawn inline as SVG with a 2px to 2.2px stroke in `currentColor`: a right arrow on links and contact rows, and play, pause and replay on the film. There is no icon set. The plus and minus on disclosures are drawn in CSS.
- **Pictures** are square (the film's stills), 4:5 (the blank card) or 5:6 (field photos; 4:5 on phones).

## Components

### Header

Lies over the top of the film and scrolls away with it (`position: absolute`, not sticky). Left: the emblem (3.25rem, 3.75rem from 75rem wide) with "Lightening Lives" beside it in Quicksand 700 at 1.4rem and "Every Life Matters" under it as a 0.7rem Nunito 800 label. Right: five nav links and a solid "Partner with us" button in `leaf`. Below 64rem the links become a "Menu" line button in glass that opens a `glass-strong` panel with a 2px border; it is a `<details>` element, so it works without script, and closes on choosing a link or pressing Escape. Where there is no room for the name beside the links (64rem to 78rem, and under 22rem) the emblem stands alone.

### Buttons and links

- **Solid button:** `leaf` fill, `paper` text; `canopy` on hover. For the main action ("Partner with us").
- **Line button:** glass with a 2px `canopy` border; `sprout` on hover. For the second action beside it.
- **Nav link:** a 2.75rem pill with no border; `sprout` on hover.
- **Text link** (`.link`): weight 600, underlined 2px in `leaf` with a 5px offset; on hover the underline thickens to 3px and its arrow moves 4px right.
- Colour changes take 0.16s.

### Label, proof name, tags

- **Label:** the small uppercase voice, Nunito 800 at 0.08em, in `leaf`. Names a thing ("One card", "Haemoglobinopathy", "Sources"); never a sentence.
- **Proof name** (`.hl`): a name inside a heading set in `leaf`, with no bar, box or fill (see Shapes). Only for proof a reader can check: "ICMR", "India and Japan", "CSIR-CCMB", "15 sites".
- **Tag:** a 1.75rem pill with a 1.5px border, in Nunito 800. **Proof tag:** the same, filled `sun`, for "Approved by ICMR" and "Patented in India and Japan".

### Steps (How it works)

Three items: a square still from the film under the soft shadow, a label, an `h3` and a paragraph in `moss`. One column on phones, picture beside text from 40rem, three columns from 60rem. The three `h3` lines are the film's three captions, word for word.

### Lists and rows

- **Why:** five large words separated by dashed circles, then eight `row-title` and description pairs in a grid of one, two or four columns with hairlines above each.
- **Kinds of test:** four glass cards on a lit `paper` band, radius 1.25rem, no border.
- **Tests developed so far:** a table-like list. Each row has the condition's name and a label on the left, and a description, tags and a link on the right. The last row is always the open place: "The condition you need next", with a link to contact.
- **Evidence:** four columns under a 2px rule, divided by hairlines, each heading carrying one proof name in `leaf`.
- **Audiences:** three columns, each under its own 2px rule.
- **Disclosure:** a `<details>` whose summary is a `leaf` line of text with a plus that becomes a minus.
- **Notice:** a glass box with a 2px border and a label, for the one message to individuals.

### The map

A map of India the reader can question. It is drawn in SVG, not WebGL, from the data in `designs/src/js/drop/`.

- **Segmented control:** three choices (Sickle cell, Thalassaemia, Our work) in a glass pill with a 2px border; the chosen one is `leaf` with `paper` text.
- **States** are filled `meadow`, lightened towards `paper` and then moved to `sun` by how strongly the chosen layer marks them: a fully marked state goes 90% of the way, which is `sun` itself; the others stop at a pale mint. The key's swatches are painted by the same rule, so they match the map in any colour the toolbar tries. Borders are 1px `canopy` at 40%. A grid of fine `paper` lines lies over the country, so it reads as the film's field of cards.
- **Names:** fully marked states are named in 0.8125rem Quicksand 700 with a `paper` glow. Under 430px across the names are moved apart; under 235px only a picked state is named.
- **Picking a state** (pointing, tapping, or the arrow keys) lightens it halfway to `paper`, outlines it at 2.5px and replaces the sentence beside the map with what the map knows about that state under every layer. Escape, a second tap on the state, or a tap off the country lets go. The panel's space is reserved so the page does not jump.
- **Our work** pins the places the company has worked: a `sun` dot with a `canopy` border, a short leader and a `glass-strong` chip in Nunito 800 naming the place and what is there. The content file lists fifteen sites for this layer; with that many, a chip shows on pointing, tapping or focusing its pin rather than all at once.
- **Changing the layer** spreads the new colours outward from the middle of what it marks.
- A key, a line of sources and a full text summary for screen readers always accompany it. Without script the map is a still image.

### REASSURED

The word set as nine buttons across the column at up to 9rem, above nine criteria in one, two or three columns. Pointing at or focusing a letter fills it `sun`, and its criterion's title fills the same way (a rounded box, 0.2em of padding, cloned across a wrapped line), so the pair light up as one; and the reverse. This is the one place a name is filled, because here the mark is the reader's own pointing, not proof.

### Programmes, vision, contact, footer

- **Field photos:** three in a row, 5:6, under the soft shadow, each with a label naming the place.
- **Vision:** a `sprout` band lit from both sides, with a label and one statement in `vision-line`.
- **Contact actions:** four full-width rows in `action` type with an arrow at the right; on hover the row fills `sprout` and its text moves in 0.75rem. Each opens an email until a form service is chosen.
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
| 5.2 to 6.0 | The cards have become a map of India, seen from straight above, north up. The places the company works light up in life green. | |
| 5.92 to 6.4 | The places are named, in glass chips. The camera comes to rest, for the first time. | |
| 6.56 | The film is over. Its button offers a replay. | |

The first caption is the page's wording as approved on 12 October. The content file (`content/website-content.md`, Part 8 item 1) proposes "A spot of blood, dried on a card." for the site; the film does not change either way.

**Rules the client set. Do not undo them without being asked.**

- It plays by itself and keeps its own time, like a video. Scrolling does not drive it, and scrolling it off screen does not pause it. Only the reader's pause button or a hidden tab holds it.
- It is one continuous take. The camera is moving in the first frame and rests only on the map. No holds between the parts, no cuts.
- One drop falls, from above, slowly enough to be seen as a drop. It is small: its radius is **0.027 of the card's length**, about a sixth of the collection circle's radius of 0.155. The client asked for it smaller on 13 October 2026 (0.05 became 0.036) and chose the toolbar's "Smaller still" (0.75 of that, 0.027) on 23 October. Do not enlarge it without being asked. In the code the designed radius is `DROP.radius` in `designs/src/js/lumen/scene.js`, and `--film-drop` on the page is a multiple of it; the chosen size is either `DROP.radius: 0.027` with no multiple, or 0.036 with `--film-drop: 0.75`, which is how the toolbar shows it now.
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

**The card** is the company's own, drawn in code: a matchbook card with a cover flap carrying the full logo, one dashed collection circle on filter paper, and a pocket with a barcode and a code (`SCM / 100001`; the codes are illustrative, set in the label voice, Nunito). Do not swap in a generic card or a photograph.

All the timing is in two tables at the top of `designs/src/js/lumen/scene.js`: `TAKE` (where the camera is at each second) and `TIMING` (everything else). The README explains how to change them and how to capture new stills. The film's code is Design 10's (`designs/src/js/reel/scene.js`) with three differences: it reads `--ff-mono` first for the codes on the cards, it lightens a card before warming it, and its warning text names this design.

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

- **The card is drawn, not photographed.** The stills (`designs/assets/img/lumen-*.webp`) are rendered from the same model as the film, in this design's own colours. They were captured with Roboto Mono on the cards and the larger drop; capture them again once the chosen type and drop are the page's defaults (the README says how). The map's two stills come from the drawn map, and show the key's colours.
- **The preview card** for links shared on social networks and in chat (`designs/assets/img/lumen-social.png`, 1200 by 630) is the opening at the film's end, captured from the page. It is named in the page's `og:image`, which must be an absolute address on the site's domain. Capture it again with the chosen type.
- **Field photos** are of the places the company has worked. Nobody in a photo may be identifiable. The current three are representative images from Wikimedia Commons and need the client's own before launch; their credits are in the footer and in `designs/assets/img/CREDITS.md`. They are labelled as places, never captioned as the company's work.
- **Photographs of the work** (the six steps of the method, the boxes, the field) belong on the inner pages, as the content file says. They are the company's own photographs, never stock.
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
- `prefers-reduced-motion` is respected throughout (see Motion). Glass and light are still, so they add no motion to respect.
- Where the browser cannot blur, glass becomes `paper`, and nothing is lost but the material.
- A proof name is told apart by colour alone, as a link is; it sits inside a heading that makes sense without it, and the proof tag beside it says the same thing in words.

## Do's and Don'ts

- Do keep Quicksand and Nunito, and `canopy` ink on `mist`. They are the client's choice.
- Do let the film be the only showpiece. Keep everything after it quiet.
- Do set a name that is proof in `leaf`, with nothing drawn on or under it.
- Do use `sun` only to point something out: the fill of a proof tag, the fill under what the reader is pointing at in REASSURED, the map's marks, a dot with a `canopy` border, the focus ring. Lighten before you move a blue thing to green.
- Do keep red for the blood sample.
- Do light a `paper` band from one side only, and let the band's place in the page decide which. The pools are the only gradients on the page besides the film's fades.
- Do use glass for what stands on the page and nothing else, with `--shadow` and no other, and let it fall back to `paper`.
- Do separate things with surface, rules and outlines, as Design 10 does; the material changes nothing about where things stand.
- Do size everything in `rem`, and read colours from the custom properties, in the film as well.
- Do give every list of the tests an open place for the next.
- Do keep a still image behind anything that needs WebGL or script.
- Don't make the film follow the scroll, add stops or a progress bar to it, slow it down, or enlarge the drop.
- Don't tilt the map or show more than one drop.
- Don't put a bar, a box or a fill on a proof name; the coloured mark was turned down.
- Don't add a second shadow, a second blur, glass on glass, a glass header or a glass band, or decorative illustration.
- Don't use `leaf` for text on `meadow` or `sun`, or `sun` for text anywhere.
- Don't mix `sun` straight into a blue: go through `paper`.
- Don't restyle the logo. Its colours stay in the logo; none of them is used in the interface.
- Don't use partner logos without permission, or photos with identifiable people.
- Don't add a cookie or consent banner. Say what analytics the site uses in the privacy policy.
- Don't add scroll-triggered animation, parallax or anything that loops.

## Where things live

| What | File |
| --- | --- |
| The page | `designs/lumen.html` |
| Tokens (`:root`) and every component's styles | `designs/src/css/lumen.css` (Tailwind CSS v4; tokens are exposed as utilities such as `bg-paper`, `text-moss`, `border-line`). It is `designs/src/css/reel.css` with Lumen's values, and everything Lumen adds (the light, the glass, the label voice, the blue button, the proof mark, the key) is under one heading at its end |
| Menu, REASSURED, the map, loading the film | `designs/src/js/lumen/main.js` |
| The film: `TAKE`, `TIMING`, `DROP`, the card | `designs/src/js/lumen/scene.js` |
| The map's facts and wording | `designs/src/js/drop/map-layers.js` (Designs 01 and 07 keep a copy in `designs/src/js/sample-card/india-data.js`) |
| Stills and the preview card | `designs/assets/img/lumen-*.webp`, `designs/assets/img/lumen-social.png` |
| Logo | `designs/assets/logo/` |
| The site's copy, strategy and open facts | `content/website-content.md` |
| Steps for going live | `designs/README.md` |

Compiled files in `designs/assets/css` and `designs/assets/js` are committed; run `npm run build` in `designs/` after changing anything in `designs/src/`.

**Making the chosen design the page's own.** The page still opens on Lumen's first pairing; the toolbar sets the chosen values over it. These edits make them the defaults, after which the toolbar's "as designed" options should be relabelled to offer Exo and Roboto Mono, sun amber, the amber bar and the larger drop as the comparisons instead:

1. In `designs/src/css/lumen.css` `:root`: `--ff-display: "Quicksand"`, `--ff-body: "Nunito"`, `--ff-mono: "Nunito"`, `--display-weight: 700`, `--display-tracking: -0.02em`, `--label-weight: 800`, `--label-tracking: 0.08em`; and `--sun: #6EE7B7` (also in `src/css/site.css`; the pools, the key's swatches, the map and the film read it).
2. In `designs/lumen.html`: load `Quicksand:wght@600;700` and `Nunito:wght@400;600;700;800` from Google Fonts in place of Exo and Roboto Mono (or self-host both; the content file's privacy page prefers that).
3. In `designs/src/css/lumen.css`, the `.hl` rule under "The marks": colour `var(--leaf)` and no text decoration, in place of the coloured underline; keep the `--mark-*` properties so the toolbar can still show the other marks.
4. In `designs/src/js/lumen/scene.js`: `DROP.radius: 0.027` (or leave 0.036 and set `--film-drop: 0.75` on the page; the first is cleaner).
5. Recapture the stills and the preview card, and update this file's front matter if any value differs from what was set.
