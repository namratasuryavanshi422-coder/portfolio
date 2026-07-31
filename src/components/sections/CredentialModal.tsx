import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useAnimationControls, useReducedMotion } from 'framer-motion'
import { FiCheck, FiDownload, FiMaximize2, FiZoomIn, FiZoomOut } from 'react-icons/fi'
import { Modal, Skeleton } from '@/components/ui'
import { CertificateBrand } from './CertificateBrand'
import type { Certificate } from '@/data/certificates'
import { cn } from '@/lib/utils'

const ZOOM_LEVELS = [1, 1.5, 2, 2.75] as const

type CredentialModalProps = {
  open: boolean
  certificate: Certificate | null
  onClose: () => void
}

/**
 * Fullscreen credential viewer. The real certificate image is revealed
 * here (behind a skeleton) with zoom, pan, download and metadata — it
 * is never shown on the portfolio page itself.
 */
export function CredentialModal({ open, certificate, onClose }: CredentialModalProps) {
  const shouldReduceMotion = useReducedMotion()
  const [zoom, setZoom] = useState(1)
  const [loaded, setLoaded] = useState(false)
  const controls = useAnimationControls()
  const stageRef = useRef<HTMLDivElement>(null)
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 })

  useEffect(() => {
    if (!open) return
    setZoom(1)
    setLoaded(false)
    controls.set({ x: 0, y: 0 })
  }, [open, controls])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const update = () => {
      const rect = stage.getBoundingClientRect()
      const insetX = (rect.width * (zoom - 1)) / 2
      const insetY = (rect.height * (zoom - 1)) / 2
      setConstraints({ left: -insetX, right: insetX, top: -insetY, bottom: insetY })
      controls.set({ x: 0, y: 0 })
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [zoom, open, controls])

  const zoomIndex = Math.max(
    0,
    ZOOM_LEVELS.findIndex((level) => level >= zoom),
  )

  const zoomIn = () =>
    setZoom(ZOOM_LEVELS[Math.min(ZOOM_LEVELS.length - 1, zoomIndex + 1)])
  const zoomOut = () => setZoom(ZOOM_LEVELS[Math.max(0, zoomIndex - 1)])
  const resetZoom = () => setZoom(1)

  const handleDoubleClick = () => setZoom(zoom === 1 ? 2 : 1)

  const downloadName = certificate
    ? `${certificate.id}.${certificate.imageFile.split('.').pop() ?? 'png'}`
    : 'certificate'

  const iconButtonClass =
    'flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/60'

  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId="credential-modal-title"
      descriptionId="credential-modal-desc"
      panelClassName="h-[92vh] max-h-[900px] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0b0e]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl"
      contentClassName="flex h-full flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_320px]"
    >
      {certificate && (
        <>
          {/* ─── Certificate stage ─── */}
          <div
            ref={stageRef}
            onDoubleClick={handleDoubleClick}
            className="relative h-[46vh] min-h-[260px] overflow-hidden bg-[#0a0a0d] lg:h-full"
          >
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

            {/* Skeleton loader while the certificate loads */}
            <AnimatePresence>
              {!loaded && (
                <motion.div
                  key="certificate-skeleton"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-20"
                >
                  <Skeleton className="h-full w-full rounded-none bg-white/[0.03]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Real certificate (zoomed + pannable) */}
            <div className="absolute inset-0 z-10 p-4 sm:p-8">
              <motion.div
                drag={zoom > 1}
                dragConstraints={constraints}
                dragElastic={0.12}
                dragMomentum={false}
                animate={controls}
                whileTap={zoom > 1 ? { cursor: 'grabbing' } : undefined}
                className={cn('h-full w-full', zoom > 1 ? 'cursor-grab' : 'cursor-default')}
              >
                <motion.img
                  src={certificate.imageFile}
                  alt={`${certificate.title} certificate from ${certificate.organization}`}
                  onLoad={() => setLoaded(true)}
                  draggable={false}
                  animate={{ scale: zoom, opacity: loaded ? 1 : 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  className="h-full w-full object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.65)]"
                />
              </motion.div>
            </div>

            {/* Zoom controls */}
            <div className="absolute bottom-4 left-4 z-30 flex items-center gap-1 rounded-full border border-white/[0.08] bg-black/60 p-1 backdrop-blur-md">
              <button type="button" onClick={zoomOut} disabled={zoom <= 1} aria-label="Zoom out" className={iconButtonClass}>
                <FiZoomOut className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="w-10 text-center text-xs tabular-nums text-white/60" aria-live="polite">
                {Math.round(zoom * 100)}%
              </span>
              <button type="button" onClick={zoomIn} disabled={zoom >= ZOOM_LEVELS[ZOOM_LEVELS.length - 1]} aria-label="Zoom in" className={iconButtonClass}>
                <FiZoomIn className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={resetZoom} disabled={zoom === 1} aria-label="Reset zoom" className={iconButtonClass}>
                <FiMaximize2 className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* ─── Credential details sidebar ─── */}
          <aside
            aria-label="Credential details"
            className="flex flex-1 flex-col gap-5 overflow-y-auto p-5 sm:p-6 lg:flex-none"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${certificate.gradientFrom}1c, ${certificate.gradientTo}12)`,
                  boxShadow: `inset 0 0 0 1px ${certificate.gradientFrom}26`,
                }}
              >
                <CertificateBrand
                  brand={certificate.brand}
                  from={certificate.gradientFrom}
                  to={certificate.gradientTo}
                  className="h-6 w-6"
                />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/55">
                  {certificate.organization}
                </p>
                <p className="mt-0.5 text-[0.62rem] font-medium tracking-wide text-white/25">
                  {certificate.category}
                </p>
              </div>
            </div>

            <div>
              <h3 id="credential-modal-title" className="text-xl font-semibold tracking-tight text-white">
                {certificate.title}
              </h3>
              <p id="credential-modal-desc" className="mt-2 text-sm leading-relaxed text-white/45">
                {certificate.description}
              </p>
            </div>

            {certificate.verified && (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-emerald-300">
                <FiCheck className="h-3 w-3" aria-hidden="true" />
                Verified credential
              </span>
            )}

            <dl className="space-y-3 border-t border-white/[0.06] pt-4 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="shrink-0 text-white/35">Credential ID</dt>
                <dd className="break-all text-right font-mono text-xs text-white/60">{certificate.credentialId}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="shrink-0 text-white/35">Issue Date</dt>
                <dd className="text-white/60">{certificate.issueDate}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="shrink-0 text-white/35">Organization</dt>
                <dd className="truncate text-white/60">{certificate.organization}</dd>
              </div>
            </dl>

            <div>
              <p className="mb-2.5 text-xs font-medium tracking-wide text-white/35">Skills Earned</p>
              <ul className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/55"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={certificate.imageFile}
              download={downloadName}
              className={cn(
                'mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-3 text-sm font-semibold text-white',
                'shadow-lg shadow-accent-primary/25 transition-all duration-200 hover:brightness-110',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0e]',
              )}
            >
              <FiDownload className="h-4 w-4" aria-hidden="true" />
              Download Certificate
            </a>

            <p className="text-center text-[0.65rem] text-white/25">
              {shouldReduceMotion ? 'Double-tap' : 'Double-click'} to toggle zoom
            </p>
          </aside>
        </>
      )}
    </Modal>
  )
}
