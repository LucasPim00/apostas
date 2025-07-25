// Tradução completa do MainGames - Versão em português

import {
  Card,
  Card2,
  Container,
  Content,
  Main,
  SectionBottom,
  SectionTop,
} from './styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { ButtonGroup, Grid, InputAdornment, TextField } from '@mui/material'
import { useUserBets } from '../../Providers/UserBets'
import Timestamp from 'react-timestamp'
import Stopwatch from '../Stopwatch'
import { useUsers } from '../../Providers/Users'
import { toast } from 'react-toastify'
import formatCurrency from '../../Utils/formatCurrency'

const estiloModal = {
  position: 'relative',
  top: '45%',
  left: '50%',
  width: '90%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '854px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '0.3rem',
  p: 4,
  backgroundColor: '#4832b1',
  overflowX: 'overlay',
}

const estiloBotao = {
  borderRadius: '50px',
  color: 'var(--bs-light)',
  fontSize: '16px',
  fontFamily: 'var(--body-font)',
  fontWeight: 'bold',
  margin: '5px 15px',
  '&:hover': {
    backgroundColor: '#cab4ff;',
    color: '#291b6b;',
  },
  '&:focus': {
    color: '#291B6B;',
    backgroundColor: '#CAB4FF;',
  },
}

const estiloValorRápido = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#5b41d1',
  borderRadius: '10px',
  backgroundColor: '#382590',
  color: 'var(--bs-white)',
  padding: '10px',
  margin: '0px 5px 0px 0px',
  '&:hover': {
    border: '1px solid #25ad5f',
    backgroundColor: '#cab4ff',
    transition: '0.3s',
  },
}

