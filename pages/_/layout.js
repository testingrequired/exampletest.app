import React from "react";
import Link from "next/link";
import NavMenu from "../../components/navMenu";

export default function AdminLayout({ children, title }) {
  return (
    <>
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

      {children}
    </>
  );
}
