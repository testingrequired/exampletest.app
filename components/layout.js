import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import { LoadingContext } from "../contexts/loadingContext";
import { ConfigContext } from "../contexts/configContext";
import styles from "./layout.css";
import Loader from "./loader";

/**
 * Main site layout
 * @param {object} props
 */
export default function Layout({ children, title }) {
  const { setIsLoading } = useContext(LoadingContext);
  const { config } = useContext(ConfigContext);

  useEffect(() => {
    const { loadingJitter: jitter, loadingDelay: delay } = config;
    const loadingDelay = jitter ? Math.random() * (delay - 0) + 0 : delay;
    setTimeout(() => setIsLoading(true));
    setTimeout(() => setIsLoading(false), loadingDelay);
  }, []);

  return (
    <main className={styles.main}>
      <Loader>
        <Content {...{ children, title }} />
      </Loader>
    </main>
  );
}

Layout.propTypes = {
  title: PropTypes.string
};

function Content({ children, title }) {
  const siteTitle = "Example Test App";
  const subTitle = title ? title : "";

  return (
    <>
      <Head>
        <title>{subTitle ? `${subTitle} - ${siteTitle}` : siteTitle}</title>
      </Head>

      <Link href="/">
        <h1 className={styles.header}>{siteTitle}</h1>
      </Link>

      <nav className={styles.nav}>
        <Link href="/config">Config</Link>
      </nav>

      {children}
    </>
  );
}

Content.propTypes = {
  title: PropTypes.string
};
