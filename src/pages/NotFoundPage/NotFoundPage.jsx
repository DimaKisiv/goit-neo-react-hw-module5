import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className={styles.link}>Go to Home Page</Link>
    </div>
  );
}
