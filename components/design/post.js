import { useState } from "react";

import UserLink from "../userLink";

export default function Post({ username, body, likes }) {
  const [postLikes, setPostLikes] = useState(likes);

  return (
    <p>
      <UserLink username={username}>
        <a>@{username}</a>
      </UserLink>{" "}
      {body} ({postLikes} likes) <LikeLink />
    </p>
  );

  function LikeLink() {
    return postLikes === likes ? (
      <a href="" onClick={onClickLike}>
        Like
      </a>
    ) : (
      <a href="" onClick={onClickUnlike}>
        Unlike
      </a>
    );
  }

  function onClickLike(e) {
    e.preventDefault();
    setPostLikes(postLikes + 1);
  }

  function onClickUnlike(e) {
    e.preventDefault();
    setPostLikes(postLikes - 1);
  }
}
