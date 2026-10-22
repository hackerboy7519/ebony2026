import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhatWeMakeSection } from "@/components/what-we-make-section"
import { KitchenConfigurationsSection } from "@/components/kitchen-configurations-section"
import { KitchenStylesSection } from "@/components/kitchen-styles-section"
import { ProcessTimelineSection } from "@/components/process-timeline-section"
import { SurfaceFinishesSection } from "@/components/surface-finishes-section"
import { WardrobesSection } from "@/components/wardrobes-section"
import { InternalFittingsSection } from "@/components/internal-fittings-section"
import { ProjectsShowcaseSection } from "@/components/projects-showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyEbonySection } from "@/components/why-ebony-section"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { FadeReveal } from "@/components/ui/fade-reveal"
import { EnquiryModal } from "@/components/enquiry-modal"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"

export const metadata = {
  title: "EBONY Modular Kitchens & Wardrobes in Raipur",
  description:
    "Beautiful modular kitchens, wardrobes and walk-in closets in Raipur. Made in our own factory and fitted in 3 days. Visit our studio today.",
}

export default function Page() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main>
        {/* Section 1: Hero with Video & 4-Stat Animated Trust Strip */}
        <HeroSection />

        {/* Section 2: Explore Modular Designs (4 Collections Bento Grid) */}
        <FadeReveal>
          <WhatWeMakeSection />
        </FadeReveal>

        {/* Section 3: OUR COLLECTIONS — "Your dream kitchen awaits!" (5 Layouts) */}
        <FadeReveal>
          <KitchenConfigurationsSection />
        </FadeReveal>

        {/* Section 4: Pick Your Style (12 Original Kitchen Designs with Filter Chips) */}
        <FadeReveal>
          <KitchenStylesSection />
        </FadeReveal>

        {/* Section 5: From Idea to Home in 4 Steps (Connected Process Track) */}
        <FadeReveal>
          <ProcessTimelineSection />
        </FadeReveal>

        {/* Section 6: Colours & Finishes You'll Love (8 Friendly Swatches) */}
        <FadeReveal>
          <SurfaceFinishesSection />
        </FadeReveal>

        {/* Section 7: Space For Everything You Own (Merged Wardrobes & Walk-in Closets) */}
        <FadeReveal>
          <WardrobesSection />
        </FadeReveal>

        {/* Section 8: Little Things, Big Comfort (4 Soft-Close Cards + Blum, Häfele, Hettich, Salice, Ebco) */}
        <FadeReveal>
          <InternalFittingsSection />
        </FadeReveal>

        {/* Section 9: Homes We've Made Beautiful (6 Real Work Cards from Raipur & Nearby) */}
        <FadeReveal>
          <ProjectsShowcaseSection />
        </FadeReveal>

        {/* Section 10: Stories From Happy Homes (Compact Moving Testimonials Marquee) */}
        <FadeReveal>
          <TestimonialsSection />
        </FadeReveal>

        {/* Section 11: The EBONY Promise (Factory, Customisation, 3 Days, 10 Years Warranty) */}
        <FadeReveal>
          <WhyEbonySection />
        </FadeReveal>

        {/* Section 12: Let's Plan Your Kitchen Together (Studio CTA) */}
        <FadeReveal>
          <StudioCtaSection />
        </FadeReveal>
      </main>

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal />

      {/* Mobile Sticky Action Bar & Desktop Floating Pill */}
      <MobileStickyBar />

      {/* Master Footer */}
      <Footer />
    </div>
  )
}
