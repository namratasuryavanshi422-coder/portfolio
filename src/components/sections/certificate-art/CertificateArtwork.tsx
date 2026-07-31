import type { Certificate } from '@/data/certificates'
import { AiArtwork } from './AiArtwork'
import { HackathonArtwork } from './HackathonArtwork'
import { EngineeringArtwork } from './EngineeringArtwork'
import { CorporateArtwork } from './CorporateArtwork'
import { InnovationArtwork } from './InnovationArtwork'

type CertificateArtworkProps = {
  certificate: Pick<Certificate, 'artwork' | 'gradientFrom' | 'gradientTo'>
}

/**
 * Renders the themed placeholder artwork for a certificate. The real
 * certificate image is intentionally never shown here — it only appears
 * inside the credential modal.
 */
export function CertificateArtwork({ certificate }: CertificateArtworkProps) {
  const { artwork, gradientFrom, gradientTo } = certificate
  const props = { from: gradientFrom, to: gradientTo }

  switch (artwork) {
    case 'ai':
      return <AiArtwork {...props} />
    case 'hackathon':
      return <HackathonArtwork {...props} />
    case 'engineering':
      return <EngineeringArtwork {...props} />
    case 'corporate':
      return <CorporateArtwork {...props} />
    case 'innovation':
      return <InnovationArtwork {...props} />
  }
}
