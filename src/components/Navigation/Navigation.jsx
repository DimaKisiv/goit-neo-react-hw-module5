import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>
        Home
      </NavLink>
      <NavLink to="/movies" className={({ isActive }) => isActive ? styles.active : undefined}>
        Movies
      </NavLink>
    </nav>
  );
}
