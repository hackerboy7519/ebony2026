// EBONY Content — All real copy from ebony.co.in
// No invented facts, stats, awards, or testimonials.

export const BRAND = {
  name: "EBONY",
  tagline: "Every space begins with a thought.",
  established: 2009,
  experience: "15+",
  location: "Raipur, C.G.",
  phone: "+91 76669 02365", // from the site button — confirm with client
  email: "info@ebony.co.in",
  copyright: `© ${new Date().getFullYear()} EBONY Modular Kulture. All rights reserved.`,
} as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Three Steps", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export const HERO = {
  lines: [
    { text: "Every space begins", color: "ebony" as const },
    { text: "with a thought.", color: "gold" as const },
  ],
  subtitle:
    "Luxury modular interiors — German-engineered, installed in 3 days, with a 0% defect policy.",
  cta: "Book a Consultation",
} as const

export const PHILOSOPHY = {
  eyebrow: "Our Philosophy",
  heading: ["Crafting spaces", "that outlive", "their moment."],
  body: "EBONY Modular Kulture is committed to creating new experiences, ambitions, and ways of life. Innovation is at the heart of every project — designing, manufacturing, and delivering perfection across India.",
  pillars: [
    {
      number: "01",
      title: "Visionary Design",
      description:
        "Each project begins with deep conversation — understanding how you live, what you love, and how your space should make you feel.",
    },
    {
      number: "02",
      title: "German Engineering",
      description:
        "Our manufacturing units are engineered in Germany, fusing Teutonic precision with the warmth and sensibility of Indian living.",
    },
    {
      number: "03",
      title: "Enduring Craft",
      description:
        "Over 15 years, EBONY has quietly become India's benchmark for modular luxury — trusted by families who value excellence.",
    },
  ],
} as const

export const COLLECTIONS = [
  {
    id: "kitchen",
    tag: "Culinary Spaces",
    title: "Modular Kitchen",
    count: "300+",
    countLabel: "designs",
    description:
      "Where function meets artistry. Every kitchen we craft is a personal universe — engineered for flow, designed for beauty.",
    image: "/img/kitchen-card.jpg",
    alt: "Luxury modular kitchen with ebony cabinetry and gold handles",
  },
  {
    id: "wardrobe",
    tag: "Personal Sanctuaries",
    title: "Wardrobe",
    count: "100+",
    countLabel: "configurations",
    description:
      "Bespoke wardrobes that transform your morning ritual into a ceremony of calm, order, and quiet luxury.",
    image: "/img/wardrobe-card.jpg",
    alt: "Walk-in wardrobe with ebony fluted doors and gold rails",
  },
  {
    id: "bedroom",
    tag: "Sleep in Luxury",
    title: "Bed Set",
    count: "50+",
    countLabel: "collections",
    description:
      "Bedroom furniture that understands the poetry of rest — crafted for those who believe that how you sleep shapes how you live.",
    image: "/img/bedroom-card.jpg",
    alt: "Master bedroom with ebony upholstered headboard and gold accents",
  },
] as const

export const FEATURES = [
  {
    icon: "layers",
    title: "Vertical Integration",
    description:
      "EBONY controls every phase — design, manufacturing, logistics, and distribution — ensuring no compromise at any step.",
  },
  {
    icon: "box",
    title: "Bespoke for Every Home",
    description:
      "No two EBONY projects are alike. Each space is meticulously planned and made with utmost precision, team of experts and modernised machinery.",
  },
  {
    icon: "shield",
    title: "Lifetime Support",
    description:
      "We are with you long after the last panel is fitted. Lifetime after-sales support, because every EBONY home deserves enduring care.",
  },
  {
    icon: "globe",
    title: "Pan-India Network",
    description:
      "300+ dealers and distributors, 10+ franchise locations — Mumbai, Delhi, Bangalore, Pune, Ahmedabad, and Raipur.",
  },
] as const

export const STATS = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 85, suffix: "%+", label: "Client Retention" },
  { value: 300, suffix: "+", label: "Dealers & Distributors" },
  { value: 10, suffix: "+", label: "Franchise Locations" },
] as const

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Design",
    description:
      "EBONY is a synonym for exceptional quality and variety. We offer a myriad of finishes — Super Matt, Crystal Glass, Acrylic, and more, in hundreds of colours.",
    stat: "500+ Finishes",
  },
  {
    number: "02",
    title: "Manufacturing",
    description:
      "Smartly engineered interiors reflect your approach towards life. Our par-excellence manufacturing facility ensures high-quality products that stand the test of time.",
    stat: "Zero Defect Policy",
  },
  {
    number: "03",
    title: "Engineering",
    description:
      "Our manufacturing units are engineered in Germany, associated with quality, precision, and technical brilliance. Every joint, every panel, every hinge.",
    stat: "Made in Germany",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "A better present trails a promising future. At EBONY, we understand the worth of our existing customers, and devote consistent quality and reliable services.",
    stat: "3 Days Average",
  },
] as const

