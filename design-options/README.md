# Lightening Lives — home-page design options

Ten complete home-page designs for the Lightening Lives redesign, plus a comparison page that can
show any of the ten layouts in any of the eleven palettes. Designs 09 and 10 are drawn strictly from the
company's logo colours.

Everything opens from `file://`. There is no build step and no server.

---

## How to review

**Start here: open `index.html`.**

- **Design** dropdown, or the arrows, or <kbd>←</kbd> / <kbd>→</kbd>, or the number keys <kbd>1</kbd>–<kbd>9</kbd> and <kbd>0</kbd> (for 10) — switch layout.
- **Palette** dropdown, or <kbd>↑</kbd> / <kbd>↓</kbd> — recolour the layout you are looking at. "Own palette"
  is the palette the design was drawn for; every other entry is applied live over it.
- **Width** — 390 (phone), 820 (tablet), Full.
- The bar shows the design's rationale, and the palette's rationale when one is applied.
- Links are deep: `index.html#03/daybreak` opens design 03 in the Daybreak palette, and
  `index.html#03/daybreak/390` opens it at phone width. Copy the address bar to send a colleague an exact view.
- **Palettes** (top right) opens `palette-sheet.html`: all eleven palettes as labelled swatch rows, each with a
  component strip and its measured contrast results.

To look at one design on its own, open `designs/NN-name.html` directly, or use **Open ↗**.

### What these are, and what they are not

Each file is a **single-page comp of the home page only**, built to be judged on layout, typography,
colour and tone. All eleven home-page sections from `website-info.md` are present with the approved copy.

- Links to pages that do not exist yet (`/products/sickle-cell/`, `/performance/`, and so on) point at the
  nearest anchor on the page. The real URL is recorded on each link in a `data-href` attribute, so the
  sitemap is already written into the markup.
- Photographs do not exist yet. Every image area is a **placeholder** that states, in a visible caption,
  which photograph belongs there. Design 04 is photography-led, so its placeholders are the most developed.
- Partner logos are typeset names. Vector logo files are still outstanding.
- The enquiry form posts to `mailto:` so the comps stay dependency-free. The production build should use the
  existing Youform form, or a server-side handler.
- Each file carries a small **palette bridge** script, used only by the comparison page. Delete it in production.

### The logo

