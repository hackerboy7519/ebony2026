"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { BRAND } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-100">
          {/* Brand Column (Left - 4 Cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt={BRAND.name}
                width={130}
                height={38}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="font-serif italic text-base text-slate-800 mb-2">
              Kitchens You&apos;ll Love Coming Home To.
            </p>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-sm mb-6">
              Beautiful modular kitchens, wardrobes and walk-in closets. Made in our own factory and fitted in just 3 days.
            </p>

            <div className="text-xs font-mono text-slate-500">
              German CNC Precision · Raipur Studio
            </div>
          </div>

          {/* EXPLORE Links Column (3 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B8923A] font-bold mb-4">
              EXPLORE
            </h4>
            <ul className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-slate-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/kitchens" className="hover:text-slate-950 transition-colors">
                  Kitchens (12 Styles)
                </Link>
              </li>
              <li>
                <Link href="/wardrobes" className="hover:text-slate-950 transition-colors">
                  Wardrobes &amp; Closets
                </Link>
              </li>
              <li>
                <Link href="/finishes" className="hover:text-slate-950 transition-colors">
                  Colours &amp; Finishes
                </Link>
              </li>
              <li>
                <Link href="/hardware" className="hover:text-slate-950 transition-colors">
                  Fittings
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-slate-950 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-950 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-950 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLLECTIONS Links Column (3 Cols) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B8923A] font-bold mb-4">
              COLLECTIONS
            </h4>
            <ul className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/kitchens#island" className="hover:text-slate-950 transition-colors">
                  Island Kitchens
                </Link>
              </li>
              <li>
                <Link href="/kitchens#l-shape" className="hover:text-slate-950 transition-colors">
                  L-Shape Kitchens
                </Link>
              </li>
              <li>
                <Link href="/kitchens#parallel" className="hover:text-slate-950 transition-colors">
                  Parallel Kitchens
                </Link>
              </li>
              <li>
                <Link href="/wardrobes#sliding" className="hover:text-slate-950 transition-colors">
                  Sliding Wardrobes
                </Link>
              </li>
              <li>
                <Link href="/wardrobes#hinged" className="hover:text-slate-950 transition-colors">
                  Hinged Wardrobes
                </Link>
              </li>
              <li>
                <Link href="/walk-in-closets" className="hover:text-slate-950 transition-colors">
                  Walk-in Dressing Rooms
                </Link>
              </li>
              <li>
                <Link href="/projects#bar-unit" className="hover:text-slate-950 transition-colors">
                  Bar &amp; TV Units
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT Info Column (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B8923A] font-bold mb-4">
              STUDIO &amp; CONTACT
            </h4>
            <div className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-slate-600">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-slate-950 transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-[#B8923A] shrink-0" />
                <span>{BRAND.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 hover:text-slate-950 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B8923A] shrink-0" />
                <span>{BRAND.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8923A] shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </div>

              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#B8923A] font-bold uppercase tracking-wider hover:underline mt-2"
              >
                <span>Get Directions (Google Maps)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} EBONY Modular Interiors. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>·</span>
            <span className="text-slate-700">German CNC Machinery · Raipur, CG</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
