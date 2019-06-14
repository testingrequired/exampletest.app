import AdminLayout from "../layout";
import { useAuthContext } from "../../../contexts/authContext";
import Layout from "../../../layouts/layout";
import Table from "../../../components/table";

export default function AdminUsersPage() {
  const auth = useAuthContext();

  return (
    <Layout>
      <AdminLayout>
        <Table>
          <thead>
            <tr>
              <th>Username</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            {auth.users.map(function mapUserRow({ username, password }) {
              return (
                <tr key={username}>
                  <td>{username}</td>
                  <td>{password}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </AdminLayout>
    </Layout>
  );
}
