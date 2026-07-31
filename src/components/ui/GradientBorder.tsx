import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type GradientBorderProps = {
  children: ReactNode
  className?: string
  innerClassName?: string
  style?: CSSProperties
  from?: string
  to?: string
}

export function GradientBorder({
  children,
  className,
  innerClassName,
  style,
  from,
  to,
}: GradientBorderProps) {
  return (
    <div className={cn('relative p-px', className)} style={style}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background:
            from && to
              ? `linear-gradient(135deg, ${from}, ${to})`
              : 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.045) 45%, rgba(255,255,255,0.08))',
        }}
      />
      <div className={cn('relative h-full w-full', innerClassName)}>{children}</div>
    </div>
  )
}
