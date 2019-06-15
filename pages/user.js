import Layout from "../layouts/layout";
import ProtectedLayout from "../layouts/protectedLayout";
import { useAuthContext } from "../contexts/authContext";
import RandomPosts from "../components/randomPosts";

export default function UserPage() {
  const { currentUsername } = useAuthContext();

  return (
    <Layout>
      <ProtectedLayout>
        <h2>{currentUsername}</h2>

        <h3>Posts</h3>

        <h4>Trending</h4>

        <RandomPosts n={25} minLikes={250} maxLikes={1000} />

        <h4>Recommended</h4>

        <RandomPosts n={25} minLikes={25} maxLikes={200} />
      </ProtectedLayout>
    </Layout>
  );
}
