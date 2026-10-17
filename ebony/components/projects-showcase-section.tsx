"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { PROJECTS_GALLERY } from "@/lib/content"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  { label: "All Projects", slug: "all" },
  { label: "Modular Kitchens", slug: "kitchen" },
  { label: "Wardrobes", slug: "wardrobe" },
  { label: "Walk-in Closets", slug: "closet" },
  { label: "Bar & Living", slug: "living" },
]

export function ProjectsShowcaseSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((p) => p.categorySlug === activeFilter)

  return (
    <section id="projects-showcase" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                Completed Residences &amp; Spaces
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              Product &amp; Project Showcase.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            Real residences executed across Raipur, Bilaspur, and Central India. High-res craftsmanship built to millimeter tolerances.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = cat.slug === activeFilter
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveFilter(cat.slug)}
                className={cn(
                  "px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer",
                  isSelected
                    ? "bg-slate-950 text-white shadow-md"
                    : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8923A] font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#B8923A]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-slate-950 font-normal mb-3">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-4">
                    {project.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-700 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#B8923A] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Portfolio CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md"
          >
            <span>Explore All Completed Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
