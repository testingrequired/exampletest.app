import { createContext, useState, useContext, useEffect } from "react";
import { useChanceContext } from "./chanceContext";
import { useUsersContext } from "./usersContext";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
  const { chance } = useChanceContext();
  const { users } = useUsersContext();

  const [posts] = useState(makePosts());
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    setTopPosts(posts.sort((a, b) => b.likes - a.likes).slice(0, 10));
  }, [posts]);

  function getByUsername(username) {
    return posts.filter(post => post.username === username);
  }

  function getById(id) {
    return posts.find(post => post.id === id);
  }

  return (
    <PostsContext.Provider value={{ posts, topPosts, getByUsername, getById }}>
      {children}
    </PostsContext.Provider>
  );

  function makePosts() {
    return [
      ...chance.n(
        () =>
          makePost(
            chance.pickone(users).username,
            chance.integer({ min: 0, max: 9000 })
          ),
        1000
      )
    ];
  }

  function makePost(username, likes = 0) {
    const id = chance.guid();
    const body = createSentence();

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

export function usePostsContext() {
  return useContext(PostsContext);
}
