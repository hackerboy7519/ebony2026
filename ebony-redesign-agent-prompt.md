# EBONY Website Redesign — Master Prompt for AI Agents

> Paste **Section 0** into your orchestrator agent first. Sections 1–12 are the full brief it (and its sub-agents) must follow. Work phase by phase; do not skip a gate.

---

## 0. Kickoff message (paste this first)

```
You are the lead agent for redesigning https://ebony.co.in. Read this entire file before acting.
Goal: a light-theme, white-and-gold, story-driven, 3D + GSAP-animated website that loads fast and generates consultation leads.
Work in the 6 phases of Section 3. After each phase, write the listed output files, run the gate checks, and only then continue.
Do not invent business facts. Do not copy third-party source code verbatim. Do not use placeholder text, lorem ipsum or "TODO".
Environment variables available: GEMINI_API_KEY, GEMINI_IMAGE_MODEL (default gemini-3.1-flash-image-preview; fallback gemini-2.5-flash-image).
Start with Phase 0 now and report back with the Brand Brief before building anything.
```

---

## 1. Who EBONY is (verify against the live site in Phase 0)

EBONY is a **luxury modular interiors** brand (est. 2009, studio in Raipur, C.G.) making **modular kitchens, wardrobes and bed sets**. The promise: *"Every space begins with a thought"* — design led, **German-engineered**, finished in **500+ options** (Super Matt, Crystal Glass, Acrylic and more), installed in about **3 days**, with a **0% defect** policy and lifetime after-sales support.

| Fact (from site) | Value |
|---|---|
| Experience | 15+ years |
| Client retention | 85%+ |
| Dealers & distributors | 300+ |
| Franchise locations | 10+ |
| Collections | Kitchens 300+ designs · Wardrobes 100+ configurations · Bed sets 50+ collections |
| Pillars | Vertical integration · Bespoke for every home · Lifetime support · Pan-India network |
| Cities mentioned | Mumbai, Delhi, Bangalore, Pune, Ahmedabad, Raipur |
| Audience | Affluent homeowners, builders/architects, dealers and franchise prospects |
| Business goal | Book-a-consultation leads; secondary: dealer/franchise enquiries |

**Known issues to fix/flag:** the site shows two different phone numbers (button: +91 76669 02365, footer: +91 70890 44424) and a 2024 copyright year. Ask the human which number is correct; use © 2026.

Brand feeling to design for: **quiet luxury, precision, warmth, craftsmanship, light.** The name *Ebony* (the black wood) is the anchor: **ebony-black type and details against white and gold**.

---

## 2. Reference stack and how to use each source

| Source | Use it for | Rules |
|---|---|---|
| **threeui.com/three-js** (sort=recent) | Design *ideas* for 3D | Reference only. Many items are Pro. Re-implement the idea in your own code; never copy source. Ideas to borrow: **Wood Icons** (timber + glass, drawer that latches open), **Retro Metallic Vault** (door swings open, bolts withdraw), **Halcyon Card** (gold foil on engraved field), **Iridis / Woven Cloth Iridescent** (specular, thin-film sheen), **Grid Illustrations / Isometric Motion Grid** (pale dimensional grids, hairline figures; Hero, Testimonials, Footer layouts), **Structure Flow** (particle dome, dot matrix), **Ashen Press** (shelf of objects you pick up). |
| **motionsites.ai** | Section patterns: hero, features, pricing, CTA, footer; animated backgrounds | Library of prompt-based sections (some premium). Use as *pattern inspiration*; adapt to EBONY. Avoid heavy looping video backgrounds (see budgets). |
| **reactbits.dev** (React) / **vue-bits.dev** (Vue) | Animated components | Pick **ONE** framework. Default: React/Next.js → React Bits. Use Vue Bits only if you choose Nuxt. Install with the CLI/copy snippet shown on each component page (TypeScript + Tailwind variant). Verify a component exists before planning around it; if not, pick the nearest. Shortlist: **SplitText, BlurText, ScrollReveal, CountUp, TiltedCard, SpotlightCard, MagicBento, ScrollStack, Silk/Aurora (background — re-tint to pearl/gold), Glass Surface, Flowing/Infinite Menu (collections nav)**. Re-theme every component to the tokens in Section 4. |
| **Taste skills** (taste-skill pack: `high-end-visual-design`, `minimalist-ui`, `stitch-design-taste`, `full-output-enforcement`) | Design quality guard-rails | If these skills exist in your environment, load them before Phase 1 and obey them. If not, follow Section 11 (anti-slop rules) instead. `full-output-enforcement` = never truncate code or leave stubs. |
| **GSAP showcase** (gsap.com/showcase) | Motion ideas | Study 5 sites; write down 3 techniques you will adapt (e.g. pinned scrub sequences, SplitText reveals, Flip transitions, DrawSVG line-drawing). GSAP and its plugins (ScrollTrigger, SplitText, DrawSVG, Flip) are free to use — confirm on gsap.com/pricing. |
| **Three.js** | Hero 3D + Finish Studio | Via `three` + `@react-three/fiber` + `@react-three/drei`. |
| **Gemini Flash image model** | All photographic imagery and texture swatches | Section 6. |

