"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Layers, Sparkles, ShieldCheck } from "lucide-react"
import { SURFACE_FINISHES } from "@/lib/content"
import { cn } from "@/lib/utils"

export function SurfaceFinishesSection() {
  const [selectedFinish, setSelectedFinish] = useState<(typeof SURFACE_FINISHES)[number]>(SURFACE_FINISHES[0])

  return (
    <section id="finishes-section" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                04 / Material Library
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              500+ Surface Finishes &amp; Materials.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            Curated Italian polyurethane lacquers, anti-fingerprint laminates, optical acrylics, and surgical SS 304 cores engineered for enduring durability.
          </p>
        </div>

        {/* 8 Finishes Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Swatch & Finish Selection List (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SURFACE_FINISHES.map((finish) => {
              const isSelected = finish.id === selectedFinish.id
              return (
                <button
                  key={finish.id}
                  onClick={() => setSelectedFinish(finish)}
                  className={cn(
                    "text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group",
                    isSelected
                      ? "bg-white border-[#B8923A] shadow-lg ring-1 ring-[#B8923A]"
                      : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                        {finish.category}
                      </span>
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold",
                          isSelected
                            ? "bg-amber-100 text-amber-900"
                            : "bg-slate-100 text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-800"
                        )}
                      >
                        {finish.badge}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg text-slate-950 font-normal group-hover:text-[#B8923A] transition-colors mb-1">
                      {finish.name}
                    </h4>

                    <span className="text-xs font-mono text-slate-500 block">
                      {finish.finishType}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-slate-600 line-clamp-2 mt-3 pt-3 border-t border-slate-100">
                    {finish.description}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Right: Active Finish Deep-Dive Card (5 Cols Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B8923A] font-bold">
                Detailed Material Spec
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-slate-950 font-normal mb-1">
              {selectedFinish.name}
            </h3>

            <div className="flex items-center gap-2 mb-6">
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-mono text-[11px] font-medium">
                {selectedFinish.category}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-mono text-slate-600">
                {selectedFinish.finishType}
              </span>
            </div>

            <p className="font-sans text-sm text-slate-600 font-light leading-relaxed mb-6">
              {selectedFinish.description}
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100 mb-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-2">
                  Technical Characteristics
                </span>
                <ul className="space-y-2">
                  {selectedFinish.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
                      <Sparkles className="w-3.5 h-3.5 text-[#B8923A] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                  Durability Standard
                </span>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-900 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{selectedFinish.durability}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/finishes"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
              >
                <span>Full 500+ Finishes Matrix</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
