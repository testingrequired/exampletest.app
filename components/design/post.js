import { useState } from "react";
import styled from "styled-components";
import UserLink from "../userLink";
import LikeButton from "./likeButton";
import LikeText from "./likeText";
import { useAuthContext } from "../../contexts/authContext";
import { usePostsContext } from "../../contexts/postsContext";

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

export default function Post({ id }) {
  const { getById } = usePostsContext();
  const post = getById(id);

  const [postLikes, setPostLikes] = useState(post.likes);
  const { currentUser } = useAuthContext();

  return (
    <PostStyle className="post" data-post-id={id}>
      <section className="user">
        <UserLink username={post.username}>@{post.username}</UserLink>
      </section>

      <section className="body">{post.body}</section>

      <section className="likes">
        {currentUser ? (
          <LikeButton
            onClick={postLikes === post.likes ? onClickLike : onClickUnlike}
            liked={postLikes !== post.likes}
          >
            {postLikes} Likes
          </LikeButton>
        ) : (
          <LikeText>{postLikes} Likes</LikeText>
        )}
      </section>
    </PostStyle>
  );

  function onClickLike(e) {
    e.preventDefault();
    setPostLikes(postLikes + 1);
  }

  function onClickUnlike(e) {
    e.preventDefault();
    setPostLikes(postLikes - 1);
  }
}
