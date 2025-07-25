import Filtro from '../../Components/Filter'
import JogosPrincipais from '../../Components/MainGames'
import { useFootballMatches } from '../../Providers/FootballMatches'
import Banner from '../../Components/Banner'
import Cabecalho from "../../Components/Header"
import { Container } from "./styles"
import Background from "../../Assets/index-bg.png"

const Esportes = () => {
  const { matches } = useFootballMatches()

  return (
    <Container>
      <Cabecalho />
      <Banner className="teste" text={'Apostas Esportivas'} imgUrl={Background} />
      <Filtro />
      <ul>
        {matches.length > 0 &&
          matches.map((match) => (
            <li key={match.fixture.id}>
              <JogosPrincipais match={match} />
            </li>
          ))}
      </ul>
    </Container>
  )
}

export default Esportes