export const CITIES = [
  "Raipur",
  "Bilaspur",
  "Bhilai",
  "Durg",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
] as const

export const REFERENCE_COLLECTIONS = [
  {
    id: "kitchen",
    title: "Modular Kitchens",
    tagline: "Functional. Elegant. Built for life.",
    description: "Honed marble waterfall islands, soft-close German lift-ups, and moisture-resistant marine core.",
    image: "/img/kitchen-island-luxury.jpg",
    href: "/collections#kitchen",
  },
  {
    id: "wardrobe",
    title: "Wardrobes",
    tagline: "Organised beautifully.",
    description: "Bespoke walk-ins with smoked bronze fluted glass, 3000K vertical LED reveals, and Italian hardware.",
    image: "/img/wardrobe-detail-shot.jpg",
    href: "/collections#wardrobe",
  },
  {
    id: "living",
    title: "Living & TV Units",
    tagline: "Designed for togetherness.",
    description: "Acoustic fluted walnut paneling, floating media consoles, and seamless concealed cable integration.",
    image: "/img/living-room-showcase.jpg",
    href: "/collections#living",
  },
  {
    id: "interiors",
    title: "Complete Home Interiors",
    tagline: "A unified design language.",
    description: "Holistic architectural spaces synchronized across living, culinary, and master suite sanctuaries.",
    image: "/img/master-suite-luxury.jpg",
    href: "/collections#bedroom",
  },
] as const

export const VALUE_PILLARS = [
  {
    icon: "engineering",
    title: "GERMAN ENGINEERING",
    description: "Precision Blum & Hettich motion hardware & long-lasting materials.",
  },
  {
    icon: "timer",
    title: "3-DAY INSTALLATION",
    description: "From factory assembly to final handover, faster than ever.",
  },
  {
    icon: "homes",
    title: "10,000+ HAPPY HOMES",
    description: "Trusted by families across Central India & Pan-India network.",
  },
  {
    icon: "service",
    title: "END-TO-END SERVICE",
    description: "In-house design, German CNC machining, and certified installation.",
  },
] as const

export const EXPERIENCE_STEPS = [
  {
    number: "01",
    title: "CONSULTATION",
    description: "Understand your space, architectural layout, and lifestyle needs.",
  },
  {
    number: "02",
    title: "DESIGN & VISUALISE",
    description: "Get immersive 3D photorealistic renders & tactile material swatches.",
  },
  {
    number: "03",
    title: "3-DAY INSTALLATION",
    description: "Precision laser leveling, zero dust, and sign-off on 48-point audit.",
  },
] as const

export const CRAFTSMANSHIP_STATS = [
  { value: "2009", label: "ESTABLISHED" },
  { value: "10,000+", label: "HAPPY HOMES" },
  { value: "35+", label: "DESIGN PROFESSIONALS" },
] as const

export const FEATURED_PROJECTS = [
  {
    id: "shankar-nagar",
    category: "MODULAR KITCHEN",
    location: "Shankar Nagar, Raipur",
    title: "Penthouse Island with Fluted Walnut & Quartzite",
    image: "/img/project-shankar-nagar.jpg",
    details: "Custom Calacatta waterfall island with motorized Aventos lift-ups and brass pendant highlights.",
  },
  {
    id: "vip-road",
    category: "BESPOKE WARDROBE",
    location: "VIP Road Villa, Raipur",
    title: "Walk-In Sanctuary with Bronze Glass & Sensor Illumination",
    image: "/img/wardrobe-detail-shot.jpg",
    details: "Full-height smoked bronze aluminum profiles with motorized accessory trays and velvet drawer dividers.",
  },
  {
    id: "civil-lines",
    category: "COMPLETE HOME INTERIOR",
    location: "Civil Lines, Raipur",
    title: "Architectural Living & TV Lounge with Acoustic Millwork",
    image: "/img/living-room-showcase.jpg",
    details: "Travertine stone floating shelf with continuous fluted oak acoustic slats and integrated Dolby pass.",
  },
] as const

export const HOMEOWNER_TESTIMONIALS = [
  {
    name: "Anita Sharma",
    city: "Raipur",
    rating: 5,
    quote: "Excellent design sense and flawless execution. Our kitchen looks stunning and the installation was super quick.",
    avatar: "AS",
  },
  {
    name: "Rahul Verma",
    city: "Bilaspur",
    rating: 5,
    quote: "From design to installation, the entire team was professional. Highly recommended for modular interiors.",
    avatar: "RV",
  },
  {
    name: "Neha & Karan",
    city: "Raipur",
    rating: 5,
    quote: "Premium quality and great attention to detail. Ebony truly transforms spaces into something special.",
    avatar: "NK",
  },
] as const

