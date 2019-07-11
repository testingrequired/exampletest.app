import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import Loader from "../components/loader";
import { useAuthContext } from "../contexts/authContext";
import NavMenu from "../components/design/navMenu";
import Page from "../components/design/page";
import LogoutLink from "../components/logoutLink";
import Conditional from "../components/design/conditional";

/**
 * Main site layout
 * @param {object} props
 */
export default function Layout({ children, title }) {
  const { currentUser } = useAuthContext();

  const subTitle = title ? title : "";
  const siteTitle = subTitle ? `Lemon - ${subTitle}` : "Lemon";

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
        <link rel="stylesheet" href="/static/style.css" />
      </Head>

      <Loader>
        <main>
          <h1>
            <Link href="/">
              <a>🍋 Lemon</a>
            </Link>
          </h1>

          <NavMenu>
            <ul>
              <li>
                <Link href="/user">
                  <a>{currentUser ? "User" : "Login"}</a>
                </Link>
              </li>

              {!!currentUser ? (
                <li>
                  <LogoutLink />
                </li>
              ) : null}

              {!currentUser ? (
                <li>
                  <Link href="/register">
                    <a>Register</a>
                  </Link>
                </li>
              ) : null}
            </ul>
          </NavMenu>

          <Page>{children}</Page>
        </main>
      </Loader>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string
};
