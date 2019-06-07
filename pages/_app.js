import React from "react";
import App, { Container } from "next/app";
import { LoadingProvider } from "../contexts/loadingContext";
import { ConfigProvider } from "../contexts/configContext";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ConfigProvider>
          <LoadingProvider>
            <Component {...pageProps} />
          </LoadingProvider>
        </ConfigProvider>
      </Container>
    );
  }
}

export default MyApp;
