import React from 'react'
import { useContent } from '@thoughtbot/superglue';

export default function UsersDashboard() {
  const {
    body
  } = useContent()

  const {current_user} = body

  return (
    <>
      <h1>{current_user.first_name}'s dashboard</h1>
      
      <h2>Projects</h2>
      {current_user.projects.length === 0 ? (
        <p>You have no projects yet.</p>
      ) : (
        <ul>
        {current_user.projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Updated at: {new Date(project.updated_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      )}
    </>
  )
}