export const FIELD_LIMITS = {
  name: 80,
  email: 120,
  subject: 150,
  message: 3000,
} as const

export type ContactField = keyof typeof FIELD_LIMITS

export type ContactFormValues = Record<ContactField, string>

export type ContactFormErrors = Partial<Record<ContactField, string>>

export const INITIAL_CONTACT_VALUES: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Remove control characters while preserving tab, newline and carriage
 * return. Iterative, so no control-character regex is needed.
 */
function stripControlCharacters(value: string): string {
  let result = ''
  for (const char of value) {
    const code = char.charCodeAt(0)
    if (code === 9 || code === 10 || code === 13) {
      result += char
      continue
    }
    if (code < 32 || code === 127) continue
    result += char
  }
  return result
}

/**
 * Single-line sanitization: trims and collapses whitespace. Used for
 * name, email and subject.
 */
export function sanitizeText(value: string): string {
  return stripControlCharacters(value).replace(/\s+/g, ' ').trim()
}

/**
 * Multi-line sanitization for the message body: strips control
 * characters and stray trailing spaces while keeping newlines.
 */
export function sanitizeMessage(value: string): string {
  return stripControlCharacters(value).replace(/[ \t]+$/gm, '').trim()
}

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim())
}

function fieldLabel(field: ContactField): string {
  switch (field) {
    case 'name':
      return 'Name'
    case 'email':
      return 'Email'
    case 'subject':
      return 'Subject'
    case 'message':
      return 'Message'
  }
}

export function validateContactField(
  field: ContactField,
  rawValue: string,
): string | undefined {
  const value = field === 'message' ? sanitizeMessage(rawValue) : sanitizeText(rawValue)
  const limit = FIELD_LIMITS[field]

  if (!value) return `${fieldLabel(field)} is required`

  if (value.length > limit) {
    return `${fieldLabel(field)} must be ${limit} characters or fewer`
  }

  switch (field) {
    case 'name':
      if (value.length < 2) return 'Name must be at least 2 characters'
      break
    case 'email':
      if (!isValidEmail(value)) return 'Enter a valid email address'
      break
    case 'subject':
      if (value.length < 3) return 'Subject must be at least 3 characters'
      break
    case 'message':
      if (value.length < 10) return 'Message must be at least 10 characters'
      break
  }

  return undefined
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}
  for (const field of Object.keys(FIELD_LIMITS) as ContactField[]) {
    const error = validateContactField(field, values[field])
    if (error) errors[field] = error
  }
  return errors
}

export function sanitizeContactValues(values: ContactFormValues): ContactFormValues {
  return {
    name: sanitizeText(values.name),
    email: sanitizeText(values.email).toLowerCase(),
    subject: sanitizeText(values.subject),
    message: sanitizeMessage(values.message),
  }
}
