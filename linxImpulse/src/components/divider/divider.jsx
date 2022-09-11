import styles from "./divider.module.css"

export function Divider({ text}) {
  return (
    <div className={styles.divider}>
      <h3>{text}</h3>
    </div>
  );
}