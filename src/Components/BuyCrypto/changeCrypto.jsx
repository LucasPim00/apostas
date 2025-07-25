import * as React from "react";
import { BuyCryptoContext } from "../../Providers/BuyCrypto";
import { DivLineTable, PLineTable, ButtonTrade } from "./styledComponent";
import imgChannel from "../../Assets/buy-crypto-logo-1.png";
import { api } from "../../Services/api";

const arrayBTC = [
  { id: "BTC1", amount: 0.0165, usd: "500$" },
  { id: "BTC2", amount: 0.03, usd: "890.89$" },
  { id: "BTC3", amount: 0.17, usd: "5048.40$" },
];

const arrayETH = [
  { id: "ETH1", amount: 0.25, usd: "500$" },
  { id: "ETH2", amount: 0.44, usd: "900$" },
  { id: "ETH3", amount: 2.49, usd: "5048.40$" },
];

const arrayLTC = [
  { id: "LTC1", amount: 7.01, usd: "499.70$" },
  { id: "LTC2", amount: 12.49, usd: "890.39$" },
  { id: "LTC3", amount: 70.14, usd: "5000$" },
];

const token = JSON.parse(window.localStorage.getItem("@GambleAPI:userId"));

export const ChangeList = () => {
  const { list, chooseTeste, setOpen, setPerson } =
    React.useContext(BuyCryptoContext);

  const handleClick = (data) => {
    chooseTeste(data);
    setOpen(true);
  };

  const GETaxios = () => {
    api.get(`/users/${token.id}`).then((res) => setPerson(res.data));
  };

  const renderOptions = (array, tipo) =>
    array.map((item) => (
      <DivLineTable key={item.id}>
        <PLineTable>
          <img src={imgChannel} alt="logo" />
        </PLineTable>
        <PLineTable>5–15 min</PLineTable>
        <PLineTable>{item.amount} {tipo}</PLineTable>
        <PLineTable>{item.usd}</PLineTable>
        <PLineTable>
          <ButtonTrade
            type="submit"
            onClick={(data) => {
              handleClick(data.target.id);
              GETaxios();
            }}
            id={item.amount}
          >
            COMPRAR
          </ButtonTrade>
        </PLineTable>
      </DivLineTable>
    ));

  switch (list) {
    case "BTC":
      return renderOptions(arrayBTC, "BTC");
    case "ETH":
      return renderOptions(arrayETH, "ETH");
    case "LTC":
      return renderOptions(arrayLTC, "LTC");
    default:
      return null;
  }
};

export default ChangeList;
