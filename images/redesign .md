# PREMIUM MODULAR INTERIORS WEBSITE — REDESIGN MASTER BRIEF

## 1. Your Role

Act as a **Principal Digital Art Director, Award-Level UI/UX Designer, Senior Frontend Engineer, Motion Designer, Technical SEO Specialist, and QA Engineer**.

Your task is to redesign the existing modular interiors website into a distinctive, premium, production-ready digital experience.

This is not a routine template redesign. The finished website should look like a high-end architectural interiors brand with carefully art-directed imagery, sophisticated typography, meaningful animation, intuitive product discovery, and exceptional mobile usability.

**Primary objective:** Present the brand's design capabilities, materials, craftsmanship, product range, customization options, and trustworthiness in a memorable way while encouraging visitors to explore products and contact the company.

## 2. First Audit the Existing Website

Before changing code:

1. Inspect the existing codebase, framework, routes, components, assets, dependencies, and current design system.
2. Visit and inspect every accessible page and identify layout inconsistencies, outdated sections, broken links, nonfunctional buttons, placeholder text, and unused navigation items.
3. Identify existing content, product photographs, company assets, logo files, contact details, forms, and useful components worth preserving.
4. Determine why horizontal overflow occurs and identify the actual components causing it.
5. Create a short implementation plan based on the audit.

Preserve the existing framework and working integrations where practical. Do not rebuild the project unnecessarily or break existing functionality.

Do not stop after producing an audit or mockup. Implement the redesign, test it, and fix the issues discovered during QA.

## 3. Creative Direction and Brand Identity

### Visual style

Create a luxury, minimal, architectural visual identity inspired by premium kitchen, furniture, and interior-design brands.

**Color palette**

- Pure white: `#FFFFFF` — primary background.
- Deep black: `#111111` — typography, navigation, and dark sections.
- Restrained champagne gold: approximately `#B99A5B` — small accents, fine borders, icons, and selected interactive states.
- Soft neutral gray: use only where needed for secondary information and subtle separators.

White should dominate the interface. Black creates contrast and structure. Gold must be used sparingly; never make the interface look flashy or overly decorative.

### Typography

Use a sophisticated editorial display typeface for selected headlines and a highly legible sans-serif for body text, navigation, buttons, and product information.

Create a consistent typography scale with intentional line lengths, generous whitespace, and clear hierarchy. Avoid excessive uppercase text, oversized body text, and inconsistent font weights.

### Layout language

Combine:
- Asymmetric editorial grids.
- Large, immersive architectural photographs.
- Refined bento grids for product discovery and material exploration.
- Full-width image sections.
- Generous negative space.
- Minimal borders and subtle gold detailing.
- Elegant image cropping and disciplined alignment.

Do not use the same card layout for every section. Choose the layout that best communicates the content.

The website should communicate **craftsmanship, architectural precision, personalization, premium materials, and long-lasting quality**.

Avoid generic AI-generated website aesthetics, excessive rounded cards, unnecessary gradients, random decorative shapes, stock-dashboard components, and animations that distract from the interiors.

Use existing approved brand assets first. Only introduce replacement imagery when necessary and ensure it is relevant to the actual product category.

## 4. Website Structure and Navigation

Create a clear information architecture using the following pages where appropriate:

1. Home
2. What We Make / Product Collections
3. Modular Kitchens
4. Wardrobes
5. Walk-in Closets
6. Materials & Finishes
7. Hardware & Internal Fittings
8. Projects / Product Showcase
9. About Us
10. Contact Us
11. Custom 404 Not Found page

Avoid unnecessary page duplication. Related information can be organized into meaningful sections or tabs within category pages when that creates a better experience.

### Header and navigation

Create a premium, responsive header with:

- Brand logo.
- A concise navigation menu.
- Product dropdown or mega menu for Modular Kitchens, Wardrobes, Walk-in Closets, and Bar Units.
- Access to materials, projects, About Us, and Contact Us.
- A prominent but restrained consultation/contact CTA.