---

## 3. Agent roles, flow and gates

Run in order. Each phase has an owner role, outputs written to the repo, and a gate.

| Phase | Role | Tasks | Outputs | Gate |
|---|---|---|---|---|
| **0 Discovery** | Research agent | Fetch ebony.co.in, its sitemap and every page. Capture all copy, URLs, forms, contact data, testimonials, SEO tags. Screenshot at 390 / 768 / 1440. Review the 6 reference sources and list the 10 ideas you'd adapt. | `/brief/brand-brief.md` · `/brief/content-inventory.md` · `/brief/url-map.json` · `/brief/inspiration.md` | Every fact in the brief traces to the live site. Open questions listed for the human. |
| **1 Art direction** | Design agent | Turn Section 4 + 5 into a design system and a section-by-section storyboard. | `/brief/design-system.md` (tokens, type, spacing, motion language) · `/brief/storyboard.md` (per section: purpose, layout, 3D/motion idea, image slots, fallback) | Human can approve palette and storyboard in under 5 minutes. WCAG contrast table included. |
| **2 Assets** | Image agent | Section 6 pipeline: generate, review, optimise, name, caption images and textures. | `/public/img/*.webp` · `/public/tex/*.webp` · `/assets/manifest.json` · `/scripts/gen-images.ts` | Every slot filled or has a documented fallback. Image QA checklist passed. Budgets met. |
| **3 Build** | Frontend agent | Next.js (App Router) + TypeScript + Tailwind. Implement layout, pages, content, forms, SEO, a11y, analytics hooks. Keep existing URL slugs; add 301 redirects for any changes. | Working repo, `README.md`, `.env.example` | `npm run build` clean; no TS/ESLint errors; all copy from content inventory. |
| **4 Motion + 3D** | Creative-technologist agent | Lenis + GSAP ScrollTrigger; Three.js hero and Finish Studio; React Bits components re-themed. Implement reduced-motion and mobile fallbacks. | `/components/three/*` · `/components/motion/*` | 60 fps on a mid-range phone for the hero; fallbacks verified. |
| **5 QA + launch** | QA agent | Lighthouse (mobile), axe, keyboard-only pass, cross-browser (Chrome, Safari iOS, Firefox), 3 viewports, form submission test, broken links, schema validation. | `/QA/report.md` | Meets Section 9 budgets. Final report in Section 12 format. |

Agents hand off by **files, not chat**. If a gate fails, fix and re-run the gate before moving on.

---

## 4. Design system — "Atelier Daylight" (light theme, white + gold)

