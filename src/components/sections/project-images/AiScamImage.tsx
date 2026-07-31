export function AiScamImage() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="accent-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="green-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="red-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
        </linearGradient>
        <filter id="glow-filter">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="soft-glow">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="#08080E" />

      {/* Grid pattern */}
      {Array.from({ length: 18 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 47} y1="0" x2={i * 47} y2="450" stroke="#ffffff" strokeOpacity="0.02" strokeWidth="1" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#ffffff" strokeOpacity="0.02" strokeWidth="1" />
      ))}

      {/* Sidebar */}
      <rect x="0" y="0" width="160" height="450" fill="#0C0C16" />
      <rect x="0" y="0" width="160" height="450" fill="url(#glow)" opacity="0.5" />
      <line x1="160" y1="0" x2="160" y2="450" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Sidebar logo */}
      <rect x="20" y="20" width="28" height="28" rx="8" fill="url(#accent-grad)" />
      <rect x="54" y="26" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.4" />
      <rect x="54" y="34" width="40" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />

      {/* Sidebar nav items */}
      {[0, 1, 2, 3, 4].map((_, i) => (
        <g key={`nav${i}`}>
          <rect x="20" y={80 + i * 44} width="120" height="34" rx="8" fill={i === 0 ? "#7C3AED" : "#ffffff"} fillOpacity={i === 0 ? "0.15" : "0.03"} />
          {i === 0 && <rect x="20" y={80 + i * 44} width="3" height="34" rx="1.5" fill="#7C3AED" />}
          <rect x={i === 0 ? 36 : 36} y={90 + i * 44} width="16" height="16" rx="4" fill="#ffffff" fillOpacity={i === 0 ? "0.5" : "0.15"} />
          <rect x={i === 0 ? 36 : 36} y={94 + i * 44} width="8" height="8" rx="2" fill="#ffffff" fillOpacity={i === 0 ? "0.6" : "0.1"} />
          <rect x={60 + (i === 0 ? 0 : 0)} y={91 + i * 44} width={60 - (i === 0 ? 0 : 5)} height="4" rx="2" fill="#ffffff" fillOpacity={i === 0 ? "0.4" : "0.12"} />
          <rect x={60 + (i === 0 ? 0 : 0)} y={99 + i * 44} width={40 - (i === 0 ? 0 : 5)} height="3" rx="1.5" fill="#ffffff" fillOpacity={i === 0 ? "0.2" : "0.08"} />
        </g>
      ))}

      {/* Header */}
      <rect x="160" y="0" width="640" height="52" fill="#0A0A14" />
      <line x1="160" y1="52" x2="800" y2="52" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Search bar */}
      <rect x="180" y="14" width="200" height="24" rx="12" fill="#ffffff" fillOpacity="0.05" />
      <circle cx="195" cy="26" r="4" fill="#ffffff" fillOpacity="0.15" />
      <rect x="203" y="23" width="60" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />

      {/* Header icons */}
      <circle cx="710" cy="26" r="10" fill="#ffffff" fillOpacity="0.05" />
      <rect x="706" y="22" width="8" height="8" rx="2" fill="#ffffff" fillOpacity="0.15" />
      <circle cx="740" cy="26" r="12" fill="url(#accent-grad)" fillOpacity="0.3" />
      <rect x="735" y="23" width="10" height="2" rx="1" fill="#ffffff" fillOpacity="0.3" />
      <rect x="735" y="27" width="10" height="2" rx="1" fill="#ffffff" fillOpacity="0.3" />

      {/* Main content area */}
      <rect x="160" y="52" width="640" height="398" fill="#08080E" />

      {/* Row 1: Stat cards */}
      {/* Risk Score card */}
      <rect x="180" y="72" width="190" height="100" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <rect x="180" y="72" width="190" height="100" rx="12" fill="url(#glow)" opacity="0.4" />

      <rect x="196" y="84" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <text x="196" y="104" fill="#ffffff" fillOpacity="0.9" fontSize="26" fontWeight="bold" fontFamily="monospace">87</text>
      <circle cx="320" cy="100" r="22" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="4" />
      <path d="M298 100 A22 22 0 0 1 340 85" stroke="url(#accent-grad)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="340" cy="85" r="3" fill="#7C3AED" filter="url(#glow-filter)" />

      <rect x="196" y="114" width="40" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />
      <rect x="196" y="120" width="55" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />

      {/* Active Threats card */}
      <rect x="390" y="72" width="190" height="100" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <rect x="390" y="84" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <text x="390" y="104" fill="#EF4444" fontSize="26" fontWeight="bold" fontFamily="monospace">12</text>
      <circle cx="530" cy="98" r="8" fill="#EF4444" fillOpacity="0.15" />
      <circle cx="530" cy="98" r="4" fill="#EF4444" fillOpacity="0.6" />
      <circle cx="530" cy="98" r="8" fill="none" stroke="#EF4444" strokeOpacity="0.3" strokeWidth="2">
        <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <rect x="390" y="114" width="40" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />

      {/* Transactions card */}
      <rect x="600" y="72" width="180" height="100" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <rect x="616" y="84" width="70" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <text x="616" y="104" fill="#10B981" fontSize="26" fontWeight="bold" fontFamily="monospace">2.4K</text>
      <rect x="614" y="112" width="8" height="5" rx="1" fill="#10B981" />
      <rect x="610" y="114" width="8" height="3" rx="1" fill="#10B981" fillOpacity="0.4" />
      <rect x="618" y="110" width="8" height="7" rx="1" fill="#10B981" fillOpacity="0.7" />
      <rect x="616" y="120" width="40" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />

      {/* Row 2: Threat Map + Alerts */}
      {/* Threat Map panel */}
      <rect x="180" y="188" width="380" height="150" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <rect x="196" y="200" width="65" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />

      {/* Simplified world map */}
      <path d="M220 270 Q280 240 340 265 Q400 290 440 260 Q480 235 520 260" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.5" fill="none" />
      <path d="M230 280 Q300 260 350 280 Q410 300 450 275 Q490 255 520 270" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" fill="none" />

      {/* Threat dots on map */}
      {[
        { x: 250, y: 255 }, { x: 310, y: 245 }, { x: 370, y: 260 },
        { x: 420, y: 250 }, { x: 470, y: 265 }, { x: 500, y: 245 },
      ].map((dot, i) => (
        <g key={`threat${i}`}>
          <circle cx={dot.x} cy={dot.y} r="10" fill="#EF4444" fillOpacity="0.08" />
          <circle cx={dot.x} cy={dot.y} r="3" fill="#EF4444" fillOpacity={i === 0 ? "0.9" : "0.4"} filter="url(#glow-filter)" />
        </g>
      ))}

      {/* Connection lines */}
      <line x1="250" y1="255" x2="310" y2="245" stroke="#EF4444" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="310" y1="245" x2="370" y2="260" stroke="#EF4444" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="370" y1="260" x2="420" y2="250" stroke="#EF4444" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3,3" />

      {/* Alerts panel */}
      <rect x="575" y="188" width="205" height="150" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <rect x="591" y="200" width="50" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="640" y="200" width="40" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />

      {/* Alert items */}
      {[
        { color: "#EF4444" },
        { color: "#F59E0B" },
        { color: "#3B82F6" },
        { color: "#EF4444" },
      ].map((alert, i) => (
        <g key={`alert${i}`}>
          <rect x={591} y={218 + i * 28} width="173" height="22" rx="6" fill="#ffffff" fillOpacity="0.02" />
          <circle cx={601} cy={229 + i * 28} r="4" fill={alert.color} fillOpacity="0.8" />
          <rect x={610} y={225 + i * 28} width={80 - i * 8} height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />
          <rect x={610} y={231 + i * 28} width={60 - i * 5} height="2" rx="1" fill="#ffffff" fillOpacity="0.06" />
          <rect x={700} y={226 + i * 28} width="40" height="8" rx="4" fill={alert.color} fillOpacity="0.15" />
          <rect x={706} y={228 + i * 28} width="28" height="4" rx="2" fill={alert.color} fillOpacity="0.5" />
        </g>
      ))}

      {/* Row 3: Detection Graph */}
      <rect x="180" y="354" width="380" height="80" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <rect x="196" y="366" width="70" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />

      {/* Line chart */}
      <path d="M220 410 L260 395 L300 400 L340 380 L380 385 L420 365 L460 370 L500 355 L530 360" stroke="#10B981" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M220 410 L260 395 L300 400 L340 380 L380 385 L420 365 L460 370 L500 355 L530 360" stroke="#10B981" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.1" />
      <path d="M220 410 L260 395 L300 400 L340 380 L380 385 L420 365 L460 370 L500 355 L530 360 V410 Z" fill="url(#green-grad)" />

      {/* Data point dots */}
      {[
        { x: 220, y: 410 }, { x: 260, y: 395 }, { x: 300, y: 400 },
        { x: 340, y: 380 }, { x: 380, y: 385 }, { x: 420, y: 365 },
        { x: 460, y: 370 }, { x: 500, y: 355 }, { x: 530, y: 360 },
      ].map((pt) => (
        <circle key={pt.x} cx={pt.x} cy={pt.y} r="3" fill="#10B981" filter="url(#glow-filter)" />
      ))}

      {/* Y-axis labels */}
      <rect x="590" y="366" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="590" y="374" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />

      {/* Suspicious calls mini table */}
      <rect x="575" y="354" width="205" height="80" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <rect x="591" y="366" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />

      {[0, 1, 2].map((_, i) => (
        <g key={`call${i}`}>
          <rect x={591} y={380 + i * 16} width="173" height="12" rx="4" fill="#ffffff" fillOpacity="0.02" />
          <rect x={595} y={382 + i * 16} width={50 - i * 8} height="8" rx="2" fill="#ffffff" fillOpacity="0.08" />
          <circle cx={660} cy={386 + i * 16} r="3" fill={i === 0 ? "#EF4444" : i === 1 ? "#F59E0B" : "#10B981"} fillOpacity="0.6" />
          <rect x={670} y={383 + i * 16} width={40} height="2" rx="1" fill="#ffffff" fillOpacity="0.06" />
        </g>
      ))}
    </svg>
  )
}
