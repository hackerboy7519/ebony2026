"use client"

import { Star } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"

export function TestimonialsSection() {
  const { kicker, title, items } = HOME_CONTENT.testimonials

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#0B0F19] text-white overflow-hidden border-t border-white/10">
      {/* Soft ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C5A572]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16 text-center">
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C5A572] font-semibold block mb-3">
          {kicker}
        </span>
        <h2 className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
          {title}
        </h2>
      </div>

      {/* 4 Cards Grid / Marquee */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-stone-200 group"
            >
              <div>
                {/* 5 Small Gold Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#C5A572]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C5A572] stroke-none"
                    />
                  ))}
                  <span className="font-mono text-[9px] text-stone-400 ml-1.5 font-semibold">
                    VERIFIED
                  </span>
                </div>

                {/* Short Quote */}
                <p className="font-serif italic text-base text-slate-800 leading-relaxed font-normal mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer (City displayed once) */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F5EDE3] border border-[#C5A572]/30 flex items-center justify-center font-mono text-xs font-bold text-[#8E6D38]">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-slate-950">
                      {item.name}
                    </h4>
                    <p className="font-mono text-[11px] text-stone-500">
                      {item.city}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                  Happy Home
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
