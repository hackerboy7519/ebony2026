import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Collections Lookbook — Modular Kitchens, Wardrobes & Suites | EBONY",
  description:
    "Explore 300+ modular kitchen designs, 100+ bespoke wardrobe configurations, and 50+ master bedroom suites engineered in Germany.",
}

const COLLECTIONS_LOOKBOOK = [
  {
    id: "kitchen-island",
    category: "Modular Kitchen · 300+ Designs",
    title: "The Calacatta Waterfall Atelier",
    subtitle: "Honed marble monolithic island with motorized concealed socket towers and smoked oak cabinetry.",
    image: "/img/kitchen-island-real.jpg",
    href: "/kitchens",
  },
  {
    id: "wardrobe-walkin",
    category: "Bespoke Wardrobe · 100+ Layouts",
    title: "The Sanctuary Smoked Dressing Room",
    subtitle: "Floor-to-ceiling bronze glass enclosures with warm vertical 3000K recessed architectural illumination.",
    image: "/img/wardrobe-bespoke-real.jpg",
    href: "/wardrobes",
  },
  {
    id: "closet-suite",
    category: "Walk-in Closet · Haute Dressing",
    title: "The Bronze Vitrine Dressing Suite",
    subtitle: "Slim anodised aluminium frames, sensor lighting, velvet accessory drawers, and 360° rotating mirror.",
    image: "/img/walk-in-closet-luxury.jpg",
    href: "/walk-in-closets",
  },
  {
    id: "bar-lounge",
    category: "Bar & Living · Custom Joinery",
    title: "The Illuminated Fluted Lounge Bar",
    subtitle: "Custom bar unit with ambient backlight fluting, brass glassware rails, and quartz prep counter.",
    image: "/img/bar-unit-luxury.jpg",
    href: "/projects#bar-unit",
  },
  {
    id: "living-millwork",
    category: "Living Millwork · Architectural Consoles",
    title: "The Travertine Lounge & Wall Paneling",
    subtitle: "CNC fluted walnut acoustic paneling with concealed wire chases, subwoofers, and backlit shelving.",
    image: "/img/living-room-showcase.jpg",
    href: "/projects",
  },
  {
    id: "chef-parallel",
    category: "Modular Kitchen · Contemporary Layout",
    title: "The Contemporary J-Pull Culinary Suite",
    subtitle: "Handleless cabinetry with seamless acrylic finish, Blum Aventos lift systems, and LeMans corner trays.",
    image: "/img/kitchen-contemporary-real.jpg",
    href: "/kitchens",
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
                CURATED SPACES &amp; PROJECTS
              </span>
              <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-slate-950 font-normal leading-[1.1]">
                Portfolio <span className="text-[#855E15] not-italic font-medium">Lookbook</span>
              </h1>
            </div>
            <p className="text-slate-600 max-w-sm text-xs sm:text-sm leading-relaxed font-light">
              Over 450 active modular configurations. Every space engineered with 0.1mm German precision and installed in 3 days.
            </p>
          </div>

          {/* Quick Subcategory Pills */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            <Link
              href="/kitchens"
              className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Modular Kitchens →
            </Link>
            <Link
              href="/wardrobes"
              className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Bespoke Wardrobes →
            </Link>
            <Link
              href="/walk-in-closets"
              className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Walk-in Closets →
            </Link>
            <Link
              href="/finishes"
              className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Materials &amp; Finishes →
            </Link>
            <Link
              href="/hardware"
              className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Hardware Partners →
            </Link>
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
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                    href={item.href}
                    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center shrink-0 group-hover:border-[#B8923A] group-hover:bg-[#B8923A] group-hover:text-slate-950 transition-all duration-300 shadow-sm"
                    aria-label={`Explore ${item.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Studio Booking Section */}
        <StudioCtaSection />
      </main>

      <Footer />
    </div>
  )
}
