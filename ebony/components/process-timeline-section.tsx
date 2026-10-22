"use client"

import { useState } from "react"
import { PhoneCall, Eye, Factory, Home, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { openEnquiryModal } from "@/components/enquiry-modal"

const STEPS = [
  {
    step: "1",
    title: "Visit or Call Us",
    line: "Tell us what you dream of.",
    detail: "Drop by our Raipur studio or schedule a quick chat. We listen to your lifestyle, space, and style preferences.",
    icon: PhoneCall,
    badge: "Step 01",
  },
  {
    step: "2",
    title: "See It in 3D",
    line: "Watch your kitchen come to life.",
    detail: "Our designers take precise site measurements and produce a realistic 3D model with your chosen colours and drawers.",
    icon: Eye,
    badge: "Step 02",
  },
  {
    step: "3",
    title: "We Build It",
    line: "Made in our own factory.",
    detail: "Cut on German CNC machinery with 0.1mm accuracy. No dusty, noisy sawing inside your home.",
    icon: Factory,
    badge: "Step 03",
  },
  {
    step: "4",
    title: "We Fit It",
    line: "Fitted in just 3 days.",
    detail: "Pre-assembled modules arrive at your doorstep and are installed neatly with 48-point quality checks.",
    icon: Home,
    badge: "Step 04",
  },
]

export function ProcessTimelineSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0A0D14] text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[10px] uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Stress-Free Building Process</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight">
            From Idea to Home in <span className="italic text-[#C99E4B]">4 Steps</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Simple, transparent, and completely hassle-free from first visit to move-in day.
          </p>
        </div>

        {/* Connected Process Track (Desktop & Tablet) */}
        <div className="hidden md:block relative mb-16">
          {/* Horizontal Connecting Stem Line */}
          <div className="absolute top-8 left-16 right-16 h-0.5 bg-gradient-to-r from-amber-500/30 via-amber-400 to-amber-500/30 -z-0" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {STEPS.map((item, index) => {
              const Icon = item.icon
              const isCurrent = activeStep === index
              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(index)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Step Number Badge */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 font-serif text-xl mb-6 shadow-xl relative ${
                      isCurrent
                        ? "bg-[#B8923A] text-slate-950 scale-110 shadow-amber-500/30 ring-4 ring-amber-400/20"
                        : "bg-[#141A28] text-white/80 border border-white/20 group-hover:border-amber-400/60 group-hover:text-amber-400"
                    }`}
                  >
                    <span>{item.step}</span>
                    {/* Pulsing ring on active */}
                    {isCurrent && (
                      <span className="absolute -inset-1 rounded-full border border-amber-400 animate-ping opacity-40 pointer-events-none" />
                    )}
                  </div>

                  {/* Dropdown Stalk Line connecting badge to card */}
                  <div className="w-0.5 h-6 bg-gradient-to-b from-amber-400/60 to-white/10 mb-4" />

                  {/* Step Card with Pedestal Look */}
                  <div
                    className={`w-full p-6 rounded-2xl transition-all duration-300 border text-left flex flex-col justify-between min-h-[220px] ${
                      isCurrent
                        ? "bg-gradient-to-b from-[#182032] to-[#101522] border-amber-500/50 shadow-2xl -translate-y-1.5"
                        : "bg-[#101522]/80 border-white/10 hover:border-white/25 hover:bg-[#141A28]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                          {item.badge}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            isCurrent ? "bg-amber-400 text-slate-950" : "bg-white/5 text-amber-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-serif text-lg text-white font-normal mb-1">
                        {item.title}
                      </h3>
                      <p className="text-amber-300/90 text-xs font-medium mb-3">
                        {item.line}
                      </p>
                      <p className="text-white/60 text-xs font-light leading-relaxed">
                        {item.detail}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-amber-400/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Guaranteed timeline</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Vertical Step Flow */}
        <div className="md:hidden space-y-4 mb-12">
          {STEPS.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[#101522] border border-white/10 relative overflow-hidden flex gap-4"
              >
                {/* Number Circle & Connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-full bg-[#B8923A] text-slate-950 font-serif text-lg font-bold flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-amber-400/60 to-white/10 my-2" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                      {item.badge}
                    </span>
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="font-serif text-base text-white font-normal">
                    {item.title}
                  </h3>
                  <p className="text-amber-300 text-xs font-medium mt-0.5 mb-1.5">
                    {item.line}
                  </p>
                  <p className="text-white/65 text-xs leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Centered CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => openEnquiryModal({ category: "Modular Kitchen Consultation" })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95 cursor-pointer"
          >
            <span>Book a Studio Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-white/45 text-xs mt-3 font-light">
            Visit our studio at Shankar Nagar Corridor, Raipur · No pushy sales, just honest advice.
          </p>
        </div>
      </div>
    </section>
  )
}
