import React, { useContext, useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { LoadingContext } from "../contexts/loadingContext";

export default function Layout(props) {
  const loading = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => loading.setIsLoading(false), 1000);
  }, loading.isLoading);

  return loading.isLoading ? "Loading..." : <Content {...props} />;
}

Layout.propTypes = {
  title: PropTypes.string
};

function Content(props) {
  const { children } = props;
  const subTitle = props.title ? props.title : "";
  const siteTitle = "Example Test App";

  return (
    <>
      <Head>
        <title>{subTitle ? `${subTitle} - ${siteTitle}` : siteTitle}</title>
      </Head>

      <h1>Title</h1>

      {children}
    </>
  );
}
