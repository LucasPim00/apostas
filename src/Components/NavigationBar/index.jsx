import Toolbar from '@mui/material/Toolbar'
import { Container } from './styles'
import Button from '@mui/material/Button'
import { DashboardContext } from '../../Providers/Dashboard'
import { useContext } from 'react'

const BarraDeNavegacao = () => {
  const { chooseTab } = useContext(DashboardContext)

  const handleClick = (event) => {
    chooseTab(event.target.id)
  }

  return (
    <Container>
      <Toolbar className='toolbar'>
        <Button
          color='inherit'
          className='button'
          id='Dashboard'
          onClick={handleClick}
        >
          Atividade Recente
        </Button>
        <Button
          color='inherit'
          className='button'
          id='My Bets'
          onClick={handleClick}
        >
          Minhas Apostas
        </Button>
        <Button
          color='inherit'
          className='button'
          id='Deposit / Withdraw'
          onClick={handleClick}
        >
          Depositar / Sacar
        </Button>
        <Button
          color='inherit'
          className='button'
          id='Affiliate'
          onClick={handleClick}
        >
          Afiliado
        </Button>
        <Button
          color='inherit'
          className='button'
          id='Transactions'
          onClick={handleClick}
        >
          Transações
        </Button>
        <Button
          color='inherit'
          className='button'
          id='Settings'
          onClick={handleClick}
        >
          Configurações
        </Button>
      </Toolbar>
    </Container>
  )
}

export default BarraDeNavegacao