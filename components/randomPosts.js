import { useState, useEffect } from "react";
import Chance from "chance";
import Post from "./design/post";

const chance = new Chance();

export default function RandomPosts({ minLikes, maxLikes, n }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(chance.n(() => createRandomPost(minLikes, maxLikes), n));
  }, []);

  return (
    <>
      {posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </>
  );
}

function createRandomPost(minLikes = 0, maxLikes = 100) {
  const username = chance.word();
  const body = chance.sentence();
  const likes = chance.integer({ min: minLikes, max: maxLikes });
  return { username, body, likes };
}
