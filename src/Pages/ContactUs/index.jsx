import * as React from 'react'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import contactImg from '../../Assets/contact-illus.png'
import Form from '../../Components/Form'
import { FAQ, Content } from './styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { PlusCircle, Question } from 'phosphor-react'
import Footer from '../../Components/Footer'

const Contato = () => {
  return (
    <>
      <Header />
      <Banner text={'Fale Conosco'} imgUrl={contactImg} />
      <Form />
      <FAQ>
        <h4>Perguntas Frequentes</h4>
        <h2>Se você tem dúvidas, nós temos respostas</h2>
        <h6>
          Respostas para as dúvidas mais comuns sobre apostas esportivas, criptomoedas e a BitBet.io.
        </h6>
        <div className='buttons'>
          <button>Geral</button>
          <button>Afiliados</button>
          <button>Esportes</button>
          <button>Torneios</button>
        </div>
      </FAQ>
      <Content>
        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />
            Quero jogar na BitBet.io. O que preciso fazer?
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='typography'>
              Você precisa apenas se cadastrar, fazer um depósito e começar a apostar nos jogos disponíveis.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />
            Quanto tempo leva para eu receber após vencer uma aposta?
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='typography'>
              Os pagamentos são processados automaticamente após a finalização do evento. Pode levar até alguns minutos.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />
            Quais são as comissões que preciso pagar?
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='typography'>
              A BitBet.io cobra uma pequena taxa de transação em algumas operações. Consulte os termos para mais detalhes.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />
            Posso definir as odds de qualquer aposta?
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='typography'>
              Não. As odds são definidas pela plataforma com base em análise estatística e algoritmos automatizados.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />
            Que tipo de garantia (escrow) vocês oferecem?
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='typography'>
              Utilizamos contratos inteligentes e auditorias para garantir a segurança de cada transação.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Content>
      <Footer />
    </>
  )
}

export default Contato
