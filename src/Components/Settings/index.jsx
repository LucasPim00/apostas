import * as React from 'react'
import { Avatar } from '@mui/material'
import {
  Authentication,
  Buttons,
  Container,
  Footer,
  TagEmail,
  TagEnable,
  TagPassowrd,
  TagProfile,
  TagSettings,
} from './styles'
import { Button, Switch } from '@mui/material'
import { PlusCircle, EnvelopeSimple, Keyhole } from 'phosphor-react'
import { Modal, Box, Typography } from '@mui/material'
import axios from 'axios'
import { api } from '../../Services/api'
import { usePassword } from '../../Providers/Password'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import { Uploader } from 'uploader'
import { UploadButton } from 'react-uploader'
import { useUsers } from '../../Providers/Users'
import { useEffect } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
}

const Configuracoes = () => {
  const { changePassword } = usePassword()
  const [enable, setEnable] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)
  const { userId, userToken, imagem, setImagem } = useUsers()
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)
  const [email, setEmail] = React.useState('')

  useEffect(() => getEmail(), [])

  const getEmail = () => {
    api
      .get(`/users/${userId}`)
      .then((res) => setEmail(res.data.email))
      .catch((err) => console.log(err))
  }

  const schema = yup.object().shape({
    password: yup
      .string()
      .required('Campo obrigatório *')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'A senha deve conter letra maiúscula, número e caractere especial!'
      ),
    confirmPassword: yup
      .string()
      .required('Campo obrigatório *')
      .oneOf([yup.ref('password')], 'As senhas não coincidem!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitFunction = (data) => {
    changePassword(userId, data.password)
  }

  const uploader = new Uploader({
    apiKey: 'free',
  })

  const upProfilePic = (profilePic) => {
    setImagem(profilePic)
    const data = { profilePic: profilePic }
    api
      .patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => console.log('Foto de perfil atualizada!'))
      .catch((err) => console.log(err))
  }

  return (
    <Container>
      <TagSettings>
        <h5>Configurações</h5>
      </TagSettings>

      <TagProfile>
        <div className='avatar'>
          <Avatar src={imagem}></Avatar>
        </div>
        <div className='text'>
          <h4>Faça upload da sua foto de perfil</h4>

          <UploadButton
            uploader={uploader}
            options={{ multi: true }}
            onComplete={(files) => upProfilePic(files[0].fileUrl)}
          >
            {({ onClick }) => (
              <button
                className='upload'
                style={{
                  color: 'var(--bs-light)',
                  background: 'var(--darkreader-bg--hover-color)',
                  width: '80%',
                  paddingLeft: '15px',
                }}
                onClick={onClick}
              >
                Enviar arquivo...
              </button>
            )}
          </UploadButton>
          <span>Escolha uma imagem do seu computador. Máximo de 3MB.</span>
        </div>
      </TagProfile>

      <section>
        <TagEmail>
          <EnvelopeSimple size={32} />
          <div className='content'>
            {email}
            <span className='unverified'>Conta não verificada</span>
          </div>
        </TagEmail>

        <TagPassowrd>
          <Keyhole size={40} />
          <button onClick={handleOpen}>Alterar Senha</button>
          <Modal keepMounted open={openModal} onClose={handleClose}>
            <Box sx={style}>
              <Typography
                id='keep-mounted-modal-title'
                variant='h6'
                component='h2'
                sx={{ color: 'white' }}
              >
                <p>Nova senha</p>
              </Typography>

              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <Input
                  register={register}
                  type='password'
                  placeholder='Nova senha'
                  name='Nova senha'
                  value='password'
                  error={errors.password?.message}
                />
                <Input
                  register={register}
                  type='password'
                  placeholder='Confirmar nova senha'
                  name='Confirmar nova senha'
                  value='confirmPassword'
                  error={errors.confirmPassword?.message}
                />

                <Button
                  sx={{
                    background: 'var(--hover-color)',
                    color: 'var(--bs-white)',
                    font: 'var(--body-font)',
                  }}
                  type='submit'
                >
                  Confirmar
                </Button>
              </form>
            </Box>
          </Modal>
        </TagPassowrd>
      </section>

      {enable === true && (
        <Authentication>
          <h4>Habilitar Autenticação Google</h4>
          <Buttons>
            <a href='https://clash-of-clans.br.uptodown.com/android'>
              <button>Baixar App</button>
            </a>
            <a href='https://br.qr-code-generator.com/a1/'>
              <button>Ler QR Code</button>
            </a>
            <a href='https://cloud.google.com/products/storage?gclsrc=ds'>
              <button>Backup da Chave</button>
            </a>
            <a href='https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?hl=pt'>
              <button>Ativar Google Authenticator</button>
            </a>
          </Buttons>
          <Footer>
            <p>
              Etapa 1: Baixe e instale o aplicativo Google Authenticator no seu celular.
            </p>
            <footer>
              Já instalei o aplicativo
              <button>Próxima Etapa</button>
            </footer>
          </Footer>
        </Authentication>
      )}
    </Container>
  )
}

export default Configuracoes
