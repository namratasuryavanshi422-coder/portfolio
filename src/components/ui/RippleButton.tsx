import {
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type PointerEvent,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

type Ripple = {
  x: number
  y: number
  size: number
  key: number
}

type RippleButtonOwnProps<T extends ElementType> = {
  as?: T
  className?: string
  children?: ReactNode
}

type RippleButtonProps<T extends ElementType> = RippleButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RippleButtonOwnProps<T>>

let rippleKey = 0

/**
 * Button / link wrapper that spawns an expanding ripple on pointer
 * down. The ripple inherits the element's current color.
 */
export function RippleButton<T extends ElementType = 'button'>({
  as,
  className,
  children,
  onPointerDown,
  ...rest
}: RippleButtonProps<T>) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const Tag = as ?? 'button'

  const handlePointerDown = (event: PointerEvent) => {
    onPointerDown?.(event as never)
    const element = event.currentTarget as HTMLElement | null
    if (!element) return

    const rect = element.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2
    const key = ++rippleKey

    setRipples((prev) => [...prev, { x, y, size, key }])
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.key !== key))
    }, 650)
  }

  return (
    <Tag
      onPointerDown={handlePointerDown}
      className={cn('relative isolate overflow-hidden', className)}
      {...(Tag === 'button' ? { type: 'button' as const } : {})}
      {...rest}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          aria-hidden="true"
          data-ripple
          className="pointer-events-none absolute rounded-full bg-current"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </Tag>
  )
}
