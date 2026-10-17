"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BRAND, CITIES } from "@/lib/content"
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Compass,
  Layers,
  Sparkles,
} from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    interest: "Modular Kitchen",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  // Honeypot field for spam prevention
  const [hp, setHp] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (hp) return // spam bot silently ignored

    setLoading(true)
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          phone: formState.phone,
          email: formState.email,
          city: formState.city,
          interest: formState.interest,
          message: formState.message,
          honeypot: hp,
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setErrorMessage(data.error || "Unable to send inquiry. Please try again or reach us via WhatsApp.")
      }
    } catch {
      setErrorMessage("Network connection issue. Please reach our Raipur studio directly via phone or WhatsApp.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900">
      <Navbar />

      <main className="pt-28 pb-16">
        {/* Breadcrumb & Elegant Editorial Header */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-10 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-slate-900 font-semibold">Studio Consultation</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B8923A] font-semibold block mb-3">
                FLAGSHIP EXPERIENCE STUDIO · RAIPUR & PAN-INDIA
              </span>
              <h1 className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-slate-950 font-normal tracking-tight leading-[1.15]">
                Architectural Consultation & <br className="hidden sm:inline" />
                <span className="text-[#855E15] not-italic font-medium">Private Studio Visit</span>
              </h1>
            </div>
            <p className="text-slate-600 max-w-md text-sm font-light leading-relaxed">
              Meet our senior interior architects at our Raipur Flagship or request a private 3D spatial review for your residence anywhere in India. Every space is custom-engineered to 0.1mm German precision.
            </p>
          </div>
        </section>

        {/* Unified Luxury Split Layout: Studio Concierge (Left) & Consultation Request (Right) */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Flagship Studio Details, Direct Channels, Experience Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Studio Experience Center Card */}
              <div className="double-bezel">
                <div className="double-bezel-inner p-6 sm:p-7">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50/90 border border-[#B8923A]/30 flex items-center justify-center text-[#855E15] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#855E15] font-semibold block mb-1">
                        Flagship Experience Studio
                      </span>
                      <h2 className="font-serif text-xl text-slate-950 font-medium">
                        EBONY Raipur Studio
                      </h2>
                      <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed">
                        VIP Road / Shankar Nagar, Raipur, Chhattisgarh 492001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 py-3 border-y border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-[#855E15]" />
                    <span>Monday – Saturday · 10:30 AM – 8:00 PM IST</span>
                  </div>

                  <div className="mt-4">
                    <a
                      href="https://maps.google.com/?q=EBONY+Modular+Kulture+Raipur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#855E15] hover:text-[#B8923A] font-bold group"
                    >
                      <span>Get Studio Directions on Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Concierge Channels */}
              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                  className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#B8923A]/60 hover:bg-white transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-[#B8923A]/30 flex items-center justify-center text-[#855E15] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 block">
                      Direct Architect Line
                    </span>
                    <p className="font-serif italic text-base text-slate-950 group-hover:text-[#855E15] transition-colors">
                      {BRAND.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/917666902365?text=Hello%20EBONY%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20project...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200/60 hover:border-emerald-500 hover:bg-white transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-700/80 block">
                      WhatsApp Studio Chat
                    </span>
                    <p className="font-serif italic text-base text-slate-950 group-hover:text-emerald-700 transition-colors">
                      Instant Architectural Chat
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND.email}`}
                  className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#B8923A]/60 hover:bg-white transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-[#B8923A]/30 flex items-center justify-center text-[#855E15] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 block">
                      Architectural CAD & Drawings
                    </span>
                    <p className="font-serif italic text-base text-slate-950 group-hover:text-[#855E15] transition-colors truncate">
                      {BRAND.email}
                    </p>
                  </div>
                </a>
              </div>

              {/* What to Expect at the Experience Center */}
              <div className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#855E15] font-semibold block mb-4">
                  What You Will Experience At Studio
                </span>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <Layers className="w-4 h-4 text-[#B8923A] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-900 font-medium">Physical Materials Library:</strong> Touch & feel Egger boards, Blum motion slides, Fenix ultra-matte acrylics, and natural veneers.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Compass className="w-4 h-4 text-[#B8923A] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-900 font-medium">Live 3D CAD Spatial Review:</strong> Work 1-on-1 with an interior architect to review your floorplan and optimize ergonomics.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#B8923A] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-900 font-medium">0.1mm German Precision:</strong> Inspect fully assembled kitchen islands and sliding wardrobes built to lifetime durability standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pan-India Network */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold block mb-2.5">
                  Pan-India Installation & Service Network
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {CITIES.map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-1 text-[11px] font-mono text-slate-600 bg-slate-50 border border-slate-200 rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Consultation Form */}
            <div className="lg:col-span-7">
              <div className="double-bezel">
                <div className="double-bezel-inner p-7 sm:p-10">
                  {submitted ? (
                    <div className="py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-700 font-semibold block mb-2">
                        Request Received Successfully
                      </span>
                      <h3 className="font-serif italic text-3xl sm:text-4xl text-slate-950 mb-3">
                        Thank you for contacting EBONY.
                      </h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                        Our principal interior architect will review your project details and reach out within 24 hours to schedule your private 3D review.
                      </p>
                      <div className="mt-8">
                        <Link
                          href="/collections"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-slate-800 transition-colors"
                        >
                          <span>Explore Collections Lookbook</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot field for anti-spam bots */}
                      <input
                        type="text"
                        name="website"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                        className="absolute -left-[9999px] opacity-0 w-0 h-0"
                        aria-hidden="true"
                      />

                      <div className="border-b border-slate-100 pb-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#855E15] font-semibold block mb-1">
                          Private Consultation Request
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl text-slate-950 font-normal">
                          Commission Your Space
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          Share your floorplan details or schedule an in-person studio appointment.
                        </p>
                      </div>

                      {/* Space of Interest Pills */}
                      <div className="flex flex-col gap-2">
                        <label
                          id="interest-label"
                          className="font-mono text-[10px] tracking-widest uppercase text-slate-500 font-semibold"
                        >
                          Space of Interest *
                        </label>
                        <div
                          role="group"
                          aria-labelledby="interest-label"
                          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
                        >
                          {[
                            "Modular Kitchen",
                            "Bespoke Wardrobe",
                            "Walk-in Closet",
                            "Entire Residence",
                          ].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() =>
                                setFormState((s) => ({ ...s, interest: option }))
                              }
                              className={`px-3 py-2.5 rounded-xl border text-xs font-mono tracking-wider uppercase transition-all duration-200 text-center cursor-pointer ${
                                formState.interest === option
                                  ? "bg-slate-950 text-white border-slate-950 font-semibold shadow-sm"
                                  : "bg-slate-50/60 text-slate-700 border-slate-200 hover:border-[#B8923A] hover:text-[#855E15]"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name & Phone */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-name"
                            className="font-mono text-[10px] tracking-widest uppercase text-slate-500 font-semibold"
                          >
                            Full Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState((s) => ({ ...s, name: e.target.value }))
                            }
                            className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none"
                            placeholder="e.g. Rahul Sharma"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-phone"
                            className="font-mono text-[10px] tracking-widest uppercase text-slate-500 font-semibold"
                          >
                            Phone Number *
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            required
                            value={formState.phone}
                            onChange={(e) =>
                              setFormState((s) => ({ ...s, phone: e.target.value }))
                            }
                            className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      {/* Email & City */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-email"
                            className="font-mono text-[10px] tracking-widest uppercase text-slate-500 font-semibold"
                          >
                            Email Address
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState((s) => ({ ...s, email: e.target.value }))
                            }
                            className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none"
                            placeholder="client@residence.com"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-city"
                            className="font-mono text-[10px] tracking-widest uppercase text-slate-500 font-semibold"
                          >
                            City / Location
                          </label>
                          <select
                            id="contact-city"
                            value={formState.city}
                            onChange={(e) =>
                              setFormState((s) => ({ ...s, city: e.target.value }))
                            }
                            className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none"
                          >
                            <option value="">Select your city</option>
                            {CITIES.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                            <option value="other">Other City in India</option>
                          </select>
                        </div>
                      </div>

                      {/* Architectural Vision / Floorplan notes */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-message"
                          className="font-mono text-[10px] tracking-widest uppercase text-slate-500 font-semibold"
                        >
                          Architectural Vision & Floorplan Details
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState((s) => ({ ...s, message: e.target.value }))
                          }
                          className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none resize-none"
                          placeholder="Tell us about your room dimensions, preferred finish styles (e.g. PU lacquer, acrylic, Fenix matte), timeline, or AutoCAD plan status..."
                        />
                      </div>

                      {errorMessage && (
                        <div
                          role="alert"
                          className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono"
                        >
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 px-8 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer active:scale-95 group"
                      >
                        <span>
                          {loading ? "Submitting Request..." : "Request Architectural Consultation"}
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>

                      <p className="text-[11px] font-mono text-slate-400 text-center">
                        Strict client confidentiality. We never share your floorplan or contact info.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
