import { useRouter } from "next/router";
import Layout from "../../layouts/layout";
import styled from "styled-components";
import PostList from "../../components/design/postList";
import { usePostsContext } from "../../contexts/postsContext";
import { useUsersContext } from "../../contexts/usersContext";

const UserTable = styled.table`
  text-align: left;
  width: 100%;

  th {
    width: 10%;
  }
`;

export default function UserPage() {
  const router = useRouter();
  const { username } = router.query;
  const { getByUsername } = usePostsContext();
  const users = useUsersContext();

  const userPosts = getByUsername(username) || [];

  const user = users.getByUsername(username);

  return user ? (
    <Layout>
      <h2>@{user.username}</h2>

      <UserTable>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.profile.name}</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>{user.profile.location}</td>
          </tr>
        </tbody>
      </UserTable>

      <h3>Posts</h3>

      <PostList posts={userPosts} n={userPosts.length} />
    </Layout>
  ) : null;
}
