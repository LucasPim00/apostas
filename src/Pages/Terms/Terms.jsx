import Banner from "../../Components/Terms/Banner";
import img from "../../Assets/banner-bg.png";
import TermosCondicoes from "../../Components/Terms/Terms";
import Cabecalho from "../../Components/Header";
import Rodape from "../../Components/Footer";

const Termos = () => {
  return (
    <>
      <Cabecalho />
      <Banner text={"Termos e Condições"} imgUrl={img} />
      <TermosCondicoes />
      <Rodape />
    </>
  );
};

export default Termos;