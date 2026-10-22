// EBONY Homepage Content — AI-Firstified, Warm Luxury, Zero Jargon
// Less is Luxury. Short, human, beautiful English for real families.

export interface HomeContent {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    scrollHint: string
  }
  trustStrip: { value: string; label: string }[]
  exploreDesigns: {
    kicker: string
    title: string
    subtitle: string
    cards: {
      id: string
      title: string
      badge: string
      description: string
      buttonText: string
      href: string
      image: string
    }[]
  }
  collections: {
    kicker: string
    title: string
    subtitle: string
    layouts: {
      id: string
      name: string
      line: string
      tag: string
      image: string
      href: string
    }[]
  }
  uniqueKitchens: {
    kicker: string
    title: string
    subtitle: string
    cards: {
      id: string
      icon: string
      title: string
      line: string
      image: string
      tag: string
    }[]
  }
  process: {
    kicker: string
    title: string
    subtitle: string
    steps: {
      num: string
      title: string
      line: string
      desc: string
    }[]
    cta: string
  }
  finishes: {
    kicker: string
    title: string
    subtitle: string
    swatches: {
      id: string
      name: string
      line: string
      colorHint: string
      tag: string
    }[]
  }
  wardrobes: {
    kicker: string
    title: string
    subtitle: string
    types: {
      id: string
      name: string
      line: string
      image: string
      href: string
      buttonText: string
    }[]
  }
  fittings: {
    kicker: string
    title: string
    subtitle: string
    items: {
      id: string
      title: string
      line: string
      image: string
    }[]
    brandsKicker: string
    trustedBrands: string[]
  }
  projects: {
    kicker: string
    title: string
    subtitle: string
    filters: { id: string; label: string }[]
    items: {
      id: string
      title: string
      location: string
      category: string
      image: string
    }[]
  }
  testimonials: {
    kicker: string
    title: string
    subtitle: string
    items: {
      id: string
      name: string
      city: string
      quote: string
      avatar: string
      rating: number
    }[]
  }
  whyLoveUs: {
    kicker: string
    title: string
    subtitle: string
    points: {
      id: string
      title: string
      line: string
      icon: string
      image: string
    }[]
    footnote: {
      text: string
      label: string
      href: string
    }
  }
  finalCta: {
    kicker: string
    title: string
    subtitle: string
    primaryBtn: string
    callBtn: string
  }
}

