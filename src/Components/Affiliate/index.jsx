import {
  DivAffiliate,
  Ptitle,
  Divtitle,
  H5title,
  Divreferral,
  Preferral,
  Inputreferral,
  IMGreferral,
  DIVcopyreferral,
  DIVreferralINFO,
  PnumberReferral,
  PphraseReferral,
  IMGreferralEarned,
  DIVphrasesReferral,
  InputReferralCalendario,
  PReferralCalendario,
  DivInfoCalendario,
  DivInfos,
  Date,
  Type,
  Currency,
  Amount,
} from './styledComponent'

import copyItem from '../../Assets/copy-icon.png'
import referralEarned1 from '../../Assets/earned-referral-icon-1.png'
import referralEarned2 from '../../Assets/earned-referral-icon-2.png'
import { useUsers } from '../../Providers/Users'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Timestamp from 'react-timestamp'

const Afiliado = () => {
  const { afiliatesList, userId, userInfo, affiliateBalance } = useUsers()
  const [date, setDate] = useState('')

  const handleAffiliates = (date) => {
    console.log(Math.floor(new Date(date).getTime() / 1000))
  }

  return (
    <DivAffiliate>
      <Divtitle>
        <H5title>Programa de Afiliados</H5title>
        <Ptitle>
          Ganhe recompensas vitalícias de até 15% ao convidar novas pessoas!
        </Ptitle>
      </Divtitle>

      <Divreferral>
        <Preferral>Meu link de afiliado</Preferral>
        <DIVcopyreferral>
          <Inputreferral
            type='text'
            disabled
            defaultValue={userInfo.myAffiliateCode}
          />
          <IMGreferral
            src={copyItem}
            onClick={() => {
              navigator.clipboard.writeText(userInfo.myAffiliateCode)
              toast.success('Código de afiliado copiado para a área de transferência!', {
                theme: 'colored',
              })
            }}
          />
        </DIVcopyreferral>
      </Divreferral>

      <DivInfos>
        <DIVreferralINFO>
          <IMGreferralEarned src={referralEarned1} />
          <DIVphrasesReferral>
            <PnumberReferral>{affiliateBalance()} USD</PnumberReferral>
            <PphraseReferral>Total Ganhado</PphraseReferral>
          </DIVphrasesReferral>
        </DIVreferralINFO>

        <DIVreferralINFO>
          <IMGreferralEarned src={referralEarned2} />
          <DIVphrasesReferral>
            <PnumberReferral>$0.00</PnumberReferral>
            <PphraseReferral>Mês Passado</PphraseReferral>
          </DIVphrasesReferral>
        </DIVreferralINFO>
      </DivInfos>

      <DivInfoCalendario>
        <PReferralCalendario>Histórico de Indicações</PReferralCalendario>
        <InputReferralCalendario
          onChange={(e) => {
            handleAffiliates(e.target.value)
          }}
          type='date'
        />
      </DivInfoCalendario>

      <section>
        <ul>
          <li>
            <Date className='title'>Data</Date>
            <Type className='title'>Usuário</Type>
            <Currency className='title'>Valor</Currency>
            <Amount className='title'>E-mail</Amount>
          </li>

          {afiliatesList.map((afilliates) => {
            const { timestamp, username, email, affiliateUserId } = afilliates
            if (affiliateUserId === userId) {
              return (
                <li key={affiliateUserId}>
                  <Date>
                    <Timestamp date={timestamp} />
                  </Date>
                  <Type>{username}</Type>
                  <Currency>$20.00</Currency>
                  <Amount>{email}</Amount>
                </li>
              )
            }
          })}
        </ul>
      </section>
    </DivAffiliate>
  )
}

export default Afiliado
