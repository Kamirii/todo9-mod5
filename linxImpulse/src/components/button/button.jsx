import styles from "./button.module.css"

export const Button = ({type, value}) => {
    return (
    <button className={styles.btn} type={type}>{value}</button>)
}

export const SecondBtn =  ({type, value}) => {
    return (
    <button className={styles.secondBtn} type={type}>{value}</button>)
}
