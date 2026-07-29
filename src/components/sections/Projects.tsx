import { SectionTitle } from '@/components/ui'
import { Container } from '@/components/ui'
import { PROJECTS } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing relative"
      aria-labelledby="projects-heading"
    >
      <Container maxWidth="xl">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects demonstrating full-stack engineering, AI integration, and practical problem solving."
          align="left"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
