import React from 'react'
import { Layout } from '@javascript/components'
import { useContent } from '@thoughtbot/superglue'

type ContentProps = {
  id: string
  userId: number
  name: string
  description: string
  isPublic: boolean
  createdAt: string
  updatedAt: string
  projectsPath: string
  editProjectPath: string
}

export default function ProjectsShow() {
  const {
    userId,
    name,
    description,
    isPublic,
    editProjectPath,
    projectsPath,
  } = useContent<ContentProps>()

  return (
    <Layout>
      <p>
        <strong>User:</strong>
        {userId}
      </p>
      <p>
        <strong>Name:</strong>
        {name}
      </p>
      <p>
        <strong>Description:</strong>
        {description}
      </p>
      <p>
        <strong>Is public:</strong>
        {isPublic ? 'Yes' : 'No'}
      </p>
      <a href={ editProjectPath } data-sg-visit>Edit</a>
      <a href={ projectsPath } data-sg-visit>Back</a>
    </Layout>
  )
}
