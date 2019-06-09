import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./layout.css";
import Loader from "../components/loader";
import { useAuthContext } from "../contexts/authContext";

/**
 * Main site layout
 * @param {object} props
 */
export default function Layout({ children, title }) {
  const auth = useAuthContext();

  const subTitle = title ? title : "";
  const siteTitle = subTitle ? `Lemon - ${subTitle}` : "Lemon";

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
        <link rel="stylesheet" href="/static/style.css" />
      </Head>

      <Loader>
        <main className={styles.main}>
          <Link href="/">
            <h1 className={styles.header}>🍋 Lemon</h1>
          </Link>

          <nav>
            <ul>
              <li>
                <Link href="/user">{auth.currentUser ? "User" : "Login"}</Link>
              </li>
            </ul>
          </nav>

          {children}
        </main>
      </Loader>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string
};