**Concept:** an atelier flooded with daylight. Pearl-white surfaces, ebony-black type, and **gold used as foil, not paint** — hairlines, numerals, hinges, handles, highlights and light sweeps. This keeps it from becoming the generic cream-and-gold look.

### Colour tokens
```css
:root{
  --pearl:#FBFBF9;      /* page background (near-white, slightly warm) */
  --white:#FFFFFF;      /* cards */
  --mist:#F0EFEA;       /* alt sections */
  --ebony:#0B0B0C;      /* text, dark moments */
  --graphite:#4A4A4F;   /* secondary text (≥7:1 on pearl) */
  --hair:#E3E1DA;       /* 1px dividers */
  --gold-light:#EAD08A; --gold:#B8923A; --gold-deep:#7C5F16; /* text-safe gold = deep (≥5:1) */
  --foil:linear-gradient(115deg,#7C5F16 0%,#D9B65B 30%,#F6E7B0 50%,#C49A3A 70%,#7C5F16 100%);
  --daylight:#EEF2F6;   /* cool daylight accent for contrast against gold (windows, glass) */
}
```
Rules: gold covers **≤8% of any screen**. Use `--gold-deep` for any gold *text* under 24px. Large display gold may use `--foil` as `background-clip:text` with a slow shimmer. No gold flood backgrounds. Provide a dark-footer variant (ebony bg + gold foil) for one section only.

### Type
- Display: a high-contrast editorial serif (e.g. **Bodoni Moda** or **Playfair Display**) for hero/section headings, italics for emphasis words.
- UI/body: a clean grotesk (e.g. **Hanken Grotesk** or **Manrope**). Labels/specs: **JetBrains Mono** uppercase, letter-spacing .14em.
- Self-host via Fontsource, subset to Latin, `font-display:swap`, max 3 families/4 files. Fluid scale with `clamp()`.

### Shape and spacing
Architectural: radius 0–4px, 1px hairlines, 8px spacing grid, generous whitespace, 12-column grid with asymmetry (avoid centering everything). Soft long shadows `0 30px 60px -30px rgba(11,11,12,.25)`.

### Motion language
Ease `power3.out` / `expo.out`; reveals 0.8–1.2s; stagger 60–90ms; scroll scrubs use `scrub:1`; hover 200–300ms. Everything respects `prefers-reduced-motion` (replace with fades). Motion must *explain* something (a door opening, parts separating, a room assembling), never be decoration only.

---

## 5. Story and sections (storyboard to implement)

**Narrative: "From a thought to a home."** One continuous scroll in chapters; copy comes from the live site.

