import { useState } from "react";
import AdminLayout from "./layout";
import Layout from "../../layouts/layout";
import { useChanceContext } from "../../contexts/chanceContext";

export default function AdminUsersPage() {
  const { seed, randomSeed, setSeed } = useChanceContext();
  const [newSeed, setNewSeed] = useState("");

  const onClickRandomize = e => {
    e.preventDefault();
    randomSeed();
  };

  const onSubmit = e => {
    e.preventDefault();
    setSeed(newSeed);
    setNewSeed("");
  };

  const onChangeNewSeed = e => {
    setNewSeed(parseInt(e.target.value, 10));
  };

  return (
    <Layout>
      <AdminLayout>
        <form onSubmit={onSubmit}>
          <input type="text" value={newSeed} onChange={onChangeNewSeed} />
          <button>Set</button>
          <button onClick={onClickRandomize}>Randomize</button>{" "}
          <label htmlFor="">{seed}</label>
        </form>
      </AdminLayout>
    </Layout>
  );
}
