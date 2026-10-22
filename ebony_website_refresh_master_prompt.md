# EBONY Website Refresh — Master Coding Agent Prompt

> **Project:** `https://ebony.co.in`  
> **Purpose:** Make the existing EBONY website simpler, more inspiring, easier to browse, and more effective at turning kitchen-design interest into genuine enquiries.  
> **Instruction:** Read this brief fully. Inspect the repository first. Reply with a concise 10-line implementation plan, then continue and implement the changes without waiting for approval. Do not stop after offering recommendations or mock-ups.

---

## 1. Your role and the outcome

Act as a senior UI/UX designer, website copywriter, accessibility-minded front-end engineer, and conversion-focused product designer.

EBONY's website should feel like a welcoming design studio showing beautiful kitchens—not a technical catalogue full of specialist terminology. Many visitors are homeowners who know what they like visually but may not understand cabinet materials, hardware models, technical tolerances, or manufacturing jargon.

Deliver an **actual code-level refresh of the existing website**, not a brand-new application or a visual proposal only.

### Main goals

1. **Reduce homepage copy by approximately 50–60%** where practical. Remove repetition and technical explanations that do not help a first-time visitor choose a style or take the next step.
2. Use natural, clear English that an ordinary homeowner can understand at a glance.
3. Make kitchen inspiration the centre of the experience: strong photography, appealing style names, clear layout choices, and practical storage ideas.
4. Improve visual hierarchy, page rhythm, mobile navigation, readability, and the path from exploring designs to contacting EBONY.
5. Add restrained transitions and useful interactions. The site should feel smooth and polished—not busy, slow, or over-animated.
6. Keep EBONY recognisable. Preserve its existing logo, core brand identity, services, and working site features unless the repository or owner confirms a change is needed.
7. Keep necessary technical details available on relevant detail pages or behind optional “View Details” sections. Simplify the journey; do not destroy useful information.

**Success looks like:** a visitor can understand what EBONY offers, find a kitchen style or layout they like, view genuine work, and enquire without reading long technical paragraphs.

---

## 2. Critical preflight: inspect before changing anything

Do not assume the framework, directory structure, routes, available images, APIs, or working features from this brief. Discover them in the actual repository.

Before making changes:

1. Identify the framework, routing approach, build scripts, package manager, existing component patterns, CSS system, and installed animation libraries.
2. Inspect the homepage and all current navigation destinations. Record the **actual existing routes** rather than creating or preserving a guessed route list.
3. Locate the source of homepage copy, collection data, project data, testimonials, contact details, SEO metadata, analytics, and form submissions.
4. Check available EBONY imagery, image dimensions, fonts, icons, and logos. Reuse suitable assets first.
5. Identify any current working enquiry forms, WhatsApp links, telephone links, maps, CRM/API connections, analytics, and SEO/structured-data setup. Keep working integrations intact.
6. Open the current canonical production website and compare it with the local implementation. If the public site and repository disagree, record that discrepancy before editing.
7. Give the user a concise 10-line plan, then continue implementation without waiting for a reply.

### Important: verify contact details and business claims

Preliminary public-page results have shown inconsistent EBONY details between indexed site versions. Contact numbers, email addresses, collections, and business metrics may not match across versions. **Do not blindly copy contact details or claims from this brief, search snippets, or a single old page.** Verify them against the canonical site and the repository's current source of truth.

Use these rules:

- Preserve the verified, currently intended phone number, email, address, and active social links.
- Do not silently swap one phone number or email for another.
- Do not publish a metric or promise if its source is unclear or conflicting. Keep it out of prominent marketing copy and list it for owner confirmation in the final report.
- Treat claims such as “15+ years,” “500+ finishes,” “3-day installation,” “10-year warranty,” “48-point quality check,” “10,000+ homes,” “35+ designers,” or “pan-India service” as **claims to verify**, not facts automatically approved for reuse.
- Verify whether a 3D plan, studio visit, home visit, WhatsApp enquiry, warranty, or installation timeline is genuinely offered before presenting it as a guaranteed service.
- Where a claim cannot be verified without blocking progress, write copy that avoids the claim and continue the redesign.

Keep a small internal list of unresolved factual questions and include it in your final completion report.

---

## 3. Non-negotiable implementation rules

### Do

- Reuse the current stack and established patterns where possible.
- Preserve existing routes, working links, backend behaviour, analytics, and SEO essentials.
- Use genuine EBONY photos for completed projects and existing products.
- Keep the homepage content concise, image-led, and easy to scan.
- Put editable copy and collection data into a central content/data file when this fits the current architecture.
- Build reusable components for repeated cards, filters, project grids, process steps, CTA blocks, and other recurring patterns.
- Make every button, filter, tab, form, and card action work as labelled.
- Check phone and email links on mobile and ensure users can return from modals or menus easily.
- Test real pages, not only a local mock-up.

