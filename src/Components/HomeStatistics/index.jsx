import { Card, CardImg, CardTxt, Container } from './styles';
import imgCoins from '../../Assets/coins.png';
import imgUsers from '../../Assets/users.png';
import imgTrophy from '../../Assets/trofeu-1.png';

const HomeStatistics = () => {
  return (
    <Container>
      <Card>
        <CardImg src={imgCoins} alt='Moedas' />
        <CardTxt>
          <h1>1.304,94 $</h1>
          <p>Total Pago</p>
        </CardTxt>
      </Card>
      <Card>
        <CardImg src={imgTrophy} alt='Troféu' />
        <CardTxt>
          <h1>2.283</h1>
          <p>Vencedores</p>
        </CardTxt>
      </Card>
      <Card>
        <CardImg src={imgUsers} alt='Usuários' />
        <CardTxt>
          <h1>129</h1>
          <p>Jogadores online</p>
        </CardTxt>
      </Card>
    </Container>
  );
};

export default HomeStatistics;
