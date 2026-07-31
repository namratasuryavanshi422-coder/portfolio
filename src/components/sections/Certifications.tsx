import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  FiAward,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiArrowUpRight,
  FiEye,
} from 'react-icons/fi'
import { Container, SectionTitle } from '@/components/ui'
import { CERTIFICATES } from '@/data/certificates'
import type { Certificate } from '@/data/certificates'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import { CertificateBrand } from './CertificateBrand'
import { CertificateArtwork } from './certificate-art/CertificateArtwork'
import { CredentialModal } from './CredentialModal'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOutExpo,
    },
  },
}

type CertificateCardProps = {
  certificate: Certificate
  onView: () => void
}

function CertificateCard({ certificate, onView }: CertificateCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion
  const { rotateX, rotateY, x, y, handleMouseMove, reset } = useMouseParallax({
    maxTilt: 3,
    maxTranslate: 5,
  })
  const {
    title,
    organization,
    category,
    description,
    year,
    gradientFrom,
    gradientTo,
    brand,
    verified,
  } = certificate

  const overlayLabel = `View ${title} credential from ${organization}`

  return (
    <motion.article
      variants={isAnimated ? cardVariants : undefined}
      onMouseMove={isAnimated ? handleMouseMove : undefined}
      onMouseLeave={isAnimated ? reset : undefined}
      style={{ perspective: isAnimated ? 1200 : undefined }}
      className="group relative h-full"
    >
      {/* Ambient glow behind card */}
      <div
        className="pointer-events-none absolute -inset-3 z-0 rounded-[1.75rem] opacity-0 blur-2xl transition-opacity duration-700 ease-out-expo group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${gradientFrom}2e, ${gradientTo}1f)` }}
        aria-hidden="true"
      />

      {/* Gradient border wrapper */}
      <div className="relative z-10 h-full rounded-2xl p-px transition-transform duration-500 ease-out-expo group-hover:-translate-y-1.5 group-hover:scale-[1.01]">
        {/* Default border */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.12] via-white/[0.045] to-white/[0.07] transition-opacity duration-500 group-hover:opacity-0"
          aria-hidden="true"
        />
        {/* Accent border on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `linear-gradient(135deg, ${gradientFrom}59, ${gradientTo}47)` }}
          aria-hidden="true"
        />

        {/* Card body */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-[#0b0b0e]/90 backdrop-blur-xl">
          {/* ─── Artwork ─── */}
          <div className="relative overflow-hidden">
            {/* Slow zoom on hover */}
            <div className="transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.07]">
              {/* Mouse parallax tilt */}
              <motion.div
                style={isAnimated ? { rotateX, rotateY, x, y } : undefined}
                className="will-change-transform"
              >
                <CertificateArtwork certificate={certificate} />
              </motion.div>
            </div>

            {/* "Click to View Credential" overlay */}
            <button
              type="button"
              onClick={onView}
              aria-label={overlayLabel}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 ease-out-expo group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:outline-none focus-visible:opacity-100"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] shadow-lg backdrop-blur-md">
                <FiEye className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-white">Click to View Credential</span>
            </button>
          </div>

          {/* ─── Content ─── */}
          <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
            {/* Organization row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}1c, ${gradientTo}12)`,
                    boxShadow: `inset 0 0 0 1px ${gradientFrom}26`,
                  }}
                >
                  <CertificateBrand
                    brand={brand}
                    from={gradientFrom}
                    to={gradientTo}
                    className="h-6 w-6"
                  />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/55">
                    {organization}
                  </p>
                  <p className="mt-0.5 text-[0.62rem] font-medium tracking-wide text-white/25">
                    {category}
                  </p>
                </div>
              </div>

              {verified && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wider text-emerald-300">
                  <FiCheck className="h-2.5 w-2.5" aria-hidden="true" />
                  Verified
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-3.5 text-lg font-semibold leading-snug tracking-tight text-white">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/40">
              {description}
            </p>

            {/* Metadata row */}
            <div className="mt-5 flex items-center gap-x-4 gap-y-1.5 border-t border-white/[0.06] pt-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/45">
                <FiCalendar className="h-3 w-3 shrink-0 text-white/30" aria-hidden="true" />
                {year}
              </span>
              <span className="inline-flex min-w-0 items-center gap-1.5 text-xs font-medium text-white/45">
                <FiBriefcase className="h-3 w-3 shrink-0 text-white/30" aria-hidden="true" />
                <span className="truncate">{organization}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/45">
                <FiAward className="h-3 w-3 shrink-0 text-white/30" aria-hidden="true" />
                {category}
              </span>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={onView}
              aria-label={overlayLabel}
              className="group/cta relative mt-5 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs font-semibold tracking-wide text-white/60 transition-all duration-300 hover:border-white/[0.16] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0e]"
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100"
                style={{ background: `linear-gradient(90deg, ${gradientFrom}26, ${gradientTo}1c)` }}
                aria-hidden="true"
              />
              <span className="relative">View Credential</span>
              <FiArrowUpRight
                className="relative h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Certifications() {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion
  const [active, setActive] = useState<Certificate | null>(null)

  return (
    <section
      id="certifications"
      className="section-spacing relative"
      aria-labelledby="certifications-heading"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-accent-primary/6 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-1/4 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/5 blur-[110px]" aria-hidden="true" />

      <Container maxWidth="xl">
        <SectionTitle
          title="Achievements & Certifications"
          subtitle="Verified credentials from recognized organizations — internships, hackathons, and certifications that reflect my expertise and commitment to continuous learning. Click any card to reveal the original credential."
          align="left"
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={isAnimated ? containerVariants : undefined}
          initial={isAnimated ? 'hidden' : undefined}
          whileInView={isAnimated ? 'visible' : undefined}
          viewport={{ once: true, margin: '-60px' }}
        >
          {CERTIFICATES.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onView={() => setActive(certificate)}
            />
          ))}
        </motion.div>
      </Container>

      <CredentialModal
        open={active !== null}
        certificate={active}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