Use a transparent or visually integrated header over the hero video if it suits the composition. Transition to a readable solid or light header when appropriate during scrolling.

Implement a proper mobile menu with a working toggle, close control, keyboard accessibility, clear navigation hierarchy, and reliable touch targets.

Remove unused, duplicate, and unnecessary navigation links.

## 5. Homepage — Section-by-Section Design

### Section 1: Full-Screen Cinematic Video Hero

Create an immersive, full-viewport hero with a high-quality architectural-interiors background video.

Video direction:
- Beautiful modular kitchen or luxury interior footage.
- Slow, controlled camera movement.
- Natural lighting and refined material details.
- Premium cinematic color grading.
- Responsive framing that keeps the subject visible on desktop and mobile.

Design:
- Minimal header layered over the video.
- Clear, memorable headline.
- Short supporting text.
- Primary CTA: “Explore Our Designs”.
- Secondary CTA: “Book a Consultation”, connected to the appropriate contact flow.
- Subtle scroll cue.
- Elegant entrance animation with restrained motion.

Keep the headline legible through carefully controlled overlays or contrast. Avoid overly darkening beautiful interiors.

Technical requirements:
- Provide a poster image and mobile-friendly video fallback.
- Keep the video muted, inline, and optimized for performance.
- Respect reduced-motion preferences and data-saving constraints.
- Avoid blocking the page while the video loads.

Do not invent unsupported brand claims or slogans. Develop the copy from the actual company positioning.

### Section 2: What We Make

Show four core collections:

- Modular Kitchen
- Wardrobe
- Walk-in Closet
- Bar Unit

Use a premium editorial bento composition with varying image proportions rather than four identical cards.

Each collection should have:
- High-quality relevant imagery.
- Clear category naming.
- A short, benefit-oriented description.
- A working exploration link.
- Subtle image reveal or hover interaction.

On mobile, reflow the grid naturally into a clean vertical composition. Never introduce page-level horizontal scrolling.

### Section 3: Modular Kitchen Configurations

Showcase the five kitchen layouts:

- L-Shape
- U-Shape
- Parallel
- Straight
- Island

Build a visual configuration selector, image grid, or editorial showcase. Where the supplied images support it, include simple floor-plan diagrams alongside finished kitchen photographs.

Each configuration should explain what distinguishes it and which type of space it may suit.

The selected configuration must visibly update the relevant content if an interactive selector is used. All tabs, selectors, and links must function correctly.

### Section 4: Kitchen Design Styles

Present four distinct design directions:

- Contemporary
- Classic
- Bold
- Boho

Let the imagery communicate each aesthetic. Use large visual tiles, an editorial gallery, or an interactive style explorer.

Maintain a consistent composition while allowing each style to express its own character. Do not make all four look visually interchangeable.

### Section 5: Surface Finishes and Materials

Organize the available finishes into an attractive material library:

- PU
- Laminate
- Acrylic — matte and gloss
- Glass
- Membrane
- Therulam
- Metallic shutters
- SS 304

Use close-up photographs, finish samples, subtle swatch interactions, and useful explanatory labels.

Group finishes into appropriate categories instead of displaying an undifferentiated list. Show matte, gloss, metallic, and other distinctions where applicable.

Preserve supplied material terminology until the business confirms any spelling or technical corrections. Do not invent technical properties, certifications, or performance claims.

### Section 6: Wardrobes

Show the two wardrobe opening systems:

- Sliding
- Openable / hinged

Use detailed product imagery and clear comparisons that help visitors understand the different configurations.

Keep the presentation minimal and focused on door systems, finish choices, organization, and customization.

### Section 7: Walk-in Closets

Showcase walk-in closet configurations with:

- Full-curtain configuration, subject to confirmation of the exact intended term.
- Aluminium-frame system.
- Floor-to-ceiling configuration.

Use full-height photography and strong architectural compositions.

