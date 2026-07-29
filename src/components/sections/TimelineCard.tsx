import { motion, useReducedMotion } from 'framer-motion'
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

  const getInitial = () => {
    if (side === 'left') return { opacity: 0, x: -30 }
    if (side === 'right') return { opacity: 0, x: 30 }
    return { opacity: 0, y: 20 }
  }

  return (
    <motion.div
      initial={isAnimated ? getInitial() : undefined}
      whileInView={isAnimated ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        ease: easeOutExpo,
        delay: index * 0.12,
      }}
    >
      <article className="rounded-xl border border-border-primary bg-surface-primary/90 backdrop-blur-xl p-5 sm:p-6">
        {item.period && (
          <p className="caption mb-1">{item.period}</p>
        )}

        <div className="mb-3">
          <Badge variant="accent" size="sm">
            {item.category}
          </Badge>
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-text-primary">
          {item.title}
        </h3>

        {item.institution && (
          <p className="mt-1 text-sm font-medium text-accent-primary/80">
            {item.institution}
          </p>
        )}

        <p className="body-text mt-2">{item.description}</p>

        {item.highlights && item.highlights.length > 0 && (
          <ul className="mt-3 space-y-1">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-primary/60" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {item.techStack && item.techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-bg-tertiary px-2.5 py-1 text-xs font-medium text-text-tertiary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </article>
    </motion.div>
  )
}
