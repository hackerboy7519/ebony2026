"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from "lucide-react"
import { BRAND } from "@/lib/content"
import { HOME_CONTENT } from "@/lib/home-content"

export function StudioCtaSection() {
  const { kicker, title, subtitle } = HOME_CONTENT.finalCta
  const [form, setForm] = useState({ name: "", phone: "", city: "Raipur" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const cleanedPhone = form.phone.replace(/\D/g, "")
    if (cleanedPhone.length < 10) {
      setError("Please enter a valid 10-digit phone number.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          city: form.city,
          interest: "Homepage 3-Field Quick Enquiry",
          message: `Consultation request from ${form.name} in ${form.city}.`,
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setError(data.error || "Unable to send request. Please try again.")
      }
    } catch {
      setError("Network error. Please call +91 79742 09352.")
    } finally {
      setLoading(false)
    }
  }

  const whatsappUrl = `https://wa.me/917974209352?text=Hello%20Ebony,%20I%20would%20like%20to%20plan%20my%20kitchen.`

  return (
    <section id="consultation" className="relative py-24 sm:py-32 bg-[#0A0D14] text-white overflow-hidden border-t border-white/10">
      {/* Background with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/living-room-showcase.jpg"
          alt="Ebony Studio"
          fill
          className="object-cover filter brightness-[0.20] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Headline & Studio Info (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C5A572] font-mono text-[10px] uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3 h-3" />
              <span>{kicker}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.12]">
              Let&apos;s Build Your <br />
              <span className="italic text-[#C5A572]">Dream Kitchen.</span>
            </h2>
            <p className="text-white/75 text-base sm:text-lg font-light leading-relaxed mt-4 max-w-lg mb-8">
              {subtitle}
            </p>

            {/* Direct Studio & WhatsApp Contacts */}
            <div className="space-y-3 font-mono text-xs text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C5A572] shrink-0" />
                <span>VIP Road / Shankar Nagar Corridor, Raipur, CG 492001</span>
              </div>
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 hover:text-[#C5A572] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A572] shrink-0" />
                <span>Call {BRAND.phone}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono text-xs pt-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat directly on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Right: Clean Minimal 3-Field Consultation Form (6 Cols) */}
          <div className="lg:col-span-6 bg-[#121724]/90 backdrop-blur-xl border border-white/15 rounded-3xl p-7 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-white font-normal">
                  Thank You, {form.name}!
                </h3>
                <p className="text-white/75 text-sm max-w-sm mx-auto leading-relaxed">
                  Our Raipur design team will call you on{" "}
                  <span className="text-[#C5A572] font-mono">{form.phone}</span> shortly to start your 3D plan.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-2xl text-white font-normal mb-1">
                  Book Free Design Visit
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light mb-6">
                  Only 3 fields. Zero pushy sales calls.
                </p>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-[#C5A572] text-sm transition-colors"
                    />
                  </div>

                  {/* Field 2: Phone */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 text-xs font-mono">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-[#C5A572] text-sm font-mono transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field 3: City */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                      Your City / Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Raipur, Bilaspur, Durg"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-[#C5A572] text-sm transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-[#C5A572] hover:bg-[#D4B582] disabled:opacity-50 text-slate-950 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 active:scale-[0.99]"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Get Free 3D Design &amp; Quote</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
