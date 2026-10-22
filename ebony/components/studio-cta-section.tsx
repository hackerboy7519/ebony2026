"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Phone, MapPin, MessageSquare, Sparkles } from "lucide-react"
import { BRAND } from "@/lib/content"
import { openEnquiryModal } from "@/components/enquiry-modal"

export function StudioCtaSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden border-t border-white/10">
      {/* Background with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/living-room-showcase.jpg"
          alt="EBONY Experience Studio Raipur"
          fill
          className="object-cover filter brightness-[0.22] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
          {/* Left Headline */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#C99E4B] font-mono text-[10px] uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3 h-3" />
              <span>Raipur Flagship Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.12]">
              Let&apos;s Plan Your Kitchen <br />
              <span className="italic text-[#C99E4B]">Together.</span>
            </h2>
            <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed mt-4 max-w-lg">
              Visit our Raipur studio or call us. We&apos;ll help you pick the right design, layout, and colours.
            </p>
          </div>

          {/* Right Action Block */}
          <div className="flex flex-col items-start lg:items-end gap-5 shrink-0">
            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() =>
                  openEnquiryModal({ category: "Studio Consultation & 3D Plan" })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                <span>Book a Visit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>

            {/* Studio Info */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 font-mono text-xs text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>VIP Road / Shankar Nagar Corridor, Raipur</span>
              </div>
              <a
                href="https://maps.google.com/?q=Raipur+Chhattisgarh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline underline-offset-4 text-[11px]"
              >
                Get Studio Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
