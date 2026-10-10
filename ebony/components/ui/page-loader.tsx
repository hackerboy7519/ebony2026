"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Smooth progress counter for luxury experience
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 250)
          return 100
        }
        const increment = Math.floor(Math.random() * 25) + 15
        return Math.min(100, prev + increment)
      })
    }, 60)

    return () => clearInterval(interval)
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0A0D14] flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center text-center px-6">
        {/* Monogram / Brand Logo */}
        <div className="relative mb-6 animate-pulse">
          <Image
            src="/logo.png"
            alt="EBONY"
            width={140}
            height={40}
            className="object-contain brightness-150"
            priority
          />
        </div>

        {/* Minimal Kicker */}
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#C99E4B] mb-5">
          Modular Kulture · Est. 2009
        </span>

        {/* Slim Gold Progress Bar */}
        <div className="w-48 h-[1.5px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#855E15] via-[#D4AF37] to-[#F5E6AB] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Minimal Percentage */}
        <span className="font-mono text-[10px] text-white/40 tracking-widest mt-3">
          {progress}%
        </span>
      </div>
    </div>
  )
}
