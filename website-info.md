# Lightening Lives — Website Source of Truth

**Status:** Approved brief, v1 · September 2026
**Production domain:** https://lighteninglives.in
**Current staging:** https://lightening-lives.codeastra.com (dark version — to be replaced)
**Agency:** CodeAstra Software LLP

This document is the single source of truth for the redesign. When a prompt, an existing file, or an assumption conflicts with this document, this document wins. If something here is unclear or missing, ask rather than guess.

---

## 1. What Lightening Lives is

Lightening Lives LLP is a **for-profit molecular diagnostics company** based in Hyderabad, India. It develops and sells **extraction-free, blood-card-based genetic screening kits** to laboratories, hospitals, clinicians and government / public-health programmes.

Approved one-sentence description (use in the first paragraph of the home page, in `<meta name="description">` and in schema — may be lightly edited for flow, but keep every fact):

> Lightening Lives is a research-oriented and innovation-driven molecular diagnostics organisation, focused on rapid, affordable, scalable, extraction-free, highly accurate diagnostic solutions for various genetic disorders that reach even the most underserved communities.

### What it is NOT
- Not an NGO, charity, trust or social enterprise. Never imply donations, fundraising or charitable status.
- Not a testing service for individuals. Individuals cannot order a test. No B2C.
- Not a hospital, clinic or "medical provider".

### Business model
- **B2B:** laboratories, hospitals, clinicians — they buy kits and run the assay themselves.
- **B2G / population programmes:** state and district health departments, NGOs and CSR funds running large-scale screening — they contact Lightening Lives for bulk supply and programme support.
- Testing is done in-house only for research collaborations.

---

## 2. Positioning

### Three-word strategy
**Extraction-Free Genetic Screening**

Supporting tagline: **One drop. One day.**

Rationale: extraction-free is the technical differentiator that makes everything else possible (one-drop sample, sub-24-hour turnaround, minimal lab infrastructure, high throughput). It is what a lab director will search for. Lead with it everywhere.

### Differentiators (from the company's own "Why Lightening Lives?" graphic — these are the approved claims)
1. One-drop blood-based test (dried blood spot on a card; anyone can collect it, as with a routine blood-sugar test)
2. Extraction-free genetic testing
3. Rapid turnaround — reports in under 24 hours
4. Affordable and accessible testing
5. Minimal laboratory infrastructure required
6. High-throughput screening — current capacity: **1,000 samples in under 24 hours**
7. Automation-friendly workflow
8. Designed for large-scale public-health programmes

### Credibility facts (approved for publication)
- Sickle Cell Anaemia assay is **ICMR certified**
- **MOU with CCMB** (Centre for Cellular and Molecular Biology, Hyderabad) for development and commercialisation of the molecular diagnostic assay for SCA
- Patrons and Advisors: use the list on the current staging site
- Collaborating organisations and logos: use those on the current staging site (logos approved)
- Team: use names, roles and photos from the current staging site
- Field photographs: available from Nandurbar (Maharashtra), Kothagudem (Telangana) and Jharkhand programmes — Manisha is compiling

### Do not publish
- Pricing of any kind (no "from ₹X", no ranges). Say "contact us for pricing" or "request a quote".
- Publications, conference presentations, press features as a standalone page (links may appear in News and in schema `sameAs`).
- Individual patient / family stories. The company considers these unimportant. Field photos are fine; narrative case studies are not.
- Anything that suggests individuals can order a test.

---

## 3. Audience and goals

### Primary audience (in priority order)
1. **Hospital, laboratory or clinician** — the decision-maker evaluating whether to adopt the assay. *This is the visitor the site is written for.*
2. District / state health officer or programme manager
3. NGO or CSR funder planning population-level screening
4. Regulators and statutory bodies (CDSCO, ICMR etc.) checking credentials
5. Families — they will arrive via search but should be gently redirected to their clinician or lab; the site does not serve them directly

### What we want the visitor to do (calls to action, in priority order)
1. **Request a kit / ask about the product** → primary CTA on every page
2. Ask about a partnership or collaboration
3. Enquire about awareness or counselling programmes
4. Call or email the sales team

