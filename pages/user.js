import Layout from "../layouts/layout";
import ProtectedLayout from "../layouts/protectedLayout";
import RandomPosts from "../components/randomPosts";

export default function UserPage() {
  return (
    <Layout>
      <ProtectedLayout>
        <h3>Timeline</h3>

        <RandomPosts n={25} minLikes={0} maxLikes={250} />
      </ProtectedLayout>
    </Layout>
  );
}
