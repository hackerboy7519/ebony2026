"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { WHAT_WE_MAKE } from "@/lib/content"

export function WhatWeMakeSection() {
  const [kitchen, wardrobe, closet, bar] = WHAT_WE_MAKE

  return (
    <section id="what-we-make" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                01 / Product Collections
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              What We Make.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            Four tailored architectural collections engineered with German CNC precision and tailored to the poetry of contemporary Indian living.
          </p>
        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Card 1: Modular Kitchen (Wide Showcase - 7 cols) */}
          <div className="lg:col-span-7 group relative bg-slate-900 rounded-2xl overflow-hidden min-h-[460px] sm:min-h-[520px] flex flex-col justify-end p-7 sm:p-10 shadow-lg">
            <Image
              src={kitchen.image}
              alt={kitchen.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 brightness-95"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B8923A] font-semibold mb-2 block">
                {kitchen.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal mb-3">
                {kitchen.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-lg mb-6">
                {kitchen.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="font-mono text-[11px] text-white/70">
                  {kitchen.stats}
                </span>
                <Link
                  href={kitchen.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#B8923A] hover:text-white"
                >
                  <span>Explore Kitchens</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Bespoke Wardrobe (5 cols) */}
          <div className="lg:col-span-5 group relative bg-slate-900 rounded-2xl overflow-hidden min-h-[460px] sm:min-h-[520px] flex flex-col justify-end p-7 sm:p-10 shadow-lg">
            <Image
              src={wardrobe.image}
              alt={wardrobe.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 brightness-95"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B8923A] font-semibold mb-2 block">
                {wardrobe.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
                {wardrobe.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-6">
                {wardrobe.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="font-mono text-[11px] text-white/70">
                  {wardrobe.stats}
                </span>
                <Link
                  href={wardrobe.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#B8923A] hover:text-white"
                >
                  <span>Wardrobes</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Walk-in Closet (5 cols) */}
          <div className="lg:col-span-5 group relative bg-slate-900 rounded-2xl overflow-hidden min-h-[440px] sm:min-h-[480px] flex flex-col justify-end p-7 sm:p-10 shadow-lg">
            <Image
              src={closet.image}
              alt={closet.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 brightness-95"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B8923A] font-semibold mb-2 block">
                {closet.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
                {closet.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-6">
                {closet.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="font-mono text-[11px] text-white/70">
                  {closet.stats}
                </span>
                <Link
                  href={closet.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#B8923A] hover:text-white"
                >
                  <span>Closets</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Bar Unit & Living (7 cols) */}
          <div className="lg:col-span-7 group relative bg-slate-900 rounded-2xl overflow-hidden min-h-[440px] sm:min-h-[480px] flex flex-col justify-end p-7 sm:p-10 shadow-lg">
            <Image
              src={bar.image}
              alt={bar.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 brightness-95"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B8923A] font-semibold mb-2 block">
                {bar.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal mb-3">
                {bar.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-lg mb-6">
                {bar.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="font-mono text-[11px] text-white/70">
                  {bar.stats}
                </span>
                <Link
                  href={bar.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#B8923A] hover:text-white"
                >
                  <span>Explore Bar Units</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
