# Namrata Suryavanshi — Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)](https://ai-scam-intelligence-system.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repos-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/namratasuryavanshi422-coder)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

A modern, high-performance personal portfolio built with **React 19**, **TypeScript**, and **Vite**. Features a cinematic video hero, Three.js particle effects, smooth page transitions, and a premium dark UI — designed to showcase my projects and experience to recruiters.

---

## ✨ Features

- **Cinematic Hero** — Fullscreen video background with REC indicator, play/pause, mute controls, and sound hint.
- **Three.js Particle Layer** — Subtle floating particle field adds depth and motion to the hero section.
- **Dark Premium UI** — Glassmorphism cards, gradient accents, and consistent design tokens via Tailwind CSS v4 `@theme`.
- **Smooth Animations** — Staggered entrance animations, scroll-triggered reveals, and floating elements using Framer Motion.
- **Responsive** — Fully responsive across mobile, tablet, and desktop with a collapsible hamburger menu.
- **Accessible** — `prefers-reduced-motion` support, semantic HTML, ARIA labels, and keyboard navigation.
- **Section Tracking** — Active navigation section highlighted via `IntersectionObserver` as you scroll.
- **Featured Projects** — Interactive project cards with tech chips, status badges, and GitHub / Live Demo links.

## 🛠 Tech Stack

| Area          | Technology                              |
| ------------- | --------------------------------------- |
| Framework     | React 19 + TypeScript 6                |
| Build Tool    | Vite 8                                  |
| Styling       | Tailwind CSS v4 + `clsx`               |
| Animation     | Framer Motion 12                        |
| 3D Graphics   | Three.js (via `@react-three/fiber`)     |
| Icons         | react-icons                             |
| Linting       | oxlint                                  |
| Font          | Inter                                   |

## 🏗 Project Architecture

```
src/
├── assets/              # Static assets (images)
│   └── images/
├── components/
│   ├── layout/          # Navigation, Footer, Layout wrapper
│   ├── sections/        # Hero, Projects, Skills, Journey, About, Achievements
│   └── ui/              # Button, Card, SectionTitle, Badge, Container
├── constants/           # Navigation items, personal info, social links
├── data/                # Project, journey, skills, about, achievements data
├── hooks/               # useActiveSection (IntersectionObserver)
├── lib/                 # Utility helpers (cn)
└── styles/              # Global CSS, design tokens (@theme)
```

## 📸 Screenshots

| Section     | Preview                                                   |
| ----------- | --------------------------------------------------------- |
| Hero        | `[screenshot-placeholder]`                                |
| Projects    | `[screenshot-placeholder]`                                |
| Skills      | `[screenshot-placeholder]`                                |
| Journey     | `[screenshot-placeholder]`                                |
| About       | `[screenshot-placeholder]`                                |
| Achievements| `[screenshot-placeholder]`                                |

> Screenshots will be added once the site is fully deployed.

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/namratasuryavanshi422-coder/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## 🔐 Environment Variables

Create a `.env` file in the project root. The project runs without it — buttons stay
disabled and the contact form stays off until configured:

```env
# Calendly — enables the "Schedule a Meeting" modal
VITE_CALENDLY_URL=https://calendly.com/your-name

# EmailJS — enables the contact form
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Everything else (email address, LinkedIn, GitHub, X, LeetCode, Codeforces, Wellfound,
resume path, location) lives in the single file **`src/config/site.ts`** — edit it there,
no component changes needed.

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── videos/          # Background video assets
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   └── styles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── .gitignore
```

## 🔮 Future Improvements

- [ ] Add blog section with MDX support
- [ ] Implement light/dark theme toggle
- [ ] Add contact form with serverless backend
- [ ] Lazy-load Three.js for faster initial paint
- [ ] Add unit and integration tests (Vitest + Testing Library)
- [ ] Internationalisation (i18n) support
- [ ] Performance budget and Lighthouse CI

## 👤 Author

**Namrata Suryavanshi**

[![GitHub](https://img.shields.io/badge/GitHub-@namratasuryavanshi422--coder-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/namratasuryavanshi422-coder)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Namrata_Suryavanshi-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/namrata-suryavanshi)

---

<p align="center">Built with ❤️ using React, TypeScript & Vite</p>
