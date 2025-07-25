import { useFootballMatches } from '../../Providers/FootballMatches'
import { Container, Content } from './styles'

const Filter = () => {
  const { loadMatches } = useFootballMatches()

  return (
    <Container>
      <h1>Todas as Apostas de Futebol</h1>
      <Content>
        <input placeholder='Buscar por Nome do Time' />
        <input placeholder='Buscar por Nome da Liga' />
        <input type='date' />
      </Content>
    </Container>
  )
}

export default Filter
