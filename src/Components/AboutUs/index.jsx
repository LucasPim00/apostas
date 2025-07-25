import bolasTela from '../../Assets/about-bitbetio-image.png';
import comunidade from '../../Assets/communityPowered.png';
import decentralizada from '../../Assets/decentralised.png';
import semLimites from '../../Assets/noLimits.png';
import pessoaParaPessoa from '../../Assets/PeerToPeer.png';
import { Card } from '@mui/material';
import { Container, Content } from './style.js';
import Title from './Title';

const About = () => {
  return (
    <Container>
      <Title />
      <Content>
        <div className='imgGrande'>
          <figcaption>
            <img src={bolasTela} alt='Imagem de bolas em frente a uma tela' />
          </figcaption>
        </div>
        <div className='infos'>
          <section className='cards'>
            <Card className='card'>
              <figcaption>
                <img src={comunidade} alt='Imagem comunidade' />
                <h5>Movida pela Comunidade</h5>
              </figcaption>
            </Card>

            <Card className='card'>
              <figcaption>
                <img src={decentralizada} alt='Imagem descentralizada' />
                <h5>Descentralizada</h5>
              </figcaption>
            </Card>

            <Card className='card'>
              <figcaption>
                <img src={semLimites} alt='Imagem sem limites' />
                <h5>Sem Limites</h5>
              </figcaption>
            </Card>

            <Card className='card'>
              <figcaption>
                <img src={pessoaParaPessoa} alt='Imagem pessoa para pessoa' />
                <h5>Entre Usuários</h5>
              </figcaption>
            </Card>
          </section>
        </div>
      </Content>
    </Container>
  );
};

export default About;