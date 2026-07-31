import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

function seeded(index: number, salt: number): number {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453
  return value - Math.floor(value)
}

type ParticlesProps = {
  from: string
  to: string
  count?: number
}

/**
 * Floating glowing particles. Deterministic positions so the layout is
 * stable across renders and reduced-motion friendly.
 */
export function Particles({ from, to, count = 16 }: ParticlesProps) {
  const shouldReduceMotion = useReducedMotion()

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 2 + seeded(i, 3) * 2.5
        return {
          left: `${seeded(i, 1) * 100}%`,
          top: `${seeded(i, 2) * 100}%`,
          size,
          delay: seeded(i, 4) * 4,
          duration: 5 + seeded(i, 5) * 5,
          color: seeded(i, 6) > 0.5 ? from : to,
          glow: `0 0 ${size * 3}px`,
        }
      }),
    [count, from, to],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `${particle.glow} ${particle.color}66`,
          }}
          animate={shouldReduceMotion ? undefined : { y: [0, -18, 0], opacity: [0, 0.9, 0] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
