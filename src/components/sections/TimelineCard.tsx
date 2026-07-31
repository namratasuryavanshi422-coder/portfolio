import { useReducedMotion, motion } from 'framer-motion'
import { Badge } from '@/components/ui'
import type { TimelineItem } from '@/data/journey'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

type TimelineCardProps = {
  item: TimelineItem
  index: number
  side: 'left' | 'right' | 'full'
}

export function TimelineCard({ item, index, side }: TimelineCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion
  const Icon = item.icon

  const getInitial = () => {
    if (side === 'left') return { opacity: 0, x: -30 }
    if (side === 'right') return { opacity: 0, x: 30 }
    return { opacity: 0, y: 24 }
  }

  return (
    <motion.div
      initial={isAnimated ? getInitial() : undefined}
      whileInView={isAnimated ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        ease: easeOutExpo,
        delay: index * 0.15,
      }}
      className="group"
    >
      <article className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.12)]">
        {/* Gradient overlay on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-full w-full rounded-2xl bg-gradient-to-br from-accent-primary/[0.03] to-transparent" />
        </div>

        {/* Glow on right edge */}
        <div className="pointer-events-none absolute -right-1 top-0 h-full w-16 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-accent-primary/10 to-accent-secondary/5" />
        </div>

        <div className="relative p-5 sm:p-6">
          {/* Header row: period + category */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10">
                <Icon className="h-4 w-4 text-accent-primary" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium tracking-wide text-white/30">
                {item.period}
              </span>
            </div>
            <Badge variant="accent" size="sm">
              {item.category}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="mt-4 text-lg font-semibold tracking-tight text-white sm:text-xl">
            {item.title}
          </h3>

          {/* Institution */}
          {item.institution && (
            <p className="mt-0.5 text-sm font-medium text-accent-primary/70">
              {item.institution}
            </p>
          )}

          {/* Description */}
          <p className="body-text mt-3 text-sm leading-relaxed text-white/50">
            {item.description}
          </p>

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <ul className="mt-4 space-y-1.5">
              {item.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={isAnimated ? { opacity: 0, x: -8 } : undefined}
                  whileInView={isAnimated ? { opacity: 1, x: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.2 + i * 0.05 }}
                  className="flex items-start gap-2.5 text-sm text-white/40"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-primary/50" />
                  {h}
                </motion.li>
              ))}
            </ul>
          )}

          {/* Tech stack */}
          {item.techStack && item.techStack.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-white/35"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </motion.div>
  )
}
