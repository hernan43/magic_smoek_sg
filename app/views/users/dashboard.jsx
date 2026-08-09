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
      <p></p>
    </>
  )
}