### Do not

- Do not rebuild the whole site from scratch without a compelling technical reason.
- Do not change the logo, domain, URL structure, or core brand colours casually.
- Do not invent prices, offers, discounts, ratings, awards, customer names, addresses, certifications, warranties, response times, or delivery promises.
- Do not create fake testimonials, fake project locations, or images presented as completed EBONY projects.
- Do not reuse copyrighted copy, images, layouts, or code from the reference sites. Use them for general design ideas only.
- Do not hotlink reference-site images. Use existing EBONY assets, properly licensed files, or clearly identified concept illustrations.
- Do not add a new large library just to create simple animations.
- Do not remove useful material, care, warranty, hardware, or specification details permanently. Relocate them to an appropriate page or optional detail area.
- Do not leave dummy links, empty buttons, fake submit-success messages, or decorative controls that do nothing.
- Do not delay access to the hero content with a long preloader, animation sequence, video load, or artificial intro.

---

## 4. Brand voice: write for real people

Write like a helpful kitchen designer speaking with a homeowner. The tone should be warm, simple, confident, and tasteful—not childish, overly salesy, or full of technical language.

### Writing rules

- Prefer everyday words and short sentences.
- Use one main idea per sentence.
- Use “you” and “your” naturally where it sounds right.
- Keep card descriptions to one short sentence, ideally under 15 words.
- Keep section introductions to one or two short sentences, ideally under 20 words each.
- Keep button labels short, specific, and action-oriented—usually two to four words.
- Do not repeat the same benefit in several sections.
- Let the imagery communicate style and quality; the copy should clarify, not narrate everything visible.
- Use Indian English naturally. Avoid awkward literal translations or generic AI-sounding slogans.
- Do not use the word **“advanced”** in customer-facing copy.

### Avoid on the homepage

Remove or simplify jargon such as:

- “architectural tolerances,” “culinary ergonomics,” “substrate engineering,” “zero-defect joinery,” “millimetre precision,” “architectural purity,” “bespoke enclosures,” “surgical-grade cores,” “thermal-healing laminates,” and long lists of hardware model numbers.
- “ceremony,” “sanctuary,” “culinary,” “tactile,” “mastery,” “commission,” “curated,” and similar language when a plain word would be clearer.
- Overly long material explanations or technical specifications before visitors have seen any design imagery.

Prefer clear benefits such as “more room to store things,” “easy-to-clean finishes” (only if confirmed), “drawers that close softly” (only if the chosen hardware supports it), “a brighter kitchen,” and “a layout that suits your space.”

**Important:** Do not make an absolute banned-word rule prevent useful, correct information on detail pages. Technical terms may stay where they are needed, accompanied by a simple explanation.

---

## 5. Recommended main message and hero

Use this as the recommended homepage direction. Adjust only if the current brand context or available imagery makes a small refinement clearly better.

**Hero eyebrow:** `MODULAR KITCHENS & HOME INTERIORS`

**Main headline:**

> **Kitchens You'll Love Coming Home To.**

**Supporting copy:**

> Beautiful modular kitchens, planned around your home, your style, and everyday life.

**Primary CTA:** `Explore Our Collections`  
**Secondary CTA:** `Book a Studio Visit` or the closest equivalent already supported by the current site.

### Alternative tagline options

Keep these in the content file or design notes rather than displaying them all at once:

- A beautiful kitchen. Made for real life.
- Your Kitchen. Your Style. Your Story.
- Beautiful Kitchens, Made Simple.
- A Kitchen That Feels Like You.
- Make Room for Moments.

Choose one main headline. Do not combine multiple slogans into a crowded hero.

### Hero design requirements

- Use one excellent, genuine kitchen image or a current, lightweight hero video.
- If using video, provide a poster image and a still-image fallback; do not autoplay sound.
- Keep the kitchen visible behind the content. Use a subtle overlay only when needed for contrast.
- On mobile, crop the image intentionally so the main kitchen feature remains visible.
- Use a restrained headline/CTA reveal. Critical copy and actions must be visible immediately even if animation fails.
- If the existing site has a working scroll-driven image sequence, preserve it if it performs well. Do not rebuild it just to add novelty.
- Remove a “0%” preloader or “SOUND: ON” control if present and unnecessary. If a loader is required, keep it brief and never block content longer than necessary.

---

## 6. Section title and copy refresh

