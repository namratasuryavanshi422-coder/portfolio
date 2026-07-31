export function RunwayFogImage() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="rf-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="rf-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="rf-amber" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="rf-fog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="rf-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="#08080E" />

      {/* Subtle grid */}
      {Array.from({ length: 18 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 47} y1="0" x2={i * 47} y2="450" stroke="#ffffff" strokeOpacity="0.015" strokeWidth="1" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#ffffff" strokeOpacity="0.015" strokeWidth="1" />
      ))}

      {/* Header bar */}
      <rect x="0" y="0" width="800" height="50" fill="#0A0A14" />
      <line x1="0" y1="50" x2="800" y2="50" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Brand icon */}
      <rect x="20" y="14" width="22" height="22" rx="6" fill="url(#rf-accent)" />
      <rect x="26" y="20" width="10" height="10" rx="5" fill="#ffffff" fillOpacity="0.3" />
      <rect x="48" y="20" width="80" height="4" rx="2" fill="#ffffff" fillOpacity="0.3" />
      <rect x="48" y="27" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />

      {/* Status indicator */}
      <rect x="600" y="17" width="60" height="16" rx="8" fill="#10B981" fillOpacity="0.12" />
      <circle cx="610" cy="25" r="3" fill="#10B981" fillOpacity="0.6" />
      <rect x="616" y="23" width="34" height="4" rx="2" fill="#10B981" fillOpacity="0.35" />

      {/* Live badge */}
      <rect x="680" y="15" width="50" height="20" rx="10" fill="#EF4444" fillOpacity="0.1" />
      <circle cx="692" cy="25" r="3" fill="#EF4444" fillOpacity="0.5" />
      <rect x="698" y="23" width="24" height="4" rx="2" fill="#EF4444" fillOpacity="0.3" />

      {/* User avatar */}
      <circle cx="760" cy="25" r="10" fill="url(#rf-accent)" fillOpacity="0.25" />
      <circle cx="760" cy="25" r="8" fill="#ffffff" fillOpacity="0.15" />

      {/* Left panel - Runway Visualization */}
      <rect x="0" y="50" width="380" height="400" fill="#08080E" />

      {/* Runway perspective graphic */}
      <rect x="30" y="75" width="320" height="200" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />

      {/* Runway - trapezoid in perspective */}
      <polygon points="40,260 360,260 280,90 120,90" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />
      {/* Runway centerline */}
      <line x1="200" y1="90" x2="200" y2="260" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="8 6" />
      {/* Runway edge lights */}
      {[0, 1, 2, 3, 4, 5].map((_, i) => (
        <circle key={`light-l${i}`} cx={120 + i * 30} cy={260 - i * 28} r="2" fill="#3B82F6" fillOpacity={0.5 - i * 0.06} />
      ))}
      {[0, 1, 2, 3, 4, 5].map((_, i) => (
        <circle key={`light-r${i}`} cx={280 - i * 30} cy={260 - i * 28} r="2" fill="#3B82F6" fillOpacity={0.5 - i * 0.06} />
      ))}

      {/* Fog overlay layers */}
      <rect x="40" y="95" width="300" height="30" rx="4" fill="url(#rf-fog)" fillOpacity="0.15" />
      <rect x="40" y="130" width="300" height="40" rx="4" fill="url(#rf-fog)" fillOpacity="0.25" />
      <rect x="40" y="175" width="300" height="50" rx="4" fill="url(#rf-fog)" fillOpacity="0.35" />

      {/* Fog warning icon */}
      <rect x="155" y="195" width="90" height="24" rx="12" fill="#F59E0B" fillOpacity="0.12" />
      <rect x="165" y="201" width="70" height="12" rx="6" fill="#F59E0B" fillOpacity="0.25" />

      {/* Panel label */}
      <rect x="30" y="286" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.2" />

      {/* Weather data cards under runway */}
      {[
        { label: 'Visibility', value: '800m', icon: 0 },
        { label: 'Temp', value: '12°C', icon: 1 },
        { label: 'Humidity', value: '94%', icon: 2 },
        { label: 'Wind', value: '8 km/h', icon: 3 },
      ].map((_card, i) => (
        <g key={`wcard${i}`}>
          <rect x={30 + i * 83} y={300} width={75} height="65" rx="8" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
          <circle cx={48 + i * 83} cy={318} r="6" fill="url(#rf-accent)" fillOpacity="0.15" />
          <rect x={42 + i * 83} y={312} width="12" height="12" rx="6" fill="#ffffff" fillOpacity="0.08" />
          <rect x={36 + i * 83} y={335} width="35" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
          <rect x={36 + i * 83} y={343} width={55 - (i > 1 ? 10 : 0)} height="8" rx="4" fill="#F59E0B" fillOpacity="0.25" />
        </g>
      ))}

      {/* Right panel - Prediction Dashboard */}
      <rect x="380" y="50" width="420" height="400" fill="#0A0A14" />
      <line x1="380" y1="50" x2="380" y2="450" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Prediction header */}
      <rect x="400" y="68" width="70" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="480" y="68" width="40" height="4" rx="2" fill="#ffffff" fillOpacity="0.06" />
      <rect x="650" y="68" width="80" height="22" rx="11" fill="#ffffff" fillOpacity="0.04" />
      <rect x="660" y="76" width="60" height="6" rx="3" fill="#ffffff" fillOpacity="0.08" />

      {/* Fog prediction chart */}
      <rect x="400" y="100" width="380" height="160" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />

      {/* Chart Y-axis labels */}
      <text x="412" y="118" fill="#ffffff" fillOpacity="0.15" fontSize="9" fontFamily="monospace">HIGH</text>
      <text x="412" y="245" fill="#ffffff" fillOpacity="0.15" fontSize="9" fontFamily="monospace">LOW</text>

      {/* Chart grid lines */}
      <line x1="455" y1="115" x2="765" y2="115" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="455" y1="145" x2="765" y2="145" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="455" y1="175" x2="765" y2="175" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="455" y1="205" x2="765" y2="205" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="455" y1="235" x2="765" y2="235" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Fog density prediction area fill */}
      <path d="M455 235 L465 230 L490 225 L515 218 L540 210 L565 195 L590 170 L615 155 L640 148 L665 145 L690 140 L715 138 L740 135 L765 132 L765 235 Z" fill="url(#rf-accent)" fillOpacity="0.08" />

      {/* Fog density prediction line */}
      <path d="M455 235 L465 230 L490 225 L515 218 L540 210 L565 195 L590 170 L615 155 L640 148 L665 145 L690 140 L715 138 L740 135 L765 132" stroke="url(#rf-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0.6" />

      {/* Data points on chart */}
      {[235, 230, 225, 218, 210, 195, 170, 155, 148, 145, 140, 138, 135, 132].map((y, i) => (
        <circle key={`dot${i}`} cx={455 + i * 24} cy={y} r="3" fill="#F59E0B" fillOpacity={0.6} />
      ))}

      {/* Current prediction marker */}
      <line x1="590" y1="100" x2="590" y2="260" stroke="#F59E0B" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="580" y="84" width="22" height="12" rx="6" fill="#F59E0B" fillOpacity="0.15" />
      <rect x="584" y="88" width="14" height="4" rx="2" fill="#F59E0B" fillOpacity="0.3" />

      {/* Chart X-axis time labels */}
      {['00:00', '06:00', '12:00', '18:00', '24:00'].map((time, i) => (
        <text key={`time${i}`} x={455 + i * 77} y="252" fill="#ffffff" fillOpacity="0.15" fontSize="8" fontFamily="monospace">{time}</text>
      ))}

      {/* Alert cards below chart */}
      <rect x="400" y="276" width="185" height="75" rx="10" fill="#0C0C16" stroke="#F59E0B" strokeOpacity="0.08" strokeWidth="1" />
      <rect x="412" y="288" width="40" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
      <rect x="412" y="296" width="55" height="14" rx="7" fill="#F59E0B" fillOpacity="0.12" />
      <rect x="418" y="300" width="43" height="6" rx="3" fill="#F59E0B" fillOpacity="0.3" />
      <rect x="412" y="316" width="120" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
      <rect x="412" y="324" width="90" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
      <rect x="412" y="336" width="160" height="8" rx="4" fill="#3B82F6" fillOpacity="0.08" />
      <rect x="412" y="340" width="80" height="8" rx="4" fill="#3B82F6" fillOpacity="0.12" />

      <rect x="595" y="276" width="185" height="75" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="607" y="288" width="40" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
      <rect x="607" y="296" width="55" height="14" rx="7" fill="#3B82F6" fillOpacity="0.1" />
      <rect x="613" y="300" width="43" height="6" rx="3" fill="#3B82F6" fillOpacity="0.3" />
      <rect x="607" y="316" width="120" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
      <rect x="607" y="324" width="90" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
      <rect x="607" y="336" width="160" height="8" rx="4" fill="#10B981" fillOpacity="0.08" />
      <rect x="607" y="340" width="100" height="8" rx="4" fill="#10B981" fillOpacity="0.12" />

      {/* Bottom metrics bar */}
      <line x1="0" y1="366" x2="800" y2="366" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {[
        { value: '96%', label: 'Prediction Accuracy' },
        { value: '12hr', label: 'Forecast Horizon' },
        { value: '85+', label: 'Airports Monitored' },
        { value: '99.9%', label: 'System Uptime' },
      ].map((metric, i) => (
        <g key={`metric${i}`}>
          <text x={45 + i * 195} y="386" fill="#F59E0B" fillOpacity="0.6" fontSize="13" fontWeight="bold" fontFamily="monospace">{metric.value}</text>
          <rect x={45 + i * 195} y={393} width={70 - (i > 1 ? 15 : 0)} height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
          {i < 3 && (
            <line x1={180 + i * 195} y1="375" x2={180 + i * 195} y2="400" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
          )}
        </g>
      ))}

      {/* Sidebar - Quick stats */}
      <rect x="400" y="375" width="380" height="65" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />

      {/* Runway status indicators */}
      {['Runway 09L', 'Runway 09R', 'Runway 14'      ].map((_runway, i) => (
        <g key={`rw${i}`}>
          <rect x={415 + i * 125} y="386" width="115" height="28" rx="8" fill="#ffffff" fillOpacity="0.02" />
          <rect x={425 + i * 125} y="394" width="50 - 5" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />
          <rect x={425 + i * 125} y="400" width="30" height="2" rx="1" fill="#ffffff" fillOpacity="0.06" />
          <circle cx={515 + i * 125} cy="400" r="4" fill={i === 2 ? "#F59E0B" : "#10B981"} fillOpacity={i === 2 ? "0.5" : "0.4"} />
        </g>
      ))}
    </svg>
  )
}
