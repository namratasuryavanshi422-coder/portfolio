export type CertificateBrandKey =
  | 'elewayte'
  | 'iiit-dharwad'
  | 'mathworks'
  | 'tcs'
  | 'kle'

export type CertificateCategory =
  | 'Internship'
  | 'Hackathon'
  | 'Certification'
  | 'Competition'
  | 'Conference'

export type CertificateArtworkKey =
  | 'ai'
  | 'hackathon'
  | 'engineering'
  | 'corporate'
  | 'innovation'

export type Certificate = {
  id: string
  title: string
  organization: string
  category: CertificateCategory
  description: string
  year: string
  /** Full issue date shown in the credential modal. */
  issueDate: string
  /** Path to the REAL certificate — only ever rendered in the modal. */
  imageFile: string
  credentialId: string
  /** Placeholder artwork theme shown on the portfolio card. */
  artwork: CertificateArtworkKey
  skills: string[]
  gradientFrom: string
  gradientTo: string
  brand: CertificateBrandKey
  verified: boolean
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 'elewayte-ai-internship',
    title: 'AI Internship',
    organization: 'Elewayte',
    category: 'Internship',
    description:
      'Completed an Artificial Intelligence Internship covering practical AI concepts, AI tools, and real-world applications.',
    year: '2026',
    issueDate: 'January 2026',
    imageFile: '/certificates/elewayte-ai-internship.png',
    credentialId: 'CRED-ELV-26-0142',
    artwork: 'ai',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Prompt Engineering', 'AI Tools', 'Python'],
    gradientFrom: '#7C3AED',
    gradientTo: '#3B82F6',
    brand: 'elewayte',
    verified: true,
  },
  {
    id: 'iiit-dharwad-hackathon',
    title: 'National Level Hackathon',
    organization: 'IIIT Dharwad',
    category: 'Hackathon',
    description:
      'Participated in a national-level hackathon focused on solving real-world engineering challenges through innovative software solutions.',
    year: '2026',
    issueDate: 'January 2026',
    imageFile: '/certificates/iiit-dharwad-hackathon.png',
    credentialId: 'CRED-IIIT-26-0087',
    artwork: 'hackathon',
    skills: ['Problem Solving', 'Rapid Prototyping', 'Team Collaboration', 'Software Development'],
    gradientFrom: '#F97316',
    gradientTo: '#DC2626',
    brand: 'iiit-dharwad',
    verified: true,
  },
  {
    id: 'matlab-onramp',
    title: 'MATLAB Onramp',
    organization: 'MathWorks',
    category: 'Certification',
    description:
      'Successfully completed MATLAB Onramp certification covering MATLAB programming, visualization, matrices, and numerical computing.',
    year: '2026',
    issueDate: 'January 2026',
    imageFile: '/certificates/matlab-onramp.png',
    credentialId: 'CRED-MW-26-0331',
    artwork: 'engineering',
    skills: ['MATLAB', 'Data Visualization', 'Numerical Computing', 'Matrix Operations', 'Signal Processing'],
    gradientFrom: '#06B6D4',
    gradientTo: '#0EA5E9',
    brand: 'mathworks',
    verified: true,
  },
  {
    id: 'tcs-techbytes',
    title: 'TCS TechBytes',
    organization: 'TCS',
    category: 'Competition',
    description:
      'Participated in the Statewide Engineering IT Quiz demonstrating technical aptitude and computer science fundamentals.',
    year: '2026',
    issueDate: 'January 2026',
    imageFile: '/certificates/tcs-techbytes.png',
    credentialId: 'CRED-TCS-26-0209',
    artwork: 'corporate',
    skills: ['Computer Science Fundamentals', 'Technical Aptitude', 'IT & Networking'],
    gradientFrom: '#3B82F6',
    gradientTo: '#6366F1',
    brand: 'tcs',
    verified: true,
  },
  {
    id: 'iic-regional-meet',
    title: 'IIC Regional Meet',
    organization: 'KLE Technological University',
    category: 'Conference',
    description:
      'Participated in the Innovation Cell Regional Meet conducted under the Ministry of Education Innovation Cell.',
    year: '2026',
    issueDate: 'January 2026',
    imageFile: '/certificates/iic-regional-meet.png',
    credentialId: 'CRED-KLE-26-0114',
    artwork: 'innovation',
    skills: ['Innovation', 'Design Thinking', 'Idea Pitching', 'Entrepreneurship'],
    gradientFrom: '#10B981',
    gradientTo: '#06B6D4',
    brand: 'kle',
    verified: true,
  },
]
