"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BRAND } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Phone, X } from "lucide-react"
import { openEnquiryModal } from "@/components/enquiry-modal"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Kitchens", href: "/kitchens" },
  { label: "Wardrobes", href: "/wardrobes" },
  { label: "Our Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
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
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-sans text-[13px] tracking-wide transition-colors duration-200 py-1",
                  pathname === item.href
                    ? "text-[#C5A572] font-semibold"
                    : "text-white/80 hover:text-white font-medium"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Header Actions: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center gap-2 text-white/80 hover:text-[#C5A572] font-sans text-[13px] font-medium transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BRAND.phone}</span>
            </a>
            <button
              onClick={() => openEnquiryModal({ category: "Get Free Quote" })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 font-sans text-[12px] uppercase tracking-wider font-bold transition-all duration-300 shadow-md hover:shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#C5A572]"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
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
          <div className="flex flex-col gap-2 py-8 flex-1">
            {NAV_ITEMS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "font-sans text-lg py-3.5 px-4 rounded-2xl transition-all duration-200 flex items-center justify-between",
                    isActive
                      ? "text-[#C5A572] font-semibold bg-[#C5A572]/10 border border-[#C5A572]/30"
                      : "text-white hover:text-white hover:bg-white/5 font-normal"
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className={cn("w-4 h-4", isActive ? "text-[#C5A572]" : "text-white/30")} />
                </Link>
              )
            })}
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center gap-3 text-white font-sans text-sm py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A572]/40 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A572]" />
              <span>Call: {BRAND.phone}</span>
            </a>

            <button
              onClick={() => {
                setMenuOpen(false)
                openEnquiryModal({ category: "Studio Consultation" })
              }}
              className="mt-1 flex items-center justify-between px-6 py-4 rounded-full bg-[#C5A572] text-slate-950 font-sans text-sm uppercase tracking-wider font-bold shadow-lg cursor-pointer hover:bg-[#D4B582] transition-colors active:scale-95"
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
