"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BRAND } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Phone, MessageSquare, ChevronDown } from "lucide-react"

const COLLECTIONS_SUBMENU = [
  { label: "Modular Kitchens", href: "/kitchens", desc: "L, U, Island, Parallel & Straight layouts" },
  { label: "Bespoke Wardrobes", href: "/wardrobes", desc: "Sliding & hinged systems" },
  { label: "Walk-in Closets", href: "/walk-in-closets", desc: "Floor-to-ceiling glass & aluminium suites" },
  { label: "Bar & Living Units", href: "/projects#bar-unit", desc: "Luxury entertainment & backlit displays" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
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
          {/* Brand Logo */}
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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            <Link
              href="/"
              className={cn(
                "font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1",
                pathname === "/" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Home
            </Link>

            {/* Collections Dropdown Menu */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={cn(
                  "font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1 flex items-center gap-1 cursor-pointer",
                  pathname.startsWith("/kitchens") || pathname.startsWith("/wardrobes") || pathname.startsWith("/walk-in-closets")
                    ? "text-amber-400 font-bold"
                    : "text-white/80 hover:text-white font-medium"
                )}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Collections</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", dropdownOpen && "rotate-180")} />
              </button>

              {/* Dropdown Panel */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#0B0F19]/98 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {COLLECTIONS_SUBMENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="font-serif text-sm text-white group-hover:text-amber-400 transition-colors">
                        {item.label}
                      </div>
                      <div className="font-sans text-[11px] text-white/50 group-hover:text-white/70">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-white/10 px-3">
                    <Link
                      href="/collections"
                      onClick={() => setDropdownOpen(false)}
                      className="font-mono text-[10px] text-amber-400 hover:text-amber-300 uppercase tracking-widest font-semibold flex items-center justify-between"
                    >
                      <span>Overview Lookbook</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/finishes"
              className={cn(
                "font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1",
                pathname === "/finishes" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Finishes
            </Link>

            <Link
              href="/hardware"
              className={cn(
                "font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1",
                pathname === "/hardware" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Hardware
            </Link>

            <Link
              href="/projects"
              className={cn(
                "font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1",
                pathname === "/projects" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Projects
            </Link>

            <Link
              href="/process"
              className={cn(
                "font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1",
                pathname === "/process" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Three Steps
            </Link>

            <Link
              href="/about"
              className={cn(
                "font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1",
                pathname === "/about" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={cn(
                "font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1",
                pathname === "/contact" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center gap-2 text-white/90 hover:text-amber-400 font-mono text-[11px] tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BRAND.phone}</span>
            </a>

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
              href={`tel:${BRAND.phoneRaw}`}
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
        <div className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-4 pt-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold">
              Explore Collections
            </span>
            <div className="grid grid-cols-2 gap-2">
              {COLLECTIONS_SUBMENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-white font-serif text-sm hover:border-amber-400/50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold mt-2">
              Main Menu
            </span>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Materials & Finishes", href: "/finishes" },
                { label: "Hardware Partners", href: "/hardware" },
                { label: "Completed Projects", href: "/projects" },
                { label: "Three Steps Process", href: "/process" },
                { label: "Our Story & Heritage", href: "/about" },
                { label: "Contact & Studio", href: "/contact" },
              ].map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "font-serif text-lg py-1 transition-colors",
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
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 mt-6">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center gap-3 text-white/90 font-mono text-xs py-1.5"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Studio: {BRAND.phone}</span>
            </a>

            <a
              href={`https://wa.me/${BRAND.phoneRaw.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-emerald-400 font-mono text-xs py-1.5"
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
