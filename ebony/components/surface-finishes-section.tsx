"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

export function SurfaceFinishesSection() {
  const { kicker, title, accent, subtitle, swatches, benefits } = HOME_CONTENT.finishes
  const [active, setActive] = useState(swatches[0])

  return (
    <section id="finishes-section" className="relative bg-[#FAFAFA] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Swatches Selection List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" role="radiogroup" aria-label="Finishes">
            {swatches.map((swatch) => {
              const isSelected = swatch.id === active.id
              return (
                <button
                  key={swatch.id}
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setActive(swatch)}
                  className={cn(
                    "group text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center gap-3 sm:gap-4 cursor-pointer",
                    isSelected
                      ? "bg-white ring-2 ring-[#C5A572] shadow-xl shadow-amber-900/10 -translate-y-0.5"
                      : "bg-white/70 ring-1 ring-slate-200 hover:bg-white hover:ring-slate-300"
                  )}
                >
                  <span
                    className={cn(
                      "w-11 h-11 sm:w-12 sm:h-12 rounded-full ring-1 ring-black/10 shrink-0 transition-transform duration-500 shadow-inner",
                      isSelected ? "scale-110 ring-2 ring-[#C5A572]" : "group-hover:scale-105"
                    )}
                    style={{ backgroundColor: swatch.colorHint }}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-lg sm:text-xl text-slate-950 leading-tight">
                      {swatch.name}
                    </span>
                    <span className="block text-[13px] text-slate-500 mt-0.5 font-medium">
                      {swatch.tag}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      isSelected ? "bg-[#C5A572] scale-125" : "bg-transparent"
                    )}
                  />
                </button>
              )
            })}
          </div>

          {/* Interactive Photo Spotlight Card (matches active finish) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-white rounded-[1.75rem] p-6 sm:p-8 ring-1 ring-slate-200/90 shadow-2xl shadow-slate-200/60 overflow-hidden">
            <div key={active.id} className="animate-in fade-in zoom-in-95 duration-500">
              {/* Photo matching the active finish */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 shadow-md bg-slate-900 group">
                <Image
                  src={active.image}
                  alt={`${active.name} finish applied in bespoke luxury interior`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Swatch Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                  <span
                    className="w-2.5 h-2.5 rounded-full ring-1 ring-white/50"
                    style={{ backgroundColor: active.colorHint }}
                  />
                  <span>{active.tag}</span>
                </div>

                {/* Finish specification pill */}
                <div className="absolute bottom-3 left-3.5 right-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#E8CF9C] font-semibold drop-shadow-sm">
                    {active.finishDetail}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-5">
                <h3 className="font-serif text-[1.75rem] sm:text-3xl text-slate-950 font-normal leading-tight">
                  {active.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2">
                  {active.line}
                </p>
              </div>
            </div>

            {/* Practical Benefits */}
            <ul className="space-y-2.5 mb-7 pt-4 border-t border-slate-100">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Fancy, attractive CTAs */}
            <button
              onClick={() => openEnquiryModal({ design: active.name, category: "Finish samples" })}
              className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#111625] hover:bg-[#C5A572] hover:text-slate-950 text-white text-[15px] font-semibold transition-all duration-300 shadow-lg cursor-pointer active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-[#D8B97F] group-hover:text-slate-950 transition-colors" />
              <span>Request Curated Swatches</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Link
              href="/finishes"
              className="mt-3.5 block text-center text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-950 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-950 transition-colors"
            >
              Explore Full Finishes Library
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
