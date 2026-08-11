// components/ProjectListItem.jsx
import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">
                {project.description}
            </p>
            <p className="small text-muted">Updated at: {new Date(project.updated_at).toLocaleString()}</p>
            <a href={project.path} className="btn btn-primary">view</a>
        </div>
    </div>
  )
}