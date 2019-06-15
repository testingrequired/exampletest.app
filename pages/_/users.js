import AdminLayout from "./layout";
import Layout from "../../layouts/layout";
import Table from "../../components/design/table";
import { useUsersContext } from "../../contexts/usersContext";

export default function AdminUsersPage() {
  const { users } = useUsersContext();

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
            {users.map(function mapUserRow({ username, password }) {
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
