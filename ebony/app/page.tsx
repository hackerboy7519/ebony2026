import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CollectionsSection } from "@/components/collections-section"
import { ValuePillarsSection } from "@/components/value-pillars-section"
import { ExperienceSection } from "@/components/experience-section"
import { ScrollStoryCanvas } from "@/components/ui/aceternity/scroll-story-canvas"
import { CraftsmanshipSection } from "@/components/craftsmanship-section"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { FadeReveal } from "@/components/ui/fade-reveal"

export default function Page() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900">
      <ScrollProgress />
      <Navbar />
      <main>
        {/* 1. Hero Section matching uploaded reference image */}
        <HeroSection />

        {/* 2. Collections Lookbook */}
        <FadeReveal>
          <CollectionsSection />
        </FadeReveal>

        {/* 3. 4 Value Pillars Bar */}
        <FadeReveal>
          <ValuePillarsSection />
        </FadeReveal>

        {/* 4. The EBONY Experience: "Not just furniture. A way of living." */}
        <FadeReveal>
          <ExperienceSection />
        </FadeReveal>

        {/* 5. Previous Scroll Storytelling Canvas directly below Experience */}
        <section id="scroll-story" className="relative bg-white text-slate-900">
          <ScrollStoryCanvas />
        </section>

        {/* 6. Craftsmanship Section */}
        <FadeReveal>
          <CraftsmanshipSection />
        </FadeReveal>

        {/* 7. Real homes. Real stories. (Alternating Left-Right Order) */}
        <FadeReveal>
          <FeaturedProjectsSection />
        </FadeReveal>

        {/* 8. Auto-Moving Testimonials with Small Compact Cards */}
        <FadeReveal>
          <TestimonialsSection />
        </FadeReveal>

        {/* 9. Experience Studio Consultation CTA */}
        <FadeReveal>
          <StudioCtaSection />
        </FadeReveal>
      </main>
      <Footer />
    </div>
  )
}
