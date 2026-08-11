import React from 'react'
import { useContent } from '@thoughtbot/superglue';
import ProjectCard from '@javascript/components/ProjectCard'

export default function UsersDashboard() {
  const {
    body
  } = useContent()

  const {current_user} = body

  return (
    <>
      <h1>{current_user.first_name}'s dashboard</h1>
      
      {current_user.projects.length === 0 ? (
        <p>You have no projects yet.</p>
      ) : (
        <div className="project-list">
        {current_user.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      )}

      <div className="actions">
        <a href={current_user.new_project_path} data-sg-visit>add a project</a>
      </div>
    </>
  )
}