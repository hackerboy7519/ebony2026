"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Sparkles, ArrowRight, Check } from "lucide-react"
import { KITCHEN_DESIGNS, KitchenDesign } from "@/lib/kitchen-designs"
import { KitchenSketch } from "@/components/kitchen-sketch"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { cn } from "@/lib/utils"

const FILTER_TABS = [
  { id: "all", label: "All Designs" },
  { id: "light", label: "Light & Bright" },
  { id: "dark", label: "Dark & Rich" },
  { id: "colourful", label: "Colourful" },
  { id: "natural", label: "Natural & Wood" },
  { id: "small", label: "Small Spaces" },
]

export function KitchenStylesSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const filteredDesigns = useMemo(() => {
    if (activeFilter === "all") return KITCHEN_DESIGNS
    return KITCHEN_DESIGNS.filter((d) => d.tags.includes(activeFilter as any))
  }, [activeFilter])

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section id="kitchen-styles" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                Kitchen Design Gallery
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              Pick Your Style
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            Find the look that feels like you. 12 original designs crafted for real homes.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FILTER_TABS.map((tab) => {
            const isSelected = tab.id === activeFilter
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "bg-slate-950 text-white shadow-md scale-105"
                    : "bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200"
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* 12 Designs Grid (3 Columns on Desktop, Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredDesigns.map((design) => {
            const hasError = imageErrors[design.id]
            return (
              <div
                key={design.id}
                className="group bg-[#FAFAFA] rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo or SVG Architectural Sketch Fallback */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  {!hasError && design.image ? (
                    <Image
                      src={design.image}
                      alt={design.alt || `${design.name} modular kitchen`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => handleImageError(design.id)}
                    />
                  ) : (
                    <KitchenSketch palette={design.colours} />
                  )}

                  {/* Gradient Overlay for card readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Best-For Pill */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 font-semibold">
                      {design.bestFor}
                    </span>
                  </div>

                  {/* Bottom 3 Colour Palette Dots on Image */}
                  <div className="absolute bottom-3 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {design.colours.map((hex, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm"
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-slate-950 font-normal mb-1.5">
                      {design.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                      {design.line}
                    </p>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <Sparkles className="w-3 h-3 text-[#B8923A]" />
                      <span>Custom built</span>
                    </div>

                    <button
                      onClick={() =>
                        openEnquiryModal({
                          design: design.name,
                          category: "Kitchen Design Enquiry",
                        })
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-[11px] uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
                    >
                      <span>Get This Look</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
