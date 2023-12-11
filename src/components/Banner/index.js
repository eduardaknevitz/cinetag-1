import styles from "./Banner.module.css";

function Banner({ imagem }) {
  const imageUrl = `/imagens/banner.png`;

  return (
    <div className={styles.banner}>
      <img src={imageUrl} alt="Descrição da imagem" className={styles.imagem} />
      <div className={styles.texto}>
        {"O Guia Alimentar para Crianças Brasileiras Menores de 2 Anos traz " +
          "recomendações e informações sobre como alimentar a criança para " +
          "promover seu crescimento e desenvolvimento e favorecer sua saúde. " +
          "Dúvidas mais comuns, explicações fundamentadas e orientações práticas " +
          "sobre a amamentação e a alimentação no começo da vida estão aqui reunidas."}
      </div>
    </div>
  );
}

export default Banner;
