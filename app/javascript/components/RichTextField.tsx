import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import { FieldBase, useErrorMessage } from '@javascript/components'
import { Toolbar } from './Toolbar'

type InputProps = { label: string; errorKey?: string }

export type RichTextFieldProps = {
  name: string
  id?: string
  defaultValue?: string
  placeholder?: string
} & InputProps

export const RichTextField = ({
  name,
  id,
  label,
  errorKey,
  defaultValue = '',
  placeholder,
}: RichTextFieldProps) => {
  const errorMessage = useErrorMessage(errorKey)
  const [html, setHtml] = React.useState(defaultValue)

  const editor = useEditor({
    // Superglue mounts client-only (empty #app on first load), so this is
    // safe, but immediatelyRender: false is still the documented guard
    // against hydration mismatches in general.
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder }),
    ],
    content: defaultValue,
    editorProps: {
      attributes: {
        id: id ?? '',
        class: `form-control${errorMessage ? ' is-invalid' : ''}`,
        style: 'min-height: 150px; border: none; border-radius: 0;',
      },
    },
    onUpdate: ({ editor }) => {
      setHtml(editor.getHTML())
    },
  })

  return (
    <FieldBase label={label} errorKey={errorKey} id={id}>
      <input type="hidden" name={name} value={html} readOnly />
      <div className={`border rounded${errorMessage ? ' is-invalid border-danger' : ''}`}>
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </FieldBase>
  )
}