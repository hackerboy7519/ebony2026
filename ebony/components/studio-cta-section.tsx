"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Phone, MapPin } from "lucide-react"
import { BRAND } from "@/lib/content"

export function StudioCtaSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden border-t border-white/10">
      {/* Background with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/living-room-showcase.jpg"
          alt="EBONY Experience Studio Raipur"
          fill
          className="object-cover filter brightness-[0.25] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
          {/* Left Headline matching reference */}
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#C99E4B] font-semibold block mb-3">
              VISIT OUR EXPERIENCE STUDIO
            </span>
            <h2 className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.15]">
              Let&apos;s design a space <br />
              <span className="text-white not-italic font-medium">that&apos;s truly yours.</span>
            </h2>
          </div>

          {/* Right Action Block matching reference */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-6 shrink-0">
            {/* Gold Action Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 active:scale-95"
            >
              <span>BOOK A STUDIO VISIT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Contact details */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 font-mono text-xs text-white/80">
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 hover:text-[#C99E4B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C99E4B]" />
                <span>{BRAND.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-3.5 h-3.5 text-[#C99E4B]" />
                <span>Raipur, Chhattisgarh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
