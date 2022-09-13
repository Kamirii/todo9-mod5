import styles from "./product.module.css"
import {Button} from "../button/button.jsx"
export const ProductLayout = (props) => {
    return (
        <div className={styles.mainContainer}>
            <div className = {styles.imageContainer}>
                <img src={props.image}></img>
                </div>
                <div className = {styles.infoContainer}>
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p>{props.oldPrice}</p>
                <strong>{props.specialOffer}</strong>
                <p>{props.installments}</p>
                </div>  
                <button className={styles.buttonProduct}>Comprar</button>
                
            </div>
        
    )

}