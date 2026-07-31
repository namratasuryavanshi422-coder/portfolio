import { useReducedMotion, motion } from 'framer-motion'
import { JOURNEY_STATS } from '@/data/journey'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

export function JourneyStats() {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion

  return (
    <motion.div
      variants={isAnimated ? containerVariants : undefined}
      initial={isAnimated ? 'hidden' : undefined}
      whileInView={isAnimated ? 'visible' : undefined}
      viewport={{ once: true, margin: '-40px' }}
      className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
    >
      {JOURNEY_STATS.map((stat) => (
        <motion.div
          key={stat.label}
          variants={isAnimated ? cardVariants : undefined}
          className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-0.5"
        >
          <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100">
            <div className="h-full w-full rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10" />
          </div>
          <div className="relative">
            <p className="font-mono text-xl font-bold text-accent-primary sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs font-medium tracking-wide text-white/40">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
