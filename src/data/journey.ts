import { FiBookOpen, FiUsers, FiAward, FiCode, FiLayers, FiTrendingUp } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export type TimelineItem = {
  id: string
  period: string
  title: string
  institution?: string
  category: string
  description: string
  highlights?: string[]
  icon: IconType
  techStack?: string[]
}

export const TIMELINE: TimelineItem[] = [
  {
    id: 'bachelor-cse',
    period: '2026 – Present',
    title: 'Bachelor of Engineering in Computer Science',
    institution: 'KLE Technological University, Dr. M. S. Sheshgiri Campus, Belagavi',
    category: 'Education',
    description:
      'Pursuing a Bachelor of Engineering in Computer Science with a strong focus on Software Engineering, Artificial Intelligence, Machine Learning, Databases, Networking, Operating Systems, and Full-Stack Application Development.',
    highlights: [
      'CGPA: 9.16 / 10',
      'Class Representative (3rd & 4th Semester)',
      'Active Member – College Coding Club',
      'Participated in 7–8 Hackathons',
    ],
    icon: FiBookOpen,
  },
  {
    id: 'class-rep',
    period: '3rd & 4th Semester',
    title: 'Class Representative',
    category: 'Leadership',
    description:
      'Served as the communication bridge between students and faculty, coordinated academic activities, and developed leadership, teamwork, and organizational skills.',
    icon: FiUsers,
  },
  {
    id: 'hackathon-participant',
    period: 'Ongoing',
    title: 'Hackathon Participant',
    category: 'Innovation',
    description:
      'Participated in 7–8 hackathons focused on solving real-world engineering challenges, rapid product development, teamwork, and innovative software solutions.',
    icon: FiAward,
  },
  {
    id: 'coding-club',
    period: 'Ongoing',
    title: 'College Coding Club Member',
    category: 'Community',
    description:
      'Actively participate in technical discussions, coding activities, collaborative learning, and peer knowledge sharing.',
    icon: FiCode,
  },
  {
    id: 'ai-projects',
    period: 'Ongoing',
    title: 'AI & Full-Stack Projects',
    category: 'Projects',
    description:
      'Building practical software solutions using React, React Native, ASP.NET Core, PostgreSQL, Firebase, Docker, Java, TypeScript, Artificial Intelligence, and Machine Learning.',
    icon: FiLayers,
    techStack: ['React', 'React Native', 'ASP.NET Core', 'Docker', 'AI/ML'],
  },
  {
    id: 'continuous-learning',
    period: 'Daily',
    title: 'Continuous Learning',
    category: 'Growth',
    description:
      'Consistently improving Data Structures & Algorithms, problem-solving ability, software engineering principles, modern web development, and scalable application architecture.',
    icon: FiTrendingUp,
    techStack: ['DSA', 'System Design', 'Web Development'],
  },
]
