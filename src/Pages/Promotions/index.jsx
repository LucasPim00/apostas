import Cabecalho from "../../Components/Header";
import Rodape from "../../Components/Footer";

const Promocoes = () => {
  return (
    <>
      <Cabecalho />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Promoções</h1>
        <p>Em breve você poderá ver todas as promoções e bônus disponíveis na plataforma!</p>
      </main>
      <Rodape />
    </>
  );
};

export default Promocoes;