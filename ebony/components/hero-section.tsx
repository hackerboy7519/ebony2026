"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Volume2, VolumeX } from "lucide-react"
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
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, end])

  return (
    <div ref={ref} className="text-center px-3 py-6 sm:py-8">
      <div className="font-serif text-[2rem] sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#D8B97F] tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-white/80 text-sm sm:text-[15px] mt-2 leading-snug">{label}</div>
    </div>
  )
}

/** Splits a line into words that rise in one after another. */
function RisingWords({ text, startDelay, className }: { text: string; startDelay: number; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="rise-word" style={{ animationDelay: `${startDelay + i * 90}ms` }}>
          {word}
          {" "}
        </span>
      ))}
    </span>
  )
}

export function HeroSection() {
  const { eyebrow, title, accent, subtitle, primaryCta, secondaryCta } = HOME_CONTENT.hero
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = false
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsMuted(false))
        .catch(() => {
          // Browser blocked sound on autoplay: play muted, then turn sound on at the first tap or click
          video.muted = true
          setIsMuted(true)
          video.play().catch(() => {})

          const unmuteOnInteraction = () => {
            if (videoRef.current) {
              videoRef.current.muted = false
              setIsMuted(false)
            }
          }

          window.addEventListener("click", unmuteOnInteraction, { once: true })
          window.addEventListener("touchstart", unmuteOnInteraction, { once: true })
          window.addEventListener("keydown", unmuteOnInteraction, { once: true })
        })
    }
  }, [])

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const next = !isMuted
    videoRef.current.muted = next
    setIsMuted(next)
  }

  const titleWords = title.split(" ").length

  return (
    <div className="relative w-full overflow-hidden bg-[#0A0D14] text-white">
      <section id="hero" className="relative min-h-[100svh] w-full flex flex-col overflow-hidden">
        {/* Background video with a slow, breathing zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            poster="/img/hero-kitchen.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover animate-slow-zoom brightness-[0.62] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-black/35 to-black/70" />
        </div>

        <div className="pt-28 sm:pt-32" />

        <div className="relative z-10 max-w-5xl mx-auto w-full px-5 sm:px-8 pb-24 flex-1 flex flex-col justify-center items-center text-center">
          <span
            className="rise-word inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-7 text-[13px] sm:text-sm font-medium tracking-wide text-white/90"
            style={{ animationDelay: "150ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B97F] animate-pulse" />
            {eyebrow}
          </span>

          <h1 className="font-serif text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl lg:text-[5.25rem] text-white font-normal tracking-tight mb-6 text-balance">
            <RisingWords text={title} startDelay={300} />
            <br className="hidden sm:block" />
            <RisingWords text={accent} startDelay={300 + titleWords * 90} className="italic text-[#D8B97F]" />
          </h1>

          <p
            className="rise-word text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ animationDelay: "900ms" }}
          >
            {subtitle}
          </p>

          <div
            className="rise-word flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
            style={{ animationDelay: "1100ms" }}
          >
            <Link
              href={primaryCta.href}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 text-[15px] font-semibold transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => openEnquiryModal({ category: "Design Visit" })}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white text-[15px] font-semibold transition-all duration-300 active:scale-95 cursor-pointer"
            >
              {secondaryCta.label}
            </button>
          </div>
        </div>

        {/* Small sound toggle — the only control left on the video */}
        <button
          onClick={toggleMute}
          className="absolute z-10 bottom-6 left-5 sm:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D8B97F]" />}
        </button>

        {/* Scroll cue */}
        <div className="absolute z-10 bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center" aria-hidden="true">
          <span className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <span className="w-1 h-2 rounded-full bg-[#D8B97F] animate-bounce" />
          </span>
        </div>
      </section>

      {/* Trust strip */}
      <div className="relative z-20 border-t border-white/10 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 [&>*:nth-child(2)]:border-l [&>*:nth-child(2)]:border-white/10 md:[&>*:nth-child(2)]:border-l-0">
            {HOME_CONTENT.trustStrip.map((s) => (
              <StatCounter key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
