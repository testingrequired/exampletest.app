import React, { useContext, useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { LoadingContext } from "../contexts/loadingContext";

export default function Layout(props) {
  const loading = useContext(LoadingContext);

  useEffect(() => {
    loading.setIsLoading(true);
    setTimeout(() => loading.setIsLoading(false), 1000);
  }, loading.isLoading);

  const { children } = props;
  const subTitle = props.title ? props.title : "";
  const siteTitle = "Example Test App";

  return loading.isLoading ? (
    "Loading..."
  ) : (
    <>
      <Head>
        <title>{subTitle ? `${subTitle} - ${siteTitle}` : siteTitle}</title>
      </Head>

      <h1>Title</h1>

      {children}
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string
};