Use clear, attractive titles that give visitors a reason to continue exploring. Avoid generic labels such as “What We Make” or “Why EBONY.”

| Current wording or purpose | Preferred title / treatment |
|---|---|
| What We Make | **Explore Modular Designs** |
| Modular Kitchen Configurations | Section label **OUR COLLECTIONS**; main line **Your dream kitchen awaits!** |
| Four Kitchen Design Styles | **Pick Your Style** |
| Materials & Surfaces / Surface Finishes | **Colours & Finishes You'll Love** |
| Hardware / Motion Systems | **Little Things, Big Comfort** |
| Product & Project Showcase | **Homes We've Made Beautiful** |
| Completed Residences & Spaces | **Explore Real Homes** |
| Why EBONY / The EBONY Standard | **The EBONY Difference** or **The EBONY Promise** |
| Process / The EBONY Experience | **From Idea to Home** |
| Generic final CTA | **Let's Plan Your Kitchen Together** |

Use **OUR COLLECTIONS** as the main section label, followed by **“Your dream kitchen awaits!”** as requested. This phrase also appears on the Häcker India reference site, so do not copy any of its surrounding copy, layout, or visual treatment. If originality is preferred over that exact phrase, use **“Find the Kitchen That Feels Like You.”**

The title map is a guide; make the final heading hierarchy semantically correct, visually consistent, and natural in context.

---

## 7. Recommended homepage journey

Make the homepage meaningfully shorter and more visual. Aim for **around 9–11 purposeful sections**, rather than adding a separate section for every feature. Combine repetitive content where it improves clarity.

### 7.1 Header and navigation

Use a clean header with a short primary navigation. Prefer labels such as:

- Home
- Collections
- Kitchen Styles
- Our Work
- About
- Contact

Include relevant existing product pages—such as wardrobes, living units, finishes, or hardware—in the navigation or a secondary menu where appropriate. Use the actual routes found in the repository; do not create links to routes that do not exist.

Requirements:

- Keep the logo and verified contact information consistent with the active site.
- Use an accessible mobile menu with clear open and close controls.
- A transparent hero header may become a solid or lightly blurred header after scrolling.
- Do not automatically hide navigation if it makes the site harder to use. If hide-on-scroll behaviour already exists and tests well, keep it restrained.
- Use a clear CTA such as `Book a Studio Visit` or the current verified equivalent.

### 7.2 Hero

Use the exact messaging from Section 5. One prominent headline, one short description, one primary CTA, and one secondary CTA are enough.

### 7.3 Trust strip

Use a compact row of three or four verified trust points only. Examples might include years in business, finishes, warranty, or installation service—but use them only after checking the active source of truth.

- Do not show a metric simply because it exists in an old page or prompt.
- Avoid competing counters, lengthy explanations, and unnecessary badges.
- Counter animations are optional and should run once, without delaying text or causing layout shift.
- If the claims cannot be verified, use non-numeric trust points such as “Design guidance,” “Made for your space,” or “Support from planning to installation,” but only if accurate.

### 7.4 Explore Modular Designs

Feature the actual services EBONY currently offers, led by kitchens. Use three or four strong image cards, with short descriptions and descriptive links.

Suggested copy direction:

| Card | Description | CTA |
|---|---|---|
| Modular Kitchens | A kitchen that looks beautiful and works for everyday life. | Explore Kitchens |
| Wardrobes | Thoughtful storage that suits your room and routine. | Explore Wardrobes |
| Living & TV Units | Bring your living space together with considered design. | Explore Living Spaces |
| Complete Home Interiors | Create a connected look across your home. | Explore Interiors |

Only show categories and labels supported by actual EBONY services and routes. If walk-in closets or bar units are distinct live offerings, include them where they belong. Avoid forcing every service into the homepage when it makes the main kitchen journey less clear.

Card requirements:

- Use relevant, authentic images and a consistent crop within each row.
- Keep the title and CTA easy to find on mobile.
- Add a subtle hover/focus treatment, but do not rely on hover to reveal essential text.
- Avoid small technical chips such as “5 Configurations · 4 Design Styles.”

### 7.5 OUR COLLECTIONS — kitchen layout discovery

Use the requested section treatment:

**OUR COLLECTIONS**  
**Your dream kitchen awaits!**

Optional introductory line:

> Explore kitchen layouts and looks that suit your space and style.

Create five visual layout choices. Use images or clear, attractive illustrations.

