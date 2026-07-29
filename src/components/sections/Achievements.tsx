import { motion, useReducedMotion } from 'framer-motion'
import { SectionTitle, Container } from '@/components/ui'
import { ACHIEVEMENTS } from '@/data/achievements'
import type { Achievement } from '@/data/achievements'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion
  const Icon = achievement.icon

  return (
    <motion.article
      variants={isAnimated ? cardVariants : undefined}
      className="group rounded-xl border border-border-primary bg-surface-primary/80 backdrop-blur-md p-6 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-md hover:border-accent-primary/20"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-text-primary">
        {achievement.title}
      </h3>

      <p className="mt-1 text-sm font-medium text-accent-primary/80">
        {achievement.value}
      </p>

      <p className="body-text mt-2">
        {achievement.description}
      </p>
    </motion.article>
  )
}

export function Achievements() {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion

  return (
    <section
      id="achievements"
      className="section-spacing relative"
      aria-labelledby="achievements-heading"
    >
      <Container maxWidth="xl">
        <SectionTitle
          title="Achievements"
          subtitle="Milestones that reflect my academic performance, leadership, and continuous growth."
          align="left"
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={isAnimated ? containerVariants : undefined}
          initial={isAnimated ? 'hidden' : undefined}
          whileInView={isAnimated ? 'visible' : undefined}
          viewport={{ once: true, margin: '-60px' }}
        >
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
