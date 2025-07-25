import Banner from "../../Components/Privacy/Banner";
import img from "../../Assets/banner-bg.png";
import PoliticaDePrivacidade from "../../Components/Privacy/Privacy";
import Cabecalho from "../../Components/Header";
import Rodape from "../../Components/Footer";

const Privacidade = () => {
  return (
    <>
      <Cabecalho />
      <Banner text={"Política de Privacidade"} imgUrl={img} />
      <PoliticaDePrivacidade />
      <Rodape />
    </>
  );
};

export default Privacidade;
