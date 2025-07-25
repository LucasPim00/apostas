import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from 'phosphor-react'
import { ImageBackground, LogoData, ContainerCopyright, Li } from './styles'
import logo from '../../Assets/logo.png'

const Footer = () => {
  return (
    <ImageBackground>
      <LogoData border='leftRight'>
        <figure>
          <img src={logo} alt='Logo BitBet.io' />
        </figure>
        <ul>
          <Li>
            <a href='/contact'>Contato</a>
          </Li>
          <Li border='leftRight'>
            <a href='/terms-conditions'>Termos de Serviço</a>
          </Li>
          <Li>
            <a href='/Privacy'>Privacidade</a>
          </Li>
        </ul>
      </LogoData>
      <ContainerCopyright>
        <div className='icons'>
          <FacebookLogo size={32} />
          <TwitterLogo size={32} />
          <LinkedinLogo size={32} />
          <InstagramLogo size={32} />
        </div>
        <p>
          Direitos Autorais © 2025 | Desenvolvido por{' '}
          <span className='designed'>Lucas Pim</span>
        </p>
      </ContainerCopyright>
    </ImageBackground>
  )
}

export default Footer
