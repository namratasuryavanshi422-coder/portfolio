import { useRef, useState, useEffect } from 'react'
import { useReducedMotion, motion } from 'framer-motion'
import { FiArrowDown, FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi'
import { Button } from '@/components/ui'
import { Container } from '@/components/ui'
import { PERSONAL, SOCIAL_LINKS } from '@/constants/personal'
import { CinematicLayer } from './CinematicLayer'
import portrait1 from '@/assets/images/portrait.png'
import portrait2 from '@/assets/images/portrait-2.jpg'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
}

const visualVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: easeOutExpo,
      delay: 0.5,
    },
  },
}

function PortraitVisual() {
  return (
    <motion.div
      variants={visualVariants}
      className="relative hidden lg:flex lg:w-[45%] items-center justify-center"
      aria-hidden="true"
    >
      <div className="relative h-[32rem] w-full max-w-[28rem]">
        {/* Background glow */}
        <div className="absolute -inset-8 bg-gradient-radial from-accent-primary/8 via-accent-secondary/5 to-transparent blur-3xl" />

        {/* Decorative ring */}
        <div className="absolute bottom-24 right-72 h-48 w-48 rounded-full border border-white/5" />

        {/* Accent dot */}
        <div className="absolute right-24 top-32 h-4 w-4 rounded-full bg-accent-primary/30 ring-2 ring-accent-primary/10" />

        {/* Gradient line */}
        <div className="absolute right-20 top-52 h-px w-20 bg-gradient-to-r from-accent-primary/40 to-transparent" />

        {/* Main portrait — glass frame with photo */}
        <motion.div
          className="absolute right-4 top-6 h-72 w-64 overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-xl -rotate-2"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' as const }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none z-10" />
          <img
            src={portrait1}
            alt="Professional portrait"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Secondary portrait — smaller, rotated opposite */}
        <motion.div
          className="absolute bottom-20 right-14 h-52 w-48 overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg rotate-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' as const, delay: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none z-10" />
          <img
            src={portrait2}
            alt="Alternate portrait"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <span className="caption">Scroll</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <FiArrowDown className="h-4 w-4 text-text-tertiary" aria-hidden="true" />
      </motion.span>
    </motion.div>
  )
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const isAnimated = !shouldReduceMotion

  const fgVideoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showSoundHint, setShowSoundHint] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSoundHint(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    const fg = fgVideoRef.current
    const bg = bgVideoRef.current
    if (!fg || !bg) return
    if (isPlaying) {
      fg.pause()
      bg.pause()
    } else {
      fg.play()
      bg.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const fg = fgVideoRef.current
    if (!fg) return
    fg.muted = !fg.muted
    setIsMuted(fg.muted)
    setShowSoundHint(false)
  }

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden bg-bg-primary"
      aria-label="Introduction"
    >
      {/* ─── Video Background Layers ─── */}
      <video
        ref={bgVideoRef}
        className="video-bg"
        src="/videos/hero-talking-head.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      <video
        ref={fgVideoRef}
        className="video-fg"
        src="/videos/hero-talking-head.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        aria-label="Introduction video"
      />

      {/* ─── Cinematic Overlays ─── */}
      <div className="video-vignette" />
      <div className="video-gradient-bottom" />
      <div className="video-gradient-top" />

      {/* ─── Three.js Particles ─── */}
      <CinematicLayer className="video-particles" />

      {/* ─── REC Badge ─── */}
      <div
        className="absolute top-4 right-4 z-10 flex items-center gap-1.5 font-mono text-[0.65rem] tracking-widest text-white/70 sm:top-6 sm:right-6"
        aria-hidden="true"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(255,77,77,0.9)] rec-dot" />
        REC
      </div>

      {/* ─── Content ─── */}
      <Container maxWidth="xl" className="relative w-full z-10">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:gap-16"
          variants={isAnimated ? containerVariants : undefined}
          initial={isAnimated ? 'hidden' : false}
          animate={isAnimated ? 'visible' : undefined}
        >
          {/* ─── Text Content ─── */}
          <div className="flex-1 pt-20 pb-16 lg:py-24">
            <motion.div
              className="max-w-2xl"
              variants={isAnimated ? itemVariants : undefined}
            >
              <p className="subtitle mb-2 font-medium text-accent-primary">
                {PERSONAL.greeting}
              </p>
            </motion.div>

            <motion.h1
              className="mt-2 text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
              variants={isAnimated ? itemVariants : undefined}
            >
              {PERSONAL.name}
            </motion.h1>

            <motion.h2
              className="mt-3 max-w-xl text-[clamp(1.1rem,2.2vw,1.5rem)] font-medium leading-snug tracking-tight text-text-secondary"
              variants={isAnimated ? itemVariants : undefined}
            >
              {PERSONAL.headline.split('AI').map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="gradient-text-accent">AI</span>
                  </span>
                ) : (
                  part
                ),
              )}
            </motion.h2>

            <motion.p
              className="subtitle mt-6 max-w-lg"
              variants={isAnimated ? itemVariants : undefined}
            >
              {PERSONAL.summary}
            </motion.p>

            {/* ─── CTA Buttons ─── */}
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              variants={isAnimated ? itemVariants : undefined}
            >
              <Button
                as="a"
                href="#projects"
                size="lg"
                variant="primary"
                className="group"
              >
                <span>View Projects</span>
                <span className="inline-block transition-transform duration-250 ease-out-expo group-hover:translate-x-1">
                  &rarr;
                </span>
              </Button>
              <Button
                as="a"
                href={PERSONAL.resumePath}
                download
                size="lg"
                variant="outline"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* ─── Social Links ─── */}
            <motion.nav
              className="mt-10 flex items-center gap-5"
              aria-label="Social links"
              variants={isAnimated ? itemVariants : undefined}
            >
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-text-tertiary transition-all duration-250 ease-out-expo hover:text-accent-primary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:text-accent-primary"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                )
              })}
            </motion.nav>
          </div>

          {/* ─── Portrait Visual ─── */}
          <PortraitVisual />
        </motion.div>
      </Container>

      {/* ─── Video Controls ─── */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-2 sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/70 backdrop-blur-md transition-all duration-200 hover:bg-accent-primary/20 hover:border-accent-primary/40 hover:text-white hover:-translate-y-0.5"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <FiPause className="h-3.5 w-3.5" /> : <FiPlay className="h-3.5 w-3.5" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/70 backdrop-blur-md transition-all duration-200 hover:bg-accent-primary/20 hover:border-accent-primary/40 hover:text-white hover:-translate-y-0.5"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <FiVolumeX className="h-3.5 w-3.5" /> : <FiVolume2 className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* ─── Sound Hint ─── */}
      {showSoundHint && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-16 right-4 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[0.65rem] font-medium text-white/70 backdrop-blur-md transition-all duration-200 hover:text-white sm:bottom-20 sm:right-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-primary shadow-[0_0_0_0_rgba(99,102,241,0.6)] sound-hint-pulse" />
          Tap for sound
        </button>
      )}

      {/* ─── Scroll Indicator ─── */}
      <ScrollIndicator />
    </section>
  )
}
