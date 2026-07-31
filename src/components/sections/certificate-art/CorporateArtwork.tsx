import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArtworkFrame } from './ArtworkFrame'
import type { ArtworkProps } from './types'

/**
 * TCS artwork — corporate circuit board with a central processor chip,
 * enterprise building blocks and blue gradients.
 */
export function CorporateArtwork({ from, to }: ArtworkProps) {
  const id = useId()
  const blue = `url(#${id}-b)`
  const shouldReduceMotion = useReducedMotion()

  return (
    <ArtworkFrame from={from} to={to} caption="TCS // TECHBYTES">
      {/* Blue glow */}
      <div
        className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-3xl"
        style={{ background: `radial-gradient(circle, ${from}59, transparent 70%)` }}
        aria-hidden="true"
      />

      <svg viewBox="0 0 320 240" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-b`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>

        {/* Circuit traces from chip to nodes */}
        <g fill="none" stroke={blue} strokeWidth="1.4" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
          <path d="M105 90 L82 90 L82 56 L58 56" />
          <path d="M105 110 L86 110 L86 178 L62 178" />
          <path d="M215 90 L238 90 L238 52 L264 52" />
          <path d="M215 110 L234 110 L234 184 L258 184" />
          <path d="M160 65 L160 40 L190 40" />
          <path d="M160 155 L160 182 L132 182" />
        </g>

        {/* Trace nodes */}
        <g fill={blue}>
          <circle cx="58" cy="56" r="5" />
          <circle cx="62" cy="178" r="5" />
          <circle cx="264" cy="52" r="5" />
          <circle cx="258" cy="184" r="5" />
          <circle cx="190" cy="40" r="4" />
          <circle cx="132" cy="182" r="4" />
        </g>

        {/* Data packets flowing on traces */}
        <g fill="#fff">
          <circle cx="90" cy="56" r="2.4" opacity="0.9" />
          <circle cx="226" cy="184" r="2.4" opacity="0.9" />
          <circle cx="168" cy="40" r="2.4" opacity="0.9" />
        </g>

        {/* Central chip */}
        <rect x="105" y="65" width="110" height="90" rx="12" fill="#0c0c12" stroke={blue} strokeWidth="1.6" />
        <rect x="117" y="77" width="86" height="66" rx="7" fill="none" stroke={blue} strokeWidth="0.8" opacity="0.45" />
        {/* Chip inner circuit glyph */}
        <g stroke={blue} strokeWidth="1.1" opacity="0.8" strokeLinecap="round">
          <path d="M132 92 h20 l6 6 h12 l6 6" />
          <path d="M188 128 h-18 l-6 -6 h-12 l-6 -6" />
          <circle cx="132" cy="92" r="2.5" fill={blue} />
          <circle cx="188" cy="128" r="2.5" fill={blue} />
        </g>

        {/* Enterprise building blocks */}
        <g fill={blue} opacity="0.4">
          <rect x="20" y="196" width="16" height="18" rx="2" />
          <rect x="40" y="188" width="16" height="26" rx="2" />
          <rect x="60" y="192" width="16" height="22" rx="2" />
          <rect x="228" y="196" width="16" height="18" rx="2" />
          <rect x="248" y="186" width="16" height="28" rx="2" />
          <rect x="268" y="192" width="16" height="22" rx="2" />
        </g>

        {/* Subtle corner brackets */}
        <g stroke={blue} strokeWidth="1.2" opacity="0.4">
          <path d="M22 22 h14 M22 22 v14" fill="none" />
          <path d="M298 22 h-14 M298 22 v14" fill="none" />
        </g>
      </svg>

      {/* Floating enterprise accent */}
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[8%] top-[14%]"
        style={{ textShadow: `0 0 14px ${from}` }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <rect x="3" y="10" width="5" height="11" rx="1" fill="none" stroke={blue} strokeWidth="1.4" />
          <rect x="10" y="5" width="5" height="16" rx="1" fill="none" stroke={blue} strokeWidth="1.4" />
          <rect x="17" y="13" width="5" height="8" rx="1" fill="none" stroke={blue} strokeWidth="1.4" />
        </svg>
      </motion.div>
    </ArtworkFrame>
  )
}
