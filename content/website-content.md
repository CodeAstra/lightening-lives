# Lightening Lives: website content

Third draft, written from scratch on 24 October 2026. It replaces every earlier draft. The 12 and 23 October drafts are in git history.

**What this file holds:** the positioning, the routes, every page's sections in order, the copy for each section, and the key message each section must leave behind. It ends with a list of facts the company must confirm before launch.

**How to read it**

- `[CONFIRM: …]` marks a fact we do not have. Never publish a page with one still in it. Part 9 lists them all.
- *Section notes* in italics describe what each section is for, how it looks and how it moves. They are not copy.
- Copy is in Indian English (anaemia, haemoglobin, programme, counselling). Search terms in American spelling go in metadata only (see 2.8).

**Sources, in order of trust**

1. `content/Lightening Lives Poster v9-selection.png`, the conference poster. Its wording has been refined over many rounds, so it outranks everything else. Where this file departs from it, Part 2.6 says why.
2. The user's brief of 24 October 2026: positioning, audiences, things to avoid, the musculopathies.
3. `content/Design revision request.pdf`, the brochure draft. Used for the product names, the two families and the musculopathy range only. Its statistics are AI-generated and are **not** used.
4. lighteninglives.in, the current site: founder biography, team, patron, advisers, address, social links. Its "impact stories" are **not** used (see Part 8).

---

## Contents

1. Positioning
2. Message, audience and voice
3. Site map and routes
4. Shared elements
5. Pages
   - 5.1 Home
   - 5.2 Technology
   - 5.3 Solutions (overview)
   - 5.4 Test pages (template, then five pages)
   - 5.5 Develop a test with us
   - 5.6 Partners (hub and three pages)
   - 5.7 Our work (hub and entries)
   - 5.8 About
   - 5.9 Contact
   - 5.10 Privacy, terms, 404
6. Search and AI visibility
7. Motion, 3D and every screen
8. What we removed, and why
9. Facts to confirm

---

## 1. Positioning

### 1.1 The one sentence

> **Lightening Lives is a Hyderabad healthcare technology company that develops REASSURED genetic tests for inherited disorders, so that hospitals, laboratories and public health programmes can screen and confirm in a single test.**

Use this sentence word for word as the company's description everywhere it is described: meta description of About, Organization schema, `llms.txt`, LinkedIn, press notes. When AI search engines see one consistent description, they repeat it.

### 1.2 What the company is, and is not

| It is | It is not |
|---|---|
| A healthcare technology company that develops genetic tests | A charity, NGO or social enterprise |
| The inventor of a patented method, approved by ICMR | A diagnostic laboratory, or a testing service for the public |
| A partner to hospitals, laboratories and programmes | A "diagnostic tool" maker, or a kit seller |
| Founded and led by senior scientists | A start-up selling a promise |

The tests are physical kits, and clinicians expect the word "kit". The rule: **the company sells outcomes, the page shows the kit.** We call the products *LitLife™ tests*. The word "kit" appears only where the box itself is shown: on a test's own page ("What comes in the kit") and once on Technology. It never appears in the home page's headings, and the home page never shows a box.

### 1.3 The three words

The company's line is **Innovate · Diagnose · Transform lives.** Every page shows each of the three:

- **Innovate.** The company builds the chemistry, as a platform rather than a single test. Its proof: a patented, extraction-free PCR method that runs from a dried blood spot and adapts to new conditions.
- **Diagnose.** One test both screens and confirms. Its proof: ICMR approval; patients told from carriers; newborns tested at birth.
- **Transform lives.** A result is the start of care, not the end of a test. Its proof: 15 sites in nine states and Delhi, and results that lead to counselling, treatment and follow-up.

### 1.4 The distance from Theranos

Theranos promised hundreds of tests from a finger prick, on a secret machine, with no published evidence. Every choice below does the opposite, on purpose:

1. **We name the method.** The test uses established science: mutation-specific PCR, read by agarose gel electrophoresis. We show all six steps and the gel image. Nothing is a black box.
2. **We claim one test per condition.** Each LitLife™ test detects the mutations for one condition or a defined group. We never write "any test from one sample".
3. **We say "dried blood spot" and "finger-prick sample".** Never "single drop", "one drop", "a drop of blood" as a claim, or "painless".
4. **Evidence sits next to every claim.** Approval, patents, papers and validation data link to their sources. A claim without its source does not go on the site.
5. **We invite checking.** The main action for laboratories is to talk to our scientists and evaluate the test, not to buy it.
6. **No unqualified 100%.** The poster states 100% sensitivity and specificity. On the website a clinician will only trust that number with the study beside it, so it appears only with its sample size and reference method (see 5.2, Evidence, and Part 9).

---

## 2. Message, audience and voice

### 2.1 Message house

**Roof (the promise):** Confirmed genetic diagnosis, closer to the patient.

**Three pillars:**

| Innovate | Diagnose | Transform lives |
|---|---|---|
| Extraction-free PCR from a dried blood spot | Screens and confirms in one test | 15 sites, nine states and Delhi |
| Patent granted in India and Japan; published internationally | Tells patient, carrier and unaffected apart | Newborn screening in two states |
| One platform: new tests when a programme needs one | Newborns tested at birth | Results lead to counselling, treatment, follow-up |
| Built on 25+ years of molecular genetics | Built to the REASSURED criteria | Accessible to all: from one clinic to a national programme |
| Coagulation and pharmacogenomics in development | Approved by ICMR | Supports India's sickle cell elimination effort |

**Foundation (why believe us):** ICMR approval · patents · peer-reviewed publications · a founder who was Chief Scientist at CSIR-CCMB and Director of CDFD.

### 2.2 Audiences, in order of priority

| Audience | What they need to hear | What they need to see | Their next step |
|---|---|---|---|
| **1. Hospitals, laboratories, clinicians** (most important) | It is accurate, it is validated, it fits my lab, it ends the second test. | Method, comparison with HPLC and solubility tests, equipment, turnaround, validation, regulatory status, papers. | Talk to our scientific team; request a technical dossier; evaluate in your lab. |
| **2. District health officers, state and national programmes** | It confirms at the point of screening, travels without a cold chain, tests newborns, and has worked in the field. | Field record by state, testing model, newborn screening, programme alignment, how a rollout works. | Plan a screening programme with us. |
| **3. NGOs and CSR funders** | My money produces confirmed diagnoses and families in care, with data I can report. | The six-step model, where it has worked, what a funded camp delivers, reporting. | Fund or co-run a screening programme. |

Patients and families will also arrive from search. They get one plain notice (4.4) that tells them how to get tested through their doctor. They are not a target audience, because the company is not a testing service.

### 2.3 What every visitor should leave believing

1. This company invented something, and it is proven.
2. One test does the work of two, from a finger-prick sample that travels by ordinary post.
3. It already works in the field, across India.
4. Serious scientists stand behind it.
5. I know what to do next.

### 2.4 How the pages persuade

- **Problem before product.** Each page starts with the gap in today's testing (the second test, the cold chain, the newborn who waits), then shows how the test closes it.
- **Proof next to every claim.** A claim and its source share a line.
- **Show the science.** Clinicians trust what they can follow: the steps, the gel, the controls.
- **One audience per section.** A section speaks to the lab or to the programme, not to both at once.
- **One action per page.** Each page asks for one thing and makes it easy.

### 2.5 Voice

Confident and plain, the way a senior scientist speaks to a colleague.

- Short sentences. Active verbs. Name the thing ("PCR", "agarose gel", "carrier").
- Numbers only with their source.
- Warm when speaking of families, exact when speaking of science.
- British/Indian spelling.

**Limits (from the 24 October review, R1):** home hero lead ≤ 25 words, its note ≤ 12; any page's opening or section lead ≤ 30; card or row body ≤ 25 on home and ≤ 35 elsewhere (≤ 60 for a condition's account and FAQ answers); paragraphs ≤ 60; labels ≤ 4 words. Say each thing once per page.

**Places (R2):** field work is named by state, never by town or city, everywhere on the site, including the Our work table, the map, photo captions, entry pages and their URLs. The only town on the site is Hyderabad, as the company's own address and headquarters.

### 2.6 Words we use, and words we don't

| Use | Avoid | Why |
|---|---|---|
| dried blood spot, finger-prick sample | single drop, one drop, a drop of blood | Distance from Theranos (1.4) |
| minimally invasive | painless | Not ours to promise |
| LitLife™ test | kit (outside "What comes in the kit"), product, buy, order, bulk, price list | Not a kit seller |
| healthcare technology company; develops tests | diagnostic lab, diagnostic tool, NGO, charity, social enterprise | Not what the company is |
| screens and confirms in one test | revolutionary, game-changing, limitless, any genetic test possible | Proof, not hype |
| "equipment-free or simple", always with "standard PCR equipment" | "equipment-free" on its own | The test needs a thermal cycler and a gel tank (see 5.2) |
| programme, district, state | beneficiaries, the poor, the needy | Respect |
| we develop, we validate | cutting-edge, seamless, empower, unlock, AI-powered | Reads as AI-written |

**Where we depart from the poster, and why:**

