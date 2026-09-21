# Lightening Lives — 12 home-page design options

Twelve deliberately different aesthetic directions for the Lightening Lives home page, built
against `website-details.md` (the source of truth). All twelve share the same approved copy,
facts and section list — what changes between them is the visual direction. The goal of this
round is to pick a direction, not a finished page.

## How to review

**Easiest:** open `index.html` in any browser — it works straight from the file system, no
server needed. Use the dropdown (or ← / → arrow keys, or the arrow buttons) to switch between
designs, and the **Mobile / Tablet / Desktop** toggle to preview each one at 390 px, 820 px or
full width. You can deep-link to a design — e.g. `index.html#07` opens Precision Instrument.

Each design is also a standalone file in `designs/` and can be opened directly.

The dropdown is populated from `manifest.json`. Because browsers block `fetch()` on `file://`
pages, `index.html` also carries an embedded copy of the manifest — when adding a design later,
add the entry to `manifest.json` **and** to the fallback `<script type="application/json">`
block in `index.html` (served over HTTP, only `manifest.json` matters).

## What is real and what is placeholder

- **Real:** all copy, the eight differentiators, the tagline, the team / patron / advisor
  names, the collaborating organisations, both addresses, phone and email — all taken from the
  approved brief and the current staging site's approved data. The company logo is the real
  brand mark (embedded from the repo's brand assets; every header and footer carries the sun
  mark, and design 11's hero uses the full lockup). SVG originals and the exact brand green
  remain open item 8 of the brief — the embedded PNGs can be swapped for vectors when supplied.
- **Placeholder:** every image (grey/duotone SVG blocks — real field and lab photography goes
  here), the partner logos (shown as text wordmarks until vector logos arrive), the three
  "Latest updates" items (illustrative titles and dates), and the enquiry form (a visual
  stand-in for the Youform embed).
- **`[TBC]`:** samples-processed and districts/programmes counters are deliberately shown as
  `[TBC]` — the brief marks them as unconfirmed and forbids inventing numbers.

## The twelve directions

**01 · Clinical Clarity** — Swiss-style grid on pure white with a single deep green accent and
no amber at all. A dense, factual hierarchy: a specification table in the hero instead of a
photo, a numbered "Contents" index band as the section navigator, products as a ruled table.
Archivo + Inter. For the lab director who wants the facts in the first screen.

**02 · Daylight** — the company name taken literally. A warm radial dawn gradient rises behind
a centred hero, an amber horizon arc divides sections, and the one-drop motif appears as a
golden drop. Rounded cards, pill nav, light footer — optimistic without losing clinical
credibility. Sora + Manrope.

**03 · Field Notes** — photography-led and human-scale on an earthy off-white, for the
public-health audience. A full-bleed field-landscape hero, full-bleed image bands between
sections, and the signature device: every photograph carries a dated "field note" caption like
an archive print. Bitter (documentary slab serif) + Karla.

**04 · Data Sheet** — the page as a beautifully typeset technical datasheet. Monospace
numerals, a PARAMETER/VALUE summary-of-characteristics table as the hero, numbered sections
with a dotted-leader table of contents, a product table, a personnel table and an "ordering
information" block. IBM Plex Mono + IBM Plex Sans; no animation — documents don't move.

**05 · Editorial** — a serif magazine on white (deliberately not the clichéd cream). Masthead
with double rules and an issue line, asymmetric 7/5 hero with a drop-capped standfirst and an
"In this issue" index, the differentiators set as pull-quotes, and the team as a literal
magazine masthead box. Newsreader + Libre Franklin. No JavaScript at all.

**06 · Card Deck** — the blood-spot card as the design system. A large collection-card
illustration anchors the hero (with a stacked deck behind it), and every component is a
rounded, tactile card with crisp borders and hard offset shadows — physical, not glowy.
Plus Jakarta Sans.

**07 · Precision Instrument** — cool blue-greys (the only cool palette of the twelve), ultra-
fine hairlines and light-weight engineering type. Corner registration ticks frame each panel, a
calibration ruler under the hero marks 1 drop / <24 h / 1,000 samples, green appears only as
small indicator LEDs, and a thin scroll-progress hairline fills like a gauge. Space Grotesk +
Figtree.

**08 · Bold Public Health** — poster-scale Anton display type, solid green blocks, hard
drop-shadow buttons and full-width mobile CTAs. High contrast on white, giant numerals for the
protocol, built to be read on a district health officer's phone in sunlight. Anton +
Public Sans.

**09 · Minimal** — radical restraint: one typeface (Inter), one accent (green), a single
measured column, no cards, no icons, no borders beyond hairlines. The only graphic gesture is
the green full stop — the drop reduced to a typographic dot. No JavaScript.

**10 · Diagram-First** — the site as an illustrated explainer. Every major section is anchored
by a numbered figure in a consistent diagram language: the end-to-end workflow (Fig. 1), the
card's anatomy (Fig. 2), one-platform-seven-kits (Fig. 3), a time-axis protocol (Fig. 4), a
96-well plate for throughput (Fig. 5), the collaboration network (Fig. 6), the two-audience
fork (Fig. 7) and the postal route (Fig. 8). Atkinson Hyperlegible + Space Mono annotations.

**11 · Warm Institutional** — the settled confidence of an established research institute:
warm ivory, muted green and gold, Lora serif headings, symmetric centred layouts with gold
ornament rules. The signature is exactly what the client wants foregrounded — circular
credential seals (ICMR certification, CCMB MOU) drawn as ring-text emblems in the hero, and
patrons & advisors given first-class placement. Lora + Source Sans 3.

**12 · Motion & Depth** — modern SaaS on layered light surfaces. A floating hero stack (report
card, collection card, stat chip) drifts with gentle parallax over blurred colour orbs, the
differentiators sit in a bento grid, and every card lifts on hover with soft diffuse shadows.
Glassy sticky nav; reduced-motion is fully respected. Instrument Sans.

## Constraints honoured across all twelve

Light palettes only (dark used only in footers, where at all); every word and number present in
the HTML with JavaScript as enhancement only; self-contained single files with Google Fonts as
the only external load; the approved one-sentence description, eight differentiators,
"Extraction-Free Genetic Screening" positioning and "One drop. One day." tagline used verbatim;
no pricing, no charity language, no B2C ordering path, no patient stories; British/Indian
spelling; every §6 home-page section present; responsive 360–1440 px; WCAG AA contrast, one
`<h1>` per page, logical heading order, visible focus states, skip links, and `alt`/ARIA text
on meaningful placeholders. Counters are static real values with entrance reveals — nothing
ever counts up from 0.
