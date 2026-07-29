import { FiStar, FiUsers, FiAward, FiCode, FiFolder, FiBook } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export type Achievement = {
  id: string
  title: string
  value: string
  description: string
  icon: IconType
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'academic-excellence',
    title: 'Academic Excellence',
    value: 'CGPA 9.16 / 10',
    description:
      'Maintained strong academic performance throughout my Computer Science Engineering degree.',
    icon: FiStar,
  },
  {
    id: 'leadership',
    title: 'Leadership',
    value: 'Class Representative',
    description:
      'Served as Class Representative during 3rd and 4th Semester, coordinating communication between students and faculty.',
    icon: FiUsers,
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    value: '7–8 Participations',
    description:
      'Participated in multiple hackathons focused on solving real-world engineering problems.',
    icon: FiAward,
  },
  {
    id: 'coding-club',
    title: 'Coding Club',
    value: 'Active Member',
    description:
      'Contributed to technical activities, collaborative learning, and coding events.',
    icon: FiCode,
  },
  {
    id: 'projects',
    title: 'Projects',
    value: '5+ Software Projects',
    description:
      'Built full-stack applications, AI-powered solutions, and modern web applications.',
    icon: FiFolder,
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    value: 'Daily Learning',
    description:
      'Consistently improving Data Structures & Algorithms, Full-Stack Development, Artificial Intelligence, and Software Engineering.',
    icon: FiBook,
  },
]
