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
  const { setIsLoading, isLoading } = useContext(LoadingContext);
  const { config } = useContext(ConfigContext);

  useEffect(() => {
    const loadingDelay = config.loadingJitter
      ? Math.random() * (config.loadingDelay - 0) + 0
      : config.loadingDelay;
    setTimeout(() => setIsLoading(true));
    setTimeout(() => setIsLoading(false), loadingDelay);
  }, []);

  return (
    <main className={styles.main}>
      <Loader>
        <Content title={title} children={children} />
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