| Layout | Simple explanation | Fit note |
|---|---|---|
| Straight | A neat, simple layout along one wall. | Often suits smaller or narrow spaces. |
| L-Shape | Two connected sides give you room to prepare and store. | A flexible choice for many homes. |
| U-Shape | Three sides make room for counters and storage. | Best assessed against the room's available space. |
| Parallel | Two facing counters keep preparation organised. | Often useful in long or narrow kitchens. |
| Island | A central counter adds work space and a place to gather. | Needs enough space around the island. |

Interaction:

- Tapping a layout updates the selected image, title, and short description with a smooth crossfade.
- Mark the selected tab clearly and make tabs keyboard-accessible.
- Keep the experience useful on touch screens.
- Do not state a fixed room-width requirement (such as “14 ft”) unless EBONY confirms the figure and its suitability rules.
- Do not imply every layout fits every room. Use plain, cautious fit guidance.
- Keep detailed layout planning or dimensions on the relevant page, not in long homepage panels.
- Use a relevant existing action such as `Explore Kitchens` or `Plan My Kitchen`. Use `Get a 3D Plan` only if the service is confirmed and the enquiry flow supports it.

### 7.6 Pick Your Style — kitchen inspiration gallery

Provide a visually rich gallery with **12 style concepts** in the full kitchen gallery if the assets and page structure support it. Show the best six on the homepage and link to the full gallery so the homepage does not become an endless wall of cards.

These names are design-inspiration directions, not proof that EBONY already sells official products under those exact collection names. Label them as style inspiration unless EBONY confirms they are official collections.

| # | Style name | Friendly description | Suggested palette | Useful tag |
|---|---|---|---|---|
| 1 | **Warm Walnut** | Rich wood tones create a warm, welcoming kitchen. | Walnut, cream, warm white | Natural |
| 2 | **Ivory Calm** | Light cabinets make the room feel open and peaceful. | Ivory, sand, soft grey | Light & Bright |
| 3 | **Olive Garden** | Gentle green brings a fresh, natural look. | Olive, oak, warm white | Natural |
| 4 | **Midnight Marble** | Dark cabinets and stone-look surfaces make a bold statement. | Charcoal, black, warm beige | Dark & Rich |
| 5 | **Champagne Glow** | Soft neutral colours pair with warm metallic touches. | Champagne, cream, bronze | Warm |
| 6 | **Terracotta & Sand** | Earthy colours give the kitchen a relaxed, homely feel. | Terracotta, sand, natural wood | Colourful |
| 7 | **Modern Monochrome** | Black and white keep the look crisp and simple. | Black, white, grey | Dark & Rich |
| 8 | **Japandi Oak** | Pale wood and clean lines create a calm, uncluttered look. | Oak, warm white, taupe | Natural |
| 9 | **Two-Tone Story** | Two complementary cabinet colours add depth and character. | Navy, white, pale grey | Colourful |
| 10 | **Colour Pop** | A brighter accent makes the kitchen feel full of life. | Choose one accent plus neutrals | Colourful |
| 11 | **Small Space, Big Ideas** | Smart storage ideas help compact kitchens feel more organised. | White, pale blue-grey, light wood | Small Space |
| 12 | **Everyday Indian Kitchen** | A practical style for everyday cooking, storage, and family routines. | Sand, wood, muted green | Small Space / Natural |

Gallery requirements:

- Each card should have a distinctive image or illustration, name, one brief sentence, and a `Get This Look` or similarly clear action.
- Add simple filter chips such as `All`, `Light & Bright`, `Dark & Rich`, `Colourful`, `Natural`, and `Small Space` where supported by the data.
- Filters must function, be keyboard-accessible, and be simple to clear.
- On mobile, use a compact grid or swipeable row with clear controls. Do not make it hard to compare designs.
- Use genuine EBONY images wherever they accurately match the style.
- Never reuse the same image for multiple different styles just to fill the grid, and do not label a stock or concept image as a completed EBONY project.
- If a style does not have a suitable photograph, create a polished lightweight `KitchenSketch` SVG illustration using that style's palette. Make the concept nature clear if needed.
- Add `docs/IMAGES_NEEDED.md` listing missing photos, required angle, suggested crop, and file name so the owner can supply authentic images later.
- Keep style data in a central content module (for example, `src/content/kitchenDesigns.ts`) if suitable for the current architecture.
- `Get This Look` should open a working enquiry flow with the chosen style preselected, only if the form can handle it correctly.

### 7.7 Colours & Finishes You'll Love

Use a short, visually engaging preview rather than a long technical catalogue on the homepage.

Possible customer-friendly group labels include:

- Soft Matte
- High Gloss
- Natural Wood
- Stone Looks
- Glass Details
- Warm Neutrals
- Colour Accents

