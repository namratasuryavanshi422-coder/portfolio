import type { BadgeVariant, BadgeSize, WithChildren, WithClassName } from '@/types'
import { cn } from '@/lib/utils'

type BadgeProps = WithChildren &
  WithClassName & {
    variant?: BadgeVariant
    size?: BadgeSize
    dot?: boolean
  }

const variantClasses: Record<BadgeVariant, string> = {
  default:
    'bg-surface-primary text-text-secondary border border-border-primary',
  accent:
    'bg-accent-primary/10 text-accent-primary border border-accent-primary/15',
  outline:
    'text-text-primary border border-border-primary',
  subtle:
    'bg-bg-tertiary text-text-tertiary',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export function Badge({
  children,
  className,
  variant = 'default',
  size = 'sm',
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium tracking-wide',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            variant === 'accent' ? 'bg-accent-primary' : 'bg-text-tertiary',
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
