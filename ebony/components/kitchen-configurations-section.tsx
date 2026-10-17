"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, Compass } from "lucide-react"
import { KITCHEN_CONFIGURATIONS } from "@/lib/content"
import { cn } from "@/lib/utils"

export function KitchenConfigurationsSection() {
  const [activeId, setActiveId] = useState<string>(KITCHEN_CONFIGURATIONS[0].id)
  const activeConfig = KITCHEN_CONFIGURATIONS.find((c) => c.id === activeId) || KITCHEN_CONFIGURATIONS[0]

  return (
    <section id="kitchen-configurations" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                Architectural Configurations
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              Modular Kitchen Configurations.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            Every culinary space begins with architectural flow. Explore 5 engineered layouts customized to your home&apos;s dimensions.
          </p>
        </div>

        {/* Configuration Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-slate-200">
          {KITCHEN_CONFIGURATIONS.map((config) => {
            const isSelected = config.id === activeId
            return (
              <button
                key={config.id}
                onClick={() => setActiveId(config.id)}
                className={cn(
                  "px-5 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2",
                  isSelected
                    ? "bg-slate-950 text-white shadow-md"
                    : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200"
                )}
              >
                <span>{config.name}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#B8923A]" />}
              </button>
            )
          })}
        </div>

        {/* Active Configuration Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xl">
          {/* Left: Photography */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={activeConfig.image}
              alt={activeConfig.alt}
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8923A] font-bold">
                {activeConfig.tag}
              </span>
            </div>
          </div>

          {/* Right: Technical Specs & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-[#B8923A]" />
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold">
                  Ergonomic Layout Matrix
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal mb-4">
                {activeConfig.name}
              </h3>

              <p className="font-sans text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-6">
                {activeConfig.summary}
              </p>

              {/* Specs Breakdown */}
              <div className="space-y-4 pt-4 border-t border-slate-100 mb-8">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                    Ideal Residence Type
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-slate-800 font-medium">
                    {activeConfig.bestFor}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                    Work Triangle Ergonomics
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-slate-800 font-medium">
                    {activeConfig.workTriangle}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                    Architectural Criteria
                  </span>
                  <ul className="space-y-1.5 mt-1">
                    {activeConfig.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#B8923A] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100">
              <Link
                href="/kitchens"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md"
              >
                <span>Explore All Kitchens</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
              >
                <span>Custom Plan 3D</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
