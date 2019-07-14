import { useState, useEffect } from "react";
import { useConfigContext } from "../../contexts/configContext";
import { useChanceContext } from "../../contexts/chanceContext";
import Layout from "../../layouts/layout";
import AdminLayout from "./layout";

export default function AdminSharePage() {
  const { seed } = useChanceContext();
  const { config } = useConfigContext();
  const [encoded, setEncoded] = useState();

  useEffect(() => {
    const payload = JSON.stringify({ seed, config });
    setEncoded(window.btoa(payload));
  }, [seed, config]);

  return (
    <Layout>
      <AdminLayout>
        <h3>Share</h3>{" "}
        {encoded ? <a href={`/_/load?payload=${encoded}`}>{encoded}</a> : null}
      </AdminLayout>
    </Layout>
  );
}
