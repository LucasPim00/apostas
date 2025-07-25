import { Container, Img, Span, Text, Texts } from "./styles"
import { ArrowRight } from "phosphor-react"

const Banner = ({ text, imgUrl }) => {
  return (
    <Container>
      <Texts>
        <Text>{text}</Text>
        <Span>Início <ArrowRight size={14} /> {text}</Span>
      </Texts>
      <Img src={imgUrl} />
    </Container>
  )
}

export default Banner