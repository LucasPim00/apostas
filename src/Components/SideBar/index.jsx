import { Container } from './styles'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useState, useEffect, useContext } from 'react'
import { api } from '../../Services/api'
import { DashboardContext } from '../../Providers/Dashboard'
import { useHistory } from 'react-router-dom'
import { useUsers } from '../../Providers/Users'
import money from '../../Assets/dashboard-sidebar-icon-1.png'
import help from '../../Assets/help.png'
import formatCurrency from '../../Utils/formatCurrency'

const BarraLateral = () => {
  const { chooseTab } = useContext(DashboardContext)
  const history = useHistory()
  const [person, setPerson] = useState({})
  const { userId, imagem } = useUsers()
  const token = JSON.parse(window.localStorage.getItem('@GambleAPI:userId'))
  useEffect(() => GETAXIOS(), [])

  const irParaContato = () => {
    history.push('/contact')
  }

  function GETAXIOS() {
    api.get(`/users/${token}`).then((res) => {
      setPerson(res.data)
    })
  }

  const irParaDeposito = () => {
    chooseTab('Deposit / Withdraw')
  }

  return (
    <Container>
      <div className='card'>
        <Avatar src={imagem} sx={{ width: 86, height: 86 }}></Avatar>
        <p>{person.name}</p>
        <span>ID: {person.id}</span>
      </div>

      <div className='cardMeio'>
        <Avatar src={money} sx={{ width: 86, height: 86 }}></Avatar>
        <h4>{formatCurrency(person.balance)}</h4>
        <span>Saldo Disponível</span>
        <Button
          className='button'
          onClick={() => {
            irParaDeposito()
          }}
        >
          Depositar/Sacar
        </Button>
      </div>

      <div className='cardFim'>
        <Avatar src={help} sx={{ width: 86, height: 86 }}></Avatar>
        <h3>Precisa de Ajuda?</h3>
        <span className='help'>
          Está com dúvidas? Nossos especialistas estão prontos para te ajudar!
        </span>
        <Button className='button' onClick={() => irParaContato()}>
          Começar Agora
        </Button>
      </div>
    </Container>
  )
}

export default BarraLateral
