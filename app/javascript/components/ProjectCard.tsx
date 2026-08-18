// components/ProjectListItem.jsx
import React from 'react'
import { PlaceholderImage, RichTextOutput } from '@javascript/components'

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={project.projectPath} data-sg-visit>
          <h3>{project.name}</h3>
        </a>
      </div>
      <div className="card-img-top">
        {project.images && project.images.length > 0 ? (
          <img src={project.images[0]} alt="Project image" className="img-fluid" />
        ) : (
          <PlaceholderImage alt="Image goes here" />
        )}
      </div>
      <div className="card-body">
          <RichTextOutput html={project.description} />
          <p className="small text-muted">last updated: {new Date(project.updated_at).toLocaleString()}</p>
          <a href={project.projectPath} className="btn btn-primary" data-sg-visit>view</a>
      </div>
    </div>
  )
}