Show four to eight swatches or close-up finish cards. Add a name and one short explanation per card. If previewing a finish on a kitchen image is technically feasible and the right assets exist, provide a short crossfade or tap-to-preview interaction.

Important:

- Show only finishes/material options confirmed to be available through EBONY.
- Do not claim a finish is scratch-proof, heat-proof, waterproof, stain-proof, or available in every design unless verified.
- Keep material codes, care guidance, brands, technical specifications, and comparisons on the existing relevant detail page or behind a clearly labelled `View Details` control.
- Link to the actual existing finishes/materials route.

### 7.8 Homes We've Made Beautiful

Show a concise gallery of real EBONY work. Prefer four to six strong projects over a large grid of weak or repetitive images.

Each item should include:

- One genuine project image.
- A short, attractive project title.
- A simple category label such as Kitchen, Wardrobe, or Living Space.
- City/neighbourhood only when verified and approved.
- A `View Project` link only when there is a real destination or detail view.

Use simple filters such as `All`, `Kitchens`, `Wardrobes`, and `Living Spaces` only if those categories exist in the project data.

Do not invent project locations, materials, customer identities, “before and after” outcomes, or project details. If a project image is a concept render rather than a completed client project, label it clearly as a design concept or inspiration.

### 7.9 From Idea to Home

Explain the journey in three or four short steps. Use this as a writing direction, adapting it to the actual service model:

1. **Share Your Ideas** — Tell us about your home, style, and everyday needs.
2. **Explore the Design** — Review layout, colour, and material choices.
3. **Confirm the Plan** — Agree on the final design, scope, and details.
4. **Bring It to Life** — EBONY coordinates the agreed making and installation process.

Use clear icons, simple numbers, or a subtle timeline. Do not promise a delivery or installation time unless verified and applicable to the specific service. Do not promise 3D previews, home visits, or specific consultation availability unless confirmed.

### 7.10 The EBONY Difference and genuine reviews

Keep this area concise. It may be split into two visually light sub-sections or combined if needed to shorten the page.

Possible benefit themes, only where accurate:

- **Made for Your Space** — Design choices based on your room and routine.
- **Thoughtful Storage** — Keep everyday items organised and easy to reach.
- **Help Along the Way** — Clear guidance from initial discussion to final decisions.
- **Care in the Details** — Attention to finish and fit.

Use verified reviews only. Choose two to four strong testimonials for the homepage; put more on a dedicated page if appropriate.

- Never rewrite a customer's words.
- Do not invent names, cities, headshots, ratings, or a “verified” label.
- Remove genuine duplicate entries from the rendered interface if the same review is accidentally repeated.
- Display each customer name and location once, not twice.
- Make carousels accessible, easy to pause/control, and slow enough to read. Avoid auto-rotation if it hurts readability.

### 7.11 Final CTA and footer

**Suggested CTA heading:**

> **Let's Plan Your Kitchen Together.**

**Supporting copy:**

> Tell us about your space and the look you have in mind. We'll help you explore the next step.

Use a primary action such as `Book a Studio Visit` and a verified secondary action such as `Call EBONY` or `Get Directions`.

Footer requirements:

- Keep the EBONY logo and concise brand line.
- Organise links into a few useful groups: Collections, Explore, and Contact.
- Include only verified phone, email, address, map, and social profile links.
- Remove placeholder social URLs that do not point to official accounts.
- Keep privacy and terms links where they exist.
- Avoid duplicating every navigation link in several footer groups.

---

## 8. Inner pages: simplify the whole experience

Apply the same plain-language approach to relevant existing pages—not just the homepage. Audit the pages discovered in the repository, including any kitchen, wardrobe, walk-in closet, finish, hardware, projects, about, and contact pages that currently exist.

For each page:

1. Start with the visitor's main question and answer it quickly.
2. Keep a clear page title, a brief intro, and strong images near the top.
3. Remove repeated claims, long decorative paragraphs, redundant badges, and filler copy.
4. Keep detailed material, care, hardware, dimensions, warranty, and installation information accessible where it is useful.
5. Use accordions or “View Technical Details” only when they genuinely improve scanning. Do not hide crucial information in a way that harms accessibility or SEO.
6. Keep page-specific CTAs relevant to that page.
7. Preserve current route behaviour and internal links. Rename visible labels only when the destination remains correct.
8. Check all navigation destinations after changing labels or reorganising content.

Do not assume pages such as `/kitchens`, `/wardrobes`, `/walk-in-closets`, `/finishes`, or `/hardware` exist. Inspect actual route files and live destinations first. If a requested destination does not exist, use an existing valid route or report the missing route instead of leaving a broken link.