Every design carries the **company's own sun mark** in the header and the footer — the official
lettering-stripped mark (`assets/brand/mark.png` in the company's asset set), embedded as an inline PNG
data URI so each file stays self-contained and opens from `file://`.

Two deliberate decisions worth confirming:

- **The mark is paired with a typeset wordmark**, not with the full lockup. The complete lockup is a square
  logo with "LIGHTENING LIVES" curved around the sun; at the 44–60px height of a navigation bar that curved
  text is illegible. Pairing the mark with "Lightening Lives" set in each design's own typeface is what the
  company's current site does, and it lets the wordmark take on each design's typography and ink colour.
  The full lockup is available and can be used anywhere with real vertical room.
- **The mark does not recolour with the palette.** A logo is a fixed asset, so when you switch palettes on
  the comparison page the sun stays exactly as it is while everything around it changes. This is correct
  behaviour, and it is also a useful test: the logo is warm — yellow, amber and green — so it sits most
  naturally in Daybreak, Canopy and Brief green, and reads as a deliberate accent against Precision,
  Molecular and Civic. Worth judging with the client. Designs 09 and 10 take the question away: their
  palettes are built from the mark itself.

Note that the full lockup also carries the tagline **"Every Life Matters"**. The brief's approved supporting
tagline is **"One drop. One day."**, which is what the pages use. If the lockup is placed anywhere on the
site, the page will be showing two taglines — a decision for the client rather than for us.

---

## The designs

Designs 01–04 were built with the **frontend-design** skill, 05–08 with the **ui-ux-pro-max** skill,
committing to the design systems its database returned for four different framings of this company.
Designs 09 and 10 were built with **frontend-design** from palettes extracted from the logo (see
*Brand palettes* below).

| # | Name | Primary | Typefaces | The idea in one line |
|---|---|---|---|---|
| 01 | Precision | Navy `#143D73` | IBM Plex Sans + Mono | The datasheet made beautiful |
| 02 | Daybreak | Bronze-gold `#8A5A00` | Newsreader + Figtree | The name drawn as a sunrise |
| 03 | Molecular | Indigo `#4B3BC8` | Red Hat Display / Text / Mono | The page as a methods paper |
| 04 | Field & Lab | Warm charcoal `#3B342D` | Bricolage Grotesque + Instrument Sans | A photo essay for a supplier |
| 05 | Assurance | Medical teal `#0F766E` | Figtree + Noto Sans | Credentials as the proof |
| 06 | Lumen | DNA blue `#0369A1` | Exo + Roboto Mono | Daylight through an instrument window |
| 07 | Canopy | Nature green `#15803D` | Lora + Raleway | One drop, grown to programme scale |
| 08 | Civic | Slate-black `#0F172A` | Atkinson Hyperlegible | One readable column, built for a phone |
| 09 | Brand Classic | Leaf green `#527E15` | Archivo (width axis) | The logo's rays read as one day |
| 10 | Brand Light | Leaf green `#40640B` | Manrope + Spline Sans Mono | The mark in its own light |

### 01 · Precision — *frontend-design*
An austere Swiss grid: a four-column label rail against an eight-column body, separated by one continuous
hairline, with every figure and field label set in IBM Plex Mono. The hero is a datasheet front page —
headline left, a ruled specification table right — and the sections are clause-numbered (1.0, 2.1, 3.4)
because that is datasheet vernacular and it drives the sticky numbered index. Products are a table rather
than cards; "How it works" breaks the rail to run a time axis marked *axis not to scale*, since no timings
are claimed. Navy carries every action; a signal vermilion appears only as a tick. The one design where
exact alignment is itself the argument.

### 02 · Daybreak — *frontend-design*
The company's name, taken literally. A warm ivory ground, a soft amber sunrise resting on a horizon line
behind the blood card, and half-sun arches framing every photograph. The signature is a dawn-to-dawn arc
that carries the four workflow steps along its curve, becoming a vertical gradient line on a phone.
Editorial serif headlines over a plain sans, on ruled fact strips with generous air. Amber-gold is strictly
decorative: every button and link uses a deep bronze-gold that passes AA on ivory, so the page reads as
light without giving up contrast. The warmest of the eight, and the one that most needs the client to
agree that warm still reads as clinical.

### 03 · Molecular — *frontend-design*
The page as a methods paper, where the argument is carried by drafted inline-SVG figures rather than by
adjectives. Figure 1 is the assay in five stages — card, punch, reaction, amplification, call. Figure 2
sets the conventional workflow above the extraction-free one and shows lysis, binding, washing and elution
as dashed, absent stages, bracketed by guides down to the track that does not run them. It states stage
names only and says so. Red Hat Display over Red Hat Mono labels, on a floating pill header with section
chips. The strongest design for a reader who wants the mechanism before the claim.

### 04 · Field & Lab — *frontend-design*
Photography-led and documentary, for a company whose evidence is its field and laboratory work. Large image
areas carry the page, each with a caption in Source Serif italic giving place, subject and status. Until
the real photographs arrive the placeholders do real work: warm tonal studies of the Satpura hill contours
for Nandurbar, forest verticals for Kothagudem, plateau strata for Jharkhand, and a laboratory bench.
Text never sits on an image; the hero panel overlaps the photograph's lower-left edge instead. Earthy
off-white with a warm-charcoal primary lets the photographs supply the colour. On a phone it is the only
design with a fixed bottom bar — *Request a kit* plus a Sections menu — because the B2G audience browses
on phones.

### 05 · Assurance — *ui-ux-pro-max, "medical device manufacturer"*
The database returned the Trust & Authority pattern in the Accessible & Ethical style with Soft UI depth,
whose stated anti-pattern is *hidden credentials*. So credentials lead: a two-tier header puts the email
address and phone number above the nav, and ICMR certification, the CCMB MOU and the 1,000-sample capacity
float as cards over the hero image. White cards on a mint ground, 10–12px radii, soft shadows, a sticky
"On this page" rail. The most conventional of the eight, and the easiest for a procurement reader to scan.

### 06 · Lumen — *ui-ux-pro-max, "biotech life sciences research"*
Glassmorphism and Biomimetic, kept light because the client rejected dark UI. Frosted panels float over
pale, blurred fields of DNA blue and life green, so the page feels like daylight through a clean instrument
window. The scroll-story in "How it works" holds a glass illustration of the card and drop while the four
steps pass and light up — and degrades to a plain, fully readable two-column list with JavaScript off or
reduced motion on. Exo for text with Roboto Mono for every label and numeral. The most contemporary, and
the one most dependent on a good screen.

### 07 · Canopy — *ui-ux-pro-max, "point of care testing sample collection kit"*
Organic Biophilic, held to a discipline. The eight differentiators hang alternately off a single central
stem, like leaves; photographs sit in soft asymmetric masks; flowing dividers replace hard section breaks;
the footer is deep green. Lora headings over Raleway stay factual, and the greens stay deep, so the page
reads as a supplier rather than a wellness brand — the standing risk in this direction, and the thing to
check first. Its palette is the closest of the eight to the company's existing green and amber.

### 08 · Civic — *ui-ux-pro-max, "public health programme government"*
The Minimal Single Column pattern in the Accessible & Ethical + Inclusive Design style: one readable
column, large Atkinson Hyperlegible, thick slate rules, lists instead of cards, and a Contents list under
the hero with a "Contents" return link after every section. Every text pair clears 7:1; no state is carried
by colour alone; there are no sticky elements, no reveals and no counters, because motion effects are an
anti-pattern for this system. Built for a district health officer on a phone, outdoors, on a slow
connection. The plainest of the eight — and the one that will age best.

### 09 · Brand Classic — *frontend-design, logo palette*
The logo used with confidence. The leaf green of the mark fills the header, the "In numbers" band, the
audience headers and every primary button; the real sun mark heads every section; the mark's leaves become
the bullets and the section-index markers. The signature is the hero: the sun's rays redrawn as a 24-ray dial
around the mark, with a green ring that draws once on load — "One drop. One day." as the logo itself. Archivo
is used on its width axis: expanded for headlines, condensed caps for labels. Left-aligned, card-based and
predictable: the most corporate of the ten, and the one closest to how the client already presents itself.

### 10 · Brand Light — *frontend-design, logo palette*
The same brand with a lighter touch. One centred axis from the hero down, a warm off-white made from the sun
gold, bands of the palest leaf tint, hairlines instead of cards. Green is reserved for the calls to action and
the key figures, which are set very large in thin Manrope; the gold appears only as the soft glow behind the
mark in the hero and as a small rising-sun marker over each section heading. The section navigator is a
"Sections" menu in the sticky header rather than a strip. For a client who loves the logo but wants the site
quieter than it.

---

## Palettes

Eleven palettes: one per design, plus **Brief green**, the palette specified in `website-info.md` §5, so any
layout can be judged in the company's existing colours. Each is defined by exactly eight variables, and no
design uses a colour value outside them — which is what lets any palette be applied to any layout.

| Variable | Role |
|---|---|
| `--bg` | page ground (always light) |
| `--bg-alt` | alternating sections and cards (always light) |
| `--ink` | body text, and the only permitted dark area (the footer) |
| `--muted` | secondary text |
| `--primary` | buttons, links, key graphics |
| `--primary-ink` | text on `--primary` |
| `--accent` | decorative only — markers, rules, the drop. Never text, never a text background |
| `--line` | hairlines and card borders |

Across the eight exploratory palettes (01–08) the primaries are spread deliberately: two blues (navy, DNA
blue), a teal, an indigo, a green, a warm bronze-gold, a warm charcoal and a slate-black. Only one of them
uses a green primary, against a limit of two. The two **Brand** palettes (09, 10) are green because the
logo is, and `tools/check.py` exempts the Brand family from that limit.

### Brand palettes — extracted from the logo

No `brand/` folder with a logo file was supplied, so the colours were sampled from the official mark
already embedded in every design (128×128 PNG, identical in all ten files). Opaque pixels only:

| Hex | Name | Where in the logo | Share |
|---|---|---|---|
| `#F7EF06` | Sun yellow | Sun disc and inner rays: the light stop of the sun's gradient | ~46% |
| `#FFC80C` | Sun gold | Outer rays and rim: the warm stop of the sun's gradient | ~46% |
| `#6B9D2A` | Leaf green | The three leaves above the figure | 5.9% |
| `#252820` | Figure ink | The human figure / trunk | 2.3% |

- **Primary: leaf green.** The sun covers the most area, but yellow and gold cannot carry text at AA
  without turning brown, and the brief already names green as the primary. **Secondary: sun gold**, with
  sun yellow as its gradient stop. Both stay decorative.
- **Ramps** were built in OKLCH with the hue held fixed and only lightness and chroma changing. Leaf green:
  50 `#F4FBEE` · 100 `#E9F5DE` · 200 `#D3EBBE` · 300 `#B6DA95` · 400 `#95C266` · **500 `#6B9D2A` (logo)** ·
  600 `#527E15` · 700 `#40640B` · 800 `#314C0B` · 900 `#20310B`. Sun gold: 50 `#FFFAED` · 100 `#FFF3D5` ·
  200 `#FFE6A9` · 300 `#FED66E` · **400 `#FFC80C` (logo)** · 500 `#D2A403` · 600 `#A5810F` · 700 `#826505`.
- **Neutrals** use the green's hue at OKLCH chroma ≤ 0.015 (muted `#61655D`, lines `#E1E4DE` /
  `#E7EBE3`), so even the greys carry the brand. The logo's own figure colour `#252820` is effectively the
  900 step of that neutral ramp, and it is Brand Classic's ink.