Emphasize the relationship between storage, organization, finishes, lighting, and available space without claiming capabilities that the business has not confirmed.

### Section 8: Core Materials

Present the primary materials used in manufacturing:

- Marine plywood.
- HDHMR board.
- SS 304.

Use a refined material comparison or compact editorial layout.

Explain the purpose of each material only where accurate, relevant product information is available. Avoid blanket claims that every material is used in every product.

### Section 9: Internal Fittings and Storage Solutions

Create an interactive or editorial showcase for:

- Soft-close systems.
- Full-extension drawers.
- Soft-close lift-up systems.
- Sliding systems.
- Pull-out rotating mirrors.

Use macro product details and realistic interior applications.

Prioritize usability and discoverability. Interactive demonstrations are welcome only if they can be implemented smoothly and work on touch devices as well as desktop.

### Section 10: Hardware Partners

Show the hardware brands supplied by the business:

- Blum
- Ebio
- Salica
- Hafele
- Hettic

**Verify brand spelling and exact supplier relationships before publishing.** In particular, confirm whether “Ebio”, “Salica”, and “Hettic” are the intended names. Do not substitute another brand silently.

Use approved logos only where authorized and available. Keep logo sizing, visual weight, and spacing consistent.

If the company has not confirmed a formal partnership, do not describe a listed hardware manufacturer as an official partner.

### Section 11: Product Showcase / Projects

Create a premium, image-led gallery of actual products, interiors, or completed projects.

Possible filters:
- All Projects
- Modular Kitchens
- Wardrobes
- Walk-in Closets
- Bar Units

Use an editorial masonry or asymmetric grid if it suits the available photography. Images should open meaningful project details or lead to relevant collection pages.

Avoid dead-end image tiles, fake case studies, invented client names, and unsupported project counts.

Where real case-study information is available, show the design objective, selected materials, configuration, and final result.

### Section 12: User Testimonials

Create a refined testimonial section using genuine approved customer feedback.

Include only information actually supplied or verified by the business. Use customer names, photographs, ratings, and project details only when authorized and available.

If no testimonials are supplied, create a suitable layout that can be populated later, but do not publish invented reviews or placeholder text.

### Section 13: Why Choose Us — Why EBONY

Treat this as the final major editorial content section on the homepage, before the final contact CTA and footer.

Build the section around four proof points:

**Factory and Manufacturing**

Show genuine factory, production, workshop, or behind-the-scenes imagery to demonstrate manufacturing capability.

**Customization Flexibility**

Communicate the ability to explore customized layouts, configurations, finishes, and fitting options, limited to actual services offered.

**Timeline Responsibility**

Explain the company's actual process for planning, production, coordination, and delivery. Do not promise delivery timelines without confirmed information.

**Finish Quality**

Use close-up images demonstrating alignment, edges, surfaces, hardware, and finishing details. Emphasize the quality process where supported by real company practices.

Prefer authentic evidence over generic claims. Use photographs, process details, and concise copy rather than four oversized decorative cards.

### Section 14: Final Contact CTA

Create a premium closing section encouraging visitors to discuss a kitchen, wardrobe, or complete interior project.

Use concise copy and a clear working CTA connected to the Contact Us page or actual consultation workflow.

### Section 15: Footer

Build a complete, consistent footer with:
- Brand logo.
- Concise company introduction.
- Useful product links.
- About Us and Contact Us.
- Verified phone number and email.
- Verified address and social links, where available.
- Appropriate legal or policy links, where relevant.
- Copyright information.

Remove empty, duplicate, broken, and irrelevant links.

## 6. About Us Page

Create an image-led company story rather than a generic corporate template.

Include sections for:
- Brand introduction and philosophy.
- Design and manufacturing approach.
- Materials and finishing.
- Customization process.
- Factory and production visuals, where available.
- Quality standards and working process.
- Relevant CTA to explore products or contact the company.

