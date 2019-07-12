import React from "react";
import Link from "next/link";

export default function UserLink({ username, children, ...props }) {
  return (
    <Link href={`/users/[username]`} as={`/users/${username}`} {...props}>
      <a>{children}</a>
    </Link>
  );
}
