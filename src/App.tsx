import { Navigation } from '@/components/layout/Navigation'
import { Hero, Projects, Journey, Skills, About, Achievements } from '@/components/sections'

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
      </main>
    </>
  )
}

export default App
