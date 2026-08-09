import React from 'react'
import { Form, FormProps, Layout } from '@javascript/components'
import { useContent } from '@thoughtbot/superglue'

type ContentProps = {
  newProjectPath: string
  projects: {
    id: number,
    userId: number
    name: string
    description: string
    isPublic: boolean
    createdAt: string,
    updatedAt: string,
    editProjectPath: string,
    projectPath: string,
    deleteForm: FormProps
  }[]
}

export default function ProjectsIndex() {
  const {
    newProjectPath,
    projects = [],
  } = useContent<ContentProps>()

  const projectItems = projects.map((project) => {
    const {
      id,
      userId,
      name,
      description,
      isPublic,
      editProjectPath,
      projectPath,
      deleteForm
    } = project

    const { form, extras } = deleteForm;

    return (
      <tr key={id}>
        <td>{userId}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{isPublic}</td>
        <td><a href={ projectPath } data-sg-visit>Show</a></td>
        <td><a href={ editProjectPath } data-sg-visit>Edit</a></td>
        <td>
          <Form {...form} extras={extras} data-sg-visit>
            <button type="submit">Delete</button>
          </Form>
        </td>
      </tr>
    )
  })

  return (
    <Layout>
      <h1>Projects</h1>

      <table>
        <thead>
          <tr><th>User</th></tr>
          <tr><th>Name</th></tr>
          <tr><th>Description</th></tr>
          <tr><th>Is public</th></tr>
          <tr>
            <th colSpan={3}></th>
          </tr>
        </thead>

        <tbody>
          {projectItems}
        </tbody>
      </table>
      <br />
      <a href={newProjectPath} data-sg-visit>New Project</a>
    </Layout>
  )
}
