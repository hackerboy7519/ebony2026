"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BRAND } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Phone, MessageSquare, ChevronDown, X, ChefHat, DoorClosed, Sparkles, Wine } from "lucide-react"
import { openEnquiryModal } from "@/components/enquiry-modal"

const COLLECTIONS_SUBMENU = [
  {
    label: "Modular Kitchens",
    href: "/kitchens",
    desc: "12 Styles · 5 Architectural Layouts",
    icon: ChefHat,
  },
  {
    label: "Bespoke Wardrobes",
    href: "/wardrobes",
    desc: "Sliding & hinged systems up to 3m",
    icon: DoorClosed,
  },
  {
    label: "Walk-in Closets",
    href: "/walk-in-closets",
    desc: "Floor-to-ceiling glass & lighting suites",
    icon: Sparkles,
  },
  {
    label: "Bar & TV Units",
    href: "/projects#bar-unit",
    desc: "Custom entertainment joinery",
    icon: Wine,
  },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || (pathname && pathname !== "/")
            ? "bg-[#0B0F19]/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-black/85 via-black/50 to-transparent py-4 sm:py-5"
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
                "font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 py-1",
                pathname === "/" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Home
            </Link>

            <Link
              href="/kitchens"
              className={cn(
                "font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 py-1",
                pathname === "/kitchens" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Kitchens
            </Link>

            <Link
              href="/wardrobes"
              className={cn(
                "font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 py-1",
                pathname === "/wardrobes" || pathname === "/walk-in-closets"
                  ? "text-amber-400 font-bold"
                  : "text-white/80 hover:text-white font-medium"
              )}
            >
              Wardrobes
            </Link>

            <Link
              href="/finishes"
              className={cn(
                "font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 py-1",
                pathname === "/finishes" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Colours &amp; Finishes
            </Link>

            <Link
              href="/hardware"
              className={cn(
                "font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 py-1",
                pathname === "/hardware" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Fittings
            </Link>

            <Link
              href="/projects"
              className={cn(
                "font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 py-1",
                pathname === "/projects" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Our Work
            </Link>

            <Link
              href="/about"
              className={cn(
                "font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 py-1",
                pathname === "/about" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={cn(
                "font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 py-1",
                pathname === "/contact" ? "text-amber-400 font-bold" : "text-white/80 hover:text-white font-medium"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Actions: Get Free Quote */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => openEnquiryModal({ category: "Get Free Quote" })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 font-mono text-[11px] uppercase tracking-wider font-bold transition-all duration-300 shadow-md hover:shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-1.5 text-white cursor-pointer"
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
        <div
          className="fixed inset-0 z-[100] flex flex-col justify-between p-6 lg:hidden overflow-y-auto"
          style={{ backgroundColor: "#0B0F19" }}
        >
          {/* Top Bar with Logo & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/logo.png"
                alt={BRAND.name}
                width={110}
                height={30}
                className="object-contain brightness-125"
              />
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/20"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 py-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-3">
                Collections
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {COLLECTIONS_SUBMENU.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-serif text-sm hover:border-amber-400/50 hover:bg-slate-800/80 transition-colors flex items-center gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-white font-medium text-xs sm:text-sm">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-3">
                Explore EBONY
              </span>
              <div className="flex flex-col gap-1.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "Kitchens (12 Styles)", href: "/kitchens" },
                  { label: "Wardrobes & Closets", href: "/wardrobes" },
                  { label: "Colours & Finishes", href: "/finishes" },
                  { label: "Fittings & Hardware", href: "/hardware" },
                  { label: "Our Work (Raipur & Nearby)", href: "/projects" },
                  { label: "About Our Factory", href: "/about" },
                  { label: "Contact & Studio", href: "/contact" },
                ].map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "font-serif text-base sm:text-lg py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between",
                        isActive
                          ? "text-amber-400 font-medium bg-amber-500/15 border border-amber-500/30"
                          : "text-slate-100 hover:text-white hover:bg-white/5 font-normal"
                      )}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className={cn("w-4 h-4", isActive ? "text-amber-400" : "text-slate-500")} />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center gap-3 text-white font-mono text-xs py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/40"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Studio: {BRAND.phone}</span>
            </a>

            <button
              onClick={() => {
                setMenuOpen(false)
                openEnquiryModal({ category: "Studio Consultation" })
              }}
              className="mt-1 flex items-center justify-between px-6 py-4 rounded-full bg-[#B8923A] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold shadow-lg cursor-pointer"
            >
              <span>Book a Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
