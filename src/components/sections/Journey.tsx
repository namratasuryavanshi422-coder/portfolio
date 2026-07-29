import type { IconType } from 'react-icons'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionTitle, Container } from '@/components/ui'
import { TIMELINE } from '@/data/journey'
import { TimelineCard } from './TimelineCard'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

function TimelineConnector({ index, isLast, icon: Icon }: { index: number; isLast: boolean; icon: IconType }) {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion

  return (
    <div className="relative flex w-8 shrink-0 flex-col items-center lg:w-16">
      {index > 0 && (
        <div className="w-px flex-1 bg-gradient-to-b from-accent-primary/20 to-accent-primary/40" />
      )}
      {index === 0 && <div className="flex-1" />}

      <motion.div
        initial={isAnimated ? { scale: 0 } : undefined}
        whileInView={isAnimated ? { scale: 1 } : undefined}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          ease: easeOutExpo,
          delay: index * 0.12 + 0.15,
        }}
        className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border-primary bg-bg-primary shadow-sm lg:h-12 lg:w-12"
      >
        <Icon className="h-3.5 w-3.5 text-accent-primary lg:h-5 lg:w-5" />
      </motion.div>

      {!isLast && (
        <div className="w-px flex-1 bg-gradient-to-b from-accent-primary/40 to-transparent" />
      )}
      {isLast && <div className="flex-1" />}
    </div>
  )
}

export function Journey() {
  return (
    <section
      id="journey"
      className="section-spacing relative"
      aria-labelledby="journey-heading"
    >
      <Container maxWidth="xl">
        <SectionTitle
          title="Journey"
          subtitle="A timeline of my academic growth, technical learning, hackathons, and achievements."
          align="left"
        />

        <div className="mt-12">
          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0
            const isLast = index === TIMELINE.length - 1

            return (
              <div
                key={item.id}
                className="flex items-start"
              >
                {/* Desktop left card (even) */}
                <div
                  className={`hidden flex-1 lg:block lg:w-[calc(50%-2rem)] lg:flex-none ${isEven ? '' : 'lg:order-3'}`}
                >
                  {isEven && (
                    <TimelineCard
                      item={item}
                      index={index}
                      side="left"
                    />
                  )}
                </div>

                {/* Connector */}
                <TimelineConnector index={index} isLast={isLast} icon={item.icon} />

                {/* Desktop right card (odd) + mobile/tablet all cards */}
                <div
                  className={`flex-1 lg:w-[calc(50%-2rem)] lg:flex-none ${isEven ? 'lg:order-1' : 'lg:order-3'}`}
                >
                  {!isEven && (
                    <div className="hidden lg:block">
                      <TimelineCard
                        item={item}
                        index={index}
                        side="right"
                      />
                    </div>
                  )}
                  <div className="lg:hidden">
                    <TimelineCard
                      item={item}
                      index={index}
                      side="full"
                    />
                  </div>
                </div>

                {/* Desktop spacer (opposite side) */}
                <div
                  className={`hidden lg:block lg:w-[calc(50%-2rem)] lg:flex-none ${isEven ? 'lg:order-3' : 'lg:order-1'}`}
                />
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
