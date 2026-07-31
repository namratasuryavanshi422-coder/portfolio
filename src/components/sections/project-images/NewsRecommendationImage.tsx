export function NewsRecommendationImage() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="nr-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="nr-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="nr-blue" x1="0" y1="0" x2="1" y2="1">
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

      {/* Logo */}
      <rect x="20" y="14" width="22" height="22" rx="6" fill="url(#nr-accent)" />
      <rect x="48" y="20" width="50" height="4" rx="2" fill="#ffffff" fillOpacity="0.3" />
      <rect x="48" y="27" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />

      {/* Search bar */}
      <rect x="250" y="14" width="240" height="22" rx="11" fill="#ffffff" fillOpacity="0.05" />
      <circle cx="262" cy="25" r="3.5" fill="#ffffff" fillOpacity="0.12" />
      <rect x="270" y="23" width="80" height="2.5" rx="1.25" fill="#ffffff" fillOpacity="0.08" />

      {/* Header right */}
      <rect x="600" y="17" width="40" height="16" rx="8" fill="#8B5CF6" fillOpacity="0.15" />
      <rect x="606" y="22" width="28" height="6" rx="3" fill="#8B5CF6" fillOpacity="0.4" />
      <circle cx="680" cy="25" r="8" fill="#ffffff" fillOpacity="0.05" />
      <rect x="677" y="22" width="6" height="6" rx="3" fill="#ffffff" fillOpacity="0.12" />
      <circle cx="710" cy="25" r="10" fill="url(#nr-accent)" fillOpacity="0.25" />
      <circle cx="710" cy="25" r="8" fill="#ffffff" fillOpacity="0.15" />

      {/* AI badge */}
      <rect x="740" y="15" width="40" height="20" rx="10" fill="url(#nr-accent)" fillOpacity="0.15" />
      <rect x="746" y="20" width="28" height="10" rx="5" fill="url(#nr-accent)" fillOpacity="0.3" />

      {/* Left sidebar - Categories */}
      <rect x="0" y="50" width="170" height="400" fill="#0A0A14" />
      <line x1="170" y1="50" x2="170" y2="450" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      <rect x="20" y="68" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.25" />

      {['Technology', 'Science', 'Business', 'Sports', 'Health', 'World'].map((_cat, i) => (
        <g key={`cat${i}`}>
          <rect x="20" y={90 + i * 38} width="130" height="28" rx="8" fill={i === 0 ? "#8B5CF6" : "#ffffff"} fillOpacity={i === 0 ? "0.12" : "0.02"} />
          {i === 0 && <rect x="20" y={90 + i * 38} width="3" height="28" rx="1.5" fill="#8B5CF6" />}
          <rect x={34} y={98 + i * 38} width="14" height="14" rx="4" fill="#ffffff" fillOpacity={i === 0 ? "0.35" : "0.1"} />
          <rect x={54} y={101 + i * 38} width={50 - (i > 2 ? 8 : 0)} height="3" rx="1.5" fill="#ffffff" fillOpacity={i === 0 ? "0.3" : "0.1"} />
          <rect x={54} y={107 + i * 38} width={30 - (i > 2 ? 5 : 0)} height="2" rx="1" fill="#ffffff" fillOpacity={i === 0 ? "0.15" : "0.06"} />
        </g>
      ))}

      {/* Main feed */}
      <rect x="170" y="50" width="420" height="400" fill="#08080E" />

      {/* Feed header */}
      <rect x="190" y="66" width="100" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="300" y="66" width="40" height="4" rx="2" fill="#ffffff" fillOpacity="0.06" />
      <rect x="460" y="66" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />

      {/* Feed tabs */}
      <rect x="190" y="82" width="50" height="24" rx="6" fill="#8B5CF6" fillOpacity="0.12" />
      <rect x="198" y="90" width="34" height="8" rx="4" fill="#8B5CF6" fillOpacity="0.3" />
      <rect x="248" y="82" width="50" height="24" rx="6" fill="#ffffff" fillOpacity="0.04" />
      <rect x="256" y="90" width="34" height="8" rx="4" fill="#ffffff" fillOpacity="0.1" />

      {/* Article cards */}
      {[
        { w: 380, h: 80, offsetX: 190, offsetY: 116, wide: true },
        { w: 380, h: 80, offsetX: 190, offsetY: 208, wide: true },
        { w: 380, h: 80, offsetX: 190, offsetY: 300, wide: true },
      ].map((article, i) => (
        <g key={`article${i}`}>
          <rect x={article.offsetX} y={article.offsetY} width={article.w} height={article.h} rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
          {/* Thumbnail */}
          <rect x={article.offsetX + 10} y={article.offsetY + 10} width={60} height={60} rx="8" fill={i === 0 ? "#3B82F6" : i === 1 ? "#8B5CF6" : "#10B981"} fillOpacity="0.12" />
          <rect x={article.offsetX + 16} y={article.offsetY + 24} width="48" height="32" rx="4" fill="#ffffff" fillOpacity="0.05" />
          {/* Title */}
          <rect x={article.offsetX + 82} y={article.offsetY + 14} width={article.w - 110} height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
          <rect x={article.offsetX + 82} y={article.offsetY + 22} width={article.w - 150} height="4" rx="2" fill="#ffffff" fillOpacity="0.12" />
          {/* Description */}
          <rect x={article.offsetX + 82} y={article.offsetY + 36} width={article.w - 130} height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
          <rect x={article.offsetX + 82} y={article.offsetY + 42} width={article.w - 180} height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
          {/* Tags */}
          {[0, 1].map((_, ti) => (
            <rect key={ti} x={article.offsetX + 82 + ti * 55} y={article.offsetY + 55} width={45} height="16" rx="4" fill="#ffffff" fillOpacity="0.04" />
          ))}
          {/* Reading time */}
          <rect x={article.offsetX + article.w - 60} y={article.offsetY + 14} width="45" height="4" rx="2" fill="#ffffff" fillOpacity="0.05" />
        </g>
      ))}

      {/* Right sidebar - Trending + Analytics */}
      <rect x="590" y="50" width="210" height="400" fill="#0A0A14" />
      <line x1="590" y1="50" x2="590" y2="450" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Trending section */}
      <rect x="608" y="68" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="670" y="68" width="50" height="18" rx="9" fill="#EF4444" fillOpacity="0.1" />
      <rect x="676" y="73" width="12" height="8" rx="4" fill="#EF4444" fillOpacity="0.3" />

      {[0, 1, 2, 3].map((_, i) => (
        <g key={`trend${i}`}>
          <rect x={608} y={96 + i * 38} width="176" height="28" rx="8" fill="#ffffff" fillOpacity="0.02" />
          <text x={608} y={114 + i * 38} fill="#ffffff" fillOpacity={i < 3 ? "0.3" : "0.1"} fontSize="10" fontWeight="bold" fontFamily="monospace">{`0${i + 1}`}</text>
          <rect x={626} y={102 + i * 38} width={80 - i * 10} height="3" rx="1.5" fill="#ffffff" fillOpacity={0.15 - i * 0.025} />
          <rect x={626} y={109 + i * 38} width={60 - i * 8} height="2" rx="1" fill="#ffffff" fillOpacity={0.08 - i * 0.015} />
        </g>
      ))}

      {/* Analytics widget */}
      <rect x="608" y="248" width="176" height="90" rx="12" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="620" y="260" width="65" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />

      {/* Mini bar chart */}
      {[35, 50, 30, 65, 45, 70, 55].map((h, i) => (
        <rect key={`bar${i}`} x={622 + i * 22} y={310 - (h * 0.4)} width="12" height={h * 0.4} rx="3" fill="url(#nr-accent)" fillOpacity={0.3 + (i / 7) * 0.4} />
      ))}
      <rect x="620" y="324" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />

      {/* Interest tags */}
      <rect x="608" y="352" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="608" y="366" width="55" height="20" rx="6" fill="#8B5CF6" fillOpacity="0.1" />
      <rect x="614" y="373" width="43" height="6" rx="3" fill="#8B5CF6" fillOpacity="0.3" />
      <rect x="668" y="366" width="50" height="20" rx="6" fill="#ffffff" fillOpacity="0.04" />
      <rect x="674" y="373" width="38" height="6" rx="3" fill="#ffffff" fillOpacity="0.1" />
      <rect x="608" y="392" width="40" height="20" rx="6" fill="#ffffff" fillOpacity="0.04" />
      <rect x="614" y="399" width="28" height="6" rx="3" fill="#ffffff" fillOpacity="0.1" />
      <rect x="654" y="392" width="60" height="20" rx="6" fill="#ffffff" fillOpacity="0.04" />
      <rect x="660" y="399" width="48" height="6" rx="3" fill="#ffffff" fillOpacity="0.1" />
    </svg>
  )
}
