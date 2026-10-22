"use client"

import { useEffect, useRef, useState } from "react"
import { STATS } from "@/lib/content"
import { Badge } from "@/components/ui/badge"

function CountUpNumber({
  end,
  suffix,
  started,
}: {
  end: number
  suffix: string
  started: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return

    const duration = 1800
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [started, end])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber-700 font-semibold block mb-3">
            Track Record · Est. 2009
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-slate-900 font-normal">
            Precision & Trust, Measured in Millimeters
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
        </div>

        {/* Double-Bezel Concentric Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="double-bezel group transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="double-bezel-inner p-6 md:p-8 text-center flex flex-col items-center justify-between min-h-[170px] md:min-h-[190px]">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-medium">
                  EBONY METRIC
                </span>
                
                <div className="font-serif italic text-4xl sm:text-5xl text-slate-900 font-normal tracking-tight my-2">
                  <CountUpNumber
                    end={stat.value}
                    suffix={stat.suffix}
                    started={counting}
                  />
                </div>

                <div className="pt-2 border-t border-slate-100 w-full">
                  <p className="font-mono text-[13px] uppercase tracking-wider text-slate-700 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
