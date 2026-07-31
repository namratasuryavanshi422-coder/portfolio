import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Tooltip } from '@/components/ui'
import { SOCIAL_LINKS } from '@/constants/personal'
import { cn } from '@/lib/utils'

type SocialLinksProps = {
  className?: string
  variants?: Variants
}

export function SocialLinks({ className, variants }: SocialLinksProps) {
  const isAnimated = !useReducedMotion()

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon
        const isMail = link.href.startsWith('mailto:')

        return (
          <motion.div key={link.label} variants={isAnimated ? variants : undefined}>
            <Tooltip label={link.label} side="top">
              <a
                href={link.href}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/30 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/40 hover:bg-accent-primary/10 hover:text-accent-primary hover:shadow-[0_8px_24px_-6px_rgba(99,102,241,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
              >
                <Icon
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </a>
            </Tooltip>
          </motion.div>
        )
      })}
    </div>
  )
}
