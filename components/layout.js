import React, { useContext, useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { LoadingContext } from "../contexts/loadingContext";

/**
 * Main site layout
 * @param {object} props
 */
export default function Layout({ children, title, loadingDelay = 1000 }) {
  const { setIsLoading, isLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), loadingDelay);
  }, []);

  return (
    (isLoading && "Loading...") || <Content title={title} children={children} />
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  loadingDelay: PropTypes.number
};

function Content({ children, title }) {
  const siteTitle = "Example Test App";
  const subTitle = title ? title : "";

  return (
    <>
      <Head>
        <title>{subTitle ? `${subTitle} - ${siteTitle}` : siteTitle}</title>
      </Head>

      <h1>{siteTitle}</h1>

      {children}
    </>
  );
}

Content.propTypes = {
  title: PropTypes.string
};
