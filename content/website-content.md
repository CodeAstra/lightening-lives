# Lightening Lives: website content

Content strategy, site map, routes and page-by-page copy for the new lighteninglives.in, built on the production design (Design 11, Lumen; `DESIGN.md`).

23 October 2026 · Second full draft, for the company's review. It replaces the draft of 12 October 2026, which is kept in git history.

## How to read this file

- Text after a role name (**H1**, **Lead**, **Body**, **Tags** and so on) is copy, written to be published as it stands.
- Lines that start with `>` are notes for whoever builds or reviews the page. They are not published.
- `[PLACEHOLDER: …]` is content the company still has to supply.
- `[TBC: …]` is a statement to confirm before it is published. Part 8 gathers them all.
- Names in *italics* beside a section title are components of the production design, described in `DESIGN.md`.

## Contents

1. What changed since the first draft
2. Strategy
3. Site map and routes
4. Shared elements
5. Pages
6. Data: the sites, the map, the tests
7. Images and assets
8. To confirm before publishing
9. Notes for the build
10. What is left out of the current website, and why

---

## 1. What changed since the first draft

Two new sources arrived on 23 October 2026.

**The conference poster** (`content/Lightening Lives Poster v9-selection.png`), made for a haematology audience. It is the fullest account of the company's work so far, and it says things no earlier source did:

- The sickle cell test is **approved by ICMR**, holds **patents granted in India and Japan**, and has a **globally published patent**.
- It is a **screening cum confirmatory** test: one test does both jobs, so a positive result needs no second test.
- Cards travel and keep at **room temperature**. Conventional tests need a cold chain.
- Newborns can be tested **at birth**. Conventional confirmatory tests wait 72 hours.
- Test details are captured on a **mobile app**, for real-time monitoring of a programme.
- The laboratory method, in six steps: finger prick and spotting, punching the spot into a PCR tube, a mutation-specific reaction mix, PCR, agarose gel electrophoresis, reading the result.
- A **testing model** in six steps that runs from sample collection through transport, testing and reporting to treatment, counselling and follow-up.
- Four haemoglobinopathy kits exist and are photographed: **LitLife™-SCA**, **LitLife™-SiBThal217** (sickle cell anaemia and beta thalassaemia together), **LitLife™-BThal** and **LitLife™-AlphaThal**. Testing for **HbD** and **HbE** is also available.
- **Population and newborn screening at 15 sites across India**, from Delhi to Gudalur, for sickle cell anaemia, sickle-beta thalassaemia and beta thalassaemia.
- A **blood coagulation panel** and **pharmacogenomics testing** are coming soon. The first draft treated coagulation as a developed test; this draft moves it to "in development".
- Dr. Chandak is **Founder and CEO**, MD, PhD, DNB.

**The company's note** that it also has solutions for the **musculopathies**: spinal muscular atrophy (the LitLife™-SMA kit), Duchenne muscular dystrophy and **limb-girdle muscular dystrophy**. LGMD is new to the site. The poster, made for a blood conference, does not mention any of the three, so the website has to give them equal standing on its own.

What that changes in the content:

| Area | First draft | This draft |
| --- | --- | --- |
| The range | Five conditions in one list | Two families so far: haemoglobinopathies (sickle cell anaemia, beta and alpha thalassaemia, HbD, HbE) and musculopathies (SMA, DMD, LGMD), with coagulation and pharmacogenomics in development, and an open place for the next |
| The proof | "Validated by ICMR", CSIR-CCMB, national programmes, certified manufacturer | Approved by ICMR, patented in India and Japan, 15 sites of field screening, CSIR-CCMB. The manufacturer moves to Solutions |
| The argument | Dried blood spot, extraction-free, modest laboratory | Adds the three advantages a programme officer feels most: room temperature instead of a cold chain, screening and confirmation in one, and testing from birth |
| Technology page | Four decisions and a four-step sketch | The six-step method from the poster, with its photographs, and a comparison with existing tests |
| Programmes page | Awareness and counselling | Built around the six-step testing model: a test is the middle of the story |
| Our work page | Three places, no data | Fifteen sites and what was screened at each, as a table and on the map; photographs still to come |
| Solutions | One list | Two families, two columns, then the list; a short FAQ |
| New page | | Limb-girdle muscular dystrophy |
| Box designs | Written specifications for three boxes that did not exist | Dropped. The boxes exist and are photographed on the poster |
| Home page | Three new sections proposed | One new section (Who we are); the rest of the approved structure stays |

---

## 2. Strategy

### 2.1 Sources, and which one wins

| Order | Source | Where |
| --- | --- | --- |
| 1 | The conference poster, received 23 October 2026 | `content/Lightening Lives Poster v9-selection.png` |
| 2 | The company's note of 23 October 2026: solutions for SMA, DMD and LGMD; "Musculopathies: SMA kit" | This brief |
| 3 | The company's poster of 12 October 2026 | `content/WhatsApp Image 2026-10-12 at 10.32.05 AM.jpeg` |
| 4 | Box artwork for LitLife™-SCA and LitLife™-SMA, and photographs of the card | `content/assets/sca-kit/`, `content/assets/sma-kit/`, `content/assets/kit-reference-*` |
| 5 | The company brief of 1 October 2026 | `content/Lightening_Lives___Website_content__draft_1_.md` |
| 6 | The current website, read in full on 12 October 2026 | lighteninglives.in |
| 7 | The approved landing page and its design reference | `lumen.html`, `DESIGN.md` |

Where they disagree, the higher one wins, except where the company has since decided otherwise. The disagreements that matter:

| Question | What the sources say | This file |
| --- | --- | --- |
| "Single drop" | Both posters, the SMA box and the approved page say "a single drop of blood". The brief rules it out because it echoes Theranos. On 12 October the company reopened the question and chose "Genetic testing from a spot of blood on a card." | "A spot of blood on a card" when speaking plainly; "dried blood spot" when being exact. The company's vision statement keeps its own words. Part 8, item 1 |
| "Painless" | The poster: "a painless finger prick". The brief: "minimally invasive", never "painless" | Minimally invasive. A finger prick is not painless, and a clinician knows it |
| 100% sensitivity and specificity | The poster states both. The brief: no clinical performance figures on the website | Not in the copy. "Screening and confirmation in one test" and "approved by ICMR" carry the point. Where the figures could go if the company wants them: Part 8, item 6 |
| Approved or validated by ICMR | Poster: "Approved by ICMR". Box and brief: "Validated by ICMR" | "Approved by ICMR" in chips and headings, as the newest source says; the exact wording of the certificate to confirm |
| Blood coagulation disorders | The brief and the first draft: one of five developed tests. The poster: "coming soon" | In development, with pharmacogenomics |
| Who the tests are designed for | Poster, under D: "designed for individual testing and for large-scale public health programs". Brief: institutions only | Both are true at once. The test suits one patient in a clinic as well as a district programme; the company still works through institutions and does not test individuals directly |
| The large claims | The 12 October poster: "limitless", "any genetic test is possible", "revolutionizing", "endless possibilities" | Left out. The pages say what the company can stand behind: it develops a test for any inherited condition a programme needs |

### 2.2 What the company is

Lightening Lives is an innovation-driven healthcare technology company in Hyderabad. It develops molecular diagnostics for inherited conditions that are designed to work where the patients are: a spot of blood on a card, carried at room temperature, tested in a modest laboratory, screening and confirmation in one test. It builds those tests into solutions that hospitals, laboratories and public health programmes can run, and it stays with the programme through counselling and follow-up.

In one line, for the header, the preview card and search results: **Genetic testing from a spot of blood on a card.**

The three words under the company's name are still the site's structure. Each has a page.

| Word | What it means here | Page |
| --- | --- | --- |
| Innovate | A new way of running a genetic test: from a dried blood spot, without DNA extraction, on standard PCR equipment, screening and confirming at once | Technology |
| Diagnose | Those tests made into something an institution can run: the assay, the sample card, the laboratory method, the training | Solutions |
| Transform lives | What happens after a result: treatment on time, counselling for patients and carriers, support groups, screening that reaches whole districts | Programmes |

### 2.3 The message house

Every page draws from this. A page that has room for one thing says the roof.

**Roof: Molecular diagnosis, accessible to all.** The company's own phrase, on both posters.

| Pillar | The claim | The proof that stands beside it |
| --- | --- | --- |
| The sample | A spot of blood on a card. A finger prick, no tube, no cold chain, no pre-processing | The comparison with existing tests; the card itself |
| The test | Screening and confirmation in one test, from birth, extraction-free, many cards at a time, on equipment a district laboratory can have | ICMR approval; patents in India and Japan; the six-step method |
| The programme | A test is the middle of the story: collection, transport, testing, reporting, treatment and counselling, follow-up, with a mobile app watching over it | The six-step testing model; 15 sites of population and newborn screening |
| The range | Any inherited condition a programme needs. Two families so far, haemoglobinopathies and musculopathies, and the next can begin with the reader's institution | Tests for nine conditions across the two families; coagulation and pharmacogenomics in development |

**Foundation:** the REASSURED criteria the tests are designed to; the founder's 25 years in genetic and molecular diagnostics at CSIR-CCMB and CDFD; the MOU with CSIR-CCMB.

### 2.4 Who reads it, and what each needs to hear

