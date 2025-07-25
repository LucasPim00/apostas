import { Container, Texts, Text, Span, Divjunta } from "./styled";
import { ArrowRight } from "phosphor-react";

export const Banner = () => {
  return (
    <Container>
      <Texts>
        <Text>Aposta de Futebol</Text>
        <Span>
          Início <ArrowRight size={14} /> Aposta de Futebol
        </Span>
      </Texts>
      <Divjunta />
    </Container>
  );
};
