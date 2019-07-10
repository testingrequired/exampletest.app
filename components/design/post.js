import { useState } from "react";
import UserLink from "../userLink";
import LikeLinkButton from "./likeLink";
import styled from "styled-components";

const PostStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;

  .user {
    width: 10%;

    @media (max-width: 1000px) {
      width: 25%;
    }
  }

  .body {
    width: 70%;

    @media (max-width: 1000px) {
      width: 50%;
    }
  }

  .likes {
    width: 15%;
  }
`;

export default function Post({ username, body, likes }) {
  const [postLikes, setPostLikes] = useState(likes);

  return (
    <PostStyle>
      <section className="user">
        <UserLink username={username}>@{username}</UserLink>
      </section>
      <section className="body">{body}</section>
      <section className="likes">
        <LikeLink />
      </section>
    </PostStyle>
  );

  function LikeLink() {
    return (
      <LikeLinkButton
        onClick={postLikes === likes ? onClickLike : onClickUnlike}
      >
        {postLikes} Likes
      </LikeLinkButton>
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
