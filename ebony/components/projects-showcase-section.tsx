"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { cn } from "@/lib/utils"

export function ProjectsShowcaseSection() {
  const { kicker, title, subtitle, filters, items } = HOME_CONTENT.projects
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects =
    activeFilter === "all"
      ? items
      : items.filter((p) => p.category === activeFilter)

  return (
    <section id="projects-showcase" className="relative bg-[#FAFAFA] py-24 sm:py-32 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8923A] font-bold">
                {kicker}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              {title}
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filters.map((filter) => {
            const isSelected = filter.id === activeFilter
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer",
                  isSelected
                    ? "bg-slate-950 text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-14">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                    View Project
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl text-slate-950 font-normal group-hover:text-[#B8923A] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B8923A]" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-lg"
          >
            <span>See All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
