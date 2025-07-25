import React, { useState } from 'react'
import { useFootballMatches } from '../../Providers/FootballMatches'
import { useUserBets } from '../../Providers/UserBets'
import { useUsers } from '../../Providers/Users'
import MinhasApostas from '../MyBets'
import NavMinhasApostas from '../NavMyBets'
import { Ul } from './styles'

const ListaMinhasApostas = () => {
  const { matches } = useFootballMatches()
  const { userBetsList } = useUserBets()
  const { userId } = useUsers()
  const [listaFiltrada, setListaFiltrada] = useState([])

  // Exibe as apostas em aberto após pequeno delay
  setTimeout(() => {
    exibirApostas('open')
  }, 100)

  const exibirApostas = (status) => {
    setListaFiltrada([])

    const apostasSelecionadas = userBetsList.filter(
      (item) => item.status === status && item.userId === userId
    )

    const tempArray = []

    apostasSelecionadas.forEach((aposta) => {
      const partida = matches.find((match) => match.fixture.id === aposta.fixture)
      partida.shot = aposta.shot
      partida.odd = aposta.bet.odd
      partida.amount = aposta.bet.amount
      tempArray.push(partida)
    })

    setListaFiltrada(tempArray)
  }

  const exibirApostasFinalizadas = (status) => {
    setListaFiltrada([])

    const apostasSelecionadas = userBetsList.filter(
      (item) => item.status === status && item.userId === userId
    )

    const tempArray = []

    apostasSelecionadas.forEach((aposta) => {
      const partida = matches.find((match) => match.fixture.id === aposta.fixture)
      partida.shot = aposta.shot
      partida.odd = aposta.bet.odd
      partida.amount = aposta.bet.amount
      partida.special = 'Finalizado'
      tempArray.push(partida)
    })

    setListaFiltrada(tempArray)
  }

  return (
    <>
      <NavMinhasApostas
        handleBets={exibirApostas}
        handleFinishedBets={exibirApostasFinalizadas}
      />

      <Ul>
        {listaFiltrada.map((partida) => (
          <li key={partida.fixture.id}>
            <MinhasApostas match={partida} />
          </li>
        ))}
      </Ul>
    </>
  )
}

export default ListaMinhasApostas