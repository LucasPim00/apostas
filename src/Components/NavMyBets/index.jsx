import React from 'react'
import { SectionButtons } from './styles'

const NavegacaoMinhasApostas = ({ handleBets, handleFinishedBets }) => {
  return (
    <SectionButtons>
      <button onClick={() => handleBets('open')} className='open'>
        Em andamento
      </button>
      <button onClick={() => {}}>Canceladas</button>
      <button onClick={() => handleFinishedBets('finished')}>
        Finalizadas
      </button>
      
    </SectionButtons>
  )
}

export default NavegacaoMinhasApostas