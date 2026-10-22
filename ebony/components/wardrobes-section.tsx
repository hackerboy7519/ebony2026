"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { openEnquiryModal } from "@/components/enquiry-modal"

export function WardrobesSection() {
  const { kicker, title, subtitle, types } = HOME_CONTENT.wardrobes

  return (
    <section id="wardrobes-section" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
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

        {/* 3 Merged Cards: Sliding, Hinged & Walk-in Closets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((type) => (
            <div
              key={type.id}
              className="group bg-[#FAFAFA] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Photo Showcase */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src={type.image}
                  alt={`${type.name} by EBONY`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8923A] font-bold">
                    Custom Built
                  </span>
                </div>
              </div>

              {/* Text & Feature Details */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-slate-950 font-normal mb-2">
                    {type.name}
                  </h3>
                  <p className="font-sans text-sm text-slate-700 font-light leading-relaxed mb-6">
                    {type.line}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <Sparkles className="w-3.5 h-3.5 text-[#B8923A]" />
                      <span>Comfort feature</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Soft-close German damped fittings</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    href={type.href}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#B8923A] transition-colors"
                  >
                    <span>{type.buttonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() =>
                      openEnquiryModal({
                        design: type.name,
                        category: "Wardrobe Consultation",
                      })
                    }
                    className="text-xs font-mono text-amber-700 hover:text-amber-800 uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Plan Design
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
