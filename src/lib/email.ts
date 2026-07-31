import emailjs from '@emailjs/browser'
import { siteConfig } from '@/config/site'
import { sanitizeContactValues, type ContactFormValues } from '@/lib/validation'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

type ClientMeta = {
  ip: string
  browser: string
}

function getBrowserInfo(): string {
  if (typeof navigator === 'undefined') return 'Unavailable'
  const ua = navigator.userAgent
  const match = ua.match(
    /(Edg|Chrome|Firefox|Safari|Opera|OPR|MSIE|Trident)\/?\s*([\d.]+)?/,
  )
  if (!match) return ua.slice(0, 160)
  const name =
    match[1] === 'OPR'
      ? 'Opera'
      : match[1] === 'Edg'
        ? 'Edge'
        : match[1] === 'Trident'
          ? 'IE'
          : match[1]
  return `${name}${match[2] ? ` ${match[2]}` : ''}`
}

async function getClientIp(): Promise<string> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 2500)
    const response = await fetch('https://api.ipify.org?format=json', {
      signal: controller.signal,
    })
    clearTimeout(timeout)
    if (!response.ok) return 'Unavailable'
    const data = (await response.json()) as { ip?: string }
    return data.ip || 'Unavailable'
  } catch {
    return 'Unavailable'
  }
}

async function getClientMeta(): Promise<ClientMeta> {
  const [ip, browser] = await Promise.all([getClientIp(), Promise.resolve(getBrowserInfo())])
  return { ip, browser }
}

export function isEmailConfigured(): boolean {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)
}

export type EmailTemplateParams = ContactFormValues & {
  reply_to: string
  timestamp: string
  from_ip: string
  browser: string
}

/**
 * Deliver a contact message via EmailJS. Inputs are sanitized before
 * transmission, and the payload includes the sender, subject, message,
 * timestamp, user IP (when available) and browser info so your EmailJS
 * template can render them.
 */
export async function sendContactEmail(input: ContactFormValues): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      `Contact form is not configured yet. Please email me directly at ${siteConfig.contact.email}.`,
    )
  }

  const sanitized = sanitizeContactValues(input)
  const { ip, browser } = await getClientMeta()

  const params: EmailTemplateParams = {
    ...sanitized,
    reply_to: sanitized.email,
    timestamp: new Date().toLocaleString(undefined, {
      dateStyle: 'full',
      timeStyle: 'short',
    }),
    from_ip: ip,
    browser,
  }

  const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)

  if (response.status !== 200) {
    throw new Error('Failed to send message. Please try again later.')
  }
}
