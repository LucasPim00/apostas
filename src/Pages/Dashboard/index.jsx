import * as React from 'react'
import Afiliado from '../../Components/Affiliate'
import Deposito from '../../Components/Deposit'
import Rodape from '../../Components/Footer'
import Cabecalho from '../../Components/Header'
import ListaDeApostas from '../../Components/MyBetsList'
import BarraDeNavegacao from '../../Components/NavigationBar'
import AtividadeRecente from '../../Components/RecentActivity'
import Configuracoes from '../../Components/Settings'
import BarraLateral from '../../Components/SideBar'
import Transacoes from '../../Components/Transactions'
import Saque from '../../Components/Withdraw'
import { DashboardContext } from '../../Providers/Dashboard'
import { Container, DashboardContainer, Div } from './styles'

const PainelDeControle = () => {
  const { tab } = React.useContext(DashboardContext)

  const renderizarAba = () => {
    switch (tab) {
      case 'My Bets':
        return <ListaDeApostas />
      case 'Deposit / Withdraw':
        return (
          <Div>
            <Deposito />
            <Saque />
          </Div>
        )
      case 'Affiliate':
        return <Afiliado />
      case 'Transactions':
        return <Transacoes />
      case 'Settings':
        return <Configuracoes />
      default:
        return <AtividadeRecente />
    }
  }

  return (
    <Container>
      <Cabecalho />
      <BarraDeNavegacao />
      <DashboardContainer>
        <BarraLateral />
        <div>{renderizarAba()}</div>
      </DashboardContainer>
      <Rodape />
    </Container>
  )
}

export default PainelDeControle