"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
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
          {/* Swatches */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4" role="radiogroup" aria-label="Finishes">
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
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-1 ring-black/10 shrink-0 transition-transform duration-500",
                      isSelected ? "scale-110" : "group-hover:scale-105"
                    )}
                    style={{ backgroundColor: swatch.colorHint }}
                  />
                  <span className="min-w-0">
                    <span className="block font-serif text-lg sm:text-xl text-slate-950 leading-tight">{swatch.name}</span>
                    <span className="block text-[13px] text-slate-500 mt-0.5">{swatch.tag}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Spotlight */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-white rounded-[1.75rem] p-7 sm:p-9 ring-1 ring-slate-200 shadow-xl shadow-slate-200/60">
            <div key={active.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="w-16 h-16 rounded-2xl ring-1 ring-black/10 shadow-inner shrink-0"
                  style={{ backgroundColor: active.colorHint }}
                />
                <div>
                  <p className="text-[13px] font-semibold text-[#8E6D38]">{active.tag}</p>
                  <h3 className="font-serif text-[1.75rem] sm:text-3xl text-slate-950 font-normal leading-tight">
                    {active.name}
                  </h3>
                </div>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">{active.line}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-slate-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <button
              onClick={() => openEnquiryModal({ design: active.name, category: "Free finish samples" })}
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-950 hover:bg-[#8E6D38] text-white text-[15px] font-semibold transition-colors duration-300 cursor-pointer"
            >
              Ask for free samples
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Link
              href="/finishes"
              className="mt-4 block text-center text-[15px] font-medium text-slate-600 hover:text-slate-950 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-950 transition-colors"
            >
              See all finishes
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
