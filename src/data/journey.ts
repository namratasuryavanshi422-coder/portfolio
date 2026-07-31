import { FiBookOpen, FiCode, FiTrendingUp, FiCrosshair, FiAward } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export type TimelineItem = {
  id: string
  year: string
  period: string
  title: string
  institution?: string
  category: string
  description: string
  highlights?: string[]
  icon: IconType
  techStack?: string[]
}

export type JourneyStat = {
  value: string
  label: string
}

export const TIMELINE: TimelineItem[] = [
  {
    id: 'bachelor-cse',
    year: '2024',
    period: '2024 – 2028 (Expected)',
    title: 'Bachelor of Engineering in Computer Science',
    institution: 'KLE Technological University, Dr. M. S. Sheshgiri Campus, Belagavi',
    category: 'Education',
    description:
      'Currently pursuing a Bachelor of Engineering in Computer Science with a strong interest in Software Engineering, Artificial Intelligence, Data Structures & Algorithms, Full-Stack Development, Cloud Computing, and Machine Learning.',
    highlights: [
      'Built programming fundamentals',
      'Joined coding club',
    ],
    icon: FiBookOpen,
  },
  {
    id: 'year-2025',
    year: '2025',
    period: '2025',
    title: 'Full-Stack Development & Leadership',
    category: 'Growth',
    description:
      'Started full-stack development with React, built multiple projects, participated in hackathons, and took on leadership responsibilities as Class Representative.',
    highlights: [
      'Learned React & TypeScript',
      'Built multiple projects',
      'Participated in Hackathons',
      'Became Class Representative',
    ],
    icon: FiCode,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    id: 'current-2026',
    year: '2026',
    period: '2026 — 5th Semester',
    title: 'Deepening Engineering & AI',
    category: 'Current',
    description:
      'Building AI applications, learning advanced Data Structures & Algorithms in Java, creating production-ready full-stack projects, and preparing for software engineering internships.',
    highlights: [
      'Building AI applications',
      'Advanced DSA in Java',
      'Production-ready full-stack projects',
      'Learning Cloud & DevOps',
    ],
    icon: FiTrendingUp,
    techStack: ['Java', 'DSA', 'AI/ML', 'React', 'Cloud'],
  },
  {
    id: 'target-2027',
    year: '2027',
    period: '2027 (Target)',
    title: 'Internship & Open Source',
    category: 'Goal',
    description:
      'Targeting a software engineering internship, contributing to open source, solving 500+ DSA problems, and mastering system design principles.',
    highlights: [
      'Software Engineering Internship',
      'Open Source Contributions',
      '500+ DSA Problems',
      'System Design',
    ],
    icon: FiCrosshair,
    techStack: ['System Design', 'Open Source', 'DSA'],
  },
  {
    id: 'goal-2028',
    year: '2028',
    period: '2028',
    title: 'Graduation',
    category: 'Goal',
    description:
      'Expected graduation with a B.E. in Computer Science. Goal: join a top-tier company as a Software Engineer.',
    highlights: [
      'B.E. in Computer Science',
      'Software Engineer at Google / Microsoft / Amazon',
    ],
    icon: FiAward,
  },
]

export const JOURNEY_STATS: JourneyStat[] = [
  { value: '9.16', label: 'CGPA' },
  { value: '8+', label: 'Hackathons' },
  { value: '10+', label: 'Projects' },
  { value: 'Class Rep', label: 'Leadership' },
  { value: '2028', label: 'Graduation' },
]
