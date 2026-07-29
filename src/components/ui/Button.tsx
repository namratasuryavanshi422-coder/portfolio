import type { ButtonVariant, ButtonSize, WithClassName } from '@/types'
import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = WithClassName & {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  as?: T
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-primary text-white hover:brightness-110 active:brightness-95 shadow-md shadow-accent-primary/15',
  secondary:
    'bg-surface-primary text-text-primary hover:bg-surface-secondary border border-border-primary',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-surface-primary',
  outline:
    'text-text-primary border border-border-primary hover:border-border-secondary hover:bg-surface-primary',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5 rounded-lg',
  md: 'h-11 px-5 text-sm gap-2 rounded-xl',
  lg: 'h-13 px-7 text-base gap-2.5 rounded-xl',
}

export function Button<T extends ElementType = 'button'>({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  as,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Tag = as ?? 'button'
  const isDisabled = disabled || loading

  return (
    <Tag
      disabled={isDisabled}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-250 ease-out-expo',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
        'disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...(Tag === 'button' ? { type: 'button' as const } : {})}
      {...rest}
    >
      {loading ? (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      {children && <span>{children}</span>}
      {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </Tag>
  )
}
