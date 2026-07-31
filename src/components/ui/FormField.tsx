import type { ReactNode } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { cn } from '@/lib/utils'

type FormFieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: string
  hint?: ReactNode
  type?: 'text' | 'email'
  textarea?: boolean
  rows?: number
  icon?: ReactNode
  placeholder?: string
  maxLength?: number
  autoComplete?: string
  required?: boolean
}

export function FormField({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  hint,
  type = 'text',
  textarea = false,
  rows = 5,
  icon,
  placeholder,
  maxLength,
  autoComplete,
  required = false,
}: FormFieldProps) {
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy =
    [error ? errorId : '', hint ? hintId : ''].filter(Boolean).join(' ') || undefined

  const baseClasses = cn(
    'w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-200',
    'focus:bg-white/[0.04] focus-visible:ring-2 focus-visible:ring-accent-primary/30',
    icon ? 'pl-11' : undefined,
    error
      ? 'border-red-500/40 focus:border-red-500/50 focus-visible:ring-red-500/20'
      : 'border-white/[0.08] focus:border-accent-primary/40 focus:shadow-[0_0_20px_-8px_rgba(99,102,241,0.2)]',
  )

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label htmlFor={id} className="block text-xs font-medium tracking-wide text-white/30">
          {label}
          {required && <span className="text-accent-primary">*</span>}
        </label>
        {hint}
      </div>

      <div className="relative">
        {icon && (
          <span
            className={cn(
              'pointer-events-none absolute left-3.5 text-white/25',
              textarea ? 'top-3.5' : 'top-1/2 -translate-y-1/2',
            )}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}

        {textarea ? (
          <textarea
            id={id}
            rows={rows}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
            maxLength={maxLength}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            aria-required={required || undefined}
            className={cn(baseClasses, 'resize-none leading-relaxed')}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
            maxLength={maxLength}
            autoComplete={autoComplete}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            aria-required={required || undefined}
            className={baseClasses}
          />
        )}
      </div>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 flex items-center gap-1 text-xs text-red-400"
        >
          <FiAlertCircle className="h-3 w-3 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
