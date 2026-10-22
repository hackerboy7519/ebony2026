"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, ShieldCheck, Award, Sparkles } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"

const LOVE_ICONS = [Clock, ShieldCheck, Award, Sparkles]

export function WhyEbonySection() {
  const { kicker, title, subtitle, points, footnote } = HOME_CONTENT.whyLoveUs

  return (
    <section id="why-us" className="relative bg-[#FFFBF5] py-24 sm:py-32 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A572]/15 border border-[#C5A572]/30 text-[#8E6D38] font-mono text-[10px] uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>{kicker}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-[1.1] tracking-tight mb-4">
            {title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4 Proof Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {points.map((point, index) => {
            const Icon = LOVE_ICONS[index % LOVE_ICONS.length]
            return (
              <div
                key={point.id}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#C5A572] font-semibold">
                      Reason 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Text Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#C5A572]/20 border border-[#C5A572]/30 flex items-center justify-center text-[#8E6D38] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-xl text-[#1A1A1A] font-normal mb-2">
                      {point.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {point.line}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Materials Footnote & Story Link */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F5EDE3] border border-stone-300/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#8E6D38] shrink-0" />
            <p className="text-xs sm:text-sm text-stone-700 font-light">
              <span className="font-medium text-stone-900">Strong materials where it matters:</span>{" "}
              {footnote.text}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href={footnote.href}
              className="font-mono text-xs text-[#8E6D38] hover:text-[#705527] uppercase tracking-wider font-semibold underline decoration-amber-500/40"
            >
              {footnote.label}
            </Link>
            <span className="text-stone-300">·</span>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#8E6D38] transition-colors"
            >
              <span>Our Story</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