Primary CTA label: **Request a kit**. Secondary: **Talk to us**.

---

## 4. Tone and copy rules

- Write for a technically literate professional. Clear, factual, confident, not salesy.
- Lead with facts and mechanisms, not mission statements. "One drop of blood on a card, no DNA extraction, result in under 24 hours" beats "bringing hope through science".
- Retain the sense of light / clarity that the name implies, but express it through the design (light palette, clean layout) rather than through emotional copy.
- Avoid: "hope", "underserved" as the headline idea, "journey", "passion", "revolutionary", "world-class", exclamation marks, Golden Circle framing.
- Use: "kit", "assay", "screening", "product", "laboratory", "programme", "throughput", "turnaround".
- British/Indian English spelling: programme, organisation, haemophilia, thalassaemia, anaemia, centre.
- Numbers as digits. Units spelled consistently: "under 24 hours", "1,000 samples".
- Never invent statistics, certifications, partner names or performance figures. If a number is needed and not in this document, put `[TBC — ask client]` in the copy.

---

## 5. Design direction

### Palette — LIGHT, not dark
The client explicitly rejected the dark staging design. The company name refers to coming *out of* darkness; the site should feel bright, clinical and clean.

- Background: white `#FFFFFF` and warm off-white `#F7F8F6` for alternating sections
- Text: near-black `#141A1E`, muted `#5B6670`
- Primary accent: green, taken from the company's existing icon set (deep green around `#1E6B4E` — sample the exact value from their logo/graphic and use that)
- Secondary accent / "light" motif: warm amber-gold around `#E8B04B` — used sparingly for highlights, dividers, the one-drop motif
- Dark colour permitted only for the footer, if at all
- Must meet WCAG AA contrast throughout

### Typography
- One clean sans for headings and body (e.g. Inter, Manrope or similar via Google Fonts, with a real system fallback stack). Optional serif for the hero headline only if it reads as scientific rather than editorial.
- Generous line height; body 16–18px; max line length ~70 characters.

### Layout and feel
- Long-scroll home page with clear section breaks; all other pages are conventional content pages using the same design system.
- Real photography from the field and the laboratory wherever possible; icons only where a photo doesn't exist. No stock "diverse scientists in a lab" imagery.
- Motion: subtle only. Animated counters are fine but the **real value must be present in the HTML** — animate from the value, never from 0.
- Mobile-first; the B2G audience often browses on phones.
- Keep the section navigator / "skip to" pattern from the staging site — it was good.

---

## 6. Site architecture

Every item below is a real URL with its own `<title>`, `<h1>`, meta description and server-rendered content. Sitemap:

```
/                          Home (long-scroll narrative)
/products/                 Products overview
/products/sickle-cell/     Sickle Cell Anaemia screening kit (ICMR-certified — flagship)
/products/thalassaemia/
/products/sma/             Spinal Muscular Atrophy
/products/dmd/             Duchenne Muscular Dystrophy
/products/haemophilia/
/products/pharmacogenomics/
/products/custom-panels/
/how-it-works/             Specimen → card → assay → result
/performance/              Analytical performance / validation data
/solutions/laboratories/   For labs, hospitals, clinicians (B2B)
/solutions/public-health/  For governments, NGOs, CSR programmes (B2G)
/about/                    Company, story, certifications
/about/team/               Team + Patrons & Advisors
/collaborations/           CCMB, ICMR, partner organisations
/news/                     Updates: photos, press links, events
/news/<slug>/              Individual update
/contact/
/privacy/
/sitemap.xml
/robots.txt
```

Note: verify the exact product list against the staging site's "tests" section before building; add/remove product pages to match what the company actually sells.

### Page-by-page content