Use actual company history, capabilities, staff details, and factual information. Do not invent dates, certifications, awards, factory capacity, project counts, or team credentials.

## 7. Product and Collection Pages

All collection pages must share a coherent design system without appearing identical.

Each page should include:
- Strong collection hero.
- Clear product introduction.
- Relevant configurations or variants.
- Material and finish options.
- Hardware or internal fittings where relevant.
- Real product images or approved renderings.
- Links to related categories.
- Relevant consultation/contact CTA.

Kitchens should feature layouts and styles. Wardrobes should feature opening systems. Walk-in closets should focus on configurations. Bar units should have their own relevant imagery and available product options.

If a product detail page is used, support meaningful detail views rather than making every image a dead-end gallery item.

## 8. Contact Us Page and Form Behavior

Create a polished, responsive contact page with the verified business contact information and an accessible inquiry form.

The form should collect only necessary information, such as:
- Name.
- Phone or email.
- Product interest.
- Project details.
- Optional preferred contact method.

Requirements:
- Clearly label every field.
- Validate input.
- Show loading, success, and error states.
- Prevent accidental duplicate submissions where practical.
- Preserve useful entered information when an error occurs.
- Connect the form to a real configured submission endpoint or existing backend.

**Never show a success message unless the submission actually succeeds.** Do not invent a backend endpoint or leave the form as a nonfunctional visual mockup.

Make the phone number clickable using `tel:` and the email clickable using `mailto:`. Make the logo link to the homepage. Use valid destinations for all contact and navigation actions.

## 9. Interaction and Animation Direction

Use motion to enhance perception of quality, not to compensate for weak design.

Consider:
- Refined hero text entrance.
- Scroll-triggered image reveals.
- Subtle parallax on selected large imagery.
- Elegant image hover transitions.
- Smooth section transitions.
- Small, responsive navigation animations.
- Polished menu and dialog states.
- Gentle transitions between product configurations or finish selections.

Use the animation library already present in the project where possible. If the existing architecture supports it, GSAP and Framer Motion can be used selectively for their respective strengths.

All interactions must remain responsive and accessible. Respect reduced-motion settings, avoid excessive scroll hijacking, and do not introduce animation that harms usability or performance.

## 10. Responsive Design — Mandatory

Optimize **every page and every component** for desktop, tablet, and mobile. Do not treat mobile support as a final cosmetic pass.

Test at representative viewport widths, including:
- 320px.
- 375px.
- 390px.
- 768px.
- 1024px.
- 1440px and above.

Fix:
- Horizontal page scrolling.
- Mobile overflow and clipped content.
- Oversized headings.
- Images with incorrect proportions.
- Broken grid layouts.
- Overlapping or inaccessible buttons.
- Navigation collisions.
- Forms that exceed viewport width.
- Inappropriate desktop-only hover behavior.
- Touch targets that are too small.
- Text with unreadable contrast or line lengths.

Use fluid typography, responsive image sizing, sensible container widths, and appropriate grid breakpoints.

**Acceptance requirement: no unintended page-level horizontal overflow at any tested viewport size.** If a component genuinely requires a horizontal interaction, constrain it within that component and ensure it cannot expand the page width.

## 11. Technical, SEO, and Functional Cleanup

Perform a site-wide audit and fix each of the following.

### Links and navigation
- Find and fix broken internal links.
- Verify external links and their destinations.
- Fix footer links.
- Fix broken buttons and nonfunctional CTAs.
- Remove unused navigation items.
- Ensure every intended route has a real page.
- Test the logo link.
- Make email addresses and phone numbers clickable.
- Test forms, dropdowns, tabs, filters, dialogs, and menu controls.

### Metadata and indexing
- Add a descriptive, unique page title to every indexable page.
- Add a relevant meta description to each page.
- Set the correct favicon using approved brand assets.
- Add appropriate canonical URLs, Open Graph metadata, and social-sharing imagery where applicable.
- Verify sitemap and robots directives.
- Implement relevant structured data only when supported by actual business information.
- Use a logical semantic heading hierarchy and meaningful image alt text.
- Avoid duplicate metadata and placeholder page titles.

