"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { WARDROBE_SYSTEMS } from "@/lib/content"

export function WardrobesSection() {
  return (
    <section id="wardrobes-section" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                Bespoke Wardrobe Systems
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              Sliding &amp; Hinged Wardrobes.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            Two distinct architectural opening systems engineered with Italian soft-damped runners and Blum Clip-top hinges.
          </p>
        </div>

        {/* 2 Systems Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {WARDROBE_SYSTEMS.map((system) => (
            <div
              key={system.id}
              className="group bg-[#FAFAFA] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Photo Showcase */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <Image
                  src={system.image}
                  alt={system.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8923A] font-bold">
                    {system.tag}
                  </span>
                </div>
              </div>

              {/* Text & Feature Details */}
              <div className="p-7 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-950 font-normal mb-1">
                    {system.name}
                  </h3>
                  <span className="font-mono text-xs text-[#B8923A] uppercase tracking-wider block mb-4">
                    {system.headline}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                    {system.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200/80">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-3">
                      System Engineering Advantages
                    </span>
                    <ul className="space-y-2.5">
                      {system.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#B8923A] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    href={`/wardrobes#${system.id}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#B8923A] transition-colors"
                  >
                    <span>Explore {system.name}</span>
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