- **The logo's exact green fails AA on white (3.24:1).** It is moved down its own ramp, not re-hued: Brand
  Classic uses 600 `#527E15` (4.82:1), Brand Light uses 700 `#40640B` (6.67:1). The exact `#6B9D2A` still
  appears wherever the real mark is shown.
- No hue outside the logo is used in either palette.

### Contrast

Measured WCAG 2.x ratios. The five pairs the brief requires, plus two extra checks for text and links on
alternating sections. AA for body text is 4.5:1; every value below passes. `--accent` is decorative in
every layout and never carries text, so it has no contrast requirement.

<!-- palette-table:start -->
| Palette | Family | Primary | ink / bg | ink / bg-alt | muted / bg | primary-ink / primary | primary / bg | muted / bg-alt * | primary / bg-alt * | AA |
|---|---|---|---|---|---|---|---|---|---|---|
| Brand Classic | Brand | `#527E15` | 14.97 | 14.17 | 5.95 | 4.82 | 4.82 | 5.64 | 4.57 | Pass |
| Brand Light | Brand | `#40640B` | 11.39 | 11.15 | 5.76 | 6.67 | 6.67 | 5.64 | 6.53 | Pass |
| Precision | Blue & navy | `#143D73` | 17.48 | 16.01 | 6.31 | 10.80 | 10.80 | 5.78 | 9.89 | Pass |
| Lumen | Blue & navy | `#0369A1` | 8.87 | 9.46 | 7.11 | 5.93 | 5.57 | 7.58 | 5.93 | Pass |
| Assurance | Teal | `#0F766E` | 9.09 | 9.48 | 7.27 | 5.47 | 5.25 | 7.58 | 5.47 | Pass |
| Canopy | Green | `#15803D` | 8.70 | 9.11 | 6.55 | 5.02 | 4.79 | 6.85 | 5.02 | Pass |
| Brief green | Green | `#1E6B4E` | 17.55 | 16.48 | 5.87 | 6.43 | 6.43 | 5.51 | 6.03 | Pass |
| Molecular | Violet | `#4B3BC8` | 17.54 | 16.07 | 6.75 | 7.61 | 7.61 | 6.18 | 6.97 | Pass |
| Daybreak | Warm | `#8A5A00` | 15.72 | 14.47 | 6.22 | 5.93 | 5.83 | 5.72 | 5.37 | Pass |
| Field & Lab | Neutral | `#3B342D` | 15.88 | 14.45 | 6.12 | 11.75 | 11.75 | 5.57 | 10.69 | Pass |
| Civic | Neutral | `#0F172A` | 20.17 | 19.28 | 7.58 | 17.85 | 17.85 | 7.24 | 17.06 | Pass |

