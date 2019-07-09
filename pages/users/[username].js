import { useRouter } from "next/router";
import Layout from "../../layouts/layout";
import { useChanceContext } from "../../contexts/chanceContext";

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
    </Layout>
  );
}