#### Home `/`
1. **Hero** — H1: "Extraction-free genetic screening" (or close variant). Subline: "One drop of blood on a card. Results in under 24 hours. Built for laboratories and public-health programmes at scale." CTA: Request a kit · Talk to us. Background: light, with a field or lab photograph.
2. **Plain description** — the approved one-sentence description, in the HTML as text.
3. **Why Lightening Lives** — the eight differentiators as a grid, each with one line of explanation. This replaces the Golden Circle.
4. **Products** — cards for each kit, sickle cell first with the ICMR badge. Link to each product page.
5. **How it works** — 4-step visual: collect one drop → dry on card → run extraction-free assay → result in <24h. Link to full page.
6. **Numbers** — counters with real values: 1,000 samples/24h capacity; number of conditions covered; `[TBC]` samples processed; `[TBC]` districts / programmes. Only publish what the client confirms.
7. **Trusted by / Collaborations** — logo strip (CCMB, ICMR, others from staging). Link.
8. **Who we work with** — two panels: Laboratories & Hospitals / Public-health programmes. Link to the two solutions pages.
9. **Team & Advisors** — small strip with link.
10. **Latest updates** — 3 most recent news items.
11. **Contact CTA** — email, phone, both addresses in HTML, embedded form.

#### Product pages `/products/<condition>/`
Consistent template:
- H1: "<Condition> screening kit"
- What it detects (gene, variants, carrier vs affected where relevant)
- Who it's for (which programmes / clinical contexts)
- Specimen: one drop of blood on a card; who can collect it
- Workflow: extraction-free; equipment needed; automation compatibility
- Throughput and turnaround
- Analytical performance summary with link to `/performance/` — real figures only; `[TBC]` otherwise
- Certifications / validation (ICMR for sickle cell; CCMB MOU)
- What a result means (carrier / affected / negative) — clinical, not emotional
- FAQ (5–8 real questions)
- CTA: Request a kit
- Schema: `Product` + `MedicalTest`

#### How it works `/how-it-works/`
Step-by-step with photographs: collection, card, transport, assay, reporting. Explain why extraction-free matters (time, cost, infrastructure, error reduction). Comparison with conventional extraction-based workflow is welcome if the claims are accurate.

#### Analytical performance `/performance/`
Sensitivity, specificity, accuracy, concordance, number of samples validated, reference method — per assay, in a table. Source: client to provide; staging site has some of this — extract and confirm. This page is the primary asset for clinicians and procurement; do not launch it with placeholder data.

#### Solutions `/solutions/laboratories/` and `/solutions/public-health/`
Two audiences, two pitches. Laboratories: adoption, workflow integration, throughput, support. Public-health: scale, minimal infrastructure, field collection by non-specialists, programme examples (Nandurbar, Kothagudem, Jharkhand — photos, locations, scale; no patient stories).

#### About `/about/` and `/about/team/`
Company history, LLP status stated plainly, certifications, CCMB MOU. Team: names, roles, qualifications, photos from staging. Patrons & Advisors as a distinct, prominent section — the client specifically asked for this.

#### Collaborations `/collaborations/`
CCMB, ICMR and every organisation on the staging site, with logos and one line on the nature of each collaboration.

#### News `/news/`
Simple chronological list. Each item: date, title, photos, optional external link (press). Content types the client wants: photos from programmes, newspaper links, upcoming sponsored events. Keep authoring dead simple (Markdown files or a tiny CMS) so it actually gets updated.

#### Contact `/contact/`
- Email: **admin@lighteninglives.in**
- Phone: **+91 91825 88191**
- **Registered Office:** D-306, Sy. No. 117, Indu Aranya Pallavi GSI (SR), Bandlaguda, Hayathnagar, Hyderabad – 500068, Telangana
- **Laboratory & Corporate Office:** Flat No. 201, 2nd Floor, S B Hare Krishna Towers, H.No. 4-7-195/2/55, HMT Nagar, Nacharam, Hyderabad, Telangana – 500076
- Embedded enquiry form (existing Youform is acceptable) **plus** the contact details as plain HTML text.
- Map embed of the laboratory address.

---

## 7. Technical requirements

### Rendering — the non-negotiable
All content must be present in the server-delivered HTML. The staging site injects content client-side and appears empty to non-JS crawlers (most AI bots). Fix this before anything else.

