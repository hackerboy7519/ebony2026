"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { KITCHEN_STYLES } from "@/lib/content"

export function KitchenStylesSection() {
  return (
    <section id="kitchen-styles" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                Curated Aesthetics
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              Four Kitchen Design Styles.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            From seamless contemporary purity to tactile boho warmth — four distinct architectural styles crafted to reflect your personality.
          </p>
        </div>

        {/* 4 Distinct Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {KITCHEN_STYLES.map((style) => (
            <div
              key={style.id}
              className="group bg-[#FAFAFA] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Photo Showcase */}
              <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden">
                <Image
                  src={style.image}
                  alt={`${style.title} kitchen design by EBONY`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                    {style.title}
                  </span>
                </div>
              </div>

              {/* Text & Spec Details */}
              <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-950 font-normal mb-1">
                    {style.title}
                  </h3>
                  <span className="font-mono text-xs text-[#B8923A] uppercase tracking-wider block mb-4">
                    {style.subtitle}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                    {style.description}
                  </p>

                  {/* Palette and Features */}
                  <div className="space-y-3 pt-4 border-t border-slate-200/80">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-1">
                        Curated Palette
                      </span>
                      <p className="font-sans text-xs text-slate-800 font-medium">
                        {style.palette}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-1.5">
                        Key Signatures
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {style.features.map((feat, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-sans text-slate-700"
                          >
                            <Sparkles className="w-2.5 h-2.5 text-[#B8923A]" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    href={`/kitchens#${style.id}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#B8923A] transition-colors"
                  >
                    <span>View {style.title} Gallery</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
