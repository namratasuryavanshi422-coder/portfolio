export type SkillCategory = {
  id: string
  name: string
  skills: string[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: ['ASP.NET Core', 'REST APIs'],
  },
  {
    id: 'database',
    name: 'Database',
    skills: ['PostgreSQL', 'Firebase'],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    skills: ['React Native', 'Expo'],
  },
  {
    id: 'ai-ml',
    name: 'AI / ML',
    skills: ['Artificial Intelligence', 'Machine Learning'],
  },
  {
    id: 'tools',
    name: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code'],
  },
]

export const PROFESSIONAL_STRENGTHS: string[] = [
  'Problem Solving',
  'Leadership',
  'Team Collaboration',
  'Technical Communication',
  'Continuous Learning',
  'Hackathon Experience',
  'Adaptability',
  'Quick Learner',
]
