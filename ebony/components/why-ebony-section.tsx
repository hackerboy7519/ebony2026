"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, ShieldCheck, Award, Sparkles } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { SectionHeader } from "@/components/ui/section-header"

const LOVE_ICONS = [Clock, ShieldCheck, Award, Sparkles]

export function WhyEbonySection() {
  const { kicker, title, accent, subtitle, points, footnote } = HOME_CONTENT.whyLoveUs

  return (
    <section id="why-us" className="relative bg-[#FBF8F3] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-10">
          {points.map((point, index) => {
            const Icon = LOVE_ICONS[index % LOVE_ICONS.length]
            return (
              <div
                key={point.id}
                className="group bg-white rounded-[1.75rem] overflow-hidden ring-1 ring-stone-200/80 hover:shadow-xl hover:shadow-stone-300/50 transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="shine relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 sm:p-7 relative">
                  <span className="absolute -top-6 left-6 w-12 h-12 rounded-2xl bg-[#C5A572] text-slate-950 flex items-center justify-center shadow-lg shadow-amber-900/20 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-serif text-xl sm:text-[1.4rem] text-slate-950 font-normal mt-5 mb-2">{point.title}</h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed">{point.line}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="rounded-2xl bg-[#F5EDE3] px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[15px] text-stone-700">{footnote.text}</p>
          <Link
            href={footnote.href}
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#8E6D38] hover:text-slate-950 transition-colors shrink-0"
          >
            {footnote.label}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
