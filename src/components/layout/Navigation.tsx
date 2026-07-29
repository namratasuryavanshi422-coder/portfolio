import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { NAV_ITEMS } from '@/constants/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui'

const navIds = NAV_ITEMS.map((item) => item.href.slice(1))

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(navIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo',
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-black/40 backdrop-blur-[12px] border-b border-white/5',
      )}
    >
      <Container maxWidth="xl" as="nav" aria-label="Main navigation">
        <div className="flex h-18 items-center justify-between">
          {/* ─── Logo ─── */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white"
          >
            NS
          </a>

          {/* ─── Desktop Nav ─── */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      'group relative rounded-lg px-4 py-2.5 text-sm font-medium tracking-wide transition-all duration-200',
                      isActive
                        ? 'text-accent-primary'
                        : 'text-white/70 hover:text-white',
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-4 -bottom-px h-0.5 bg-accent-primary rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-x-4 -bottom-px h-0.5 bg-white/40 rounded-full scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* ─── Social Icons / Mobile Hamburger ─── */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/namrata"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden text-white/60 transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] lg:block"
            >
              <FiGithub className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/namrata"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden text-white/60 transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] lg:block"
            >
              <FiLinkedin className="h-5 w-5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:text-white lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="flex w-5 flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-current rounded-full"
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 w-full bg-current rounded-full"
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-current rounded-full"
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </button>
          </div>
        </div>
      </Container>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/5 bg-black/80 backdrop-blur-xl lg:hidden"
          >
            <Container maxWidth="xl">
              <nav className="py-6" aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.href.slice(1)
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'block rounded-lg px-4 py-3.5 text-base font-medium transition-colors duration-200',
                            isActive
                              ? 'bg-white/10 text-accent-primary'
                              : 'text-white/70 hover:bg-white/5 hover:text-white',
                          )}
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                <div className="mt-6 flex items-center gap-4 px-4">
                  <a
                    href="https://github.com/namrata"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    <FiGithub className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://linkedin.com/in/namrata"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    <FiLinkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
