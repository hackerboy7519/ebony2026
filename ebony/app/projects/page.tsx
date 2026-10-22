import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectsShowcaseSection } from "@/components/projects-showcase-section"
import { ArrowUpRight, Award, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Completed Projects & Residential Case Studies — EBONY Modular Interiors",
  description:
    "Explore real completed residences across Raipur, Bilaspur, and India. High-end modular kitchens, bespoke sliding wardrobes, and luxury dressing suites.",
}

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative bg-[#0B0F19] text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/project-shankar-nagar.jpg"
              alt="EBONY completed luxury penthouse interior"
              fill
              className="object-cover opacity-35 brightness-75 filter"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                REAL RESIDENCES · REAL STORIES
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.1] tracking-tight mb-6">
                Completed Projects, <br />
                <span className="italic">Crafted to 0.1mm.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
                Explore our portfolio of signature residential interiors across Central India and pan-India. Every joint, reveal, and panel reflects our zero-defect philosophy.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#gallery"
                  className="px-6 py-3.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-lg"
                >
                  View Case Studies
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 backdrop-blur-md"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Stats Bar */}
        <section className="py-14 bg-[#FAFAFA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal">15+</span>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mt-1">Years of Excellence</p>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal">10,000+</span>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mt-1">Happy Homes Across India</p>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal">3 Days</span>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mt-1">Average On-Site Assembly</p>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal">100%</span>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mt-1">Pre-Assembled in Factory</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filterable Projects Showcase Gallery */}
        <div id="gallery">
          <ProjectsShowcaseSection />
        </div>

        {/* Featured Case Study Deep Dive: The Shankar Nagar Penthouse */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/kitchen-island-real.jpg"
                  alt="EBONY Shankar Nagar Penthouse Kitchen Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B8923A] font-bold">
                    Signature Case Study
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                  PENTHOUSE RESIDENCE · SHANKAR NAGAR
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal mb-6">
                  Island Kitchen with Quartzite Waterfall &amp; Fluted Oak.
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                  The client sought a showstopper culinary centerpiece that flowed seamlessly into the penthouse dining and lounge space. EBONY engineered a 10-foot waterfall island with continuous grain quartz, hidden J-pull Blum Legrabox drawers, and motorized Aventos bi-fold lift-ups.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-8">
                  <div>
                    <span className="font-mono text-xs uppercase text-slate-500 block mb-1">Configuration</span>
                    <p className="font-sans text-xs sm:text-sm text-slate-800 font-semibold">Island with Perimeter Larder</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase text-slate-500 block mb-1">Substrate Core</span>
                    <p className="font-sans text-xs sm:text-sm text-slate-800 font-semibold">IS 710 BWP Marine Plywood</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase text-slate-500 block mb-1">Surface Finish</span>
                    <p className="font-sans text-xs sm:text-sm text-slate-800 font-semibold">Super-Matte Italian PU Lacquer</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase text-slate-500 block mb-1">Hardware</span>
                    <p className="font-sans text-xs sm:text-sm text-slate-800 font-semibold">Blum Aventos &amp; Legrabox</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
                >
                  <span>Commission a Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="py-20 bg-[#0B0F19] text-white text-center">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
              YOUR RESIDENCE IS NEXT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-6">
              Start Your Bespoke Journey.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Schedule a design session at our Raipur flagship studio. Let our senior interior architects bring your dream space into photorealistic 3D.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl"
            >
              <span>Book Studio Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
