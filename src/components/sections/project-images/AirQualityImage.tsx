export function AirQualityImage() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="aq-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="aq-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="aq-green" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="aq-orange" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="aq-red" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
        </linearGradient>
        <filter id="aq-glow-filter">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="#08080E" />

      {/* Grid */}
      {Array.from({ length: 18 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 47} y1="0" x2={i * 47} y2="450" stroke="#ffffff" strokeOpacity="0.015" strokeWidth="1" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#ffffff" strokeOpacity="0.015" strokeWidth="1" />
      ))}

      {/* Header */}
      <rect x="0" y="0" width="800" height="52" fill="#0A0A14" />
      <line x1="0" y1="52" x2="800" y2="52" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      <rect x="20" y="15" width="22" height="22" rx="6" fill="url(#aq-accent)" />
      <rect x="48" y="21" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.3" />
      <rect x="48" y="28" width="35" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />

      <rect x="250" y="15" width="200" height="22" rx="11" fill="#ffffff" fillOpacity="0.05" />
      <circle cx="262" cy="26" r="3.5" fill="#ffffff" fillOpacity="0.12" />
      <rect x="270" y="24" width="70" height="2.5" rx="1.25" fill="#ffffff" fillOpacity="0.08" />

      {/* AQI badge */}
      <rect x="600" y="12" width="80" height="28" rx="14" fill="#F59E0B" fillOpacity="0.12" />
      <text x="608" y="31" fill="#F59E0B" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.5">AQI</text>
      <text x="634" y="31" fill="#F59E0B" fontSize="12" fontFamily="monospace" fontWeight="bold">85</text>

      <circle cx="710" cy="26" r="8" fill="#ffffff" fillOpacity="0.05" />
      <rect x="707" y="23" width="6" height="6" rx="3" fill="#ffffff" fillOpacity="0.12" />
      <circle cx="740" cy="26" r="10" fill="url(#aq-accent)" fillOpacity="0.2" />
      <rect x="736" y="23" width="8" height="6" rx="3" fill="#ffffff" fillOpacity="0.15" />

      {/* Main layout */}
      {/* Left: AQI Map */}
      <rect x="0" y="52" width="400" height="398" fill="#08080E" />
      <rect x="16" y="66" width="50" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />

      {/* Map area */}
      <rect x="16" y="82" width="368" height="210" rx="12" fill="#0A0A14" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="16" y="82" width="368" height="210" rx="12" fill="url(#aq-glow)" opacity="0.4" />

      {/* Grid lines */}
      <line x1="16" y1="130" x2="384" y2="130" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="16" y1="180" x2="384" y2="180" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="16" y1="230" x2="384" y2="230" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="120" y1="82" x2="120" y2="292" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="220" y1="82" x2="220" y2="292" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="320" y1="82" x2="320" y2="292" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />

      {/* AQI dots on map */}
      {[
        { x: 80, y: 160, color: "#10B981", size: 8 },
        { x: 180, y: 120, color: "#3B82F6", size: 6 },
        { x: 280, y: 200, color: "#F59E0B", size: 10 },
        { x: 120, y: 250, color: "#10B981", size: 7 },
        { x: 320, y: 150, color: "#EF4444", size: 9 },
        { x: 220, y: 260, color: "#3B82F6", size: 6 },
        { x: 350, y: 240, color: "#F59E0B", size: 7 },
      ].map((pt, i) => (
        <g key={`aqi${i}`}>
          <circle cx={pt.x} cy={pt.y} r={pt.size + 6} fill={pt.color} fillOpacity="0.06" />
          <circle cx={pt.x} cy={pt.y} r={pt.size} fill={pt.color} fillOpacity="0.15" />
          <circle cx={pt.x} cy={pt.y} r={pt.size / 2} fill={pt.color} fillOpacity="0.6" filter="url(#aq-glow-filter)" />
        </g>
      ))}

      {/* Sensor markers */}
      {[
        { x: 100, y: 200, val: "42" },
        { x: 250, y: 160, val: "68" },
        { x: 150, y: 110, val: "25" },
      ].map((s, i) => (
        <g key={`sensor${i}`}>
          <rect x={s.x - 16} y={s.y - 28} width="32" height="18" rx="6" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.5" />
          <text x={s.x} y={s.y - 15} fill="#ffffff" fillOpacity="0.3" fontSize="8" fontFamily="monospace" textAnchor="middle">{s.val}</text>
        </g>
      ))}

      {/* Selected city card */}
      <rect x="16" y="304" width="368" height="58" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="28" y="318" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="28" y="327" width="80" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
      <rect x="28" y="335" width="100" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />

      {/* AQI gauge */}
      <circle cx="350" cy="333" r="18" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="3" />
      <path d="M332 333 A18 18 0 0 1 360 318" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
      <text x="350" y="338" fill="#F59E0B" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle" opacity="0.8">85</text>

      {/* Legend */}
      <rect x="16" y="374" width="12" height="12" rx="4" fill="#10B981" fillOpacity="0.3" />
      <rect x="34" y="377" width="28" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="80" y="374" width="12" height="12" rx="4" fill="#F59E0B" fillOpacity="0.3" />
      <rect x="98" y="377" width="28" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="144" y="374" width="12" height="12" rx="4" fill="#EF4444" fillOpacity="0.3" />
      <rect x="162" y="377" width="28" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />

      {/* Right: Charts & Data */}
      <rect x="400" y="52" width="400" height="398" fill="#0A0A14" />
      <line x1="400" y1="52" x2="400" y2="450" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Pollutant cards row */}
      <rect x="414" y="68" width="116" height="65" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <text x="414" y="88" fill="#ffffff" fillOpacity="0.2" fontSize="9" fontFamily="monospace" dx="12">PM2.5</text>
      <text x="414" y="108" fill="#10B981" fontSize="18" fontWeight="bold" fontFamily="monospace" dx="12">32</text>

      <rect x="542" y="68" width="116" height="65" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <text x="542" y="88" fill="#ffffff" fillOpacity="0.2" fontSize="9" fontFamily="monospace" dx="12">PM10</text>
      <text x="542" y="108" fill="#F59E0B" fontSize="18" fontWeight="bold" fontFamily="monospace" dx="12">78</text>

      <rect x="670" y="68" width="116" height="65" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <text x="670" y="88" fill="#ffffff" fillOpacity="0.2" fontSize="9" fontFamily="monospace" dx="12">CO₂</text>
      <text x="670" y="108" fill="#3B82F6" fontSize="18" fontWeight="bold" fontFamily="monospace" dx="12">415</text>

      {/* Pollution trend chart */}
      <rect x="414" y="148" width="372" height="140" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="428" y="162" width="65" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="500" y="162" width="40" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />

      {/* Multi-line chart */}
      {/* PM2.5 line */}
      <path d="M440 270 L490 250 L540 260 L590 235 L640 245 L690 220 L740 230" stroke="#10B981" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M440 270 L490 250 L540 260 L590 235 L640 245 L690 220 L740 230" stroke="#10B981" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.08" />
      <path d="M440 270 L490 250 L540 260 L590 235 L640 245 L690 220 L740 230 V270 Z" fill="url(#aq-green)" />

      {/* PM10 line */}
      <path d="M440 260 L490 255 L540 240 L590 250 L640 230 L690 240 L740 225" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M440 260 L490 255 L540 240 L590 250 L640 230 L690 240 L740 225" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.08" />

      {/* Data dots */}
      {[440, 490, 540, 590, 640, 690, 740].map((x, i) => (
        <g key={`pd${i}`}>
          <circle cx={x} cy={[270, 250, 260, 235, 245, 220, 230][i]} r="2.5" fill="#10B981" filter="url(#aq-glow-filter)" />
          <circle cx={x} cy={[260, 255, 240, 250, 230, 240, 225][i]} r="2.5" fill="#F59E0B" filter="url(#aq-glow-filter)" />
        </g>
      ))}

      {/* Y-axis labels */}
      <rect x="428" y="274" width="20" height="2" rx="1" fill="#ffffff" fillOpacity="0.04" />
      <rect x="428" y="250" width="20" height="2" rx="1" fill="#ffffff" fillOpacity="0.04" />
      <rect x="428" y="226" width="20" height="2" rx="1" fill="#ffffff" fillOpacity="0.04" />

      {/* Forecast section */}
      <rect x="414" y="302" width="372" height="70" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="428" y="316" width="45" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />

      {/* Forecast days */}
      {[0, 1, 2, 3, 4, 5, 6].map((day) => (
        <g key={`day${day}`}>
          <rect x={432 + day * 50} y={332} width="40" height="28" rx="6" fill="#ffffff" fillOpacity="0.02" />
          <rect x={442 + day * 50} y={336} width="20" height="8" rx="4" fill="#10B981" fillOpacity={0.2 + (day / 14)} />
          <rect x={436 + day * 50} y={350} width="32" height="2" rx="1" fill="#ffffff" fillOpacity={0.08 - day * 0.01} />
        </g>
      ))}

      {/* Weather widget */}
      <rect x="414" y="386" width="372" height="50" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="428" y="400" width="40" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="428" y="408" width="60" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
      <circle cx="540" cy="411" r="12" fill="#F59E0B" fillOpacity="0.1" />
      <circle cx="540" cy="411" r="6" fill="#F59E0B" fillOpacity="0.2" />
      <rect x="570" y="404" width="35" height="4" rx="2" fill="#ffffff" fillOpacity="0.12" />
      <rect x="570" y="412" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
      <rect x="700" y="401" width="70" height="20" rx="10" fill="#10B981" fillOpacity="0.1" />
      <rect x="710" y="407" width="50" height="8" rx="4" fill="#10B981" fillOpacity="0.2" />
    </svg>
  )
}
