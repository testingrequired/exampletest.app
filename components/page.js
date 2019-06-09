import styles from "./page.css";

export default function Page(props) {
  return <div className={styles.page}>{props.children}</div>;
}
