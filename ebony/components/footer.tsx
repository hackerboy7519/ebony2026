"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { BRAND, NAV_LINKS } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-100">
          {/* Brand Column (Left) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt={BRAND.name}
                width={130}
                height={38}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-sm mb-6">
              Bespoke modular kitchens, wardrobes and home interiors. German
              precision engineering installed in 3 days.
            </p>

            {/* Social Icons matching reference */}
            <div className="flex items-center gap-3 text-slate-700">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-950 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-950 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-950 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* EXPLORE Links Column matching reference */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B8923A] font-bold mb-5">
              EXPLORE
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-slate-600">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-slate-950 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLLECTIONS Links Column matching reference */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B8923A] font-bold mb-5">
              COLLECTIONS
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-slate-600">
              {[
                { label: "Modular Kitchens", href: "/collections#kitchen" },
                { label: "Wardrobes", href: "/collections#wardrobe" },
                { label: "Living & TV Units", href: "/collections#living" },
                { label: "Complete Home Interiors", href: "/collections#bedroom" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-slate-950 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT Info Column matching reference */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B8923A] font-bold mb-5">
              CONTACT
            </h4>
            <div className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-slate-600">
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 hover:text-slate-950 transition-colors"
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
                <span>Raipur Flagship Studio, Chhattisgarh</span>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#B8923A] font-bold uppercase tracking-wider hover:underline mt-2"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar matching reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Ebony. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>·</span>
            <span className="text-slate-700">Designed with ♥ in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