const MainGames = ({ match }) => {
  const { addUserBet, payBet, checkOdd } = useUserBets()
  const { userInfo, subBalance, userId } = useUsers()
  const [amount, setAmount] = useState(0)
  const [shot, setShot] = useState('')
  const [cardOdd, setCardOdd] = useState('?')
  const [odd, setOdd] = useState(2)
  const [open, setOpen] = useState(false)

  const abrirModal = () => {
    setOpen(true)
    checkOdd(match.fixture.id)
  }
  const fecharModal = () => setOpen(false)

  const aposta = {
    fixture: match.fixture.id,
    userId: userId,
    shot: shot,
    status: 'open',
    bet: {
      amount: Number(amount) * odd - (Number(amount) * odd * 5) / 100,
      odd: odd,
    },
    match: {
      league: match.league.name,
      timestamp: match.fixture.timestamp,
      teamHome: {
        name: match.teams.home.name,
        score: match.goals.home,
        logo: match.teams.home.logo,
      },
      teamAway: {
        name: match.teams.away.name,
        score: match.goals.away,
        logo: match.teams.away.logo,
      },
    },
  }

  const validarAposta = () => {
    if (aposta.shot !== null && aposta.amount !== null) {
      if (userInfo.balance >= amount) {
        addUserBet(aposta)
        subBalance(userInfo.id, amount)
        fecharModal()
        toast.success(`Aposta realizada com sucesso!`, { theme: 'colored' })
      } else {
        toast.error(`Saldo insuficiente!`, { theme: 'colored' })
      }
    } else {
      toast.error(`Preencha todos os campos para apostar!`, {
        theme: 'colored',
      })
    }
  }

  return (
    <div>
      {/* Modal de Aposta */}
      <Modal
        open={open}
        onClose={fecharModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={estiloModal}>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              mb: 3,
              paddingBottom: '30px',
              borderBottom: '1px solid #8e78c0',
              flexWrap: 'wrap',
            }}
          >
            <Button
              sx={estiloBotao}
              variant='contained'
              size='large'
              onClick={() => {
                setShot('home')
                setCardOdd(2.73)
                setOdd(2.73)
              }}
            >
              {match.teams.home.name} vai vencer
            </Button>
            <Button
              sx={estiloBotao}
              variant='contained'
              size='large'
              onClick={() => {
                setShot('draw')
                setCardOdd(3.14)
                setOdd(3.14)
              }}
            >
              Empate
            </Button>
            <Button
              sx={estiloBotao}
              variant='contained'
              size='large'
              onClick={() => {
                setShot('away')
                setCardOdd(1.33)
                setOdd(1.33)
              }}
            >
              {match.teams.away.name} vai vencer
            </Button>
          </Stack>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label='Valor da Aposta'
                sx={{
                  m: 1,
                  width: '20ch',
                  border: '1px solid #5b41d1',
                  borderRadius: '10px',
                  backgroundColor: '#382590',
                }}
                value={amount}
                type='number'
                onChange={(e) => setAmount(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>USD</InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <Typography sx={{ color: 'white', mb: 0.4 }} variant='h3'>
                Valores rápidos
              </Typography>
              <ButtonGroup size='large'>
                {[5, 10, 25, 50, 100].map((valor) => (
                  <Button
                    key={valor}
                    style={estiloValorRápido}
                    onClick={() => setAmount(Number(amount) + valor)}
                  >
                    {valor}
                  </Button>
                ))}
              </ButtonGroup>
            </Grid>

            <Grid item xs={4}>
              <Typography sx={{ color: 'white' }} variant='h6'>
                Odd baseada na seleção:
              </Typography>
              <Typography
                sx={{ fontSize: '1.9rem', color: '#ffe1e5' }}
                variant='h1'
              >
                {cardOdd}
              </Typography>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, borderTop: '1px solid #8e78c0', mt: 3 }}>
              <Grid item xs={4}>
                <span style={{ color: 'white', fontSize: '1.1rem' }}>
                  Ganhador receberá:
                  <span style={{ color: '#8bffbd' }}>
                    {' '}
                    {formatCurrency(amount * odd - (amount * odd * 5) / 100)}
                  </span>
                </span>
                <Typography sx={{ color: 'white' }} variant='h6'>
                  Taxa de garantia: 5%
                </Typography>
              </Grid>

              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  sx={{
                    backgroundColor: '#571ce0',
                    boxShadow: '4px 6.928px 24px 0px rgb(0 0 0 / 18%)',
                    padding: '20px 25px',
                  }}
                  variant='contained'
                  size='large'
                  onClick={validarAposta}
                >
                  Apostar {formatCurrency(amount)}
                </Button>
              </Grid>

              <Grid item xs={4}>
                <span style={{ color: 'white', fontSize: '1.1rem' }}>
                  Encerramento da partida:
                </span>
                <Typography sx={{ color: 'white' }} variant='h6'>
                  Mar <span style={{ color: '#ffe1e5' }}>21, 2022</span> |{' '}
                  <span style={{ color: '#ffe1e5' }}>1:00</span> AM
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      {/* Interface principal do jogo */}
      <Container>
        <SectionTop>
          <button>{match.league.name}</button>
          <span>
            <Timestamp date={match.fixture.timestamp} />
          </span>
        </SectionTop>

        <Main>
          <Card>
            <h2>{match.teams.home.name}</h2>
            <p className='description'>Mandante</p>
            <img src={match.teams.home.logo} alt={match.teams.home.name} />
          </Card>

          <Card2>
            <p className='time'>
              <Stopwatch
                ms={match.fixture.status.elapsed * 60000}
                fixtureId={match.fixture.id}
              />
            </p>
            <p className='teams'>
              {match.goals.home} x {match.goals.away}
            </p>
          </Card2>

          <Card>
            <h2>{match.teams.away.name}</h2>
            <p className='description'>Visitante</p>
            <img src={match.teams.away.logo} alt={match.teams.away.name} />
          </Card>
        </Main>

        <SectionBottom>
          <Button variant='text' onClick={abrirModal}>
            Fazer Aposta
          </Button>
          <button onClick={() => payBet(userId, match.fixture.id)}>
            Pagar {match.fixture.id}
          </button>
        </SectionBottom>
      </Container>
    </div>
  )
}

export default MainGames
