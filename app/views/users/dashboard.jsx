import React from 'react'
import { useContent } from '@thoughtbot/superglue';
import ProjectCard from '@javascript/components/ProjectCard'

export default function UsersDashboard() {
  const {
    body
  } = useContent()

  const {current_user} = body

  return (
    <>
    </>
  )
}