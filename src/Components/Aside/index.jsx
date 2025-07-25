import { Container, Games, Li, Sports, Team, Ul } from "./styles"
import LogoHome from '../../Assets/logoHome.png'

const Aside = () => {
  return (
    <Container>
      <Team>
        <h3>Últimos Times</h3>
        <Ul>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
        </Ul>
      </Team>

      <Games>
        <h3>Últimos Jogos</h3>
        <Ul>
          <Li>
            <input type='checkbox'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <span>Busan Ipark</span>
          </Li>
        </Ul>
      </Games>

      <Sports>
        <h3>Esportes</h3>
        <Ul>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
          <Li>
            <input type='checkbox'/>
            <img src={LogoHome} alt='Logo do time'/>
            <span>Busan Ipark</span>
          </Li>
        </Ul>
      </Sports>
    </Container>
  )
}

export default Aside