| Reader | What they worry about | What convinces them | Path through the site | What they do |
| --- | --- | --- | --- | --- |
| District health officers and government programmes | Will it work in my district, at my scale, with my staff? Is it approved? | Room temperature transport, a modest laboratory, 15 sites already screened, ICMR approval, the mobile app | Home → Our work → Sickle cell anaemia → Programmes → Partnerships | Plan a screening programme |
| Hospital laboratories and clinicians (the company's first audience) | Can my laboratory run it? What does it detect? Is a result confirmatory? | The six-step method, what a laboratory needs, screening and confirmation in one, training | Home → Technology → Solutions → a test's page | Set the test up in their laboratory |
| Paediatricians, neurologists and newborn screening programmes | Can we find SMA, DMD or LGMD earlier, and what then? | Testing at birth, a diagnosis years sooner, carrier testing for the family, counselling | Home → Solutions → SMA / DMD / LGMD → Programmes | Ask about a test; plan newborn screening |
| NGOs and CSR funders | What would a screening programme involve, and what happens to the families it finds? | The testing model, the field accounts, support groups, the sites | Home → Programmes → Our work → Partnerships | Fund or run screening where it is needed |
| Research institutes and companies | Can you develop an assay for us? | Custom assays, patents, CSIR-CCMB, the open place | Technology → Develop a test | Start a conversation |
| Regulators and statutory bodies (ICMR, CDSCO) | Who is behind this, what is approved, who makes it, where is it? | About, the company in brief, the footer's addresses | About → Solutions → footer | Check, and leave |
| Individuals and families | Where can I get tested? | The notice for individuals, on every page where they might ask | Any | Speak to their doctor |

### 2.5 What every page should leave behind

In this order. A page with room for only one says the first.

1. Genetic testing from a spot of blood on a card.
2. Screening and confirmation in one test, built for the field: room temperature, a modest laboratory, from birth.
3. The proof: approved by ICMR, patented in India and Japan, screening at 15 sites, CSIR-CCMB know-how.
4. Two families so far, blood and muscle. The next condition can begin with the reader's institution.
5. A test is the middle of the story. Counselling, treatment and follow-up come with it. The company works with institutions.

### 2.6 How the pages persuade

The techniques the copy uses, so that whoever extends the site can use the same ones.

- **Contrast, not adjectives.** Where the brief says "innovative", the page shows the row of the table: cold chain against room temperature, 1 to 2 ml of venous blood against a spot on a card, 72 hours against birth. The reader draws the conclusion.
- **Proof beside the claim.** No sentence says a test works without the next saying who approved it, where it was used or who it was built with.
- **Specific nouns.** Nandurbar and Gudalur, not "underserved communities". A lancet, a card and a punch, not "an innovative sampling solution". A PCR machine and a gel tank, not "minimal infrastructure" on its own.
- **The loop.** The testing model's six steps are the shape of the Programmes page and the order of the home page: sample, laboratory, programme, result, what follows.
- **The open place.** Every list of the tests ends with the condition the reader needs next. The tests are "so far", never "only" and never "our range".
- **Two families, one method.** Wherever the blood conditions are named, the muscle conditions are named beside them. The poster's silence on them is a feature of the conference, not of the company.
- **One ask per audience.** The closing band changes its heading by page: "Planning sickle cell screening?", "Planning newborn screening for SMA?", "Have a condition in mind?".
- **Answer the objection where it arises.** Short disclosures on Solutions and Partnerships take the questions a laboratory head or a programme officer asks first.
- **Let the data be read, then say what it means.** The 15 sites are shown as a table and a map, then one sentence: the test has been run where the need is.

### 2.7 What the site must not read as

| Not this | How the content avoids it |
| --- | --- |
| A company that sells kits | The home page shows no box and lists no kit contents. "Kit" appears only where a page shows the box: under "In the box" on a test's page, and once on Solutions. The verbs are develop, approve, screen, confirm, train, counsel, work with |
| A charity or an NGO | No appeals and no slogans of the "bringing hope" kind. Field work is programme work: where, with whom, what was screened |
| A laboratory for the public | One notice, wherever an individual might try to make contact, says where to go instead |
| A conference poster | The poster's figures and tables belong in context, with the data. The website says what they mean and keeps the figures out of the copy (2.1) |

### 2.8 Voice

Clear, evidence-led and warm. Short sentences, plain verbs. The reader is a professional who has heard every claim before.

- **Say the thing itself.** "A lancet, a card and a spot of blood", not "a minimally invasive sampling solution".
- **Put proof beside the claim.**
- **Say where, not "underserved".**
- **The sample is "a spot of blood on a card", or a "dried blood spot".** Never "a single drop" or "one drop of blood". "One card" is fine.
- **Collection is "minimally invasive".** Never "painless".
- **The two families are "haemoglobinopathies" and "musculopathies"**, the company's own words. Each is explained in plain words the first time it appears on a page: "inherited disorders of haemoglobin"; "inherited conditions that weaken the muscles".
- **Indian English.** Anaemia, thalassaemia, haemophilia, haemoglobin, programme, organisation, counselling, personalised. Proper names and product names keep their own spelling: Thalassemia and Sickle Cell Society; LitLife™-SiBThal217.
- **Numbers.** Epidemiology may carry a number if a source stands beside it (the map does this already). No prices, procurement figures or clinical performance figures.
- **No patient names, and no photographs in which a patient or community member can be identified.** Staff, founders and advisers appear by name, with their consent.
- **Headings** are sentence case with no full stop. The home page's main heading and the film's three captions keep theirs.
- **Buttons** start with a verb and say what happens.

Words to leave out: revolutionary, limitless, endless, cutting-edge, world-class, state-of-the-art, game-changing, empower, seamless, holistic, ecosystem, leverage, hope, humbled, flagship, painless, single drop, "diagnostic tool", "solutions provider".

### 2.9 Search

What each page should be found for. Titles and descriptions are given with each page in Part 5.

| Page | Searches it answers |
| --- | --- |
| Home | lightening lives; dried blood spot genetic testing india; molecular diagnostics hyderabad |
| Technology | dried blood spot pcr; extraction-free genetic test; reassured diagnostics |
| Sickle cell anaemia | sickle cell screening test india; sickle cell confirmatory test dried blood spot; ICMR approved sickle cell kit; national sickle cell mission test |
| Thalassaemia | thalassaemia carrier screening test; beta thalassaemia molecular test india; alpha thalassaemia test; HbE HbD testing |
| SMA | sma newborn screening india; smn1 deletion test dried blood spot |
| DMD | duchenne genetic test india; dmd carrier testing |
| LGMD | limb girdle muscular dystrophy genetic test india; lgmd subtype test |
| Programmes | sickle cell awareness counselling programme; newborn screening programme india |
| Partnerships | sickle cell screening partner csr; genetic screening programme partner ngo |

Give the site an Organization entry in structured data (name, logo, the two addresses, telephone, email, the social accounts once chosen) and a FAQPage entry for the disclosures on Solutions. Nothing else.

---

## 3. Site map and routes

### 3.1 Pages

| Page | Route | What it is for | Opens |
| --- | --- | --- | --- |
| Home | `/` | The company in one scroll: what it does, the proof, who it works with | At launch |
| Technology | `/technology/` | Innovate. How a spot of blood becomes a result, compared with existing tests; the method; patents and approvals | At launch |
| Solutions | `/solutions/` | Diagnose. Two families, the tests developed so far, what a solution includes | At launch |
| Sickle cell anaemia | `/solutions/sickle-cell-anaemia/` | LitLife™-SCA | At launch |
| Thalassaemia and other haemoglobinopathies | `/solutions/thalassaemia/` | LitLife™-BThal, LitLife™-AlphaThal, LitLife™-SiBThal217, HbD and HbE | At launch |
| Spinal muscular atrophy | `/solutions/spinal-muscular-atrophy/` | LitLife™-SMA | At launch |
| Duchenne muscular dystrophy | `/solutions/duchenne-muscular-dystrophy/` | The DMD test | When Part 8 items 9 to 11 are answered |
| Limb-girdle muscular dystrophy | `/solutions/limb-girdle-muscular-dystrophy/` | The LGMD test | When Part 8 items 9 to 11 are answered |
| Develop a test | `/solutions/develop-a-test/` | The open place, and what is in development: the coagulation panel and pharmacogenomics | At launch |
| Programmes | `/programmes/` | Transform lives. The testing model, awareness, counselling, support groups, training | At launch |
| Our work | `/our-work/` | The 15 sites, as a table and a map; the work in pictures as photographs arrive | At launch, with the table; photographs later |
| About | `/about/` | Why the company exists, its founders, its facts | At launch |
| Team | `/about/team/` | Team, patron and advisory board | At launch |
| Partnerships | `/partnerships/` | Who the company works with, how a collaboration starts, its collaborators | At launch |
| Contact | `/contact/` | The four ways to begin, the form, the addresses | At launch |
| Privacy | `/privacy/` | What the site collects | At launch |
| Terms | `/terms/` | Terms of use | At launch |
| Not found | `/404.html` | Catches old and mistyped addresses | At launch |

> Until the DMD and LGMD pages open, both conditions appear as rows on Solutions and on the home page. Each row's link reads "Ask about this test" and goes to `/solutions/develop-a-test/#musculopathies`, where a section says the tests exist and how to ask (5.9, "Also developed"). The rows go up at launch; the pages follow, and the links then change to "About this test" and the pages' routes.

> **Left for later: News.** Set aside on 12 October 2026. When it comes back it sits in the footer at `/news/` and opens with real items only: talks Dr. Chandak gives, conferences the company presents at (the October 2026 poster is the first entry), media coverage.

### 3.2 Anchors

Long pages have anchors so that links from elsewhere land on the right part.

| Anchor | On |
| --- | --- |
| `/solutions/#haemoglobinopathies`, `/solutions/#musculopathies`, `/solutions/#in-development`, `/solutions/#faq` | Solutions |
| `/solutions/develop-a-test/#in-development`, `/solutions/develop-a-test/#musculopathies` | Develop a test |
| `/technology/#compared`, `/technology/#method`, `/technology/#laboratory`, `/technology/#patents` | Technology |
| `/programmes/#testing-model`, `/programmes/#counselling`, `/programmes/#training`, `/programmes/#from-the-field` | Programmes |
| `/our-work/#sites`, `/our-work/#map` | Our work |
| `/about/#founders` | About |
| `/about/team/#<person>`: one per entry, from the person's name in lower case with hyphens (`#abhishek-chandak`, `#manisha-arumalla`, `#punyasri-pskdb`, `#mehraj-begum`, `#pruthvi-bellamkonda`, `#jyothi-vislavath`) | Team |
| `/partnerships/#collaborators`, `/partnerships/#how-it-starts` | Partnerships |

### 3.3 Navigation

- **Header:** Technology · Solutions · Programmes · Our work · About, then the solid button "Partner with us", which goes to Partnerships. Five links and one button, as the design's header was drawn for.
- **Footer:** every page in 3.1 except the six under Solutions, which are reached from Solutions.
- **Within Solutions:** each test's page links to the other tests in its family at the bottom ("Also in this family"), and to Develop a test.

### 3.4 Old addresses

The current site's pages end in `.php`. People and search engines hold those addresses. Hosting is static, so the server cannot redirect; the Not found page sends readers on.

| Old address | Goes to |
| --- | --- |
| `/index.php` | `/` |
| `/about-us.php` | `/about/` |
| `/services.php` | `/solutions/` |
| `/impact-stories.php` | `/programmes/#from-the-field` |
| `/our-team.php` | `/about/team/` |
| `/abhishek-chandak-details.php`, `/manisha-arumalla-details.php`, `/punyasri-pskdb-details.php`, `/mehraj-begum-details.php`, `/pruthvi-details.php`, `/jyothi-details.php` | `/about/team/`, at that person's entry |
| `/partnerships.php` | `/partnerships/` |
| `/contact-us.php` | `/contact/` |

---

## 4. Shared elements

### 4.1 Header (*header*)

- **Name:** Lightening Lives
- **Tagline:** Every Life Matters
- **Links:** Technology · Solutions · Programmes · Our work · About
- **Button:** Partner with us
- **Skip link:** Skip to content
- **Small screens:** Menu · Close

### 4.2 Footer (*footer*)

- **About line:** An innovation-driven healthcare technology company in Hyderabad. We develop molecular diagnostics for inherited blood and muscle conditions that work from a spot of blood on a card, for hospitals, laboratories and public health programmes.
- **Label:** Innovate • Diagnose • Transform Lives
- **What we do:** Technology · Solutions · Programmes · Our work
- **Company:** About · Team · Partnerships · Contact
- **Contact:** admin@lighteninglives.in · +91 91825 88191 (call or WhatsApp) · LinkedIn · X (YouTube joins them when the channel has a video) `[TBC: the accounts, Part 8 item 31]`
- **Laboratory and corporate office:** Flat No. 201, 2nd Floor, S B Hare Krishna Towers, H.No. 4-7-195/2/55, HMT Nagar, Nacharam, Hyderabad, Telangana 500076
- **Registered office:** D-306, Sy. No. 117, Indu Aranya Pallavi, GSI (SR), Bandlaguda, Hayathnagar, Hyderabad, Telangana 500068
- **Disclaimer:** We work with hospitals, laboratories, clinicians, NGOs, CSR funders and government health programmes. We don't offer testing to individuals. Information on this website is general and is not medical advice.
- **Trade mark line:** LitLife™ is a trade mark of Lightening Lives LLP. `[TBC: ™ or ®]`
- **Disclosure:** Photo and map credits
- **Last line:** © 2026 Lightening Lives LLP · Privacy · Terms

### 4.3 Proof chips (*tag*, *proof tag*)

Three short tags, used together wherever the sickle cell test is named and singly elsewhere. A proof tag (filled) is for proof a reader can check; a plain tag describes.

- **Approved by ICMR** (proof) · **Patented in India and Japan** (proof) · **Dried blood spot** (plain)

Other tags used on test pages: **No DNA extraction** · **Room temperature transport** · **From birth** · **Made in India** `[TBC: Make in India mark permission, Part 8 item 24]`

### 4.4 Notice for individuals (*notice*)

Shown on Solutions, on each test's page, on Programmes, on Partnerships and on Contact.

- **Label:** For individuals
- **Body:** Looking for a test for yourself or your family? We work with institutions and don't test individuals. Please speak to your doctor or visit your nearest government health facility.

### 4.5 Closing band

The last section of every inner page, above the footer. Each page changes the heading to its own ask; where it does, the page's copy is in Part 5.

- **H2:** Tell us what your programme needs
- **Body:** Tell us the condition you need to test for and where the testing will happen. We will take it from there.
- **Solid button:** Partner with us
- **Line button:** Contact us

### 4.6 How an inner page opens

Inner pages have no film. Each opens on `mist` with a label, the H1 and a lead, in the same seven-and-five column split as a section's opening on the home page. Where a page has proof chips, they sit under the lead.

### 4.7 Questions (*disclosure*)

Short questions and answers, each a disclosure, under the heading "Questions we are asked". Used on Solutions and Partnerships. The answers are the long form of the notice and the closing band: plain, two or three sentences, with a link where there is more.

---

## 5. Pages

### 5.1 Home

- **Route:** `/`
- **Title:** Lightening Lives | Genetic testing from a spot of blood on a card
- **Description:** Molecular diagnostics for inherited blood and muscle conditions, from a dried blood spot. Approved by ICMR, patented in India and Japan, screened at 15 sites. Hyderabad.

> The approved landing page keeps its sections and their order. Each section below is marked **as approved**, **revised** or **new**. One section is new: "Who we are", a short text band before the vision, because the founder's standing is proof a programme officer or a regulator weighs. Everything else is the approved structure with revised words. The page's argument runs in the order of the testing model: the sample, the laboratory, the programme, the proof, where, the standard, who, what follows, who we are, why, how to begin.

#### Opening film (*opening film*) · revised

- **H1:** Genetic testing from a spot of blood on a card.
- **Lead:** Lightening Lives is an innovation-driven healthcare technology company in Hyderabad. We develop molecular diagnostics for inherited blood and muscle conditions that are designed to work where the patients are, and build them into solutions that hospitals, laboratories and public health programmes can run.
- **Solid button:** Partner with us
- **Line button:** See our solutions
- **Note:** Our sickle cell test is approved by ICMR and patented in India and Japan. We work with institutions and public health programmes.
- **Film captions** (the first is reworded; the film itself does not change):
  1. A spot of blood, dried on a card.
  2. From card to result without a DNA extraction step.
  3. Built for screening at the scale of a nation.
- **Button for readers who have asked for less motion:** Play the film

> Changed from the approved page: the heading was "Genetic testing from a single drop of blood."; the first caption was "A single drop of blood, dried on a card."; the lead named no conditions and said "affordable, rapid, scalable and extraction-free"; the note was "We supply institutions and programmes only."
>
> Two other headlines for the company to weigh against the chosen one. Both are the company's own words: "Molecular diagnosis, accessible to all." (from both posters) and "Genetic testing that reaches every community." (from the brochure draft). The chosen one says what the film shows, which is why it stays first.

#### How it works (*steps*) · revised

- **H2:** From one card to a national programme
- **Lead:** Our tests are simple, affordable and usable outside specialised laboratories, so that molecular diagnosis can reach everyone.

| Label | H3 | Body |
| --- | --- | --- |
| One card | A spot of blood, dried on a card. | That is the whole sample: a finger prick, a card, and no needle, no tube and no cold chain. Collection is simple and minimally invasive, and the card travels at room temperature to the nearest testing centre. |
| One batch | From card to result without a DNA extraction step. | A small punch from the dried spot goes straight into the reaction. The assay runs on standard PCR equipment in a modest laboratory, many cards at a time, and screens and confirms in the same test. |
| One programme | Built for screening at the scale of a nation. | We have run population and newborn screening at 15 sites across India, and developed a test for the National Sickle Cell Anaemia Elimination Mission. Test details are captured on a mobile app, so a programme can follow its screening as it happens. `[TBC: the app, Part 8 item 7]` |

- **Link:** How the technology works

> Changed from the approved page: the heading was "From one drop to a national programme"; the first step was labelled "One drop"; the bodies said less. "Screens and confirms in the same test" is true of LitLife™-SCA and LitLife™-SMA by the company's own descriptions; Part 8 item 5 asks whether it holds for the others.

#### Why (*why*) · revised

- **H2:** Molecular diagnostics without the limits of conventional testing
- **Lead:** Conventional genetic tests need venous blood, a cold chain, a specialist laboratory and, for screening, a second test to confirm. So they rarely reach the people who need them most. We design ours the other way round.
- **Label:** Genetic diagnosis, made
- **Five words:** Faster · Simpler · More affordable · More accessible · More scalable

| Title | Body |
| --- | --- |
| A spot of blood, not a tube | A finger prick onto a card. No venepuncture, no EDTA tube, no pre-processing. |
| Room temperature, not a cold chain | Cards keep and travel at room temperature, so samples can come from anywhere a health worker can reach. |
| Screening and confirmation in one | One test does both, so a positive result needs no second test and no second visit.* |
| Extraction-free molecular diagnostics | No separate DNA extraction step.* |
| From birth | Newborns can be tested at birth. Conventional confirmatory tests wait 72 hours.* |
| Minimal laboratory infrastructure | Standard PCR equipment and a gel tank. No specialised laboratory. |
| High-throughput, automation-friendly | Many cards in one run, on a workflow that can be automated. |
| For one patient or a whole district | Designed for a diagnosis in a clinic and for large-scale public health programmes. |

- **Footnote:** * Where applicable for developed assays.

> Changed from the approved page: the eight rows were the 12 October poster's "why" points. These keep the four that programme officers feel least ("extraction-free", "minimal infrastructure", "high-throughput", "large-scale programmes") and add the four the conference poster's comparison makes vivid: the tube, the cold chain, the second test, the 72 hours.

#### Portfolio (*kinds of test*, then *tests developed so far*) · revised

- **H2:** Our diagnostic portfolio
- **Lead:** Four kinds of genetic test, in two families so far, with more assays under development.

| H3 | Body |
| --- | --- |
| Monogenic disorders | Haemoglobinopathies and musculopathies: inherited disorders of haemoglobin, and inherited conditions that weaken the muscles. The two families we have developed tests for so far. |
| Pharmacogenetic variants | How a person's genes change their response to a medicine, for personalised therapy. In development. |
| Rare genetic disorders | Testing for rare and inherited conditions. `[TBC: available now, or in development]` |
| Custom molecular diagnostic assays | Assays designed for a research study or a clinical service. |

- **H3:** Developed so far
- **Body:** Each of these began with an institution that needed it. The next can begin with yours.

| Name | Label | Body | Tags | Link |
| --- | --- | --- | --- | --- |
| Sickle cell anaemia | Haemoglobinopathy | LitLife™-SCA screens for and confirms sickle cell anaemia in one test from a dried blood spot. Developed with CSIR-CCMB know-how for the National Sickle Cell Anaemia Elimination Mission. | Approved by ICMR (proof) · Patented in India and Japan (proof) · Dried blood spot | About this test |
| Thalassaemia and other haemoglobinopathies | Haemoglobinopathy | LitLife™-BThal and LitLife™-AlphaThal for beta and alpha thalassaemia, LitLife™-SiBThal217 for sickle cell anaemia and beta thalassaemia together, and testing for HbD and HbE. | Dried blood spot | About these tests |
| Spinal muscular atrophy | Musculopathy | LitLife™-SMA screens for and confirms SMA from a dried blood spot. Designed for newborn screening, where finding SMA before symptoms changes what treatment can do. | Dried blood spot · No DNA extraction | About this test |
| Duchenne muscular dystrophy | Musculopathy | A genetic test for DMD: an earlier diagnosis for a boy losing strength, and carrier testing for his mother and sisters. | `[TBC]` | About this test (until the page opens: Ask about this test, 3.1) |
| Limb-girdle muscular dystrophy | Musculopathy | A genetic test for LGMD, where the first symptom and a diagnosis are often years apart, and the subtype decides the care. | `[TBC]` | About this test (until the page opens: Ask about this test, 3.1) |
| In development | Coming soon | A blood coagulation panel for inherited bleeding disorders, and pharmacogenomics testing. | | What we are developing |
| The condition you need next | | Tell us what your programme or laboratory needs to detect. We develop the test, to the same REASSURED standard as the ones above. | | Talk to us about a new test |

> Changed from the approved page: five rows become seven; the lead and the "developed so far" line no longer say "these five are all for monogenic disorders"; "flagship" is gone; each row's "About the condition" disclosure moves to that test's page and a link takes its place. Until the DMD and LGMD pages open, their links go to Develop a test (3.1).

#### Evidence (*evidence*) · revised

- **H2:** What stands behind the tests

| H3 | Body |
| --- | --- |
| Approved by **ICMR** | LitLife™-SCA, our sickle cell test, is approved by the Indian Council of Medical Research. `[TBC: exact wording, Part 8 item 4]` |
| Patented in **India and Japan** | The technology behind our tests holds patents granted in India and Japan, and a patent published internationally. `[TBC: what the patents cover, Part 8 item 3]` |
| Working with **CSIR-CCMB** | An MOU with the CSIR-Centre for Cellular and Molecular Biology, Hyderabad, covers developing and commercialising the sickle cell assay. |
| Proven at **15 sites** | Population and newborn screening in nine states and Delhi, from Udaipur to Gudalur, and a test developed for the National Sickle Cell Anaemia Elimination Mission. |

> "ICMR", "India and Japan", "CSIR-CCMB" and "15 sites" carry the bar of sun amber. Changed from the approved page: "Built for national programmes" folds into the fourth column, and "Made by a certified manufacturer" moves to Solutions, under "How a test arrives".

#### Map (*the map*) · revised

- **H2:** Where the need is, and where we work
- **Choices:** Sickle cell · Thalassaemia · Our work
- **Sickle cell:** Sickle cell disease is most common in a belt across central India, from Gujarat to Odisha.
- **Thalassaemia:** Thalassaemia is found across India: on average, 3 to 4 people in 100 are carriers. Higher frequencies are reported in Punjab, Delhi, Gujarat, Maharashtra and West Bengal.
- **Our work:** Our laboratory is in Hyderabad. We have run population and newborn screening at 15 sites across India, from Delhi to Gudalur.
- **Hint:** Point at a state to see what the map says about it. (On touch screens: Tap a state to see what the map says about it.)

> The sickle cell and thalassaemia layers, their keys and sources are unchanged. The "Our work" layer changes: it pins the 15 sites in Part 6.1 instead of four places, and the state lines for the states that have a site change to match (Part 6.2). The chips name the site and what was screened there. With 15 pins, show the chip on pointing or picking rather than all at once (Part 9).

#### REASSURED (*REASSURED*) · revised

- **H2:** The standard we design to, letter by letter
- **Lead:** REASSURED is a published set of nine criteria for diagnostic tests that work in low-resource settings. Here is what each one means in our tests.

| Letter | Criterion | Meaning |
| --- | --- | --- |
| R | Real-time connectivity | Test details are captured on a mobile app, so a programme can follow its screening as it happens. `[TBC: Part 8 item 7]` |
| E | Ease of specimen collection | A spot of blood from a finger prick, dried on a card. Minimally invasive. |
| A | Affordable | Priced for programmes that test whole populations, and for the health system that pays. |
| S | Sensitive | Few false negatives. |
| S | Specific | Few false positives. |
| U | User-friendly | Extraction-free, with an automation-friendly workflow and minimal training. |
| R | Rapid and robust | Quick turnaround and high-throughput screening. Cards keep at room temperature. |
| E | Equipment-free or simple | Minimal laboratory infrastructure: standard PCR equipment, no specialised laboratory. |
| D | Deliverable to end-users | Designed for one patient in a clinic and for large-scale public health programmes. |

- **Source:** Land et al., *Nature Microbiology* (2019)

> Changed from the approved page: the criterion names stay as published; each meaning is now what the company does about that criterion, taken from the conference poster's own REASSURED band and reworded to the vocabulary in 2.8. The S lines keep the published meanings; the poster's figures are a Part 8 question.

#### Who we work with (*audiences*, *notice*) · revised

- **H2:** We work with institutions
- **Lead:** Hospitals, laboratories and public health programmes come to us with a condition they need to screen for or diagnose. Most of that work begins as a collaboration.

| H3 | Body |
| --- | --- |
| Hospitals, laboratories and clinicians | Genetic tests for inherited blood and muscle conditions, designed to run with minimal laboratory infrastructure. We help set the method up and train your staff. |
| District health officers and government programmes | Tests developed for national health programmes, for screening at population scale, with counselling and follow-up alongside. |
| NGOs and CSR funders | A partner for large, population-level screening: the testing, the method for the field, and support for the families it identifies. |

- **Link:** How a collaboration works
- **Notice:** as 4.4

> Changed from the approved page: the lead was "Our tests are supplied in bulk, to institutions and government programmes."

#### Programmes · revised

- **H2:** A test is the middle of the story
- **Lead:** After the result come treatment, counselling and follow-up. We run awareness and counselling programmes, mostly on behalf of the government, and help set up patient support groups.
- **Body:** Sample collection, transport, testing, reporting, treatment with counselling, follow-up: our testing model covers all six, so that a result leads somewhere.
- **Link:** See our programmes
- **Three photographs:** the three newest entries from Our work (5.11), each labelled with its place, under the heading "From our work". Until the company's photographs arrive, the approved page's three place photographs stay under their present heading, "Where our field work has taken us", labelled as places and never captioned as the company's work.

> Changed from the approved page: the heading was "Awareness and counselling, alongside the tests". The photographs' heading becomes "From our work" only when the photographs are the company's own.

#### Who we are · new

- **Label:** Who we are
- **H2:** Founded by a physician and scientist
- **Body:** Lightening Lives was founded by Dr. Giriraj Ratan Chandak, formerly Chief Scientist at the CSIR-Centre for Cellular and Molecular Biology and a former Director of the Centre for DNA Fingerprinting and Diagnostics, with Mrs. Nidhi Chandak. The company draws on more than 25 years of work in genetic and molecular diagnostics.
- **Links:** About the company · Meet the team

> Text only. The founders' portrait belongs on About and Team, not here. This is the one new section; if the company prefers the approved page's length, it can be dropped and nothing else moves.

#### Vision (*vision*) · as approved

- **Label:** Our vision
- **Statement:** To make precision genetic diagnosis accessible to every individual, through innovative technologies that need only a single drop of blood.

> The vision is the company's own sentence, from its poster. It is the one sentence on the site in which "a single drop of blood" remains. A version without it, for the company to consider: "To make precision genetic diagnosis accessible to every individual, through innovative technologies that need no more than a spot of blood on a card."

#### Contact (*contact actions*) · revised

- **H2:** Tell us what your programme needs
- **Lead:** Choose where you would like to begin.
- **Actions:** Explore a partnership · Request tests · Ask about awareness and counselling · Talk to sales
- **Label:** Write or call
- **Details:** admin@lighteninglives.in · +91 91825 88191
- **Note:** We work with institutions. Each request is discussed on its own terms, based on your institutional or regulatory requirements.

> Changed from the approved page: the note was "Orders are institutional and in bulk. Order details are discussed per request…". Each action goes to Contact with that subject chosen; until the form exists it opens an email, as now.

---

### 5.2 Technology

- **Route:** `/technology/`
- **Title:** Technology | Lightening Lives
- **Description:** How Lightening Lives runs a genetic test from a dried blood spot: no DNA extraction, room temperature transport, screening and confirmation in one, on standard PCR equipment. Patented in India and Japan.

#### Opening

- **Label:** Innovate
- **H1:** How a spot of blood on a card becomes a genetic diagnosis
- **Lead:** Conventional genetic testing was designed for the laboratory. We designed ours for the places where testing has to happen: a primary health centre, a tribal district, a maternity ward a day's journey from the nearest genetics laboratory.
- **Chips:** Approved by ICMR (proof) · Patented in India and Japan (proof) · Dried blood spot

#### Where conventional testing stops (*audiences*: three columns)

- **H2:** Where conventional testing stops

| H3 | Body |
| --- | --- |
| Screening tests | Quick and cheap, but every positive result needs a second, confirmatory test. In a district programme the second test is often the one that never happens. |
| Confirmatory tests | One to two millilitres of venous blood, a cold chain to the laboratory, pre-processing before the assay, and a laboratory that few districts have. For a newborn, a wait of 72 hours. |
| What a programme needs | A sample a health worker can take anywhere, a result that needs no second test, a laboratory within reach, and a cost that works for a whole population. |

#### Compared (`#compared`)

- **H2:** The same question, three ways of answering it
- **Lead:** How LitLife™ compares with the tests a programme would otherwise use.

| | Conventional screening tests | Conventional confirmatory tests | LitLife™ |
| --- | --- | --- | --- |
| Sample | 20 to 50 µl of blood | 1 to 2 ml of EDTA blood | A spot of blood on a card |
| Collection | Finger prick | Venepuncture | Finger prick |
| Storage and transport | Cold chain | Cold chain | Room temperature |
| Pre-processing | Yes | Yes | None |
| Throughput | Low | Low | High |
| A second test to confirm | Yes | No | No |
| Newborns | No | After 72 hours of birth | At birth |

- **Line under the table:** From our presentation to the haematology community, October 2026. `[TBC: name the conference]`

> The poster's table also has rows for specificity and sensitivity. They are left out here (2.1). Part 8 item 6 asks the company whether to add them, and where.

#### The method (`#method`; *steps*, numbered, with the poster's six photographs)

- **H2:** From card to result in six steps

1. **Collect.** A health worker cleans the fingertip, pricks it with a single-use lancet and lets the blood fall into the circle on the card. The spot dries, the cover closes over it, and the card travels at room temperature.
2. **Punch.** In the laboratory a small punch takes a disc from the dried spot straight into a PCR tube. There is no DNA extraction step.
3. **Prepare.** The reaction mix is specific to the mutation being looked for.
4. **Amplify.** PCR, on a standard thermal cycler. Many cards run in one batch.
5. **Separate.** Agarose gel electrophoresis.
6. **Read.** The result is visualised and interpreted, with controls alongside: affected, carrier or unaffected. `[TBC: the readout, and whether any assay reads out differently, Part 8 item 8]`

> Pictures: the six photographs from the poster's workflow strip, in order (Part 7). Steps 1 and 2 can use the film's stills until the originals arrive.

#### What a laboratory needs (`#laboratory`; *rows*)

- **H2:** What a laboratory needs

| Title | Body |
| --- | --- |
| Equipment | A thermal cycler, a gel electrophoresis tank and a punch: the equipment of a district or hospital laboratory, not a genetics institute. `[TBC: the exact list, Part 8 item 14]` |
| Space and storage | A bench. Cards keep at room temperature, so no cold chain for samples. `[TBC: reagent storage]` |
| People | Laboratory staff who have run PCR before, or who have been trained. We train them. |
| Time | `[TBC: the usual turnaround from card to report]` |

#### Monitoring (*rows*, one)

- **H2:** Seeing the programme as it happens
- **Body:** Test details are captured on a mobile app at the point of collection, so a programme can follow its screening in real time: how many samples, from where, and what came back. `[TBC: Part 8 item 7: the app's name, who uses it, what it records, and whether it may be shown]`

#### Patents and approvals (`#patents`; *evidence*)

- **H2:** Patented, approved, published

| H3 | Body |
| --- | --- |
| Patents granted in **India and Japan** | For the technology behind our dried blood spot tests. `[TBC: patent numbers and titles; what is claimed]` |
| A **globally published** patent | `[TBC: the PCT publication number]` |
| Approved by **ICMR** | LitLife™-SCA is approved by the Indian Council of Medical Research. |
| Built on **CSIR-CCMB** know-how | An MOU with the CSIR-Centre for Cellular and Molecular Biology covers developing and commercialising the sickle cell assay. |

#### The card

- **H2:** A card made for the field
- **Body:** The card opens like a matchbook. Its cover carries our logo and protects the sample. Inside, a circle on filter paper shows where the spot goes. A barcode and a code identify each card, and the back has room for the person's name, age, sex and the date.

> Picture: `drop-blank.webp`, the drawn card. The photographs in `content/assets/kit-reference-*` are internal: they show a handwritten name and a real sample code.

#### REASSURED (*REASSURED*)

- As on the home page: the heading, the lead, the nine criteria with the company's meanings, and the source.
- **Body under it:** The criteria were published in 2019 as an update to ASSURED, the list the World Health Organization's tropical disease research programme drew up for diagnostic tests in places with few resources.

#### Research and development

- **H2:** What we are working on
- **Body:** Our portfolio covers four kinds of genetic test: monogenic disorders, pharmacogenetic variants, rare genetic disorders and custom molecular diagnostic assays. Tests for nine conditions have been developed so far, across two families of inherited conditions, and more assays are under development: a blood coagulation panel and pharmacogenomics testing among them.
- **Body:** We also develop and validate assays for other organisations, and write laboratory methods for hospitals and laboratories with limited resources. `[TBC: still offered, as on the current site]`
- **Links:** See our solutions · Develop a test with us
- **Publications and presentations:** `[PLACEHOLDER: research publications and conference presentations, with titles, venues, years and links. The October 2026 poster is the first entry.]`

> "Nine conditions" counts sickle cell anaemia, beta thalassaemia, alpha thalassaemia, sickle-beta thalassaemia, HbD, HbE, SMA, DMD and LGMD. The count of conditions holds however HbD and HbE are packed (Part 8 item 12).

#### Closing band

- **H2:** Have a condition in mind?
- **Body:** Tell us what you need to detect. We develop the test.
- **Solid button:** Develop a test with us
- **Line button:** Contact us

---

### 5.3 Solutions

- **Route:** `/solutions/`
- **Title:** Diagnostic solutions | Lightening Lives
- **Description:** Molecular tests for sickle cell anaemia, thalassaemia, HbD and HbE, spinal muscular atrophy, Duchenne and limb-girdle muscular dystrophy, from a dried blood spot, for hospitals, laboratories and health programmes.

#### Opening

- **Label:** Diagnose
- **H1:** Diagnostic solutions for inherited conditions
- **Lead:** We develop molecular tests for inherited blood and muscle conditions, and build each into something an institution can run: the assay, the sample card, the laboratory method, the training, and the counselling that follows a result.

#### Two families (`#haemoglobinopathies`, `#musculopathies`; *audiences*: two columns)

- **H2:** Two families of conditions, one way of testing
- **Lead:** Every test works the same way: a spot of blood on a card, no DNA extraction, a modest laboratory. What differs is the condition.

| H3 | Body | Tests | Link |
| --- | --- | --- | --- |
| Haemoglobinopathies | Inherited disorders of haemoglobin. They are India's most common single-gene conditions, and most families learn of them only after an affected child is born. Carrier screening, diagnosis and newborn screening, from the same card. | LitLife™-SCA · LitLife™-SiBThal217 · LitLife™-BThal · LitLife™-AlphaThal · HbD and HbE testing | Sickle cell anaemia · Thalassaemia and other haemoglobinopathies |
| Musculopathies | Inherited conditions that weaken the muscles. Children are often thought to be weak or undernourished, and families wait years for a diagnosis. A genetic result ends the wait, opens the treatment that exists, and tells the family who else carries the condition. | LitLife™-SMA · DMD test `[TBC: name]` · LGMD test `[TBC: name]` | Spinal muscular atrophy · Duchenne muscular dystrophy · Limb-girdle muscular dystrophy |

> `[TBC: "India's most common single-gene conditions" is a widely made statement about haemoglobinopathies; confirm the company is content to make it, or cite the National Health Mission's 2016 guidelines beside it.]`

#### Developed so far (*tests developed so far*)

- **H2:** Developed so far
- **Lead:** Each of these began with an institution that needed it. The next can begin with yours.
- **Rows:** as on the home page, each linking to its own page, ending with the open place.

#### In development (`#in-development`; *rows*)

- **H2:** In development

| Title | Body |
| --- | --- |
| Blood coagulation panel | Genetic testing for inherited bleeding disorders such as haemophilia: confirming a diagnosis, identifying carriers, and supporting family counselling and care planning. |
| Pharmacogenomics | How a person's genes change their response to a medicine, so that the drug and the dose can be chosen for the person. |

- **Link:** Ask about a test in development

#### What a solution includes (*rows*)

- **H2:** What you get when we work together

| Title | Body |
| --- | --- |
| A test developed for the condition | An assay built and validated for what your programme needs to detect. |
| A sample that can be taken anywhere | A spot of blood on a card, carried at room temperature. Collection is simple and minimally invasive. |
| A method your laboratory can run | Written for laboratories with minimal infrastructure, with no DNA extraction step.* |
| Training for the people who run it | Hands-on workshops for laboratory staff and health workers. `[TBC]` |
| A way to watch the programme | Test details captured on a mobile app, for real-time monitoring. `[TBC: Part 8 item 7]` |
| Help with what follows a result | Genetic and social counselling for patients and carriers, awareness programmes, and patient support groups. |

- **Footnote:** * Where applicable for developed assays.

#### How a test arrives

- **H2:** How a test arrives
- **Body:** Each test is packed as a kit: a sample collection kit for the people who take the samples, and, where the laboratory needs it, a reagent kit. Our tests are made in India by a third-party manufacturer that holds a quality certification. `[TBC: the two-part packing for every test; whether to name the manufacturer and its certification, Part 8 item 13]`

> The boxes are shown here as one row, each a 3D view the reader can turn, or a still: LitLife™-SCA, LitLife™-SiBThal217, LitLife™-BThal, LitLife™-AlphaThal, LitLife™-SMA, then the open place, a plain unprinted carton labelled "The condition you need next". The DMD and LGMD tests join the row when their boxes exist. This is the only place on this page where the word "kit" appears.

#### Questions we are asked (`#faq`; *disclosure*)

- **H2:** Questions we are asked

| Question | Answer |
| --- | --- |
| Do you test individuals? | No. We work with hospitals, laboratories, clinicians, NGOs, CSR funders and government health programmes. If you are looking for a test for yourself or your family, please speak to your doctor or visit your nearest government health facility. |
| What does our laboratory need to run the tests? | A thermal cycler, a gel electrophoresis tank and a punch, a bench, and staff who have run PCR or have been trained. We help set the method up and train your staff. `[TBC: Part 8 item 14]` |
| How do samples reach the laboratory? | On the card, at room temperature, by ordinary courier or post. No cold chain. `[TBC: Part 8 item 14]` |
| Are the tests approved? | LitLife™-SCA, our sickle cell test, is approved by ICMR. The technology behind our tests is patented in India and Japan. `[TBC: the status of each other test, Part 8 item 9]` |
| Does a positive result need a second test? | For LitLife™-SCA and LitLife™-SMA, no: the test screens and confirms. `[TBC: the others, Part 8 item 5]` |
| Can you develop a test for a condition that isn't listed? | Yes. Each test we have developed began with an institution that needed it. Tell us the condition and the setting, and we take it from there. |
| How do we start? | Write to us with the condition, who will be tested and roughly how many, where samples will be collected and which laboratory will run them. We reply with how we would approach it. |

#### Notice and closing band

- **Notice:** as 4.4
- **Closing band:** as 4.5

---

### 5.4 Sickle cell anaemia

- **Route:** `/solutions/sickle-cell-anaemia/`
- **Title:** Sickle cell anaemia: LitLife™-SCA | Lightening Lives
- **Description:** LitLife™-SCA screens for and confirms sickle cell anaemia in one test from a dried blood spot. Approved by ICMR, patented in India and Japan, used at 15 sites across India.

#### Opening

- **Label:** Haemoglobinopathy
- **H1:** Sickle cell anaemia
- **Lead:** LitLife™-SCA is a molecular test that screens for and confirms sickle cell anaemia in one test, from a spot of blood dried on a card. It was developed with CSIR-CCMB know-how for the National Sickle Cell Anaemia Elimination Mission, and has been used in population and newborn screening at 15 sites across India.
- **Chips:** Approved by ICMR (proof) · Patented in India and Japan (proof) · Dried blood spot · Room temperature transport · From birth

#### The condition

- **H2:** The condition
- **Body:** Sickle cell disease is an inherited blood disorder in which red blood cells become rigid and sickle-shaped. They slow or block blood flow, causing pain, anaemia, infections and organ damage. A person with one copy of the sickle gene is a carrier, usually healthy and often unaware; when both parents are carriers, each pregnancy has a 1 in 4 chance of the disease. In India it is most common among tribal communities, in a belt across the centre of the country from Gujarat to Odisha.

#### Why it needs testing at scale

- **H2:** Why it needs testing at scale
- **Body:** The Government of India launched the National Sickle Cell Anaemia Elimination Mission in July 2023, with the aim of eliminating sickle cell disease as a public health problem by 2047. The mission has 17 focus states. Reaching that aim means testing very large numbers of people, many of them in districts a long way from a genetics laboratory, and knowing, for each one, whether they are affected, a carrier or neither. A screening test that needs a second test to confirm leaves that last question open.

> The map can be reused here, opened on the sickle cell layer.

#### The test (*rows*)

- **H2:** LitLife™-SCA

| Title | Body |
| --- | --- |
| What it is | A dried blood spot molecular test for screening and confirmation of sickle cell anaemia. One test does both, so a positive result needs no second test. `[TBC: the box says "India's first". Add those words only if the company can support them.]` |
| What it tells you | Whether a person has sickle cell disease, carries the sickle gene, or neither. `[TBC: Part 8 item 10. The poster's result lanes read "patient, normal, carrier".]` |
| Approval | Approved by the Indian Council of Medical Research, Department of Health Research, Government of India. `[TBC: exact wording]` |
| Patents | Granted in India and Japan, with a patent published internationally. |
| The science | Built on CSIR-CCMB know-how. An MOU with the CSIR-Centre for Cellular and Molecular Biology, Hyderabad, covers developing and commercialising the assay. |
| The sample | A spot of blood, dried on a card. Collection is simple and minimally invasive. Cards keep and travel at room temperature. |
| Newborns | Can be tested at birth. |
| Where it is made | In India, by a third-party manufacturer that holds a quality certification. `[TBC: Part 8 item 13]` |

#### Where it has been used (*the map*, opened on Our work, with a list)

- **H2:** Where it has been used
- **Body:** Population screening for sickle cell anaemia at 14 sites: Delhi, Udaipur, Bhopal, Jamshedpur, Bilaspur, Nandurbar, Nagpur, Valsad, Chandrapur, Mumbai, Kothagudem, Hyderabad, Mysore and Gudalur. Newborn screening at Udaipur, Nagpur and Dhule.
- **Link:** See all our work

#### In the box

- **H2:** In the box
- **Body:** The sample collection kit holds what a health worker needs to take one sample.
- **List:** A dried blood spot card · A single-use lancet · An alcohol swab · A cotton ball

> 3D view or still of the LitLife™-SCA box, from the artwork in `content/assets/sca-kit/` or the poster's photograph.

#### Who it is for

- **H2:** Who it is for
- **List:**
  - State and district health programmes screening for sickle cell disease
  - Hospitals and laboratories that confirm a diagnosis
  - Newborn screening programmes in the sickle cell belt
  - NGOs and CSR funders running screening in tribal districts

#### Also in this family

- Thalassaemia and other haemoglobinopathies, including LitLife™-SiBThal217, which tests for sickle cell anaemia and beta thalassaemia together.

#### Notice and closing band

- **Notice:** as 4.4
- **H2:** Planning sickle cell screening?
- **Body:** Tell us the district, the numbers and the laboratory you have in mind.
- **Solid button:** Ask about LitLife™-SCA
- **Line button:** Partner with us

---

### 5.5 Thalassaemia and other haemoglobinopathies

- **Route:** `/solutions/thalassaemia/`
- **Title:** Thalassaemia, HbD and HbE testing | Lightening Lives
- **Description:** Molecular tests for beta and alpha thalassaemia, sickle-beta thalassaemia, HbD and HbE from a dried blood spot: LitLife™-BThal, LitLife™-AlphaThal and LitLife™-SiBThal217.

#### Opening

- **Label:** Haemoglobinopathy
- **H1:** Thalassaemia and other haemoglobinopathies
- **Lead:** Three tests and two more options cover the haemoglobin disorders a programme meets alongside sickle cell anaemia: beta thalassaemia, alpha thalassaemia, sickle cell anaemia and beta thalassaemia together, HbD and HbE. All from a spot of blood on a card.
- **Chips:** Dried blood spot · Room temperature transport

#### The conditions (*rows*)

- **H2:** The conditions

| Title | Body |
| --- | --- |
| Beta thalassaemia | The body makes too little of the beta chain of haemoglobin. People with the severe form, thalassaemia major, need blood transfusions throughout life. Carriers are usually healthy, and their mild anaemia is often mistaken for iron deficiency. On average 3 to 4 people in 100 in India are carriers; when both parents are, each pregnancy has a 1 in 4 chance of thalassaemia major. |
| Alpha thalassaemia | Changes in the alpha-globin genes, most often deletions. The effect runs from no symptoms to a lifelong anaemia, depending on how many of the four genes are affected. Routine screening often misses it. |
| Sickle-beta thalassaemia | A person who inherits the sickle gene from one parent and a beta thalassaemia gene from the other. It can look like sickle cell disease, and it is common where both conditions run, as they do in the central belt. Telling the two apart matters for care and for counselling. |
| HbE and HbD | Two other variants of haemoglobin. HbE is common in eastern and north-eastern India, and with a beta thalassaemia gene it can cause a serious anaemia. HbD, found in Punjab and Gujarat, can be mistaken for the sickle gene on a screening test. |

- **Source:** National Health Mission, Guidelines for Prevention and Control of Hemoglobinopathies in India (2016) `[TBC: confirm each statement against the guidelines, Part 8 item 11]`

> The map can be reused here, opened on the thalassaemia layer.

#### The tests (*rows*)

- **H2:** The tests

| Title | Body |
| --- | --- |
| LitLife™-BThal | A dried blood spot molecular test for diagnosis of beta thalassaemia. `[TBC: which mutations; carriers, disease, or both]` |
| LitLife™-AlphaThal | A dried blood spot molecular test for diagnosis of alpha thalassaemia. `[TBC: which deletions]` |
| LitLife™-SiBThal217 | A dried blood spot molecular test for diagnosis of sickle cell anaemia and beta thalassaemia together, for programmes in the belt where both run. `[TBC: what "217" refers to; what it reports]` |
| HbD and HbE | Testing for the HbD and HbE variants is also available. `[TBC: as options within a kit, or as tests of their own]` |
| The sample | A spot of blood, dried on a card. Cards keep and travel at room temperature. |
| Validation | `[TBC: the status of each, Part 8 item 9]` |

#### Where they have been used

- **H2:** Where they have been used
- **Body:** Population screening for sickle-beta thalassaemia at Nandurbar, Valsad and Kothagudem, and newborn screening at Nandurbar. Population screening for beta thalassaemia at Nandurbar and Kothagudem.
- **Link:** See all our work

#### Who they are for

- **H2:** Who they are for
- **List:**
  - Hospitals and laboratories that diagnose thalassaemia
  - Programmes screening couples, families and newborns for carrier status
  - Sickle cell programmes in districts where beta thalassaemia also runs
  - Patient organisations working with affected families

#### Also in this family

- Sickle cell anaemia: LitLife™-SCA.

#### Notice and closing band

- **Notice:** as 4.4
- **H2:** Planning thalassaemia screening?
- **Body:** Tell us who you plan to screen and where the samples will be tested.
- **Solid button:** Ask about thalassaemia testing
- **Line button:** Partner with us

---

### 5.6 Spinal muscular atrophy

- **Route:** `/solutions/spinal-muscular-atrophy/`
- **Title:** Spinal muscular atrophy: LitLife™-SMA | Lightening Lives
- **Description:** LitLife™-SMA screens for and confirms spinal muscular atrophy from a dried blood spot, with no DNA extraction. Designed for newborn screening, where early detection changes what treatment can do.

#### Opening

- **Label:** Musculopathy
- **H1:** Spinal muscular atrophy
- **Lead:** LitLife™-SMA is a molecular test that screens for and confirms spinal muscular atrophy from a spot of blood dried on a card. It is designed for newborn screening, where finding the condition before symptoms appear changes what treatment can do.
- **Chips:** Dried blood spot · No DNA extraction · Room temperature transport
- **Line under the lead:** Early detection. Timely care. Better outcomes.

#### The condition

- **H2:** The condition
- **Body:** SMA is an inherited neuromuscular condition. A missing or faulty SMN1 gene leaves the nerve cells that control muscles without a protein they need, and they die. Muscles weaken progressively, and in the severe forms breathing and swallowing are affected within the first months of life. Most people with SMA have lost both copies of the gene; about 1 in 40 adults carries one faulty copy without knowing, and a study in north India found closer to 1 in 30.
- **Source:** `[TBC: Part 8 item 11. Carrier frequency: Journal of Family Medicine and Primary Care (2022), a north Indian cohort; 1 in 40 to 60 is the usual global range.]`

#### Why newborn screening matters

- **H2:** Why newborn screening matters
- **Body:** Treatments for SMA now exist, and they work best when started early, ideally before symptoms appear. By the time weakness is noticed, nerve cells have already been lost. That makes the first weeks of life the time to look, and it means a test that can be run for every newborn, from a heel-prick spot on a card, at a cost a programme can bear. India's National Policy for Rare Diseases lists SMA among the conditions for which treatment is supported at designated Centres of Excellence. `[TBC: the policy reference and wording, Part 8 item 11]`

#### The test (*rows*)

- **H2:** LitLife™-SMA

| Title | Body |
| --- | --- |
| What it is | A dried blood spot molecular test for screening and confirmation of spinal muscular atrophy, designed for newborn screening. `[TBC: the box says "India's first". Add those words only if the company can support them.]` |
| What it tells you | `[TBC: Part 8 item 10. Whether it detects the SMN1 deletion that causes most SMA; whether it reports carriers; whether it reports SMN2 copy number, which bears on severity and treatment.]` |
| The sample | A spot of blood, dried on a card. Minimally invasive. `[TBC: a heel prick for a newborn]` |
| The chemistry | Direct PCR, optimised for dried blood spots. No DNA extraction is required. |
| In the laboratory | Rapid turnaround, high-throughput performance and an easy workflow. |
| Validation | `[TBC: Part 8 item 9]` |

#### In the box

- **H2:** In the box
- **Body:** LitLife™-SMA is packed in two parts.
- **Sample collection kit:** A dried blood spot card · A single-use lancet · An alcohol swab · A cotton ball
- **Reagent kit:** Reagent A · Reagent B

> 3D view or still of the LitLife™-SMA box, from the artwork in `content/assets/sma-kit/` (exported faces needed) or the brochure's photograph (Part 7).

#### Who it is for

- **H2:** Who it is for
- **List:**
  - Newborn screening programmes
  - Maternity hospitals and paediatric units
  - Paediatric neurologists and the laboratories that serve them
  - Patient organisations working with affected families

#### Also in this family

- Duchenne muscular dystrophy · Limb-girdle muscular dystrophy

#### Notice and closing band

- **Notice:** as 4.4
- **H2:** Planning newborn screening for SMA?
- **Body:** Tell us how many births you expect to screen and which laboratory will run the tests.
- **Solid button:** Ask about LitLife™-SMA
- **Line button:** Partner with us

---

### 5.7 Duchenne muscular dystrophy

- **Route:** `/solutions/duchenne-muscular-dystrophy/`
- **Title:** Duchenne muscular dystrophy testing | Lightening Lives
- **Description:** Genetic testing for Duchenne muscular dystrophy from a dried blood spot: an earlier diagnosis for boys losing strength, and carrier testing for mothers and sisters.

#### Opening

- **Label:** Musculopathy
- **H1:** Duchenne muscular dystrophy
- **Lead:** A genetic test for DMD that gives a boy a diagnosis years sooner than he would otherwise get one, and tells his family who else carries the condition.
- **Chips:** `[TBC: Dried blood spot; others as confirmed]`

#### The condition

- **H2:** The condition
- **Body:** DMD is an inherited muscle condition that affects about 1 in 3,500 boys. A change in the dystrophin gene, on the X chromosome, leaves muscle fibres without a protein that holds them together, so muscles weaken progressively from early childhood. Most mothers of boys with DMD carry the change without symptoms, and their daughters may too.
- **Source:** `[TBC: Part 8 item 11]`

#### Why an earlier diagnosis matters

- **H2:** Why an earlier diagnosis matters
- **Body:** The first signs, a late start to walking, frequent falls, difficulty climbing stairs, are easily put down to weakness or poor nutrition. In Indian clinics, boys typically present years after the first symptom. An earlier genetic diagnosis lets care begin in time, and lets the family find out whether the mother and sisters are carriers before the next pregnancy.
- **Source:** `[TBC: Part 8 item 11. A Rajasthan series reported a mean onset of about 3 years and a mean presentation of about 7.]`

#### The test (*rows*)

- **H2:** The test

| Title | Body |
| --- | --- |
| Name | `[TBC: Part 8 item 9]` |
| What it tells you | `[TBC: Part 8 item 10. Deletions and duplications in the dystrophin gene account for most cases; say which the test detects, and whether it reports carriers.]` |
| The sample | `[TBC: dried blood spot, as for the other tests]` |
| Validation | `[TBC: Part 8 item 9]` |

#### Who it is for

- **H2:** Who it is for
- **List:**
  - Paediatricians and neurologists who see children with muscle weakness
  - Laboratories that test for neuromuscular conditions
  - Programmes offering carrier testing to families with an affected child
  - Patient organisations working with affected families

#### Also in this family

- Spinal muscular atrophy · Limb-girdle muscular dystrophy

#### Notice and closing band

- **Notice:** as 4.4
- **H2:** Need DMD testing for your patients?
- **Body:** Tell us about your clinic or laboratory and the numbers you see.
- **Solid button:** Ask about DMD testing
- **Line button:** Partner with us

---

### 5.8 Limb-girdle muscular dystrophy

- **Route:** `/solutions/limb-girdle-muscular-dystrophy/`
- **Title:** Limb-girdle muscular dystrophy testing | Lightening Lives
- **Description:** Genetic testing for limb-girdle muscular dystrophy: a molecular diagnosis that names the subtype, ends years of uncertainty and guides family counselling.

#### Opening

- **Label:** Musculopathy
- **H1:** Limb-girdle muscular dystrophy
- **Lead:** A genetic test for LGMD that names the subtype. For a patient, that ends a search that often takes years and passes through a muscle biopsy; for the family, it says who else carries the condition and what the next generation faces.
- **Chips:** `[TBC: Dried blood spot; others as confirmed]`

#### The condition

- **H2:** The condition
- **Body:** Limb-girdle muscular dystrophy is not one condition but a group of more than 30, each caused by a change in a different gene. All weaken the muscles of the shoulders and hips first, so that lifting the arms, rising from a chair and climbing stairs become hard. Symptoms can begin in childhood or in adult life. In India most cases are the recessive forms, in which both parents carry the change: the sarcoglycanopathies, calpainopathy and dysferlinopathy are the subtypes most often found.
- **Source:** `[TBC: Part 8 item 11. Annals of Indian Academy of Neurology (2017), a review of LGMD in India.]`

#### Why the subtype matters

- **H2:** Why the subtype matters
- **Body:** Without a genetic result, a diagnosis rests on examination, blood enzymes and a muscle biopsy, and the subtype is often never settled. The subtype decides what the patient can expect, which complications to watch for, how the condition is inherited, and whether a treatment or a trial exists for it. A molecular diagnosis answers all of that from a spot of blood.

#### The test (*rows*)

- **H2:** The test

| Title | Body |
| --- | --- |
| Name | `[TBC: Part 8 item 9]` |
| What it tells you | `[TBC: Part 8 item 10. Which subtypes and genes the test covers, and whether it reports carriers.]` |
| The sample | `[TBC: dried blood spot, as for the other tests]` |
| Validation | `[TBC: Part 8 item 9]` |

#### Who it is for

- **H2:** Who it is for
- **List:**
  - Neurologists and physicians who see patients with limb-girdle weakness
  - Laboratories that test for neuromuscular conditions
  - Programmes offering carrier testing in communities where a subtype runs
  - Patient organisations working with affected families

#### Also in this family

- Spinal muscular atrophy · Duchenne muscular dystrophy

#### Notice and closing band

- **Notice:** as 4.4
- **H2:** Seeing patients with limb-girdle weakness?
- **Body:** Tell us about your clinic or laboratory and the numbers you see.
- **Solid button:** Ask about LGMD testing
- **Line button:** Partner with us

---

### 5.9 Develop a test

- **Route:** `/solutions/develop-a-test/`
- **Title:** Develop a genetic test with us | Lightening Lives
- **Description:** Tell us the inherited condition your programme or laboratory needs to detect. Lightening Lives develops and validates the test. A coagulation panel and pharmacogenomics are in development now.

#### Opening

- **Label:** The condition you need next
- **H1:** Tell us the condition. We develop the test
- **Lead:** Every test we have developed so far began with an institution that needed one: a national mission, a hospital, a screening programme. We take on any inherited condition a programme or laboratory needs to detect, and develop the test to the same REASSURED standard. `[TBC: "any inherited condition", with the scientific and regulatory teams]`

#### Also developed (`#musculopathies`)

- **H2:** Two tests whose pages are on their way
- **Body:** We have developed tests for Duchenne muscular dystrophy and limb-girdle muscular dystrophy, alongside LitLife™-SMA. Their pages are being prepared. Until then, write to us with your clinic or laboratory and the numbers you see, and we will send the details.
- **Link:** Ask about DMD or LGMD testing

> This section exists only until the DMD and LGMD pages open (3.1). It makes no claim about what the tests detect or their status (Part 8 items 9 and 10); it says they exist, which the company has said.

#### In development (`#in-development`; *rows*)

- **H2:** What we are developing now

| Title | Body |
| --- | --- |
| Blood coagulation panel | Genetic testing for inherited bleeding disorders such as haemophilia A and B, in which blood does not clot properly because a clotting factor is missing or low. The panel confirms a diagnosis, identifies carriers, and supports family counselling and care planning. `[TBC: which disorders and genes; when]` |
| Pharmacogenomics | Testing for the genetic differences that change how a person responds to a medicine, so that the drug and the dose can be chosen for the person. `[TBC: which genes and drugs; when]` |

- **Link:** Ask about a test in development

#### What we take on (*kinds of test*)

- **H2:** What we take on

| H3 | Body |
| --- | --- |
| Monogenic disorders | Conditions caused by a change in a single gene, such as the haemoglobinopathies and musculopathies we already test for. |
| Pharmacogenetic variants | Tests for the genetic differences that change how a person responds to a medicine. |
| Rare genetic disorders | Testing for rare and inherited conditions. `[TBC: available now, or in development]` |
| Custom molecular diagnostic assays | Assays designed for a research study or a clinical service. |

#### What we need from you

- **H2:** What to tell us
- **List:**
  - The condition, and the genes or variants if you know them
  - Who will be tested, and roughly how many
  - Where samples will be collected, and which laboratory will run the tests
  - Whether the test is for screening, for diagnosis or for research
  - Any regulatory or programme requirements it has to meet

#### How it goes

- **H2:** How it goes

1. **We agree what the test must do.** What it detects, on what sample, in what kind of laboratory.
2. **We develop it.** The assay, and the method for running it.
3. **We validate it.** `[TBC: how validation is done and with whom]`
4. **We help you put it to work.** Training for your staff, the app for monitoring, and awareness and counselling where the programme calls for them.

> `[TBC: these four steps are a draft of how an engagement runs. Correct them to match what happens.]`

#### Closing band

- **H2:** Start with the condition
- **Body:** Write to us with the five points above, or as many of them as you have.
- **Solid button:** Talk to us about a new test
- **Line button:** See what we have developed

---

### 5.10 Programmes

- **Route:** `/programmes/`
- **Title:** Screening, counselling and follow-up programmes | Lightening Lives
- **Description:** Lightening Lives runs its tests inside a six-step model: sample collection, transport, testing, reporting, treatment with counselling, and follow-up. Awareness programmes, genetic counselling, support groups and training.

#### Opening

- **Label:** Transform lives
- **H1:** A test is the middle of the story
- **Lead:** A result only transforms a life if something happens next. Our testing model runs from the finger prick to the follow-up, and we run awareness and counselling programmes, mostly on behalf of the government, so that every result leads somewhere.

#### The testing model (`#testing-model`; *steps*, numbered, six)

- **H2:** Six steps, from the sample to the follow-up

1. **Sample collection.** At a health centre, a school, an anganwadi or a maternity ward: a finger prick, a spot of blood on a card, and the details captured on the app. `[TBC: Part 8 item 7]`
2. **Transport to a nearby testing centre.** Cards travel at room temperature, by ordinary courier or post. No cold chain, no ice box.
3. **Molecular testing.** At the testing centre, many cards in one run, with no DNA extraction step.
4. **Test reporting.** Results go back to the clinician and the programme. Affected, carrier or unaffected, each with a next step.
5. **Patient management through proper treatment.** Genetic and social counselling for patients and for carriers, and a path to treatment where it exists.
6. **Follow-up of patients.** Awareness programmes for the community, and patient support groups so that families are not alone with a diagnosis.

> The six steps are the poster's testing model, in its order and nearly its words. The loop closes: follow-up raises awareness, and awareness brings the next samples.

#### Awareness

- **H2:** Before the test: awareness
- **Body:** Awareness programmes explain inherited conditions and screening to communities: what the condition is, how it is passed on, who should be tested and what the test involves. Community screening and awareness camps are run together, so that a camp both explains and tests.
- `[PLACEHOLDER: how the sessions are run, in which languages, and with whom (health workers, schools, village meetings)]`

#### Counselling (`#counselling`)

- **H2:** After the result: counselling
- **Body:** Counselling helps people and families understand a result and their carrier status, and what it means for treatment, for relatives and for the children they may have. For a couple who both carry a condition, it means knowing their options before the next pregnancy. For the family of a child with a muscle condition, it means knowing who else to test.
- `[PLACEHOLDER: who counsels, how (in person or by phone), and how results are kept confidential]`

#### Support groups

- **H2:** Patient support groups
- **Body:** A diagnosis is easier to live with among others who have one. We help set up patient support groups in the communities we screen, and work with patient organisations for the conditions we test for. `[TBC: Part 8 item 27]`

#### Where screening fits (*rows*)

- **H2:** Where screening fits in a life

| Title | Body |
| --- | --- |
| At birth | Newborn screening finds a condition before symptoms appear, so that treatment can start on time. Our tests for sickle cell anaemia and SMA can be run from birth. |
| In the community | Population screening finds the carriers and the affected in a district, a school or a community where a condition runs. |
| After a diagnosis in the family | Family and carrier screening shows which relatives carry the condition. |
| Before marriage or conception | Couples learn their carrier status before they plan a family. |
| During pregnancy | Prenatal diagnosis for couples who both carry a condition. `[TBC: prenatal testing is regulated under the PC-PNDT Act. Confirm that it is offered, through whom, and the wording, before this row is published. Part 8 item 29]` |

#### Training (`#training`)

- **H2:** Training the people who run the tests
- **Body:** We run hands-on workshops in molecular testing for laboratory staff and health workers, help laboratories set up the method, and advise on laboratory set-up and consultancy for hospitals and programmes. `[TBC: Part 8 item 28]`

#### Setting up

- **H2:** Help with setting up a programme
- **Body:** We advise hospitals and laboratories on setting up molecular diagnostics, support large screening programmes, and help with the planning of projects and grants: goals, budget, staffing, the laboratory and reviews of progress. `[TBC: Part 8 item 28]`

#### Where we have worked (*field photos*)

- **H2:** Where we have worked
- **Body:** Population and newborn screening at 15 sites across India, with government programmes, hospitals and NGOs.
- **Three photographs:** the three newest entries from Our work (5.11), under the heading "From our work" once they exist. Until then, the three place photographs from the home page, labelled as places, under the heading above.
- **Link:** See all our work

#### From the field (`#from-the-field`)

- **H2:** From the field
- **Lead:** Three accounts from our work with institutions. Details that could identify a family have been left out.

**A diagnosis at three.** A three-year-old boy in a village in Madhya Pradesh was losing strength in his muscles. His family, a long way from any specialist hospital, took it for poor nutrition. An NGO working in the area arranged a molecular test, and the result was Duchenne muscular dystrophy. With a diagnosis at three, the family could begin supportive therapy and join a patient support group, instead of spending years without an answer.

**Two carriers, one plan.** A couple in Chhattisgarh had lost their first child to spinal muscular atrophy without ever learning the cause. During their second pregnancy they were referred to us through a government screening programme. Carrier testing showed that both parents carry the SMA mutation. With counselling and early testing they could plan with full information. They now have a healthy child.

**What had been called fate.** In a village in Odisha, a young couple had watched two children in their extended family live with severe anaemia and repeated infections. Testing showed that both of them carry the sickle cell gene. In their village the illness had been put down to fate. The couple now know what it is, how it is passed on and what their choices are.

> `[TBC: Part 8 item 30. These are rewritten from the current site's "Impact stories". Before publishing, confirm that each is accurate and that the family or the institution agreed to its use. A fourth account on the current site, from Jharkhand, describes a six-year-old girl diagnosed with DMD. DMD in girls is rare, and a clinician will notice. It is held back until the company confirms the details.]`

#### Notice and closing band

- **Notice:** as 4.4
- **H2:** Planning a screening programme?
- **Body:** Tell us the community, the condition and who you are working with.
- **Solid button:** Ask about our programmes
- **Line button:** Partner with us

---

### 5.11 Our work

- **Route:** `/our-work/`
- **Title:** Our work: 15 sites across India | Lightening Lives
- **Description:** Where Lightening Lives has run population and newborn screening for sickle cell anaemia and thalassaemia: 15 sites across India, from Delhi to Gudalur. Photographs from the field and the laboratory.

> This page is the company's field record. Until now no source held it; the conference poster does. The table and the map can open at launch. The photographs wait for the company: no source holds a photograph of its work.

#### Opening

- **Label:** Our work
- **H1:** Where we have worked
- **Lead:** Population and newborn screening at 15 sites across India, with government programmes, hospitals and NGOs, for sickle cell anaemia, sickle-beta thalassaemia and beta thalassaemia. The laboratory is in Hyderabad. We add to this page as the work goes on.

#### The sites (`#sites`; a table)

- **H2:** Population and newborn screening, by site
- **Table:** Part 6.1, as a table with the site, the state, and a mark for each of the five columns (sickle cell anaemia: population, newborn; sickle-beta thalassaemia: population, newborn; beta thalassaemia: population). On narrow screens the table becomes a list, one site per entry, naming what was screened there.
- **Line under the table:** We thank the participating individuals, clinicians and frontline health workers at every site.
- `[PLACEHOLDER: for each site, the month and year, and the institution worked with, where it may be named]`

> The marks use the design's proof tag (filled, sun) for a screening that was done, and nothing for one that was not. No numbers of people screened: the brief keeps procurement and performance figures off the site, and counts of people would invite the next question.

#### Where we work (`#map`; *the map*)

- **H2:** On the map
- **Body:** Fifteen sites in nine states and Delhi, from Delhi in the north to Gudalur in the south, and from Mumbai in the west to Jamshedpur in the east. Most lie in the sickle cell belt across central India, where the need is greatest.

> The map from the home page, opened on "Our work", with all 15 pins.

#### Recent work

- **H2:** Recent work
- **Order:** newest first.
- **Each entry:** one to four photographs; a label for the kind of work; the place, as its title; the month and year; and 30 to 50 words on what was done, for which condition and with whom.
- **Labels:** In the field · In the laboratory · Training · With our partners · At a conference
- **Under a photograph, where it is owed:** a credit.

Entries to open with, as the company supplies them:

| Label | Title | What the sources say | What the company supplies |
| --- | --- | --- | --- |
| At a conference | `[PLACEHOLDER: the conference, city, month 2026]` | The poster: a novel molecular screening cum confirmatory kit for sickle cell anaemia and other haemoglobinopathies | A photograph of the poster being presented, and the conference's name |
| In the field | Nandurbar, Maharashtra | Population screening for sickle cell anaemia, population and newborn screening for sickle-beta thalassaemia, and population screening for beta thalassaemia | Photographs, the month and year, and the institution |
| In the field | Kothagudem, Telangana | Population screening for sickle cell anaemia, sickle-beta thalassaemia and beta thalassaemia | The same |
| In the field | Udaipur, Rajasthan · Nagpur, Maharashtra · Dhule, Maharashtra | Newborn screening for sickle cell anaemia | The same |
| In the field | Each of the other sites | Population screening for sickle cell anaemia | The same |
| In the laboratory | Hyderabad | The laboratory and corporate office are at Nacharam | Photographs of the laboratory at work, and what is being developed or tested there now |
| Training | `[PLACEHOLDER: place]` | Workshops `[TBC: Part 8 item 28]` | Photographs of a session, who was trained, and in what |
| With our partners | `[PLACEHOLDER: partner]` | The MOU with CSIR-CCMB, and thirteen collaborators | Photographs the partner agrees to, and one line on the work done together |

- **How an entry reads:** `[PLACEHOLDER: "In (month and year), with (institution), we screened (who) for (condition) in (place)." Then one more sentence: what happened next.]`

#### The photographs

> For the company, when it gathers pictures.
>
> - **Show the work.** A sample being taken onto a card, cards being labelled, a batch on the bench, a session in progress, the team at its work.
> - **Nobody from a community, and no patient, may be identifiable.** Photograph hands, backs, or a room from a distance. Staff and named partners may appear, with their agreement.
> - **Nothing readable that identifies a person.** No names on cards, registers or screens, and no sample codes.
> - **Send the original files,** at least 2,000 pixels on the long side. Pictures forwarded through WhatsApp are too small.
> - **With each picture:** where, when, what is happening, who took it, and whether the partner may be named.

#### Closing band

- **H2:** Planning work like this?
- **Body:** Tell us the community, the condition and who you are working with.
- **Solid button:** Partner with us
- **Line button:** See our programmes

---

### 5.12 About

- **Route:** `/about/`
- **Title:** About Lightening Lives
- **Description:** Lightening Lives LLP is a Hyderabad healthcare technology company founded by Dr. Giriraj Ratan Chandak, formerly of CSIR-CCMB, to make genetic diagnosis reach everyone. Patented in India and Japan; approved by ICMR.

#### Opening

- **Label:** About
- **H1:** A genetic diagnosis should not depend on where you live
- **Lead:** Lightening Lives is an innovation-driven healthcare technology company based in Hyderabad. We develop molecular diagnostics for inherited conditions that are simple, affordable and usable outside specialised laboratories, so that molecular diagnosis can reach everyone.

#### How the company began

- **H2:** How the company began
- **Body:** Lightening Lives grew out of more than 25 years of work in genetic and molecular diagnostics, alongside clinicians, the health ministry and its district health authorities, NGOs, universities and companies. Over those years one thing kept showing. The people who most need a genetic diagnosis are often the least likely to get one, because the test needs a laboratory, equipment and specialists that their district does not have.
- **Body:** We started the company to develop tests that do not need them. The first, for sickle cell anaemia, was built for the National Sickle Cell Anaemia Elimination Mission, approved by ICMR, and patented in India and Japan. More have followed, for the other haemoglobinopathies and for the musculopathies.
- `[PLACEHOLDER: the year the company was founded]`

#### Why, how, what (*audiences*: three columns)

- **H2:** Why, how and what, in that order

| H3 | Body |
| --- | --- |
| Why | The burden of genetic disorders is large, and testing is hard to reach. It is too far away, too slow, too costly and too dependent on infrastructure. We believe that can be changed by thinking about the test differently. |
| How | By making genetic and molecular tests robust, simple, affordable and easy to use, with a sample that is easy to take, a result that needs no second test, and results that come back quickly. |
| What | Tests that make early diagnosis practical, newborn screening above all, so that treatment starts on time. And tests that make carrier screening and counselling routine, so that fewer families meet a genetic disorder unprepared. |

#### Mission and vision (*vision*)

- **Label:** Our mission
- **Statement:** To make molecular diagnosis accessible to all by developing innovative REASSURED genetic tests, with simple, affordable, minimally invasive sample collection and a quick turnaround for results.
- **Label:** Our vision
- **Statement:** To make precision genetic diagnosis accessible to every individual, through innovative technologies that need only a single drop of blood.

> See the note on the vision in 5.1.

#### Founders (`#founders`)

- **H2:** Founders

> Portrait: `content/assets/people/founder-1.jpg` (both founders, 670 × 860).

**Dr. Giriraj Ratan Chandak**, MD, PhD, DNB · Founder and CEO

Dr. Chandak is a physician, scientist and medical researcher who works on molecular diagnostics and genetic disorders. He was Chief Scientist at the CSIR-Centre for Cellular and Molecular Biology (CCMB), Hyderabad, and is a founding faculty member and former Director of the Centre for DNA Fingerprinting and Diagnostics (CDFD). His research on genetic disease includes work on sickle cell anaemia among populations in several states that have had little access to testing. `[TBC: Part 8 item 19. The current site says the Sickle Cell Anaemia Elimination Mission "was led under his vision". State his role in the mission precisely, or leave it at this.]`

He is a recipient of the Sir J.C. Bose Fellowship, a Fellow of all four Indian national science academies and of The World Academy of Sciences, and a member of national and international consortia that work on non-communicable diseases such as diabetes and cardiovascular disease. He founded Lightening Lives to develop affordable diagnostic tests that reduce the burden of disease.

**Mrs. Nidhi Chandak** · Co-Founder

Nidhi Chandak holds an MSc in Operations Research and a postgraduate diploma in Computer Applications. She brings statistical data management and operations planning to the company, and supports the delivery of diagnostic services for musculopathies and haemoglobinopathies. She works directly with patients, families and support groups.

#### The company in brief

- **H2:** The company in brief

| | |
| --- | --- |
| Name | Lightening Lives LLP |
| What it is | A limited liability partnership. An innovation-driven healthcare technology company |
| What it does | Develops molecular diagnostics for inherited conditions, and builds them into solutions for institutions |
| Who it works with | Hospitals, laboratories, clinicians, government health programmes, NGOs and CSR funders |
| Approvals and patents | LitLife™-SCA approved by ICMR. Patents granted in India and Japan; a patent published internationally |
| Where its tests are made | In India, by a third-party manufacturer that holds a quality certification `[TBC: Part 8 item 13]` |
| Laboratory and corporate office | Flat No. 201, 2nd Floor, S B Hare Krishna Towers, H.No. 4-7-195/2/55, HMT Nagar, Nacharam, Hyderabad, Telangana 500076 |
| Registered office | D-306, Sy. No. 117, Indu Aranya Pallavi, GSI (SR), Bandlaguda, Hayathnagar, Hyderabad, Telangana 500068 |
| Registration | `[PLACEHOLDER: LLP identification number]` |

#### Evidence and links

- **Evidence:** the four items from the home page.
- **Links:** Meet the team · Who we work with

#### Closing band

- as 4.5

---

### 5.13 Team

- **Route:** `/about/team/`
- **Title:** Our team | Lightening Lives
- **Description:** The scientists, laboratory specialists and operations staff of Lightening Lives, with its patron and advisory board.

> Portraits are in `content/assets/people/`. All but the founders' are 370 × 431, which is small for this design: ask for the originals. Everyone listed should approve their own entry.

#### Opening

- **Label:** Team
- **H1:** The people behind the tests
- **Lead:** A small team of scientists, laboratory specialists and operations staff, led by the company's founders and guided by a patron and an advisory board.

#### Founders

- **H2:** Founders
- **Dr. Giriraj Ratan Chandak**, Founder and CEO · **Mrs. Nidhi Chandak**, Co-Founder
- **Link:** Read about the founders

#### Team

- **H2:** Team

**Mr. Abhishek Chandak** · Head, Finance · `abhishek-chandak.jpg`

A finance leader with more than 20 years' experience at PwC, GE, Wipro, SenecaGlobal and Fourth Frontier, in audit and assurance, manufacturing, IT services and start-ups. He was named MSME CFO of the Year by CII Southern Region in 2021, for his work at SenecaGlobal IT Services.

**Ms. Manisha Arumalla** · Scientific Officer · `manisha-arumalla.jpg`

A molecular and cell biologist with an MSc in Human Genetics and Genomics from the University of Barcelona, and a background in protein engineering. She spent more than seven years at CCMB, working with Dr. Chandak on the genomics of complex diseases, where she designed experiments, planned projects, managed teams and ran training programmes.

**Ms. Punyasri PSKDB** · Technical Officer · `punyasri-pskdb.jpg`

Holds a BSc in Microbiology, Genetics and Chemistry and an MSc in Nutrition, and has more than seven years' experience in genetic screening, awareness campaigns and field work. She sets up and runs experiments in the laboratory and helps keep the diagnostic process reliable.

**Ms. Mehraj Begum** · Admin and Operations Executive · `mehraj-begum.jpg`

A commerce graduate who runs the company's administration: materials for the laboratory, social media, and meetings with investors and stakeholders.

**Mr. Pruthvi Bellamkonda** · Accounts Executive · `pruthvi.png`

Looks after the company's day-to-day finances. Holds an MBA in Finance and HR from SK University, Anantapur.

**Jyothi Vislavath** · Technical Officer · `jyothi.png`

A biotechnology graduate with more than nine years in molecular diagnostics: patient counselling, genetic testing and clinical reporting, in government and private healthcare. Has helped develop affordable diagnostic methods for haemoglobinopathies and musculopathies.

> `[TBC: Part 8 item 20. The current site gives "Mr." on the team page and "Ms." on the profile page. Confirm which.]`

#### Patron

- **H2:** Patron

**Dr. D. Nageshwar Reddy** · Founder of AIG Hospitals · `dr-nageswar.png`

`[PLACEHOLDER: one or two sentences, approved by Dr. Reddy]`

#### Advisory board

- **H2:** Advisory board

**Prof Kalyanaraman Kumaran** · `prof-kalyanaraman.png` · `[PLACEHOLDER: affiliation and one or two sentences]`

**Prof GV Krishnaveni** · `prof-krishnaveni.png` · `[PLACEHOLDER: affiliation and one or two sentences]`

#### Closing band

- **H2:** Work with us
- **Body:** Most of our work begins as a collaboration with an institution.
- **Solid button:** Partner with us
- **Line button:** Contact us

---

### 5.14 Partnerships

- **Route:** `/partnerships/`
- **Title:** Partner with us | Lightening Lives
- **Description:** How hospitals, laboratories, government programmes, NGOs and CSR funders work with Lightening Lives on genetic screening and diagnosis, and who it already works with.

#### Opening

- **Label:** Partner with us
- **H1:** Most of our work begins as a collaboration
- **Lead:** An institution has a condition it needs to screen for or diagnose. We bring the test, the method, the training and the counselling that follows a result. This page says how that usually works, and who we already work with.

#### How we partner with you (*audiences*: four columns)

- **H2:** How we partner with you

| H3 | Body |
| --- | --- |
| Community screening and awareness camps | For district programmes, NGOs and CSR funders: screening a community where a condition runs, and explaining the condition while we do. |
| Patient, carrier and newborn testing | For hospitals, laboratories and clinicians: the test for the patient in front of you, the family around them, and the newborn in the ward. |
| Genetic counselling for families | For every programme: counselling for patients and carriers, and support groups for the families a programme finds. |
| Laboratory set-up, training and consultancy | For laboratories adopting the method: equipment advice, hands-on training, and help planning a programme or a grant. `[TBC: Part 8 item 28]` |

> The four headings are the brochure draft's "How we partner with you", which the company has seen. They replace the first draft's audience columns here; the audiences themselves are on the home page.

#### How a collaboration starts (`#how-it-starts`)

- **H2:** How a collaboration starts

1. **You tell us the condition and the setting.** Who will be tested, roughly how many, where samples will be collected and which laboratory will run them.
2. **We agree the scope.** What the test must detect, how results will be reported and monitored, and what training and counselling the programme needs.
3. **We develop the test, or adapt one we have.**
4. **We train your team and stay with the programme,** through reporting, counselling and follow-up.

> `[TBC: Part 8 item 36. A draft of how an engagement runs. Correct it to match what happens.]`

#### Our collaborators (`#collaborators`)

- **H2:** Our collaborators
- **Lead:** Organisations we work with.

CSIR-Centre for Cellular and Molecular Biology (CCMB) · Atal Incubation Centre, Centre for Cellular and Molecular Biology · Tata Trusts · Tata Steel Foundation · Thalassemia and Sickle Cell Society · Cure SMA India · IAMD · Sicklecell Saksham Rajasthan Foundation · Manasthya Foundation · Blood Warriors · Nucleome · Indigenous Development Organization (IDO) · NASCO

> These thirteen are the logos on the current site's Partnerships page, shown as one picture with no text (`content/assets/partners/collaborations-collage.png`). The names above are as the logos give them. For each, the company should confirm the correct name, say in one line what the relationship is, and get permission to show the name and the logo (Part 8 item 25). Until a logo is cleared, the name is typeset. Two of the thirteen matter to the musculopathy pages: Cure SMA India and IAMD (if it is the Indian Association of Muscular Dystrophy); confirm and link them from the SMA, DMD and LGMD pages.

- **H3:** Approved by ICMR
- **Body:** LitLife™-SCA, our sickle cell test, is approved by the Indian Council of Medical Research.

#### Questions we are asked (*disclosure*)

| Question | Answer |
| --- | --- |
| We are an NGO with no laboratory. Can we still run screening? | Yes. Cards travel at room temperature to a nearby testing centre, so the laboratory need not be yours. Tell us where you plan to screen and we will say how the samples would be tested. |
| We are a hospital laboratory. What would it take to run the tests ourselves? | A thermal cycler, a gel tank and a punch, and staff who have run PCR or have been trained. We help set the method up. `[TBC: Part 8 item 14]` |
| What happens to the families a programme identifies? | Counselling for patients and carriers, a path to treatment where it exists, and support groups. That is part of the programme, not an extra. |
| Do you work with CSR funders? | Yes. Most population-level screening is funded that way or by government. Tell us the community and the condition, and we will propose a programme. |

#### Notice and closing band

- **Notice:** as 4.4
- **H2:** Tell us what your programme needs
- **Body:** Choose where you would like to begin.
- **Actions:** Explore a partnership · Request tests · Ask about awareness and counselling · Talk to sales

---

### 5.15 Contact

- **Route:** `/contact/`
- **Title:** Contact | Lightening Lives
- **Description:** Contact Lightening Lives about a partnership, tests, awareness and counselling programmes, or an institutional order. Hyderabad, India.

#### Opening

- **Label:** Contact
- **H1:** Tell us what your programme needs
- **Lead:** Choose where you would like to begin. We work with institutions, and each request is discussed on its own terms.

#### Where to begin (*contact actions*)

| Action | Line under it |
| --- | --- |
| Explore a partnership | For hospitals, laboratories, government programmes, NGOs and CSR funders planning screening or diagnosis. |
| Request tests | For institutions that want to use a test we have already developed. |
| Ask about awareness and counselling | For programmes that need communities informed and families counselled. |
| Talk to sales | For anything about an institutional order. |

#### The form

- **H2:** Write to us
- **Fields:**
  - Your name
  - Organisation
  - Your role
  - Email
  - Phone (optional)
  - What is this about? (Partnership · Tests · A new test · Awareness and counselling · Sales · Something else)
  - Which condition, if any? (Sickle cell anaemia · Thalassaemia, HbD or HbE · Spinal muscular atrophy · Duchenne muscular dystrophy · Limb-girdle muscular dystrophy · Another condition · Not about a condition)
  - Your message
- **Under the message field:** Please don't include patient names, test results or medical records.
- **Under the form:** We use these details only to reply to you. See our privacy policy.
- **Button:** Send enquiry
- **Sent:** Enquiry sent. We will reply to the email address you gave.
- **Not sent:** Your enquiry was not sent. Check your connection and try again, or write to admin@lighteninglives.in.
- **Missing fields:** Enter your name. · Enter your organisation. · Enter an email address we can reply to. · Choose what this is about. · Write your message.

> The condition field is new. It lets a test's page open the form with its condition chosen, and lets the company route an enquiry.

#### Write or call

- **Label:** Write or call
- **Email:** admin@lighteninglives.in
- **Phone:** +91 91825 88191 (call or WhatsApp)

#### Where we are

- **Laboratory and corporate office:** Flat No. 201, 2nd Floor, S B Hare Krishna Towers, H.No. 4-7-195/2/55, HMT Nagar, Nacharam, Hyderabad, Telangana 500076
- **Registered office:** D-306, Sy. No. 117, Indu Aranya Pallavi, GSI (SR), Bandlaguda, Hayathnagar, Hyderabad, Telangana 500068
- **Link beside each:** Open in maps

#### Notice

- as 4.4

---

### 5.16 Privacy

- **Route:** `/privacy/`
- **Title:** Privacy | Lightening Lives
- **Description:** What the Lightening Lives website collects, why, and how to reach us about it.

> A plain-language draft for a lawyer to review against the Digital Personal Data Protection Act, 2023 and its rules, and the Information Technology Act, 2000. The site has no cookie or consent banner. Anything the site uses that touches a visitor's data is said here instead.

- **H1:** Privacy
- **Lead:** What this website collects, why, and how to reach us about it.
- **Line:** Last updated `[PLACEHOLDER: date]`

**Who we are**

This website is published by Lightening Lives LLP, D-306, Sy. No. 117, Indu Aranya Pallavi, GSI (SR), Bandlaguda, Hayathnagar, Hyderabad, Telangana 500068, India.

**What we collect**

- *What you send us.* If you fill in the enquiry form or write to us, we receive your name, organisation, role, email address, your phone number if you give one, and your message.
- *What the server records.* Like most websites, ours is hosted by another company, whose servers record the internet address a request comes from, the page asked for and the time. `[TBC: name the host]`
- *Typefaces.* The typefaces on this site are loaded from Google Fonts, so your browser contacts Google's servers when a page opens. `[TBC: or host the typefaces with the site and delete this line]`
- *Analytics.* `[TBC: if an analytics service is used, name it and say what it records. If none is used: "We do not use analytics or advertising trackers."]`

**What we do not collect**

We do not collect health information through this website. Please do not send patient names, test results or medical records through the enquiry form or by email. If your enquiry involves patient information, tell us, and we will agree a secure way to share it.

**Why we use it**

To reply to your enquiry and, if a collaboration follows, to work with your institution. We do not sell personal information or use it for advertising.

**Who sees it**

The members of our staff who handle enquiries, and the companies that host our website and email. `[TBC: name them]` We disclose it to anyone else only where the law requires.

**How long we keep it**

`[TBC: for example, "We keep enquiries for three years after our last contact with you, and then delete them."]`

**Your choices**

You can ask what we hold about you, ask us to correct or delete it, or tell us to stop contacting you. Write to our Grievance Officer, `[PLACEHOLDER: name]`, at admin@lighteninglives.in or at the address above. We will reply within `[TBC: number of days]`.

**Changes**

If this page changes, the date at the top changes with it.

---

### 5.17 Terms

- **Route:** `/terms/`
- **Title:** Terms of use | Lightening Lives
- **Description:** The terms on which Lightening Lives LLP publishes this website.

> A plain-language draft for a lawyer to review.

- **H1:** Terms of use
- **Line:** Last updated `[PLACEHOLDER: date]`

**About this website**

This website gives general information about Lightening Lives LLP and its work. It is written for institutions: hospitals, laboratories, clinicians, government health programmes, NGOs and CSR funders.

**Not medical advice**

Nothing on this website is medical advice. If you are concerned about your health or your family's, please speak to your doctor or visit your nearest government health facility. We do not offer testing to individuals.

**Our tests**

Our tests are for use by institutions, by trained staff, following the instructions supplied with each test. Nothing on this website replaces those instructions. `[TBC: regulatory wording]`

**No offer**

Nothing on this website is an offer to sell. The terms of any collaboration or order are agreed in writing with the institution concerned.

**Names and marks**

Lightening Lives, the Lightening Lives logo and LitLife are trade marks of Lightening Lives LLP. `[TBC: registration status]` Other names and logos belong to their owners and appear with their permission.

**Using what is here**

The text and images on this website belong to Lightening Lives LLP unless a credit says otherwise. You may quote from it with a link to the page. Photo and map credits are in the footer of each page.

**Links to other websites**

We link to other websites where they are useful. We are not responsible for what they say.

**Accuracy**

We take care to keep this website accurate and up to date. We publish it without any warranty, and to the extent the law allows we are not liable for loss that comes from relying on it. `[TBC: legal review]`

**Law**

These terms are governed by the laws of India, and the courts at Hyderabad have jurisdiction. `[TBC: legal review]`

**Contact**

admin@lighteninglives.in · +91 91825 88191

---

### 5.18 Not found

- **Route:** `/404.html`
- **Title:** Page not found | Lightening Lives
- **H1:** This page is not here
- **Body:** The address may be from our old website, or the page may have moved. These lead to the same things:
- **Links:** Home · Solutions · Programmes · Our work · About · Contact

---

## 6. Data: the sites, the map, the tests

### 6.1 The sites

From the conference poster's table "We have done population and newborn screening for the following disorders". Pop. is population screening; NB is newborn screening.

| Site | State | SCA pop. | SCA NB | Sickle-beta thal. pop. | Sickle-beta thal. NB | Beta thal. pop. |
| --- | --- | --- | --- | --- | --- | --- |
| Delhi | Delhi | ● | | | | |
| Udaipur | Rajasthan | ● | ● | | | |
| Bhopal | Madhya Pradesh | ● | | | | |
| Jamshedpur | Jharkhand | ● | | | | |
| Bilaspur | Chhattisgarh | ● | | | | |
| Nandurbar | Maharashtra | ● | | ● | ● | ● |
| Nagpur | Maharashtra | ● | ● | | | |
| Dhule | Maharashtra | | ● | | | |
| Valsad | Gujarat | ● | | ● | | |
| Chandrapur | Maharashtra | ● | | | | |
| Mumbai | Maharashtra | ● | | | | |
| Kothagudem | Telangana | ● | | ● | | ● |
| Hyderabad | Telangana | ● | | | | |
| Mysore | Karnataka | ● | | | | |
| Gudalur | Tamil Nadu | ● | | | | |

Fifteen sites in nine states and the National Capital Territory of Delhi. Sickle cell anaemia: population screening at 14 sites and newborn screening at 3. Sickle-beta thalassaemia: population screening at 3 and newborn screening at 1. Beta thalassaemia: population screening at 2.

> The states are read from the site names; the poster gives sites only. Jamshedpur is the "Jharkhand" of the earlier brief. `[TBC: the month and year of each, and the institution, for Our work]`

### 6.2 The map's "Our work" layer

What the state panel says under "Our work" for each state with a site. The layer's data lives in `src/js/drop/map-layers.js`.

| State | Line |
| --- | --- |
| Delhi | Population screening for sickle cell anaemia in Delhi. |
| Rajasthan | Population and newborn screening for sickle cell anaemia in Udaipur. |
| Madhya Pradesh | Population screening for sickle cell anaemia in Bhopal. |
| Jharkhand | Population screening for sickle cell anaemia in Jamshedpur. |
| Chhattisgarh | Population screening for sickle cell anaemia in Bilaspur. |
| Maharashtra | Population and newborn screening for sickle cell anaemia in Nagpur, newborn screening in Dhule, population screening in Chandrapur and Mumbai. In Nandurbar: population screening for sickle cell anaemia, population and newborn screening for sickle-beta thalassaemia, and population screening for beta thalassaemia. |
| Gujarat | Population screening for sickle cell anaemia and sickle-beta thalassaemia in Valsad. |
| Telangana | Our laboratory and office, in Hyderabad, and population screening for sickle cell anaemia there. In Kothagudem: population screening for sickle cell anaemia, sickle-beta thalassaemia and beta thalassaemia. |
| Karnataka | Population screening for sickle cell anaemia in Mysore. |
| Tamil Nadu | Population screening for sickle cell anaemia in Gudalur. |

- **The layer's sentence:** Our laboratory is in Hyderabad. We have run population and newborn screening at 15 sites across India, from Delhi to Gudalur.
- **A pin's chip:** the site's name, then what was screened, in the shortest form: "Nandurbar · SCA, sickle-beta thal., beta thal. · population and newborn".
- **The text summary for screen readers** ends: Where we have worked: population and newborn screening at 15 sites across India: Delhi; Udaipur; Bhopal; Jamshedpur; Bilaspur; Nandurbar, Nagpur, Dhule, Chandrapur and Mumbai; Valsad; Kothagudem and Hyderabad; Mysore; and Gudalur.

### 6.3 The tests

One row per test, for whoever keeps the Solutions pages in step with the company.

| Family | Name | What it is for | Sample | Status | Page |
| --- | --- | --- | --- | --- | --- |
| Haemoglobinopathy | LitLife™-SCA | Screening and confirmation of sickle cell anaemia | Dried blood spot | Approved by ICMR; patented in India and Japan; used at 15 sites | 5.4 |
| Haemoglobinopathy | LitLife™-SiBThal217 | Diagnosis of sickle cell anaemia and beta thalassaemia | Dried blood spot | Available; used at 3 sites `[TBC: validation]` | 5.5 |
| Haemoglobinopathy | LitLife™-BThal | Diagnosis of beta thalassaemia | Dried blood spot | Available; used at 2 sites `[TBC: validation]` | 5.5 |
| Haemoglobinopathy | LitLife™-AlphaThal | Diagnosis of alpha thalassaemia | Dried blood spot | Available `[TBC: validation]` | 5.5 |
| Haemoglobinopathy | HbD testing | The HbD variant | `[TBC]` | Available `[TBC: as an option or a test]` | 5.5 |
| Haemoglobinopathy | HbE testing | The HbE variant | `[TBC]` | Available `[TBC: as an option or a test]` | 5.5 |
| Musculopathy | LitLife™-SMA | Screening and confirmation of spinal muscular atrophy | Dried blood spot | Available `[TBC: validation]` | 5.6 |
| Musculopathy | `[TBC: name]` | Duchenne muscular dystrophy | `[TBC]` | Solution exists `[TBC: status]` | 5.7 |
| Musculopathy | `[TBC: name]` | Limb-girdle muscular dystrophy | `[TBC]` | Solution exists `[TBC: status]` | 5.8 |
| In development | Blood coagulation panel | Inherited bleeding disorders | `[TBC]` | Coming soon | 5.9 |
| In development | Pharmacogenomics | Response to medicines | `[TBC]` | Coming soon | 5.9 |

---

## 7. Images and assets

### 7.1 What exists

| What | Where | Use |
| --- | --- | --- |
| Six photographs of the method: finger prick and spotting, punching into a PCR tube, the reaction mix, PCR, gel electrophoresis, the result | On the conference poster, `content/Lightening Lives Poster v9-selection.png` | Technology, "The method". Ask for the originals; the poster's are small and some are illustrations |
| Photographs of four boxes: LitLife™-SCA, SiBThal217, BThal, AlphaThal | On the conference poster | Solutions, "How a test arrives"; each test's "In the box". Ask for the originals |
| A photograph of the LitLife™-SMA box | On page 1 of `content/Design revision request.pdf` | Solutions and the SMA page. Ask for the original. Only the kit pictures were taken from this file; its figures were not used |
| The four faces of the LitLife™-SCA box | `content/assets/sca-kit/` | A 3D view, if the build makes one |
| Six screenshots of the LitLife™-SMA box artwork | `content/assets/sma-kit/` | Exported faces are needed for a 3D view |
| Photographs of the card | `content/assets/kit-reference-*` | Internal reference only: they show a handwritten name and a real sample code |
| Portraits | `content/assets/people/` | About and Team. All but the founders' are small; ask for originals |
| The collaborators' logos, as one collage | `content/assets/partners/collaborations-collage.png` | Reference only; each logo needs its owner's file and permission |
| The logo | `assets/logo/` | Everywhere; never restyled |
| The film's stills, the drawn card, the map | `assets/img/lumen-*.webp`, `drop-blank.webp` | Home, Technology |
| Three place photographs: Nandurbar, Kothagudem, Patratu Valley | `assets/img/`, with credits in `assets/img/CREDITS.md` | Stand-ins on the home page until the company's own arrive. Never captioned as the company's work |

### 7.2 What the company should supply

In the order it is needed.

1. The originals of the poster's six method photographs and the five box photographs.
2. Photographs from the field, the laboratory and the conference, with the details in 5.11 "The photographs".
3. For each of the 15 sites: the month and year, and the institution, where it may be named.
4. The patent numbers and titles, and the ICMR approval wording, for the record. They need not be shown.
5. A screenshot of the mobile app, if it may be shown.
6. Portraits at full size, and each person's approval of their entry.
7. The collaborators' logos, with permission.
8. The name of the conference, for the Technology page and the first Our work entry.

---

## 8. To confirm before publishing

### The tests

1. **"A spot of blood on a card."** This file uses it, with "dried blood spot", in place of "a single drop of blood", as the company chose on 12 October. The conference poster, the brochure draft and the SMA box all still say "single drop". The vision statement keeps the company's own words; 5.1 gives a version without them.
2. **"Any inherited condition."** Agreed by the scientific and regulatory teams.
3. **The patents.** Numbers, titles and what is claimed, for the India and Japan grants and the international publication. The site says "the technology behind our tests"; narrow that if the patents cover only the sickle cell assay.
4. **ICMR.** The exact wording of the approval, and whether "approved" or "validated" is the right word. Evidence for "India's first" on the LitLife™-SCA and LitLife™-SMA boxes.
5. **Screening and confirmation in one test.** True of LitLife™-SCA and LitLife™-SMA by their own descriptions. Whether it holds for the thalassaemia tests, and whether to say so.
6. **Sensitivity and specificity.** The poster states 100% for both. The brief keeps clinical performance figures off the website, so the copy carries none. If the company wants them shown, the place is the "Approval" row on the sickle cell page, worded as what the ICMR validation found, with the reference beside it, and nowhere else.
7. **The mobile app.** Its name, who uses it (health workers at collection; programme officers), what it records, and whether it may be named and shown. If not, the lines that mention it in 5.1, 5.2, 5.3 and 5.10 come out and nothing else changes.
8. **The readout.** Whether every assay is read on an agarose gel, as the poster's workflow shows, or whether any reads out differently.
9. **Each test's name, status and availability.** The DMD and LGMD tests' names (the brochure draft names only LitLife™-SMA in the musculopathy family). The validation or approval status of SiBThal217, BThal, AlphaThal, HbD, HbE, SMA, DMD and LGMD. Whether each is available now.
10. **What each test tells you.** For each: affected, carrier, or both; which mutations, deletions or genes. For SMA, whether SMN2 copy number is reported. For DMD, deletions, duplications, or both. For LGMD, which subtypes.
11. **Epidemiology and its sources.** Each statement in the condition sections, against the source named beside it: haemoglobinopathies as "India's most common single-gene conditions"; the thalassaemia, alpha thalassaemia, HbE and HbD lines against the National Health Mission's 2016 guidelines; SMA carrier frequency (about 1 in 40; a north Indian cohort near 1 in 30) and the National Policy for Rare Diseases listing; DMD at about 1 in 3,500 boys, and the years between onset and presentation; the LGMD subtypes most found in India. The brochure draft's figures were generated and are not used.
12. **HbD and HbE.** Whether they are options within a kit or tests of their own. The copy counts conditions, not kits, so the count does not change; the rows in 5.5 and 6.3 do.
13. **The manufacturer and the packing.** Both boxes name Kala Scientific Inc., India, with drug licence TN/KPM/21B/10711. Whether to name it on the website, and which quality certification it holds. Whether every test is packed as a sample collection kit and a reagent kit.
14. **What a laboratory needs.** The equipment list, reagent storage, how cards are sent (courier, post), and the usual turnaround from card to report.
15. **REASSURED.** That every test meets all nine criteria, "real-time connectivity" included.
16. **"Extraction-free" and "direct PCR".** Which tests each describes.
17. **CE and IVD marks.** They appear on both boxes and on the back of the card. What they cover, the CDSCO status of each test, and whether the website may mention either.
18. **LitLife.** ™ or ®.

### People

19. **Dr. Chandak's profile.** "Founder and CEO" and "MD, PhD, DNB" are from the poster. His role in the National Sickle Cell Anaemia Elimination Mission, and his approval of the entry.
20. **Jyothi Vislavath.** "Mr." or "Ms.".
21. **Patron and advisers.** Dr. Reddy's title, the two advisers' affiliations, and a line about each.
22. **Everyone listed.** Their approval of their own entry, and a larger portrait.
23. **The company.** Year founded and LLP identification number.

### Marks and collaborators

24. **The Make in India mark.** Permission to show it on the website; until then the "Made in India" tag stays off.
25. **Each of the thirteen collaborators.** The correct name, what the relationship is, and permission to show the name and the logo. Two names are only initials on the logos: IAMD and NASCO. Whether Cure SMA India and IAMD may be linked from the musculopathy pages.
26. **ICMR and CSIR-CCMB.** Permission to show their logos. Until then their names are typeset.

### Programmes and work

27. **Awareness, counselling and support groups.** How they are run, by whom, and whether the company sets up support groups itself or works through patient organisations.
28. **Training and consultancy.** Whether workshops, laboratory set-up, consultancy and help with projects and grants are still offered. The brochure draft lists "Lab set-up, training & consultancy".
29. **Prenatal testing.** Whether it is offered, and the wording, given the PC-PNDT Act.
30. **The three accounts from the field.** That each is accurate and may be used. The Jharkhand account, which is held back.
31. **Social accounts.** The LinkedIn link on the current site is a personal profile, not a company page, and the X account has an automatic handle. A company page and a chosen handle would serve better. The brochure draft says "Follow us on LinkedIn · YouTube · X"; the YouTube channel has no videos yet, so leave it out of the footer until it has one.
32. **Photographs and site details.** Part 7.2, items 1 to 3. At least three Our work entries with photographs are needed before "Recent work" opens; the sites table can open without them.
33. **The conference.** Its name and date, for the line under the comparison on Technology and for the first Our work entry.

### Contact and legal

34. **WhatsApp.** The brochure draft says "call or WhatsApp" beside the number; this file keeps it. Confirm.
35. **Privacy and Terms.** A lawyer's review; the Grievance Officer's name; how long enquiries are kept; the host; analytics, if any.
36. **How the engagement steps read.** The numbered steps on Develop a test and Partnerships.

### Decisions for the build

37. **The enquiry form.** Whether the form in 5.15 is built for launch, and on which form service; a service outside India is a question under the Digital Personal Data Protection Act, and the privacy page's "who sees it" names it. Until the company decides, the default is: every contact action and every "Ask about …" button opens an email to admin@lighteninglives.in with the subject and the condition filled in, and the form waits.
38. **Who keeps the site up to date.** Our work grows, test statuses change, and News returns later. Whether the company's staff will add entries themselves, or send photographs and text to whoever builds the site. The default is the second: the site stays static, entries live in one data file the builder edits, and the company sends material by email. If the company wants to edit the site itself, that is a different build (a content system and image handling) and should be decided before the inner pages are made.
39. **Smaller open points**, gathered from the pages: whether the typefaces are self-hosted or loaded from Google Fonts (5.16; both are open-licence, so self-hosting is the default and the privacy line then goes); how many days to reply to a privacy request (5.16); whether "rare genetic disorders" testing is available now or in development (5.1, 5.9); the heel prick for newborns (5.6); the regulatory wording under "Our tests" and the trade marks' registration status in Terms (5.17); whether assay development for other organisations is still offered (5.2); how validation is done and with whom (5.9).

---

## 9. Notes for the build

- **Nothing in the site has been changed to make this file.** It replaces the content file of 12 October (in git history) and adds nothing else. Nothing is committed.
- **The approved page.** `lumen.html` carries the 12 October wording. The lines this file changes on it are listed in 5.1 under each section ("Changed from the approved page"). The largest are: the heading and first caption ("spot of blood"); the lead and note under the heading; the eight "why" rows; the seven portfolio rows; the four evidence columns; the "Our work" map sentence and pins; the nine REASSURED meanings; the partners' lead; the programmes' heading and lead; the contact note; and the one new section, "Who we are". `DESIGN.md`'s "Voice and content" section still records "a single drop of blood" as the client's wording and "validated" by ICMR; both follow this file once the company agrees (Part 8, items 1 and 4). Do not apply any of these changes to `lumen.html` until the company has reviewed this file: the approved page is the company's, and the instruction to change it comes from the company, not from this document.
- **The map's data.** `src/js/drop/map-layers.js` pins four places under "Our work". It becomes the 15 sites in 6.1 with the state lines in 6.2, and the sickle cell and thalassaemia layers stay as they are. Designs 01 and 07 keep a copy in `src/js/sample-card/india-data.js`; change both or leave the old designs on the old data, since only Lumen goes live. With 15 pins, chips should appear on pointing, tapping or keyboard focus rather than all at once, and the pin for Hyderabad carries "laboratory" as well as the screening.
- **Components the inner pages need** that `DESIGN.md` does not describe yet, each to be agreed and then added to it: how an inner page opens (4.6) with chips under the lead; a comparison table (Technology); numbered steps with a photograph each (Technology, Programmes); a two-column family section (Solutions); a sites table with marks (Our work); a group of question disclosures (4.7); a list of collaborators; portraits of named staff, an exception to "nobody in a photo may be identifiable"; the 3D box view or its still; the enquiry form and its messages; the list of entries on Our work.
- **Opening in two steps.** Everything marked "At launch" in 3.1 can be built from this file once the company has reviewed it. The DMD and LGMD pages wait for Part 8 items 9 to 11; until then their rows link to Develop a test. "Recent work" on Our work waits for photographs; the sites table does not.
- **Hosting is static.** The contact actions open emails with the subject and condition filled in until the company chooses a form service (Part 8 item 37); entries on Our work live in one data file (Part 8 item 38). Old `.php` addresses cannot be redirected by the server: the Not found page sends readers on, using the table in 3.4.
- **Going live** still means making the Lumen page the home page, removing the comparison toolbar and the line that hides the page from search engines, and adding the canonical link and the 404 page. Those steps are in `README.md` and are not part of this file; they wait for the company's yes.
- **Two things in the approved page are still open** from the design review: a stray script (`assets/js/drop.js`) that hides a state's facts when the map's layer changes, and the "Our vision" label, which is below the contrast minimum on its band.

---

## 10. What is left out of the current website and the drafts, and why

The current site has seven pages and six staff profiles. Read against the brief, three things stand out. It speaks as a charity: its opening slides, its "Impact stories" and its services to individuals all say so. It never mentions the company's strongest proof: LitLife™, the ICMR approval, the patents, REASSURED and the dried blood spot card do not appear anywhere on it. And what it gives search engines to show under each result is either nothing or the purchased template's own advertisement. What it does have, and the brief does not, is the people: the founders, the team, the patron, the advisers and the collaborators. Those are carried over. The rest is below.

| Source | What | What happens to it | Why |
| --- | --- | --- | --- |
| Current site | The three opening slides: "Bringing Hope Through Science", "Every Life Matters", "Science Made Accessible" | Gone. "Every Life Matters" stays with the logo | The charity voice the company wants to leave behind. The brochure draft reuses "Bringing Hope Through Science"; this file does not |
| Current site | The Golden Circle explanation and its diagram | The explanation goes. Why, how and what stay, as three short paragraphs on About | A reader wants the company's reasons, not the model they were arranged with |
| Current site | Three quotations from named people | Not carried over | They name people in connection with their health |
| Current site | Four patient accounts | Three rewritten for Programmes, to be confirmed. One held back | See 5.10 |
| Current site | Testing "at individual and population level" | Institutions only | The brief |
| Current site | "Access to Biobank research data" | Left out | Nothing else mentions it. Add it to Technology if it is offered |
| Current site | Hobbies in the founders' profiles; "near-zero error rate" in a team profile | Left out | The readers are institutions and regulators; the second is a performance claim |
| Current site | The floating WhatsApp and call buttons; the bar of contact details above the header; the developer's credit | Gone | The design's header is one line; a new site |
| 12 October poster | "One drop. Limitless genetic diagnosis", "Any genetic test is possible", "Revolutionizing", "Endless possibilities" | Left out | Statements a clinician or a regulator can ask the company to prove. The pages say what it can stand behind |
| Conference poster | "Painless finger prick"; "single drop"; 100% sensitivity and specificity | Minimally invasive; a spot of blood; no figures | The brief's rules, and the company's choice of 12 October. Part 8, items 1 and 6 |
| Brochure draft | Its figures (carriers, births, percentages) | Not used | The company said they were generated, not sourced. The kit pictures and the family structure were used |
| First draft of this file | Written designs for thalassaemia, DMD and coagulation boxes | Dropped | The thalassaemia boxes exist and are photographed; coagulation is in development; a DMD box, if one exists, should be photographed rather than designed on paper |
| First draft of this file | "What we do" as a new home page section | Not added | The home page is long enough; the three words are the footer's label and the structure of the navigation |
