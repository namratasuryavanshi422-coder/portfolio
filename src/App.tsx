import { Navigation } from '@/components/layout/Navigation'
import { Hero, Projects, Journey, Skills, About, Achievements, Certifications, Contact } from '@/components/sections'

function App() {
  return (
    <>
      <div className="background-atmosphere" />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <Skills />
        <About />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}

export default App
