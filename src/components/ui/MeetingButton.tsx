import { useState } from 'react'
import { FiCalendar, FiExternalLink } from 'react-icons/fi'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { CalendlyModal } from '@/components/ui/CalendlyModal'

/**
 * Opens the configured Calendly page in a modal (with an "open in new
 * tab" fallback). Disabled until `VITE_CALENDLY_URL` is set.
 */
export function MeetingButton() {
  const [open, setOpen] = useState(false)
  const hasCalendly = Boolean(siteConfig.calendly.url)

  if (!hasCalendly) {
    return (
      <button
        type="button"
        disabled
        title="Calendly not configured — set VITE_CALENDLY_URL in .env"
        className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.01] px-5 py-3 text-sm font-medium text-white/30 backdrop-blur-sm"
      >
        <FiCalendar className="h-4 w-4" aria-hidden="true" />
        Schedule a Meeting
      </button>
    )
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-medium',
          'border border-accent-primary/20 bg-accent-primary/[0.06] text-accent-primary/90 backdrop-blur-sm',
          'transition-all duration-300 ease-out-expo',
          'hover:border-accent-primary/40 hover:bg-accent-primary/[0.12] hover:text-accent-primary hover:shadow-lg hover:shadow-accent-primary/10',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
          'active:scale-[0.98]',
        )}
      >
        <FiCalendar className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        <span>Schedule a Meeting</span>
        <FiExternalLink className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-70" aria-hidden="true" />
      </button>

      <CalendlyModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
