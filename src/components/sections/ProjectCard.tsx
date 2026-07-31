import { useReducedMotion, motion } from 'framer-motion'
import type { ReactElement } from 'react'
import { FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi'
import { Badge } from '@/components/ui'
import { cn } from '@/lib/utils'
import type { Project } from '@/data/projects'
import { AiScamImage, NewsRecommendationImage, SmartParkingImage, AirQualityImage, RunwayFogImage, GitVisionImage } from './project-images'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const IMAGE_MAP: Record<string, () => ReactElement> = {
  'ai-scam-intelligence': AiScamImage,
  'news-recommendation': NewsRecommendationImage,
  'smart-parking': SmartParkingImage,
  'air-quality-monitor': AirQualityImage,
  'runway-fog': RunwayFogImage,
  'git-vision-ai': GitVisionImage,
}

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectImage({ id, alt }: { id: string; alt: string }) {
  const ImageComponent = IMAGE_MAP[id]
  if (!ImageComponent) {
    return (
      <div className="flex aspect-video items-center justify-center bg-white/[0.02]">
        <span className="text-xs text-white/10">{alt}</span>
      </div>
    )
  }
  return <ImageComponent />
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion

  return (
    <motion.article
      initial={isAnimated ? { opacity: 0, y: 40 } : undefined}
      whileInView={isAnimated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: easeOutExpo, delay: index * 0.15 }}
      className="group relative h-full"
    >
      {/* Animated gradient glow behind card */}
      <div className="pointer-events-none absolute -inset-[2px] z-0 rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100">
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-accent-primary/30 via-accent-secondary/20 to-accent-primary/10" />
      </div>

      {/* Main card */}
      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-primary/5 backdrop-blur-sm transition-all duration-500 group-hover:border-white/[0.12] group-hover:bg-surface-primary/10 group-hover:-translate-y-[3px] group-hover:scale-[1.01] group-hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.25)] cursor-pointer will-change-transform">
        {/* ─── Image area (16:9) — clickable if liveUrl exists ─── */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="relative aspect-video overflow-hidden"
          >
            {/* Gradient overlay at bottom */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-[#08080E] to-transparent" />

            {/* Image with zoom on hover */}
            <motion.div
              className="h-full w-full origin-center transition-all duration-700 ease-out-expo group-hover:scale-105"
            >
              <ProjectImage id={project.id} alt={project.imageAlt} />
            </motion.div>

            {/* Category badge — top left */}
            <div className="absolute left-4 top-4 z-20">
              <Badge variant="accent" size="sm">
                {project.category}
              </Badge>
            </div>

            {/* LIVE badge */}
            {(project.id === 'news-recommendation' || project.id === 'runway-fog' || project.id === 'smart-parking' || project.id === 'git-vision-ai') && (
              <div className="absolute left-4 top-14 z-20">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/15 bg-emerald-500/10 px-2.5 py-0.5 text-[0.65rem] font-medium tracking-wide text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
                  LIVE
                </span>
              </div>
            )}

            {/* Status badge — top right */}
            <div className="absolute right-4 top-4 z-20">
              <Badge
                variant={project.status === 'completed' ? 'default' : 'outline'}
                size="sm"
                dot
              >
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </Badge>
            </div>
          </a>
        ) : (
          <div className="relative aspect-video overflow-hidden">
            {/* Gradient overlay at bottom */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-[#08080E] to-transparent" />

            {/* Image with zoom on hover */}
            <motion.div
              className="h-full w-full origin-center transition-all duration-700 ease-out-expo group-hover:scale-105"
            >
              <ProjectImage id={project.id} alt={project.imageAlt} />
            </motion.div>

            {/* Category badge — top left */}
            <div className="absolute left-4 top-4 z-20">
              <Badge variant="accent" size="sm">
                {project.category}
              </Badge>
            </div>

            {/* Status badge — top right */}
            <div className="absolute right-4 top-4 z-20">
              <Badge
                variant={project.status === 'completed' ? 'default' : 'outline'}
                size="sm"
                dot
              >
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </Badge>
            </div>
          </div>
        )}

        {/* ─── Content ─── */}
        <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
          {/* Title */}
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {project.title}
          </h3>

          {/* Impact statement */}
          <p className="mt-1.5 text-sm leading-relaxed text-white/50">
            {project.impact}
          </p>

          {/* Description (full) */}
          <p className="body-text mt-4 text-sm leading-relaxed text-white/40">
            {project.description}
          </p>

          {/* ─── Features ─── */}
          {project.features && project.features.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-1.5 text-xs text-white/50">
                  <FiCheck className="h-3 w-3 shrink-0 text-emerald-400" aria-hidden="true" />
                  {feature}
                </div>
              ))}
            </div>
          )}

          {/* ─── Metrics row ─── */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="font-mono text-lg font-bold text-accent-primary">
                    {metric.value}
                  </span>
                  <span className="ml-1.5 text-xs text-white/30">{metric.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* ─── Tech stack ─── */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[0.7rem] font-medium tracking-wide text-white/40 transition-all duration-200 group-hover:border-white/[0.1] group-hover:text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ─── Actions ─── */}
          <div className="mt-auto flex items-center gap-3 pt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] px-4 py-2 text-xs font-medium text-white/60',
                'transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.04] hover:text-white',
              )}
            >
              <FiGithub className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo of ${project.title}`}
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium',
                  'bg-accent-primary text-white shadow-sm shadow-accent-primary/20',
                  'transition-all duration-200 hover:brightness-110 hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] active:brightness-95',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
                )}
              >
                Live Demo
                <FiExternalLink className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            ) : (
              <span
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.04] px-4 py-2 text-xs font-medium text-white/20',
                  'pointer-events-none',
                )}
              >
                <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                Live Demo
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
