import Input from '../../Components/Input'
import {
  BtnWith,
  ContainerBtn,
  FormInputs,
  ContainerWithdraw,
  Container,
  ContainerCurrentBalance,
  SelectCurrent,
  SpanValues,
} from './styles'
import { useTransactions } from '../../Providers/Transactions'
import { useUsers } from '../../Providers/Users'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Saque = () => {
  const { userId, addBalance } = useUsers()
  const { addTransactions } = useTransactions()

  const token = JSON.parse(localStorage.getItem('@GambleAPI:token'))

  const schemaSaque = yup.object().shape({
    amount: yup.number().required().positive(),
    paymentAddress: yup.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSaque),
  })

  const aoEnviar = (dados) => {
    dados.type = 'withdraw'
    dados.currency = 'USD'
    dados.userId = userId
    dados.timestamp = new Date()

    addTransactions(dados, token)

    reset()
  }

  return (
    <Container>
      <ContainerWithdraw>
        <h3>Saque</h3>
        <p>Escolha seu método de pagamento e valor do saque abaixo.</p>
        <FormInputs onSubmit={handleSubmit(aoEnviar)}>
          <Input
            value='amount'
            type='text'
            placeholder='Informe o valor'
            register={register}
          />
          <Input
            value='paymentAddress'
            type='text'
            placeholder='Informe o endereço de pagamento'
            register={register}
          />

          <ContainerBtn>
            <BtnWith type='submit'>Finalizar Saque</BtnWith>
          </ContainerBtn>
        </FormInputs>
        <h3>Aviso:</h3>
        <p>
          Os saques levarão até 2 dias úteis para serem processados em sua conta,
          o processo é feito automaticamente.
        </p>
      </ContainerWithdraw>
    </Container>
  )
}

export default Saque
