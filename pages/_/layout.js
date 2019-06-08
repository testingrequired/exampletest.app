import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/layout";

export default function AdminLayout({ children, title }) {
  return (
    <Layout title="Admin">
      <h2>Admin</h2>

      <nav>
        <Link href="/_/config">Config</Link>
      </nav>

      <hr />

      {title && <h3>{title}</h3>}

      {children}
    </Layout>
  );
}
