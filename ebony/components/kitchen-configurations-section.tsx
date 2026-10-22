"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { cn } from "@/lib/utils"

export function KitchenConfigurationsSection() {
  const { kicker, title, subtitle, layouts } = HOME_CONTENT.collections
  const [activeId, setActiveId] = useState<string>(layouts[0].id)
  const activeLayout = layouts.find((l) => l.id === activeId) || layouts[0]

  return (
    <section id="collections" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
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

        {/* Configuration Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-slate-200">
          {layouts.map((layout) => {
            const isSelected = layout.id === activeId
            return (
              <button
                key={layout.id}
                onClick={() => setActiveId(layout.id)}
                className={cn(
                  "px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2",
                  isSelected
                    ? "bg-slate-950 text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200"
                )}
              >
                <span>{layout.name}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#B8923A]" />}
              </button>
            )
          })}
        </div>

        {/* Active Configuration Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xl">
          {/* Left: Big Photography */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={activeLayout.image}
              alt={`${activeLayout.name} Modular Kitchen Layout`}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8923A] font-bold">
                {activeLayout.name} Layout
              </span>
            </div>
          </div>

          {/* Right: Plain-English Story & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#B8923A]" />
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold">
                  Kitchen Shape Guide
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal mb-3">
                {activeLayout.name} Kitchen
              </h3>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed mb-6">
                {activeLayout.line}
              </p>

              {/* Best For Callout Card */}
              <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-slate-200 mb-8 space-y-2">
                <div className="flex items-center gap-2 text-amber-700 font-mono text-[11px] uppercase tracking-wider font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#B8923A]" />
                  <span>Best suited for</span>
                </div>
                <p className="text-sm text-slate-700 font-light leading-relaxed">
                  {activeLayout.bestFor}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100">
              <Link
                href="/kitchens"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md"
              >
                <span>See Kitchens</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() =>
                  openEnquiryModal({
                    design: `${activeLayout.name} Layout`,
                    category: "3D Kitchen Plan",
                  })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-[#855E15] border border-amber-500/30 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer"
              >
                <span>Get a 3D Plan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
