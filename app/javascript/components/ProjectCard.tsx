// components/ProjectListItem.jsx
import React from 'react'
import { RichTextOutput } from '@javascript/components'

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={project.projectPath} data-sg-visit>
          <h3>{project.name}</h3>
        </a>
      </div>
      <div className="card-img-top">
        <svg aria-label="Placeholder: thumbnail" className="bd-placeholder-img" height="225" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em" text-anchor="middle">Image goes here</text>
        </svg>
      </div>
      <div className="card-body">
          <RichTextOutput html={project.description} />
          <p className="small text-muted">last updated: {new Date(project.updated_at).toLocaleString()}</p>
          <a href={project.projectPath} className="btn btn-primary" data-sg-visit>view</a>
      </div>
    </div>
  )
}