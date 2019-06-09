import styles from "./navMenu.css";

export default function NavMenu({ children }) {
  return <nav className={styles.navMenu}>{children}</nav>;
}
