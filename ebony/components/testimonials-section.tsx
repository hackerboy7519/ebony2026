"use client"

import { Star } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"

export function TestimonialsSection() {
  const { kicker, title, items } = HOME_CONTENT.testimonials

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-[#0B0F19] text-white overflow-hidden border-t border-white/10">
      {/* Soft ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 text-center">
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C99E4B] font-semibold block mb-2">
          {kicker}
        </span>
        <h2 className="font-serif italic text-3xl sm:text-5xl text-white font-normal tracking-tight">
          {title}
        </h2>
      </div>

      {/* Auto-Moving Infinite Carousel with Small Compact Cards, pause on hover/touch */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max gap-5 py-2 animate-scroll hover:[animation-play-state:paused]">
          {/* First loop (accessible to screen readers) */}
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[280px] sm:w-[340px] shrink-0 bg-white text-slate-900 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-slate-100 group"
            >
              <div>
                {/* 5 Small Gold Stars */}
                <div className="flex items-center gap-1 mb-3 text-[#B8923A]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#B8923A] stroke-none"
                    />
                  ))}
                  <span className="font-mono text-[9px] text-slate-400 ml-1.5 font-semibold">
                    VERIFIED
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif italic text-sm text-slate-800 leading-relaxed font-normal mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer (City displayed once) */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-mono text-[11px] font-bold text-slate-800">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-slate-950">
                      {item.name}
                    </h4>
                    <p className="font-mono text-[10px] text-slate-500">
                      {item.city}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                  Verified Home
                </span>
              </div>
            </div>
          ))}

          {/* Second loop with aria-hidden for seamless animation without double reading */}
          {items.map((item) => (
            <div
              key={`clone-${item.id}`}
              aria-hidden="true"
              className="w-[280px] sm:w-[340px] shrink-0 bg-white text-slate-900 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-slate-100 group"
            >
              <div>
                <div className="flex items-center gap-1 mb-3 text-[#B8923A]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#B8923A] stroke-none"
                    />
                  ))}
                  <span className="font-mono text-[9px] text-slate-400 ml-1.5 font-semibold">
                    VERIFIED
                  </span>
                </div>

                <p className="font-serif italic text-sm text-slate-800 leading-relaxed font-normal mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-mono text-[11px] font-bold text-slate-800">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-slate-950">
                      {item.name}
                    </h4>
                    <p className="font-mono text-[10px] text-slate-500">
                      {item.city}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                  Verified Home
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
