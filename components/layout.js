import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

export default function Layout(props) {
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

Layout.propTypes = {
  title: PropTypes.string
};