- Use a static-site generator (Astro preferred; Eleventy or Next static export acceptable). Output plain HTML + CSS with minimal JS.
- JavaScript may enhance (animations, counters, nav) but must never be required to read any text, number, image or link.
- Verify with `curl <url> | grep <known phrase>` for every page before launch.

### Head / metadata
- Unique `<title>` (≤60 chars) and `<meta name="description">` (≤155 chars) per page. Reuse the staging site's meta as a starting point — it is good.
- Canonical URL per page, pointing to `https://lighteninglives.in/...`
- Open Graph and Twitter card tags with a real image per page (fallback to a site-wide image).
- Geo meta tags for Hyderabad (as on staging).
- `<html lang="en-IN">`.

### Structured data (JSON-LD) — required
- Site-wide `Organization` (not `MedicalOrganization`): name, legalName "Lightening Lives LLP", url, logo, both addresses as `PostalAddress`, `contactPoint` (sales), `sameAs` → LinkedIn, YouTube, X, and any press/publication links the client supplies.
- `Product` + `MedicalTest` on every product page.
- `Person` for each team member and advisor, with `affiliation` / `jobTitle`.
- `FAQPage` wherever an FAQ block exists.
- `BreadcrumbList` on all inner pages.
- `WebSite` with `potentialAction` search only if site search is built.

### Crawling and indexing
- `sitemap.xml` generated at build; referenced in `robots.txt`.
- `robots.txt` must **allow** GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, Applebot. Do not block AI crawlers.
- Staging must carry `<meta name="robots" content="noindex">` (or canonical to production, as now) — remove on production.
- 301 redirects from every old `lighteninglives.in` URL to its new equivalent. Inventory the old URLs before launch.

### Analytics
- GA4 and Google Search Console configured at launch; the client has asked for this and has none today.
- Consent banner only if cookies beyond GA are used; keep it minimal.

### Performance and accessibility
- Lighthouse ≥ 90 on Performance, Accessibility, Best Practices, SEO on mobile.
- Images: AVIF/WebP with width/height set; lazy-load below the fold; real `alt` text.
- Fonts: Google Fonts with `font-display: swap` and a system fallback.
- Single `<h1>` per page; logical heading order; focus states; skip link.
- Responsive from 360px up.

### Google Business Profile
Client has none. Create one at launch for the **Laboratory & Corporate Office** address, category "Medical diagnostic manufacturer" or closest equivalent, with the same name, description, phone and website as the site. NAP (name, address, phone) must match the site exactly.

### Language
English only. Do not build i18n scaffolding now; keep content in a structure that could take a `/te/` or `/hi/` tree later.

---

## 8. AI-visibility checklist
Every page should pass this:
- [ ] The first 100 words state plainly what the page is about, in the HTML
- [ ] At least one concrete fact (number, certification, named partner, specimen, turnaround) in the first screen
- [ ] Questions people actually ask are answered in H2/H3 + short paragraph form
- [ ] JSON-LD present and valid (test with Google's Rich Results Test)
- [ ] Same company name, description and contact details as on LinkedIn, GBP and any directory listing
- [ ] No claim that the client hasn't approved (see §2 "Do not publish")

---

## 9. Open items — ask before assuming
1. Exact list of products currently sold (confirm against staging "tests" section)
2. Real analytical performance figures per assay, with validation sample sizes and reference method
3. Any programme-level numbers approved for publication (samples processed, districts, states)
4. Field photographs from Manisha (Nandurbar, Kothagudem, Jharkhand)
5. Social profile URLs for `sameAs` (LinkedIn, YouTube, X — links exist on the staging footer; confirm)
6. Press and publication links (for News and `sameAs` only)
7. Inventory of old `lighteninglives.in` URLs for redirects
8. Logo files in SVG; exact brand green

---

## 10. Definition of done
- All pages in §6 exist, server-rendered, with unique metadata and valid JSON-LD
- Light palette; no dark UI except optional footer
- No pricing, no charity language, no B2C ordering path, no patient stories
- `curl` test passes on every page
- Lighthouse ≥ 90 across the board on mobile
- 301 map in place; sitemap and robots correct; GA4 + Search Console live
- Client has reviewed and approved all copy, especially certifications and performance figures
