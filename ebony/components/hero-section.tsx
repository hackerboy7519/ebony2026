"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowDown, Volume2, VolumeX, Play, Pause } from "lucide-react"

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

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
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-black text-white">
      {/* Full-Bleed Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.72] contrast-[1.08]"
        />
        {/* Cinematic ambient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Top Spacer for fixed navbar */}
      <div className="pt-24 sm:pt-32" />

      {/* Main Centered Content matching uploaded reference image */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-5 sm:px-8 py-10 flex-1 flex flex-col justify-center items-center text-center">
        {/* Kicker */}
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/80 font-semibold mb-5 block">
          CRAFTING EXTRAORDINARY MODULAR INTERIORS
        </span>

        {/* 2-Line Headline matching reference */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-white font-normal leading-[1.08] tracking-tight mb-6">
          German Engineering. <br />
          <span className="text-white">Bespoke Indian Living.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto mb-10">
          India&apos;s benchmark for modular luxury, creating high-end kitchens and
          wardrobes with meticulous German precision for over 15 years.
        </p>

        {/* Dual Centered CTA Buttons matching reference */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          {/* Primary Tan/Gold Button */}
          <Link
            href="#collections"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl hover:shadow-amber-500/20 active:scale-95 text-center"
          >
            EXPLORE THE COLLECTIONS
          </Link>

          {/* Secondary Translucent Glass Button */}
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 active:scale-95 text-center"
          >
            VIEW SHOWROOMS
          </Link>
        </div>
      </div>

      {/* Bottom Bar matching uploaded reference image */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pb-8 pt-4 flex items-center justify-between border-t border-white/15 text-xs font-mono">
        {/* Left: Volume & Play/Pause Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMute}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-amber-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            )}
            <span className="hidden sm:inline-block text-[10px] tracking-wider">
              {isMuted ? "MUTED" : "UNMUTED"}
            </span>
          </button>

          <button
            onClick={togglePlay}
            className="text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-white/80" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-white/80 ml-0.5" />
            )}
          </button>
        </div>

        {/* Center: Scroll to Explore */}
        <Link
          href="#collections"
          className="group flex items-center gap-2 text-white/70 hover:text-white tracking-[0.2em] uppercase text-[10px] transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3 h-3 text-amber-400 transition-transform duration-300 group-hover:translate-y-1" />
        </Link>

        {/* Right: Social Icons matching reference */}
        <div className="flex items-center gap-3 text-white/70">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
            aria-label="Twitter / X"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
