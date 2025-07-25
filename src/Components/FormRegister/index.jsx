import Input from '../Input'
import {
  Container,
  SelectContainer,
  BtnRegister,
  ContainerBtn,
  ContainerHaveLogin,
  ContainerLogoMedias,
  ContainerBetsAndTotal,
  Bets,
  BtnClosed,
} from './styles'
import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
  CaretDown,
  CaretUp,
} from 'phosphor-react'
import signupcounter1 from '../../Assets/signupcountericon1.png'
import signupcounter2 from '../../Assets/signupcountericon2.png'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { generate } from 'referral-codes'
import { api } from '../../Services/api'
import { useUsers } from '../../Providers/Users'
import Afilliate from '../Affiliate'
import { useUserBets } from '../../Providers/UserBets'
import formatCurrency from '../../Utils/formatCurrency'

const FormRegister = ({ closeModalRegister, openModalLogin }) => {
  const [referral, setReferral] = useState(false)
  const [referralCode, setReferralCode] = useState(true)
  const { registerUser, userId } = useUsers()
  const { userBetsList } = useUserBets()

  const formRegisterSchema = yup.object().shape({
    name: yup
      .string()
      .required('Campo obrigatório *')
      .min(3, 'Mínimo 3 caracteres *'),
    email: yup.string().required('Campo obrigatório *').email('E-mail inválido *'),
    password: yup
      .string()
      .required('Campo obrigatório *')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!'
      ),
    confirmPassword: yup
      .string()
      .required('Campo obrigatório *')
      .oneOf([yup.ref('password')], 'As senhas não coincidem!'),
    referral: yup.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRegisterSchema),
  })

  const onSubmitFunction = (data) => {
    delete data.confirmPassword
    data.myAffiliateCode = generate({
      length: 8,
      count: 1,
    }).toString()

    data.balance = referral ? 20 : 0

    registerUser(
      data,
      referral,
      closeModalRegister,
      openModalLogin,
      setReferralCode
    )

    reset()
  }

  return (
    <Container>
      <BtnClosed>
        <button onClick={closeModalRegister}>X</button>
      </BtnClosed>
      <ContainerLogoMedias>
        <span>Cadastre-se na Bitbet.io</span>
        <div>
          <a href='a' alt='Facebook'><FacebookLogo size={32} /></a>
          <a href='a' alt='Twitter'><TwitterLogo size={32} /></a>
          <a href='a' alt='Linkedin'><LinkedinLogo size={32} /></a>
          <a href='a' alt='Instagram'><InstagramLogo size={32} /></a>
        </div>
      </ContainerLogoMedias>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          register={register}
          value='name'
          type='text'
          placeholder='Nome completo'
          error={errors.name?.message}
          name='Nome'
        />
        <Input
          register={register}
          value='email'
          type='text'
          placeholder='E-mail'
          error={errors.email?.message}
          name='E-mail'
        />
        <Input
          register={register}
          value='password'
          type='password'
          placeholder='Senha'
          error={errors.password?.message}
          name='Senha'
        />
        <Input
          register={register}
          value='confirmPassword'
          type='password'
          placeholder='Confirmar senha'
          error={errors.confirmPassword?.message}
          name='Confirmar senha'
        />

        <div className='referral'>
          <span
            className='referral'
            onClick={() => setReferral(!referral)}
          >
            Possui um código de indicação?{' '}
            {referral ? <CaretUp size={15} /> : <CaretDown size={15} />}
          </span>
          {referral && (
            <Input
              register={register}
              value='referredByCode'
              type='text'
              placeholder='Digite o código de indicação'
              error={errors.referral?.message}
            />
          )}
          {!referralCode && referral ? (
            <span className='error'>Código de indicação inválido!</span>
          ) : null}
        </div>
        <ContainerBtn>
          <BtnRegister type='submit'>CADASTRAR</BtnRegister>
        </ContainerBtn>
      </form>
      <ContainerHaveLogin>
        <span>
          Já tem conta?ㅤ
          <label
            htmlFor='Login'
            onClick={() => {
              closeModalRegister()
              openModalLogin()
            }}
          >
            Entrar
          </label>
        </span>
      </ContainerHaveLogin>
      <ContainerBetsAndTotal>
        <Bets>
          <figure>
            <img src={signupcounter1} alt='logoApostas' />
          </figure>
          <div>
            <span>{userBetsList.length}</span>
            <label htmlFor=''>Apostas</label>
          </div>
        </Bets>
        <Bets>
          <figure>
            <img src={signupcounter2} alt='logoApostas' />
          </figure>
          <div>
            <span>
              {formatCurrency(
                userBetsList.reduce(
                  (acc, bet) => bet.result === 'win' && bet.bet.amount + acc,
                  0
                )
              )}
            </span>
            <label htmlFor=''>Total Ganhado</label>
          </div>
        </Bets>
      </ContainerBetsAndTotal>
    </Container>
  )
}

export default FormRegister
