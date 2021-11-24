import React from 'react'
import { Modal } from 'semantic-ui-react'

function ModalContainer({children, open, setOpen}) {
  return (
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
      {children}
    </Modal>
  )
}

export default ModalContainer