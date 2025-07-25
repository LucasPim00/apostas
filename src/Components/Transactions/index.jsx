import {
  Amount,
  Container,
  Currency,
  TransactionsDates,
  Div,
  Type,
  TransactionSection,
} from './styles'
import * as React from 'react'
import { useTransactions } from '../../Providers/Transactions'
import { useState } from 'react'
import SimpleDateTime from 'react-simple-timestamp-to-date'
import { useUsers } from '../../Providers/Users'
import USD from '../../Assets/cifrao.png'
import Timestamp from 'react-timestamp'

const Transacoes = () => {
  const { historyTransactions } = useTransactions()

  const { userId, usersList } = useUsers()
  const [transacoesFiltradas, setTransacoesFiltradas] = useState([])
  const [tipo, setTipo] = useState('deposit')
  const [mes, setMes] = useState('262980000')

  const hoje = Number(new Date()) / 1000

  const aplicarFiltro = () => {
    const resultado = historyTransactions.filter(
      (transaction) =>
        transaction.type === tipo && transaction.userId === userId
    )

    setTransacoesFiltradas(resultado)
  }

  return (
    <Container>
      <section>
        <Div>
          <label>Mês</label>
          <select onChange={(evento) => setMes(evento.target.value)}>
            <option value='260000000'>Últimos 30 dias</option>
            <option value='520000000'>Últimos 60 dias</option>
            <option value='104000000'>Últimos 90 dias</option>
          </select>
        </Div>

        <Div>
          <label>Tipo</label>
          <select onChange={(evento) => setTipo(evento.target.value)}>
            <option value='deposit'>Depósito</option>
            <option value='withdraw'>Saque</option>
          </select>
        </Div>

        <Div>
          <label>Moeda</label>
          <select>
            <option value='USD'>USD</option>
          </select>
        </Div>

        <button onClick={aplicarFiltro}>Filtrar</button>
      </section>

      <TransactionSection>
        <ul>
          <li>
            <TransactionsDates>Data/Hora</TransactionsDates>
            <Type className='title'>Tipo</Type>
            <Currency className='title'>Moeda</Currency>
            <Amount className='title'>Valor</Amount>
          </li>
          {transacoesFiltradas.length > 0
            ? transacoesFiltradas.map((transaction, index) => (
                <li key={index}>
                  <TransactionsDates>
                    <SimpleDateTime
                      dateSeparator={'/'}
                      timeSeparator={':'}
                      dateFormat={'DMY'}
                    >
                      {transaction.timestamp}
                    </SimpleDateTime>
                  </TransactionsDates>
                  <Type className='title'>{transaction.type}</Type>
                  <Currency className='title'>{transaction.currency}</Currency>
                  <Amount className='title'>
                    {transaction.amount.toFixed(2)}
                  </Amount>
                </li>
              ))
            : historyTransactions.map(
                (transaction, index) =>
                  transaction.userId === userId && (
                    <li key={index}>
                      <TransactionsDates>
                        <Timestamp date={transaction.timestamp} />
                      </TransactionsDates>
                      <Type className='title'>
                        {transaction.type.toUpperCase()}
                      </Type>
                      <Currency className='title'>
                        {transaction.currency}
                      </Currency>
                      <Amount className='title'>
                        {transaction.amount.toFixed(2)}
                      </Amount>
                    </li>
                  )
              )}
        </ul>
      </TransactionSection>
    </Container>
  )
}

export default Transacoes
