import type { ReactNode } from 'react'
import { Particles } from './Particles'

type ArtworkFrameProps = {
  from: string
  to: string
  children: ReactNode
  caption?: string
}

/**
 * Shared canvas for every placeholder artwork: layered gradient glows,
 * a grid backdrop, floating particles, hover shine sweep and a mono
 * caption. The real certificate is never rendered here.
 */
export function ArtworkFrame({ from, to, children, caption }: ArtworkFrameProps) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden"
      style={{
        background: `
          radial-gradient(120% 100% at 18% -5%, ${from}26 0%, rgba(10,10,13,0) 58%),
          radial-gradient(130% 110% at 88% 115%, ${to}22 0%, rgba(10,10,13,0) 58%),
          #0a0a0d`,
      }}
    >
      {/* Grid backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      {/* Color wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${from}14, transparent 45%, ${to}12)` }}
        aria-hidden="true"
      />

      {/* Illustration */}
      <div className="pointer-events-none absolute inset-0">{children}</div>

      {/* Floating particles */}
      <Particles from={from} to={to} />

      {/* Hover shine sweep */}
      <div
        className="pointer-events-none absolute inset-0 z-20 -translate-x-[180%] skew-x-[-16deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-[1100ms] ease-out-expo group-hover:translate-x-[180%]"
        aria-hidden="true"
      />

      {/* Bottom depth fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent"
        aria-hidden="true"
      />

      {caption && (
        <span className="absolute bottom-3 left-4 z-20 font-mono text-[0.55rem] tracking-[0.24em] text-white/35">
          {caption}
        </span>
      )}
    </div>
  )
}
