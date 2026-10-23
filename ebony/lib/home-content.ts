// EBONY Homepage Content — simple, warm words for real families.
// Rule of thumb: if a parent or grandparent can't understand a line on first read, rewrite it.

export interface HomeContent {
  hero: {
    eyebrow: string
    title: string
    accent: string
    subtitle: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  trustStrip: { end: number; suffix: string; label: string }[]
  exploreDesigns: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    cards: {
      id: string
      title: string
      badge: string
      description: string
      href: string
      image: string
    }[]
  }
  collections: {
    kicker: string
    title: string
    accent: string
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
    accent: string
    subtitle: string
    cards: {
      id: string
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
  styles: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    showMore: string
    showLess: string
  }
  finishes: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    benefits: string[]
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
    accent: string
    subtitle: string
    types: {
      id: string
      name: string
      line: string
      image: string
      href: string
    }[]
  }
  fittings: {
    kicker: string
    title: string
    accent: string
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
    accent: string
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
    accent: string
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
    accent: string
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
    accent: string
    subtitle: string
    formTitle: string
    formNote: string
    primaryBtn: string
  }
}

export const HOME_CONTENT: HomeContent = {
  hero: {
    eyebrow: "Modular kitchens & wardrobes · Raipur",
    title: "Beautiful kitchens,",
    accent: "made just for you.",
    subtitle: "Designed around your family, made in our own factory, and fitted in your home in about 3 days.",
    primaryCta: { label: "See Our Designs", href: "#explore-designs" },
    secondaryCta: { label: "Book a Home Visit", href: "#consultation" },
  },

  trustStrip: [
    { end: 15, suffix: "+", label: "Years making homes beautiful" },
    { end: 500, suffix: "+", label: "Colours & finishes to choose from" },
    { end: 3, suffix: " Days", label: "To fit your new kitchen" },
    { end: 10, suffix: " Years", label: "Warranty on woodwork" },
  ],

  exploreDesigns: {
    kicker: "What we make",
    title: "One team for",
    accent: "your whole home",
    subtitle: "Kitchens, wardrobes, dressing rooms and living room units — all designed to match.",
    cards: [
      {
        id: "kitchens",
        title: "Modular Kitchens",
        badge: "6 layouts · 12 styles",
        description: "Plenty of storage, easy to clean and a joy to cook in.",
        href: "/kitchens",
        image: "/img/modular-kitchen-showcase.jpg",
      },
      {
        id: "wardrobes",
        title: "Wardrobes",
        badge: "Sliding & swing doors",
        description: "Room for every outfit, with doors that close softly.",
        href: "/wardrobes",
        image: "/img/wardrobe-bespoke-real.jpg",
      },
      {
        id: "closets",
        title: "Walk-in Closets",
        badge: "Your own dressing room",
        description: "Open shelves, soft lights and a place for everything.",
        href: "/walk-in-closets",
        image: "/img/walk-in-closet-luxury.jpg",
      },
      {
        id: "living-bar",
        title: "Bar & TV Units",
        badge: "For your living room",
        description: "Stylish units for movie nights and weekend guests.",
        href: "/projects#bar-unit",
        image: "/img/bar-unit-luxury.jpg",
      },
    ],
  },

  collections: {
    kicker: "Kitchen layouts",
    title: "Pick the shape that",
    accent: "fits your home",
    subtitle: "Not sure which one is right? Tap a layout to see more — we'll help you choose.",
    layouts: [
      {
        id: "l-shape",
        name: "L-Shaped",
        line: "Uses two walls. Great for corners and most Indian homes.",
        tag: "Most popular",
        image: "/img/kitchen-contemporary-real.jpg",
        href: "/kitchens#l-shape",
      },
      {
        id: "u-shape",
        name: "U-Shaped",
        line: "Storage on three sides. Perfect for big families who cook a lot.",
        tag: "Most storage",
        image: "/img/kitchen-layout-real.jpg",
        href: "/kitchens#u-shape",
      },
      {
        id: "straight",
        name: "Straight",
        line: "Everything along one wall. Simple, neat and space-saving.",
        tag: "Small homes",
        image: "/img/kitchen-detail-real.jpg",
        href: "/kitchens#parallel",
      },
      {
        id: "island",
        name: "Island",
        line: "A counter in the middle to cook, chat and eat together.",
        tag: "Big & open",
        image: "/img/kitchen-island-real.jpg",
        href: "/kitchens#island",
      },
      {
        id: "parallel",
        name: "Parallel",
        line: "Two counters facing each other. Quick and easy to cook in.",
        tag: "Chef's favourite",
        image: "/img/kitchen-twotone-twist.jpg",
        href: "/kitchens#parallel",
      },
      {
        id: "open-kitchen",
        name: "Open Kitchen",
        line: "Opens into your living room, so you're never cut off from family.",
        tag: "Modern living",
        image: "/img/kitchen-garden-green.jpg",
        href: "/kitchens#open",
      },
    ],
  },

  uniqueKitchens: {
    kicker: "Made for your life",
    title: "A kitchen for",
    accent: "every family",
    subtitle: "Big home or small, any budget — we design around the way you live.",
    cards: [
      {
        id: "small-homes",
        title: "For Small Homes",
        line: "Smart storage that makes a small kitchen feel big.",
        image: "/img/kitchen-small-spaces.jpg",
        tag: "Small spaces",
      },
      {
        id: "luxury-homes",
        title: "For Big Homes",
        line: "Rich finishes and soft lighting that feel like a five-star hotel.",
        image: "/img/kitchen-glass-glow.jpg",
        tag: "Luxury",
      },
      {
        id: "budget-homes",
        title: "Beautiful on a Budget",
        line: "The premium look you want, at a price that works for you.",
        image: "/img/kitchen-curves-arches.jpg",
        tag: "Best value",
      },
      {
        id: "indian-cooking",
        title: "Made for Indian Cooking",
        line: "Tough surfaces and deep drawers for daily tadka and masala.",
        image: "/img/kitchen-rasoi-special.jpg",
        tag: "Daily cooking",
      },
      {
        id: "open-airy",
        title: "Open & Airy",
        line: "Light colours and open shelves that feel calm and fresh.",
        image: "/img/kitchen-style-boho.jpg",
        tag: "Calm & bright",
      },
      {
        id: "smart-storage",
        title: "Smart Storage",
        line: "A place for everything, so your counters stay clear.",
        image: "/img/kitchen-colour-pop.jpg",
        tag: "Clutter-proof",
      },
    ],
  },

  process: {
    kicker: "How it works",
    title: "Your new kitchen in 3 easy steps",
    subtitle: "Simple and easy, from the first chat to the day you start cooking.",
    steps: [
      {
        num: "01",
        title: "Talk to us",
        line: "Tell us what you dream of.",
        desc: "We visit your home, measure your space and learn how your family cooks and lives.",
      },
      {
        num: "02",
        title: "See it in 3D",
        line: "Know exactly how it will look.",
        desc: "We show you your kitchen in 3D first, then make it in our own factory.",
      },
      {
        num: "03",
        title: "Start cooking",
        line: "Fitted in about 3 days.",
        desc: "Our team fits everything cleanly at your home — no dust, no mess.",
      },
    ],
    cta: "Book a Home Visit",
  },

  styles: {
    kicker: "Kitchen styles",
    title: "Find the look that",
    accent: "feels like you",
    subtitle: "Twelve looks our families love. Tap the one you like and we'll make it yours.",
    showMore: "Show all 12 styles",
    showLess: "Show fewer styles",
  },

  finishes: {
    kicker: "Colours & finishes",
    title: "Finishes you'll",
    accent: "love to touch",
    subtitle: "From soft matte to mirror shine — over 500 options. Tap one to learn more.",
    benefits: [
      "Wipes clean with a damp cloth",
      "Handles heat and steam from daily cooking",
      "Comes in many shades to match your home",
    ],
    swatches: [
      { id: "satin", name: "Soft Matte", line: "Smooth and velvety. Hides fingerprints beautifully.", colorHint: "#EDE8E1", tag: "Most loved" },
      { id: "laminate", name: "Easy-Care Laminate", line: "Tough, scratch-resistant and easy to wipe clean.", colorHint: "#C2B6A6", tag: "Hard-wearing" },
      { id: "acrylic", name: "High Gloss", line: "A mirror-like shine that makes rooms feel bigger.", colorHint: "#1E293B", tag: "Shiny" },
      { id: "glass", name: "Glass Doors", line: "Show off your best crockery and keep out the dust.", colorHint: "#4B443B", tag: "Display" },
      { id: "membrane", name: "Classic Carved", line: "Soft curves and grooves for a traditional feel.", colorHint: "#D4C7B5", tag: "Traditional" },
      { id: "stone", name: "Stone Look", line: "Looks like marble, and handles hot pans and stains.", colorHint: "#7E7468", tag: "Strong" },
      { id: "metal", name: "Metal Shine", line: "Gold, bronze or silver touches for a rich look.", colorHint: "#B8923A", tag: "Rich" },
      { id: "steel", name: "Stainless Steel", line: "Will not rust, so it is perfect near the sink.", colorHint: "#94A3B8", tag: "Rust-proof" },
    ],
  },

  wardrobes: {
    kicker: "Wardrobes & closets",
    title: "A place for",
    accent: "everything you own",
    subtitle: "Wardrobes that fit your room perfectly — wall to wall, floor to ceiling.",
    types: [
      {
        id: "sliding",
        name: "Sliding Wardrobes",
        line: "Doors slide sideways, so they never bump into your bed.",
        image: "/img/wardrobe-bespoke-real.jpg",
        href: "/wardrobes",
      },
      {
        id: "hinged",
        name: "Swing-Door Wardrobes",
        line: "Doors open wide, so you can see everything at once.",
        image: "/img/wardrobe-card.jpg",
        href: "/wardrobes",
      },
      {
        id: "walk-in",
        name: "Walk-in Closets",
        line: "Your own dressing room, with soft lights and open shelves.",
        image: "/img/walk-in-closet-luxury.jpg",
        href: "/walk-in-closets",
      },
    ],
  },

  fittings: {
    kicker: "The little details",
    title: "Small things that",
    accent: "make life easier",
    subtitle: "Drawers that close quietly, doors that lift up, and corners you can actually reach.",
    items: [
      {
        id: "drawers",
        title: "Soft-Close Drawers",
        line: "No more banging. Drawers close gently, even when full of pots.",
        image: "/img/hardware-fittings-luxury.jpg",
      },
      {
        id: "lift-up",
        title: "Lift-Up Doors",
        line: "Top cabinets open upward and stay open. No bumping your head.",
        image: "/img/craftsmanship-detail.jpg",
      },
      {
        id: "magic-corner",
        title: "Corner Pull-Outs",
        line: "Corner shelves slide out, so nothing gets lost at the back.",
        image: "/img/kitchen-detail-real.jpg",
      },
      {
        id: "mirror",
        title: "Pull-Out Mirror",
        line: "A full-length mirror that slides out of your wardrobe.",
        image: "/img/pullout-mirror-real.jpg",
      },
    ],
    brandsKicker: "Fittings from brands you can trust",
    trustedBrands: ["Blum", "Häfele", "Hettich", "Salice", "Ebco"],
  },

  projects: {
    kicker: "Our work",
    title: "Homes we've",
    accent: "made beautiful",
    subtitle: "Real kitchens and wardrobes we've made for families in Raipur and nearby.",
    filters: [
      { id: "all", label: "All" },
      { id: "kitchen", label: "Kitchens" },
      { id: "wardrobe", label: "Wardrobes" },
      { id: "closet", label: "Closets" },
      { id: "living", label: "Living Room" },
    ],
    items: [
      { id: "proj-1", title: "Island Kitchen", location: "Shankar Nagar, Raipur", category: "kitchen", image: "/img/kitchen-island-real.jpg" },
      { id: "proj-2", title: "Floor-to-Ceiling Sliding Wardrobe", location: "VIP Road, Raipur", category: "wardrobe", image: "/img/wardrobe-bespoke-real.jpg" },
      { id: "proj-3", title: "Walk-in Closet with Glass Doors", location: "Civil Lines, Raipur", category: "closet", image: "/img/walk-in-closet-luxury.jpg" },
      { id: "proj-4", title: "Glowing Bar Unit", location: "Devendra Nagar, Raipur", category: "living", image: "/img/bar-unit-luxury.jpg" },
      { id: "proj-5", title: "Modern L-Shaped Kitchen", location: "Bilaspur", category: "kitchen", image: "/img/kitchen-contemporary-real.jpg" },
      { id: "proj-6", title: "TV Unit with Wood Panels", location: "Raipur", category: "living", image: "/img/living-room-showcase.jpg" },
    ],
  },

  testimonials: {
    kicker: "Happy families",
    title: "In their",
    accent: "own words",
    subtitle: "Real words from families who trusted us with their homes.",
    // Verbatim reviews from the live site (brief/content-inventory.md §6). Do not edit the quotes.
    items: [
      {
        id: "t-1",
        name: "Anuska Hormaz",
        city: "New homeowner",
        quote: "We approached EBONY with zero experience. Our designer was very patient throughout. They installed the kitchen within 3 days of the building being ready, and post-installation service is commendable.",
        avatar: "AH",
        rating: 5,
      },
      {
        id: "t-2",
        name: "Ramesh Goradia",
        city: "Repeat client, Pune",
        quote: "It's been nine years since we first contacted EBONY. We haven't had a single service issue. Because of the quality and design, we came back for our new home. Their products and services are worth every penny.",
        avatar: "RG",
        rating: 5,
      },
      {
        id: "t-3",
        name: "C.L. Sandesh",
        city: "Homeowner, Bangalore",
        quote: "I had hired another carpenter with the same products, but the finishing and accuracy EBONY provides are unmatchable. Their products' quality and installation services were beyond expectation.",
        avatar: "CS",
        rating: 5,
      },
      {
        id: "t-4",
        name: "Mr. Kanyalal",
        city: "Client, Delhi",
        quote: "In one word — Excellent! The entire team is very humble and highly responsive. The designs and quality they offer are marvellous. I'm highly satisfied with EBONY's product design, quality, and services.",
        avatar: "MK",
        rating: 5,
      },
      {
        id: "t-5",
        name: "Rupali Rach",
        city: "Interior enthusiast",
        quote: "While renovating our kitchen, we searched many places, but EBONY's quality seemed far superior. The finishes are something we hadn't imagined — very user-friendly and elegant.",
        avatar: "RR",
        rating: 5,
      },
      {
        id: "t-6",
        name: "Manoj Mandre",
        city: "Homeowner, Mumbai",
        quote: "Conceptualization and implementation of a modular kitchen with high-quality material was daunting. EBONY understood the needs, conceptualised the design, and did smart engineering. The team has been rock-solid throughout the journey.",
        avatar: "MM",
        rating: 5,
      },
    ],
  },

  whyLoveUs: {
    kicker: "Why Ebony",
    title: "Why families",
    accent: "choose us",
    subtitle: "Seven simple promises we keep in every home.",
    points: [
      {
        id: "lifetime-ss304",
        title: "Lifetime Warranty on SS 304",
        line: "Every SS 304 stainless steel basket and fitting we fit comes with a lifetime warranty.",
        icon: "ShieldCheck",
        image: "/img/why-ss304-basket.jpg",
      },
      {
        id: "warranty",
        title: "10-Year Warranty",
        line: "Strong materials and careful checks, backed by 10 years of warranty on woodwork.",
        icon: "Award",
        image: "/img/craftsmanship-detail.jpg",
      },
      {
        id: "materials",
        title: "Material Quality",
        line: "Waterproof plywood, branded hardware and SS 304 steel. You see every sample first.",
        icon: "Layers",
        image: "/img/core-materials-luxury.jpg",
      },
      {
        id: "after-sales",
        title: "After-Sales Support",
        line: "A hinge to adjust or a drawer to fix later? Call us and our team comes back to help.",
        icon: "Wrench",
        image: "/img/why-after-sales.jpg",
      },
      {
        id: "delivery",
        title: "No Mess at Home",
        line: "Everything is made in our factory, so fitting is quick and clean, with almost no dust.",
        icon: "Clock",
        image: "/img/process-engineering.jpg",
      },
      {
        id: "pricing",
        title: "Clear, Honest Pricing",
        line: "You get a clear quote upfront. No hidden costs, no surprises.",
        icon: "BadgeCheck",
        image: "/img/kitchen-curves-arches.jpg",
      },
      {
        id: "visit",
        title: "Home Design Visit",
        line: "We visit your home, measure every wall and show you the design in 3D.",
        icon: "Ruler",
        image: "/img/kitchen-layout-real.jpg",
      },
    ],
    footnote: {
      text: "We use waterproof plywood, strong boards and rust-proof steel where it matters most.",
      label: "See our materials",
      href: "/finishes",
    },
  },

  finalCta: {
    kicker: "Home design visit",
    title: "Let's design your",
    accent: "dream kitchen",
    subtitle: "Tell us a little about your home. We'll call you back and plan a visit at a time that suits you.",
    formTitle: "Book your visit",
    formNote: "Just 3 details. No pushy sales calls.",
    primaryBtn: "Book My Visit",
  },
}
