import ChangeList from "./changeCrypto";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { BuyCryptoContext } from "../../Providers/BuyCrypto";
import { ModalQuantiaInsuficiente } from "./modalCompra/index.jsx";
import {
  DivBuyCrypto,
  DivBuyInfo,
  TitleBuy,
  SubTitleBuy,
  FormBuyTransaction,
  LabelInput,
  SelectInfo,
  DivInputValue,
  InputValue,
  SelectCurrency,
  DIVLabelValue,
  DIVSelectors,
  DivTableTrade,
  DivLineTable,
  PLineTable,
  TradeValue,
} from "./styledComponent";

const BuyCrypto = () => {
  const { chooseList, setUsd, setData } = useContext(BuyCryptoContext);

  const handleList = (event) => {
    chooseList(event.target.value);
  };

  const formSchema = yup.object().shape({
    crypto: yup.string().required("Escolha sua Criptomoeda."),
    payment: yup.string().required("Escolha a forma de pagamento."),
    amount: yup.string().required("Informe o valor."),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setUsd(Number(data.amount * 0.000033));
    setData(data);
  };

  return (
    <>
      <DivBuyCrypto>
        <DivBuyInfo>
          <TitleBuy>
            Compre criptomoeda diretamente na sua conta Bitbetio
          </TitleBuy>
          <SubTitleBuy>
            Assim que o pagamento for concluído, sua criptomoeda estará disponível
            na conta Jugaro em poucos minutos.
          </SubTitleBuy>
        </DivBuyInfo>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <FormBuyTransaction>
            <DIVLabelValue>
              <SubTitleBuy>
                1. Escolha a criptomoeda que deseja comprar, insira o valor e
                escolha o método de pagamento.
              </SubTitleBuy>
            </DIVLabelValue>

            <DIVSelectors>
              <DIVLabelValue>
                <LabelInput>Comprar</LabelInput>
                <SelectInfo onClick={handleList} {...register("crypto")}>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="LTC">LTC</option>
                </SelectInfo>
              </DIVLabelValue>

              <DIVLabelValue>
                <LabelInput>Formas de Pagamento</LabelInput>
                <SelectInfo {...register("payment")}>
                  <option>Visa</option>
                  <option>Crédito</option>
                  <option>Master</option>
                </SelectInfo>
              </DIVLabelValue>
            </DIVSelectors>

            <DIVLabelValue>
              <LabelInput>Valor</LabelInput>
              <DivInputValue>
                <InputValue placeholder="100" {...register("amount")} />
                <SelectCurrency>
                  <option>USD</option>
                  <option>SGD</option>
                  <option>AUD</option>
                </SelectCurrency>
              </DivInputValue>
            </DIVLabelValue>
          </FormBuyTransaction>

          <DivBuyInfo>
            <SubTitleBuy>
              2. Escolha a melhor oferta dos nossos parceiros de pagamento e
              conclua sua compra.
            </SubTitleBuy>
          </DivBuyInfo>

          <DivTableTrade>
            <DivLineTable>
              <PLineTable>Canais</PLineTable>
              <PLineTable>Tempo de Chegada</PLineTable>
              <PLineTable>Você Recebe</PLineTable>
              <PLineTable>Taxa (já incluída)</PLineTable>
              <TradeValue>Negociar</TradeValue>
            </DivLineTable>
            <ChangeList />
          </DivTableTrade>
        </form>
      </DivBuyCrypto>
      <ModalQuantiaInsuficiente />
    </>
  );
};

export default BuyCrypto;