| # | Section | Signature idea | Tech | Priority |
|---|---|---|---|---|
| 1 | **Hero — The Opening Door** | A 3D modular cabinet in a bright studio. As you scroll the doors swing open (gold hinges and handles), drawers glide out, and the headline *"Every space begins with a thought."* is revealed inside. Pointer-reactive parallax. | R3F; procedural geometry (RoundedBox), `RoomEnvironment`, ContactShadows, MeshPhysicalMaterial (clearcoat for gloss, metalness 1 for gold). GSAP scrub drives refs, not React state. Poster image first, canvas swaps in when ready. | P0 |
| 2 | **Precision — Exploded View** | The cabinet separates into panels, hinges and rails along its axes with gold hairline callouts ("Engineered in Germany", "0% defect policy"). | GSAP timeline scrubbed by ScrollTrigger pin; HTML callouts with DrawSVG leaders; pale isometric grid floor (idea: ThreeUI Grid Illustrations). | P0 |
| 3 | **Finish Studio — 500+ finishes** | Visitor picks a finish and the 3D model repaints live: Super Matt, Crystal Glass (transmission), Acrylic gloss, ebony grain, champagne metallic. Shows "Your selection" chip that pre-fills the enquiry form. | Swappable PBR materials from Gemini-generated textures; swatch ring with gold active state; URL param `?finish=` for sharing. | P0 |
| 4 | **Collections** | Three tall panels — Kitchen 300+, Wardrobe 100+, Bed set 50+ — expanding on hover/tap, each with a Gemini hero image, clip-path reveal, outlined gold numerals. | React Bits TiltedCard / Flowing Menu pattern re-themed; GSAP clip-path. | P0 |
| 5 | **3 Days to a New Home** | Pinned timeline: Day 1 carcass → Day 2 doors and hardware → Day 3 finished room. Same camera angle; images wipe from empty room to installed. A "3 days" counter ticks. | GSAP pin + clip-path wipes; 3 consistent Gemini images (Section 6). | P0 |
| 6 | **Craft Process** | Design → Engineer → Finish → Install, each with a Gemini image and one line from the site's vertical-integration story. | ScrollStack-style cards. | P1 |
| 7 | **By the numbers** | 15+ · 85%+ · 300+ · 10+ in gold-foil numerals with shimmer sweep. | React Bits CountUp; CSS mask foil. | P0 |
| 8 | **Pan-India network** | Dot-map of India with pulsing city nodes (Mumbai, Delhi, Bangalore, Pune, Ahmedabad, Raipur) and a "Find a dealer / franchise enquiry" CTA. | SVG or Three points; lazy-loaded. | P1 |
| 9 | **Testimonials** | Three client quotes (use verbatim from site; excerpting allowed only at sentence boundaries). Each column has a small animated line figure (idea: ThreeUI Isometric Motion Grid · Testimonials). | GSAP + SVG. | P1 |
| 10 | **Consultation CTA + footer** | Giant serif headline, magnetic "Book a consultation" button, gold light sweep across the page edge; real contact details (after human confirms phone). | Form with validation, spam honeypot, WhatsApp click-to-chat, `tel:` and `mailto:`. | P0 |
| G | **Global** | Lenis smooth scroll synced to ScrollTrigger; thin gold progress bar; subtle foil cursor ring (pointer devices only); route transitions. | `lenis.on('scroll',ScrollTrigger.update)`; `gsap.ticker.add(t=>lenis.raf(t*1000))`; `gsap.ticker.lagSmoothing(0)`. | P1 |

**Stretch (only after all P0 are done):** "Room Builder-lite" (choose kitchen/wardrobe/bed + finish + city → prefilled enquiry); silk-like pearl-and-gold WebGL background at low intensity; sound-free micro-interactions on hardware (handle pull, drawer glide).

**Mobile:** the hero 3D becomes a lighter scene (lower DPR, simpler materials) or a poster-image sequence if the device is low-power. No horizontal scroll. Touch targets ≥48px.

---

## 6. Image pipeline — Gemini Flash image generation

**Model:** use `gemini-3.1-flash-image-preview` (Nano Banana 2; up to 14 reference images; aspect ratios 1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9 and more). Fallback: `gemini-2.5-flash-image` (GA). Read the model from `GEMINI_IMAGE_MODEL`. Check current Google docs before running — model IDs change.

**Script (`/scripts/gen-images.ts`)** — adapt to the current `@google/genai` SDK:
```ts
import { GoogleGenAI } from "@google/genai";
import fs from "node:fs"; import sharp from "sharp";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const STYLE = `Photoreal architectural interior photography. Bright, airy, light-filled luxury Indian home.
Palette: pearl white, ebony black accents, soft brushed champagne-gold hardware. Soft diffused daylight, 35mm lens,
clean modern lines, calm and uncluttered. No text, no logos, no watermark, no people, no brand names.`;
async function gen(slot){
  const res = await ai.models.generateContent({
    model: process.env.GEMINI_IMAGE_MODEL ?? "gemini-3.1-flash-image-preview",
    contents: [{ text: `${STYLE}\n\n${slot.prompt}` }, ...(slot.refs ?? [])],
    config: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: slot.ratio } },
  });
  const part = res.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
  if (!part) throw new Error(`No image for ${slot.id}`);
  const buf = Buffer.from(part.inlineData.data, "base64");
  await sharp(buf).resize({ width: slot.width }).webp({ quality: 78 }).toFile(`public/img/${slot.id}.webp`);
}
```
Run slots sequentially with retry (3×, exponential backoff). Generate 2 candidates for hero slots, keep the best. Write `assets/manifest.json` with `{id, file, ratio, width, prompt, alt, model, generatedAt, aiGenerated:true}`.

