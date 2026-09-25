# petemag.com — Current Site Overview

## Purpose of this document

This document describes the **existing** website at https://petemag.com as it stands today. It covers structure, pages, templates, content, and visual style, plus the owner's résumé as supporting context.

It is meant as context before planning a rebuild. It does **not** contain design recommendations or a build plan.

**Sources:**
- Owner-supplied screenshots of every public page: Home, the three index pages, Contact, 25 Work case studies, 3 Apps pages and 4 Illustration galleries.
- The owner's résumé, supplied as a Word document (`Peter_Magulak_Resume.docx`).
- Search-engine snippets of indexed pages.
- Answers from the site owner to the audit's open questions (section 10).

The live site blocks automated crawlers, so it was not fetched directly. Some description text in the screenshots was very small. In those cases the description here is a **close paraphrase**, and anything that couldn't be read is marked **(unreadable)** or **(unverified)**.

---

## 1. Summary

| Item | Detail |
|---|---|
| Owner | Peter Magulak |
| Current role (per résumé) | Creative Director, Experience Design, at Comcast (Philadelphia) |
| Type | Personal design portfolio |
| Role presented on site | User Experience / Creative Direction |
| Home tagline | Idea guy. User Experience. Strategy. Design. Branding. Social. |
| Primary domain | **petemag.com** (https://petemag.com). This is the canonical URL for the site. |
| Platform | Squarespace. The same pages are also reachable at the default Squarespace address `peter-magulak.squarespace.com`. |
| Page `<title>` pattern | `{Page Name} — The Portfolio of Peter Magulak` |
| Homepage meta title | "Creative Director Peter Magulak" |
| Homepage meta description | Portfolio of a creative director and UX/product designer, covering user experience, design systems, advertising campaigns, mobile and app design, and illustration. |
| Content volume | 25 Work case studies, 3 Apps pages, 4 Illustration galleries, Resume, Contact |
| Conversion goal | Contact form (freelance / job inquiries) |

---

## 2. Site map

```
/                         Home (split-screen landing page)
├── /work                 Work index — grid of 25 project tiles
│   └── /{project-slug}   25 case-study pages
├── /apps                 Apps index — 3 tiles ("Digital Product" page title)
│   └── /{project-slug}   3 case-study pages
├── /illustration         Illustration index — 4 tiles
│   └── /{gallery-slug}   4 gallery pages
├── /resume               Resume (page itself not captured; content known from the .docx; to be an HTML page)
└── /contact              Contact form
```

Main navigation, in order: **Home · Work · Apps · Illustration · Resume · Contact**. Home is omitted on the homepage itself.

Detail pages stay in their parent section. On a Work case study, "WORK" stays underlined in the nav; on an Apps page, "APPS"; on an illustration gallery, "ILLUSTRATION".

### Known URLs

| URL | Page |
|---|---|
| `/` | Home |
| `/work` | Work index ("My Work") |
| `/apps` | Apps index ("Digital Product") |
| `/illustration` | Illustration index |
| `/contact` | Contact |
| `/comcast-business` | Comcast Business |
| `/comcast-business-mobile` | Comcast Business Mobile |
| `/ihop-ecommerce-website` | IHOP Ecommerce Website |
| `/ihop-menu-photoshoot` | IHOP New Menu Photography |
| `/ihopar` | IHOP Augmented Reality App |
| `/paradise/` | Paradise Pancakes Campaign |
| `/expotv` | Expo TV Redesign |
| `/genvideo/` | gen.video Rebranding |

Slugs for the other pages are unknown. They appear to be short, hand-written slugs rather than a consistent pattern.

---

## 3. Global elements

### Header (all pages except Home)
- A full-width white bar, about 120px tall.
- **Left:** a horizontal text nav in small uppercase sans-serif with wide letter-spacing and grey text. The active section is shown in darker text with an underline.
- **Right:** the "Peter Magulak" logo, a script/serif wordmark on two lines, black.

### Footer
- There is no footer content. Detail pages end with the repeated section grid (see 4.3).

### Persistent UI
- A black "Cookie Preferences" button is fixed at the bottom-left of every page (Squarespace cookie banner).

### Backgrounds
- Header: white.
- Page body: very light grey (about `#f8f8f8`).

---

## 4. Page templates

The site uses **six page templates**.

### 4.1 Home — split-screen landing
- **Left 50%:** a full-height portrait photo of the owner, edge-to-edge.
- **Right 50%:** white, with content vertically centered and left-aligned:
  1. Name, "PETER MAGULAK": large, bold, high-contrast serif, all caps.
  2. Title, "USER EXPERIENCE/CREATIVE DIRECTION": uppercase sans-serif with wide letter-spacing.
  3. Tagline: "Idea guy. User Experience. Strategy. Design. Branding. Social." Grey serif body text.
  4. Nav: Work · Apps · Illustration · Resume · Contact, in small uppercase letter-spaced text.
- No header bar or logo; this page acts as a title card.

### 4.2 Index grid — Work, Apps, Illustration
- A three-column grid of **full-bleed image tiles** with no gutters. Each tile is roughly 519×324px at desktop width, about 16:10.
- **Default tile state:** a photo background with a darkening overlay, a client logo (white or brand-colored) centered, and a project subtitle beneath it in small uppercase serif with very wide letter-spacing (for example "M E N U  P H O T O S H O O T").
- **Illustration tiles** use a white brush-script word, "Illustration", in place of a logo, with a letter-spaced subtitle (MARVEL, LEBOWSKI, MOVIE POSTERS, MISC.).
- **Hover state:** the overlay darkens and the logo fades. The **detail page's title** appears in clean sans-serif, with "— view —" beneath it. The hover title often differs from the visible tile label (see 5.1).
- The whole tile links to the detail page.
- Empty grid cells show the light grey page background.

### 4.3 Case-study detail (Work and Apps)
This is a two-column layout, used by all 28 Work and Apps detail pages.

**Left column** (narrow, about 20% width, top-aligned):
1. **Page title:** a large regular-weight serif that wraps over two or three lines.
2. **Role label:** small uppercase sans-serif, such as `STRATEGY, UX, CREATIVE LEAD`, `CREATIVE LEAD`, `UX, ART DIRECTION`, or `ART DIRECTION`.
3. **Description:** one to five short paragraphs of small grey body text.
4. **LINKS:** present on some pages. It is usually just "Website"; one page lists social channels.
5. **Share:** a small share control with an icon.

**Right column** (main, about 60–65% width, centered): a single vertical stack of media, including:
- full-length desktop page screenshots
- device mockups (laptop, tablet, phone)
- embedded videos with a play button
- photos, banners, social posts, email designs, storyboards and logo studies

**Top right:** small **previous / next arrows** (‹ ›) step to the adjacent project in the same section.

**Bottom of page:** the **full index grid for that section** repeats, full width, as navigation. Work pages show all 25 tiles; Apps pages show the 3 Apps tiles.

Pages are often very long. Many run 10 or more screen heights of images, with a short text block. Two Apps pages (Ben & Jerry's AR, Facebook Canvas) are short, with only one or two media items.

Description structure is fairly consistent:
1. Client problem, ask, or context.
2. What was created and across which channels.
3. Sometimes a result or award.
4. Often a closing line stating that a design system, brand guidelines and a component library were developed alongside the project.

### 4.4 Illustration gallery
- The same header, prev/next arrows and left/right split as 4.3.
- **Left column:** title and Share only. There is no role label or description.
- **Right column:** a vertical stack of large illustrations with generous spacing.
- **Bottom:** the 4-tile Illustration grid repeats.

### 4.5 Contact
- Light grey page with the standard header.
- **Left:** a large "Contact" heading in serif, followed by a short, playful paragraph. It invites compliments on his beard-growing skills, freelance inquiries, or general questions, and promises a reply.
- **Right:** a Squarespace form. All fields are required.
  - Name: First Name and Last Name, side by side
  - Email Address
  - Subject
  - Message (textarea)
  - **SUBMIT**: an outlined button with uppercase text
- No email address, phone number, social links or location is shown.
- **Owner decision:** form submissions should go to **pete@petemag.com**.

### 4.6 Resume
- The live Resume page was not captured, so its current layout is **unverified**.
- **Owner decision:** the Resume page should be an **HTML page**, not a PDF.
- Its content is the résumé summarized in section 7.

---

## 5. Index content inventory

### 5.1 Work (25 tiles, in grid order, left to right and top to bottom)

| # | Tile label (logo — subtitle) | Page title | Role label | Detail |
|---|---|---|---|---|
| 1 | Comcast Business | Comcast Business | UX/Creative Lead | 6.1 |
| 2 | Comcast Business — Enterprise | Comcast Business Enterprise | (unreadable; likely UX/Creative Lead) | 6.2 |
| 3 | Comcast Business — Mobile | Comcast Business Mobile | UX/Creative Lead | 6.3 |
| 4 | Xfinity Mobile | Xfinity Mobile | (unreadable) | 6.4 |
| 5 | IHOP — Ecommerce Site | IHOP Ecommerce Website | Strategy, UX, Creative Lead | 6.5 |
| 6 | IHOP — Menu Photoshoot | IHOP New Menu Photography | Creative Lead | 6.6 |
| 7 | gen.video | gen.video Rebranding | Strategy, UX, Creative Direction | 6.7 |
| 8 | IHOP — Cheesecake Stuffed French Toast | SFT Campaign | Creative Lead | 6.8 |
| 9 | U.S. Army | Website and Mobile App | Creative Lead | 6.9 |
| 10 | IHOP — Latte Lovers | Latte Lover's Campaign | Creative Lead | 6.10 |
| 11 | RFL | RFL Rebranding | Strategy, UX, Creative Direction | 6.11 |
| 12 | Ben & Jerry's | Website and Digital Activations | UX, Art Direction | 6.12 |
| 13 | IHOP — Fresh Market | Fresh Market Campaign | Creative Lead | 6.13 |
| 14 | Expo | Expo TV Redesign | Strategy, UX, Creative Direction | 6.14 |
| 15 | IHOP — Paradise Pancakes | Paradise Pancakes Campaign | Creative Lead | 6.15 |
| 16 | IHOP — Eat Up Every Moment | Contest Campaign | Creative Lead | 6.16 |
| 17 | IHOP — Scary Face Pancakes | Scary Face Pancake Campaign | Creative Lead | 6.17 |
| 18 | Empire State Building (image, no logo) | Digital Redesign and Concepts | Strategy, UX, Art Direction | 6.18 |
| 19 | eBay | eBay Times Square Mobile Only Game | UX, Art Direction | 6.19 |
| 20 | IHOP — Holiday Celebrations | Holiday Celebrations Campaign | Creative Lead | 6.20 |
| 21 | American Heart Association | Digital Redesign | UX, Creative Direction | 6.21 |
| 22 | IHOP — Bakery Favorites | Bakery Favorites Campaign | Creative Lead | 6.22 |
| 23 | IHOP — Double Dipped French Toast | Double Dipped French Toast Campaign | Creative Lead | 6.23 |
| 24 | Bausch + Lomb | Digital Redesign | Art Direction | 6.24 |
| 25 | PTGL (Pro Team Golf League) | Branding and Digital Gaming | Strategy, UX, Art Direction | 6.25 |

**Grouping by client**
- Comcast/Xfinity: 4
- IHOP: 12
- Other clients: 9 (gen.video, Expo, U.S. Army, RFL, Ben & Jerry's, Empire State Building, eBay, AHA, Bausch + Lomb, PTGL — note gen.video and Expo are the same company)

**Grouping by type**, as a rough read:
- UX/product and web platforms: Comcast ×3, Xfinity Mobile, IHOP Ecommerce, gen.video, Expo, RFL, Empire State, AHA, Bausch + Lomb, PTGL, U.S. Army
- Marketing campaigns (mostly limited-time IHOP menu offers): SFT, Latte Lover's, Fresh Market, Paradise Pancakes, Contest, Scary Face, Holiday Celebrations, Bakery Favorites, Double Dipped
- Experiential/interactive: eBay Times Square game, Ben & Jerry's digital activations
- Photography direction: IHOP menu photoshoot

The Work page has no filtering, categories, tags or dates, so all of these types are mixed in one grid.

### 5.2 Apps (3 tiles)

| # | Tile label | Page title | Role label | Detail |
|---|---|---|---|---|
| 1 | IHOP — Augmented Reality App | Augmented Reality App | Creative Direction | 6.26 |
| 2 | Ben & Jerry's — Augmented Reality | Augmented Reality App | Art Direction | 6.27 |
| 3 | IHOP — Facebook Canvas | Facebook Canvas | Creative Lead | 6.28 |

### 5.3 Illustration (4 tiles)

| # | Tile label | Page title | Detail |
|---|---|---|---|
| 1 | Illustration — Marvel | Marvel Movie Posters | 6.29 |
| 2 | Illustration — Lebowski | The Big Lebowski | 6.30 |
| 3 | Illustration — Movie Posters | Movie Posters | 6.31 |
| 4 | Illustration — Misc. | Misc. Work | 6.32 |

---

## 6. Detail page content

Each entry lists the role label, a paraphrased description, and the media stack from top to bottom. Entries are in grid order.

### Work

#### 6.1 Comcast Business
- **Role:** UX/Creative Lead
- **Description:** Led UX and designers on the "Learn" experience for new and existing Comcast Business customers, including Test and Target. Partnered with Sales, Marketing, PM, Development, Analytics and Accessibility. Led design systems and component libraries across the Learn ecosystem.
- **Links:** Website
- **Media stack:** full-page screenshots of live Comcast Business marketing pages:
  - homepage ("High-speed internet… $39/mo" hero, plan cards, "Need help finding the right products?" band, quote form)
  - "Be Ready for What's Next" connectivity page
  - cybersecurity page ("Helping safeguard your network isn't optional")
  - Bar and Restaurant TV page
  - plan and product selection pages

#### 6.2 Comcast Business Enterprise
- **Role:** unreadable; likely UX/Creative Lead to match 6.1.
- **Description:** a short paragraph (unreadable). It appears to mirror 6.1, applied to the Enterprise audience.
- **Media stack:** full-page screenshots of Comcast Business Enterprise pages, each ending in a "Request a consultation" form and a dark footer:
  1. Enterprise homepage: "Technology solutions for your future-ready enterprise"
  2. Products and Services
  3. Industry page: Restaurants and Food Services
  4. SD-WAN on the ActiveCore Platform
  5. ActiveCore Software-Defined Networking

#### 6.3 Comcast Business Mobile
- **Role:** UX/Creative Lead
- **Description:** Led UX and designers for the Learn experience for new and existing Comcast Business Mobile customers. Partnered with Sales, Content, Marketing, PM, Development, Analytics and Accessibility.
- **Links:** Website
- **Media stack:** full-page screenshots with a navy footer:
  1. Mobile homepage:
     - "Mobile service designed for small businesses"
     - "Choose a data option": Unlimited or By the Gig
     - coverage map
     - device picker
  2. Device deals page (Google Pixel, Samsung Galaxy Z Fold and Z Flip offers)
  3. Savings calculator page
  4. Plans page (Unlimited and By the Gig pricing, "Compare your options", FAQ)

#### 6.4 Xfinity Mobile
- **Role / description:** small text, unreadable.
- **Media stack:** a long stack of Xfinity Mobile marketing pages:
  1. "Find your fit" phone-case and accessory pages
  2. Product launch landing pages for new iPhones: hero, trade-in offers, illustrated city/cloud graphics, and a US coverage map
  3. Accessory product listings
  4. Several editorial/lifestyle layout grids
  5. "A Smart Home for your Phone" smart-home page (thermostat, lights, camera)

#### 6.5 IHOP Ecommerce Website
- **Role:** Strategy, UX, Creative Lead
- **Description:** IHOP faced a crowded market and fewer sit-down diners, so it added online ordering (IHOP 'N Go). The work ran in an agile cycle: stakeholder interviews, user research, analytics, strategy, wireframes, prototypes and high-fidelity design. Users can customize an order, choose pickup or delivery, find the nearest store, and pay online or in store. A design system, brand guidelines and component library were developed alongside.
- **Links:** Website
- **Media stack** (desktop screens unless noted):
  1. Menu page with a category sidebar and product-card grids (Limited Time Offer, Family Meals, Gluten Friendly) with prices
  2. "Guests also added" upsell page
  3. IHOP 'N Go checkout sign-in (continue as guest, log in, Facebook or Google sign-in)
  4. Restaurant confirmation step
  5. "Almost there" step choosing pickup or delivery
  6. Full checkout: restaurant details, map, order options, contact info, payment, and an order-summary sidebar
  7. Red site footer
  8. Mobile screens: a phone mockup, a product detail page (Colorado Omelette), and mobile checkout
  9. Restaurant locator with a map and store cards
  10. Gift Cards page
  11. Footer

#### 6.6 IHOP New Menu Photography
- **Role:** Creative Lead
- **Description:** Directed a photoshoot refreshing IHOP menu imagery for print and digital. Over 120 menu images were shot in one month.
- **Media stack:** about 21 single food photos in one column: pancakes, a burger, stuffed French toast, a club sandwich, omelettes, crepes, waffles, a skillet breakfast, soup, appetizers, a wrap, a salad, a turkey dinner and a sundae. There is no mockup or context imagery.

#### 6.7 gen.video Rebranding
- **Role:** Strategy, UX, Creative Direction
- **Description:** Expo.tv rebranded as gen.video to attract new brands and focus on its most engaged creators. The work covered a logo and icon (the icon symbolizes the conversation between users and brands), a playful font, and a warm palette. It also included a new website explaining the community and how brands can use honest product reviews. A design system, brand guidelines and component library were developed alongside.
- **Links:** Website
- **Media stack:**
  1. gen.video logo: a multicolor geometric icon over a script wordmark
  2. Full homepage:
     - video hero reading "Replace YouTube with Social", with "I'm a Creator" and "I'm a Brand" buttons
     - red band showing an influencer → product review → retailer flow with brand logos
     - Featured Influencer Programs grid
     - Identify / Reach / Analytics steps
     - product UI screenshot
     - join CTA
     - dark footer
  3. Business card, front and back

#### 6.8 SFT Campaign (IHOP Cheesecake Stuffed French Toast)
- **Role:** Creative Lead
- **Description:** A holiday limited-time campaign for Cheesecake Stuffed French Toast. It was supported across digital and social with a homepage takeover, landing pages, social, email and branded holiday items.
- **Media stack:**
  1. Holiday gift-wrap hero image
  2. Branded ugly-sweater design, front and back
  3. IHOP homepage with SFT modules, IHOP 'N Go promo, Pancake Revolution, Snowman Pancakes and Snapchat
  4. Landing variant with the three flavors (Toffee Apple Cheesecake, OREO Cookies & Cream, Strawberry Cheesecake), a combo row, and Pumpkin Spice Pancakes
  5. Grid of six social posts
  6. Email design

#### 6.9 Website and Mobile App (U.S. Army)
- **Role:** Creative Lead
- **Description:** small text, mostly unreadable. It covers a fitness-themed recruitment site and mobile experience for the U.S. Army.
- **Links:** Website
- **Media stack:** screens from "C.O.R.E. OPS", a camouflage-and-yellow themed fitness program:
  1. Welcome screen showing two runners
  2. Four chapter screens: Challenge, Overcome, Recover, Evolve
  3. "Mission 1: Snake Eyes" workout screen
  4. Exercise how-to screen (crunches)
  5. "Did you complete your first mission?" prompt
  6. "Congratulations! Hooah! You earned your first stripe" reward screen
  7. Grid of six mobile versions of the same screens

#### 6.10 Latte Lover's Campaign (IHOP)
- **Role:** Creative Lead
- **Description:** small text, unreadable. It covers a fall coffee-flavored limited-time menu campaign.
- **Media stack:**
  1. Homepage combo module
  2. IHOP homepage with a "Latte Lover's" hero. The video slot is labeled **"FPO VIDEO"**, a placeholder left in the screenshot. The page also has Pumpkin Spice Pancakes, Good Morning Breakfast Lovers and Snapchat modules.
  3. Latte Lover's landing page with coffee-bean photography and menu items at $4.99
  4. Lifestyle photo of the campaign on a phone and notebook
  5. Grid of social posts
  6. Email design ("It's love at first bite!")

#### 6.11 RFL Rebranding
- **Role:** Strategy, UX, Creative Direction
- **Description:** RFL Electronics had changed its approach to product engineering, adding solutions and technologies for utility communications. To express this, RFL rebranded with a new identity, tagline, product sheets and messaging. The brand launched at a trade show, supported by a print ad campaign and landing pages. A design system and brand guidelines were developed alongside.
- **Links:** Website
- **Media stack:**
  1. Large RFL logo (white letters on a navy rounded shape)
  2. Website homepage: "Solutions for an Evolving World", product spotlight, systems solutions, events, operating manuals, dark footer
  3. Product detail page (EXMUX 3500M IP Access Multiplexer)
  4. Two print ads or product sheets showing power lines at sunset ("Your world is changing and so are we")
  5. Conference poster/cover: "Pilot Relaying Communications"

#### 6.12 Website and Digital Activations (Ben & Jerry's)
- **Role:** UX, Art Direction
- **Description:** As art director for Ben & Jerry's digital, worked on the website, rich-media ads (games), social media, email blasts and many unused concepts.
- **Media stack**, all in the brand's illustrated cartoon style (blue sky, green hills, cows):
  1. "Flipped Out" sundae rich-media game: intro, how-to-play, serving meter and score screens
  2. "Pint Defenders" Facebook game
  3. "Udderly Unique Board Designs," a snowboard customizer tool
  4. "Perfect Mooove" cow-jump game

#### 6.13 Fresh Market Campaign (IHOP)
- **Role:** Creative Lead
- **Description:** A seasonal fresh-fruit limited-time campaign. It was supported with video, homepage modules, a landing page, Snapchat filters, email, and paid/social promotion.
- **Media stack:**
  1. Video: a farmer in a strawberry field
  2. Food photo spread
  3. IHOP homepage with Fresh Market hero ($4.99), "Fundue" and other modules
  4. Phone-in-hand mockup
  5. Fresh Market landing page
  6. Phone video mockup
  7. Two phones showing Snapchat filters
  8. Email design

#### 6.14 Expo TV Redesign
- **Role:** Strategy, UX, Creative Direction
- **Description:** Expo TV updated its look to attract engaged, "always on" influencers. The work started with a logo redesign that merged a camera lens with a conversation bubble, positioning Expo at the center of consumer-brand dialogue. Next came a site overhaul with a friendlier expanded palette and a more authoritative font. The branding was then extended to social, print and PowerPoint, with a design system, brand guidelines and component library.
- **Media stack:**
  1. Full homepage: "Pay It Forward" hero, "Try new products. Get points. Earn rewards." offers, video review grid, orange "Follow Expo!" band, join CTA, footer
  2. Promo banners: "Speak Up", Huggies "Get VIP Access", CoverGirl "Brand of the Month", and a P&G thank-you
  3. Logo construction: camera lens + conversation bubble
  4. Logo color variants: Consumer (green), Commerce (blue), Distribution (orange)

#### 6.15 Paradise Pancakes Campaign (IHOP)
- **Role:** Creative Lead
- **Description:** A limited-time campaign for tropical Paradise Pancakes, aimed at driving restaurant traffic and appetite appeal. It included a first-in-category Facebook Live event that filmed the pancakes on a beach for about an hour and a half, three times in one day, to support "breakfast all day." That event won a MarCom Gold Award. It was supported across digital and social:
  - a homepage module
  - messaging that switched to "Paradise Hour" from 5–8 PM each night ("Because it's always 5 o'clock somewhere")
  - a "Breakfastarian in Paradise" page
  - an additional product information page
- **Media stack:**
  1. Facebook Live video with a comments panel
  2. Laptop-on-the-beach mockup
  3. Tablet on a beach towel
  4. IHOP homepage with Paradise Pancakes hero, countdown clock, free-refill offer and other modules
  5. Paradise Pancakes landing page
  6. Three hero variants, including "Paradise Hour"
  7. "Breakfastarian in Paradise" page
  8. Phone with a Snapchat filter
  9. Beach lifestyle and food photos

#### 6.16 Contest Campaign (IHOP "Eat Up Every Moment")
- **Role:** Creative Lead
- **Description:** small text; close paraphrase. Supported IHOP's new "Eat Up Every Moment" platform with the "My IHOP Moment" photo contest. Users submitted photos and descriptions of moments at IHOP for a chance to win breakfast for a year. It was supported by a microsite, social, a 360 video and a "moment generator" that paired moments with menu items.
- **Media stack:**
  1. Contest landing page:
     - "Enter for your chance to win breakfast for a year in the My IHOP Moment Photo Contest"
     - three-step How to Enter
     - "Eat Up Every Moment" badge
     - video module with example moments ("She's Growing Up So Fast", "I Just Signed My First Lease")
  2. "The polls are now closed" page with a grid of entrant photos
  3. Laptop mockup of the winners page

#### 6.17 Scary Face Pancake Campaign (IHOP)
- **Role:** Creative Lead
- **Description:** small text; close paraphrase. IHOP's annual October Scary Face Pancakes event, where kids 12 and under eat free. It was supported across digital and social with a homepage module and landing page, downloadable activity books, and Snapchat filters.
- **Media stack:**
  1. Video of a scary-face pancake
  2. Phone showing a pancake face
  3. Laptop in a Halloween scene
  4. Landing page: "Scary Face Pancakes are FREE today! Kids 12 and under get one FREE 7am–10pm", with a video and "The Halloween Party Lives On" downloads
  5. Activity book mockup
  6. Pumpkin cutout activity book mockup
  7. Snapchat filter on a phone

#### 6.18 Digital Redesign and Concepts (Empire State Building)
- **Role:** Strategy, UX, Art Direction
- **Description:** small text; close paraphrase. A redesign of the Empire State Building website. The goal was a central hub where visitors from around the world could buy observatory tickets and find tourist information, with links to a secure area for new business. The page shows several iterations of the site design. A design system and brand guidelines were developed alongside.
- **Media stack:**
  1. Homepage concept with sections for Tourism, PR Events & Branding, Broadcasting and Commercial Leasing
  2. Four dark-blue concepts with neon swirl graphics: a lit tower ("I wish you peace"), a proposal photo, an aerial city view, and a content page
  3. "Light up New York's Nightlight," a tower-lighting color picker tool
- The concepts contain lorem ipsum navigation and copy.

#### 6.19 eBay Times Square Mobile Only Game
- **Role:** UX, Art Direction
- **Description:** eBay wanted to reposition from an auction site to a shopping destination. Building on its Daily Deal program, it ran a game-show-style interactive game on Times Square billboards that people played by text message. The game was supported by a microsite, rich media, emails and influencer bloggers, with animated billboards. The page reports large first-week gains: roughly a 260% increase in first-time buyers and a multi-fold increase in first-time Daily Deal purchases.
- **Media stack:**
  1. Video: a Times Square billboard
  2. Microsite homepage ("eBay let's make a daily deal")
  3. Microsite press room page
  4. Billboard creative:
     - "Pull Up a Chair Times Square"
     - product/price reveal
     - "How Low Will eBay Go?" text-to-vote price options
     - "The Daily Deal is… 56% off"
     - "eBay Comes to Times Square"

#### 6.20 Holiday Celebrations Campaign (IHOP)
- **Role:** Creative Lead
- **Description:** A holiday limited-time campaign. It was supported across digital and social with a homepage module, a landing page and a "Breakfastarian" story page. Other pieces were Snapchat filters, a Facebook Live event, rich-media banners and a #BreakfastFriday social push.
- **Media stack:**
  1. Facebook Live video
  2. Holiday video still
  3. Laptop mockup
  4. Tablet and phone mockup
  5. Illustrated landing page, "'Twas the Night Before Breakfast"
  6. Snapchat filter (#BreakfastFriday)
  7. Several animated pancake-character images

#### 6.21 Digital Redesign (American Heart Association)
- **Role:** UX, Creative Direction
- **Description:** Heart disease kills more women than all cancers combined. For three years, as art director at Edelman for the AHA, he helped develop Go Red for Women, Choose to Move and Start. Go Red for Women was a national movement urging women to take charge of their heart health. Awareness among women reportedly rose from about 34% to 54% after launch. A design system, brand guidelines and component library were developed alongside.
- **Media stack:**
  1. Go Red for Women homepage
  2. AHA "Start" heart-health page ("7 Simple Things" and a pledge counter)
  3. "Choose To Move" program page

#### 6.22 Bakery Favorites Campaign (IHOP)
- **Role:** Creative Lead
- **Description:** A limited-time bakery-themed menu campaign. It was supported with a homepage module, a landing page, social and Snapchat, and animated food imagery.
- **Media stack:**
  1. Pancake photo collage
  2. "Snap Away!" Snapchat creative
  3. Laptop and device mockup
  4. IHOP homepage with a "Bakery. Breakfast. Delicious." hero
  5. Landing page including a Kids Eat Free section
  6. Three hero variants
  7. Snapchat filter on a phone
  8. Food photo

#### 6.23 Double Dipped French Toast Campaign (IHOP)
- **Role:** Creative Lead
- **Description:** small text; close paraphrase. A limited-time campaign for Double Dipped French Toast, aimed at driving restaurant traffic. It was supported across digital and social:
  - a homepage module whose background changed through the day (morning, afternoon, night) to reinforce breakfast all day
  - a Breakfastarian page
  - a rich-media banner
  - a Snapchat filter
  - social promotion on Facebook and YouTube
- **Links:** Website plus several social channels (roughly Facebook, Twitter, Instagram, Tumblr, Vine)
- **Media stack:**
  1. Video hero
  2. Laptop, tablet and phone mockup
  3. IHOP homepage
  4. Three hero variants: day, sunset, night
  5. Yellow "only at IHOP" animation frame
  6. Composite image: French toast towering over the New York skyline

#### 6.24 Digital Redesign (Bausch + Lomb)
- **Role:** Art Direction
- **Description:** Bausch + Lomb had hundreds of microsites, one per product, tracked in a PowerPoint file, and wanted them organized into a central hub. This was new-business pitch work.
- **Media stack:**
  1. Corporate homepage concept
  2. Two hero variants
  3. Product search page with filters and a results grid
  4. Brand/product detail page (ReNu)
- The mockups use lorem ipsum placeholder copy.

#### 6.25 Branding and Digital Gaming (PTGL — Pro Team Golf League)
- **Role:** Strategy, UX, Art Direction
- **Description:** small text; close paraphrase. Branding and a website and fantasy-golf gaming platform for the Pro Team Golf League, a team-based golf league. A design system and brand guidelines were developed alongside.
- **Media stack:** five full-page screenshots in a green-and-dark theme:
  1. Homepage: "USA vs. Canada Team Match" hero, "Beyond Fantasy: You Control This Game" and news
  2. Featured Articles page
  3. "Strat-a-golf" game dashboard
  4. Tournament coverage page (USA vs. Canada)
  5. Match scorecard page

### Apps

#### 6.26 Augmented Reality App (IHOP)
- **Role:** Creative Direction
- **Description:** The goal was to drive restaurant traffic and create awareness of the limited-time Summer Splashers drinks and Appetizer Sampler. The team created two AR games in the IHOP Play app. Diners scanned a table ad with the phone camera to play, then shared screengrabs to Facebook and Twitter. IHOP's website and social channels promoted downloading the app.
- **Media stack:**
  1. Photo of a phone scanning a table tent ad
  2. Three pages of hand-drawn storyboard sketches
  3. Seven iPad game screens:
     - "Select a drink" (Lemonade, Cherry Lemonade, Mango Lemonade)
     - catch-the-falling-fruit gameplay
     - "Ooops!"
     - "You Won!"
     - share to Facebook/Twitter
  4. Two branded loading screens
  5. "Download the IHOP Play app now" landing page with how-to-play steps

This is the only case study on the site that shows early process work (sketches and storyboards).

#### 6.27 Augmented Reality App (Ben & Jerry's)
- **Role:** Art Direction
- **Description:** "I worked on Ben & Jerry's first Mobile App. We created an Augmented Reality app where users would point their camera at the cap of certain ice cream pints, and an environment would appear on their screen related to the flavor and fair trade."
- **Media stack:** a single embedded video, a low-resolution phone demo.

#### 6.28 Facebook Canvas (IHOP)
- **Role:** Creative Lead
- **Description:** Working closely with Facebook, the team created one of the first Facebook Canvas ads in the category, and then a second.
  - **First ad:** promoted the range of breakfast offerings available only at IHOP. The foods were paired with moments, big and small, with IHOP as the place to sit and celebrate them at any time of day.
  - **Second ad:** promoted IHOP's Fresh Fruit offerings, which could be ordered as French toast or crepes. It was mostly video, with craveable food images and the price point used as a traffic driver.
  - **Both ads:** ended with driving directions to the user's nearest IHOP.
- **Media stack:** two phone-mockup videos:
  1. "The Tooth Fairy paid a visit! Treat him!"
  2. Fresh Market

### Illustration

#### 6.29 Marvel Movie Posters
- **Media stack:** three stylized vector fan posters, each with a studio-style billing block:
  - Iron Man (red, circuit-board motif)
  - Captain America: The First Avenger (vintage cream poster)
  - The Incredible Hulk (green and purple)

#### 6.30 The Big Lebowski
- **Media stack:** four tall vertical vector posters of film characters. Each has a bowling-themed frame and a film quote. Two quotes contain profanity.

#### 6.31 Movie Posters
- **Media stack:** three minimalist fan posters:
  - Bill & Ted's Excellent Adventure: a phone-keypad concept
  - The Good, the Bad and the Ugly: a folded vintage poster style
  - Major League: a baseball cap and glasses on teal

#### 6.32 Misc. Work
- **Media stack:**
  1. A comic-book cover parody for the TV show *Chuck*
  2. A high-contrast black-and-white Johnny Cash poster
  3. A character illustration from *Metalocalypse* ("William Murderface")

---

## 7. Résumé content (from the supplied .docx)

This is supporting context for the Resume page and for dating the portfolio work.

### Header
- **Name:** Peter Magulak
- **Title:** Creative Director, Experience Design
- **Contact line:** email and phone (omitted here) | linkedin.com/in/petermagulak | petemag.com

### Professional summary
Creative director and experience-design leader for Fortune 500 organizations. Highlights:
- building and scaling design teams
- establishing enterprise design systems
- award-winning user-centered work across web, mobile and emerging platforms
- comfortable in both executive storytelling and hands-on agile delivery
- integrating AI tools into creative operations

### Experience

| Dates | Role | Company | Notes |
|---|---|---|---|
| Jan 2025 – present | Creative Director, Experience Design | Comcast, Philadelphia | Leads design teams across SMB, Enterprise and Comcast Business Mobile. Owns end-to-end UX and creative strategy with product leadership and C-suite. Oversees Global Design System governance. Works in an agile model with Engineering, Accessibility, QA, Content and Copy. Integrates AI tools (Adobe Firefly, Midjourney, GitHub Copilot). |
| Jun 2018 – Jan 2025 | Associate Creative Director, Experience Design | Comcast | Led designers across new-customer acquisition, SMB, Enterprise and Business Mobile. Directed UX strategy. Managed hiring, reviews and mentorship. Led Global Design System efforts. Ran usability tests and research. |
| Jan 2014 – Dec 2017 | Associate Creative Director | MRM//McCann, Princeton NJ | Creative lead for IHOP across mobile, desktop, video and social. Contributed to wins for NY Lotto and U.S. Army. Directed art directors, designers, UX and tech. Wrote scripts, storyboarded and directed video, including live social events. |
| Jan 2013 – Jan 2014 | Senior Art Director | D2 Creative, Somerset NJ | — |
| Jan 2010 – Jan 2014 | Creative Director | Magulak Design, New Jersey | — |
| 2006 – 2010 | Art Director | Edelman Digital, New York area | — |
| 2004 – 2006 | Junior Art Director | Scott Kay, Inc., Teaneck NJ | — |
| 2002 – 2003 | Designer | East Coast Media, LLC, Hillsborough NJ | — |

### Core competencies
- **Design & UX:** UX design, interaction, visual, motion, design systems, usability testing, user research, wireframing, prototyping, information architecture
- **Leadership:** creative direction, team management, hiring and mentorship, agile, stakeholder presentations, cross-functional collaboration, strategic planning
- **Tools:** Figma, Adobe CC, Adobe Firefly, Jira, Confluence, GitHub Copilot, ChatGPT, Claude, Midjourney, Replit, Pencil, Zeplin, InVision, Keynote, Final Cut Pro
- **Channels:** web, mobile apps, e-commerce, social, display, email, video production, augmented reality, print

### Education
- BFA, Fine Arts, University of Rhode Island
- SCTE Cornell Agile Leadership Program, 2023

### Awards
- **2025:**
  - Communicator Awards for Comcast Business: Homepage Design (Gold, Award of Excellence), Business to Business (Silver), Website Redesign (Silver)
  - Gold Stevie Awards, American Business Awards: Achievement in Web Design, and Achievement in Web Writing/Content
- **Previous:**
  - MarCom Platinum: Comcast Business SMB Rearchitecture Launch
  - MarCom Gold and AVA Digital Gold: IHOP Paradise Pancakes Facebook Livestream
  - Hermes Platinum: IHOP Facebook Page
  - Guest speaker, Digital DUMBO "Raise the (Blue) Roof" party, 2014

### Select brand experience
Comcast, Xfinity Mobile, IHOP, U.S. Army, American Heart Association, Empire State Building, eBay, Unilever, Dove, Ben & Jerry's, Kingsford, Heinz, Starbucks, Barilla, Bush Beans, Chipotle, Pepsi, AstraZeneca, Pfizer, Bausch+Lomb, King Pharmaceuticals

### Cross-reference between résumé and site
- **Approximate eras**, inferred by matching clients to employers:
  - Comcast/Xfinity work: 2018–present
  - IHOP work and U.S. Army: MRM//McCann, 2014–2017
  - AHA: Edelman, 2006–2010 (the case study itself says Edelman)
  - Other older projects (eBay, Ben & Jerry's, Bausch + Lomb, Empire State, Expo/gen.video, RFL, PTGL) are **unverified**. They likely fall in the Edelman, Magulak Design or D2 Creative years.
- **Awards:**
  - Only the Paradise Pancakes MarCom Gold is mentioned on the site.
  - The 2025 Comcast awards, the MarCom Platinum for the SMB rearchitecture, and the Hermes Platinum do not appear on the site.
- **Brands on the résumé but not on the site:** Unilever, Dove, Kingsford, Heinz, Starbucks, Barilla, Bush Beans, Chipotle, Pepsi, AstraZeneca, Pfizer, King Pharmaceuticals and NY Lotto.
- **Positioning:** the résumé leads with leadership, design systems and AI tooling, but the site's text says little about team leadership or AI.

---

## 8. Visual style (as observed)

### Typography
Font names are estimated from the screenshots.
- **Display serif:** a high-contrast serif, possibly Playfair Display. It is bold for the homepage name and regular weight for page and case-study titles.
- **UI sans-serif:** a clean sans-serif, possibly PT Sans or Proxima Nova. Used for the nav, role labels, form labels, body text and hover titles. Nav and labels are uppercase with wide tracking.
- **Tile subtitles:** a small serif in uppercase with very wide letter-spacing.
- **Logo:** a custom script/serif wordmark reading "Peter Magulak".
- **Illustration tiles:** a white brush-script "Illustration" wordmark.

### Color
- The site chrome is neutral: white, light grey `#f8f8f8`, dark charcoal text (about `#333`), and mid-grey secondary text.
- All color comes from project imagery and client logos.
- Tiles use a dark translucent overlay to keep white text legible.

### Imagery
- Full-bleed lifestyle and food photography on the index tiles.
- The original image files are available outside Squarespace, so the rebuild doesn't need to pull images from the current site.
- Case studies mostly show full-length page screenshots, plus device mockups, video embeds, social and email creative, storyboards and logo studies.
- Annotations and callouts are not used.

### Layout
- Edge-to-edge grids on the index pages and at the foot of detail pages, with no gutters.
- A two-column split (narrow text, wide media) on detail and Contact pages; a 50/50 split on Home.
- A large amount of empty grey space below short grids (Apps, Illustration).

### Interaction
- Tile hover reveals the title and "— view —".
- Prev/next arrows on detail pages.
- A Share control on detail pages.
- Embedded video players on many case studies. The videos are hosted on **Vimeo**.
- No other animation is visible.

---

## 9. Observed issues in the current build

These are factual observations about the current site, noted for context only.

**Navigation and labeling**
- Some letter-spaced tile subtitles wrap awkwardly or are hard to read over busy photos, such as "AUGMENTED REALITY APP" and "COMCAST BUSINESS ENTERPRISE".
- On the index grids, a project's real title appears only on hover. The tile label and page title often don't match. For example, "Eat Up Every Moment" opens "Contest Campaign", "Cheesecake Stuffed French Toast" opens "SFT Campaign", and the U.S. Army tile opens "Website and Mobile App".
- Several page titles are duplicated or generic:
  - "Digital Redesign" is used for both AHA and Bausch + Lomb.
  - "Augmented Reality App" is used for both IHOP and Ben & Jerry's.
  - "Website and Mobile App" and "Website and Digital Activations" don't name the client.
- The Empire State tile has no logo or label, only a photo.

**Case-study content**
- Case-study text is short. Only IHOP AR shows early process work (sketches). Stated results appear only on eBay, AHA and Paradise Pancakes.
- Many detail pages are extremely long image stacks. Full-page screenshots are shown at small scale, so their text is unreadable.
- Description text is very small. On several pages (Comcast Enterprise, Xfinity Mobile, U.S. Army, Latte Lover's) it is effectively unreadable in a full-page capture.
- Placeholder content is visible in several places:
  - lorem ipsum in Bausch + Lomb, gen.video, parts of Expo and the Empire State concepts
  - an "FPO VIDEO" slot in Latte Lover's
- Several descriptions contain typos, for example "EXPOT TV", "overhall" and "palate".
- Some media is low quality, for example the blurry phone video on Ben & Jerry's AR.

**Structure and scope**
- The index pages have no categorization or dates. Current Comcast product work sits beside roughly 10–15-year-old campaigns and pitch work.
- IHOP is 12 of 25 Work tiles, plus 2 of 3 Apps tiles.
- The split between Work and Apps is inconsistent. App-like work (the U.S. Army mobile app and the eBay mobile game) sits in Work, while Facebook Canvas ads sit in Apps.
- Some illustration pieces contain profanity (the Lebowski quotes, a gesture in the Cash poster).
- The Contact page offers only a form, with no direct email or LinkedIn link, although both are on the résumé.
- The site under-represents the résumé's recent awards, leadership scope and AI tooling.
- The site blocks automated crawlers via robots rules.

---

## 10. Open questions

### Answered by the owner

| Question | Answer |
|---|---|
| What is the site's URL? | **petemag.com** is the primary domain. |
| Should the Resume page be HTML or a PDF? | It should be an **HTML page**. |
| Are there hidden, unlinked or password-protected pages? | **No.** The pages documented here are the whole site. |
| Where should Contact form submissions go? | To **pete@petemag.com**. |
| Are the original assets available outside Squarespace? | **Yes.** The original images are available outside Squarespace. |
| Where are the videos hosted? | On **Vimeo**. They are embedded into the Squarespace pages. |

### Still open
- What are the exact font families and color values? These could be taken from Squarespace settings or the page CSS.
- What is the exact description text for pages where it was unreadable (6.2, 6.4, 6.9, 6.10, and to a lesser degree 6.16–6.18, 6.23, 6.25)?
- What are the project dates for the older work not covered by the résumé mapping?
- Are there analytics, SEO settings or domain/DNS details that need to carry over?
