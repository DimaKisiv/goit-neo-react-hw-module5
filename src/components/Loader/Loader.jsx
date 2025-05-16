import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <span className={styles.spinner}>⏳</span> Loading...
    </div>
  );
}
