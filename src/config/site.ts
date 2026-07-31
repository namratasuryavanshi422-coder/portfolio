/**
 * ────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — the ONLY file you need to edit
 * ────────────────────────────────────────────────────────────────
 *  Update your contact details, social profiles, Calendly URL,
 *  resume path and location here — no component needs touching.
 */

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const LOCATION = 'Belagavi, Karnataka, India'

export const siteConfig = {
  name: 'Namrata Suryavanshi',

  /**
   * Contact details
   */
  contact: {
    /** Your real email. Clicking any "email" link opens a mailto: to this address. */
    email: 'hello@namrata.dev',

    /** Your LinkedIn profile. Open in a new tab. */
    linkedInUrl: 'https://linkedin.com/in/namrata-suryavanshi',

    /** Your GitHub profile. Open in a new tab. */
    githubUrl: 'https://github.com/namratasuryavanshi422-coder',

    /**
     * Your resume PDF. Place the file at `public/resume/` and point
     * this path at it. Leave the path as-is if you replace the PDF
     * in place.
     */
    resumePath: '/resume/Namrata_Suryavanshi_Resume.pdf',

    /** Your location, shown on the Contact section. */
    location: LOCATION,

    /** Opens Google Maps when the location card is clicked. */
    locationMapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`,
  },

  /**
   * Calendly
   * ────────────────────────────────────────────────────────────────
   * Set `VITE_CALENDLY_URL` in your `.env` file, e.g.
   *     VITE_CALENDLY_URL=https://calendly.com/namrata-suryavanshi
   * Leave empty to keep the "Schedule a Meeting" button disabled.
   */
  calendly: {
    url: CALENDLY_URL,
  },

  /**
   * EmailJS (contact form delivery)
   * ────────────────────────────────────────────────────────────────
   * Set the keys in your `.env` file. The contact form stays disabled
   * until all three are provided.
   */
  emailJs: {
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
    publicKey: EMAILJS_PUBLIC_KEY,
  },

  /**
   * Social profiles
   * ────────────────────────────────────────────────────────────────
   * Fill in a URL to show the icon. Leave an entry empty (`''`) to
   * hide it everywhere on the site.
   */
  socials: {
    github: 'https://github.com/namratasuryavanshi422-coder',
    linkedin: 'https://linkedin.com/in/namrata-suryavanshi',
    email: 'hello@namrata.dev',
    x: '',
    leetcode: '',
    codeforces: '',
    wellfound: '',
  },
} as const
