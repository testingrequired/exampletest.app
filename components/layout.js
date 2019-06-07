import React, { useContext, useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { LoadingContext } from "../contexts/loadingContext";
import { ConfigContext } from "../contexts/configContext";

const styles = {
  main: {
    width: "90vw",
    margin: "0 auto",
    fontFamily: "sans-serif"
  },
  header: {
    marginBottom: "2em"
  }
};

/**
 * Main site layout
 * @param {object} props
 */
export default function Layout({ children, title }) {
  const { setIsLoading, isLoading } = useContext(LoadingContext);
  const { loadingDelay } = useContext(ConfigContext);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), loadingDelay);
  }, []);

  return (
    <main style={styles.main}>
      {(isLoading && "Loading...") || (
        <Content title={title} children={children} />
      )}
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

      <h1 style={styles.header}>{siteTitle}</h1>

      {children}
    </>
  );
}

Content.propTypes = {
  title: PropTypes.string
};