---

## 9. Visual design direction

Aim for a **warm, editorial, image-first design studio**. It should feel refined and visually interesting without making every section look like the same repeated card grid.

### Visual principles

- Keep the logo and established EBONY brand colours. Improve contrast and consistency rather than replacing the identity.
- Use large, high-quality kitchen imagery with intentional crops.
- Use warm neutrals, off-white, charcoal, natural wood tones, and the existing accent colour where appropriate.
- Create strong typographic hierarchy: expressive, confident headings and comfortable body copy.
- Give content breathing room. Use a consistent spacing scale and generous section gaps, adjusted to the actual layout.
- Mix large feature images, asymmetrical editorial rows, and smaller cards where this improves storytelling.
- Keep radii, shadows, borders, button styles, icon weights, and transitions consistent.
- Avoid putting every paragraph, image, label, and feature inside its own outlined card.
- Use real detail photography—cabinet fronts, handles, drawer interiors, worktops, lighting—where suitable assets already exist.
- Use enough text contrast over imagery for readability.
- Keep the design premium through art direction, spacing, typography, and photography—not through difficult vocabulary.

### Distinctive but useful design elements

Choose a small set of cohesive ideas rather than using every effect everywhere:

- A cinematic hero with restrained headline reveal.
- Large image-led kitchen collection cards with varied proportions.
- A functional kitchen layout selector.
- A filterable kitchen-style gallery.
- A visual finish swatch row or finish-preview interaction, if suitable assets exist.
- A genuine project gallery with clear detail views.
- A clean process timeline and a thoughtful enquiry form.

Avoid gimmicks that distract visitors, especially custom cursors, scroll-jacking, heavy parallax, huge animated counters, or effects that obscure basic navigation.

---

## 10. Transitions and motion

Reuse the animation library already installed if it fits the project. If the codebase already uses GSAP for a hero sequence, keep GSAP focused there and avoid adding a second animation stack without a clear reason.

### Recommended motion

| Element | Suggested effect | Rule |
|---|---|---|
| Hero headline and CTA | Gentle fade-up or masked line reveal | Do not delay the content becoming usable |
| Section content | Small fade-and-rise | Animate once when first entering view |
| Kitchen cards | Slight image zoom, subtle card lift, or arrow nudge | Match hover and keyboard-focus behaviour |
| Layout selector | Underline movement and image crossfade | Keep selected state obvious without animation |
| Gallery filters | Gentle fade/reflow | Avoid large layout jumps and lost focus |
| Finish preview | Short crossfade | Use only if real previews exist |
| Process timeline | Subtle line reveal | Disable or simplify for reduced-motion users |
| Header | Small background/height change on scroll | Do not hide controls unexpectedly |
| Buttons | Clear colour/arrow transition | Also provide active, focus, and disabled states |
| Page navigation | Restrained transition only if supported by the framework | Never trap users or interfere with browser navigation |

### Motion rules

- Prefer animating `transform` and `opacity`; avoid layout-triggering animations.
- Use short, calm durations—usually around 0.25–0.6 seconds.
- Avoid animating every element separately. Consistent, sparse motion feels more premium.
- Respect `prefers-reduced-motion` and avoid movement that is essential to understanding the page.
- Avoid parallax on small screens unless it is truly lightweight and tested.
- Do not run autoplay audio.
- Do not make the user wait for an intro, page wipe, or loading animation before using the website.
- Do not use a custom cursor unless it demonstrably improves the real experience; the default is not to add one.

---

## 11. UX and enquiries

Help visitors move naturally from browsing to taking the next step, without putting a sales form in the way of every interaction.

### Calls to action

- Choose one primary CTA for the overall journey, such as `Book a Studio Visit` or the current verified equivalent.
- Use contextual secondary CTAs such as `Explore Kitchens`, `View Project`, or `Get This Look`.
- Repeat the primary CTA at sensible intervals, not after every card or paragraph.
- Make links describe their destination; avoid using `Click Here` everywhere.
- Do not promise a “free” consultation, instant response, or guaranteed home visit unless EBONY confirms it.

### Enquiry form

If an existing enquiry form works, keep its backend and improve its usability. Do not replace it with an unconnected visual-only form.

Prefer a short form with only the fields genuinely needed by the existing service. Typical fields might be:

- Name
- Phone number (with appropriate Indian-number validation if relevant)
- Space of interest (only if it helps route the enquiry)
- Optional city or message

Requirements:

- Use associated labels, clear validation messages, visible keyboard focus, and suitable autocomplete attributes.
- Preserve existing consent and privacy requirements.
- Give clear error feedback when submission fails.
- Show success only after a real successful submission or response from the existing endpoint.
- If no working submission destination exists, do not fake a success. Preserve any valid current contact method and report the integration gap clearly.
- If `Get This Look` is implemented, pass the style name into the actual form or URL state and show it to the user. Do not create a dead-end modal.
- Close modals using a visible control and Escape where appropriate; restore focus to the opening control.

### Sticky contact controls

A sticky mobile contact bar may help, but it is optional—not a requirement if it clutters the screen. If implemented:

- Use only verified Call, WhatsApp, and booking destinations.
- Do not show a WhatsApp button unless the verified business number is configured for WhatsApp.
- Do not obscure page content, consent banners, the footer, or an open form.
- Respect safe areas on mobile and use accessible labels.
- Hide it on pages or states where it interferes with the main task.

---

## 12. Images and kitchen artwork

- Inspect all available image assets before choosing replacements.
- Prefer authentic EBONY projects for completed-project sections and real product/service pages.
- Never make a reference-site photo appear to be EBONY's work.
- Never repeat one image across several different style cards merely to fill the gallery.
- Use image optimisation already available in the framework (for example, the existing image component) where appropriate.
- Set sensible width/height or aspect ratios to avoid layout shifts.
- Use responsive sizes and modern formats when the pipeline supports them.
- Lazy-load below-the-fold images. Prioritise the main hero image only where it improves first paint.
- Add concise alt text for meaningful images; use empty alt text for purely decorative images.
- If a photo is missing, create a simple, attractive SVG kitchen illustration based on the card's palette, or show fewer cards until appropriate imagery is available.
- Add `docs/IMAGES_NEEDED.md` documenting any missing design photos with a suggested filename, angle, palette, and intended use.
- Do not introduce large generic stock imagery when existing EBONY imagery is available.

---

## 13. SEO, accessibility, and performance

### SEO

- Preserve current working URLs and valuable page metadata unless there is a clear, safe improvement.
- Give every page one clear H1 and a logical heading hierarchy.
- Use human-readable page titles and meta descriptions. Example direction: `EBONY Modular Kitchens & Wardrobes | Raipur`—only if that positioning and location remain accurate.
- Prefer natural local wording where useful, such as “modular kitchen in Raipur,” without keyword stuffing.
- Preserve analytics, canonical URLs, redirects, structured data, and existing SEO integrations.
- Use genuine business details only in `LocalBusiness` or related structured data. Do not add invented ratings or service areas.

### Accessibility

- Use semantic HTML and keyboard-accessible navigation, tabs, filters, accordions, carousels, and forms.
- Ensure visible focus states and logical tab order.
- Do not rely on colour alone to show an active state.
- Use sufficient text contrast, especially over images.
- Do not hide essential content behind hover-only behaviour.
- Respect `prefers-reduced-motion`.
- Ensure interactive targets are comfortable on touch screens (aim for around 44px or larger where practical).
- Ensure modals manage focus correctly and can be closed accessibly.

### Performance

- Do not add heavy libraries for simple effects.
- Avoid oversized hero videos or background assets that delay meaningful content.
- Avoid layout-shifting fonts, images, cards, and counters.
- Avoid animating width, height, top, or left when transforms will work.
- Lazy-load images below the fold and avoid eager loading every asset.
- Check for JavaScript errors and failed network requests.
- Keep the site usable if motion code or a secondary image fails.

---

## 14. Issues to audit on the current site

Verify each possible issue in the live page and source code before changing it. Fix it if it is present; do not assume every item still applies.

- A long homepage with repeated or overly technical sections.
- A “0%” counter preloader or other load treatment that does not help visitors.
- Any “SOUND: ON” indicator or autoplay audio that surprises users.
- Duplicated testimonials or repeated customer city/name labels.
- Raw route strings or malformed labels shown to visitors instead of human-friendly text.
- Repeated “Explore Our Heritage” or equivalent links in otherwise identical cards.
- Social icons linking to generic platform homepages rather than official EBONY profiles.
- SEO titles and descriptions dominated by jargon.
- Inconsistent contact information or company metrics across pages/domains.
- Broken links, non-working filters, fake buttons, console errors, or mobile overflow.

Record any unresolved issues in the final implementation report.

---

## 15. Recommended build order

Work in this sequence, adapting it to the actual repository:

