import type { ReactNode, ComponentPropsWithoutRef, ElementType } from 'react'

/* ─── Polymorphic ─── */
export type AsProp<T extends ElementType> = {
  as?: T
}

export type PolymorphicProps<T extends ElementType, P = Record<string, unknown>> = AsProp<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof AsProp<T> | keyof P> &
  P

/* ─── Common ─── */
export type WithChildren = {
  children?: ReactNode
}

export type WithClassName = {
  className?: string
}

/* ─── UI Component Props ─── */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type CardVariant = 'default' | 'elevated' | 'bordered' | 'flat'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export type BadgeVariant = 'default' | 'accent' | 'outline' | 'subtle'
export type BadgeSize = 'sm' | 'md'

export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export type SectionAlign = 'left' | 'center'
