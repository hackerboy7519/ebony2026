"use client"

import Image from "next/image"
import { Sparkles, ArrowRight } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { openEnquiryModal } from "@/components/enquiry-modal"

export function CustomKitchensSection() {
  const { kicker, title, subtitle, cards } = HOME_CONTENT.uniqueKitchens

  return (
    <section id="custom-designs" className="relative bg-[#F5EDE3] py-24 sm:py-32 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-stone-300/80 text-[#8E6D38] font-mono text-[10px] uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>{kicker}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-[1.1] tracking-tight mb-4">
            {title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 6 Cards Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-10 mb-14">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image with Gentle 1.05x Zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />

                {/* Top Left Icon & Title Pill */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                  <span className="text-sm">{card.icon}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#C5A572] font-semibold">
                    {card.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-normal group-hover:text-[#8E6D38] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm text-stone-600 font-light leading-relaxed mb-6">
                    {card.line}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() =>
                      openEnquiryModal({
                        design: card.title,
                        category: "Custom Kitchen Style",
                      })
                    }
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#8E6D38] transition-colors cursor-pointer"
                  >
                    <span>Explore Style</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-[11px] font-mono text-stone-500">
                    Made for you
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
