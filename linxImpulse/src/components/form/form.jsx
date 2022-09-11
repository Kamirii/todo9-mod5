import styles from "./form.module.css"
import {Button} from "../button/button.jsx"
export const Form = () => {
    return (
        <section className={styles.section}>


            <div className={styles.sectionText}>
                <h1>Ajude o algoritmo a ser mais certeiro</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
                </p>
                <p></p>
                <p>
                    Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum
                    ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed,
                    egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut
                    neque mattis, consequat velit ut, ultrices orci. Nulla varius
                    elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
                    magna ac luctus commodo, odio ante suscipit libero, at mattis augue
                    est vel metus.
                </p>
            </div>


            <form className={styles.sectionForm}>
                <div className={styles.formInput}>
                    <label>
                        Nome:
                        <input type="text" name="nome" />
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        CPF:
                        <input type="text" name="cpf" />
                    </label>
                </div>

                <div className={styles.formCheckboxes}>
                    <label htmlFor="masculino" >
                        <input type="radio"/>
                        Masculino
                    </label>
                    <label htmlFor="feminino">
                        <input type="radio" />
                        Feminino
                    </label>
                </div>

                <Button type="submit" value="Enviar"></Button>
            </form>

        </section>
    )
}