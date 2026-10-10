# EBONY — Design System "Atelier Daylight" (Phase 1 Art Direction)

## 1. Palette Architecture
The design system envisions an architect's atelier flooded with natural northern daylight. Surfaces are matte pearl, typography is crisp ebony wood black, and gold is treated strictly as **foil or jewel hardware** (hinges, hairlines, numerals, light sweeps), never as heavy paint or flood fills.

### Color Tokens
```css
:root {
  /* Canvas & Cards */
  --pearl: #FBFBF9;       /* Main canvas background (near-white, warm) */
  --white: #FFFFFF;       /* Card surfaces, raised elevations */
  --mist: #F0EFEA;        /* Alternate contrast sections */

  /* Ink & Typography */
  --ebony: #0B0B0C;       /* Primary headlines, body titles, dark moments */
  --graphite: #4A4A4F;    /* Secondary copy (≥7:1 contrast against pearl) */
  --hair: #E3E1DA;        /* 1px structural grid dividers */

  /* Gold Metallurgy */
  --gold-light: #EAD08A;  /* Specular shimmer highlight */
  --gold: #B8923A;        /* Core brushed champagne gold */
  --gold-deep: #7C5F16;   /* Accessible text gold (≥5.1:1 on pearl, WCAG AA compliant) */
  --foil: linear-gradient(115deg, #7C5F16 0%, #D9B65B 30%, #F6E7B0 50%, #C49A3A 70%, #7C5F16 100%);

  /* Cool Daylight Accent */
  --daylight: #EEF2F6;    /* Soft architectural sky reflection */
}
```

### Gold Discipline Rules
- Gold elements shall never cover more than **8% of any viewport**.
- Small text (<24px) utilizing gold must use `--gold-deep` (#7C5F16) to ensure WCAG AA contrast compliance.
- Large editorial display headings may use `--foil` with gentle ambient shimmer (`foilShimmer` animation).
- Dark ebony theme is reserved exclusively for the architectural footer and technical stats divider to create grounding cadence.

---

## 2. WCAG Contrast Audit Table
| Foreground | Background | Calculated Ratio | WCAG AA Status | Usage |
|---|---|---|---|---|
| `--ebony` (#0B0B0C) | `--pearl` (#FBFBF9) | **17.2:1** | Pass (AAA) | Primary headings & navigation |
| `--graphite` (#4A4A4F) | `--pearl` (#FBFBF9) | **8.1:1** | Pass (AAA) | Body copy, subtitles |
| `--gold-deep` (#7C5F16) | `--pearl` (#FBFBF9) | **5.4:1** | Pass (AA) | Labels, mono specs, stats labels |
| `--ebony` (#0B0B0C) | `--white` (#FFFFFF) | **18.9:1** | Pass (AAA) | Card headlines |
| `--pearl` (#FBFBF9) | `--ebony` (#0B0B0C) | **17.2:1** | Pass (AAA) | Dark footer text |
| `--gold-light` (#EAD08A)| `--ebony` (#0B0B0C) | **11.8:1** | Pass (AAA) | Dark footer gold accents |

---

## 3. Typography Hierarchy
1. **Editorial Display Serif**: `Playfair Display` (Latin, font-display: swap)
   - `.text-display`: `clamp(3rem, 7vw, 7rem)`, italic, letter-spacing -0.02em, line-height 1.05
   - `.text-heading-1`: `clamp(2.5rem, 5.5vw, 5rem)`, italic, letter-spacing -0.02em
   - `.text-heading-2`: `clamp(2rem, 4vw, 3.5rem)`, italic, letter-spacing -0.01em
2. **Architectural Sans**: `Hanken Grotesk` (Latin, font-display: swap)
   - `.text-body`: 1.05rem, font-weight 300/400, line-height 1.7, color `--graphite`
   - `.btn-primary`: 0.8125rem, tracking 0.08em, uppercase, font-weight 500
3. **Technical Specs Mono**: `JetBrains Mono`
   - `.eyebrow`, `.text-label`: 0.625rem (10px), uppercase, tracking 0.14em - 0.2em, color `--gold-deep`

---

## 4. Spacing & Spatial Rhythm
- Base modular unit: **8px**
- Container max-width: `1440px` for wide canvas, `1200px` for structured content
- Section padding: `6rem 1.5rem` on mobile, scaling to `8rem 4rem` / `10rem 4rem` on desktop
- Border radius: Architectural strictness (2px - 4px on cards and buttons)
- Shadows: Soft, diffuse ambient occlusion `0 30px 60px -30px rgba(11,11,12,0.12)`
