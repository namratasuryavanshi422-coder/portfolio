import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export const PERSONAL = {
  greeting: "Hi, I'm",
  name: 'Namrata Suryavanshi',
  headline: 'Building Scalable Full-Stack Applications with AI',
  summary:
    'Full-stack engineer specializing in React, ASP.NET Core, and Java. I architect scalable web applications and integrate AI-driven solutions to solve complex engineering problems with modern technologies.',
  resumePath: '/resume.pdf',
} as const

export type SocialLink = {
  label: string
  href: string
  icon: IconType
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/namrata', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/namrata', icon: FiLinkedin },
  { label: 'Email', href: 'mailto:hello@namrata.dev', icon: FiMail },
]
