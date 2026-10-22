"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"

export function InternalFittingsSection() {
  const { kicker, title, subtitle, items, trustedBrands, brandsKicker } =
    HOME_CONTENT.fittings

  return (
    <section id="fittings-section" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                {kicker}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              {title}
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4 Motion & Fittings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-amber-300 font-semibold">
                      Tested Daily
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl text-slate-950 font-normal mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {item.line}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Whisper-quiet motion</span>
              </div>
            </div>
          ))}
        </div>

        {/* Merged Partner Brands Strip */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8923A] font-semibold block mb-2">
              {brandsKicker}
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base text-white/90 font-serif">
              {trustedBrands.map((brand, i) => (
                <div key={brand} className="flex items-center gap-3 sm:gap-6">
                  <span className="hover:text-amber-300 transition-colors">{brand}</span>
                  {i < trustedBrands.length - 1 && (
                    <span className="text-white/30 text-xs">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/hardware"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
          >
            <span>See Fittings</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
