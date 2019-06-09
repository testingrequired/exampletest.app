import AdminLayout from "../layout";
import { useAuthContext } from "../../../contexts/authContext";
import styles from "./styles.css";

export default function AdminUsers() {
  const auth = useAuthContext();

  return (
    <AdminLayout title="Users">
      <table className={styles.table}>
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
      </table>
    </AdminLayout>
  );
}
