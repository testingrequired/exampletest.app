import { useState } from "react";
import UserLink from "../userLink";
import LikeLinkButton from "./likeLink";
import styled from "styled-components";
import { useAuthContext } from "../../contexts/authContext";

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

export default function Post({ id, username, body, likes }) {
  const [postLikes, setPostLikes] = useState(likes);
  const { currentUser } = useAuthContext();

  return (
    <PostStyle className="post" data-post-id={id}>
      <section className="user">
        <UserLink username={username}>@{username}</UserLink>
      </section>
      <section className="body">{body}</section>
      <section className="likes">
        {currentUser ? (
          <LikeLink>{postLikes} Likes</LikeLink>
        ) : (
          <span style={{ fontSize: "1em" }}>{postLikes} Likes</span>
        )}
      </section>
    </PostStyle>
  );

  function LikeLink({ children }) {
    return (
      <LikeLinkButton
        onClick={postLikes === likes ? onClickLike : onClickUnlike}
        liked={postLikes !== likes}
      >
        {children}
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
