import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArtworkFrame } from './ArtworkFrame'
import type { ArtworkProps } from './types'

/**
 * Innovation artwork — glowing light bulb and a launching rocket inside
 * an innovation ecosystem ring on a green gradient.
 */
export function InnovationArtwork({ from, to }: ArtworkProps) {
  const id = useId()
  const green = `url(#${id}-g)`
  const shouldReduceMotion = useReducedMotion()

  return (
    <ArtworkFrame from={from} to={to} caption="INNOVATION CELL // REGIONAL MEET">
      {/* Green glow */}
      <div
        className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-3xl"
        style={{ background: `radial-gradient(circle, ${from}59, transparent 70%)` }}
        aria-hidden="true"
      />

      <svg viewBox="0 0 320 240" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>

        {/* Innovation ecosystem ring */}
        <ellipse cx="150" cy="108" rx="118" ry="46" fill="none" stroke={green} strokeWidth="0.8" strokeDasharray="3 8" opacity="0.4" />
        <ellipse cx="150" cy="108" rx="96" ry="34" fill="none" stroke={green} strokeWidth="0.6" strokeDasharray="2 10" opacity="0.25" />

        {/* Orbit node */}
        <circle cx="262" cy="86" r="4" fill={green} opacity="0.8" />

        {/* Bulb */}
        <g>
          {/* Glass */}
          <circle cx="128" cy="92" r="34" fill="#0c0c12" stroke={green} strokeWidth="1.6" />
          {/* Glow inside glass */}
          <circle cx="128" cy="92" r="26" fill={green} opacity="0.16" />
          {/* Filament */}
          <path
            d="M114 96 L122 96 L128 88 L134 96 L142 96"
            fill="none"
            stroke={green}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bulb base */}
          <rect x="116" y="124" width="24" height="9" rx="3" fill={green} opacity="0.9" />
          <path d="M118 136 h20 M119 142 h18" stroke={green} strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
          {/* Glass highlight */}
          <path d="M108 72 a24 24 0 0 1 16 -10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        </g>

        {/* Rocket */}
        <g transform="translate(230 60)">
          {/* Exhaust trail */}
          <path
            d="M14 30 C10 40 18 46 14 56 C20 50 18 42 20 34"
            fill="none"
            stroke={green}
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.7"
          />
          {/* Flame */}
          <path d="M10 26 L18 26 L14 38 Z" fill={green} opacity="0.55" />
          {/* Body */}
          <path d="M8 4 L20 4 L20 22 L8 22 Z" fill="#0c0c12" stroke={green} strokeWidth="1.4" strokeLinejoin="round" />
          {/* Nose */}
          <path d="M8 4 L14 -6 L20 4 Z" fill={green} opacity="0.9" />
          {/* Window */}
          <circle cx="14" cy="13" r="3.6" fill={green} opacity="0.85" />
          {/* Fins */}
          <path d="M8 16 L2 22 L8 22 Z" fill={green} opacity="0.8" />
          <path d="M20 16 L26 22 L20 22 Z" fill={green} opacity="0.8" />
        </g>

        {/* Sparkles */}
        <g stroke={green} strokeWidth="1.3" strokeLinecap="round" opacity="0.7">
          <line x1="56" y1="52" x2="66" y2="52" />
          <line x1="61" y1="47" x2="61" y2="57" />
          <line x1="270" y1="156" x2="278" y2="156" />
          <line x1="274" y1="152" x2="274" y2="160" />
        </g>
      </svg>

      {/* Floating star accent */}
      <motion.span
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[16%] top-[16%] font-mono text-lg"
        style={{ color: 'transparent', WebkitTextStroke: `1px ${to}88`, textShadow: `0 0 14px ${to}44` }}
        aria-hidden="true"
      >
        &#10022;
      </motion.span>
    </ArtworkFrame>
  )
}
