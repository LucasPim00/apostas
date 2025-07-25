import {
  Container,
  IMG404,
  DIVbase,
  H2text,
  Ptext,
  ButtonHome,
  DIVButton,
} from "./styled";
import Img404 from "../../Assets/error-illus.png";
import { useHistory } from "react-router-dom";

export const Erro = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <Container>
      <IMG404 src={Img404} alt="Erro 404" />
      <DIVbase>
        <H2text>Página não encontrada</H2text>
        <Ptext>Oops... Parece que você se perdeu :(</Ptext>
        <DIVButton>
          <ButtonHome onClick={handleClick}>Voltar para o Início</ButtonHome>
        </DIVButton>
      </DIVbase>
    </Container>
  );
};