\* extra checks beyond the five required pairs. All ratios are WCAG 2.x contrast ratios; AA for body text is 4.5:1.
<!-- palette-table:end -->

---

## Checking the work

```sh
python3 tools/check.py                      # every design + every palette
python3 tools/check.py designs/03-*.html    # one design
python3 tools/check.py --table              # regenerate the palette table above
node  tools/shots.mjs designs/03-molecular.html out/ --palette civic
python3 tools/sync.py                       # after editing manifest.json or palettes.json
```

`tools/check.py` enforces, per design: the eight-variable palette block and no colour value anywhere
outside it (hex, `rgb()`, `hsl()`, named colours, SVG attributes, inline styles or script); light
backgrounds; WCAG AA on all seven pairs; one `<h1>` and no skipped heading levels; `lang="en-IN"`; the
skip link, `:focus-visible` and `prefers-reduced-motion`; all eleven section ids; the approved copy
verbatim; no banned words, pricing, charity or B2C language and no US spellings; and that the file is
self-contained apart from Google Fonts.

`tools/shots.mjs` drives headless Chrome to capture full-page screenshots and report horizontal overflow
at 360, 390, 820, 1280 and 1440px. All ten designs are clean at all five widths, with no console errors.

`tools/sync.py` validates `manifest.json` and `palettes.json`, inlines them into `index.html` (browsers
block `fetch()` of local JSON under `file://`), regenerates `palette-sheet.html`, and refreshes the
contrast table in this README.

