export function SmartParkingImage() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sp-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="sp-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="green-sp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
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

      <rect x="20" y="15" width="22" height="22" rx="6" fill="url(#sp-accent)" />
      <rect x="48" y="21" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.3" />
      <rect x="48" y="28" width="35" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />

      <rect x="250" y="15" width="180" height="22" rx="11" fill="#ffffff" fillOpacity="0.05" />
      <circle cx="262" cy="26" r="3.5" fill="#ffffff" fillOpacity="0.12" />
      <rect x="270" y="24" width="60" height="2.5" rx="1.25" fill="#ffffff" fillOpacity="0.08" />

      <rect x="680" y="16" width="100" height="20" rx="10" fill="#06B6D4" fillOpacity="0.1" />
      <rect x="686" y="21" width="32" height="10" rx="5" fill="#06B6D4" fillOpacity="0.25" />
      <rect x="724" y="22" width="46" height="8" rx="4" fill="#06B6D4" fillOpacity="0.2" />

      {/* Left panel - Parking lot */}
      <rect x="0" y="52" width="480" height="398" fill="#08080E" />
      <rect x="16" y="66" width="448" height="4" rx="2" fill="#ffffff" fillOpacity="0.15" />

      {/* Parking lot grid */}
      <g transform="translate(24, 84)">
        {/* Row labels */}
        {[...Array(5)].map((_, ri) => (
          <text key={`rl${ri}`} x="-4" y={ri * 56 + 34} fill="#ffffff" fillOpacity="0.2" fontSize="10" fontFamily="monospace" textAnchor="end">
            {String.fromCharCode(65 + ri)}
          </text>
        ))}

        {/* Parking slots */}
        {[...Array(5)].map((_, ri) => (
          <g key={`row${ri}`}>
            {[...Array(8)].map((_, ci) => {
              const isOccupied = (ri * 8 + ci) % 3 === 0 || (ri * 8 + ci) % 7 === 0
              const isSelected = ri === 1 && ci === 5
              return (
                <g key={`slot${ri}_${ci}`}>
                  <rect
                    x={ci * 54 + 8}
                    y={ri * 56 + 4}
                    width="48"
                    height="46"
                    rx="8"
                    fill={isSelected ? "#06B6D4" : isOccupied ? "#EF4444" : "#10B981"}
                    fillOpacity={isSelected ? "0.15" : isOccupied ? "0.12" : "0.08"}
                    stroke={isSelected ? "#06B6D4" : isOccupied ? "#EF4444" : "#10B981"}
                    strokeOpacity={isSelected ? "0.5" : isOccupied ? "0.2" : "0.15"}
                    strokeWidth="1"
                  />
                  {/* Car icon */}
                  <rect x={ci * 54 + 18} y={ri * 56 + 16} width="28" height="18" rx="4" fill={isSelected ? "#06B6D4" : isOccupied ? "#EF4444" : "#10B981"} fillOpacity={isSelected ? "0.3" : isOccupied ? "0.25" : "0.15"} />
                  <rect x={ci * 54 + 24} y={ri * 56 + 20} width="16" height="10" rx="3" fill="#08080E" fillOpacity="0.5" />
                  {isSelected && (
                    <>
                      <rect x={ci * 54 + 14} y={ri * 56 + 4} width="36" height="46" rx="8" fill="none" stroke="#06B6D4" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3,2" />
                      <rect x={ci * 54 + 8} y={ri * 56 + 50} width="48" height="2" rx="1" fill="#06B6D4" fillOpacity="0.5" />
                    </>
                  )}
                </g>
              )
            })}
          </g>
        ))}
      </g>

      {/* Legend */}
      <rect x="20" y="408" width="10" height="10" rx="3" fill="#10B981" fillOpacity="0.3" />
      <rect x="36" y="410" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="90" y="408" width="10" height="10" rx="3" fill="#EF4444" fillOpacity="0.3" />
      <rect x="106" y="410" width="35" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="160" y="408" width="10" height="10" rx="3" fill="#06B6D4" fillOpacity="0.3" />
      <rect x="176" y="410" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />

      {/* Right panel - Stats + Map */}
      <rect x="480" y="52" width="320" height="398" fill="#0A0A14" />
      <line x1="480" y1="52" x2="480" y2="450" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Stats cards */}
      <rect x="496" y="68" width="140" height="70" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="496" y="68" width="140" height="70" rx="10" fill="url(#sp-glow)" opacity="0.5" />
      <text x="510" y="96" fill="#10B981" fontSize="22" fontWeight="bold" fontFamily="monospace">48</text>
      <rect x="510" y="108" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="510" y="114" width="60" height="2" rx="1" fill="#ffffff" fillOpacity="0.06" />

      <rect x="650" y="68" width="140" height="70" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <text x="664" y="96" fill="#EF4444" fontSize="22" fontWeight="bold" fontFamily="monospace">36</text>
      <rect x="664" y="108" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="664" y="114" width="55" height="2" rx="1" fill="#ffffff" fillOpacity="0.06" />

      {/* Live Map mini */}
      <rect x="496" y="152" width="294" height="130" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="510" y="166" width="45" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <circle cx="562" cy="168" r="3" fill="#10B981" /> {/* Live dot */}
      <rect x="568" y="166" width="25" height="4" rx="2" fill="#10B981" fillOpacity="0.5" />

      {/* Map area */}
      <rect x="510" y="182" width="266" height="86" rx="8" fill="#08080E" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      {/* Road lines */}
      <line x1="510" y1="210" x2="776" y2="210" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="510" y1="240" x2="776" y2="240" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="620" y1="182" x2="620" y2="268" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      {/* Map dots */}
      {[
        { x: 560, y: 200, color: "#10B981", size: 3 },
        { x: 640, y: 225, color: "#06B6D4", size: 4 },
        { x: 700, y: 195, color: "#10B981", size: 3 },
        { x: 590, y: 250, color: "#EF4444", size: 3 },
        { x: 720, y: 245, color: "#10B981", size: 3 },
      ].map((pt) => (
        <circle key={pt.x} cx={pt.x} cy={pt.y} r={pt.size} fill={pt.color} fillOpacity="0.6" />
      ))}

      {/* Occupancy heatmap */}
      <rect x="496" y="296" width="294" height="70" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="510" y="310" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="530" y="310" width="40" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />

      {/* Heatmap bars */}
      {[0.7, 0.5, 0.8, 0.3, 0.9, 0.6, 0.4, 0.75, 0.5, 0.85, 0.65, 0.35].map((val, i) => {
        const hue = Math.round(120 - val * 120)
        return (
          <rect
            key={`hb${i}`}
            x={514 + i * 22}
            y={354 - val * 28}
            width="16"
            height={val * 28}
            rx="3"
            fill={`hsl(${hue}, 70%, 45%)`}
            fillOpacity="0.4"
          />
        )
      })}

      {/* Reservation panel */}
      <rect x="496" y="380" width="294" height="56" rx="10" fill="#0C0C16" stroke="#06B6D4" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="510" y="394" width="45" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="510" y="402" width="80" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
      <rect x="720" y="392" width="54" height="32" rx="8" fill="url(#sp-accent)" fillOpacity="0.15" />
      <rect x="726" y="398" width="42" height="20" rx="10" fill="url(#sp-accent)" fillOpacity="0.3" />
    </svg>
  )
}
