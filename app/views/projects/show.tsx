import React from 'react'
import { Layout, RichTextOutput } from '@javascript/components'
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
    editProjectPath,
    dashboardPath,
  } = useContent<ContentProps>()

  return (
    <Layout>
      <h1>{name}</h1>
      <RichTextOutput html={description} />
      <a href={ editProjectPath } data-sg-visit>edit</a> | &nbsp;
      <a href={ dashboardPath } data-sg-visit>back to projects</a>
    </Layout>
  )
}
