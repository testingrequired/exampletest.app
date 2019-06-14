import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import Loader from "../components/loader";
import { useAuthContext } from "../contexts/authContext";
import NavMenu from "../components/navMenu";
import Page from "../components/page";

/**
 * Main site layout
 * @param {object} props
 */
export default function Layout({ children, title }) {
  const auth = useAuthContext();

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
                  <a>{auth.currentUser ? "User" : "Login"}</a>
                </Link>
              </li>
              <li>
                <Link href="/_">
                  <a>Admin</a>
                </Link>
              </li>
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
