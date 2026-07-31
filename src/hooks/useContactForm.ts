import { useCallback, useRef, useState, type FormEvent } from 'react'
import { sendContactEmail } from '@/lib/email'
import {
  INITIAL_CONTACT_VALUES,
  validateContactField,
  validateContactForm,
  type ContactField,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/lib/validation'

/** Minimum time between two successful submissions (anti-spam). */
const SUBMIT_COOLDOWN_MS = 30_000
const LAST_SUBMIT_KEY = 'portfolio:last-contact-submit'

type ContactFormOptions = {
  onSuccess?: () => void
  onError?: (message: string) => void
}

function readLastSubmitTime(): number {
  try {
    return Number(window.localStorage.getItem(LAST_SUBMIT_KEY) ?? 0)
  } catch {
    return 0
  }
}

function writeLastSubmitTime(): void {
  try {
    window.localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()))
  } catch {}
}

export function useContactForm({ onSuccess, onError }: ContactFormOptions = {}) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_CONTACT_VALUES)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitAttempts, setSubmitAttempts] = useState(0)
  const [honeypot, setHoneypot] = useState('')

  const submittingRef = useRef(false)

  const updateField = useCallback((field: ContactField, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }, [])

  const blurField = useCallback(
    (field: ContactField) => {
      setTouched((prev) => ({ ...prev, [field]: true }))
      const error = validateContactField(field, values[field])
      setErrors((prev) => (error ? { ...prev, [field]: error } : { ...prev, [field]: undefined }))
    },
    [values],
  )

  const reset = useCallback(() => {
    setValues(INITIAL_CONTACT_VALUES)
    setErrors({})
    setTouched({})
    setHoneypot('')
  }, [])

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      if (submittingRef.current) return
      submittingRef.current = true

      const nextErrors = validateContactForm(values)
      setErrors(nextErrors)
      setTouched({ name: true, email: true, subject: true, message: true })

      if (Object.keys(nextErrors).length > 0) {
        setSubmitAttempts((count) => count + 1)
        submittingRef.current = false
        return
      }

      // Honeypot filled → silent, plausible success to spam bots.
      if (honeypot.trim()) {
        reset()
        onSuccess?.()
        submittingRef.current = false
        return
      }

      if (Date.now() - readLastSubmitTime() < SUBMIT_COOLDOWN_MS) {
        onError?.('You recently sent a message. Please wait a moment before sending another.')
        submittingRef.current = false
        return
      }

      setSubmitting(true)
      try {
        await sendContactEmail(values)
        writeLastSubmitTime()
        reset()
        onSuccess?.()
      } catch (error) {
        onError?.(
          error instanceof Error ? error.message : 'Something went wrong. Please try again later.',
        )
      } finally {
        setSubmitting(false)
        submittingRef.current = false
      }
    },
    [values, honeypot, onSuccess, onError, reset],
  )

  return {
    values,
    errors,
    touched,
    submitting,
    submitAttempts,
    honeypot,
    setHoneypot,
    updateField,
    blurField,
    handleSubmit,
    reset,
  }
}
