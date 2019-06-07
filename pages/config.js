import { useContext } from "react";
import { ConfigContext } from "../contexts/configContext";
import Layout from "../components/layout";
import styles from "./config.css";

export default function Config(props) {
  const { config } = useContext(ConfigContext);

  return (
    <Layout>
      <h2>Config</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(config).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
