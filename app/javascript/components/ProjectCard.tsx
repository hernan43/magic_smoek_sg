// components/ProjectListItem.jsx
import React from 'react'
import { ProjectDescription } from '@javascript/components'

export default function ProjectCard({ project }) {
  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-header">
        <a href={project.path}>
          <h3>{project.name}</h3>
        </a>
      </div>
      <div className="card-body">
          <ProjectDescription html={project.description} />
          <p className="small text-muted">last updated: {new Date(project.updated_at).toLocaleString()}</p>
          <a href={project.path} className="btn btn-primary">view</a>
      </div>
    </div>
  )
}