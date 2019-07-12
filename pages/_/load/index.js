import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useConfigContext } from "../../../contexts/configContext";
import { useChanceContext } from "../../../contexts/chanceContext";
import Layout from "../../../layouts/layout";
import AdminLayout from "../layout";

export default function AdminPostsPage() {
  const router = useRouter();
  const { seed, setSeed } = useChanceContext();
  const { config, setConfigValue } = useConfigContext();
  const [encoded, setEncoded] = useState();

  useEffect(() => {
    if (router.query.payload) {
      const data = JSON.parse(window.atob(router.query.payload));

      if (data.config) {
        Object.keys(data.config).forEach(key => {
          setConfigValue(key, data.config[key]);
        });
      }

      if (data.seed) {
        setSeed(data.seed);
      }

      router.push("/_");
    } else {
      const payload = JSON.stringify({ seed, config });
      setEncoded(window.btoa(payload));
    }
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
