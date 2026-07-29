import type { CardVariant, CardPadding, WithChildren, WithClassName } from '@/types'
import { cn } from '@/lib/utils'

type CardProps = WithChildren &
  WithClassName & {
    variant?: CardVariant
    padding?: CardPadding
    hover?: boolean
    as?: 'div' | 'article' | 'section'
  }

const variantClasses: Record<CardVariant, string> = {
  default:
    'bg-surface-primary backdrop-blur-xl border border-border-primary shadow-sm',
  elevated:
    'bg-surface-primary border border-border-primary shadow-lg',
  bordered:
    'bg-transparent border border-border-primary',
  flat:
    'bg-bg-tertiary',
}

const paddingClasses: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4 sm:p-5',
  md: 'p-5 sm:p-6 lg:p-8',
  lg: 'p-6 sm:p-8 lg:p-10',
}

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = false,
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-xl',
        variantClasses[variant],
        paddingClasses[padding],
        hover && 'hover-lift cursor-pointer',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
