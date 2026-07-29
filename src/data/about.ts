export type StatItem = {
  label: string
  value: string
  description?: string
}

export const ABOUT = {
  heading: 'Engineering with Curiosity and Purpose',
  body: [
    'I am a Computer Science Engineering student passionate about building practical software that solves real-world problems.',
    'My interests span Full-Stack Development, Artificial Intelligence, Backend Engineering, and scalable application design.',
    'I enjoy transforming ideas into reliable products while continuously improving my problem-solving abilities through Data Structures & Algorithms, hackathons, and hands-on projects.',
    'Currently, I am preparing for software engineering opportunities at leading product-based companies while expanding my expertise in modern software development.',
  ],
} as const

export const STATS: StatItem[] = [
  { label: 'CGPA', value: '9.16 / 10' },
  { label: 'Projects', value: '5+' },
  { label: 'Hackathons', value: '7–8+' },
  { label: 'Leadership', value: 'Class Representative' },
  { label: 'Coding Club', value: 'Active Member' },
  {
    label: 'Current Focus',
    value: 'Full-Stack Development',
    description: 'AI Engineering  •  DSA',
  },
]
