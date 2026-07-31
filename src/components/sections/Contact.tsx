import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { Container, MeetingButton, RippleButton, SectionTitle, SuccessModal, Toast } from '@/components/ui'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactMethodCard } from '@/components/contact/ContactMethodCard'
import { SocialLinks } from '@/components/contact/SocialLinks'
import { useContactForm } from '@/hooks/useContactForm'
import { useToast } from '@/hooks/useToast'
import { CONTACT, CONTACT_METHODS } from '@/constants/contact'
import { cn } from '@/lib/utils'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
}

export function Contact() {
  const isAnimated = !useReducedMotion()
  const { toast, notify, dismiss } = useToast()
  const [successOpen, setSuccessOpen] = useState(false)

  const form = useContactForm({
    onSuccess: () => {
      setSuccessOpen(true)
      notify('success', 'Message sent successfully! I\'ll get back to you soon.')
    },
    onError: (message) => notify('error', message),
  })

  return (
    <section
      id="contact"
      className="section-spacing relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* ─── Background ─── */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15]" />
      <div className="pointer-events-none absolute -left-1/4 top-1/3 h-96 w-96 rounded-full bg-accent-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent-secondary/5 blur-[100px]" />

      <Container maxWidth="xl" className="relative">
        {/* ─── Heading ─── */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            title="Let's Build Something Amazing Together"
            subtitle="I'm currently open to software engineering opportunities, collaborations, and meaningful conversations. Reach out and let's create something impactful."
            align="left"
          />
          <span className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 text-xs font-medium text-emerald-300/90 md:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </span>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16"
          variants={isAnimated ? containerVariants : undefined}
          initial={isAnimated ? 'hidden' : undefined}
          whileInView={isAnimated ? 'visible' : undefined}
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* ─── Left: Contact Form ─── */}
          <motion.div variants={isAnimated ? itemVariants : undefined} className="lg:col-span-3">
            <ContactForm {...form} />
          </motion.div>

          {/* ─── Right: Contact Info ─── */}
          <motion.div variants={isAnimated ? itemVariants : undefined} className="space-y-5 lg:col-span-2">
            {CONTACT_METHODS.map((method) => (
              <ContactMethodCard key={method.id} method={method} variants={isAnimated ? itemVariants : undefined} />
            ))}

            {/* ─── Action Buttons ─── */}
            <motion.div
              variants={isAnimated ? itemVariants : undefined}
              className="flex flex-wrap gap-3 pt-2"
            >
              <RippleButton
                as="a"
                href={CONTACT.resumeUrl}
                download
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm font-medium text-white/60',
                  'transition-all duration-200 hover:border-accent-primary/30 hover:bg-accent-primary/[0.06] hover:text-accent-primary hover:shadow-[0_8px_24px_-8px_rgba(99,102,241,0.35)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
                )}
              >
                <FiDownload className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </RippleButton>

              <MeetingButton />
            </motion.div>

            {/* ─── Social Links ─── */}
            <motion.div variants={isAnimated ? itemVariants : undefined} className="pt-4">
              <p className="mb-4 text-xs font-medium tracking-wide text-white/20">Find me online</p>
              <SocialLinks variants={isAnimated ? itemVariants : undefined} />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* ─── Success Modal ─── */}
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />

      {/* ─── Toast ─── */}
      <Toast toast={toast} onDismiss={dismiss} />
    </section>
  )
}