Do not invent a domain, business address, social handle, or contact details.

### Images and video
- Compress oversized images.
- Use AVIF or WebP when appropriate.
- Generate responsive image sizes and use `srcset`/`sizes` or the framework's image optimization system.
- Lazy-load appropriate below-the-fold images.
- Avoid lazy-loading the primary hero media in a way that delays the first visual impression.
- Specify image dimensions or aspect ratios to minimize layout shifts.
- Optimize video size and delivery; use a suitable poster and fallbacks.
- Preserve image quality where detail and materials are important.

### Errors and content quality
- Build a custom 404 page with a working route back to the homepage and access to product collections.
- Remove all placeholder text, `Lorem ipsum`, unused demo sections, dummy project entries, and template branding.
- Ensure all navigation destinations and form feedback states are meaningful.
- Fix console errors, missing assets, and incorrect route handling.
- Add visible, accessible success and error messages to relevant forms and actions.

## 12. Accessibility and Performance

Target WCAG 2.2 AA practices where applicable.

Check:
- Color contrast.
- Keyboard navigation.
- Visible focus states.
- Accessible form labels and errors.
- Appropriate accessible names for icon buttons.
- Dialog and menu focus behavior.
- Reduced-motion support.
- Image alternatives.
- Semantic landmarks.
- Screen-reader-friendly status messages.

Optimize Core Web Vitals and avoid unnecessary dependencies, oversized libraries, render-blocking assets, layout shifts, and unbounded animation loops.

Use performance measurements to validate improvements rather than claiming optimization is complete without testing.

## 13. Engineering Approach

- Work within the existing framework unless a change is genuinely justified.
- Reuse and improve shared components.
- Keep the component architecture consistent and maintainable.
- Separate reusable product data from presentation where practical.
- Keep navigation, metadata, buttons, and responsive behavior consistent across pages.
- Preserve existing working business integrations.
- Do not hardcode fake contact details or nonfunctional links.
- Do not make up content to fill empty sections.
- Do not remove useful features without understanding their purpose.
- Avoid unrelated refactoring.

Before completion, run the available build, lint, type checks, route checks, and tests. Resolve regressions caused by the redesign.

## 14. Final Acceptance Checklist

The project is ready for delivery only when:

- The visual identity follows the approved white, black, and gold system.
- The homepage includes the cinematic video hero.
- All four product categories are represented.
- Kitchen configurations and styles are discoverable.
- Materials, core boards, hardware, and internal fittings are organized clearly.
- Product showcase, testimonials, About Us, and Contact Us are implemented with authentic content.
- The Why EBONY section emphasizes the factory, customization, timeline responsibility, and finish quality.
- All pages are mobile-optimized.
- No unintended horizontal scrolling remains.
- The mobile menu works.
- Every intended link, CTA, form, and interaction has been tested.
- Page titles, meta descriptions, favicon, and footer links are corrected.
- Images are optimized.
- A custom 404 page exists.
- Placeholder content and dead navigation have been removed.
- No obvious layout defects or avoidable console errors remain.

## 15. Final Deliverables

After implementation, provide:

1. A concise summary of the redesign.
2. The pages and components created or improved.
3. The broken links, buttons, and layout issues fixed.
4. The SEO, metadata, and image-optimization improvements completed.
5. The responsive viewport tests performed.
6. Build, lint, and test results.
7. Any remaining issue that needs business-owner input, such as unverified brand spelling, missing photography, testimonials, or contact details.

Be honest about anything that could not be verified or completed.

**Final design principle:** Make the website feel like a premium interior-design experience, not a generic furniture catalogue. Lead with imagery, use editorial composition, make product exploration effortless, demonstrate craftsmanship through evidence, and keep every page beautiful, fast, accessible, and fully functional.