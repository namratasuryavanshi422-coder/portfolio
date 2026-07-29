export type ProjectStatus = 'completed' | 'in-progress'

export type Project = {
  id: string
  title: string
  category: string
  description: string
  techStack: string[]
  status: ProjectStatus
  githubUrl: string
  liveUrl?: string
  imageAlt: string
}

export const PROJECTS: Project[] = [
  {
    id: 'ai-scam-intelligence',
    title: 'AI Scam Intelligence System',
    category: 'AI',
    description:
      'A real-time fraud detection platform that uses machine learning to identify and flag scam patterns across communication channels. Built to analyse transactional data and user behaviour for financial security.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker'],
    status: 'completed',
    githubUrl: 'https://github.com/namrata/ai-scam-intelligence',
    liveUrl: 'https://ai-scam-intelligence.example.com',
    imageAlt: 'AI Scam Intelligence System dashboard preview',
  },
  {
    id: 'news-recommendation',
    title: 'Personalized News Recommendation System',
    category: 'Machine Learning',
    description:
      'An ML-powered content curation engine that delivers personalised news feeds based on user preferences, reading history, and behavioural patterns using collaborative filtering and NLP.',
    techStack: ['Python', 'Scikit-learn', 'NLTK', 'Flask', 'MongoDB'],
    status: 'completed',
    githubUrl: 'https://github.com/namrata/news-recommendation',
    imageAlt: 'News recommendation system interface preview',
  },
  {
    id: 'smart-parking',
    title: 'Smart Parking System',
    category: 'Full Stack',
    description:
      'An IoT-integrated parking management solution with real-time slot availability tracking, reservation system, and payment processing. Features a responsive dashboard for administrators.',
    techStack: ['React', 'ASP.NET Core', 'Java', 'SQL Server', 'Azure'],
    status: 'completed',
    githubUrl: 'https://github.com/namrata/smart-parking',
    liveUrl: 'https://smart-parking.example.com',
    imageAlt: 'Smart parking system management dashboard preview',
  },
  {
    id: 'air-quality-monitor',
    title: 'Air Quality Monitoring Website',
    category: 'Web Application',
    description:
      'A data-driven web application that visualises real-time air quality indices using open sensor data. Includes historical trends, location-based search, and health advisory alerts.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Chart.js', 'Tailwind CSS'],
    status: 'in-progress',
    githubUrl: 'https://github.com/namrata/air-quality-monitor',
    imageAlt: 'Air quality monitoring dashboard preview',
  },
]
