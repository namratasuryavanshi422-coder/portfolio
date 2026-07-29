import { motion, useReducedMotion } from 'framer-motion'
import { SectionTitle, Container } from '@/components/ui'
import { SKILL_CATEGORIES, PROFESSIONAL_STRENGTHS } from '@/data/skills'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: easeOutExpo,
    },
  },
}

export function Skills() {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion

  return (
    <section
      id="skills"
      className="section-spacing relative"
      aria-labelledby="skills-heading"
    >
      <Container maxWidth="xl">
        <SectionTitle
          title="Technical Expertise"
          subtitle="Technologies, tools, and engineering practices I use to build scalable software."
          align="left"
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={isAnimated ? containerVariants : undefined}
          initial={isAnimated ? 'hidden' : undefined}
          whileInView={isAnimated ? 'visible' : undefined}
          viewport={{ once: true, margin: '-60px' }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              variants={isAnimated ? cardVariants : undefined}
              className="rounded-xl border border-border-primary bg-surface-primary/80 backdrop-blur-md p-5 sm:p-6"
            >
              <h3 className="text-sm font-semibold tracking-wider text-accent-primary uppercase">
                {category.name}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border-primary bg-bg-tertiary/60 px-3 py-1.5 text-sm font-medium text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Professional Strengths ─── */}
        <div className="mt-16">
          <SectionTitle
            title="Professional Strengths"
            subtitle="Core attributes that drive my approach to engineering and collaboration."
            align="left"
          />

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={isAnimated ? containerVariants : undefined}
            initial={isAnimated ? 'hidden' : undefined}
            whileInView={isAnimated ? 'visible' : undefined}
            viewport={{ once: true, margin: '-40px' }}
          >
            {PROFESSIONAL_STRENGTHS.map((strength) => (
              <motion.span
                key={strength}
                variants={isAnimated ? chipVariants : undefined}
                className="rounded-full border border-border-primary bg-surface-primary/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:border-accent-primary/30 hover:text-accent-primary"
              >
                {strength}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