**Consistency:** generate the *hero kitchen first*, approve it, then pass it as a reference image for the other slots and for the 3-day sequence ("same camera angle, same room, only change X").

**Slots**
| id | ratio / width | Prompt (appended after STYLE) |
|---|---|---|
| hero-poster | 16:9 / 1920 | Wide view of a luxury modular kitchen, white and ebony fluted cabinetry, brushed gold handles, long island, tall window with golden-hour light on the floor. |
| kitchen-card | 4:5 / 900 | Close, elegant detail of a modular kitchen run, gold handle and ebony grain panel, shallow depth of field. |
| wardrobe-card | 4:5 / 900 | Walk-in wardrobe with ebony fluted doors, gold rails, soft backlit shelves, pale daylight. |
| bedset-card | 4:5 / 900 | Master bedroom with ebony upholstered headboard bed set and matching side tables, white linen, soft morning light. |
| process-design | 3:2 / 1200 | Architect's desk with floor-plan drawings, material swatches and a gold pen, daylight from the left. |
| process-engineering | 3:2 / 1200 | Precision machining of a white laminate panel, clean modern workshop, no brand marks. |
| process-finish | 3:2 / 1200 | Hand inspection of a high-gloss ebony panel, reflections of a window across the surface. |
| install-day1 / day2 / day3 | 16:9 / 1600 | Same room, same camera. Day 1: empty room with carcass frames only. Day 2: doors and countertop fitted, protective film on. Day 3: finished, styled kitchen. (Use day-3 as the reference image for 1 and 2.) |
| og-image | 16:9 / 1200 | Cropped version of hero-poster composition with empty space on the left for the logo. |
| tex-ebony, tex-white-matt, tex-champagne-metal, tex-frosted-glass, tex-acrylic-gloss, tex-walnut | 1:1 / 1024 | Flat orthographic top-down macro of the material filling the whole frame, even lighting, no horizon, no objects, seamless pattern. |

**Image QA (every image):** looks like a plausible real product (no warped handles, doubled doors or impossible joints) · no text, logos or faces · colours match tokens · crops safely at 4:5, 3:2 and 16:9 · **textures tile without visible seams** (if not, offset-blend or use mirrored repeat) · file ≤ budget in Section 9 · meaningful `alt` text written. Regenerate failures with a corrected prompt; never ship a flawed image.

**Honesty:** these are AI-generated concept images. Mark `aiGenerated:true` in the manifest, and tell the human to swap in real EBONY project photography where available — real work builds more trust than generated renders.

---

## 7. Technical stack

- **Next.js (App Router) + React + TypeScript + Tailwind.** (Use Nuxt + Vue Bits only if the human asks for Vue.)
- `gsap` + `@gsap/react`, `lenis`, `three`, `@react-three/fiber`, `@react-three/drei`, `sharp`, `@google/genai`.
- **No external HDRI downloads** — use `RoomEnvironment`/procedural lighting so nothing blocks on the network.
- **No heavy GLB needed:** build the cabinet procedurally. If you do use a GLB, ≤1.5 MB, Meshopt/Draco compressed.
- R3F: `<Canvas frameloop="demand" dpr={[1,1.75]}>`; call `invalidate()` from the scroll handler; pause when off-screen via IntersectionObserver; dispose geometries/textures on unmount.
- Lazy-load Three chunks with `next/dynamic` (`ssr:false`) *after* the hero poster has painted.
- Keep content in a typed `content.ts` so copy can be edited without touching components.
- Forms: server action or API route + email/Sheets/CRM webhook (ask the human), honeypot + rate limit.

