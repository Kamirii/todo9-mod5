import styles from "./button.module.css"

export const Button = ({type, value}) => {
    return <button className={styles.btn} type={type}>{value}</button>
}