import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Collections Portfolio — Modular Kitchens, Wardrobes & Suites | EBONY",
  description:
    "Explore 300+ modular kitchen designs, 100+ bespoke wardrobe configurations, and 50+ master bedroom suites engineered in Germany.",
}

const COLLECTIONS_LOOKBOOK = [
  {
    id: "kitchen-island",
    category: "Modular Kitchen · 300+ Designs",
    title: "The Calacatta Waterfall Atelier",
    subtitle: "Honed marble monolithic island with motorized concealed socket towers and smoked oak cabinetry.",
    image: "/img/kitchen-island-luxury.jpg",
  },
  {
    id: "wardrobe-walkin",
    category: "Bespoke Wardrobe · 100+ Layouts",
    title: "The Sanctuary Smoked Dressing Room",
    subtitle: "Floor-to-ceiling bronze glass enclosures with warm vertical 3000K recessed architectural illumination.",
    image: "/img/wardrobe-detail-shot.jpg",
  },
  {
    id: "bedroom-master",
    category: "Master Bedroom · 50+ Collections",
    title: "The Kyoto Platform Suite",
    subtitle: "Low-profile upholstered linen bed with integrated acoustic fluted oak slat feature wall.",
    image: "/img/master-suite-luxury.jpg",
  },
  {
    id: "living-millwork",
    category: "Living Millwork · Custom Bespoke",
    title: "The Travertine Lounge & Wall Paneling",
    subtitle: "CNC fluted walnut acoustic paneling with concealed wire chases, subwoofers, and backlit shelving.",
    image: "/img/living-room-showcase.jpg",
  },
  {
    id: "penthouse-fitout",
    category: "Full Residence · Integrated Suite",
    title: "The Atelier Daylight Penthouse",
    subtitle: "Harmonized architectural palette unifying kitchen, master walk-in wardrobe, and bedroom suites.",
    image: "/img/showcase-hero.png",
  },
  {
    id: "chef-parallel",
    category: "Modular Kitchen · Ergonomic Triangle",
    title: "The Parallel Chef Studio",
    subtitle: "Twin counter runs with Blum Aventos lift systems and super matt anti-fingerprint surfaces.",
    image: "/img/hero-kitchen.jpg",
  },
]

export default function CollectionsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900">
      <Navbar />

      <main className="pt-28">
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-12 border-b border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B8923A] font-semibold block mb-3">
                CURATED SPACES & PROJECTS
              </span>
              <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-slate-950 font-normal leading-[1.1]">
                Portfolio <span className="text-[#855E15] not-italic font-medium">Lookbook</span>
              </h1>
            </div>
            <p className="text-slate-600 max-w-sm text-xs sm:text-sm leading-relaxed font-light">
              Over 450 active modular configurations. Every space engineered with 0.1mm German precision and installed in 3 days.
            </p>
          </div>
        </section>

        {/* Expansive Architectural Gallery */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {COLLECTIONS_LOOKBOOK.map((item, idx) => (
              <div key={item.id} className="group block">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden mb-5 border border-slate-200 shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 font-mono text-[10px] uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white font-serif italic text-2xl font-light">
                    0{idx + 1}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif italic text-2xl text-slate-950 group-hover:text-[#855E15] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-light mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center shrink-0 group-hover:border-[#B8923A] group-hover:bg-[#B8923A] group-hover:text-slate-950 transition-all duration-300 shadow-sm"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
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