---

## 8. Content, SEO and accessibility

- Keep all real copy, numbers and testimonials from the live site. **Never invent** awards, certifications, prices, client names or statistics. Mark any gap as an open question.
- Preserve URL slugs; 301-redirect anything that changes. Unique `<title>` and meta description per page, canonical URLs, OpenGraph/Twitter images (og-image), `sitemap.xml`, `robots.txt`.
- JSON-LD: `FurnitureStore` / `LocalBusiness` with address (Raipur, C.G. 492001), phone (after confirmation), email, `sameAs`.
- Semantic HTML: one `h1`, landmarks, skip link, visible focus, 4.5:1 text contrast, `aria-label`s for 3D canvas ("3D modular cabinet that opens as you scroll") and an accessible alternative for every interactive 3D control (buttons for finishes, keyboard operable).
- Respect `prefers-reduced-motion` and `prefers-color-scheme` (light theme is the design; do not auto-invert).

---

## 9. Performance budgets (hard limits)

| Metric | Target |
|---|---|
| Lighthouse mobile | Performance ≥ 85 · Accessibility 100 · SEO 100 · Best Practices ≥ 95 |
| LCP / CLS / INP | < 2.5 s / < 0.05 / < 200 ms (hero poster is the LCP element) |
| JS before interaction | ≤ 180 KB gzip (Three chunk loads after) |
| Images | Hero ≤ 250 KB; cards ≤ 120 KB; textures ≤ 80 KB; all WebP/AVIF with `srcset`, `loading="lazy"` except hero |
| Fonts | ≤ 4 files, ≤ 120 KB total |
| Video | None by default. If used: ≤ 1.5 MB WebM/MP4, muted, `playsinline`, poster, lazy |
| Animation | Only animate `transform` and `opacity` (plus clip-path); no layout thrash |

---

## 10. Quality gates (QA agent checklist)

- [ ] All six phases' outputs exist and match the file names above
- [ ] Copy matches content inventory; phone number confirmed by the human
- [ ] Contrast table passes; gold text uses `--gold-deep`
- [ ] Keyboard-only walkthrough works end to end, including the finish picker and form
- [ ] Reduced-motion mode: no scroll-jacking, no scrubbed 3D, content still readable
- [ ] Low-power/mobile fallback verified on a real or emulated mid-range phone
- [ ] Safari iOS tested (WebGL, `100svh`, safe-area insets)
- [ ] Form submits and the human receives the lead
- [ ] No console errors; no layout shift; no horizontal scroll
- [ ] Budgets in Section 9 met, with Lighthouse reports attached

---

## 11. Anti-slop rules (do not do these)

- No purple/blue gradient blobs, glassmorphism everywhere, emoji icons, stock "AI" hero layouts, or centred-everything stacks.
- No beige/cream flood backgrounds; gold is foil, not paint.
- No more than **two** big motion ideas visible at once; no scroll-jacking that blocks reading.
- No placeholder copy, fake logos, fake reviews or fake stats. No truncated code or "rest of the code here".
- Don't copy ThreeUI/MotionSites/React Bits source verbatim into the product beyond what their licences permit; adapt and credit where required.
- Don't ship an unverified claim as fact; ask the human.

---

## 12. Final report format (agent's last message)

```
## EBONY redesign — delivery report
1. What shipped (sections, pages, routes)
2. Design system summary (tokens, fonts) + link to /brief/design-system.md
3. 3D/motion features and fallbacks
4. Image manifest summary (count, model used, any regenerated, any needing real photos)
5. Lighthouse (mobile + desktop) and axe results vs budgets
6. Open questions for the human (phone number, form destination, real photos, analytics)
7. How to run, build, deploy, and regenerate images
8. Known limitations and next steps (stretch ideas)
```
