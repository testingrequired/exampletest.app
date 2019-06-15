import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import Loader from "../components/loader";
import { useAuthContext } from "../contexts/authContext";
import NavMenu from "../components/navMenu";
import Page from "../components/page";
import LogoutLink from "../components/logoutLink";
import Conditional from "../components/conditional";

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
              <li>
                <Link href="/_">
                  <a>Admin</a>
                </Link>
              </li>
              <Conditional when={!!currentUser} else={null}>
                <li>
                  <LogoutLink />
                </li>
              </Conditional>
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
