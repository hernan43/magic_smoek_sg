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
  dashboardPath: string
  editProjectPath: string
}

export default function ProjectsShow() {
  const {
    name,
    description,
    isPublic,
    editProjectPath,
    dashboardPath,
  } = useContent<ContentProps>()

  return (
    <Layout>
      <h1>{name}</h1>
      <p>
        {description}
      </p>
      <p>
        <strong>public? </strong>
        {isPublic ? 'Yes' : 'No'}
      </p>
      <a href={ editProjectPath } data-sg-visit>edit</a> | &nbsp;
      <a href={ dashboardPath } data-sg-visit>back to dashboard</a>
    </Layout>
  )
}
