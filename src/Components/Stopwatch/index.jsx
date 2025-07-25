import React from 'react'
import { useUserBets } from '../../Providers/UserBets'
import { useUsers } from '../../Providers/Users'

const Cronometro = ({ ms, fixtureId }) => {
  const [tempo, setTempo] = React.useState(ms)
  const [cronometroAtivo, setCronometroAtivo] = React.useState(true)
  const { payBet } = useUserBets()
  const { userId } = useUsers()

  if (tempo === 5400000) {
    payBet(userId, fixtureId)
  }

  React.useEffect(() => {
    let intervalo = null

    if (cronometroAtivo) {
      intervalo = setInterval(() => {
        setTempo((tempoAnterior) => tempoAnterior + 10)
      }, 10)
    } else {
      clearInterval(intervalo)
    }

    return () => clearInterval(intervalo)
  }, [cronometroAtivo])

  return (
    <>
      {tempo < 5400000 ? (
        <>
          <span>{('0' + Math.floor((tempo / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((tempo / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((tempo / 10) % 100)).slice(-2)}</span>
        </>
      ) : (
        <span>Finalizado</span>
      )}
    </>
  )
}

export default Cronometro