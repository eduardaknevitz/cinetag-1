import styles from "./Titulo.module.css";

function Titulo({ children }) {
  return (
    <div
      className={styles.texto}
      style={{ marginLeft: "50px", marginRight: "50px" }}
    >
      {children}
    </div>
  );
}

export default Titulo;
