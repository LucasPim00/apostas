import { Container, ContainerText } from './styles'
import imgCoin1 from '../../Assets/bannerAnimations/coin-1.png'
import imgCoin2 from '../../Assets/bannerAnimations/coin-2.png'
import imgCoin3 from '../../Assets/bannerAnimations/coin-3.png'
import imgCoin4 from '../../Assets/bannerAnimations/coin-4.png'
import imgWinnerCup from '../../Assets/bannerAnimations/winner-cup.png'
import HomeStatistics from '../HomeStatistics'

const BannerHome = () => {
  return (
    <Container>
      <img src={imgCoin1} className='coin1' alt='moeda 1' />
      <img src={imgCoin2} className='coin2' alt='moeda 2' />
      <img src={imgCoin3} className='coin3-1' alt='moeda 3-1' />
      <img src={imgCoin3} className='coin3-2' alt='moeda 3-2' />
      <img src={imgCoin4} className='coin4' alt='moeda 4' />
      <img src={imgWinnerCup} className='trophy' alt='troféu' />
      <ContainerText>
        <h2>Aposte e Vença Hoje!</h2>
        <h1>Apostas Esportivas Entre Usuários com Escrow</h1>
        <h3>
          A maneira mais rápida e fácil de apostar no seu time de futebol favorito.
          Escolha o time em que deseja apostar e vença!
        </h3>
        <span>
          <button>Comece Agora</button>
        </span>
      </ContainerText>

      <HomeStatistics />
    </Container>
  )
}

export default BannerHome
