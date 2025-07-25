import {
  Divprimaria,
  H4titulo,
  ImgSports,
} from "./styledComponent";
import sports from "../../../Assets/sports.png";
import match from "../../../Assets/match.png";
import team from "../../../Assets/team.png";
import chance from "../../../Assets/chances.png";
import quantia from "../../../Assets/quantia.png";

export const EscolhaumEsporte = () => {
  return (
    <Divprimaria>
      <H4titulo>Escolha um Esporte</H4titulo>
      <ImgSports src={sports} alt="esporte" />
    </Divprimaria>
  );
};

export const EscolhaumaPartida = () => {
  return (
    <Divprimaria>
      <H4titulo>Escolha uma Partida</H4titulo>
      <ImgSports src={match} alt="partida" />
    </Divprimaria>
  );
};

export const EscolhaumTime = () => {
  return (
    <Divprimaria>
      <H4titulo>Escolha seu Time</H4titulo>
      <ImgSports src={team} alt="time" />
    </Divprimaria>
  );
};

export const EscolhasuasChances = () => {
  return (
    <Divprimaria>
      <H4titulo>Escolha suas Chances</H4titulo>
      <ImgSports src={chance} alt="chance" />
    </Divprimaria>
  );
};

export const EscolhaumaQuantia = () => {
  return (
    <Divprimaria>
      <H4titulo>Escolha sua Quantia</H4titulo>
      <ImgSports src={quantia} alt="quantia" />
    </Divprimaria>
  );
};
