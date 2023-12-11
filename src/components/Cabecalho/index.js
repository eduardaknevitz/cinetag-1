import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo" style={{ width: "80px" }}></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">Inicio</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
