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
  projectsPath: string
  editProjectPath: string
}

export default function ProjectsShow() {
  const {
    name,
    description,
    editProjectPath,
    projectsPath,
  } = useContent<ContentProps>()

  return (
    <Layout>
      <h1>{name} <a href={ editProjectPath } data-sg-visit>✎</a></h1>
      <RichTextOutput html={description} />
      <a className="" href={ projectsPath } data-sg-visit>⇜ back to projects</a>
    </Layout>
  )
}
