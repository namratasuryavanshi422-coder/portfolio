import { useCallback, useEffect, useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { Modal } from '@/components/ui/Modal'
import { Skeleton } from '@/components/ui/Skeleton'
import { siteConfig } from '@/config/site'

type CalendlyModalProps = {
  open: boolean
  onClose: () => void
}

function buildEmbedUrl(url: string): string {
  const params = new URLSearchParams({
    hide_gdpr_banner: '1',
    background_color: '0c0c0f',
    text_color: 'fafafa',
    primary_color: '6366f1',
  })
  if (typeof window !== 'undefined') {
    params.set('embed_domain', window.location.hostname)
  }
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}${params.toString()}`
}

/**
 * Calendly booking modal. Opens the configured Calendly page inline in
 * an iframe (with a loading skeleton), and offers an "open in new tab"
 * fallback. Configure via `VITE_CALENDLY_URL` in `.env`.
 */
export function CalendlyModal({ open, onClose }: CalendlyModalProps) {
  const [loading, setLoading] = useState(true)
  const url = siteConfig.calendly.url

  useEffect(() => {
    if (!open) return
    setLoading(true)
    const fallback = window.setTimeout(() => setLoading(false), 10_000)
    return () => window.clearTimeout(fallback)
  }, [open])

  const handleLoad = useCallback(() => setLoading(false), [])

  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId="calendly-title"
      descriptionId="calendly-description"
      panelClassName="max-w-3xl rounded-3xl border border-white/[0.08] bg-[#0c0c0f]/95 shadow-2xl shadow-black/50 backdrop-blur-2xl"
      contentClassName="overflow-hidden rounded-3xl"
    >
      <div className="border-b border-white/[0.06] px-6 py-5 sm:px-8">
        <h3 id="calendly-title" className="text-lg font-semibold tracking-tight text-white">
          Schedule a Meeting
        </h3>
        <p id="calendly-description" className="mt-1 text-sm text-white/50">
          Pick a time that works for you — no account needed.
        </p>
      </div>

      <div className="relative h-[min(70vh,600px)] min-h-[480px] p-4 sm:p-6">
        {loading && <Skeleton className="absolute inset-4 z-10 rounded-2xl sm:inset-6" />}
        {url && (
          <iframe
            title="Calendly scheduling page"
            src={buildEmbedUrl(url)}
            onLoad={handleLoad}
            className="h-full w-full rounded-2xl border border-white/[0.06]"
          />
        )}
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.06] px-6 py-4 sm:px-8">
        <p className="text-xs text-white/30">Prefer a separate tab?</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-accent-primary/90 transition-colors hover:bg-accent-primary/10 hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40"
          >
            <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Open in new tab
          </a>
        )}
      </div>
    </Modal>
  )
}
