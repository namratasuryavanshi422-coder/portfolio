import { motion, useReducedMotion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { Badge, Button } from '@/components/ui'
import type { Project } from '@/data/projects'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

type ProjectCardProps = {
  project: Project
  index: number
}

function ImagePlaceholder({ category }: { category: string }) {
  return (
    <div
      className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-accent-primary/8 via-surface-primary to-accent-secondary/8"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.06),transparent_50%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="select-none text-lg font-semibold tracking-widest text-text-tertiary/20 uppercase">
          {category}
        </span>
      </div>
    </div>
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion

  return (
    <motion.article
      initial={isAnimated ? { opacity: 0, y: 40 } : undefined}
      whileInView={isAnimated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        ease: easeOutExpo,
        delay: index * 0.12,
      }}
      className="group relative"
    >
      <div className="relative rounded-xl bg-gradient-to-br from-border-primary via-accent-primary/10 to-border-primary p-px transition-all duration-300 ease-out-expo group-hover:via-accent-primary/20">
        <div className="relative flex h-full flex-col rounded-xl bg-surface-primary/90 backdrop-blur-xl p-5 sm:p-6">
          {/* ─── Image Area ─── */}
          <ImagePlaceholder category={project.category} />

          {/* ─── Content ─── */}
          <div className="mt-5 flex flex-1 flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent" size="sm">
                {project.category}
              </Badge>
              <Badge
                variant={project.status === 'completed' ? 'default' : 'outline'}
                size="sm"
                dot
              >
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </Badge>
            </div>

            <h3 className="mt-3 text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
              {project.title}
            </h3>

            <p className="body-text mt-2 flex-1">
              {project.description}
            </p>

            {/* ─── Tech Stack ─── */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-bg-tertiary px-2.5 py-1 text-xs font-medium text-text-tertiary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ─── Actions ─── */}
            <div className="mt-5 flex items-center gap-3">
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="outline"
                leftIcon={<FiGithub className="h-4 w-4" />}
              >
                GitHub
              </Button>
              {project.liveUrl ? (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="primary"
                  rightIcon={<FiExternalLink className="h-4 w-4" />}
                >
                  Live Demo
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="primary"
                  disabled
                  className="cursor-not-allowed"
                  rightIcon={<FiExternalLink className="h-4 w-4" />}
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
