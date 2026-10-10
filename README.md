# EBONY — Luxury Modular Interiors (Redesign)

> Light-theme, white-and-gold, story-driven luxury interior website for EBONY (est. 2009, Raipur). German-engineered modular kitchens, wardrobes, and bed sets.

---

## Features & Narrative Architecture
1. **Atelier Daylight Design System**:
   - Palette: Pearl (#FBFBF9), Mist (#F0EFEA), Ebony Black (#0B0B0C), and subtle Champagne Gold Foil (#B8923A, #7C5F16).
   - Strict Gold Discipline: Gold accents cover ≤8% of any viewport as an accent of precision (hairlines, handles, typography highlights).
   - Editorial Typography: *Playfair Display* editorial display serif, *Hanken Grotesk* architectural body sans, and *JetBrains Mono* technical specification uppercase.
2. **Interactive Modules**:
   - **Interactive Finish Studio**: Real-time tactile visualizer for 6 signature finishes (Super Matt, Crystal Glass, Mirror Gloss Acrylic, Ebony Smoked Grain, Champagne Brushed Metal, Fluted Walnut) with specular reflectance stats and direct consultation pre-fill.
   - **3 Days to a New Home**: Interactive installation day scrubber (Day 1 Carcass, Day 2 Hardware & Latches, Day 3 Handover) demonstrating the zero-defect rapid process.
   - **Collections**: High-definition cards for Modular Kitchen (300+ designs), Wardrobe (100+ configurations), and Bed Set (50+ collections).
   - **Pan-India Constellation Network**: Interactive SVG node map with active city credentials (Mumbai, Delhi, Bangalore, Pune, Ahmedabad, Raipur) and franchise inquiry trigger.
   - **Social Proof**: All 6 real, verbatim client reviews from the live website with 5-star ratings and verified homeowner badges.
   - **Consultation & Lead System**: High-conversion consultation form with spam honeypot, interest tag selector, WhatsApp direct chat, and studio credentials.

---

## Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation & Development
```bash
# Navigate to the project directory
cd ebony

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production
```bash
# Run TypeScript verification
npm run typecheck

# Run production build
npm run build

# Start production server
npm run start
```

---

## Project Structure
```
ebony/
├── app/
│   ├── globals.css         # Atelier Daylight tokens, foil shimmer, typography scale
│   ├── layout.tsx          # Root layout with fonts, metadata, and JSON-LD schema
│   ├── page.tsx            # Master narrative composition
│   ├── robots.ts           # Dynamic robots.txt
│   └── sitemap.ts          # Dynamic sitemap.xml
├── components/
│   ├── navbar.tsx          # Scroll-aware glassmorphism navbar with balanced navigation
│   ├── hero-section.tsx    # Asymmetric editorial hero with GSAP entrance reveals
│   ├── philosophy-section.tsx # 3 Pillars (Visionary Design, German Engineering, Enduring Craft)
│   ├── finish-studio-section.tsx # 500+ finishes interactive PBR surface visualizer
│   ├── collections-section.tsx # Kitchen, wardrobe, bed set bezel cards
│   ├── timeline-section.tsx    # 3-Day rapid installation interactive timeline
│   ├── process-section.tsx     # Vertical integration & manufacturing facility
│   ├── features-section.tsx    # Why EBONY: Bespoke, Lifetime Support, 0% Defect
│   ├── stats-section.tsx       # 15+ years, 85%+ retention, 300+ dealers, 10+ franchises
│   ├── network-section.tsx     # Pan-India interactive SVG node map
│   ├── testimonials-section.tsx # 6 verbatim verified client reviews
│   ├── contact-section.tsx     # Consultation form, WhatsApp, phone, and studio location
│   └── footer.tsx          # Architectural ebony footer with gold hairline accents
├── brief/                  # Phase 0 & 1 deliverables (Brand brief, content inventory, design system, storyboard)
├── assets/                 # Image manifest
├── scripts/                # Image generation pipeline script
└── QA/                     # Phase 5 QA and compliance audit report
```

---

## License & Credits
© 2026 EBONY Modular Kulture. All rights reserved.
# ebony2026
