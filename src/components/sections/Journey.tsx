import { useRef } from 'react'
import { useReducedMotion, motion, useInView } from 'framer-motion'
import { SectionTitle, Container } from '@/components/ui'
import { TIMELINE } from '@/data/journey'
import { JourneyStats } from './JourneyStats'
import { TimelineCard } from './TimelineCard'

function TimelineNode() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const isAnimated = !useReducedMotion()

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      {/* Pulse ring */}
      <motion.span
        className="pointer-events-none absolute h-12 w-12 rounded-full border-2 border-accent-primary/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView && isAnimated ? { scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] } : undefined}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Outer glow */}
      <div
        className="absolute h-10 w-10 rounded-full bg-accent-primary/10 blur-sm transition-opacity duration-500"
        style={{ opacity: isInView ? 1 : 0 }}
      />

      {/* Node */}
      <motion.div
        initial={false}
        animate={
          isInView && isAnimated
            ? { scale: 1, borderColor: '#6366f1' }
            : { scale: 0.6, borderColor: 'rgba(255,255,255,0.08)' }
        }
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-bg-primary sm:h-10 sm:w-10"
      >
        <motion.div
          className="h-3 w-3 rounded-full bg-accent-primary"
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0.4 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
      </motion.div>
    </div>
  )
}

function LineSegment() {
  return (
    <div className="w-px flex-1">
      <div className="h-full w-full bg-gradient-to-b from-accent-primary/30 via-accent-secondary/10 to-transparent" />
    </div>
  )
}

function TimelineRow({
  item,
  index,
  isLast,
}: {
  item: (typeof TIMELINE)[number]
  index: number
  isLast: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <div className="flex items-start">
      {/* Desktop left card (even) + mobile all cards */}
      <div className="flex-1 lg:w-[calc(50%-28px)] lg:flex-none">
        {/* Desktop: show only when even */}
        <div className={`${isEven ? 'block' : 'hidden'} max-lg:hidden`}>
          <TimelineCard item={item} index={index} side="left" />
        </div>
        {/* Mobile: always show */}
        <div className={`lg:hidden ${isEven ? '' : ''}`}>
          <TimelineCard item={item} index={index} side="full" />
        </div>
      </div>

      {/* Timeline connector */}
      <div className="mx-4 flex w-9 shrink-0 flex-col items-center sm:mx-6 sm:w-10 lg:mx-0 lg:w-14">
        {index > 0 && (
          <LineSegment />
        )}
        {index === 0 && <div className="flex-1" />}

        <TimelineNode />

        {!isLast && <div className="flex-1" />}
        {isLast && <div className="flex-1" />}
      </div>

      {/* Desktop right card (odd) + spacer */}
      <div className="flex-1 lg:w-[calc(50%-28px)] lg:flex-none">
        {/* Desktop: show only when odd */}
        <div className={`${!isEven ? 'block' : 'hidden'} max-lg:hidden`}>
          <TimelineCard item={item} index={index} side="right" />
        </div>
      </div>
    </div>
  )
}

export function Journey() {
  return (
    <section
      id="journey"
      className="section-spacing relative overflow-hidden"
      aria-labelledby="journey-heading"
    >
      {/* ─── Background ─── */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15]" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-3/4 h-80 w-80 translate-x-1/3 rounded-full bg-accent-secondary/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-60 -translate-x-1/2 rounded-full bg-accent-primary/5 blur-[80px]" />

      <Container maxWidth="xl" className="relative">
        <SectionTitle
          title="Journey"
          subtitle="A timeline of my academic growth, technical learning, hackathons, and achievements from 2024 to 2028."
          align="left"
        />

        {/* ─── Statistics ─── */}
        <JourneyStats />

        {/* ─── Timeline ─── */}
        <div className="relative">
          {TIMELINE.map((item, index) => (
            <TimelineRow
              key={item.id}
              item={item}
              index={index}
              isLast={index === TIMELINE.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
