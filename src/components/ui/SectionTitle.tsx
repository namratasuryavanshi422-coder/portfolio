import type { SectionAlign, WithClassName } from '@/types'
import { cn } from '@/lib/utils'

type SectionTitleProps = WithClassName & {
  title: string
  subtitle?: string
  align?: SectionAlign
  gradient?: boolean
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionTitle({
  title,
  subtitle,
  align = 'left',
  gradient = false,
  className,
  as: Tag = 'h2',
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <Tag
        className={cn(
          'section-title',
          gradient && 'gradient-text-accent',
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="subtitle mt-4 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
