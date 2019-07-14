import React from "react";
import Link from "next/link";
import NavMenu from "../../components/design/navMenu";

export default function AdminLayout({ children, title }) {
  return (
    <>
      <h2>Admin</h2>

      <NavMenu>
        <ul>
          <li>
            <Link href="/_/seed">
              <a>Seed</a>
            </Link>
          </li>
          <li>
            <Link href="/_/config">
              <a>Config</a>
            </Link>
          </li>
          <li>
            <Link href="/_/users">
              <a>Users</a>
            </Link>
          </li>
          <li>
            <Link href="/_/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/_/share">
              <a>Share</a>
            </Link>
          </li>
        </ul>
      </NavMenu>

      {children}
    </>
  );
}
