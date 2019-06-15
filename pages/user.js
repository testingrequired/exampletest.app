import Layout from "../layouts/layout";
import ProtectedLayout from "../layouts/protectedLayout";
import { useAuthContext } from "../contexts/authContext";

export default function UserPage() {
  const { currentUsername } = useAuthContext();

  return (
    <Layout>
      <ProtectedLayout>
        <h2>{currentUsername}</h2>

        <p>Welcome</p>
      </ProtectedLayout>
    </Layout>
  );
}
