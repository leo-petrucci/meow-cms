import { Trash } from 'phosphor-react'
import { ReactEditor, useSlate } from 'slate-react'
import { removeElement } from '../../../../../cms/components/editor/lib/editorControls'
import React from 'react'
import { Element } from 'slate'
import { StyledButton } from '../../../../../cms/components/editor/controls'

/**
 * Renders a button that, when clicked, removes the element it is connected to.
 */
const RemoveElement = ({ element }: { element: Element }) => {
  const editor = useSlate() as ReactEditor
  const path = ReactEditor.findPath(editor, element)

  return (
    <StyledButton
      disabled={editor.children.length === 1}
      type="button"
      onClick={() => {
        removeElement(editor, [path[0]])
      }}
    >
      <Trash size={16} />
    </StyledButton>
  )
}

export default RemoveElement