"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Phone, MessageSquare, Calendar, Sparkles } from "lucide-react"
import { BRAND } from "@/lib/content"
import { openEnquiryModal } from "@/components/enquiry-modal"

export function MobileStickyBar() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (pathname === "/contact" || !visible) return null

  const phoneRaw = BRAND.phone.replace(/\s+/g, "")
  const whatsappUrl = `https://wa.me/917666902365?text=Hello%20Ebony,%20I%20am%20interested%20in%20modular%20interiors`

  return (
    <>
      {/* Mobile Sticky Bottom Bar (Below 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-lg border-t border-white/15 px-3 py-2.5 flex items-center justify-between gap-2 shadow-[0_-10px_25px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom duration-300">
        <a
          href={`tel:${phoneRaw}`}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-[11px] uppercase tracking-wider font-semibold active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A572]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-mono text-[11px] uppercase tracking-wider font-semibold active:scale-95 transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => openEnquiryModal({ category: "Free Design Visit" })}
          className="flex-[1.3] min-h-[44px] flex items-center justify-center gap-1.5 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 font-mono text-[11px] uppercase tracking-wider font-bold active:scale-95 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Free Visit</span>
        </button>
      </div>

      {/* Desktop Floating WhatsApp + Call Pill at bottom-right (always visible after scroll) */}
      <div className="hidden md:flex fixed right-6 bottom-8 z-40 items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Free Consultation Pill */}
        <button
          onClick={() => openEnquiryModal({ category: "Free Design Consultation" })}
          className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-950/95 hover:bg-slate-900 border border-[#C5A572]/60 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[#C5A572] animate-pulse" />
          <span>Free Consultation</span>
        </button>
      </div>
    </>
  )
}
