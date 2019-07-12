import { useState } from "react";
import Post from "./design/post";
import { useChanceContext } from "../contexts/chanceContext";

export default function RandomPosts({ username, minLikes, maxLikes, n }) {
  const { chance } = useChanceContext();
  const [posts] = useState(
    chance.n(() => createRandomPost(username, minLikes, maxLikes), n)
  );

  return (
    <>
      {posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </>
  );

  function createRandomPost(definedUsername, minLikes = 0, maxLikes = 100) {
    const id = chance.guid();
    const username = definedUsername || chance.word();
    const body = createSentence();
    const likes = chance.integer({ min: minLikes, max: maxLikes });

    return { id, username, body, likes };
  }

  function createSentence(maxHashTags = 5, maxSentences = 3) {
    const paragraph = chance.paragraph({
      sentences: chance.integer({ min: 0, max: maxSentences })
    });

    const hashTags = chance.n(
      chance.hashtag,
      chance.integer({ min: 0, max: maxHashTags })
    );

    return `${paragraph} ${hashTags.join(" ")}`;
  }
}
