import { motion, useReducedMotion } from 'framer-motion'
import { Modal } from '@/components/ui/Modal'

type SuccessModalProps = {
  open: boolean
  onClose: () => void
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId="contact-success-title"
      descriptionId="contact-success-description"
      panelClassName="max-w-md rounded-3xl border border-white/[0.08] bg-[#0c0c0f]/95 p-8 text-center shadow-2xl shadow-black/50 backdrop-blur-2xl"
    >
      {/* Animated checkmark */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-500/10 ring-1 ring-emerald-400/25">
        <svg viewBox="0 0 52 52" className="h-9 w-9" aria-hidden="true">
          <motion.circle
            cx="26"
            cy="26"
            r="22"
            fill="none"
            stroke="#34d399"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <motion.path
            d="M16 27l7 7 13-13"
            fill="none"
            stroke="#34d399"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.35, delay: 0.5, ease: 'easeOut' }}
          />
        </svg>
      </div>

      <h3
        id="contact-success-title"
        className="mt-6 text-xl font-semibold tracking-tight text-white"
      >
        Thank you for reaching out.
      </h3>
      <p id="contact-success-description" className="mt-2 text-sm leading-relaxed text-white/50">
        Your message has been sent successfully. I will get back to you as soon as possible.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary py-3 text-sm font-semibold text-white shadow-lg shadow-accent-primary/25 transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0f]"
      >
        Send another message
      </button>
    </Modal>
  )
}
