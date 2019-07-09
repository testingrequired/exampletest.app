import Link from "next/link";

export default function Post({ username, body, likes }) {
  return (
    <p>
      <Link href={`users/${username}`}>
        <a>@{username}</a>
      </Link>
      : {body} ({likes} likes)
    </p>
  );
}
