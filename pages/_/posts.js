import AdminLayout from "./layout";
import Layout from "../../layouts/layout";
import Table from "../../components/design/table";
import { usePostsContext } from "../../contexts/postsContext";

export default function AdminPostsPage() {
  const { posts } = usePostsContext();

  return (
    <Layout>
      <AdminLayout>
        <Table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Body</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(function mapPostRow({ id, username, body, likes }) {
              return (
                <tr key={id}>
                  <td>{username}</td>
                  <td>{body}</td>
                  <td>{likes}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </AdminLayout>
    </Layout>
  );
}
