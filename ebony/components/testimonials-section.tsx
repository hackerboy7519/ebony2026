"use client"

import { Star } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { SectionHeader } from "@/components/ui/section-header"

export function TestimonialsSection() {
  const { kicker, title, accent, subtitle, items } = HOME_CONTENT.testimonials
  // Two copies make the strip loop without a gap
  const loop = [...items, ...items]

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#0B0F19] text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[640px] h-[360px] bg-[#C5A572]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} tone="dark" align="center" />
      </div>

      {/* Moving strip — pauses while a finger or mouse rests on it */}
      <div className="relative edge-fade overflow-hidden motion-reduce:overflow-x-auto">
        <ul className="animate-marquee-smooth flex gap-5 sm:gap-6 py-4 [animation-duration:70s] hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          {loop.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              aria-hidden={index >= items.length}
              className="w-[300px] sm:w-[420px] shrink-0 bg-white text-slate-900 rounded-[1.75rem] p-7 sm:p-8 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center gap-1 mb-5" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-[18px] h-[18px] fill-[#C5A572] stroke-none" />
                  ))}
                </div>
                <p className="font-serif text-lg sm:text-xl text-slate-800 leading-relaxed mb-8">&ldquo;{item.quote}&rdquo;</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-[#F5EDE3] flex items-center justify-center text-sm font-semibold text-[#8E6D38]">
                  {item.avatar}
                </span>
                <span>
                  <span className="block text-base font-semibold text-slate-950">{item.name}</span>
                  <span className="block text-sm text-slate-500">{item.city}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
