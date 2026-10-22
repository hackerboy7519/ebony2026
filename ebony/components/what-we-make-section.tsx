"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"

export function WhatWeMakeSection() {
  const { kicker, title, subtitle, cards } = HOME_CONTENT.exploreDesigns

  return (
    <section id="explore-designs" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
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

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Card 1: Modular Kitchen (Wide Showcase - 7 cols) */}
          <div className="lg:col-span-7 group relative bg-slate-900 rounded-2xl overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-end p-7 sm:p-10 shadow-lg">
            <Image
              src={cards[0].image}
              alt="Modular Kitchen"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 brightness-95"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B8923A] font-semibold mb-2 block">
                {cards[0].badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal mb-2.5">
                {cards[0].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-lg mb-6">
                {cards[0].description}
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-xs text-white/60 font-light">Custom factory built</span>
                <Link
                  href={cards[0].href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
                >
                  <span>{cards[0].buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Wardrobes (5 cols) */}
          <div className="lg:col-span-5 group relative bg-slate-900 rounded-2xl overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-end p-7 sm:p-10 shadow-lg">
            <Image
              src={cards[1].image}
              alt="Wardrobes"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 brightness-95"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B8923A] font-semibold mb-2 block">
                {cards[1].badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2.5">
                {cards[1].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/85 font-light leading-relaxed mb-6">
                {cards[1].description}
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-xs text-white/60 font-light">Custom made for you</span>
                <Link
                  href={cards[1].href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
                >
                  <span>{cards[1].buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Walk-in Closets (5 cols) */}
          <div className="lg:col-span-5 group relative bg-slate-900 rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[460px] flex flex-col justify-end p-7 sm:p-10 shadow-lg">
            <Image
              src={cards[2].image}
              alt="Walk-in Closets"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 brightness-95"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B8923A] font-semibold mb-2 block">
                {cards[2].badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2.5">
                {cards[2].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/85 font-light leading-relaxed mb-6">
                {cards[2].description}
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-xs text-white/60 font-light">Warm LED illumination</span>
                <Link
                  href={cards[2].href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
                >
                  <span>{cards[2].buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Bar & TV Units (7 cols) */}
          <div className="lg:col-span-7 group relative bg-slate-900 rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[460px] flex flex-col justify-end p-7 sm:p-10 shadow-lg">
            <Image
              src={cards[3].image}
              alt="Bar & TV Units"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 brightness-95"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B8923A] font-semibold mb-2 block">
                {cards[3].badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2.5">
                {cards[3].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-lg mb-6">
                {cards[3].description}
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-xs text-white/60 font-light">Fluted panels & displays</span>
                <Link
                  href={cards[3].href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
                >
                  <span>{cards[3].buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
