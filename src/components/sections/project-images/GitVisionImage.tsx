export function GitVisionImage() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="gv-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="gv-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="gv-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
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
      <rect x="20" y="14" width="22" height="22" rx="6" fill="url(#gv-accent)" />
      <path d="M26 20 L31 25 L26 30 M34 20 L29 25 L34 30" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="48" y="20" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.3" />
      <rect x="48" y="27" width="35" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />

      {/* Search bar */}
      <rect x="250" y="14" width="280" height="22" rx="11" fill="#ffffff" fillOpacity="0.05" />
      <circle cx="264" cy="25" r="4" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" />
      <line x1="267" y1="28" x2="270" y2="31" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" strokeLinecap="round" />
      <rect x="276" y="23" width="90" height="2.5" rx="1.25" fill="#ffffff" fillOpacity="0.08" />

      {/* User */}
      <circle cx="680" cy="25" r="10" fill="url(#gv-accent)" fillOpacity="0.25" />
      <circle cx="680" cy="25" r="8" fill="#ffffff" fillOpacity="0.15" />
      <rect x="720" y="19" width="60" height="12" rx="6" fill="#6366F1" fillOpacity="0.12" />
      <rect x="728" y="23" width="44" height="4" rx="2" fill="#6366F1" fillOpacity="0.3" />

      {/* Left sidebar — Repository browser */}
      <rect x="0" y="50" width="220" height="400" fill="#0A0A14" />
      <line x1="220" y1="50" x2="220" y2="450" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Repo header */}
      <rect x="16" y="64" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="140" y="64" width="60" height="16" rx="8" fill="#6366F1" fillOpacity="0.1" />
      <rect x="148" y="69" width="44" height="6" rx="3" fill="#6366F1" fillOpacity="0.25" />

      {/* Repo list */}
      {[
        { active: true, name: 'gitvision-ai', lang: 'TypeScript', stars: '1.2k' },
        { active: false, name: 'react-core', lang: 'TypeScript', stars: '890' },
        { active: false, name: 'api-server', lang: 'Python', stars: '456' },
        { active: false, name: 'docs-site', lang: 'MDX', stars: '234' },
      ].map((_repo, i) => (
        <g key={`repo${i}`}>
          <rect x="12" y={92 + i * 44} width="196" height="36" rx="8" fill={i === 0 ? "#6366F1" : "#ffffff"} fillOpacity={i === 0 ? "0.1" : "0.02"} />
          {i === 0 && <rect x="12" y={92 + i * 44} width="3" height="36" rx="1.5" fill="#6366F1" />}
          {/* Repo icon */}
          <rect x={24} y={100 + i * 44} width="12" height="12" rx="6" fill="#ffffff" fillOpacity={i === 0 ? "0.3" : "0.1"} />
          <rect x={24} y={104 + i * 44} width="12" height="4" rx="2" fill="#ffffff" fillOpacity={i === 0 ? "0.15" : "0.05"} />
          {/* Name */}
          <rect x={44} y={100 + i * 44} width={70 - i * 5} height="3" rx="1.5" fill="#ffffff" fillOpacity={i === 0 ? "0.35" : "0.12"} />
          <rect x={44} y={106 + i * 44} width={50 - i * 8} height="2" rx="1" fill="#ffffff" fillOpacity={i === 0 ? "0.15" : "0.06"} />
          {/* Star count */}
          <text x={180} y={104 + i * 44} fill="#ffffff" fillOpacity={i === 0 ? "0.3" : "0.1"} fontSize="8" fontFamily="monospace">★</text>
          <rect x={186} y={102 + i * 44} width="16" height="2" rx="1" fill="#ffffff" fillOpacity={i === 0 ? "0.2" : "0.06"} />
        </g>
      ))}

      {/* Main content area */}
      <rect x="220" y="50" width="360" height="400" fill="#08080E" />

      {/* Breadcrumb */}
      <rect x="236" y="66" width="60" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />
      <text x="300" y="69" fill="#ffffff" fillOpacity="0.15" fontSize="10" fontFamily="monospace">/</text>
      <rect x="312" y="66" width="80" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.2" />
      <rect x="400" y="66" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />

      {/* File tree panel */}
      <rect x="236" y="82" width="140" height="180" rx="8" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="244" y="90" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />

      {['src/', 'components/', 'hooks/', 'utils/', 'types/', 'app/'].map((_file, i) => (
        <g key={`file${i}`}>
          <rect x={244} y={104 + i * 24} width="124" height="18" rx="4" fill="#ffffff" fillOpacity={i === 0 ? "0.04" : "0.02"} />
          <rect x={252} y={110 + i * 24} width="8" height="6" rx="2" fill="#ffffff" fillOpacity={i < 2 ? "0.2" : "0.1"} />
          {i === 0 && <rect x={252} y={110 + i * 24} width="8" height="6" rx="2" fill="url(#gv-accent)" fillOpacity="0.3" />}
          <rect x={266} y={110 + i * 24} width={60 - i * 5} height="2.5" rx="1.25" fill="#ffffff" fillOpacity={i < 2 ? "0.15" : "0.06"} />
        </g>
      ))}

      {/* Code preview area */}
      <rect x="388" y="82" width="180" height="180" rx="8" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />

      {/* Code lines */}
      {[0, 1, 2, 3, 5, 6, 7, 8].map((_line, i) => (
        <rect key={`code${i}`} x={400} y={94 + i * 18} width={i === 4 ? 0 : 60 - ((i + 1) % 3) * 10} height="2.5" rx="1.25" fill="#ffffff" fillOpacity={i === 0 ? "0.2" : i < 3 ? "0.1" : "0.04"} />
      ))}
      {/* Syntax highlight line */}
      <rect x="400" y="130" width="110" height="2.5" rx="1.25" fill="#6366F1" fillOpacity="0.2" />
      <rect x="400" y="148" width="80" height="2.5" rx="1.25" fill="#06B6D4" fillOpacity="0.15" />

      {/* Analysis results section */}
      <rect x="236" y="274" width="332" height="100" rx="10" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <rect x="248" y="286" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />

      {/* Tech tags */}
      {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map((_tech, i) => (
        <rect key={`tech${i}`} x={248 + i * 63} y={300} width="56" height="20" rx="6" fill="#ffffff" fillOpacity={i === 0 ? "0.06" : "0.03"} />
      ))}
      <rect x={254} y={306} width="44" height="8" rx="4" fill="#6366F1" fillOpacity="0.2" />

      {/* READMl metrics */}
      <rect x="248" y="330" width="70" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="330" y="330" width="50" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="392" y="330" width="80" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />

      {/* Right sidebar — AI Insights */}
      <rect x="580" y="50" width="220" height="400" fill="#0A0A14" />
      <line x1="580" y1="50" x2="580" y2="450" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {/* AI badge */}
      <rect x="596" y="66" width="40" height="18" rx="9" fill="#6366F1" fillOpacity="0.12" />
      <rect x="604" y="72" width="24" height="6" rx="3" fill="#6366F1" fillOpacity="0.3" />
      <rect x="644" y="68" width="50" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />

      {/* AI Insight cards */}
      {[
        { label: 'Tech Stack', value: '7 technologies', color: '#6366F1' },
        { label: 'Complexity', value: 'Intermediate', color: '#06B6D4' },
        { label: 'Readme Score', value: '92/100', color: '#10B981' },
      ].map((insight, i) => (
        <g key={`insight${i}`}>
          <rect x={596} y={96 + i * 58} width="188" height="48" rx="8" fill="#0C0C16" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
          <circle cx={612} cy={114 + i * 58} r="12" fill={insight.color} fillOpacity="0.1" />
          <circle cx={612} cy={114 + i * 58} r="6" fill={insight.color} fillOpacity="0.2" />
          <rect x={632} y={104 + i * 58} width={50} height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />
          <rect x={632} y={112 + i * 58} width={70 - i * 10} height="8" rx="4" fill={insight.color} fillOpacity="0.25" />
        </g>
      ))}

      {/* AI Summary card */}
      <rect x="596" y="276" width="188" height="90" rx="10" fill="#0C0C16" stroke="#6366F1" strokeOpacity="0.06" strokeWidth="1" />
      <rect x="608" y="288" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      <rect x="670" y="288" width="40" height="14" rx="7" fill="#6366F1" fillOpacity="0.1" />
      <rect x="676" y="293" width="28" height="4" rx="2" fill="#6366F1" fillOpacity="0.25" />

      {/* Summary text lines */}
      <rect x="608" y="306" width="164" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
      <rect x="608" y="314" width="140" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
      <rect x="608" y="322" width="155" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.05" />
      <rect x="608" y="330" width="120" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
      <rect x="608" y="340" width="164" height="8" rx="4" fill="#06B6D4" fillOpacity="0.08" />
      <rect x="608" y="344" width="80" height="8" rx="4" fill="#06B6D4" fillOpacity="0.12" />

      {/* Bottom metrics bar */}
      <line x1="220" y1="388" x2="580" y2="388" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />

      {[
        { value: '1.2K', label: 'Stars' },
        { value: '89', label: 'Forks' },
        { value: '34', label: 'Contributors' },
        { value: '98%', label: 'Code Quality' },
      ].map((metric, i) => (
        <g key={`metric${i}`}>
          <text x={250 + i * 90} y="408" fill="#6366F1" fillOpacity="0.5" fontSize="12" fontWeight="bold" fontFamily="monospace">{metric.value}</text>
          <rect x={250 + i * 90} y={415} width={50} height="2.5" rx="1.25" fill="#ffffff" fillOpacity="0.1" />
          {i < 3 && <line x1={330 + i * 90} y1="396" x2={330 + i * 90} y2="420" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />}
        </g>
      ))}
    </svg>
  )
}
