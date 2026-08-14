import React from 'react'
import { Layout } from '@javascript/components'
import { useContent } from '@thoughtbot/superglue'
import ProjectCard from '@javascript/components/ProjectCard'

type ContentProps = {
  newProjectPath: string
  projects: {
    id: number,
    userId: number
    name: string
    description: string
    isPublic: boolean
    createdAt: string,
    updatedAt: string,
    editProjectPath: string,
    projectPath: string,
  }[]
}

export default function ProjectsIndex() {
  const {
    projects = [],
  } = useContent<ContentProps>()

  return (
    <Layout>
      {projects.length === 0 ? (
        <p>You have no projects yet.</p>
      ) : (
        <div className="project-list">
        {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      )}
    </Layout>
  )
}
