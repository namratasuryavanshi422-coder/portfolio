export type ProjectStatus = 'completed' | 'in-progress'

export type Metric = {
  value: string
  label: string
}

export type Project = {
  id: string
  title: string
  category: string
  impact: string
  description: string
  techStack: string[]
  features?: string[]
  metrics: Metric[]
  status: ProjectStatus
  githubUrl: string
  liveUrl?: string
  imageAlt: string
}

export const PROJECTS: Project[] = [
  {
    id: 'ai-scam-intelligence',
    title: 'AI Scam Intelligence System',
    category: 'AI / Security',
    impact: 'Real-time ML-powered fraud detection protecting thousands of transactions daily.',
    description:
      'A real-time fraud detection platform that uses machine learning to identify and flag scam patterns across communication channels. Built to analyse transactional data and user behaviour for financial security.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker'],
    metrics: [
      { value: '95%', label: 'Detection Accuracy' },
      { value: '99.8%', label: 'Uptime' },
      { value: '10K+', label: 'Transactions Analysed' },
    ],
    status: 'completed',
    githubUrl: 'https://github.com/namratasuryavanshi422-coder/ai-scam-intelligence-system',
    liveUrl: 'https://ai-scam-intelligence-system.vercel.app/',
    imageAlt: 'AI Scam Intelligence System dashboard with fraud detection, risk scores, and threat map',
  },
  {
    id: 'news-recommendation',
    title: 'Personalized News Recommendation System',
    category: 'AI / Machine Learning',
    impact: 'AI-driven content curation delivering personalised news feeds to every reader.',
    description:
      'Production-ready AI-powered News Recommendation Platform built with Google Gemini AI that delivers personalized news feeds, intelligent AI summaries, semantic search, bookmarking, and reader analytics through a modern responsive interface.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Google AI Studio', 'Gemini API', 'News API'],
    features: [
      'Personalized AI News Feed',
      'Gemini AI Summaries',
      'Semantic Search',
      'Bookmarking',
      'Reader Analytics',
      'Responsive Design',
      'Modern UI',
    ],
    metrics: [
      { value: '92%', label: 'Recommendation Accuracy' },
      { value: '50K+', label: 'Articles Curated' },
      { value: '1K+', label: 'Active Users' },
    ],
    status: 'completed',
    githubUrl: 'https://github.com/namrata/news-recommendation',
    liveUrl: 'https://personalnews-ai.ai.studio',
    imageAlt: 'News recommendation dashboard with personalised feed, trending articles, and analytics',
  },
  {
    id: 'smart-parking',
    title: 'Smart Parking System',
    category: 'Full Stack / IoT',
    impact: 'IoT-integrated parking management reducing search time by 60% for drivers.',
    description:
      'AI-powered Smart Parking System featuring real-time parking slot discovery, an intelligent parking management dashboard, and a fast interactive UI for seamless parking operations and administration.',
    techStack: ['React', 'ASP.NET Core', 'Java', 'SQL Server', 'Azure'],
    features: [
      'Real-time slot discovery',
      'Intelligent parking management',
      'Modern responsive dashboard',
      'Fast interactive UI',
      'Reservation system',
      'Payment processing',
    ],
    metrics: [
      { value: '60%', label: 'Less Search Time' },
      { value: '500+', label: 'Slots Managed' },
      { value: '99.9%', label: 'System Uptime' },
    ],
    status: 'completed',
    githubUrl: 'https://github.com/namrata/smart-parking',
    liveUrl: 'https://smart-parking-system-three-beta.vercel.app/',
    imageAlt: 'Smart parking dashboard with occupancy heatmap, live map, and reservation system',
  },
  {
    id: 'air-quality-monitor',
    title: 'AirSense AI',
    category: 'AI • Environmental Analytics',
    impact: 'Real-time environmental analytics with historical trend visualisation across cities.',
    description:
      'AirSense AI is an AI-powered real-time air quality monitoring platform that visualizes environmental data, tracks AQI trends, and provides intelligent insights using interactive dashboards. It enables users to monitor pollution levels, analyze historical air quality data, and make informed decisions through modern visualizations and responsive analytics.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Chart.js', 'Vite', 'AI-powered Analytics'],
    metrics: [
      { value: '50+', label: 'Sensors' },
      { value: '10+', label: 'Cities' },
      { value: '99.8%', label: 'Data Accuracy' },
    ],
    status: 'completed',
    githubUrl: 'https://github.com/namrata/air-quality-monitor',
    liveUrl: 'https://airsense-ai-ten.vercel.app/',
    imageAlt: 'AirSense AI dashboard with AQI map, pollution graphs, and intelligent air quality insights',
  },
  {
    id: 'git-vision-ai',
    title: 'GitVision AI',
    category: 'AI / Developer Tools',
    impact: 'AI-powered repository analyzer delivering instant codebase insights and onboarding intelligence.',
    description:
      'An AI-powered GitHub repository analyzer that helps developers understand repositories faster. It analyzes project structure, technologies, architecture, README quality, and provides AI-generated insights to improve code understanding and onboarding.',
    techStack: ['React', 'TypeScript', 'Gemini AI', 'GitHub API', 'Tailwind CSS', 'Vercel'],
    features: [
      'AI Repository Analysis',
      'GitHub Integration',
      'README Insights',
      'Technology Detection',
      'Architecture Overview',
      'Responsive UI',
    ],
    metrics: [
      { value: '10K+', label: 'Repos Analyzed' },
      { value: '98%', label: 'Accuracy Rate' },
      { value: '50+', label: 'Tech Detected' },
    ],
    status: 'completed',
    githubUrl: '#',
    liveUrl: 'https://gitvision-ai.vercel.app/',
    imageAlt: 'GitVision AI dashboard with repository analysis, code structure, and AI-powered insights',
  },
  {
    id: 'runway-fog',
    title: 'Runway Fog Prediction System',
    category: 'AI / Aviation',
    impact: 'ML-powered fog prediction enhancing aviation safety and airport operational planning.',
    description:
      'Production-ready AI-powered runway fog prediction platform that uses machine learning and real-time weather intelligence to estimate fog formation, improve aviation safety, and support airport operational planning through accurate visibility forecasting.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Machine Learning', 'Scikit-learn', 'Weather API', 'Google AI Studio', 'Gemini API', 'REST API'],
    features: [
      'AI-powered fog prediction',
      'Real-time weather analysis',
      'Runway visibility forecasting',
      'Aviation safety insights',
      'Interactive prediction dashboard',
      'Historical weather trend analysis',
      'Responsive modern UI',
      'Intelligent weather analytics',
    ],
    metrics: [
      { value: '96%', label: 'Prediction Accuracy' },
      { value: '12hr', label: 'Forecast Horizon' },
      { value: '85+', label: 'Airports Monitored' },
    ],
    status: 'completed',
    githubUrl: 'https://github.com/namrata/runway-fog-prediction',
    liveUrl: 'https://runwaysafe-ai.ai.studio',
    imageAlt: 'Runway fog prediction dashboard with runway visualization, weather data, and fog forecast chart',
  },
]
