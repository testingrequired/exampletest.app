import Post from "./post";

export default function PostList({ posts = [], n }) {
  return posts
    .slice(0, n || posts.length)
    .map((post, i) => <Post key={i} {...post} />);
}
