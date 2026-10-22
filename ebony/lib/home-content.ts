// EBONY Homepage Content — Simplified, Human, Warm & Friendly
// 60% reduced text. No technical jargon. Written for everyday homeowners.

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
      bestFor: string
      image: string
    }[]
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
    items: {
      id: string
      name: string
      city: string
      quote: string
      avatar: string
      rating: number
    }[]
  }
  promise: {
    kicker: string
    title: string
    subtitle: string
    points: {
      id: string
      title: string
      line: string
      image: string
    }[]
    materialsFootnote: {
      text: string
      label: string
      href: string
    }
  }
  finalCta: {
    title: string
    subtitle: string
    primaryBtn: string
    callBtn: string
  }
}

export const HOME_CONTENT: HomeContent = {
  hero: {
    eyebrow: "Modular Kitchens & Wardrobes · Raipur",
    title: "Kitchens You'll Love Coming Home To.",
    subtitle:
      "Beautiful modular kitchens and wardrobes, made in our own factory and fitted in just 3 days.",
    primaryCta: { label: "See Our Designs", href: "#explore-designs" },
    secondaryCta: { label: "Book a Visit", href: "/contact" },
    scrollHint: "Scroll to explore",
  },

  trustStrip: [
    { value: "15+", label: "Years of happy kitchens" },
    { value: "500+", label: "Colours & finishes" },
    { value: "3 Days", label: "To fit it at your home" },
    { value: "10 Years", label: "Woodwork warranty" },
  ],

  exploreDesigns: {
    kicker: "WHAT WE MAKE",
    title: "Explore Modular Designs",
    subtitle: "Kitchens, wardrobes, dressing rooms and more, made to fit your home.",
    cards: [
      {
        id: "kitchens",
        title: "Modular Kitchens",
        badge: "5 Layouts · 12 Styles",
        description: "Smart, beautiful kitchens that make cooking a joy.",
        buttonText: "See Kitchens",
        href: "/kitchens",
        image: "/img/kitchen-island-real.jpg",
      },
      {
        id: "wardrobes",
        title: "Bespoke Wardrobes",
        badge: "Roomy Storage",
        description: "Roomy wardrobes with a place for everything you own.",
        buttonText: "See Wardrobes",
        href: "/wardrobes",
        image: "/img/wardrobe-bespoke-real.jpg",
      },
      {
        id: "closets",
        title: "Walk-in Closets",
        badge: "Glass & Light Suites",
        description: "Your own dressing room, neat, illuminated and stylish.",
        buttonText: "See Closets",
        href: "/walk-in-closets",
        image: "/img/walk-in-closet-luxury.jpg",
      },
      {
        id: "living-bar",
        title: "Bar & TV Units",
        badge: "Custom Joinery",
        description: "Stylish corners for family gatherings and weekend guests.",
        buttonText: "See Designs",
        href: "/projects#bar-unit",
        image: "/img/bar-unit-luxury.jpg",
      },
    ],
  },

  collections: {
    kicker: "OUR COLLECTIONS",
    title: "Your dream kitchen awaits!",
    subtitle: "Pick the shape that fits your space.",
    layouts: [
      {
        id: "island",
        name: "Island",
        line: "A centre counter for cooking, chatting and breakfast.",
        bestFor: "Big, open homes. Needs a room about 14 ft wide.",
        image: "/img/kitchen-island-real.jpg",
      },
      {
        id: "l-shape",
        name: "L-Shape",
        line: "Uses two walls and keeps everything within easy reach.",
        bestFor: "Most homes and medium kitchens.",
        image: "/img/kitchen-contemporary-real.jpg",
      },
      {
        id: "u-shape",
        name: "U-Shape",
        line: "Three walls of storage and counter space.",
        bestFor: "Big families and lots of cooking.",
        image: "/img/kitchen-layout-real.jpg",
      },
      {
        id: "parallel",
        name: "Parallel",
        line: "Two facing walls with a walkway in the middle.",
        bestFor: "Narrow rooms and flats.",
        image: "/img/kitchen-detail-real.jpg",
      },
      {
        id: "straight",
        name: "Straight",
        line: "Everything along one wall. Simple, neat and compact.",
        bestFor: "Small homes, studio apartments and tight spaces.",
        image: "/img/kitchen-small-spaces.jpg",
      },
    ],
  },

  finishes: {
    kicker: "SURFACE CHOICES",
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
        line: "Tough, easy to wipe, many colours.",
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
        tag: "Stone & Quartz",
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
        name: "Walk-in Closets",
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
    subtitle: "Smooth drawers, smart corners and fittings from brands we trust.",
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
    kicker: "REAL HOMES · REAL REVIEWS",
    title: "Stories From Happy Homes",
    items: [
      {
        id: "t-1",
        name: "Anita Sharma",
        city: "Raipur",
        quote:
          "Excellent design sense and flawless execution. Our kitchen looks stunning and the installation was super quick.",
        avatar: "AS",
        rating: 5,
      },
      {
        id: "t-2",
        name: "Rahul Verma",
        city: "Bilaspur",
        quote:
          "From design to installation, the entire team was professional. Highly recommended for modular interiors.",
        avatar: "RV",
        rating: 5,
      },
      {
        id: "t-3",
        name: "Neha & Karan",
        city: "Raipur",
        quote:
          "Premium quality and great attention to detail. Ebony truly transforms spaces into something special.",
        avatar: "NK",
        rating: 5,
      },
      {
        id: "t-4",
        name: "Manoj Mandre",
        city: "Mumbai",
        quote:
          "EBONY understood our needs, conceptualised the design, and executed smart German engineering.",
        avatar: "MM",
        rating: 5,
      },
      {
        id: "t-5",
        name: "Mr. Kanyalal",
        city: "Delhi",
        quote:
          "In one word — Excellent! Marvellous quality and humble team. Highly satisfied with their service.",
        avatar: "MK",
        rating: 5,
      },
      {
        id: "t-6",
        name: "C.L. Sandesh",
        city: "Bangalore",
        quote:
          "The finishing and accuracy EBONY provides are unmatchable. Installation services were beyond expectation.",
        avatar: "CS",
        rating: 5,
      },
    ],
  },

  promise: {
    kicker: "WHY EBONY",
    title: "The EBONY Promise",
    subtitle: "What you can always count on.",
    points: [
      {
        id: "factory",
        title: "Made in Our Own Factory",
        line: "Cut on German machines. Neat, exact, and no noisy cutting at your home.",
        image: "/img/craftsmanship-detail.jpg",
      },
      {
        id: "finishes-point",
        title: "Your Size, Your Colour",
        line: "500+ finishes, made to fit your room down to the millimeter.",
        image: "/img/kitchen-boho-luxury.jpg",
      },
      {
        id: "three-days",
        title: "Fitted in 3 Days",
        line: "Ready-made units and a clean, dust-free fitting at your residence.",
        image: "/img/process-engineering.jpg",
      },
      {
        id: "warranty",
        title: "10-Year Warranty",
        line: "Checked 48 times before we hand it over, backed by 15+ years of care.",
        image: "/img/core-materials-luxury.jpg",
      },
    ],
    materialsFootnote: {
      text: "Strong materials where it matters: waterproof plywood, strong board and stainless steel.",
      label: "Learn more",
      href: "/finishes",
    },
  },

  finalCta: {
    title: "Let's Plan Your Kitchen Together",
    subtitle:
      "Visit our Raipur studio or call us. We'll help you pick the right design for your space.",
    primaryBtn: "Book a Visit",
    callBtn: "Call +91 76669 02365",
  },
}
