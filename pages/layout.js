import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./layout.css";
import Loader from "../components/loader";
import Protected from "../components/protected";

/**
 * Main site layout
 * @param {object} props
 */
export default function Layout({ children, title }) {
  const subTitle = title ? title : "";

  return (
    <main className={styles.main}>
      <Loader>
        <Head>
          <title>{subTitle ? `Lemon - ${subTitle}` : "Lemon"}</title>
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/favicon.ico"
          />
          <link rel="stylesheet" href="/static/style.css" />
        </Head>

        <Link href="/">
          <h1 className={styles.header}>🍋 Lemon</h1>
        </Link>

        <Protected>
          <nav className={styles.nav}>
            <Link href="/_">Admin</Link>
          </nav>

          <hr />

          {children}
        </Protected>
      </Loader>
    </main>
  );
}

Layout.propTypes = {
  title: PropTypes.string
};
