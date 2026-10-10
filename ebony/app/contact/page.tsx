import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ChevronRight, Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Book Studio Consultation & Contact | EBONY Raipur",
  description:
    "Schedule a personal interior architecture consultation at EBONY Raipur Studio or enquire about franchise and dealer partnerships across India.",
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900">
      <Navbar />

      <main className="pt-28 pb-12">
        {/* Breadcrumb & Header */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-12 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-slate-900 font-semibold">Studio Consultation</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B8923A] font-semibold block mb-3">
                FLAGSHIP EXPERIENCE STUDIO · RAIPUR
              </span>
              <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-slate-950 font-normal leading-[1.1]">
                Begin Your Space, <br className="hidden sm:inline" />
                <span className="text-[#855E15] not-italic font-medium">Book a Consultation</span>
              </h1>
            </div>
            <p className="text-slate-600 max-w-md text-xs sm:text-sm font-light leading-relaxed">
              Meet our senior interior architects at our Raipur experience center or request a private 3D consultation. Every EBONY space is custom-engineered to your architecture.
            </p>
          </div>
        </section>

        {/* Studio Direct Info Double-Bezel Cards */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <a
              href="tel:+917666902365"
              className="double-bezel group transition-transform duration-500 hover:-translate-y-1 block"
            >
              <div className="double-bezel-inner p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50/80 border border-[#B8923A]/30 flex items-center justify-center text-[#855E15] mb-4 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-1">
                  Direct Line
                </span>
                <p className="font-serif italic text-lg text-slate-900 group-hover:text-[#855E15] transition-colors">
                  +91 76669 02365
                </p>
                <span className="text-[10px] font-mono text-emerald-700 mt-2 block font-medium">
                  Mon – Sat · 10am – 8pm IST
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/917666902365"
              target="_blank"
              rel="noopener noreferrer"
              className="double-bezel group transition-transform duration-500 hover:-translate-y-1 block"
            >
              <div className="double-bezel-inner p-6">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-1">
                  WhatsApp Studio
                </span>
                <p className="font-serif italic text-lg text-slate-900 group-hover:text-[#25D366] transition-colors">
                  Instant Architectural Chat
                </p>
                <span className="text-[10px] font-mono text-slate-500 mt-2 block">
                  Usually replies in 15 mins
                </span>
              </div>
            </a>

            <a
              href="mailto:info@ebony.co.in"
              className="double-bezel group transition-transform duration-500 hover:-translate-y-1 block"
            >
              <div className="double-bezel-inner p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50/80 border border-[#B8923A]/30 flex items-center justify-center text-[#855E15] mb-4 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-1">
                  Architectural CAD & Plans
                </span>
                <p className="font-serif italic text-lg text-slate-900 group-hover:text-[#855E15] transition-colors truncate">
                  info@ebony.co.in
                </p>
                <span className="text-[10px] font-mono text-slate-500 mt-2 block">
                  Send AutoCAD / PDF drawings
                </span>
              </div>
            </a>

            <div className="double-bezel">
              <div className="double-bezel-inner p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50/80 border border-[#B8923A]/30 flex items-center justify-center text-[#855E15] mb-4">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-1">
                  Experience Center
                </span>
                <p className="font-serif italic text-lg text-slate-900">
                  Raipur Flagship Studio
                </p>
                <span className="text-[10px] font-mono text-slate-500 mt-2 block">
                  Chhattisgarh 492001, India
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
