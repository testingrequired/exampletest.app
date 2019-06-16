import AdminLayout from "./layout";
import Layout from "../../layouts/layout";
import { useChanceContext } from "../../contexts/chanceContext";
import RandomPosts from "../../components/randomPosts";

export default function AdminUsersPage() {
  const { seed, randomSeed } = useChanceContext();

  const onClick = e => {
    e.preventDefault();
    randomSeed();
  };

  return (
    <Layout>
      <AdminLayout>
        <p>{seed}</p>
        <button onClick={onClick}>Randomize</button>

        <RandomPosts />
      </AdminLayout>
    </Layout>
  );
}
