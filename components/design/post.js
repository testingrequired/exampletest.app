import UserLink from "../userLink";

export default function Post({ username, body, likes }) {
  return (
    <p>
      <UserLink username={username}>
        <a>@{username}</a>
      </UserLink>
      : {body} ({likes} likes)
    </p>
  );
}
