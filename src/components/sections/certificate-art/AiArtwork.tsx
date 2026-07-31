import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArtworkFrame } from './ArtworkFrame'
import type { ArtworkProps } from './types'

/**
 * AI Internship artwork — futuristic neural-network chip with purple
 * glowing gradients and floating particles.
 */
export function AiArtwork({ from, to }: ArtworkProps) {
  const id = useId()
  const gradient = `url(#${id}-g)`
  const shouldReduceMotion = useReducedMotion()

  return (
    <ArtworkFrame from={from} to={to} caption="ARTIFICIAL INTELLIGENCE // INTERNSHIP">
      {/* Core glow */}
      <div
        className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: `radial-gradient(circle, ${from}66, transparent 70%)` }}
        aria-hidden="true"
      />

      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          viewBox="0 0 320 240"
          className="h-40 w-60 sm:h-52 sm:w-80"
          role="img"
          aria-label="Neural network chip illustration"
        >
          <defs>
            <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
            <radialGradient id={`${id}-core`} cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor={to} stopOpacity="0.95" />
              <stop offset="100%" stopColor={from} stopOpacity="0.85" />
            </radialGradient>
          </defs>

          {/* Orbit rings */}
          <ellipse cx="160" cy="120" rx="128" ry="52" fill="none" stroke={gradient} strokeWidth="0.8" strokeDasharray="3 7" opacity="0.3" />
          <ellipse cx="160" cy="120" rx="148" ry="66" fill="none" stroke={gradient} strokeWidth="0.6" strokeDasharray="2 9" opacity="0.18" />

          {/* Neural links */}
          <g stroke={gradient} strokeWidth="1" opacity="0.4">
            <line x1="58" y1="64" x2="120" y2="96" />
            <line x1="58" y1="64" x2="120" y2="160" />
            <line x1="72" y1="182" x2="128" y2="160" />
            <line x1="120" y1="96" x2="196" y2="58" />
            <line x1="128" y1="160" x2="214" y2="178" />
            <line x1="196" y1="58" x2="262" y2="92" />
            <line x1="214" y1="178" x2="252" y2="148" />
          </g>

          {/* Neural nodes */}
          <g fill={gradient}>
            <circle cx="58" cy="64" r="5" />
            <circle cx="72" cy="182" r="4.5" />
            <circle cx="196" cy="58" r="5" />
            <circle cx="214" cy="178" r="4.5" />
            <circle cx="262" cy="92" r="4" />
            <circle cx="252" cy="148" r="3.5" />
          </g>

          {/* Chip pins */}
          <g fill={gradient}>
            <rect x="136" y="70" width="8" height="12" rx="2" />
            <rect x="156" y="70" width="8" height="12" rx="2" />
            <rect x="176" y="70" width="8" height="12" rx="2" />
            <rect x="136" y="158" width="8" height="12" rx="2" />
            <rect x="156" y="158" width="8" height="12" rx="2" />
            <rect x="176" y="158" width="8" height="12" rx="2" />
            <rect x="110" y="98" width="12" height="8" rx="2" />
            <rect x="110" y="118" width="12" height="8" rx="2" />
            <rect x="198" y="98" width="12" height="8" rx="2" />
            <rect x="198" y="118" width="12" height="8" rx="2" />
          </g>

          {/* Chip body */}
          <rect x="120" y="80" width="80" height="80" rx="16" fill="#0c0c12" stroke={gradient} strokeWidth="1.6" />

          {/* Chip core */}
          <rect x="142" y="102" width="36" height="36" rx="9" fill={`url(#${id}-core)`} />
          <text
            x="160"
            y="126"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="15"
            fontWeight="800"
            fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
            fill="#0a0a0f"
          >
            AI
          </text>
        </svg>
      </motion.div>

      {/* Accent sparkles */}
      <span
        className="absolute right-[12%] top-[18%] font-mono text-sm text-white/30"
        style={{ textShadow: `0 0 12px ${to}` }}
        aria-hidden="true"
      >
        +
      </span>
      <span
        className="absolute left-[10%] top-[24%] font-mono text-xs text-white/20"
        style={{ textShadow: `0 0 12px ${from}` }}
        aria-hidden="true"
      >
        +
      </span>
    </ArtworkFrame>
  )
}
