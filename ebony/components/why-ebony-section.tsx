"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Cpu, Sliders, Clock, ShieldCheck } from "lucide-react"
import { WHY_EBONY } from "@/lib/content"

const ICONS = [Cpu, Sliders, Clock, ShieldCheck]

export function WhyEbonySection() {
  return (
    <section id="why-ebony" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                12 / The EBONY Distinction
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              Why EBONY.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            Four verifiable proof points why homeowners, architects, and designers have trusted EBONY for over 15 years.
          </p>
        </div>

        {/* 4 Proof Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WHY_EBONY.map((point, index) => {
            const Icon = ICONS[index % ICONS.length]
            return (
              <div
                key={point.number}
                className="group bg-[#FAFAFA] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8923A] font-bold">
                      Proof Point {point.number}
                    </span>
                  </div>
                </div>

                {/* Text Body */}
                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100/70 border border-amber-200 flex items-center justify-center text-[#B8923A]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#B8923A] font-bold">
                        {point.subtitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-slate-950 font-normal mb-3">
                      {point.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#B8923A] transition-colors"
                    >
                      <span>Explore Our Heritage</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
