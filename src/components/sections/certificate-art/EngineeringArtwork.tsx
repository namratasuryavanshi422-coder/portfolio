import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArtworkFrame } from './ArtworkFrame'
import type { ArtworkProps } from './types'

/**
 * MATLAB artwork — engineering blueprint with coordinate plots,
 * mathematical notation and a drafting ruler on a cyan gradient.
 */
export function EngineeringArtwork({ from, to }: ArtworkProps) {
  const id = useId()
  const cyan = `url(#${id}-c)`
  const shouldReduceMotion = useReducedMotion()

  const formulaStyle = {
    fill: cyan,
    fontSize: 13,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  } as const

  return (
    <ArtworkFrame from={from} to={to} caption="MATLAB // ONRAMP">
      {/* Cyan glow */}
      <div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: `radial-gradient(circle, ${from}59, transparent 70%)` }}
        aria-hidden="true"
      />

      {/* Fine blueprint grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
        aria-hidden="true"
      />

      <svg viewBox="0 0 320 240" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-c`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>

        {/* Coordinate axes */}
        <g stroke={cyan} strokeWidth="1.2" opacity="0.9">
          <path d="M34 196 L306 196" />
          <path d="M52 26 L52 210" />
          <path d="M298 190 L306 196 L298 202" fill="none" />
          <path d="M46 34 L52 26 L58 34" fill="none" />
        </g>

        {/* Ticks */}
        <g stroke={cyan} strokeWidth="1" opacity="0.6">
          <line x1="96" y1="192" x2="96" y2="200" />
          <line x1="140" y1="192" x2="140" y2="200" />
          <line x1="184" y1="192" x2="184" y2="200" />
          <line x1="228" y1="192" x2="228" y2="200" />
          <line x1="272" y1="192" x2="272" y2="200" />
          <line x1="72" y1="150" x2="80" y2="150" />
          <line x1="72" y1="104" x2="80" y2="104" />
          <line x1="72" y1="58" x2="80" y2="58" />
        </g>

        {/* Sine wave plot */}
        <path
          d="M52 122 C74 76 96 76 118 122 C140 168 162 168 184 122 C206 76 228 76 250 122 C272 168 284 168 292 150"
          fill="none"
          stroke={cyan}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Scatter points on the curve */}
        <g fill={cyan}>
          <circle cx="96" cy="102" r="3" />
          <circle cx="140" cy="150" r="3" />
          <circle cx="184" cy="102" r="3" />
          <circle cx="228" cy="150" r="3" />
        </g>

        {/* Bar chart */}
        <g fill={cyan} opacity="0.5">
          <rect x="240" y="44" width="10" height="34" rx="2" />
          <rect x="256" y="30" width="10" height="48" rx="2" />
          <rect x="272" y="52" width="10" height="26" rx="2" />
        </g>

        {/* Mathematical notation */}
        <text x="46" y="44" {...formulaStyle} fontWeight="700">&#8721; f(x&#752;) dx</text>
        <text x="206" y="84" {...formulaStyle} fontWeight="600" fontSize="12">&#8730;(x&#178; + y&#178;)</text>
        <text x="52" y="228" {...formulaStyle} fontWeight="600" fontSize="12" opacity="0.75">y = sin(x)  &#183;  &#960;</text>

        {/* Drafting ruler */}
        <g transform="translate(96 200)">
          <rect x="0" y="0" width="128" height="10" rx="4" fill="#0c0c12" stroke={cyan} strokeWidth="0.8" opacity="0.85" />
          <g stroke={cyan} strokeWidth="0.8" opacity="0.7">
            <line x1="8" y1="2" x2="8" y2="8" />
            <line x1="24" y1="3" x2="24" y2="8" />
            <line x1="40" y1="2" x2="40" y2="8" />
            <line x1="56" y1="3" x2="56" y2="8" />
            <line x1="72" y1="2" x2="72" y2="8" />
            <line x1="88" y1="3" x2="88" y2="8" />
            <line x1="104" y1="2" x2="104" y2="8" />
            <line x1="120" y1="3" x2="120" y2="8" />
          </g>
        </g>
      </svg>

      {/* Floating equation accent */}
      <motion.span
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[10%] top-[16%] font-mono text-sm"
        style={{ color: 'transparent', WebkitTextStroke: `1px ${to}77`, textShadow: `0 0 16px ${to}33` }}
        aria-hidden="true"
      >
        &#8747;&#8730;x dx
      </motion.span>
    </ArtworkFrame>
  )
}
