import Input from '../../Components/Input'
import {
  FormInputs,
  ContainerDeposit,
  Container,
  LinksForm,
  SelectContainer,
  ContainerAmount,
  BtnWith,
  ContainerBtn,
} from './styles'
import { CurrencyDollar } from 'phosphor-react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTransactions } from '../../Providers/Transactions'
import { useUsers } from '../../Providers/Users'

const Deposit = () => {
  const token = JSON.parse(localStorage.getItem('@GambleAPI:token'))
  const { userId, addBalance } = useUsers()
  const { addTransactions } = useTransactions()

  const formDepositSchema = yup.object().shape({
    amount: yup.number().required().positive(),
    paymentType: yup.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formDepositSchema),
  })

  const onSubmitFunction = (data) => {
    data.type = 'deposito'
    data.currency = 'USD'
    data.userId = userId
    data.timestamp = new Date()

    addTransactions(data, token, addBalance)

    reset()
  }

  return (
    <Container>
      <ContainerDeposit>
        <h3>Depósito</h3>
        <p>Escolha o método de pagamento e valor do depósito abaixo.</p>
        <FormInputs onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            value='amount'
            type='text'
            placeholder='Digite o valor'
            register={register}
          />
          <SelectContainer {...register('paymentType')}>
            <option value='PayPal'>PayPal</option>
            <option value='Pix'>Pix</option>
            <option value='Visa'>Visa</option>
            <option value='Mastercard'>Mastercard</option>
            <option value='Pagseguro'>Pagseguro</option>
            <option value='Hipercard'>Hipercard</option>
          </SelectContainer>
          <LinksForm>
            <ContainerBtn>
              <BtnWith type='submit'>Enviar Depósito</BtnWith>
            </ContainerBtn>
          </LinksForm>
        </FormInputs>
        <h3>Aviso:</h3>
        <p>
          Os depósitos podem levar até 2 dias úteis para serem compensados
          na sua conta. O processo é feito automaticamente.
        </p>
      </ContainerDeposit>
    </Container>
  )
}

export default Deposit
