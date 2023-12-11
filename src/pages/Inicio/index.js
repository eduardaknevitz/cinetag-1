import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from "json/db.json";
import styles from "./Inicio.module.css";

function Inicio() {
  const section1 = videos.slice(0, 4);
  const section2 = videos.slice(4, 8);
  const section3 = videos.slice(8, 12);
  const section4 = videos.slice(12, 16);
  const section5 = videos.slice(16, 20);
  const section6 = videos.slice(20, 24);
  const section7 = videos.slice(24, 28);
  const section8 = videos.slice(28, 32);
  const section9 = videos.slice(32, 36);

  return (
    <>
      <Banner imagem="home" />

      <Titulo>
        <h1>Princípios</h1>
      </Titulo>
      <section className={styles.container}>
        {section1.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      <Titulo>
        <h1>Leite materno: o primeiro alimento</h1>
      </Titulo>
      <section className={styles.container}>
        {section2.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      <Titulo>
        <h1>Conhecendo os alimentos</h1>
      </Titulo>
      <section className={styles.container}>
        {section3.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      <Titulo>
        <h1>
          Crianças menores de 6 meses que não estão sendo amamentadas
          exclusivamente
        </h1>
      </Titulo>
      <section className={styles.container}>
        {section4.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      <Titulo>
        <h1>Alimentação de crianças não amamentadas</h1>
      </Titulo>
      <section className={styles.container}>
        {section5.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      <Titulo>
        <h1>Cozinhar em casa</h1>
      </Titulo>
      <section className={styles.container}>
        {section6.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      <Titulo>
        <h1>
          Alimentação adequada e saudável: lidando com os desafios do cotidiano
        </h1>
      </Titulo>
      <section className={styles.container}>
        {section7.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      <Titulo>
        <h1>Conhecendo os direitos relacionados à alimentação infantil</h1>
      </Titulo>
      <section className={styles.container}>
        {section8.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      <Titulo>
        <h1>Doze passos para uma alimentação saudável</h1>
      </Titulo>
      <section className={styles.container}>
        {section9.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
}

export default Inicio;
