"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_LINKS, BRAND } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Phone, MessageSquare } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || (pathname && pathname !== "/")
            ? "bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 py-3 sm:py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 sm:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-8 sm:h-9 w-28 sm:w-32 flex items-center">
              <Image
                src="/logo.png"
                alt={BRAND.name}
                width={120}
                height={34}
                className="object-contain brightness-125 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <span className="hidden xl:inline-block font-mono text-[9px] uppercase tracking-[0.25em] text-amber-400/80 pl-3 border-l border-white/15">
              Modular Kulture
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1 relative",
                    isActive
                      ? "text-amber-400 font-bold"
                      : "text-white/80 hover:text-white font-medium"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-400 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Direct Studio Phone */}
            <a
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-white/90 hover:text-amber-400 font-mono text-[11px] tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BRAND.phone}</span>
            </a>

            {/* Gold CTA Button matching reference */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-[11px] uppercase tracking-wider font-bold transition-all duration-300 shadow-md hover:shadow-amber-500/20 active:scale-95"
            >
              <span>Book Studio Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-amber-400"
              aria-label="Call EBONY"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex flex-col items-center justify-center gap-1.5 text-white"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={cn(
                  "h-0.5 w-5 bg-white transition-all duration-300",
                  menuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 bg-white transition-opacity duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 bg-white transition-all duration-300",
                  menuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Screen-Filling Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden transition-all duration-300">
          <div className="flex flex-col gap-5 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold">
              Navigation
            </span>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "font-serif italic text-2xl transition-colors",
                    isActive
                      ? "text-amber-400 font-medium"
                      : "text-white/80 hover:text-white font-light"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-white/90 font-mono text-xs py-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Studio: {BRAND.phone}</span>
            </a>

            <a
              href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-emerald-400 font-mono text-xs py-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-between px-6 py-3.5 rounded-full bg-[#B8923A] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold"
            >
              <span>Book Studio Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
