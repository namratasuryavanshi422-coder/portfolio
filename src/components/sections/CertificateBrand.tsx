import { useId } from 'react'
import type { CSSProperties, ReactElement } from 'react'
import type { CertificateBrandKey } from '@/data/certificates'

type BrandProps = {
  brand: CertificateBrandKey
  from: string
  to: string
  className?: string
  style?: CSSProperties
}

function MathWorksMark({ from, to }: { from: string; to: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path d="M3.6 5.4h2.1v13.2h-2.1z" fill={`url(#${id})`} />
      <path d="M18.3 5.4h2.1v13.2h-2.1z" fill={`url(#${id})`} />
      <path
        d="M7.6 14.4C7.6 9.2 9.8 7 11.5 10.6c1.7-3.6 3.9-1.4 3.9 3.8"
        stroke={`url(#${id})`}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TcsMark({ from, to }: { from: string; to: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <text
        x="12"
        y="13.2"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="10"
        fontWeight="800"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        letterSpacing="-0.02em"
        fill={`url(#${id})`}
      >
        TCS
      </text>
    </svg>
  )
}

function IiitDharwadMark({ from, to }: { from: string; to: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        d="M12 3.1l7.3 2.7v5.9c0 4.4-3.1 7.4-7.3 9.3-4.2-1.9-7.3-4.9-7.3-9.3V5.8z"
        stroke={`url(#${id})`}
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <text
        x="12"
        y="12.8"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="9"
        fontWeight="800"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fill={`url(#${id})`}
      >
        D
      </text>
    </svg>
  )
}

function KleMark({ from, to }: { from: string; to: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <text
        x="12"
        y="12.2"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="9.5"
        fontWeight="800"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        letterSpacing="-0.08em"
        fill={`url(#${id})`}
      >
        KLE
      </text>
      <path
        d="M7.6 17c1.2.9 2.7 1.3 4.4 1.3s3.2-.4 4.4-1.3"
        stroke={`url(#${id})`}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ElewayteMark({ from, to }: { from: string; to: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        d="M7.2 5.4h8.4M7.2 12h4.6M7.2 18.6h8.4M7 5.2v13.6"
        stroke={`url(#${id})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.4 8.9L20.6 4.7M20.6 4.7h-3M20.6 4.7v3"
        stroke={`url(#${id})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CertificateBrand({ brand, from, to, className, style }: BrandProps) {
  const commonProps = { from, to }
  let mark: ReactElement | null = null

  switch (brand) {
    case 'mathworks':
      mark = <MathWorksMark {...commonProps} />
      break
    case 'tcs':
      mark = <TcsMark {...commonProps} />
      break
    case 'iiit-dharwad':
      mark = <IiitDharwadMark {...commonProps} />
      break
    case 'kle':
      mark = <KleMark {...commonProps} />
      break
    case 'elewayte':
      mark = <ElewayteMark {...commonProps} />
      break
  }

  return (
    <div className={className} style={style} aria-hidden="true">
      {mark}
    </div>
  )
}
