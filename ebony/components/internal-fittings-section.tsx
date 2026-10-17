"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Cpu, Sparkles, Check } from "lucide-react"
import { INTERNAL_FITTINGS } from "@/lib/content"

export function InternalFittingsSection() {
  return (
    <section id="internal-fittings-section" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                08 / Motion &amp; Ergonomics
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              Internal Fittings &amp; Motion.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            The soul of a modular home lives in its movement. Whisper-quiet damping, 360° rotating mirrors, and effortless motorized lift-up hardware.
          </p>
        </div>

        {/* Highlight 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Real Pull-Out Mirror Detail Card (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-6">
              <Image
                src="/img/pullout-mirror-real.jpg"
                alt="EBONY pull-out rotating wardrobe mirror with integrated jewelry tray"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8923A] font-bold">
                  Bespoke Innovation
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Patented Hardware Integration
              </span>
            </div>
            <h3 className="font-serif text-2xl text-slate-950 font-normal mb-2">
              360° Pull-Out Rotating Dressing Mirror
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
              Concealed within a compact 150mm vertical carcass slot, this full-length mirror glides forward on heavy-duty ball-bearing runners and smoothly pivots 360 degrees for complete head-to-toe viewing.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-3 border-t border-slate-100">
              <span>Integrated accessory ledge</span>
              <span>·</span>
              <span>Damped soft-return</span>
            </div>
          </div>

          {/* Right Column: Hardware Fittings Macro (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-6">
              <Image
                src="/img/hardware-fittings-luxury.jpg"
                alt="EBONY precision German hardware: Blum Aventos lift systems"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8923A] font-bold">
                  German Engineering
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Blum Aventos Motion
              </span>
            </div>
            <h3 className="font-serif text-2xl text-slate-950 font-normal mb-2">
              Bi-Fold &amp; Up-and-Over Lift Systems
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
              Overhead kitchen and pantry shutters lift silently out of your workspace, allowing unobstructed movement. The door stops precisely wherever you release it.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-3 border-t border-slate-100">
              <span>200,000 cycle tested</span>
              <span>·</span>
              <span>Zero head obstruction</span>
            </div>
          </div>
        </div>

        {/* 5 Solution Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNAL_FITTINGS.map((fitting, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#B8923A]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#B8923A] font-bold">
                  {fitting.brand}
                </span>
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-serif text-lg text-slate-950 font-normal mb-2">
                {fitting.name}
              </h4>
              <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                {fitting.description}
              </p>
            </div>
          ))}

          {/* Quick CTA Card */}
          <div className="bg-[#111111] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#B8923A] font-bold block mb-2">
                EXPERIENCE LIVE HARDWARE
              </span>
              <h4 className="font-serif text-lg text-white font-normal mb-2">
                Test In Our Raipur Studio
              </h4>
              <p className="font-sans text-xs text-white/70 font-light">
                Feel the whisper-quiet glide of Blum and Hettich motions in person.
              </p>
            </div>
            <Link
              href="/hardware"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-[#B8923A] hover:text-white transition-colors mt-4"
            >
              <span>Explore Hardware Partners</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
