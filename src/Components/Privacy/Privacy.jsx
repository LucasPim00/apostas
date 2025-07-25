import {
  Container,
  Divterm,
  Titleterm,
  Pterm,
  Ulterm,
  Literm,
  Olterm,
  Body,
} from "./styled.js";

const PoliticaPrivacidade = () => {
  return (
    <Body>
      <Container>
        <Divterm>
          <Titleterm>
            ESTAMOS SEMPRE BUSCANDO NOVAS FORMAS DE PROTEGER A PRIVACIDADE DOS NOSSOS CLIENTES.
          </Titleterm>
          <Pterm>
            Nós valorizamos a sua privacidade. Trabalhamos constantemente para garantir que suas informações estejam seguras e protegidas contra qualquer acesso indevido.
          </Pterm>
          <Ulterm>
            <Literm>— Informações seguras e protegidas por padrão.</Literm>
            <Literm>— Transparência no uso dos seus dados.</Literm>
            <Literm>— Sem compartilhamento com terceiros sem seu consentimento.</Literm>
            <Literm>— Respeito à sua privacidade em todas as interações.</Literm>
          </Ulterm>
          <Pterm>
            Nossa equipe está comprometida em seguir as melhores práticas de segurança da informação. Monitoramos e atualizamos nossos sistemas com frequência, sempre com foco na proteção dos seus dados.
          </Pterm>
        </Divterm>

        <Divterm>
          <Titleterm>
            SEUS DADOS ESTÃO SEGUROS CONOSCO, NÃO COMPARTILHAREMOS INFORMAÇÕES COM FONTES EXTERNAS.
          </Titleterm>
          <Pterm>
            Adotamos medidas rígidas de segurança para garantir que suas informações estejam sempre protegidas. A sua confiança é nossa prioridade.
          </Pterm>
          <Olterm>
            <Literm>
              Dados criptografados e armazenados com segurança.
            </Literm>
            <Literm>
              Processos internos auditados regularmente.
            </Literm>
            <Literm>
              Equipe especializada em segurança da informação.
            </Literm>
            <Literm>
              Transparência sobre o uso de dados pessoais.
            </Literm>
            <Literm>
              Compromisso com a LGPD e demais legislações vigentes.
            </Literm>
          </Olterm>

          <Titleterm>COOKIES E RASTREAMENTO</Titleterm>
          <Pterm>
            Utilizamos cookies para melhorar sua experiência em nossa plataforma. Esses dados nos ajudam a entender seu comportamento de navegação e oferecer conteúdos mais relevantes. Você pode gerenciar suas preferências a qualquer momento.
          </Pterm>
        </Divterm>
      </Container>
    </Body>
  );
};

export default PoliticaPrivacidade;