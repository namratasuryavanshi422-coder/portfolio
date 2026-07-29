import { motion, useReducedMotion } from 'framer-motion'
import { SectionTitle, Container } from '@/components/ui'
import { ABOUT, STATS } from '@/data/about'
import type { StatItem } from '@/data/about'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
}

const statVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOutExpo,
    },
  },
}

function StatCard({ stat }: { stat: StatItem }) {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion

  return (
    <motion.div
      variants={isAnimated ? statVariants : undefined}
      className="rounded-xl border border-border-primary bg-surface-primary/80 backdrop-blur-md p-5 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-md hover:border-accent-primary/20"
    >
      <p className="text-xs font-semibold tracking-wider text-accent-primary uppercase">
        {stat.label}
      </p>
      <p className="mt-1 text-lg font-semibold tracking-tight text-text-primary">
        {stat.value}
      </p>
      {stat.description && (
        <p className="mt-0.5 text-sm text-text-tertiary">
          {stat.description}
        </p>
      )}
    </motion.div>
  )
}

export function About() {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion

  return (
    <section
      id="about"
      className="section-spacing relative"
      aria-labelledby="about-heading"
    >
      <Container maxWidth="xl">
        <SectionTitle
          title="About Me"
          subtitle="A quick overview of who I am, what I enjoy building, and what I am currently working toward."
          align="left"
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
          variants={isAnimated ? containerVariants : undefined}
          initial={isAnimated ? 'hidden' : undefined}
          whileInView={isAnimated ? 'visible' : undefined}
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* ─── Left: Introduction ─── */}
          <motion.div variants={isAnimated ? itemVariants : undefined}>
            <h3 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              {ABOUT.heading}
            </h3>
            <div className="mt-5 space-y-4">
              {ABOUT.body.map((paragraph, i) => (
                <p key={i} className="body-text leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Stats ─── */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={isAnimated ? itemVariants : undefined}
          >
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
