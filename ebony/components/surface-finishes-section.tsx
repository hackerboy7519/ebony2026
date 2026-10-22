"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Palette, Sparkles, CheckCircle2 } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { cn } from "@/lib/utils"

export function SurfaceFinishesSection() {
  const { kicker, title, subtitle, swatches } = HOME_CONTENT.finishes
  const [activeSwatch, setActiveSwatch] = useState(swatches[0])

  return (
    <section id="finishes-section" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-200/80">
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

        {/* 8 Finishes Interactive Swatches */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: 8 Clean Swatch Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {swatches.map((swatch) => {
              const isSelected = swatch.id === activeSwatch.id
              return (
                <button
                  key={swatch.id}
                  onClick={() => setActiveSwatch(swatch)}
                  className={cn(
                    "text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group",
                    isSelected
                      ? "bg-white border-[#B8923A] shadow-lg ring-1 ring-[#B8923A] -translate-y-1"
                      : "bg-white/85 hover:bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                  )}
                >
                  <div>
                    {/* Swatch Sample Color Strip */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-5 h-5 rounded-full border border-slate-300 shadow-inner"
                          style={{ backgroundColor: swatch.colorHint }}
                        />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                          Sample Finish
                        </span>
                      </div>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold bg-amber-100 text-amber-900">
                          Selected
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-xl text-slate-950 font-normal group-hover:text-[#B8923A] transition-colors mb-1">
                      {swatch.name}
                    </h4>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 font-light mt-2 pt-2 border-t border-slate-100">
                    {swatch.line}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Right: Active Swatch Spotlight Card (5 Cols Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-4 h-4 text-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B8923A] font-bold">
                Finish Spotlight
              </span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span
                className="w-6 h-6 rounded-full border border-slate-300 shadow-md shrink-0"
                style={{ backgroundColor: activeSwatch.colorHint }}
              />
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-950 font-normal">
                {activeSwatch.name}
              </h3>
            </div>

            <p className="font-sans text-base text-slate-800 font-normal leading-relaxed mt-2 mb-6">
              {activeSwatch.line}
            </p>

            <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-slate-100 mb-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#B8923A]" />
                <span>Why families love this</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Easy to clean with a damp cloth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tested against heat, steam, and everyday wear</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Available in over 50 shades and textures</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/finishes"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md"
              >
                <span>See All Finishes</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() =>
                  openEnquiryModal({
                    design: activeSwatch.name,
                    category: "Finishes Sample Request",
                  })
                }
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-[#855E15] border border-amber-500/30 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer"
              >
                <span>Request Swatch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
