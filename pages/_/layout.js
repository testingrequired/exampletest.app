import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../layout";
import NavMenu from "../../components/navMenu";

export default function AdminLayout({ children, title }) {
  return (
    <Layout title="Admin">
      <h2>Admin</h2>

      <NavMenu>
        <ul>
          <li>
            <Link href="/_/config">Config</Link>
          </li>
          <li>
            <Link href="/_/users">Users</Link>
          </li>
        </ul>
      </NavMenu>

      {title && <h3>{title}</h3>}

      {children}
    </Layout>
  );
}
