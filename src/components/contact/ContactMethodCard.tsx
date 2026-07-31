import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import type { ContactMethod } from '@/constants/contact'

type ContactMethodCardProps = {
  method: ContactMethod
  variants?: Variants
}

export function ContactMethodCard({ method, variants }: ContactMethodCardProps) {
  const isAnimated = !useReducedMotion()
  const Icon = method.icon
  const isExternal = Boolean(method.external)

  return (
    <motion.a
      href={method.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      variants={isAnimated ? variants : undefined}
      className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
    >
      <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10" />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-primary/10 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 text-accent-primary" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium tracking-wide text-white/30">{method.label}</p>
          <p className="mt-0.5 truncate text-sm font-medium text-white/70">{method.value}</p>
        </div>
        {isExternal && (
          <FiArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-white/20 opacity-0 transition-all duration-300 group-hover:text-accent-primary group-hover:opacity-100"
            aria-hidden="true"
          />
        )}
      </div>
    </motion.a>
  )
}
