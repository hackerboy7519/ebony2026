import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StudioCtaSection } from "@/components/studio-cta-section"

export const metadata: Metadata = {
  title: "About EBONY Modular Kulture — 15+ Years of Precision Luxury",
  description:
    "Founded in 2009 in Raipur, EBONY is India's premier German-engineered modular interior brand, known for vertical integration and a 0% defect policy.",
}

const MILESTONES = [
  {
    year: "2009",
    title: "Founding in Raipur",
    desc: "Established with a clear focus: replace chaotic on-site carpentry with German modular precision.",
  },
  {
    year: "2014",
    title: "German Automated CNC",
    desc: "Integrated automated edging and precision 3D routing to guarantee 0.1mm tolerance joinery.",
  },
  {
    year: "2019",
    title: "Pan-India Expansion",
    desc: "Scaled dealer network to over 300 points across Mumbai, Delhi, Bangalore, Pune, and Ahmedabad.",
  },
  {
    year: "2024+",
    title: "Quiet Luxury Standard",
    desc: "Curated 500+ signature finishes, 3-day rapid installation, and a 10-year comprehensive warranty.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900">
      <Navbar />

      <main className="pt-28">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-12 border-b border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#B8923A] font-semibold block mb-3">
                ESTABLISHED 2009 · 15+ YEARS OF MASTERY
              </span>
              <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-slate-950 font-normal leading-[1.1]">
                Crafting spaces that outlive <br />
                <span className="text-[#855E15] not-italic font-medium">their moment.</span>
              </h1>
            </div>
            <p className="text-slate-600 max-w-sm text-xs sm:text-sm leading-relaxed font-normal">
              EBONY Modular Kulture was founded on the belief that genuine luxury is the absence of compromise. Over 15 years, our Raipur studio has quietly become India&apos;s benchmark for bespoke modular interiors.
            </p>
          </div>
        </section>

        {/* Studio Showcase Photography */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-lg group">
              <Image
                src="/img/kitchen-island-luxury.jpg"
                alt="EBONY Culinary Architecture"
                fill
                className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-lg group">
              <Image
                src="/img/living-room-showcase.jpg"
                alt="EBONY Living Room Architectural Millwork"
                fill
                className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Heritage Milestones */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-12">
          <div className="mb-12">
            <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#B8923A] font-semibold block mb-2">
              HERITAGE
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl text-slate-950 font-normal">
              15 Years of Evolution
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((m) => (
              <div key={m.year} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:border-[#B8923A]/50 transition-colors">
                <span className="font-serif italic text-4xl text-[#855E15] font-normal block mb-2">
                  {m.year}
                </span>
                <h4 className="font-sans text-sm font-semibold text-slate-900 mb-2">
                  {m.title}
                </h4>
                <p className="text-slate-600 text-xs font-normal leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Unified Studio Booking Section matching homepage */}
        <StudioCtaSection />
      </main>

      <Footer />
    </div>
  )
}
