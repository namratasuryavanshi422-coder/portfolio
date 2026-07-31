import { useEffect, type FormEvent } from 'react'
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion'
import { FiMail, FiMessageSquare, FiSend, FiTag, FiUser } from 'react-icons/fi'
import { FormField, RippleButton, GradientBorder } from '@/components/ui'
import { cn } from '@/lib/utils'
import {
  FIELD_LIMITS,
  type ContactField,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/lib/validation'

export type ContactFormController = {
  values: ContactFormValues
  errors: ContactFormErrors
  touched: Partial<Record<ContactField, boolean>>
  submitting: boolean
  submitAttempts: number
  honeypot: string
  setHoneypot: (value: string) => void
  updateField: (field: ContactField, value: string) => void
  blurField: (field: ContactField) => void
  handleSubmit: (event: FormEvent) => void
}

type ContactFormProps = ContactFormController

const inputIconClass = 'h-4 w-4'

export function ContactForm({
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
}: ContactFormProps) {
  const controls = useAnimationControls()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (submitAttempts === 0) return
    controls.start({
      x: [0, -10, 10, -8, 8, -4, 4, 0],
      transition: { duration: 0.45, ease: 'easeOut' },
    })
  }, [submitAttempts, controls])

  const messageOverLimit = values.message.length > FIELD_LIMITS.message

  return (
    <GradientBorder
      from="rgba(99,102,241,0.35)"
      to="rgba(139,92,246,0.18)"
      className="rounded-2xl"
      innerClassName="rounded-2xl bg-[#0b0b0e]/80 backdrop-blur-xl"
    >
      <motion.form
        onSubmit={handleSubmit}
        noValidate
        animate={shouldReduceMotion ? undefined : controls}
        className="space-y-5 p-6 sm:p-8"
      >
        <p className="sr-only" aria-live="polite">
          {submitting ? 'Sending your message' : ''}
        </p>

        {/* Honeypot field — hidden from humans, tempting for bots */}
        <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        {/* Name + Email row */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            id="contact-name"
            label="Full Name"
            required
            value={values.name}
            onChange={(value) => updateField('name', value)}
            onBlur={() => blurField('name')}
            error={touched.name ? errors.name : undefined}
            icon={<FiUser className={inputIconClass} />}
            placeholder="Your name"
            maxLength={FIELD_LIMITS.name}
            autoComplete="name"
          />
          <FormField
            id="contact-email"
            label="Email Address"
            required
            type="email"
            value={values.email}
            onChange={(value) => updateField('email', value)}
            onBlur={() => blurField('email')}
            error={touched.email ? errors.email : undefined}
            icon={<FiMail className={inputIconClass} />}
            placeholder="your@email.com"
            maxLength={FIELD_LIMITS.email}
            autoComplete="email"
          />
        </div>

        {/* Subject */}
        <FormField
          id="contact-subject"
          label="Subject"
          required
          value={values.subject}
          onChange={(value) => updateField('subject', value)}
          onBlur={() => blurField('subject')}
          error={touched.subject ? errors.subject : undefined}
          icon={<FiTag className={inputIconClass} />}
          placeholder="What's this about?"
          maxLength={FIELD_LIMITS.subject}
        />

        {/* Message */}
        <FormField
          id="contact-message"
          label="Message"
          required
          textarea
          rows={5}
          value={values.message}
          onChange={(value) => updateField('message', value)}
          onBlur={() => blurField('message')}
          error={touched.message ? errors.message : undefined}
          icon={<FiMessageSquare className={inputIconClass} />}
          placeholder="Tell me about your project, opportunity, or idea..."
          maxLength={FIELD_LIMITS.message}
          hint={
            <span
              className={cn(
                'text-[11px] tabular-nums',
                messageOverLimit ? 'text-red-400' : 'text-white/25',
              )}
            >
              {values.message.length}/{FIELD_LIMITS.message}
            </span>
          }
        />

        {/* Submit */}
        <RippleButton
          as="button"
          type="submit"
          disabled={submitting}
          className={cn(
            'inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-7 py-3.5 text-sm font-semibold text-white sm:w-auto',
            'shadow-lg shadow-accent-primary/20 transition-all duration-300',
            'hover:brightness-110 hover:shadow-xl hover:shadow-accent-primary/25',
            'active:brightness-95',
            'disabled:cursor-not-allowed disabled:opacity-60 disabled:animate-pulse',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
          )}
        >
          {submitting ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FiSend className="h-4 w-4" aria-hidden="true" />
              Send Message
            </>
          )}
        </RippleButton>
      </motion.form>
    </GradientBorder>
  )
}
