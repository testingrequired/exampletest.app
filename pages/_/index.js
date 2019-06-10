import AdminLayout from "./layout";
import ProtectedLayout from "../../layouts/protectedLayout";
import Layout from "../../layouts/layout";

export default function AdminIndex() {
  return (
    <Layout>
      <ProtectedLayout>
        <AdminLayout />
      </ProtectedLayout>
    </Layout>
  );
}
