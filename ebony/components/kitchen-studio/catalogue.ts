// Finish catalogue for the 3D Kitchen Studio (ported from the Cowork "EBONY Kitchen Studio" artifact).
import type { CSSProperties } from "react"

export const STUDIO_ASSETS = "/kitchen-studio"

export type ZoneId = "base" | "wall" | "tall" | "counter" | "splash"
export type ZoneKind = "door" | "counter" | "splash"

export type TextureSet = { map: string; normal?: string; rough?: string; rep: number }

export type Shade = { n: string; c: string; set?: keyof typeof SETS; frost?: boolean }
export type Finish = { id: string; name: string; desc: string; shades: Shade[] }
export type Pick = { f: Finish; s: Shade }
export type Design = Record<ZoneId, Pick>

// Texture sets in /kitchen-studio/tex, with how many repeats per model unit
export const SETS = {
  oakl: { map: "oakl_c", normal: "oakl_n", rough: "oakl_r", rep: 0.9 },
  walnut: { map: "walnut_c", normal: "walnut_n", rough: "walnut_r", rep: 0.9 },
  wenge: { map: "wenge_c", normal: "wenge_n", rough: "wenge_r", rep: 0.9 },
  marblew: { map: "marblew_c", rough: "marblew_r", rep: 0.5 },
  marbleb: { map: "marbleb_c", rough: "marbleb_r", rep: 0.5 },
  onyx: { map: "onyx_c", rough: "onyx_r", rep: 0.5 },
  trav: { map: "trav_c", rough: "trav_r", rep: 0.5 },
  concrete: { map: "concrete_c", normal: "concrete_n", rough: "concrete_r", rep: 0.5 },
  granite: { map: "granite_c", rough: "granite_r", rep: 0.7 },
  terrazzo: { map: "terrazzo_c", normal: "terrazzo_n", rough: "terrazzo_r", rep: 0.6 },
  quartz: { map: "quartz_c", rough: "quartz_r", rep: 1.1 },
  steel: { map: "steel_c", normal: "steel_n", rough: "steel_r", rep: 0.8 },
  plaster: { map: "plaster_c", normal: "plaster_n", rough: "plaster_r", rep: 0.5 },
  subway: { map: "subway_c", normal: "subway_n", rough: "subway_r", rep: 0.65 },
  square: { map: "square_c", normal: "square_n", rough: "square_r", rep: 0.6 },
} satisfies Record<string, TextureSet>

export type SetKey = keyof typeof SETS

export const DOOR_FINISHES: Finish[] = [
  {
    id: "matte",
    name: "Soft Matte",
    desc: "Smooth and velvety. Hides fingerprints beautifully.",
    shades: [
      { n: "Sage", c: "#8b9783" },
      { n: "Ivory", c: "#e9e4d9" },
      { n: "Slate Blue", c: "#5d6979" },
      { n: "Sand", c: "#c8b69b" },
      { n: "Terracotta", c: "#b0705a" },
      { n: "Charcoal", c: "#353638" },
    ],
  },
  {
    id: "laminate",
    name: "Easy-Care Laminate",
    desc: "The warm look of real wood on a tough, easy-to-clean surface.",
    shades: [
      { n: "Light Oak", c: "#ffffff", set: "oakl" },
      { n: "Walnut", c: "#ffffff", set: "walnut" },
      { n: "Wenge", c: "#ffffff", set: "wenge" },
      { n: "Smoked Oak", c: "#a59684", set: "oakl" },
      { n: "Honey Teak", c: "#d29a62", set: "oakl" },
    ],
  },
  {
    id: "gloss",
    name: "High Gloss",
    desc: "A mirror-like shine that makes the kitchen feel bigger and brighter.",
    shades: [
      { n: "Pearl White", c: "#f0eee9" },
      { n: "Midnight Navy", c: "#1c2740" },
      { n: "Wine Red", c: "#5a1d29" },
      { n: "Bottle Green", c: "#1e3a30" },
      { n: "Cappuccino", c: "#8a7360" },
      { n: "Jet Black", c: "#141415" },
    ],
  },
  {
    id: "glass",
    name: "Glass Doors",
    desc: "Toughened glass shutters with a slim frame, great for display cabinets.",
    shades: [
      { n: "Smoked Bronze", c: "#3a2f26" },
      { n: "Grey Tint", c: "#3d4248" },
      { n: "Frosted", c: "#cfd4d6", frost: true },
    ],
  },
  {
    id: "carved",
    name: "Classic Carved",
    desc: "Grooved panels with a timeless, homely feel.",
    shades: [
      { n: "Cream", c: "#e6dbc6" },
      { n: "Antique White", c: "#f1ece2" },
      { n: "Olive", c: "#6e7158" },
      { n: "Teak Wood", c: "#c48a55", set: "oakl" },
    ],
  },
  {
    id: "stone",
    name: "Stone Look",
    desc: "The rich look of marble and stone on every door.",
    shades: [
      { n: "White Marble", c: "#ffffff", set: "marblew" },
      { n: "Nero Marble", c: "#ffffff", set: "marbleb" },
      { n: "Silver Onyx", c: "#ffffff", set: "onyx" },
      { n: "Travertine", c: "#ffffff", set: "trav" },
      { n: "Concrete", c: "#ffffff", set: "concrete" },
    ],
  },
  {
    id: "metal",
    name: "Metal Shine",
    desc: "A warm metallic glow for a statement kitchen.",
    shades: [
      { n: "Champagne Gold", c: "#e8c98e", set: "steel" },
      { n: "Rose Gold", c: "#e3ad9c", set: "steel" },
      { n: "Copper", c: "#d08a62", set: "steel" },
      { n: "Gunmetal", c: "#6d7075", set: "steel" },
    ],
  },
  {
    id: "steel",
    name: "Stainless Steel",
    desc: "Brushed steel that will not rust. Built for heavy daily cooking.",
    shades: [
      { n: "Brushed Steel", c: "#ffffff", set: "steel" },
      { n: "Black Steel", c: "#55585d", set: "steel" },
    ],
  },
]

