import styles from "./formShare.module.css"
import {SecondBtn} from "../button/button.jsx"
export const FormShare = () => {
    return (
        <section className={styles.container}>
            <p> Quer que seus amigos também ganhem a lista personalidazada deles: Preencha agora!</p>

            <form className={styles.formShare}>
                <div>
                    <label>
                        Nome:
                        <input type="text" name="nome" />
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="email"/>
                    </label>
                </div>
                <SecondBtn type="submit" value="Enviar"></SecondBtn>
            </form>
    
              
        </section>

    )
}