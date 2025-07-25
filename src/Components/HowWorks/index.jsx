import { useState } from "react";
import icon1 from "../../Assets/how-works-icon-1.png";
import icon2 from "../../Assets/how-works-icon-2.png";
import icon3 from "../../Assets/how-works-icon-3.png";
import icon4 from "../../Assets/how-works-icon-4.png";
import icon5 from "../../Assets/how-works-icon-5.png";

import {
  EscolhaumEsporte,
  EscolhaumaPartida,
  EscolhaumTime,
  EscolhasuasChances,
  EscolhaumaQuantia,
} from "./Quadros";

import {
  DivExpHowWork,
  TitleHowWork,
  Divcontainer,
  DivListaHowWork,
  HowWorkH5,
  HowWorkH2,
  HowWorkP,
  ListaHowWork,
  ItemListaHowWork,
  ImgHowWork,
  SpanHowWork,
} from "./styledComponent";

const HowWorks = () => {
  const [janela, setJanela] = useState("esporte");

  const trocandoGuia = () => {
    switch (janela) {
      case "partida":
        return <EscolhaumaPartida />;
      case "time":
        return <EscolhaumTime />;
      case "chances":
        return <EscolhasuasChances />;
      case "quantia":
        return <EscolhaumaQuantia />;
      default:
        return <EscolhaumaPartida />;
    }
  };

  function trocandoState(state) {
    setJanela(state);
  }

  return (
    <Divcontainer>
      <DivExpHowWork>
        <HowWorkH5>Conheça</HowWorkH5>
        <HowWorkH2>Como funciona a 5Bet?</HowWorkH2>
        <HowWorkP>
          Nossa plataforma foi criada desde o início para atender a forma única de apostas e liquidação oferecidas pela blockchain. Siga estes passos simples e comece a lucrar!
        </HowWorkP>
      </DivExpHowWork>

      <DivListaHowWork>
        <div>
          <ListaHowWork>
            <ItemListaHowWork onClick={() => trocandoState("partida")}>
              <SpanHowWork>
                <ImgHowWork src={icon1} alt="icon" />
              </SpanHowWork>
              <TitleHowWork>Escolha uma Partida</TitleHowWork>
            </ItemListaHowWork>
            <ItemListaHowWork onClick={() => trocandoState("time")}>
              <SpanHowWork>
                <ImgHowWork src={icon2} alt="icon" />
              </SpanHowWork>
              <TitleHowWork>Escolha seu Time</TitleHowWork>
            </ItemListaHowWork>
            <ItemListaHowWork onClick={() => trocandoState("chances")}>
              <SpanHowWork>
                <ImgHowWork src={icon3} alt="icon" />
              </SpanHowWork>
              <TitleHowWork>Escolha suas Chances</TitleHowWork>
            </ItemListaHowWork>
            <ItemListaHowWork onClick={() => trocandoState("quantia")}>
              <SpanHowWork>
                <ImgHowWork src={icon4} alt="icon" />
              </SpanHowWork>
              <TitleHowWork>Escolha sua Quantia</TitleHowWork>
            </ItemListaHowWork>
          </ListaHowWork>
        </div>
        {trocandoGuia()}
      </DivListaHowWork>
    </Divcontainer>
  );
};

export default HowWorks;
