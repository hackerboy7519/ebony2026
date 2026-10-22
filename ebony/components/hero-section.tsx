"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowDown, ArrowRight, Volume2, VolumeX, Play, Pause, Sparkles } from "lucide-react"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { HOME_CONTENT } from "@/lib/home-content"

function StatCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, end])

  return (
    <div ref={ref} className="text-center px-4 py-4 sm:py-6">
      <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#C5A572]">
        {count}
        {suffix}
      </div>
      <div className="text-white/75 text-xs sm:text-sm font-light mt-1.5 leading-snug">
        {label}
      </div>
    </div>
  )
}

export function HeroSection() {
  const { eyebrow, title, subtitle, primaryCta, secondaryCta } = HOME_CONTENT.hero
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    const next = !isMuted
    videoRef.current.muted = next
    setIsMuted(next)
  }

  return (
    <div className="relative w-full overflow-hidden bg-[#0A0D14] text-white">
      {/* Hero Canvas */}
      <section id="hero" className="relative min-h-[92svh] sm:min-h-[94svh] w-full flex flex-col justify-between overflow-hidden">
        {/* Full-Bleed Background Video with subtle atmospheric zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-[0.68] contrast-[1.08] transition-transform duration-1000 ease-out"
          />
          {/* Cinematic ambient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-black/45 to-[#0A0D14]/80" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />
        </div>

        {/* Top Spacer for fixed navbar */}
        <div className="pt-24 sm:pt-32" />

        {/* Main Centered Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full px-5 sm:px-8 py-10 flex-1 flex flex-col justify-center items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-in fade-in duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/90 font-medium">
              {eyebrow}
            </span>
          </div>

          {/* Tagline — Large, elegant serif, generous letter-spacing, not shouting */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white font-normal leading-[1.08] tracking-tight mb-5">
            Your Dream Kitchen <br />
            <span className="italic text-[#C5A572]">Awaits!</span>
          </h1>

          {/* Subtitle — One human line (max 12 words) */}
          <p className="text-white/85 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto mb-9">
            {subtitle}
          </p>

          {/* Two CTAs: Primary warm gold/black + Ghost outline */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            <Link
              href={primaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-amber-500/25 active:scale-95 text-center"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openEnquiryModal({ category: "Free Design Consultation" })}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 active:scale-95 text-center cursor-pointer"
            >
              {secondaryCta.label}
            </button>
          </div>
        </div>

        {/* Bottom Bar: Video controls & Scroll hint */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pb-6 pt-3 flex items-center justify-between border-t border-white/15 text-xs font-mono">
          {/* Left: Volume & Play/Pause */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              )}
              <span className="text-[10px] tracking-wider font-mono">
                {isMuted ? "Muted" : "Sound"}
              </span>
            </button>

            <button
              onClick={togglePlay}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
            </button>
          </div>

          {/* Center: Scroll to explore */}
          <Link
            href="#collections"
            className="group flex items-center gap-2 text-white/70 hover:text-white tracking-[0.2em] uppercase text-[10px] transition-colors"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-3 h-3 text-[#C5A572] transition-transform duration-300 group-hover:translate-y-1" />
          </Link>

          {/* Right: Studio Location indicator */}
          <div className="text-[10px] text-white/60 tracking-wider hidden sm:block">
            Raipur Flagship Studio
          </div>
        </div>
      </section>

      {/* Trust Strip: 4 Animated Counters in a clean luxury row */}
      <div className="relative z-20 border-y border-white/10 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <StatCounter end={15} suffix="+" label="Years of happy kitchens" />
            <StatCounter end={500} suffix="+" label="Colours & finishes" />
            <StatCounter end={3} suffix=" Days" label="Clean home installation" />
            <StatCounter end={10} suffix=" Years" label="Warranty on woodwork" />
          </div>
        </div>
      </div>
    </div>
  )
}