export const COUNTERS: Finish = {
  id: "counter",
  name: "Countertop",
  desc: "Tops that take heat, spills and daily chopping.",
  shades: [
    { n: "Speckled Quartz", c: "#ffffff", set: "quartz" },
    { n: "White Marble", c: "#ffffff", set: "marblew" },
    { n: "Nero Marble", c: "#ffffff", set: "marbleb" },
    { n: "Granite", c: "#ffffff", set: "granite" },
    { n: "Terrazzo", c: "#ffffff", set: "terrazzo" },
    { n: "Silver Onyx", c: "#ffffff", set: "onyx" },
    { n: "Oak Wood Top", c: "#ffffff", set: "oakl" },
    { n: "Concrete", c: "#ffffff", set: "concrete" },
  ],
}

export const SPLASHES: Finish = {
  id: "splash",
  name: "Backsplash",
  desc: "The wall between your top and wall cabinets.",
  shades: [
    { n: "Subway Tiles", c: "#ffffff", set: "subway" },
    { n: "Sage Subway Tiles", c: "#c3d0bd", set: "subway" },
    { n: "Mint Square Tiles", c: "#ffffff", set: "square" },
    { n: "Terrazzo", c: "#ffffff", set: "terrazzo" },
    { n: "Marble Slab", c: "#ffffff", set: "marblew" },
    { n: "Onyx Slab", c: "#ffffff", set: "onyx" },
    { n: "Oak Panel", c: "#ffffff", set: "oakl" },
    { n: "Navy Paint", c: "#27324a" },
  ],
}

export const ZONES: { id: ZoneId; name: string; kind: ZoneKind }[] = [
  { id: "base", name: "Base cabinets", kind: "door" },
  { id: "wall", name: "Wall cabinets", kind: "door" },
  { id: "tall", name: "Tall units", kind: "door" },
  { id: "counter", name: "Countertop", kind: "counter" },
  { id: "splash", name: "Backsplash", kind: "splash" },
]

const fin = (id: string) => DOOR_FINISHES.find((f) => f.id === id) as Finish

export const DEFAULT_DESIGN: Design = {
  base: { f: fin("matte"), s: fin("matte").shades[0] },
  wall: { f: fin("matte"), s: fin("matte").shades[1] },
  tall: { f: fin("laminate"), s: fin("laminate").shades[1] },
  counter: { f: COUNTERS, s: COUNTERS.shades[0] },
  splash: { f: SPLASHES, s: SPLASHES.shades[0] },
}

/** CSS for a swatch tile that previews a shade without loading the 3D scene. */
export function swatchStyle(f: Finish, s: Shade): CSSProperties {
  if (s.set) {
    const image = `url(${STUDIO_ASSETS}/tex/${SETS[s.set].map}.webp)`
    return s.c.toLowerCase() === "#ffffff"
      ? { backgroundImage: image, backgroundSize: "cover" }
      : { backgroundImage: image, backgroundColor: s.c, backgroundBlendMode: "multiply", backgroundSize: "cover" }
  }
  if (f.id === "gloss") return { background: `radial-gradient(circle at 30% 25%,rgba(255,255,255,.55),transparent 38%),${s.c}` }
  if (f.id === "metal") return { background: `linear-gradient(135deg,rgba(255,255,255,.45),transparent 45%,rgba(0,0,0,.25)),${s.c}` }
  if (f.id === "glass") return { background: `linear-gradient(135deg,rgba(255,255,255,.4),transparent 40%),${s.c}` }
  if (f.id === "carved") return { background: `repeating-linear-gradient(90deg,rgba(0,0,0,.12) 0 2px,transparent 2px 9px),${s.c}` }
  return { background: s.c }
}
