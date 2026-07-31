import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { siteConfig } from '@/config/site'

export const CONTACT = {
  email: siteConfig.contact.email,
  linkedIn: siteConfig.contact.linkedInUrl,
  github: siteConfig.contact.githubUrl,
  resumeUrl: siteConfig.contact.resumePath,
  location: siteConfig.contact.location,
  locationMapUrl: siteConfig.contact.locationMapUrl,
} as const

export type ContactMethod = {
  id: string
  label: string
  value: string
  href: string
  icon: IconType
  external?: boolean
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: 'email',
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: FiMail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect with me',
    href: CONTACT.linkedIn,
    icon: FiLinkedin,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'View my work',
    href: CONTACT.github,
    icon: FiGithub,
    external: true,
  },
  {
    id: 'location',
    label: 'Location',
    value: CONTACT.location,
    href: CONTACT.locationMapUrl,
    icon: FiMapPin,
    external: true,
  },
]
