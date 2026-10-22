"use client"

interface KitchenSketchProps {
  palette: [string, string, string]
  className?: string
}

export function KitchenSketch({ palette, className = "" }: KitchenSketchProps) {
  const [baseColor, wallColor, accentColor] = palette

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden p-6 ${className}`}
      style={{ backgroundColor: `${baseColor}15` }}
    >
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[220px] transition-transform duration-500 group-hover:scale-105"
      >
        {/* Wall background gradient */}
        <rect width="320" height="220" rx="12" fill={wallColor} fillOpacity="0.35" />

        {/* Backsplash tiles hint */}
        <line x1="20" y1="90" x2="300" y2="90" stroke={accentColor} strokeOpacity="0.25" strokeDasharray="4 4" />
        <line x1="20" y1="120" x2="300" y2="120" stroke={accentColor} strokeOpacity="0.25" strokeDasharray="4 4" />

        {/* Chimney Hood & Flue */}
        <path d="M145 20 H175 V50 H195 L180 80 H140 L125 50 H145 V20 Z" fill={baseColor} fillOpacity="0.8" />
        <rect x="135" y="80" width="50" height="4" rx="2" fill={accentColor} />

        {/* Top Wall Cabinets - Left */}
        <rect x="30" y="30" width="80" height="55" rx="3" fill={wallColor} stroke={baseColor} strokeWidth="1.5" />
        <line x1="70" y1="30" x2="70" y2="85" stroke={baseColor} strokeWidth="1" />
        {/* Handles */}
        <line x1="64" y1="50" x2="64" y2="65" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="76" y1="50" x2="76" y2="65" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />

        {/* Top Wall Cabinets - Right (Glass front display hint) */}
        <rect x="210" y="30" width="80" height="55" rx="3" fill={wallColor} stroke={baseColor} strokeWidth="1.5" />
        <line x1="250" y1="30" x2="250" y2="85" stroke={baseColor} strokeWidth="1" />
        <line x1="244" y1="50" x2="244" y2="65" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="256" y1="50" x2="256" y2="65" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />

        {/* Countertop Slab */}
        <rect x="20" y="135" width="280" height="12" rx="2" fill={accentColor} />
        {/* Built-in Hob hint */}
        <rect x="135" y="132" width="50" height="4" rx="1" fill={baseColor} />
        <circle cx="150" cy="134" r="2.5" fill="#111" />
        <circle cx="170" cy="134" r="2.5" fill="#111" />

        {/* Base Cabinets */}
        <rect x="25" y="147" width="270" height="60" rx="3" fill={baseColor} fillOpacity="0.9" />
        {/* Cabinet Door Dividers */}
        <line x1="92" y1="147" x2="92" y2="207" stroke="#000" strokeOpacity="0.25" strokeWidth="1.5" />
        <line x1="160" y1="147" x2="160" y2="207" stroke="#000" strokeOpacity="0.25" strokeWidth="1.5" />
        <line x1="228" y1="147" x2="228" y2="207" stroke="#000" strokeOpacity="0.25" strokeWidth="1.5" />

        {/* Drawer line on left */}
        <line x1="25" y1="167" x2="92" y2="167" stroke="#000" strokeOpacity="0.25" strokeWidth="1" />
        {/* Drawer handles */}
        <line x1="45" y1="157" x2="72" y2="157" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="45" y1="187" x2="72" y2="187" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />

        {/* Center under-hob double doors handles */}
        <line x1="120" y1="160" x2="120" y2="190" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="132" y1="160" x2="132" y2="190" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />

        {/* Right Pullout handles */}
        <line x1="190" y1="165" x2="200" y2="165" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="258" y1="165" x2="268" y2="165" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />

        {/* Plinth / Skirting Board */}
        <rect x="25" y="207" width="270" height="8" rx="1" fill="#1A1A1A" />
      </svg>
    </div>
  )
}
