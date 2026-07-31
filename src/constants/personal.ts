import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { SiCodeforces, SiGithub, SiLeetcode, SiWellfound } from 'react-icons/si'
import type { IconType } from 'react-icons'
import { siteConfig } from '@/config/site'

export const PERSONAL = {
  greeting: "Hi, I'm",
  name: siteConfig.name,
  headline: 'Building Scalable Full-Stack Applications with AI',
  summary:
    'Full-stack engineer specializing in React, ASP.NET Core, and Java. I architect scalable web applications and integrate AI-driven solutions to solve complex engineering problems with modern technologies.',
  resumePath: siteConfig.contact.resumePath,
} as const

export type SocialLink = {
  label: string
  href: string
  icon: IconType
}

type SocialEntry = {
  id: keyof typeof siteConfig.socials
  label: string
  icon: IconType
}

const SOCIAL_ENTRIES: SocialEntry[] = [
  { id: 'github', label: 'GitHub', icon: SiGithub },
  { id: 'linkedin', label: 'LinkedIn', icon: FaLinkedin },
  { id: 'email', label: 'Email', icon: FiMail },
  { id: 'x', label: 'X', icon: FaXTwitter },
  { id: 'leetcode', label: 'LeetCode', icon: SiLeetcode },
  { id: 'codeforces', label: 'Codeforces', icon: SiCodeforces },
  { id: 'wellfound', label: 'Wellfound', icon: SiWellfound },
]

function buildSocialLink(entry: SocialEntry): SocialLink | null {
  const href = siteConfig.socials[entry.id]
  if (!href) return null
  return { label: entry.label, href, icon: entry.icon }
}

export const SOCIAL_LINKS: SocialLink[] = SOCIAL_ENTRIES
  .map(buildSocialLink)
  .filter((link): link is SocialLink => link !== null)
