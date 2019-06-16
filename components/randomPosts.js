import { useState, useEffect } from "react";
import Post from "./design/post";
import { useChanceContext } from "../contexts/chanceContext";

export default function RandomPosts({ minLikes, maxLikes, n }) {
  const [posts, setPosts] = useState([]);
  const { chance, seed } = useChanceContext();

  useEffect(() => {
    setPosts(chance.n(() => createRandomPost(minLikes, maxLikes), n));
  }, [seed]);

  return (
    <>
      {posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </>
  );
}

function createRandomPost(minLikes = 0, maxLikes = 100) {
  const username = `@${chance.word()}`;
  const body = chance.sentence();
  const likes = chance.integer({ min: minLikes, max: maxLikes });
  return { username, body, likes };
}
