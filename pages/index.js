import Layout from "../layouts/layout";
import { usePostsContext } from "../contexts/postsContext";
import PostList from "../components/design/postList";

export default function IndexPage() {
  const { topPosts } = usePostsContext();

  return (
    <Layout title="Home">
      <h2>Top Posts</h2>

      <PostList posts={topPosts} n={100} />
    </Layout>
  );
}
