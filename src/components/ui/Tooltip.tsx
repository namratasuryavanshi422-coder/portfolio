import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TooltipProps = {
  label: string
  children: ReactNode
  side?: 'top' | 'bottom'
  className?: string
}

/**
 * Accessible CSS tooltip. Appears on hover and keyboard focus of the
 * child (uses `group-focus-within` so no JS is needed).
 */
export function Tooltip({ label, children, side = 'top', className }: TooltipProps) {
  return (
    <span className={cn('group/tooltip relative inline-flex', className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/[0.08] bg-[#0c0c0f]/95 px-2.5 py-1 text-[11px] font-medium text-white/80 opacity-0 shadow-lg backdrop-blur-xl',
          'invisible translate-y-1 transition-all duration-200',
          'group-hover/tooltip:visible group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100',
          'group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100',
          side === 'top' ? 'bottom-full mb-2.5' : 'top-full mt-2.5',
        )}
      >
        {label}
      </span>
    </span>
  )
}
