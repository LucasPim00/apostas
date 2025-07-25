import Hot from '../../Assets/hot.png'
import Achievement from '../../Assets/achievements.png'
import Trofeu from '../../Assets/winRatio.png'
import Bitcoin from '../../Assets/bitcoin.png'
import Tether from '../../Assets/tether.png'

import {
  SectionRates,
  Card,
  Statistic,
  Date,
  Type,
  Currency,
  Amount,
  Container,
} from './styles'

import { useTransactions } from '../../Providers/Transactions'
import Timestamp from 'react-timestamp'
import { useUserBets } from '../../Providers/UserBets'
import { useUsers } from '../../Providers/Users'
import formatCurrency from '../../Utils/formatCurrency.js'

const AtividadeRecente = () => {
  const { historyTransactions } = useTransactions()
  const { userBetsList } = useUserBets()
  const { userId, affiliateTotal } = useUsers()

  const apostas = userBetsList.filter((item) => item.userId === userId)
  const apostasVencidas = apostas.filter((item) => item.result === 'win')
  const porcentagemVitorias = (apostasVencidas.length / apostas.length) * 100

  return (
    <Container>
      {/* Seção de estatísticas */}
      <SectionRates>
        <Card>
          <img src={Hot} alt='Ativo' />
          <Statistic>
            {apostas.length}
            <br />
            <span>Total de Apostas</span>
          </Statistic>
        </Card>
        <Card>
          <img src={Trofeu} alt='Vitórias' />
          <Statistic>
            {apostas.length > 0 ? porcentagemVitorias.toFixed(2) : 0}
            %
            <br />
            <span>Taxa de Vitória</span>
          </Statistic>
        </Card>
        <Card>
          <img src={Achievement} alt='Afiliados' />
          <Statistic>
            {affiliateTotal()}
            <br />
            <span>Indicações</span>
          </Statistic>
        </Card>
      </SectionRates>

      {/* Lista de transações */}
      <section>
        <ul>
          <li className='header'>
            <h2>Atividade Recente</h2>
          </li>
          <li>
            <Date>Data/Hora</Date>
            <Type className='title'>Tipo</Type>
            <Currency className='title'>Moeda</Currency>
            <Amount className='title'>Valor</Amount>
          </li>

          {historyTransactions
            .map((trans) => (
              <li key={trans.timestamp}>
                <Date>
                  <Timestamp date={trans.timestamp} />
                </Date>
                <Type>{trans.type.toUpperCase()}</Type>
                <Currency>{trans.currency}</Currency>
                <Amount>{formatCurrency(trans.amount)}</Amount>
              </li>
            ))
            .reverse()}
        </ul>
      </section>
    </Container>
  )
}

export default AtividadeRecente