1. **Audit:** inspect code, pages, assets, contact sources, integrations, and build commands; provide the 10-line plan.
2. **Content layer:** centralise approved homepage copy, navigation labels, layout data, style data, and any safely reusable collection data.
3. **Homepage structure:** simplify and rebuild the main journey with existing components where suitable; remove replaced dead sections rather than leaving them hidden in code.
4. **Kitchen discovery:** implement the layout selector and style gallery; include only real/appropriately labelled imagery and functional filters.
5. **Visual polish:** refine typography, spacing, image treatment, card variants, buttons, navigation, and responsive behaviour.
6. **Motion:** add restrained transitions and reduced-motion handling after the layout works without them.
7. **Enquiry experience:** improve the real existing form/CTA routes; verify style prefill and error/success states.
8. **Inner pages:** simplify wording and hierarchy on relevant existing routes; keep technical details accessible.
9. **SEO and cleanup:** improve page titles, metadata, alt text, footer links, duplicate content, and current-site issues.
10. **QA:** run build, lint, tests, link checks, and viewport checks; fix the problems found.

The optional style quiz should be done **only after** the core refresh is complete and only if it can use the same real style data without adding friction.

---

## 16. Definition of done

The task is not complete just because the home page looks different. Complete the relevant checks below.

### Content and accuracy

- [ ] Homepage content is substantially shorter and easier to scan; target approximately 50–60% less copy where practical.
- [ ] Language feels natural and straightforward; the word “advanced” is not used in customer-facing content.
- [ ] `What We Make` is replaced with `Explore Modular Designs` or a better equivalent in context.
- [ ] The kitchen configurations section uses `OUR COLLECTIONS` and the requested supportive phrase or the approved alternative.
- [ ] The first-time visitor sees kitchen inspiration before technical detail.
- [ ] Technical details remain available on appropriate pages or optional detail sections.
- [ ] The 12 style concepts exist in the full gallery if supported; the homepage only features a manageable selection.
- [ ] Style concepts are not falsely represented as official collections or completed customer projects.
- [ ] Contact details, metrics, warranty, timelines, service claims, locations, and customer reviews are verified or omitted pending confirmation.
- [ ] No copy, images, projects, or testimonials have been copied or fabricated.

### Design and UX

- [ ] The website feels clearly more considered, attractive, and easy to browse.
- [ ] Heading hierarchy, typography, whitespace, imagery, and card styles are consistent.
- [ ] Navigation destinations are correct and every visible control works.
- [ ] Layout selection and gallery filters work with mouse, touch, and keyboard.
- [ ] CTAs guide users from exploration to a real enquiry path.
- [ ] Forms show honest success and error states.
- [ ] Mobile navigation, content, filters, galleries, and forms are usable.
- [ ] No critical information depends on hover.
- [ ] Motion is restrained, and reduced-motion preferences are respected.

### Technical quality

- [ ] Existing routes, integrations, analytics, and important SEO details are preserved.
- [ ] No broken links, console errors, or failed assets remain from the changes.
- [ ] No horizontal overflow at tested widths.
- [ ] Images load efficiently and do not create avoidable layout shift.
- [ ] Production build and relevant lint/test commands pass.
- [ ] Test at minimum widths around **375px, 768px, 1280px, and 1920px**.
- [ ] If Playwright or comparable browser testing is already available, capture representative screenshots and store them in a suitable `docs` folder.
- [ ] No heavy dependency was added without need and explanation.

A mobile Lighthouse performance score of 90+ and accessibility of 95+ may be used as **targets**, not excuses to fake scores or remove useful functionality. Report actual results and any remaining bottlenecks honestly.

---

## 17. Final response required from the coding agent

After implementation, provide a concise report covering:

1. The major layout and content changes.
2. A few specific old heading → new heading examples.
3. Kitchen gallery and layout-selector behaviour implemented.
4. Animations and mobile UX improvements.
5. Files/components changed.
6. Build, lint, tests, and viewport checks actually run, with results.
7. Any remaining factual questions, missing photos, unavailable routes, or form/CRM integrations needing EBONY's input.

Do not claim that a test passed unless you ran it. Do not claim that a form works unless you confirmed a real submission path. **Inspect, implement, test, and then report.**

---

## 18. Reference websites

Use these references for broad inspiration in image-led browsing, section hierarchy, collection discovery, plain-language content, and consultation flows. Do not reproduce their words, imagery, code, branding, or distinctive layouts.

1. EBONY — https://ebony.co.in/ (the canonical live site and its current source of truth must be verified first)
2. Concept Kitchen India — https://www.conceptkitchenindia.com/
3. Saviesa Home — https://www.saviesahome.com/
4. DesignCafe — https://www.designcafe.com/
5. Häcker India — https://haecker-india.com/

Learn the principles; create an original EBONY experience.
