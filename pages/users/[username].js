import { useRouter } from "next/router";
import Layout from "../../layouts/layout";
import { useChanceContext } from "../../contexts/chanceContext";
import RandomPosts from "../../components/randomPosts";

export default function UserPage() {
  const router = useRouter();
  const { username } = router.query;
  const { chance } = useChanceContext();

  return (
    <Layout>
      <h2>{username}</h2>

      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{chance.name()}</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>
              {chance.city()}, {chance.state()}
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Posts</h3>

      <RandomPosts
        username={username}
        n={chance.integer({ min: 3, max: 1000 })}
        minLikes={0}
        maxLikes={250}
      />
    </Layout>
  );
}
