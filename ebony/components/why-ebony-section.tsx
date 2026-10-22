"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Factory, Palette, Clock, ShieldCheck, Sparkles } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"

const PROMISE_ICONS = [Factory, Palette, Clock, ShieldCheck]

export function WhyEbonySection() {
  const { kicker, title, subtitle, points, materialsFootnote } = HOME_CONTENT.promise

  return (
    <section id="why-ebony" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
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

        {/* 4 Proof Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {points.map((point, index) => {
            const Icon = PROMISE_ICONS[index % PROMISE_ICONS.length]
            return (
              <div
                key={point.id}
                className="group bg-[#FAFAFA] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#B8923A] font-bold">
                      Pillar 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Text Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-100/70 border border-amber-200/80 flex items-center justify-center text-[#855E15] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-xl text-slate-950 font-normal mb-2">
                      {point.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {point.line}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Materials Footnote & Single Brand Heritage Link */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#B8923A] shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 font-light">
              <span className="font-medium text-slate-900">Strong materials where it matters:</span>{" "}
              waterproof plywood, strong board and stainless steel.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href={materialsFootnote.href}
              className="font-mono text-xs text-[#855E15] hover:text-amber-800 uppercase tracking-wider font-semibold underline decoration-amber-500/40"
            >
              {materialsFootnote.label}
            </Link>
            <span className="text-slate-300">·</span>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#B8923A] transition-colors"
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