`tools/record.py` writes a finished design's rationale and palette into the JSON, reading both from the
design file itself so they can never drift from what the page renders.

---

## Still needed from the client

1. **Photographs** — field (Nandurbar, Kothagudem, Jharkhand), laboratory, kit and team portraits. Manisha is compiling.
2. **The logo in SVG, and the exact brand green** — the mark is embedded from the supplied 256px PNG, which is ample at navigation size but should be replaced with a vector before launch. The logo green has now been sampled from the embedded mark (`#6B9D2A`, used by the Brand palettes); the Brief green palette keeps the brief's approximate `#1E6B4E` for comparison. The full lockup is still needed to confirm the colour of the "LIGHTENING LIVES" lettering, which the embedded mark does not include.
3. **Partner logos as vectors** — currently typeset names.
4. **The two `[TBC]` figures** in "In numbers": samples processed, and districts and programmes.
5. **Dates for the three news items**, currently `Date [TBC]`.
6. **The pharmacogenomics panel contents** — shown as `Panel [TBC]` on that product card.
7. **Confirmation of the seven-kit product list** against what the company actually sells today.
8. **Analytical performance figures** — no design publishes any, and `/performance/` must not launch with placeholder data.

Nothing on any of these pages states a fact, figure, certification or partner that is not in
`website-info.md`. Where a number was needed and not approved, the page shows `[TBC]` rather than an estimate.
