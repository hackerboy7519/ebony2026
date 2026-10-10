"use client"

import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Anita Sharma",
    city: "Raipur",
    rating: 5,
    quote: "Excellent design sense and flawless execution. Our kitchen looks stunning and the installation was super quick.",
    avatar: "AS",
  },
  {
    name: "Rahul Verma",
    city: "Bilaspur",
    rating: 5,
    quote: "From design to installation, the entire team was professional. Highly recommended for modular interiors.",
    avatar: "RV",
  },
  {
    name: "Neha & Karan",
    city: "Raipur",
    rating: 5,
    quote: "Premium quality and great attention to detail. Ebony truly transforms spaces into something special.",
    avatar: "NK",
  },
  {
    name: "Manoj Mandre",
    city: "Mumbai",
    rating: 5,
    quote: "EBONY understood our needs, conceptualised the design, and executed smart German engineering.",
    avatar: "MM",
  },
  {
    name: "Mr. Kanyalal",
    city: "Delhi",
    rating: 5,
    quote: "In one word — Excellent! Marvellous quality and humble team. Highly satisfied with their service.",
    avatar: "MK",
  },
  {
    name: "C.L. Sandesh",
    city: "Bangalore",
    rating: 5,
    quote: "The finishing and accuracy EBONY provides are unmatchable. Installation services were beyond expectation.",
    avatar: "CS",
  },
  {
    name: "Rupali Rach",
    city: "Raipur",
    rating: 5,
    quote: "While renovating our kitchen, EBONY's quality seemed far superior. Elegant and user-friendly finishes.",
    avatar: "RR",
  },
  {
    name: "Ramesh Goradia",
    city: "Pune",
    rating: 5,
    quote: "Nine years since we first contacted EBONY. Haven't had a single issue. Came back for our new home.",
    avatar: "RG",
  },
]

export function TestimonialsSection() {
  // Duplicate array for seamless infinite looping
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-[#0B0F19] text-white overflow-hidden border-t border-white/10">
      {/* Soft ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 text-center">
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C99E4B] font-semibold block mb-2">
          TESTIMONIALS · 15+ YEARS
        </span>
        <h2 className="font-serif italic text-3xl sm:text-5xl text-white font-normal tracking-tight">
          Loved by homeowners.
        </h2>
      </div>

      {/* Auto-Moving Infinite Carousel with Small Compact Cards */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max gap-5 py-2 animate-scroll hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
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

                {/* Compact Quote */}
                <p className="font-serif italic text-sm text-slate-800 leading-relaxed font-normal mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-mono text-[10px] font-bold text-slate-800">
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

                <span className="text-[9px] font-mono uppercase tracking-wider text-[#855E15] bg-[#B8923A]/10 border border-[#B8923A]/20 px-2 py-0.5 rounded font-medium">
                  {item.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
