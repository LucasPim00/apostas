import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'

// Estilo do modal
const estiloModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function ModalBetting() {
  const [open, setOpen] = useState(false)
  const abrir = () => setOpen(true)
  const fechar = () => setOpen(false)

  return (
    <div>
      <Button onClick={abrir}>Abrir Modal</Button>
      <Modal
        open={open}
        onClose={fechar}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={estiloModal}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Modal de Aposta
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Aqui você pode configurar os detalhes da sua aposta.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
