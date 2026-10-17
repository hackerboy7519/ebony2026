import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhatWeMakeSection } from "@/components/what-we-make-section"
import { KitchenConfigurationsSection } from "@/components/kitchen-configurations-section"
import { KitchenStylesSection } from "@/components/kitchen-styles-section"
import { SurfaceFinishesSection } from "@/components/surface-finishes-section"
import { WardrobesSection } from "@/components/wardrobes-section"
import { WalkInClosetsSection } from "@/components/walk-in-closets-section"
import { CoreMaterialsSection } from "@/components/core-materials-section"
import { InternalFittingsSection } from "@/components/internal-fittings-section"
import { HardwareBrandsSection } from "@/components/hardware-brands-section"
import { ProjectsShowcaseSection } from "@/components/projects-showcase-section"
import { ScrollStoryCanvas } from "@/components/ui/aceternity/scroll-story-canvas"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyEbonySection } from "@/components/why-ebony-section"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { FadeReveal } from "@/components/ui/fade-reveal"

export const metadata = {
  title: "EBONY Modular Interiors — German Engineered Kitchens, Wardrobes & Bespoke Joinery",
  description:
    "Luxury modular interiors crafted with German CNC precision and installed in 3 days. Explore bespoke kitchens, sliding wardrobes, walk-in closets, and 500+ finishes.",
}

export default function Page() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main>
        {/* Section 1: Full-Screen Cinematic Video Hero */}
        <HeroSection />

        {/* Section 2: What We Make (4 Collections Editorial Bento Grid) */}
        <FadeReveal>
          <WhatWeMakeSection />
        </FadeReveal>

        {/* Section 3: Modular Kitchen Configurations (5 Layouts) */}
        <FadeReveal>
          <KitchenConfigurationsSection />
        </FadeReveal>

        {/* Section 4: Kitchen Design Styles (4 Aesthetics) */}
        <FadeReveal>
          <KitchenStylesSection />
        </FadeReveal>

        {/* Section 5: Surface Finishes and Materials (8 Finishes Matrix) */}
        <FadeReveal>
          <SurfaceFinishesSection />
        </FadeReveal>

        {/* Section 6: Wardrobes (Sliding vs Openable Hinged Systems) */}
        <FadeReveal>
          <WardrobesSection />
        </FadeReveal>

        {/* Section 7: Walk-in Closets (Luxury Dressing Suites) */}
        <FadeReveal>
          <WalkInClosetsSection />
        </FadeReveal>

        {/* Section 8: Core Materials (Marine Plywood, HDHMR, SS304) */}
        <FadeReveal>
          <CoreMaterialsSection />
        </FadeReveal>

        {/* Section 9: Internal Fittings & Motion (Mirror, Aventos, Runners) */}
        <FadeReveal>
          <InternalFittingsSection />
        </FadeReveal>

        {/* Section 10: Hardware Brands (Blum, Häfele, Hettich, Salice, Ebco) */}
        <FadeReveal>
          <HardwareBrandsSection />
        </FadeReveal>

        {/* Section 11: Product Showcase / Completed Residences Gallery */}
        <FadeReveal>
          <ProjectsShowcaseSection />
        </FadeReveal>

        {/* Previous Scroll Storytelling Canvas */}
        <section id="scroll-story" className="relative bg-white text-slate-900">
          <ScrollStoryCanvas />
        </section>

        {/* Section 12: User Testimonials (Compact Moving Cards) */}
        <FadeReveal>
          <TestimonialsSection />
        </FadeReveal>

        {/* Section 13: Why Choose Us — Why EBONY (4 Proof Points) */}
        <FadeReveal>
          <WhyEbonySection />
        </FadeReveal>

        {/* Section 14: Final Studio Consultation CTA */}
        <FadeReveal>
          <StudioCtaSection />
        </FadeReveal>
      </main>

      {/* Section 15: Master Footer */}
      <Footer />
    </div>
  )
}
