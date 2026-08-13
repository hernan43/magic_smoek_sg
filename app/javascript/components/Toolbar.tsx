import React from 'react'
import { Editor } from '@tiptap/react'

type BlockType = 'paragraph' | 'h1' | 'h2' | 'h3' | 'bulletList' | 'orderedList'

const BLOCK_LABELS: Record<BlockType, string> = {
  paragraph: 'Normal',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  bulletList: 'Bullet List',
  orderedList: 'Numbered List',
}

function activeBlockType(editor: Editor): BlockType {
  if (editor.isActive('heading', { level: 1 })) return 'h1'
  if (editor.isActive('heading', { level: 2 })) return 'h2'
  if (editor.isActive('heading', { level: 3 })) return 'h3'
  if (editor.isActive('bulletList')) return 'bulletList'
  if (editor.isActive('orderedList')) return 'orderedList'
  return 'paragraph'
}

export function Toolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null

  const applyBlockType = (type: BlockType) => {
    const chain = editor.chain().focus()
    switch (type) {
      case 'paragraph':
        chain.setParagraph().run()
        break
      case 'h1':
        chain.toggleHeading({ level: 1 }).run()
        break
      case 'h2':
        chain.toggleHeading({ level: 2 }).run()
        break
      case 'h3':
        chain.toggleHeading({ level: 3 }).run()
        break
      case 'bulletList':
        chain.toggleBulletList().run()
        break
      case 'orderedList':
        chain.toggleOrderedList().run()
        break
    }
  }

  const insertLink = () => {
    const url = window.prompt('Enter URL')
    if (url) editor.chain().focus().setLink({ href: url }).run()
  }

  return (
    <div className="d-flex align-items-center flex-wrap gap-1 border-bottom p-2" role="toolbar">
      <div className="btn-group btn-group-sm">
        <button
          type="button"
          className="btn btn-outline-secondary"
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
        >
          ↺
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
        >
          ↻
        </button>
      </div>

      <select
        className="form-select form-select-sm"
        style={{ width: 'auto' }}
        value={activeBlockType(editor)}
        onChange={(e) => applyBlockType(e.target.value as BlockType)}
      >
        {(Object.keys(BLOCK_LABELS) as BlockType[]).map((type) => (
          <option key={type} value={type}>
            {BLOCK_LABELS[type]}
          </option>
        ))}
      </select>

      <div className="btn-group btn-group-sm">
        <button
          type="button"
          className={`btn btn-outline-secondary${editor.isActive('bold') ? ' active' : ''}`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          className={`btn btn-outline-secondary${editor.isActive('italic') ? ' active' : ''}`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <em>I</em>
        </button>
        <button
          type="button"
          className={`btn btn-outline-secondary${editor.isActive('strike') ? ' active' : ''}`}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <s>S</s>
        </button>
      </div>

      <div className="btn-group btn-group-sm">
        <button
          type="button"
          className={`btn btn-outline-secondary${editor.isActive('link') ? ' active' : ''}`}
          onClick={insertLink}
        >
          Link
        </button>
      </div>
    </div>
  )
}