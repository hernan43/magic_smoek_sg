import React from 'react'
import { useContent } from '@thoughtbot/superglue';

export default function BaseIndex() {
  const {
    body,
    footer
  } = useContent()

  const {greet} = body

  return (
    <>
      <h1>{greet}</h1>
      <span>{footer}</span>    
    </>
  )
}