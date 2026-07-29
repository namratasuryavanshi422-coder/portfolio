export const TRANSITION_DURATION = {
  fast: 150,
  base: 250,
  slow: 400,
} as const

export const TRANSITION_EASING = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutExpo: [0.87, 0, 0.13, 1] as const,
} as const
