import React from "react";
import App, { Container } from "next/app";
import { LoadingProvider } from "../contexts/loadingContext";
import { ConfigProvider } from "../contexts/configContext";
import { AuthProvider } from "../contexts/authContext";
import { UsersProvider } from "../contexts/usersContext";
import { ChanceProvider } from "../contexts/chanceContext";
import Providers from "../components/providers";

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

    const providers = [
      ConfigProvider,
      ChanceProvider,
      LoadingProvider,
      UsersProvider,
      AuthProvider
    ];

    return (
      <Container>
        <Providers providers={providers}>
          <Component {...pageProps} />
        </Providers>
      </Container>
    );
  }
}

export default MyApp;
