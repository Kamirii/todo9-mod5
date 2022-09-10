import styles from "./header.module.css";
import {Button} from "../button/button.jsx";

export const Header = () => {
    return (

        <header className={styles.header}>
        <div>
        <h4>Uma seleção de produtos</h4>
        <h1>especial para você</h1>
        <p>
          Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
        </p>
        </div>

         <div  className={styles.navbtn}>
          <a href="#">Conheça a Linx</a>
          <a href="#"> Ajude o algoritmo</a>
          <a href="#">Seus produtos</a>
          <a href="#">Compartilhe</a>
        </div>

        
      </header>
      );
    };