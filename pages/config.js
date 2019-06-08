import { useContext } from "react";
import { ConfigContext } from "../contexts/configContext";
import Layout from "../components/layout";
import styles from "./config.css";
import EditConfigValueForm from "../components/editConfigValueForm";

export default function Config() {
  const { config } = useContext(ConfigContext);

  return (
    <Layout>
      <h2>Config</h2>

      <hr />

      <EditConfigValueForm />

      <hr />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{Object.entries(config).map(mapConfigRow)}</tbody>
      </table>
    </Layout>
  );
}

function mapConfigRow([key, value]) {
  return (
    <tr key={key}>
      <td>{key}</td>
      <td>{value}</td>
    </tr>
  );
}