- The poster says "single drop of blood" and "painless finger prick". The site says "dried blood spot" and "finger-prick sample" (1.4).
- The poster's E in REASSURED reads "Equipment-free (minimal)". The site uses the criterion's own name, "Equipment-free or simple", with the line "Minimal laboratory infrastructure: standard PCR equipment, no specialised laboratory" (the current site's wording), so a lab manager never reads "equipment-free" next to a PCR step without the qualifier.
- The poster's 100% figures appear only with their study (1.4, point 6).
- Everything else follows the poster: "screening cum confirmatory", room-temperature transport, newborns at birth, the six-step workflow, the six-step testing model, the field table, "coming soon" items.

---

## 3. Site map and routes

### 3.1 Pages

**Since 25 October 2026: ten pages at launch.** An expert marketing reviewer tested every route for a distinct reader or search intent *and* enough confirmed content not to read thin ("a thin page is worse than no page"), and the user chose the result on 25 October 2026. The rule throughout: **hide the explanation, never the proof** (bios, answers, method detail, kit contents and a programme's account sit behind a click; the claim, the proof, approvals, equipment, coverage and the action stay visible).

| Route | Holds | Main action |
|---|---|---|
| `/` | Home, eight sections (the partners slide along the opening's foot) | Partner with us |
| `/technology/` | Method, compared, your lab, approvals and documents | Request the technical dossier |
| `/solutions/` | The range, in development, DMD and LGMD as rows (`#dmd`, `#lgmd`), Develop a test (`#develop`) | Choose a condition |
| `/solutions/sickle-cell-anaemia/` | SCA, sickle-beta, HbD | Talk to our scientific team |
| `/solutions/thalassaemia/` | Beta, alpha, HbE | Talk to our scientific team |
| `/solutions/spinal-muscular-atrophy/` | LitLife™-SMA (the reviewer: only if the SMA facts, item 5, are confirmed; kept at the user's choice of ten pages) | Talk to our scientific team |
| `/partners/` | Three doors as anchors (`#laboratories`, `#programmes`, `#funders`), the partners' logos, how a partnership starts | Choose how to partner |
| `/our-work/` | Field table, papers and patents, media, photos (with consent) | Get in touch |
| `/about/` | The founder, the team (`#team`), the fact block | Contact |
| `/contact/` | Form by audience, direct contact | Send enquiry |
| `/privacy/`, `/terms/`, `/404.html` | Utility | — |
| `sitemap.xml`, `robots.txt`, `llms.txt` | Machine files (Part 6) | — |

**Added later, in this order, each when its content exists:** `/partners/public-health-programmes/` (a one-page brief and rollout figures) · a DMD page (method, product) · `/our-work/<slug>/` entries (six programmes with photos and consent) · `/partners/hospitals-and-laboratories/` and `/partners/csr-and-ngos/` (a case study each) · an LGMD page · `/solutions/develop-a-test/` (a test built on request, documented).

**Why fewer pages raises enquiries:** every page is at least 80% confirmed content, so no buyer lands on a page of promises; each audience reaches its proof and its action in one click from any page; and the facts that block launch drop to the dozen that matter (ICMR reference, CDSCO status, mutation coverage, validation n, equipment, kit contents, patent numbers, people screened, logo permissions, the founder's words, the form backend, reply time).

**Condition pages under `/solutions/`** still match how clinicians and programme officers search, one page per condition with its products on it. **HbD** sits on sickle cell, **HbE** on thalassaemia.

### 3.2 Navigation

**Header (desktop):** Technology · Solutions ▾ · Partners · Our work · About · **[Partner with us]**

- *Solutions ▾* opens a panel: *Blood disorders* (Sickle cell anaemia, Thalassaemia) and *Muscle disorders* (Spinal muscular atrophy), and a row: *In development: coagulation panel, pharmacogenomics* · *Develop a test with us →* (`/solutions/#develop`). DMD and LGMD are rows on Solutions, not in the menu.
- *Partners* is a plain link to `/partners/`, and *[Partner with us]*, the one solid button (24 October 2026), goes there too.

**Header (phone and tablet):** logo and the menu, a panel listing the same items.

**Footer:** see 4.2.

### 3.3 Old addresses

Hosting stays on GitHub Pages (the user's choice, 25 October 2026), which cannot send real 301 redirects. Each old address gets a forwarding page: it moves the visitor on at once (keeping any `#` part), names the new page as canonical, asks search engines not to index it, and shows a link for anyone without script. An old `.php` address is a folder of that name holding the forwarding page (GitHub Pages answers `/x.php` by sending the visitor to `/x.php/`), and the 404 page names the new page for any old address it is shown at. A move to Cloudflare Pages would give real redirects later.

| Old | New |
|---|---|
| `/index.php` | `/` |
| `/about-us.php` | `/about/` |
| `/services.php` | `/solutions/` |
| `/impact-stories.php` | `/our-work/` |
| `/our-team.php`, the six `/<name>-details.php` | `/about/#team`, `/about/#<slug>` |
| `/partnerships.php`, `/partnerships/` | `/partners/` |
| `/programmes/` | `/partners/#programmes` |
| `/about/team/` | `/about/#team` |
| `/solutions/develop-a-test/` | `/solutions/#develop` |
| `/solutions/duchenne-muscular-dystrophy/`, `/solutions/limb-girdle-muscular-dystrophy/` | `/solutions/#dmd`, `/solutions/#lgmd` |
| `/contact-us.php` | `/contact/` |

---

## 4. Shared elements

### 4.1 Header

Logo (the full mark, unchanged: sun, tree, name, "Every Life Matters" stays in the logo file only), navigation as in 3.2. The header stays visible on scroll-up and hides on scroll-down. Over the hero film it is transparent; once the film is passed it takes a solid surface.

### 4.2 Footer

Four columns on desktop, stacked on phones.

1. **Logo** and the sentence: *"Lightening Lives develops REASSURED genetic tests for inherited disorders. Every Life Matters."*
2. **Solutions:** Sickle cell anaemia · Thalassaemia · SMA · DMD · LGMD · Develop a test with us
3. **Company:** Technology · Partners · Our work · About · Hospitals and laboratories · Public health programmes · CSR and NGOs
4. **Contact:** admin@lighteninglives.in · +91 91825 88191 (call or WhatsApp) · Hyderabad, Telangana · LinkedIn · YouTube · X

Bottom row: © 2026 Lightening Lives LLP · `[CONFIRM: LLPIN]` · Privacy · Terms

### 4.3 Proof strip

Three facts, always in this order, each a link to its evidence:

**Approved by ICMR** → `/technology/#approvals` · **Patents granted in India and Japan** → `/technology/#patents` · **15 sites, 9 states and Delhi** → `/our-work/#field`

Used under the home hero and on the Technology and audience openings. Nowhere else, so it stays meaningful.

### 4.4 Notice for patients and families

> **Looking for a test for yourself or your family?** We develop tests for hospitals, laboratories and health programmes, and do not test individuals directly. Ask your doctor, or write to us and we will tell you where testing is available near you.

`[CONFIRM: is this right? The brochure lists "patient, carrier and newborn testing" under "how we partner".]` Shown on Contact, on each test page above the FAQ, and in the 404 page.

### 4.5 Closing band

The last section of every page except Contact. One line, one action, chosen per page. Default:

> **Bring confirmed genetic diagnosis to your patients.**
> Tell us what you need to test for. Our scientists will reply within `[CONFIRM: two working days]`.
> **[Partner with us]**  ·  Or write to admin@lighteninglives.in

### 4.6 Evidence link

A small, consistent element: an icon, a source name and a year, linking to the paper, patent or document. Example: *Patent IN [number] · granted [year]*. Used wherever a claim has a source.

### 4.7 Questions

An accordion (native `<details>`), one open at a time, marked up as FAQPage (Part 6).

---

## 5. Pages

Each section lists: *purpose*, **key message**, copy, *section notes*.

---

### 5.1 Home `/`

**Title tag:** Lightening Lives | REASSURED genetic tests for inherited disorders
**Meta description (≤ 155 characters):** A Hyderabad healthcare technology company developing REASSURED genetic tests that screen and confirm inherited disorders in one test. Approved by ICMR.

*Why the home title names no disease (revised 25 October 2026, the user: "why the title tag is for sickle cell, thalassemia etc... Don't you think by doing that we are one dimensional"): the home page sells the company and its platform, not one test. It leads with the brand and the category (REASSURED genetic tests, inherited disorders). Each condition's search terms live on that condition's own page, where they rank better anyway. The same rule runs through every page's title below: company and category first, a condition only on its own page.*

**What the home page must say, and where it says it** (revised 25 October 2026 after the user's review: "The home page does not mention important things like we are reassured company"). Every message the poster makes has a place on the home page:

| Message (source) | Home section |
|---|---|
| An innovation-driven healthcare technology company (poster, brief) | 1 Hero lead · 4 Innovate |
| We develop **REASSURED** genetic tests, making molecular diagnosis **accessible to all** (poster's banner line) | 1 Hero lead · **5 REASSURED** |
| A **screening cum confirmatory** test: one test, no second confirmation (poster title, comparison) | **2 One test, three answers** · 7 Compared |
| Approved by ICMR · patents granted in India and Japan · globally published patent (poster badges) | 1 Proof strip · 2 · 5 |
| Newborns tested at birth; room-temperature transport; dried blood spot (poster comparison) | 2 · 3 The gap · 7 Compared |
| The **testing model**: collection to follow-up, with counselling and support groups (poster 03) | **6 Our testing model** |
| LitLife™ is a **platform**: two families of tests so far, HbD and HbE, coagulation and pharmacogenomics coming, the next on request (poster 04, brochure) | 8 One platform |
| Population and newborn screening across nine states and Delhi (poster 04) | 9 Where it works |
| Thanks to participants, clinicians and frontline health workers (poster acknowledgement) | 9 Where it works |
| Partners, work, founder | 10, 11, 13 |

#### 1. Hero (the film, kept)

*Purpose: say in five seconds who the company is, what it invented and why it matters. The existing opening film stays. The text and everything around it is new.*

**Key message:** An innovation-driven healthcare technology company that develops REASSURED genetic tests.

- **Eyebrow:** Innovate · Diagnose · Transform lives
- **Headline:** Confirmed genetic diagnosis, closer to the patient.
- **Lead (23 words):** We are an innovation-driven healthcare technology company developing REASSURED genetic tests for inherited disorders, built for hospitals, laboratories and public health programmes.
- **Primary action:** Partner with us → `/partners/#start`
- **Secondary action:** How the test works → `/technology/`
- **Note under the actions (12 words max):** Planning a screening programme? → `/partners/public-health-programmes/`
- **Proof strip** (4.3): Approved by ICMR · Patents granted in India and Japan · 15 sites, 9 states and Delhi

*Section notes: the film plays once, with the text beside it on wide screens and below it on phones. The text must never sit over the map (the R3 defect on wide screens). Headline lines rise in on load with GSAP (0.6 s, staggered); nothing else moves until the film ends. A pause control stays for readers who need still pages. The word REASSURED in the lead links to section 5.*

Alternative headlines for the company to choose from:
- *Genetic diagnosis, from screening to certainty.*
- *One test to screen. The same test to confirm.*
- *Inherited disorders, diagnosed where care begins.*

#### 2. One test, three answers · new

*Purpose: the invention in one picture. The poster's title calls it a "screening cum confirmatory" test; this section shows what that means.*

**Key message:** One test screens and confirms: it tells a patient from a carrier from someone unaffected, so no second test is needed.

- **Label:** Screening cum confirmatory
- **Heading:** Patient, carrier or unaffected. Read in one run.
- **Lead (≤ 30 words):** Mutation-specific PCR, read on an agarose gel, separates the three in a single test. Screening and confirmation happen together, from a dried blood spot.
- **The read-out** (three short labels under the picture): *One band, upper:* unaffected · *Both bands:* carrier · *One band, lower:* patient
- **Proof line:** Approved by ICMR · Patents granted in India and Japan, published internationally
- **Caption:** *Illustration. Real read-outs are on the Technology page.*

`[CONFIRM: that the band positions describe how a LitLife™ gel reads; the scientific team to supply a real gel image for Technology.]`

*Section notes: the gel picture is the page's signature: five lanes (ladder, unaffected, carrier, patient, no-template control). As the section enters the screen, each band travels down from its well to where it settles, the way DNA moves in a gel (GSAP, once, about 1.5 s); the carrier lane then rings in life green. Static under reduced motion.*

#### 3. The gap

*Purpose: make the problem felt. Speaks to all three audiences.*

**Key message:** Today, most families learn of an inherited disorder only after a child is born, and many screened people are never confirmed.

- **Label:** Why it matters
- **Heading:** Most families find out too late.
- **Lead:** Inherited blood and muscle disorders are common in India, and preventable harm begins before anyone knows. Today's testing loses people between the first test and the answer.

Three short points, each a number with its source, or a fact without one:

1. **Two tests, two visits.** A screening test finds a possible case. A second, confirmatory test needs a venous sample, often weeks later, and many people never come back.
2. **The cold chain.** Liquid blood must stay cold on its way to a laboratory, which most villages and district hospitals cannot guarantee.
3. **The newborn who waits.** Conventional confirmatory tests wait until 72 hours after birth `[CONFIRM: source]`. Families often leave hospital before then.

*Section notes: plain text on the page's ground, no cards. The three points reveal one after another (GSAP ScrollTrigger, once).*

Sourced numbers that may sit above the three points, if the company wants one: `[CONFIRM: one national figure with its source, e.g. the National Sickle Cell Anaemia Elimination Mission, launched July 2023, which aims to screen 7 crore people up to age 40 in 17 states (Ministry of Health and Family Welfare). Do not use the brochure's figures.]`

#### 4. Innovate · Diagnose · Transform

*Purpose: the heart of the positioning. A company that invents, not a supplier.*

**Key message:** We invent the science, it gives a confirmed answer, and that answer changes what happens next.

- **Label:** What we do
- **Heading:** From an invention to a family in care.

| | Heading | Body (≤ 25 words) | Link |
|---|---|---|---|
| **Innovate** | We design the chemistry. | Extraction-free, mutation-specific PCR that works directly on a dried blood spot. Patents granted in India and Japan. | How it works → `/technology/` |
| **Diagnose** | One test screens and confirms. | One result tells a patient from a carrier from someone unaffected, in newborns from birth. Approved by ICMR. | Our tests → `/solutions/` |
| **Transform lives** | A result that leads to care. | Each result feeds counselling, treatment and follow-up, so families can plan and programmes can act. | Our testing model → `#model` |

*Section notes: three tall columns, each led by its word in large display type in the primary blue. A line draws under each word in turn as the section enters (GSAP, once). On phones the columns stack.*

#### 5. REASSURED · kept from the current design (`#reassured`)

*Purpose: say plainly that REASSURED is what the company builds to, and what each letter means for a lab or a programme. The poster gives it the most space of anything; the home page must too. The user likes how the current home page shows it (25 October 2026), so its treatment and its lines stay; only the lead is new.*

**Key message:** Every LitLife™ test is built to the REASSURED criteria, so molecular diagnosis works where care happens, and is accessible to all.

- **Label:** REASSURED
- **Heading:** The standard we design to, letter by letter.
- **Lead (≤ 30 words):** We are an innovation-driven company developing REASSURED genetic tests, making molecular diagnosis accessible to all. REASSURED is a published set of nine criteria for tests that work where care happens.
- **The word:** REASSURED, set as nine large letters across the page. Each letter is a button; choosing one picks out its criterion below.
- **The nine criteria** (the current site's lines, kept):

| | Criterion | Line |
|---|---|---|
| **R** | Real-time connectivity | Test details are captured on a mobile app, so a programme can follow its screening as it happens. |
| **E** | Ease of specimen collection | A spot of blood from a finger prick, dried on a card. Minimally invasive. |
| **A** | Affordable | Priced for programmes that test whole populations, and for the health system that pays. |
| **S** | Sensitive | Few false negatives. Our validation data is shared with institutions on request. |
| **S** | Specific | Few false positives, which is what lets one test both screen and confirm. |
| **U** | User-friendly | Extraction-free, with an automation-friendly workflow and minimal training. |
| **R** | Rapid and robust | Quick turnaround and high-throughput screening. Cards keep at room temperature. |
| **E** | Equipment-free or simple | Minimal laboratory infrastructure: standard PCR equipment, no specialised laboratory. |
| **D** | Deliverable to end-users | Designed for one patient in a clinic and for large-scale public health programmes. |

- **Source line:** *Source: Land et al., Nature Microbiology (2019).*
- **Link:** How LitLife™ meets each one → `/technology/#reassured`

*Section notes: as on the current home page: the word in one row, letters spaced across the full width, in the primary blue; below it a 3 × 3 grid of the criteria, each with its letter. Choosing a letter (click, tap or arrow keys) fills it and its criterion title with life green; the others stay blue. On phones the word stays one row (letters scale down) and the criteria become a list. These lines replace 2.6's "Equipment-light": the criterion's own name, "Equipment-free or simple", is accurate once the line says "standard PCR equipment".*

#### 6. Our testing model · revised (`#model`)

*Purpose: show that the company stands behind the whole path from a finger prick to a family in care, not only the test. This is "Transform lives" made concrete, and it is the poster's own testing model. The laboratory's six steps move to Technology.*

**Key message:** We work with programmes from the first sample to follow-up: collection, transport, testing, reporting, treatment with counselling, and support.

- **Label:** Our testing model
- **Heading:** Six steps, from a finger prick to a family in care.
- **Lead:** A test only matters if its result reaches care. Our model follows each sample all the way.

1. **Collect.** A finger-prick sample on a card, in the community or at birth. Details go into the app.
2. **Transport.** The dried card travels to the nearest testing centre at room temperature.
3. **Test.** Extraction-free molecular testing with LitLife™.
4. **Report.** Results are recorded against each sample and shared with the care team.
5. **Treat and counsel.** Patient management, with genetic and social counselling for patients and carriers.
6. **Follow up.** Awareness programmes and patient support groups.

- **Link:** The laboratory method, step by step → `/technology/#method`

`[CONFIRM: which of steps 5 and 6 the company runs itself and which it runs with partners; the wording above says "our model", not "we provide".]`

*Section notes: six steps in a row on wide screens, joined by a thin line; steps 1 to 4 sit on the "test" side, 5 and 6 on the "care" side, divided by a small label. The line draws through the six as the section scrolls into view (GSAP, once). Representative photographs under steps 1, 3 and 5 until the company's own arrive. On phones, a vertical list.*

#### 7. Why institutions choose it

*Purpose: the comparison, in plain words. Hospitals and laboratories first.*

**Key message:** It removes the second test, the cold chain and the newborn's wait.

- **Label:** Compared
- **Heading:** What changes when you switch.

A compact comparison, three columns: *Today's screening* · *Today's confirmation* · *LitLife™*

| | Screening tests today | Confirmatory tests today | LitLife™ |
|---|---|---|---|
| Sample | Finger prick, 20–50 µl | Venous, 1–2 ml EDTA | Finger-prick dried blood spot |
| Transport | Cold chain | Cold chain | Room temperature |
| Confirmation needed | Yes | — | No: screens and confirms |
| Newborns | No | After 72 hours | At birth |
| Throughput | Low | Low | High |

- **Link:** Full comparison and evidence → `/technology/#compared`

*Section notes: the LitLife™ column sits on a raised surface with a thin green edge. Rows appear one by one as the table enters the screen. On phones the table becomes three swipeable cards (one per method) with the LitLife™ card first, or a stacked list per row; no horizontal page scroll. Source of the comparison: the poster.*

#### 8. One platform, many conditions · revised

*Purpose: show the range without being one-dimensional. LitLife™ is a platform: the same dried-blood-spot method is adapted to each condition. The tests built so far prove it; they are not the limit. No boxes in this section.*

**Key message:** One patented platform, applied so far to two families of inherited disorders, with more in development and the next built on request.

- **Label:** Our tests
- **Heading:** One platform. Built for any inherited condition.
- **Lead (≤ 30 words):** The LitLife™ method adapts to new mutations. So far it reads inherited blood and muscle disorders; coagulation and pharmacogenomics are next, and we build further tests on request.

**Blood disorders (haemoglobinopathies)**
- Sickle cell anaemia → `/solutions/sickle-cell-anaemia/`
- Sickle-beta thalassaemia → `/solutions/sickle-cell-anaemia/#sickle-beta`
- Beta thalassaemia → `/solutions/thalassaemia/`
- Alpha thalassaemia → `/solutions/thalassaemia/#alpha`
- HbD and HbE → their pages' sections

**Muscle disorders (musculopathies)**
- Spinal muscular atrophy (SMA) → `/solutions/spinal-muscular-atrophy/`
- Duchenne muscular dystrophy (DMD) → `/solutions/duchenne-muscular-dystrophy/`
- Limb-girdle muscular dystrophy (LGMD) → `/solutions/limb-girdle-muscular-dystrophy/`

**In development:** Blood coagulation panel · Pharmacogenomics

**The open place:** *Your condition next.* We develop and validate a test when a programme needs one. → `/solutions/develop-a-test/`

`[CONFIRM: that "adapts to new mutations" is how the scientific team would describe the platform.]`

*Section notes: the platform first, as a small diagram: one method in the middle, its applications around it (two families today, two in development as outlines, one dashed "next"). Then the two lists side by side, each name a large link. No boxes, no product codes in the headings.*

#### 9. Where the need is, and where we work · kept from the current design

*Purpose: show the need and the proof on one map: where inherited blood disorders are most common, and where the company already works. For programmes and funders. The user likes how the current home page shows it (25 October 2026); its layers, readouts and sources stay. Leads into Our work.*

**Key message:** The need is national, and we already work in nine states and Delhi.

- **Heading:** Where the need is, and where we work.
- **Layers** (a three-way switch; the map opens on the first):
  - **Sickle cell:** *Sickle cell disease is most common in a belt across central India, from Gujarat to Odisha.* Key: the central belt, where it is most common · other focus states of the national mission.
  - **Thalassaemia:** *Thalassaemia is found across India: on average, 3 to 4 people in 100 are carriers. Higher frequencies are reported in Punjab, Delhi, Gujarat, Maharashtra and West Bengal.*
  - **Our work:** *Population screening at 15 sites in nine states and Delhi, and newborn screening in Rajasthan and Maharashtra.* Key: population screening · newborn screening too.
- **Each state:** pointing at (or tapping) a state shows a short card: its name and what the chosen layer says about it.
- **Hint:** *Point at a state to see what the map says about it.* (On touch screens: *Tap a state…*)
- **Sources** (a disclosure): Sickle cell: Hockham et al., Scientific Reports (2018); National Sickle Cell Anaemia Elimination Mission, Ministry of Health and Family Welfare. Thalassaemia: National Health Mission, Guidelines for Prevention and Control of Hemoglobinopathies in India (2016); Mohanty et al., Journal of Community Genetics (2013); Madan et al., Indian Journal of Human Genetics (2010). *Indicative only, shown by state: frequencies differ more between communities than between states.*
- **Acknowledgement (one line, under the map):** *With thanks to every participant, clinician and frontline health worker who made this screening possible.*
- **Link:** See the work → `/our-work/#field`

*Section notes: as on the current home page: the map of India drawn on its grid with state borders, the states the layer marks filled in life green and named on the map; the others pale blue. States only, never towns (R2). The layer data and sources are already in `src/js/map/map-layers.js`. Switching layers recolours the states in about 0.4 s.*

#### 10. Our partners · new

*Purpose: show, by name, who already works with the company. For a hospital or a funder, the names of CSIR-CCMB and Tata Trusts beside the company say more than any claim.*

**Key message:** Leading science institutions, foundations and patient organisations already work with us.

- **Label:** Our partners
- **Heading:** In good company.
- **Lead (≤ 30 words):** We work with science institutions, foundations and patient organisations across India, from the laboratory bench to the screening camp.
- **Logos, in three groups** (from `content/assets/partners/collaborations-collage.png`):
  - *Science and incubation:* CSIR-Centre for Cellular and Molecular Biology (CCMB) · Atal Incubation Centre, CCMB · Nucleome
  - *Foundations:* Tata Trusts · Tata Steel Foundation
  - *Patient and community organisations:* Thalassemia and Sickle Cell Society · Cure SMA India · Sickle Cell Saksham Rajasthan Foundation · IAMD · Blood Warriors · Manasthya Foundation · Indigenous Development Organization (IDO) · NASCO
- **Link:** Partner with us → `/partners/`

`[CONFIRM: what each relationship is (collaborator, funder, incubator, programme partner, customer), each organisation's written permission to show its logo, vector logo files, and each organisation's preferred name. Until permission is in, show only those confirmed.]`

*Section notes: logos in one calm row per group, all shown in a single ink (canopy at 70%) so thirteen brands don't fight each other or the page; each turns to its own colours on hover or focus. No marquee, no auto-scrolling. On phones, two logos per row. Each logo links to the partner's site and has its name as alt text.*

#### 11. Our work (latest)

*Purpose: show the company is active: photos, papers, talks. Gives Our work visibility from the home page.*

**Key message:** Our work is in the field, in the lab and in print.

- **Label:** Our work
- **Heading:** In the field, in the lab, in print.
- Three newest entries from `/our-work/` (any kind): photo, kind (Field · Publication · Patent · Media), title, state or journal, date.
- **Link:** All our work → `/our-work/`

*Section notes: a row of three on desktop, a swipeable row on phones (Embla carousel, with arrows and dots, keyboard reachable). Photos must be the company's own (Part 9).*

#### 12. Ways to partner

*Purpose: route each audience to its partnership page.*

**Key message:** Whether you run a lab, a programme or a fund, here is what we do for you.

- **Label:** Partner with us
- **Heading:** Built for the people who run care.

| Heading | Body (≤ 25 words) | Link |
|---|---|---|
| Hospitals and laboratories | Add confirmed genetic testing for inherited disorders, with equipment you already have. Training and validation support included. | For laboratories → |
| Public health programmes | Screen and confirm in one visit, test newborns at birth, and send samples without a cold chain. | For programmes → |
| CSR and NGOs | Fund screening that ends in a confirmed diagnosis and a family in care, with data you can report. | For funders → |

`[CONFIRM: "training and validation support included"]`

*Section notes: three cards, the first larger, because labs are the first audience.*

#### 13. The people behind it

*Purpose: credibility. A scientist, not a salesperson.*

**Key message:** Founded by one of India's leading geneticists, who led national screening work for sickle cell anaemia.

- **Label:** Who we are
- **Heading:** Built by scientists.
- **Body:** Lightening Lives was founded by Dr. Giriraj Ratan Chandak, former Chief Scientist at CSIR-CCMB and former Director of CDFD, after 25 years of work in genetic and molecular diagnosis.
- **Quote:** `[CONFIRM: one sentence from Dr. Chandak, in his words, about why he founded the company.]`
- **Link:** About us → `/about/`

*Section notes: his portrait (`content/assets/people/founder-1.jpg`), large, with the quote beside it. No animation beyond a fade.*

#### 14. Closing band

> **Bring confirmed genetic diagnosis to your patients.** [Partner with us]

---

### 5.2 Technology `/technology/`

**Since 25 October 2026 (3.1): seven sections.** 1 Opening and proof · 2 Method (`#method`, six steps, the gel large; controls and reagents in a disclosure) · 3 Compared (`#compared`) · 4 What your laboratory needs (`#laboratory`; an unknown row reads "in the technical dossier") · 5 Approved, patented, published (`#approvals`: ICMR approved, both patents, papers as one list) · 6 Documents (`#documents`, on request until files exist) · 7 Closing: request the dossier. Cut: "Where today's testing stops" (the table's first two columns say it), REASSURED (one copy, on home) and the 3D kit (it belongs on test pages).

**Title:** How LitLife™ works: extraction-free DBS PCR | Lightening Lives
**Meta:** A patented genetic test that screens and confirms from a dried blood spot, with no DNA extraction. Method, comparison, evidence and REASSURED criteria.

*Audience: clinicians and laboratory heads. This is the page that must survive expert scrutiny.*

#### 1. Opening

- **Label:** Technology
- **Heading:** Molecular diagnosis, without the molecular laboratory's burden.
- **Lead:** LitLife™ reads disease-causing mutations directly from a dried blood spot. It needs no DNA extraction, no cold chain and no second test.
- **Proof strip** (4.3)

*Notes: the dried blood spot card in 3D, slowly turning, beside the text. On phones a still image.*

#### 2. Where today's testing stops (`#gap`)

**Key message:** Screening and confirmation are two tests today, and that is where people are lost.

Three columns:
- **Screening tests** (e.g. solubility test) suggest disease but cannot tell a carrier from a patient, and need a second test.
- **Confirmatory tests** (e.g. HPLC, electrophoresis) need a venous sample, a cold chain and a central laboratory, and are not reliable in newborns.
- **LitLife™** reads the gene itself: one finger-prick sample, room-temperature transport, a confirmed result, newborns at birth.

`[CONFIRM: the scientific team should check this description of the methods.]`

#### 3. The method (`#method`)

**Key message:** Six steps, all of them standard laboratory practice.

- **Heading:** Six steps, nothing hidden.
- **Lead:** The test uses mutation-specific PCR and agarose gel electrophoresis, methods taught in every molecular biology course. What we invented is how they work together on a dried spot.

1. **Spot.** A finger-prick sample is spotted on a barcoded card and dried.
2. **Punch.** A small disc is punched from the spot into a PCR tube.
3. **Mix.** A ready reaction mix specific to the mutation is added.
4. **Amplify.** PCR runs in a standard thermal cycler.
5. **Separate.** The product is run on an agarose gel.
6. **Read.** Bands show the result: unaffected, carrier or patient, checked against a marker, normal, carrier and no-template controls.

*Notes: the poster's six photographs, in sequence. The last step shows the gel image large, with each lane labelled (marker, patient, normal, carrier, NTC). This step is pinned on wide screens: the photos change as the reader scrolls. On phones, a vertical list.*

#### 4. Compared (`#compared`)

The full poster comparison (Method · Sample requirement · Mode of collection · Storage and transport · Pre-processing · Throughput · Confirmation required · Adults · Newborns · Sensitivity · Specificity), with existing screening tests, existing confirmatory tests and LitLife™.

- Sensitivity and specificity rows show `[CONFIRM: figures with sample size, reference method and study link]`. If the study cannot be linked at launch, the two rows are left out.
- Source line under the table: *Source: Lightening Lives validation data, [study, year].*

#### 5. What your laboratory needs (`#laboratory`)

**Key message:** If you run PCR today, you can run LitLife™ tomorrow.

| | |
|---|---|
| Equipment | Thermal cycler, gel electrophoresis tank and imager, card punch `[CONFIRM: full list]` |
| DNA extraction | None |
| Time to result | `[CONFIRM]` |
| Samples per run | `[CONFIRM]` |
| Storage of kit | `[CONFIRM: temperature, shelf life]` |
| Training | `[CONFIRM: on-site or remote, duration]` |
| Automation | Workflow can be automated `[CONFIRM: what this means: liquid handlers? plate format?]` |

#### 6. REASSURED (`#reassured`)

**Key message:** We build to the WHO's criteria for tests that reach the people who need them.

- **Heading:** Built to the REASSURED criteria.
- **Lead:** REASSURED is the set of criteria for diagnostic tests that work where care happens, published by Land and colleagues in *Nature Microbiology* (2019) and used by the WHO.

| Letter | Criterion | How LitLife™ meets it |
|---|---|---|
| R | Real-time connectivity | Test details are captured in a mobile app. |
| E | Ease of specimen collection | A finger-prick sample on a card; minimally invasive. |
| A | Affordable | Priced for population screening. `[CONFIRM: any figure?]` |
| S | Sensitive | `[CONFIRM: figure with study]` |
| S | Specific | `[CONFIRM: figure with study]` |
| U | User-friendly | No DNA extraction; a workflow that can be automated. |
| R | Rapid and robust | Quick turnaround; high-throughput screening. |
| E | Equipment-free or simple | Minimal laboratory infrastructure: standard PCR equipment, no specialised laboratory. |
| D | Deliverable to end-users | For individual testing and for large public health programmes. |

*Notes: the nine letters in a row across the screen. As the reader moves through, each letter lights up in green and its line appears. On phones, a vertical list, all visible.*

#### 7. Patents and approvals (`#patents`, `#approvals`)

**Key message:** Approved, patented, published.

- **Approved by ICMR.** `[CONFIRM: what exactly was approved, by which ICMR body, when, reference number; link to the letter or listing if public.]`
- **Patent granted in India.** `[CONFIRM: number, title, year]`
- **Patent granted in Japan.** `[CONFIRM: number, title, year]`
- **Published internationally.** `[CONFIRM: PCT/WO number]`
- **Regulatory status for sale as an in-vitro diagnostic.** `[CONFIRM: CDSCO licence or registration under the Medical Devices Rules 2017; ISO 13485. Hospitals' purchase teams will ask for this.]`

Each with an evidence link (4.6).

#### 8. Evidence (`#evidence`)

Peer-reviewed papers and validation studies about the method. Pulled from Our work (publications filter). `[CONFIRM: list of papers.]`

#### 9. What comes in the kit

The one place on this page a box appears: a 3D view of a LitLife™ kit that the reader can turn, with its contents labelled. `[CONFIRM: kit contents.]`

*Notes: three.js, loaded only when the section is near the screen. Still image on phones with low memory, on `prefers-reduced-motion`, and as the fallback.*

#### 10. Closing band

> **See the method in detail.** Request our technical dossier: method, validation and regulatory documents. [Request the dossier]

`[CONFIRM: does a technical dossier exist, or can one be prepared?]`

---

### 5.3 Solutions `/solutions/`

**Since 25 October 2026 (3.1): six sections.** 1 Opening ("One platform. A test for each inherited condition a programme needs.") · 2 Blood disorders · 3 Muscle disorders (SMA links; DMD and LGMD as rows, `#dmd`, `#lgmd`: "Molecular diagnosis available. Talk to us.") · 4 In development · 5 Develop a test with us (`#develop`, 5.5's five steps as one row, one action) · 6 Closing. Cut: "Every stage of care" and the 3D shelf.

**Title:** Solutions: REASSURED genetic tests for inherited disorders | Lightening Lives
**Meta:** One platform for screening and confirmatory genetic tests: inherited blood and muscle disorders so far, coagulation and pharmacogenomics next, and new tests on request.

#### 1. Opening

- **Label:** Solutions
- **Heading:** One platform. A test for each inherited condition a programme needs.
- **Lead:** Two families of disorders so far, two more in development, and the next one built on request.

#### 2. Blood disorders (`#haemoglobinopathies`)

- **Heading:** Haemoglobinopathies
- **Lead:** Inherited disorders of haemoglobin, among the most common single-gene conditions in India.

| Condition | What the test does (≤ 35 words) | Test | Link |
|---|---|---|---|
| Sickle cell anaemia | Screens and confirms in one test; tells patients from carriers. | LitLife™-SCA | → |
| Sickle-beta thalassaemia | Identifies the compound state often misread as sickle cell disease or trait. | LitLife™-SiBThal217 | → |
| Beta thalassaemia | Finds carriers and patients, including carriers mistaken for iron deficiency. | LitLife™-BThal | → |
| Alpha thalassaemia | Detects the common gene deletions that routine screening misses. | LitLife™-AlphaThal | → |
| HbD | Tells HbD from HbS, which look alike on some methods. | Available `[CONFIRM: product name]` | → |
| HbE | Identifies HbE and the risk of HbE/beta thalassaemia. | Available `[CONFIRM: product name]` | → |

#### 3. Muscle disorders (`#musculopathies`)

- **Heading:** Musculopathies
- **Lead:** Inherited muscle disorders, which children often live with for years before anyone names them.

| Condition | What the test does | Test | Link |
|---|---|---|---|
| Spinal muscular atrophy | Detects SMN1 deletions for diagnosis and carrier testing; SMN2 copy number guides prognosis. | LitLife™-SMA | → |
| Duchenne muscular dystrophy | Molecular diagnosis in boys, and carrier testing for mothers and sisters. | `[CONFIRM]` | → |
| Limb-girdle muscular dystrophy | Molecular confirmation that ends diagnostic uncertainty. | `[CONFIRM]` | → |

`[CONFIRM: SMN2 copy number is tested, as the brochure says?]`

#### 4. Every stage of care

**Key message:** The same tests serve patients, carriers and newborns.

Three short items: **Patients** (confirm a suspected case) · **Carriers and families** (find carriers; support couple counselling) · **Newborns** (test at birth, before symptoms).

#### 5. In development (`#in-development`)

- **Blood coagulation panel.** `[CONFIRM: one line on scope]`
- **Pharmacogenomics.** `[CONFIRM: one line on scope]`
- *Want early access or to take part in validation? Tell us.* → Contact

#### 6. The open place

> **Need a test we don't list?** Every test here began as a programme's need. → Develop a test with us

#### 7. What comes in the kit

One shelf, the only place outside test pages where boxes appear: the five kits in 3D, side by side, each turning towards the reader on hover. Each links to its condition page.

*Notes: one three.js scene with five boxes, lazy-loaded. Still image fallback.*

#### 8. Closing band

---

### 5.4 Test pages

#### 5.4.0 The template

**Since 25 October 2026 (3.1): seven sections.** 1 Opening (what the test does in one sentence; "About the condition" in a disclosure) · 2 What it detects (mutations and coverage, the result, who it is for; sub-conditions such as sickle-beta and HbD as subsections) · 3 Why a DNA test here (three lines) · 4 In the laboratory, with the kit (contents in a disclosure) · 5 Evidence and where it is used · 6 Questions · 7 Family notice and closing. DMD and LGMD (5.4.4, 5.4.5) are rows on Solutions until their facts arrive.

Every test page has these sections, in this order. A section is left out when its facts are missing, never filled with guesses.

1. **Opening.** Label (the family) · Heading (the condition and what the test changes) · Lead (≤ 30 words) · actions: *Talk to our scientific team*, *Download the product sheet* `[CONFIRM: product sheets]`.
2. **The condition.** What it is, how it is inherited, who it affects, what early diagnosis makes possible. ≤ 60 words, with one source.
3. **Where today's testing stops.** The specific gap for this condition. ≤ 35 words per point.
4. **What the test does.** What it detects, who it is for (patients, carriers, newborns), what result it gives.
5. **In the laboratory.** Sample, method, equipment, time, throughput, controls.
6. **What comes in the kit.** 3D view of the box; contents list.
7. **Evidence.** Approval, patents, papers, validation, with evidence links.
8. **Where it is used.** States, from the field table.
9. **Questions.** 4 to 6 FAQs, written for clinicians and programme officers.
10. **Notice for families** (4.4).
11. **Closing band.**

Each page carries MedicalWebPage + MedicalCondition + Product schema (Part 6).

---

#### 5.4.1 Sickle cell anaemia `/solutions/sickle-cell-anaemia/`

**Title:** Sickle cell anaemia genetic test: screening and confirmation | LitLife™-SCA
**Meta:** LitLife™-SCA screens and confirms sickle cell anaemia from a dried blood spot, tells patients from carriers and tests newborns at birth. Approved by ICMR.

1. **Opening**
   - **Label:** Blood disorders
   - **Heading:** Sickle cell anaemia, screened and confirmed in one test.
   - **Lead:** LitLife™-SCA reads the sickle mutation directly from a dried blood spot. One result separates patients, carriers and unaffected people, from birth onwards.

2. **The condition**
   Sickle cell anaemia is inherited when a child receives the sickle haemoglobin gene (HbS) from both parents. It causes pain crises, infections and anaemia, and is common in tribal communities of central, western and southern India. A child diagnosed early can be protected with timely care.

3. **Where today's testing stops**
   - The solubility test shows that sickle haemoglobin is present, but cannot tell a carrier from a patient.
   - HPLC confirms, but needs a venous sample, a cold chain and a central laboratory, and is not reliable in newborns.
   - Every positive screen needs a second visit, and many people never return.

4. **What the test does**
   - Detects the sickle mutation in the HBB gene. `[CONFIRM: mutation(s) detected, e.g. HBB c.20A>T]`
   - Result: unaffected, carrier (sickle cell trait) or patient (sickle cell disease).
   - For population screening, newborn screening, antenatal and family testing.

   **Sickle-beta thalassaemia (`#sickle-beta`).** LitLife™-SiBThal217 also identifies the compound state, in which one parent passes on HbS and the other a beta thalassaemia mutation. On routine tests it is often read as sickle cell disease or as trait. `[CONFIRM: which beta mutation(s) "217" refers to]`

   **HbD (`#hbd`).** HbD Punjab can look like HbS on some routine methods, and HbS/HbD causes disease. `[CONFIRM: how HbD is tested, and under which product]`

5. **In the laboratory:** finger-prick dried blood spot · no DNA extraction · mutation-specific PCR · agarose gel · controls on every run · `[CONFIRM: time, throughput]`

6. **What comes in the kit:** 3D LitLife™-SCA box (from `content/assets/sca-kit/`). `[CONFIRM: contents]`

7. **Evidence:** ICMR approval · patents · `[CONFIRM: papers]`

8. **Where it is used:** Population screening in Delhi, Rajasthan, Gujarat, Maharashtra, Madhya Pradesh, Chhattisgarh, Jharkhand, Telangana, Karnataka and Tamil Nadu. Newborn screening in Rajasthan and Maharashtra.

9. **Questions**
   - *Can it tell sickle cell trait from sickle cell disease?* Yes. It reads both copies of the gene, so one test shows whether a person has no sickle gene, one (a carrier) or two (a patient).
   - *Can newborns be tested?* Yes, at birth. A DNA test does not depend on the type of haemoglobin a newborn makes, which is what limits HPLC in the first days.
   - *Does the sample need a cold chain?* No. The dried card travels at room temperature.
   - *Does a positive result need confirmation by another test?* No. LitLife™-SCA is a screening and confirmatory test. `[CONFIRM: wording agreed with ICMR approval]`
   - *Does it support the National Sickle Cell Anaemia Elimination Mission?* `[CONFIRM: how the company wishes to describe its relationship to the mission; do not imply an endorsement that does not exist.]`

---

#### 5.4.2 Thalassaemia `/solutions/thalassaemia/`

**Title:** Thalassaemia genetic test: beta and alpha thalassaemia carriers | LitLife™
**Meta:** Genetic tests for beta and alpha thalassaemia from a dried blood spot. Find carriers missed by routine screening and support couple counselling.

1. **Opening**
   - **Heading:** Thalassaemia carriers, found before they become parents.
   - **Lead:** LitLife™-BThal and LitLife™-AlphaThal find patients and carriers from a dried blood spot, including the carriers routine blood tests miss.
2. **The condition.** Thalassaemias are inherited disorders in which the body makes too little of one of haemoglobin's chains. Two carrier parents can have a child with thalassaemia major, who needs lifelong transfusions. Finding carriers early lets couples make informed choices.
3. **Where today's testing stops.**
   - Beta thalassaemia carriers have small red cells and are often treated for iron deficiency instead.
   - Alpha thalassaemia carriers usually have normal HbA2 on HPLC, so routine screening misses them.
4. **What the tests do.** **Beta thalassaemia (`#beta`):** LitLife™-BThal detects `[CONFIRM: mutations covered, e.g. the common Indian mutations]`. **Alpha thalassaemia (`#alpha`):** LitLife™-AlphaThal detects `[CONFIRM: deletions covered]`. **HbE (`#hbe`):** common in eastern and north-eastern India; HbE with a beta thalassaemia gene can cause severe disease. `[CONFIRM: product]`
5. In the laboratory · 6. What comes in the kit (BThal and AlphaThal boxes, 3D) · 7. Evidence · 8. Where it is used: beta thalassaemia population screening in Maharashtra and Telangana; sickle-beta thalassaemia screening in Maharashtra, Gujarat and Telangana, including newborns in Maharashtra.
9. **Questions**
   - *Can it find carriers that HPLC misses?* Alpha thalassaemia carriers, often yes, because the test looks for the gene deletion itself rather than haemoglobin levels. `[CONFIRM]`
   - *Is it suitable for premarital and antenatal screening?* `[CONFIRM]`
   - *Can it be used before a transfusion history is known?* `[CONFIRM]`
   - *Does a positive result need confirmation?* `[CONFIRM]`

---

#### 5.4.3 Spinal muscular atrophy `/solutions/spinal-muscular-atrophy/`

**Title:** SMA genetic test: SMN1 deletion and carrier testing | LitLife™-SMA
**Meta:** LitLife™-SMA detects SMN1 deletions for diagnosis and carrier testing of spinal muscular atrophy, from a dried blood spot.

1. **Opening**
   - **Label:** Muscle disorders
   - **Heading:** Spinal muscular atrophy, diagnosed while treatment can still help most.
   - **Lead:** LitLife™-SMA detects the SMN1 deletion behind most cases of SMA, for diagnosis, carrier testing of parents and family testing.
2. **The condition.** SMA destroys the nerve cells that control muscles. Most cases come from losing both copies of the SMN1 gene. Treatments now exist, and they work best when given early, often before symptoms, which makes an early answer more valuable than ever.
3. **Where today's testing stops.** Babies with weakness are often thought to be undernourished. Families can wait months or years for a diagnosis, and testing is mostly in a few city laboratories.
4. **What the test does.** Detects homozygous SMN1 exon 7 `[CONFIRM: and exon 8]` deletion. Carrier testing for parents and siblings. `[CONFIRM: SMN2 copy number?]`
5. In the laboratory · 6. What comes in the kit (3D, from `content/assets/sma-kit/`) · 7. Evidence · 8. Where it is used `[CONFIRM: states]`
9. **Questions**
   - *Does it detect carriers?* `[CONFIRM: carriers have one SMN1 copy; does the test measure copy number?]`
   - *Can it guide treatment?* It gives the genetic diagnosis treatment depends on. Treatment decisions stay with the clinician.
   - *Can newborns be tested?* `[CONFIRM]`

---

#### 5.4.4 Duchenne muscular dystrophy `/solutions/duchenne-muscular-dystrophy/`

**Title:** DMD genetic test: diagnosis and carrier testing | Lightening Lives
**Meta:** Molecular diagnosis of Duchenne muscular dystrophy in boys, with carrier testing for mothers and sisters.

1. **Heading:** Duchenne muscular dystrophy, named early.
   **Lead:** A molecular diagnosis for boys with muscle weakness, and carrier testing that lets mothers and sisters plan with certainty.
2. **The condition.** DMD is caused by changes in the dystrophin gene on the X chromosome. It affects boys, who lose muscle strength through childhood. Mothers and sisters can be carriers. A molecular diagnosis ends the wait and makes family testing possible.
3. **Where today's testing stops.** Diagnosis often comes years after the first signs, after many tests and visits.
4. **What the test does.** `[CONFIRM: method (e.g. multiplex PCR, MLPA), what it detects (deletions, duplications), product name, whether a kit exists]`
5–9 as the template, each section included only once its facts are confirmed.

*This page is published only when the facts in step 4 are confirmed. Until then, DMD shows in the Solutions list with "Talk to us about DMD testing".*

---

#### 5.4.5 Limb-girdle muscular dystrophy `/solutions/limb-girdle-muscular-dystrophy/`

**Title:** LGMD genetic test: molecular confirmation | Lightening Lives
**Meta:** Molecular confirmation of limb-girdle muscular dystrophy, ending diagnostic uncertainty and guiding family counselling.

1. **Heading:** Limb-girdle muscular dystrophy, confirmed.
   **Lead:** LGMD is a group of inherited muscle disorders that are hard to tell apart. A molecular answer names the type and guides the family.
2. **The condition.** LGMD weakens the muscles of the hips and shoulders. It has many genetic types, which look alike in the clinic, so a family may go years without knowing which they have.
4. **What the test does.** `[CONFIRM: which types or genes, method, product]`

*Same publishing rule as DMD.*

---

### 5.5 Develop a test with us `/solutions/develop-a-test/`

**Since 25 October 2026 (3.1): not a page.** Its five steps and one action are Solutions' `#develop`; the route forwards there until a test built on request is documented.

**Title:** Custom genetic test development for programmes | Lightening Lives
**Meta:** Lightening Lives develops and validates new genetic tests for inherited conditions on request, for a community, a disorder or a screening programme.

1. **Opening**
   - **Label:** Develop a test
   - **Heading:** Tell us the condition. We develop the test.
   - **Lead:** Every LitLife™ test began with a programme's need. If yours needs a test that doesn't exist, our scientists can develop and validate it.
2. **When this makes sense.** A condition common in one community · a mutation profile specific to a region · a screening programme that needs a format no one makes.
3. **How it works.**
   1. **Brief.** You tell us the condition, the population and the setting.
   2. **Feasibility.** Our scientists assess the genetics and the method. `[CONFIRM: typical time]`
   3. **Development.** We design and optimise the test.
   4. **Validation.** We validate it against reference methods on real samples.
   5. **Rollout.** Training, supply and support for your programme.
4. **What we bring.** 25+ years in molecular genetics · a patented dried blood spot method · field experience in nine states and Delhi.
5. **Closing band:** *Propose a condition* → `/contact/?enquiry=develop`

---

### 5.6 Partners

#### 5.6.0 The hub `/partners/`

**Since 25 October 2026: one page, not four (3.1).** The reviewer found the three audience pages about 70% repetition of Technology and home, with one distinct section each. `/partners/` holds them as sections: 1 Opening, the three doors above the fold (`#start`; the button lands here) · 2 For hospitals and laboratories (`#laboratories`: evaluate on your samples, procurement, when to order; "Talk to our scientific team") · 3 For public health programmes (`#programmes`: screen and confirm in one visit, how a rollout runs, procurement route; "Plan a programme") · 4 For CSR and NGOs (`#funders`: what a funded programme delivers and what you receive; "Fund a programme") · 5 We work with (logos grouped) and how a partnership starts (four steps) · closing. Cut: "What partners say" (none on file). 5.6.1 to 5.6.3 below are the source for sections 2 to 4.

**Title:** Partner with Lightening Lives: hospitals, programmes, CSR and NGOs
**Meta:** Partner with Lightening Lives to bring confirmed genetic testing to your laboratory, screening programme or community. Our partners include CSIR-CCMB and Tata Trusts.

*Where every Partner with us button leads. It does two jobs: shows who already works with us, and sends each visitor to the way of partnering that fits them.*

1. **Opening.**
   - **Label:** Partners
   - **Heading:** Partner with us.
   - **Lead:** Laboratories, health programmes and foundations work with us to bring confirmed genetic diagnosis to the people who need it. Choose how you would like to work together.
2. **Three ways to partner (`#start`).** Three large choices, labs first:
   - **Hospitals and laboratories:** run LitLife™ tests in your own laboratory. → `/partners/hospitals-and-laboratories/`
   - **Public health programmes:** screen and confirm in one visit, at district or state scale. → `/partners/public-health-programmes/`
   - **CSR and NGOs:** fund or co-run screening that ends in care. → `/partners/csr-and-ngos/`
   - *Something else? Research, a new test, media:* → `/contact/`
3. **Our partners (`#partners`).** The three logo groups from home §10, each with one line on what the work together is `[CONFIRM per partner]`.
4. **How a partnership starts.** Four steps, in order:
   1. **A conversation** with our scientific team about your need.
   2. **A proposal:** the tests, the scale, training and timelines.
   3. **A pilot** or an evaluation on your own samples. `[CONFIRM]`
   4. **Rollout**, with support and reporting.
5. **What partners say.** Quotes from partner organisations, named and with permission. `[CONFIRM: none on file; leave the section out until there are two.]`
6. **Closing band:** *Tell us about your laboratory, programme or community.* [Start a conversation] → `/contact/`

Three pages follow, each written for one reader. Each opens with that reader's problem, shows only the proof that reader needs, and asks for one action.

#### 5.6.1 Hospitals and laboratories `/partners/hospitals-and-laboratories/`

**Title:** Genetic testing for hospitals and laboratories | Lightening Lives
**Meta:** Add confirmed genetic testing for inherited disorders to your laboratory, with no DNA extraction and standard PCR equipment.

1. **Opening.** Heading: *Confirmed genetic diagnosis, in your own laboratory.* Lead: *Run screening and confirmation in one test, on a dried blood spot, with the PCR equipment you already have.* Proof strip.
2. **What changes for your lab.** No DNA extraction · samples arrive at room temperature · one test instead of two · high throughput · results your clinicians can act on.
3. **What you need.** Link to `/technology/#laboratory`, with the short equipment list.
4. **How we work with you.**
   1. A conversation with our scientific team.
   2. Evaluation on your own samples. `[CONFIRM: offered?]`
   3. Training for your staff. `[CONFIRM]`
   4. Supply and ongoing support.
5. **For clinicians.** When to order a genetic test for an inherited disorder, and how LitLife™ results read. (Short, links to each condition page.)
6. **Evidence.** Approval, patents, papers.
7. **Questions.** Regulatory status · cost per test (`[CONFIRM: say "priced for population screening; ask for a quote"]`) · validation data · supply times · technical support.
8. **Closing:** *Evaluate LitLife™ in your laboratory.* [Talk to our scientific team]

#### 5.6.2 Public health programmes `/partners/public-health-programmes/`

**Title:** Genetic screening for public health programmes | Lightening Lives
**Meta:** Screen and confirm in one visit, test newborns at birth and transport samples without a cold chain. Used across nine states and Delhi.

1. **Opening.** Heading: *Screen and confirm in one visit.* Lead: *For district, state and national programmes: one finger-prick sample, room-temperature transport, a confirmed result, and newborns tested at birth.* Proof strip.
2. **The problem programmes face.** People lost between screening and confirmation · cold chain from village to laboratory · newborns who leave before testing.
3. **The testing model** (from the poster, six steps):
   1. **Sample collection** in the community or at birth.
   2. **Transport** to the nearest testing centre, at room temperature.
   3. **Molecular testing** with LitLife™.
   4. **Reporting**, recorded in the app.
   5. **Treatment**, with genetic and social counselling for patients and carriers.
   6. **Follow-up**, with awareness programmes and patient support groups.
4. **Where it has worked.** The map and the state list; newborn screening in Rajasthan and Maharashtra. Link to Our work.
5. **What we provide.** `[CONFIRM: scope. The brochure lists community screening and awareness camps, patient/carrier/newborn testing, genetic counselling, laboratory set-up, training and consultancy. Confirm which the company delivers itself and which through partners.]`
6. **Aligned with national priorities.** The National Sickle Cell Anaemia Elimination Mission (2023) and state newborn screening programmes. `[CONFIRM wording; no implied endorsement.]`
7. **Questions.** Procurement routes (`[CONFIRM: GeM listing?]`) · data and reporting · training of health workers · scale per month.
8. **Closing:** *Plan a screening programme with us.* [Start a conversation]

#### 5.6.3 CSR and NGOs `/partners/csr-and-ngos/`

**Title:** Fund genetic screening that ends in care | CSR and NGOs | Lightening Lives
**Meta:** Fund or co-run genetic screening that ends in a confirmed diagnosis, counselling and follow-up, with data to report.

1. **Opening.** Heading: *Fund screening that ends in a diagnosis, not a referral.* Lead: *Your support reaches a confirmed result, counselling and follow-up for every family, with data you can report to your board.*
2. **Why it matters.** Screening that stops at "possible case" helps no one. One test that confirms means each rupee reaches an answer.
3. **What a programme looks like.** The six-step model, in short. A camp, from planning to report. `[CONFIRM: a typical programme's size and duration]`
4. **What you receive.** `[CONFIRM: reports, photos, outcome data, alignment with CSR Schedule VII (health)]`
5. **Where we've worked.** States; link to Our work.
6. **Partners.** The foundations and patient organisations among our partners (Tata Trusts, Tata Steel Foundation and the community organisations in home §10), with permission. `[CONFIRM: permission.]`
7. **Closing:** *Fund a screening programme.* [Talk to us]

---

### 5.7 Our work `/our-work/`

**Since 25 October 2026 (3.1): five sections, no filter, no entry pages yet.** 1 Opening (no numbers strip until people screened is confirmed) · 2 Field programmes (`#field`: the state × condition table; each programme a card whose account expands in place; the map stays on home) · 3 Publications and patents (`#publications`, patents first) · 4 Conferences, media and video (`#media`, the poster first; videos load on a click) · 5 Photos, only with consent on record.

*This is the section the brief asks for: photos, publications and media showing the company's achievements and current projects. It gets a header link, a home section (5.1 §11) and links from every test and audience page, so it is seen from everywhere.*

**Title:** Our work: field programmes, publications and media | Lightening Lives
**Meta:** Genetic screening programmes across nine states and Delhi, peer-reviewed publications, patents and conference presentations from Lightening Lives.

#### 1. Opening

- **Label:** Our work
- **Heading:** In the field, in the lab, in print.
- **Lead:** Screening programmes across India, the research behind our tests, and where we have presented it.
- **Numbers strip:** 15 sites · 9 states and Delhi · `[CONFIRM: people screened]` · `[CONFIRM: newborns screened]` · `[CONFIRM: papers]` · 2 patents granted

#### 2. Filter

*All · Field programmes · Publications · Patents · Conferences and media · Photos.* Filtering changes the URL (`/our-work/?type=publications`) so each view can be shared.

#### 3. Field programmes (`#field`)

The map (as on home), then the poster's table, by state. **The site names states only, never towns or cities**, here as everywhere (marketing decision, 24 October 2026). The 15 sites stay a count, not a list.

| State | Sickle cell (population) | Sickle cell (newborn) | Sickle-beta thal. (population) | Sickle-beta thal. (newborn) | Beta thal. (population) |
|---|---|---|---|---|---|
| Delhi | ● | | | | |
| Rajasthan | ● | ● | | | |
| Gujarat | ● | | ● | | |
| Maharashtra | ● | ● | ● | ● | ● |
| Madhya Pradesh | ● | | | | |
| Chhattisgarh | ● | | | | |
| Jharkhand | ● | | | | |
| Telangana | ● | | ● | | ● |
| Karnataka | ● | | | | |
| Tamil Nadu | ● | | | | |

Under the table, one line: *Population and newborn screening at 15 sites across nine states and Delhi. Source: Lightening Lives field records.*

*Internal note, not for the site: states are derived from the poster's 15 sites and its map. `[CONFIRM: two sites' states, item 39.]`*

Then entries for programmes, one card per programme: photo, state (never the town), condition, kind (population or newborn), year, partner (with permission), one line on what it did. Each opens its own page.

#### 4. Publications (`#publications`)

A list, newest first: title, authors (company people in bold), journal, year, DOI link, one sentence on why it matters. Marked up as ScholarlyArticle.

`[CONFIRM: the list. Include papers on the method and validation first; then the founder's selected papers on haemoglobinopathies and genetic screening.]`

#### 5. Patents (`#patents`)

India (granted), Japan (granted), international publication, each with number, title, year and link.

#### 6. Conferences and media (`#media`)

Posters, talks, interviews, press. First entry: *A novel molecular screening cum confirmatory kit for sickle cell anaemia and other haemoglobinopathies*, poster at `[CONFIRM: conference name, city, date]`, with the poster image and a PDF to download.

Videos from the YouTube channel are embedded here, lazy-loaded (click to play, no third-party load before the click).

#### 7. Photos (`#photos`)

A gallery of field and laboratory photos, each captioned with state (never the town), activity and year. Opens in a lightbox (PhotoSwipe) with keyboard and swipe navigation.

Rules for photos:
- Only the company's own photos, of its own work. Never stock photos, never AI images, never place photos presented as the company's work.
- Consent recorded for every identifiable person; no children's faces without guardian consent; no patient identified by name or condition.
- Each photo has meaningful alt text.

#### 8. Entry pages `/our-work/<slug>/`

One template for all kinds: heading, kind, date, state (never the town) or journal, photos, a short account (what, where, with whom, what it led to), related test, related entries, closing band. Slugs are descriptive, e.g. `/our-work/newborn-sickle-cell-screening-maharashtra/`.

#### 9. Closing band

> **Want to run a programme like these?** [Talk to us]

---

### 5.8 About `/about/`

**Since 25 October 2026 (3.1): one page, the founder in full, the team by click.** 1 Opening: the one sentence with the fact block beside it · 2 Founder (`#founder`: portrait, a 60-word bio, his story in his own words when he writes it, Scholar and ORCID links) · 3 People (`#team`: co-founder, patron, advisers and team in one grid of portrait, name and role; a tap reveals a 40-word bio where one exists; nothing invented) · 4 Closing. Cut: Mission, Vision and Values as sections (the mission sentence stays in the opening) and "Our story" until the founder writes it. `/about/team/` forwards to `#team`.

**Title:** About Lightening Lives: healthcare technology from Hyderabad
**Meta:** (the one sentence, 1.1)

#### 1. Opening

- **Label:** About us
- **Heading:** We invent genetic tests that change what happens next.
- **Lead:** Lightening Lives is a Hyderabad healthcare technology company. We develop REASSURED genetic tests so inherited disorders are found early, confirmed once and cared for.

#### 2. Our story

`[CONFIRM: founding year and the story in the founder's words.]` Draft to confirm:

> Dr. Giriraj Ratan Chandak spent 25 years studying inherited disorders at CSIR-CCMB and CDFD, and led screening for sickle cell anaemia among communities that most needed it. He saw the same thing again and again: people screened, never confirmed, and children diagnosed too late. He founded Lightening Lives to build the test that would close that gap.

#### 3. Mission, vision, values

- **Mission:** To develop genetic tests that let every hospital, laboratory and programme screen and confirm inherited disorders, early and close to the patient.
- **Vision:** A future in which no family learns of an inherited disorder too late. `[CONFIRM: or the company's own vision statement, reworded without "single drop".]`
- **Values:**
  - **Every life matters.** Our tests are designed for the people hardest to reach.
  - **Evidence first.** We publish, we validate, we show our method.
  - **Science made usable.** A test is only as good as the places it can work.
  - **Partnership.** We work alongside clinicians, laboratories and programmes, not around them.

#### 4. Leadership (`#leadership`)

**Dr. Giriraj Ratan Chandak**, MD, PhD, DNB · Founder and CEO
Physician and scientist in molecular diagnosis of genetic disorders. Former Chief Scientist, CSIR-Centre for Cellular and Molecular Biology (CCMB), Hyderabad. Founding faculty member and former Director, Centre for DNA Fingerprinting and Diagnostics (CDFD). Led CSIR's sickle cell anaemia elimination work among underserved communities `[CONFIRM: exact name of the mission]`. Sir J.C. Bose Fellow; Fellow of the four Indian national science academies and of The World Academy of Sciences (TWAS). Links: `[CONFIRM: Google Scholar, ORCID, LinkedIn]`.

**Nidhi Chandak** · Co-founder `[CONFIRM: title]`
MSc in Operations Research; PG Diploma in Computer Applications. Leads data and operations, and works directly with patients, families and support groups.

#### 5. Patron and advisers

- **Dr. D. Nageshwar Reddy** · Patron · Founder, AIG Hospitals `[CONFIRM: permission to display, and current role wording]`
- **Prof. Kalyanaraman Kumaran** · Advisory Board `[CONFIRM: affiliation]`
- **Prof. G. V. Krishnaveni** · Advisory Board `[CONFIRM: affiliation]`

#### 6. Team (`#team`)

| Name | Role |
|---|---|
| Abhishek Chandak | Head, Finance |
| Manisha Arumalla | Scientific Officer |
| Punyasri PSKDB | Technical Officer |
| Jyothi Vislavath | Technical Officer |
| Mehraj Begum | Admin and Operations Executive |
| Pruthvi Bellamkonda | Accounts Executive |

Photos in `content/assets/people/`. `[CONFIRM: the list is current; each person agrees to appear.]`

#### 7. At a glance (`#facts`)

A plain fact block, written for people and for AI systems alike:

| | |
|---|---|
| Legal name | Lightening Lives LLP |
| Founded | `[CONFIRM]` |
| Headquarters | Hyderabad, Telangana, India |
| Founder and CEO | Dr. Giriraj Ratan Chandak |
| What we do | Develop REASSURED genetic tests for inherited disorders |
| Tests | LitLife™-SCA, -SiBThal217, -BThal, -AlphaThal, -SMA; HbD; HbE; DMD; LGMD |
| In development | Blood coagulation panel; pharmacogenomics |
| Approvals | ICMR |
| Patents | Granted in India and Japan; published internationally |
| Field work | 15 sites in nine states and Delhi |

#### 8. Closing band

---

### 5.9 Contact `/contact/`

**Title:** Contact Lightening Lives
**Meta:** Talk to our scientific team about genetic testing for your hospital, laboratory, programme or CSR initiative. Hyderabad, India.

1. **Opening.** Heading: *Talk to us.* Lead: *Tell us who you are and what you need. Our scientists will reply within `[CONFIRM]` working days.*
2. **Who are you?** Four choices that set the form and the reply route (`?enquiry=`):
   - Hospital or laboratory (`scientific`)
   - Public health programme (`programme`)
   - CSR or NGO (`funder`)
   - New test, research or media (`develop`, `media`)
3. **The form.** Name · organisation · role · email · phone (optional) · state · the condition(s) of interest (checkboxes) · message · consent line: *We use these details only to reply to you* (link to privacy). No CAPTCHA puzzle; an invisible spam check. `[CONFIRM: where submissions go: email, or a form service; GitHub Pages cannot process forms itself.]`
4. **Direct.** admin@lighteninglives.in · +91 91825 88191 (call or WhatsApp) · map link.
5. **Address.** D 306, Sy. No. 117, Indu Aranya Pallavi Apts, GSI SR, Bandlaguda, Hayath Nagar, Ranga Reddy, Hyderabad 500068, Telangana, India.
6. **Notice for patients and families** (4.4).

---

### 5.10 Privacy, terms and 404

- **Privacy `/privacy/`:** what the contact form collects and why; analytics used and what it records (disclosed here; no cookie banner, by the user's decision); how to ask for data to be deleted; India's Digital Personal Data Protection Act 2023 contact. `[CONFIRM: analytics tool]`
- **Terms `/terms/`:** information on the site is not medical advice; trademarks (LitLife™); limitation of liability.
- **404:** *This page has moved or no longer exists.* Links: Home · Solutions · Our work · Contact. Notice 4.4.

---

## 6. Search and AI visibility

### 6.1 Search terms by page

| Page | Main terms | Secondary |
|---|---|---|
| Home | genetic testing company India; REASSURED genetic test | dried blood spot genetic test |
| Technology | dried blood spot PCR; extraction-free PCR | DBS genetic testing; molecular screening |
| Sickle cell | sickle cell anaemia test; sickle cell genetic test India | sickle cell trait test; newborn sickle cell screening; sickle cell anemia test |
| Thalassaemia | thalassaemia carrier test; beta thalassaemia test | alpha thalassaemia test; HbE; thalassemia test India |
| SMA | SMA genetic test India; SMN1 deletion test | SMA carrier testing |
| DMD | DMD genetic test; Duchenne diagnosis India | DMD carrier testing |
| LGMD | LGMD genetic test | limb girdle muscular dystrophy diagnosis |
| Programmes | sickle cell screening programme; newborn screening India | National Sickle Cell Anaemia Elimination Mission |
| Labs | haemoglobinopathy testing for laboratories | molecular diagnostic kits India |
| CSR | CSR healthcare genetic screening | NGO sickle cell screening |

American spellings (anemia, hemoglobin, thalassemia) go in meta descriptions' alternates, image alt text where natural, and the schema's `alternateName`. Not in body copy.

### 6.2 Structured data

- **Organization** on every page: name, legalName, url, logo, description (1.1), address, founder, sameAs (LinkedIn, YouTube, X), contactPoint.
- **Person** for the founder on About, with `affiliation` and `alumniOf` (CSIR-CCMB, CDFD) and sameAs (Scholar, ORCID).
- **MedicalWebPage** + **MedicalCondition** on each test page (with `code` for ICD-10: D57 sickle cell, D56 thalassaemia, G12 SMA, G71.0 muscular dystrophy).
- **Product** for each LitLife™ test (brand, manufacturer, category "in vitro diagnostic"); no price.
- **FAQPage** on every page with Questions.
- **ScholarlyArticle** for each publication; **CreativeWork** for patents and posters; **ImageObject** with captions for photos.
- **BreadcrumbList** on inner pages.

### 6.3 Being quoted by AI systems

AI search tools quote pages that state facts plainly, with sources, in a stable place. So:

1. **One description, everywhere** (1.1).
2. **Answer-first openings.** Each test page's lead answers "what does this test do?" in one sentence.
3. **Questions in the words people ask,** with complete answers that make sense quoted alone.
4. **A fact block** on About (5.8 §7).
5. **`/llms.txt`:** the one sentence, the page list with one line each, the fact block, and contact.
6. **Real HTML text.** Nothing important lives only in images, the film, canvas or 3D. The film's words exist as page text.
7. **Sources linked.** Papers, patents, approval.
8. **Profiles that agree:** LinkedIn, Google Business Profile, Wikidata entry `[CONFIRM: create]`, all with the same description and links back.

### 6.4 Performance targets

Largest Contentful Paint ≤ 2.5 s on a mid-range phone on 4G; layout shift ≤ 0.1; interaction ≤ 200 ms. The hero film and 3D scenes must not delay the headline: text first, film after. 3D loads only near its section.

---

## 7. Motion, 3D and every screen

*Not copy: the rules the content depends on.*

### 7.1 Colours

From DESIGN.md, as the company heads chose. Everything else about the visual design is to be redesigned.

- **Primary: DNA blue** `#0369A1` for actions and emphasis, with deep blue `#0C4A6E` for text.
- **Secondary: life green** `#6EE7B7` for the one thing being pointed out in a section: the LitLife™ column, the confirmed result, the REASSURED letter in focus. Never for text on white (too pale).

### 7.2 Motion (GSAP)

- **GSAP with ScrollTrigger** for reveals and the few pinned sequences (home §4, Technology method).
- One idea of movement per section, at most. Reveals run once and finish in under 0.8 s.
- No scroll-jacking, no smooth-scroll library that changes how the page scrolls.
- Pinned sequences: wide screens only; phones get plain lists.
- `prefers-reduced-motion`: everything appears at once; the film shows its last frame; 3D shows a still.

### 7.3 3D (three.js)

Used in three places only: the hero film (kept), the dried blood spot card (Technology, home step 1), and the kits (test pages, Technology, Solutions shelf). Each scene loads only when near the screen, pauses when off it, and has a still image fallback. The reader can turn a kit by dragging; it never spins by itself for more than one turn.

### 7.4 Components and libraries

| Need | Library |
|---|---|
| Animation | GSAP + ScrollTrigger |
| 3D | three.js |
| Carousels (home Our work row, phone tables) | Embla Carousel |
| Photo lightbox | PhotoSwipe |
| Menus, dialogs | native `<dialog>` and `<details>`, with focus handling |
| Map | inline SVG of India's states |

### 7.5 Every screen (R3)

Content is written to survive the full range, from a 320 px phone to a 3840 px television and 5120 px ultrawide:

- Labels ≤ 4 words, so they never wrap badly on phones.
- Tables have a phone version (cards or stacked rows).
- On TVs, type scales with the screen and the line length stays at about 70 characters; the page does not become a thin strip.
- Hero text never overlaps the film's map at any size.
- Nothing depends on hover: every hover detail can also be tapped.

---

## 8. What we removed, and why

| Removed | Why |
|---|---|
| "Impact stories" and testimonials from the old site | No sources, names or consent on record. One describes DMD diagnosed in a six-year-old girl, which is rare enough that a clinician reading it would doubt the whole page. Replaced by Our work, with real programmes, photos and papers. Testimonials can return once each is verified and consented. |
| The "Golden Circle" (Why, How, What) | A consultancy framework, not a message; replaced by Innovate · Diagnose · Transform. |
| The old Partnerships page (logos without names) | Replaced by `/partners/`, with each partner named, grouped and shown with permission, plus a home section. |
| Separate Services page | Services now appear where each audience needs them. |
| Personal hobbies in biographies | They take credibility away on a page clinicians read. |
| The brochure's statistics (42 million, 10–15k, 20 lakh+, 1 in 1,400, 1 in 30–38, 48–64%) | AI-generated; not used. |
| "Single drop", "painless", "Bringing Hope Through Science", "Science Made Accessible" | Theranos risk, overpromise, or charity voice. |
| "Equipment-free" | Not accurate for a PCR test (2.6). |
| Unqualified 100% sensitivity and specificity | Only with the study beside it (1.4). |
| A news page or blog | Not asked for. Our work covers current activity; a blog can be added later for search. |
| Kit boxes on the home page | Not a kit seller (1.2). |

---

## 9. Facts to confirm

Each item blocks the section named. Grouped by who is likely to answer.

**Science and evidence (scientific team)**

1. Sensitivity and specificity: figures, sample size, reference method, study link (Technology §4, §6).
2. Mutations and deletions each test detects (each test page §4).
3. Time to result; samples per run; equipment list; kit storage and shelf life (Technology §5).
4. Kit contents for each test (test pages §6).
5. SMA: exon 7 and 8; carrier detection; SMN2 copy number; newborns (5.4.3).
6. DMD: method, what it detects, whether a kit exists, product name (5.4.4).
7. LGMD: types or genes, method, product name (5.4.5).
8. HbD and HbE: how they are tested, and product names (5.3, 5.4.1, 5.4.2).
9. What "217" in SiBThal217 refers to (5.4.1).
10. Coagulation panel and pharmacogenomics: one line each on scope (5.3 §5).
11. Check the description of today's methods (Technology §2).
12. Source for "conventional confirmatory tests wait 72 hours after birth" (Home §2).
13. Is "screening cum confirmatory" the wording agreed in the ICMR approval?

**Approvals, patents, regulation (management)**

14. ICMR approval: what, which body, date, reference, public link.
15. Patent numbers, titles, years: India, Japan, international.
16. CDSCO licence or registration; ISO 13485.
17. The relationship to the National Sickle Cell Anaemia Elimination Mission, in words that imply no endorsement that doesn't exist.
18. Procurement: GeM listing or other routes.

**Company (management)**

19. Founding year; LLPIN.
20. The founder's story and one quote, in his words.
21. Vision statement (the current one uses "single drop").
22. Exact name of the sickle cell mission Dr. Chandak led at CSIR.
23. Nidhi Chandak's title.
24. Patron's permission and wording; advisers' affiliations.
25. Team list current; each person's consent to appear.
26. Founder's Google Scholar, ORCID, LinkedIn.

**Offer (management)**

27. Do you test individuals? (4.4)
28. Evaluation on a lab's own samples; training; technical dossier; product sheets.
29. Which services you deliver yourself: camps, counselling, lab set-up, consultancy (5.6.2 §5).
30. Reply time for enquiries.
31. What CSR funders receive; a typical programme's size.

**Our work (operations)**

32. Numbers: people screened, newborns screened.
33. Programme entries: state (not town), condition, year, partner (with permission), photos.
34. Publications list.
35. The conference where poster v9 was shown: name, city, date.
36. Photos of the company's own work, with consent records.
37. Partners: what each relationship is, written permission to show each logo, vector logo files, preferred names (13 organisations in the collage; home §10, 5.6.0).
38. States worked in for SMA, DMD, LGMD.
39. Internal check: the poster's Bilaspur site is in Chhattisgarh and its Gudalur site in Tamil Nadu (as its map shows). Only the states appear on the site.

**Website (us)**

40. Hosting that supports redirects (3.3).
41. Where form submissions go (5.9).
42. Analytics tool, for the privacy policy.
