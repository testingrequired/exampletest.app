import Layout from "../layouts/layout";
import ProtectedLayout from "../layouts/protectedLayout";
import { useAuthContext } from "../contexts/authContext";

export default function UserPage() {
  const { currentUser } = useAuthContext();

  return (
    <Layout>
      <ProtectedLayout>
        <h2>{currentUser && currentUser.username}</h2>

        <p>Welcome</p>
      </ProtectedLayout>
    </Layout>
  );
}