export const HOME_CONTENT: HomeContent = {
  hero: {
    eyebrow: "Ebony · Modular Kitchens & Interiors · Raipur",
    title: "Your Dream Kitchen Awaits!",
    subtitle: "Beautiful kitchens, built for your home and your budget.",
    primaryCta: { label: "Explore Designs", href: "#collections" },
    secondaryCta: { label: "Free Consultation", href: "#consultation" },
    scrollHint: "Scroll to explore",
  },

  trustStrip: [
    { value: "15+", label: "Years of happy kitchens" },
    { value: "500+", label: "Colours & finishes" },
    { value: "100%", label: "Custom made for your space" },
    { value: "10 Years", label: "Warranty on woodwork" },
  ],

  exploreDesigns: {
    kicker: "WHAT WE CREATE FOR YOU",
    title: "Explore Modular Designs",
    subtitle: "Kitchens, wardrobes, dressing rooms and more, made to fit your life.",
    cards: [
      {
        id: "kitchens",
        title: "Modular Kitchens",
        badge: "6 Shapes · 12 Styles",
        description: "Smart, beautiful kitchens that make cooking a joy.",
        buttonText: "See Kitchens",
        href: "/kitchens",
        image: "/img/modular-kitchen-showcase.jpg",
      },
      {
        id: "wardrobes",
        title: "Bespoke Wardrobes",
        badge: "Sliding & Hinged",
        description: "Roomy wardrobes with a place for everything you own.",
        buttonText: "See Wardrobes",
        href: "/wardrobes",
        image: "/img/wardrobe-bespoke-real.jpg",
      },
      {
        id: "closets",
        title: "Walk-in Dressing Rooms",
        badge: "Warm Light Suites",
        description: "Your own dressing room, neat, illuminated and stylish.",
        buttonText: "See Closets",
        href: "/walk-in-closets",
        image: "/img/walk-in-closet-luxury.jpg",
      },
      {
        id: "living-bar",
        title: "Bar & TV Units",
        badge: "Custom Living Joinery",
        description: "Stylish corners for family gatherings and weekend guests.",
        buttonText: "See Designs",
        href: "/projects#bar-unit",
        image: "/img/bar-unit-luxury.jpg",
      },
    ],
  },

  // Section 3: OUR COLLECTIONS (The Heart of the Site - 6 Shapes Grid)
  collections: {
    kicker: "OUR COLLECTIONS",
    title: "OUR COLLECTIONS",
    subtitle: "Find the shape that fits your home. Click any layout to explore.",
    layouts: [
      {
        id: "l-shape",
        name: "L-Shaped",
        line: "Perfect for corners. More space to move.",
        tag: "Most Popular",
        image: "/img/kitchen-contemporary-real.jpg",
        href: "/kitchens#l-shape",
      },
      {
        id: "u-shape",
        name: "U-Shaped",
        line: "More storage, more room to cook together.",
        tag: "Family Sized",
        image: "/img/kitchen-layout-real.jpg",
        href: "/kitchens#u-shape",
      },
      {
        id: "straight-parallel",
        name: "Straight / Parallel",
        line: "Smart and simple — ideal for smaller homes.",
        tag: "Smart & Compact",
        image: "/img/kitchen-detail-real.jpg",
        href: "/kitchens#parallel",
      },
      {
        id: "island",
        name: "Island Kitchen",
        line: "Modern and open — cook, chat, and gather.",
        tag: "Spacious Living",
        image: "/img/kitchen-island-real.jpg",
        href: "/kitchens#island",
      },
      {
        id: "galley",
        name: "Galley Kitchen",
        line: "Two parallel counters with a central walkway — chef-grade efficiency.",
        tag: "Chef's Layout",
        image: "/img/kitchen-twotone-twist.jpg",
        href: "/kitchens#parallel",
      },
      {
        id: "open-kitchen",
        name: "Open Kitchen",
        line: "Flows beautifully into your living room.",
        tag: "Modern Lifestyle",
        image: "/img/kitchen-garden-green.jpg",
        href: "/kitchens#open",
      },
    ],
  },

  // Section 4: NEW SECTION — KITCHENS AS UNIQUE AS YOUR HOME
  uniqueKitchens: {
    kicker: "DESIGNS FOR EVERY FAMILY & BUDGET",
    title: "Kitchens as Unique as Your Home",
    subtitle: "Whatever your space or budget, Ebony creates a kitchen you'll love.",
    cards: [
      {
        id: "small-homes",
        icon: "🏠",
        title: "For Small Homes",
        line: "Smart storage, zero wasted space.",
        image: "/img/kitchen-small-spaces.jpg",
        tag: "Compact Living",
      },
      {
        id: "luxury-homes",
        icon: "✨",
        title: "Luxury for Big Homes",
        line: "Rich finishes, a kitchen that feels like a showroom.",
        image: "/img/kitchen-glass-glow.jpg",
        tag: "Grand Villas",
      },
      {
        id: "budget-homes",
        icon: "💰",
        title: "Beautiful on a Budget",
        line: "Premium look, without the premium price tag.",
        image: "/img/kitchen-curves-arches.jpg",
        tag: "Value First",
      },
      {
        id: "indian-cooking",
        icon: "🍳",
        title: "Built for Indian Cooking",
        line: "Strong, easy to clean, made for daily tadka and spice.",
        image: "/img/kitchen-rasoi-special.jpg",
        tag: "Daily Cooking",
      },
      {
        id: "open-airy",
        icon: "🌿",
        title: "Open & Airy",
        line: "Your kitchen, beautifully connected to your living room.",
        image: "/img/kitchen-style-boho.jpg",
        tag: "Sunlight & Calm",
      },
      {
        id: "smart-storage",
        icon: "🗄️",
        title: "Smart Storage",
        line: "A place for everything. Everything in its place.",
        image: "/img/kitchen-colour-pop.jpg",
        tag: "Organized Living",
      },
    ],
  },

  // Section 5: OUR PROCESS — 3 Steps Only
  process: {
    kicker: "HOW IT WORKS",
    title: "Your Dream Kitchen in 3 Steps",
    subtitle: "Simple, stress-free, and transparent from first sketch to final handover.",
    steps: [
      {
        num: "01",
        title: "Meet & Plan",
        line: "Tell us your dream.",
        desc: "We listen to what you want, measure your space, and understand your family's routine.",
      },
      {
        num: "02",
        title: "Design & Build",
        line: "See it in 3D first.",
        desc: "Watch your kitchen come to life in realistic 3D, then we build it in our own factory.",
      },
      {
        num: "03",
        title: "Install & Enjoy",
        line: "Fitted in just 3 days.",
        desc: "Pre-finished modular units are installed cleanly at your home without dust or mess.",
      },
    ],
    cta: "Book Free Consultation",
  },

  finishes: {
    kicker: "COLOURS & TEXTURES",
    title: "Colours & Finishes You'll Love",
    subtitle: "500+ colours and finishes. Glossy, matte, wood-look and more.",
    swatches: [
      {
        id: "satin",
        name: "Smooth Satin",
        line: "A silky, seamless painted look.",
        colorHint: "#EDE8E1",
        tag: "Matte Lacquer",
      },
      {
        id: "laminate",
        name: "Scratch-Safe Laminate",
        line: "Tough, easy to wipe, hundreds of colours.",
        colorHint: "#C2B6A6",
        tag: "Durable",
      },
      {
        id: "acrylic",
        name: "Gloss or Soft Matte",
        line: "Mirror shine or velvet-soft touch.",
        colorHint: "#1E293B",
        tag: "Acrylic",
      },
      {
        id: "glass",
        name: "Glass Doors",
        line: "Clear or tinted bronze, to show off your favourites.",
        colorHint: "#4B443B",
        tag: "Vitrine",
      },
      {
        id: "membrane",
        name: "Classic Carved Look",
        line: "Soft grooves and curves, no sharp edges.",
        colorHint: "#D4C7B5",
        tag: "Membrane",
      },
      {
        id: "stone",
        name: "Stone Look",
        line: "Looks like marble. Handles hot pans and stains.",
        colorHint: "#7E7468",
        tag: "Quartz & Ceramic",
      },
      {
        id: "metal",
        name: "Metal Shine",
        line: "Gold, bronze or silver tones for a rich touch.",
        colorHint: "#B8923A",
        tag: "Metallic",
      },
      {
        id: "steel",
        name: "Stainless Steel",
        line: "Strong, rust-free, great near the sink.",
        colorHint: "#94A3B8",
        tag: "SS 304",
      },
    ],
  },

  wardrobes: {
    kicker: "STORAGE & CLOSETS",
    title: "Space For Everything You Own",
    subtitle: "Wardrobes that slide or swing open, and dressing rooms made just for you.",
    types: [
      {
        id: "sliding",
        name: "Sliding Wardrobes",
        line: "Doors glide open and close softly. No swing space needed.",
        image: "/img/wardrobe-bespoke-real.jpg",
        href: "/wardrobes",
        buttonText: "See Wardrobes",
      },
      {
        id: "hinged",
        name: "Hinged Wardrobes",
        line: "Open wide and see everything at once with soft-close hinges.",
        image: "/img/wardrobe-card.jpg",
        href: "/wardrobes",
        buttonText: "See Wardrobes",
      },
      {
        id: "walk-in",
        name: "Walk-in Dressing Rooms",
        line: "Your own dressing room with soft integrated lights and smart storage.",
        image: "/img/walk-in-closet-luxury.jpg",
        href: "/walk-in-closets",
        buttonText: "See Closets",
      },
    ],
  },

  fittings: {
    kicker: "HARDWARE & MOTION",
    title: "Little Things, Big Comfort",
    subtitle: "Drawers that glide shut without a sound, and fittings from brands we trust.",
    items: [
      {
        id: "drawers",
        title: "Soft-Close Drawers",
        line: "Quiet and smooth, every single time, even with heavy pots.",
        image: "/img/hardware-fittings-luxury.jpg",
      },
      {
        id: "lift-up",
        title: "Lift-Up Doors",
        line: "They open upward effortlessly and stay where you leave them.",
        image: "/img/craftsmanship-detail.jpg",
      },
      {
        id: "magic-corner",
        title: "Corner Magic Trays",
        line: "Reach every corner with ease without bending or digging.",
        image: "/img/kitchen-detail-real.jpg",
      },
      {
        id: "mirror",
        title: "Pull-Out Mirror",
        line: "A full-length 360° mirror that hides neatly inside your wardrobe.",
        image: "/img/pullout-mirror-real.jpg",
      },
    ],
    brandsKicker: "FITTINGS FROM TRUSTED GLOBAL BRANDS",
    trustedBrands: ["Blum", "Häfele", "Hettich", "Salice", "Ebco"],
  },

  projects: {
    kicker: "COMPLETED WORK",
    title: "Homes We've Made Beautiful",
    subtitle: "Real kitchens and wardrobes from Raipur, Bilaspur and nearby.",
    filters: [
      { id: "all", label: "All Projects" },
      { id: "kitchen", label: "Kitchens" },
      { id: "wardrobe", label: "Wardrobes" },
      { id: "closet", label: "Closets" },
      { id: "living", label: "Bar & TV" },
    ],
    items: [
      {
        id: "proj-1",
        title: "Island Kitchen",
        location: "Shankar Nagar, Raipur",
        category: "kitchen",
        image: "/img/kitchen-island-real.jpg",
      },
      {
        id: "proj-2",
        title: "Floor-to-Ceiling Sliding Wardrobe",
        location: "VIP Road, Raipur",
        category: "wardrobe",
        image: "/img/wardrobe-bespoke-real.jpg",
      },
      {
        id: "proj-3",
        title: "Walk-in Closet with Glass Doors",
        location: "Civil Lines, Raipur",
        category: "closet",
        image: "/img/walk-in-closet-luxury.jpg",
      },
      {
        id: "proj-4",
        title: "Glowing Bar Unit",
        location: "Devendra Nagar, Raipur",
        category: "living",
        image: "/img/bar-unit-luxury.jpg",
      },
      {
        id: "proj-5",
        title: "Modern L-Shape Kitchen",
        location: "Bilaspur",
        category: "kitchen",
        image: "/img/kitchen-contemporary-real.jpg",
      },
      {
        id: "proj-6",
        title: "TV Unit with Wood Panel",
        location: "Raipur",
        category: "living",
        image: "/img/living-room-showcase.jpg",
      },
    ],
  },

  testimonials: {
    kicker: "HAPPY HOMES",
    title: "Stories From Happy Homes",
    subtitle: "Real feedback from homeowners who trust Ebony.",
    items: [
      {
        id: "t-1",
        name: "Anita Sharma",
        city: "VIP Road, Raipur",
        quote: "Our island kitchen looks stunning and the installation was clean, fast, and completely hassle-free.",
        avatar: "AS",
        rating: 5,
      },
      {
        id: "t-2",
        name: "Rahul Verma",
        city: "Bilaspur",
        quote: "From 3D design to installation, the team was professional, patient, and completely honest.",
        avatar: "RV",
        rating: 5,
      },
      {
        id: "t-3",
        name: "Neha & Karan",
        city: "Shankar Nagar, Raipur",
        quote: "Premium German finish without the stress. Ebony truly transformed our apartment kitchen.",
        avatar: "NK",
        rating: 5,
      },
      {
        id: "t-4",
        name: "Manoj Mandre",
        city: "Bhilai",
        quote: "Understood our cooking style and delivered smooth soft-close fittings and custom pantry storage.",
        avatar: "MM",
        rating: 5,
      },
      {
        id: "t-5",
        name: "Dr. Sunita Patel",
        city: "Durg",
        quote: "The slide-out mirror and pull-down wardrobe lifts made our master bedroom dressing so easy.",
        avatar: "SP",
        rating: 5,
      },
      {
        id: "t-6",
        name: "Vikram Agarwal",
        city: "Civil Lines, Raipur",
        quote: "Outstanding factory finish. No noisy carpentry or dust at home. Exactly what we envisioned.",
        avatar: "VA",
        rating: 5,
      },
    ],
  },

  // Section: Why Families Love Us (replaces Why Ebony / Why Choose Us)
  whyLoveUs: {
    kicker: "THE EBONY PROMISE",
    title: "Why Families Love Us",
    subtitle: "Four simple reasons why homeowners trust Ebony for their dream kitchen.",
    points: [
      {
        id: "delivery",
        title: "Clean Installation",
        line: "Pre-fabricated in our factory for quick, clean assembly with zero messy cutting at your home.",
        icon: "Clock",
        image: "/img/process-engineering.jpg",
      },
      {
        id: "pricing",
        title: "Transparent Pricing",
        line: "Clear quotes. A luxury look and finish without hidden costs.",
        icon: "ShieldCheck",
        image: "/img/kitchen-curves-arches.jpg",
      },
      {
        id: "warranty",
        title: "10-Year Warranty",
        line: "Checked 48 times before handover, backed by 15+ years of trusted care.",
        icon: "Award",
        image: "/img/core-materials-luxury.jpg",
      },
      {
        id: "visit",
        title: "Free Design Visit",
        line: "Sit down with our designers, touch material samples, and see your 3D plan.",
        icon: "Sparkles",
        image: "/img/craftsmanship-detail.jpg",
      },
    ],
    footnote: {
      text: "Strong materials where it matters: waterproof plywood, strong board and stainless steel.",
      label: "Learn more",
      href: "/finishes",
    },
  },

  // Final CTA: Let's Build Your Dream Kitchen
  finalCta: {
    kicker: "PRIVATE STUDIO & CONSULTATION",
    title: "Let's Build Your Dream Kitchen",
    subtitle: "Visit our Raipur studio or drop your details. We'll design your custom 3D plan.",
    primaryBtn: "Book Free Consultation",
    callBtn: "Call +91 79742 09352",
  },
}
