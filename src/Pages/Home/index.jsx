import ComoFunciona from "../../Components/HowWorks";
import Cabecalho from "../../Components/Header";
import Sobre from "../../Components/AboutUs";
import BannerInicial from "../../Components/BannerHome";
import EstatisticasHome from "../../Components/HomeStatistics";
import Rodape from "../../Components/Footer";

const PaginaInicial = () => {
  return (
    <>
      <Cabecalho />
      <BannerInicial />
      <Sobre />
      <ComoFunciona />
      <Rodape />
    </>
  );
};

export default PaginaInicial;