import { useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'
import type { MouseEvent } from 'react'

type MouseParallaxOptions = {
  /** Max tilt in degrees applied from rotateX / rotateY. */
  maxTilt?: number
  /** Max translate offset in px. */
  maxTranslate?: number
}

type MouseParallaxReturn = {
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  x: MotionValue<number>
  y: MotionValue<number>
  handleMouseMove: (event: MouseEvent<HTMLElement>) => void
  reset: () => void
}

/**
 * Tracks the pointer over an element and exposes smoothed motion values
 * for a subtle 3D tilt + translate parallax effect.
 */
export function useMouseParallax({
  maxTilt = 4,
  maxTranslate = 8,
}: MouseParallaxOptions = {}): MouseParallaxReturn {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const sx = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 140, damping: 18, mass: 0.4 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [maxTilt, -maxTilt])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-maxTilt, maxTilt])
  const x = useTransform(sx, [-0.5, 0.5], [-maxTranslate, maxTranslate])
  const y = useTransform(sy, [-0.5, 0.5], [-maxTranslate, maxTranslate])

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mx.set((event.clientX - rect.left) / rect.width - 0.5)
    my.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return { rotateX, rotateY, x, y, handleMouseMove, reset }
}
