import DOMPurify from 'dompurify'
import React from 'react'

export function RichTextOutput({ html }: { html: string }) {
  const clean = DOMPurify.sanitize(html)
  return <div className="project-description" dangerouslySetInnerHTML={{ __html: clean }} />
}