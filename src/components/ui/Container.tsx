import type { ContainerMaxWidth, WithChildren, WithClassName } from '@/types'
import { cn } from '@/lib/utils'

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
  sm: 'max-w-container-xs',
  md: 'max-w-container-sm',
  lg: 'max-w-container-md',
  xl: 'max-w-container-xl',
  full: 'max-w-full',
}

type ContainerProps = WithChildren &
  WithClassName & {
    maxWidth?: ContainerMaxWidth
    as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'nav'
  }

export function Container({
  children,
  className,
  maxWidth = 'xl',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        maxWidthClasses[maxWidth],
        className,
      )}
    >
      {children}
    </Tag>
  )
}
