import Layout from "../layouts/layout";
import RandomPosts from "../components/randomPosts";

export default function IndexPage() {
  return (
    <Layout title="Home">
      <h2>Top Posts</h2>

      <RandomPosts n={10} minLikes={3000} maxLikes={6000} />

      <h2>Trending Posts</h2>

      <RandomPosts n={25} minLikes={250} maxLikes={1000} />
    </Layout>
  );
}
