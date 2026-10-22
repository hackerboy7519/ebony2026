"use client"

import { useState, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"

export function TestimonialsSection() {
  const { kicker, title, items } = HOME_CONTENT.testimonials
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Duplicate items for continuous infinite motion
  const duplicatedItems = [...items, ...items]

  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const amount = direction === "left" ? -420 : 420
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-[#0B0F19] text-white overflow-hidden border-t border-white/10"
    >
      {/* Soft ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A572]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A572]/15 border border-[#C5A572]/30 text-[#C5A572] font-mono text-[10px] uppercase tracking-[0.25em] mb-4">
              <Star className="w-3 h-3 fill-[#C5A572]" />
              <span>{kicker}</span>
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
              {title}
            </h2>
          </div>

          {/* Motion Indicators & Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Play/Pause Motion Toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs transition-colors cursor-pointer"
              title={isPaused ? "Resume continuous motion" : "Pause motion"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] uppercase tracking-wider">Play Motion</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#C5A572]" />
                  <span className="text-[11px] uppercase tracking-wider">In Motion</span>
                </>
              )}
            </button>

            {/* Prev Button */}
            <button
              onClick={() => handleManualScroll("left")}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A572] hover:text-slate-950 border border-white/20 flex items-center justify-center text-white transition-all duration-300 cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Button */}
            <button
              onClick={() => handleManualScroll("right")}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A572] hover:text-slate-950 border border-white/20 flex items-center justify-center text-white transition-all duration-300 cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Motion Track with pause on hover */}
      <div
        ref={scrollContainerRef}
        className="relative w-full overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div
          className="animate-marquee-smooth flex gap-6 px-5 sm:px-8 py-4"
          style={{
            animationPlayState: isPaused ? "paused" : undefined,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[320px] sm:w-[400px] shrink-0 bg-white text-slate-900 rounded-3xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-stone-200 group hover:-translate-y-1.5"
            >
              <div>
                {/* 5 Small Gold Stars + Verified Badge + Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#C5A572]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#C5A572] stroke-none"
                      />
                    ))}
                    <span className="font-mono text-[9px] text-stone-400 ml-1.5 font-bold uppercase tracking-wider">
                      Verified Client
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#FFFBF5] border border-amber-200/60 flex items-center justify-center text-[#8E6D38]">
                    <Quote className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Quote */}
                <p className="font-serif italic text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5EDE3] border border-[#C5A572]/40 flex items-center justify-center font-mono text-xs font-bold text-[#8E6D38] shadow-inner">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-slate-950">
                      {item.name}
                    </h4>
                    <p className="font-mono text-[11px] text-stone-500">
                      {item.city}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-semibold">
                  Happy Home
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Bottom Note */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-8 text-center sm:text-left">
        <p className="font-mono text-[11px] text-white/50 tracking-wider">
          ✦ Hover over any review to pause motion and read at your pace
        </p>
      </div>
    </section>
  )
}
