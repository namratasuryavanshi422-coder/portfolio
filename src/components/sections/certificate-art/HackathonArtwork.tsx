import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArtworkFrame } from './ArtworkFrame'
import type { ArtworkProps } from './types'

/**
 * Hackathon artwork — golden trophy surrounded by code brackets and
 * abstract geometric shapes on an orange-red gradient.
 */
export function HackathonArtwork({ from, to }: ArtworkProps) {
  const id = useId()
  const gold = `url(#${id}-gold)`
  const red = `url(#${id}-red)`
  const shouldReduceMotion = useReducedMotion()

  return (
    <ArtworkFrame from={from} to={to} caption="NATIONAL LEVEL // HACKATHON">
      {/* Warm glow behind trophy */}
      <div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-3xl"
        style={{ background: `radial-gradient(circle, ${from}59, transparent 70%)` }}
        aria-hidden="true"
      />

      {/* Abstract geometry */}
      <svg viewBox="0 0 320 240" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="55%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id={`${id}-red`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>

        {/* Geometric shards */}
        <polygon points="20,34 64,22 52,62" fill="none" stroke={red} strokeWidth="1" opacity="0.35" />
        <polygon points="272,190 318,176 304,218" fill="none" stroke={red} strokeWidth="1" opacity="0.3" />
        <polygon points="34,192 70,178 60,212" fill={red} opacity="0.12" />
        <polygon points="256,30 296,22 284,56" fill={red} opacity="0.12" />

        {/* Confetti dashes */}
        <g stroke={gold} strokeWidth="1.4" strokeLinecap="round" opacity="0.5">
          <line x1="80" y1="46" x2="94" y2="46" />
          <line x1="240" y1="196" x2="256" y2="196" />
          <line x1="230" y1="52" x2="230" y2="66" />
          <line x1="92" y1="180" x2="92" y2="192" />
        </g>
      </svg>

      {/* Code brackets */}
      <span
        className="absolute left-[9%] top-1/2 -translate-y-1/2 font-mono text-2xl font-bold sm:text-3xl"
        style={{ color: 'transparent', WebkitTextStroke: `1px ${from}88`, textShadow: `0 0 18px ${from}44` }}
        aria-hidden="true"
      >
        {'</>'}
      </span>
      <span
        className="absolute right-[9%] top-1/2 -translate-y-1/2 font-mono text-2xl font-bold sm:text-3xl"
        style={{ color: 'transparent', WebkitTextStroke: `1px ${to}88`, textShadow: `0 0 18px ${to}44` }}
        aria-hidden="true"
      >
        {'</>'}
      </span>

      {/* Trophy */}
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          viewBox="0 0 320 240"
          className="h-44 w-56 sm:h-56 sm:w-72"
          role="img"
          aria-label="Golden trophy illustration"
        >
          {/* Trophy shadow */}
          <ellipse cx="160" cy="196" rx="52" ry="9" fill="black" opacity="0.35" />

          {/* Cup */}
          <path
            d="M134 64 L186 64 L186 94 C186 114 172 124 160 124 C148 124 134 114 134 94 Z"
            fill="none"
            stroke={gold}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          {/* Cup inner glow */}
          <path
            d="M140 72 L180 72 L180 92 C180 108 169 116 160 116 C151 116 140 108 140 92 Z"
            fill={gold}
            opacity="0.18"
          />

          {/* Handles */}
          <path d="M134 78 C112 80 112 106 134 108" fill="none" stroke={gold} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M186 78 C208 80 208 106 186 108" fill="none" stroke={gold} strokeWidth="2.2" strokeLinecap="round" />

          {/* Star */}
          <path
            d="M160 40 L163.5 51 L175 51 L165.7 58 L169 69 L160 62.5 L151 69 L154.3 58 L145 51 L156.5 51 Z"
            fill={gold}
            opacity="0.95"
          />

          {/* Stem + base */}
          <path d="M152 126 L168 126 L165 141 L155 141 Z" fill={gold} opacity="0.9" />
          <rect x="140" y="142" width="40" height="8" rx="3" fill={gold} opacity="0.9" />
          <rect x="146" y="152" width="28" height="6" rx="3" fill={gold} opacity="0.7" />

          {/* Shine on cup */}
          <path d="M142 72 L146 72 L146 92 C146 98 147 103 150 107 L142 106 C138 102 142 80 142 72 Z" fill={gold} opacity="0.5" />
        </svg>
      </motion.div>

      {/* Sparkles */}
      <span
        className="absolute left-[16%] top-[22%] text-sm text-white/40"
        style={{ textShadow: `0 0 12px ${from}` }}
        aria-hidden="true"
      >
        +
      </span>
      <span
        className="absolute right-[16%] top-[30%] text-xs text-white/30"
        style={{ textShadow: `0 0 12px ${to}` }}
        aria-hidden="true"
      >
        +
      </span>
    </ArtworkFrame>
  )
}
