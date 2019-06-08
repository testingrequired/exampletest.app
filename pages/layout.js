import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import { LoadingContext } from "../contexts/loadingContext";
import { ConfigContext } from "../contexts/configContext";
import styles from "./layout.css";
import Loader from "../components/loader";
import { AuthContext } from "../contexts/authContext";
import Conditional from "../components/conditional";
import LoginForm from "../components/loginForm";

/**
 * Main site layout
 * @param {object} props
 */
export default function Layout({ children, title }) {
  const { setIsLoading } = useContext(LoadingContext);
  const { config } = useContext(ConfigContext);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const { loadingJitter: jitter, loadingDelay: delay } = config;
    const loadingDelay = jitter ? Math.random() * (delay - 0) + 0 : delay;
    setTimeout(() => setIsLoading(true));
    setTimeout(() => setIsLoading(false), loadingDelay);
  }, []);

  function onClickLogout(e) {
    e.preventDefault();
    auth.setIsLoggedIn(false);
  }

  const subTitle = title ? title : "";

  return (
    <main className={styles.main}>
      <Loader>
        <Conditional when={auth.isLoggedIn} else={<LoginForm />}>
          <Head>
            <title>{subTitle ? `Lemon - ${subTitle}` : "Lemon"}</title>
            <link
              rel="shortcut icon"
              type="image/png"
              href="/static/favicon.ico"
            />
          </Head>

          <Link href="/">
            <h1 className={styles.header}>🍋 Lemon</h1>
          </Link>

          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/_">Admin</Link>
              </li>
              <li>
                <a href="" onClick={onClickLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>

          <hr />

          {children}
        </Conditional>
      </Loader>
    </main>
  );
}

Layout.propTypes = {
  title: PropTypes.string
};
