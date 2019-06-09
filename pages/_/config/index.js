import { useConfigContext } from "../../../contexts/configContext";
import styles from "./styles.css";
import EditConfigValueForm from "./editConfigValueForm";
import AdminLayout from "../layout";

export default function Config() {
  const { config } = useConfigContext();

  return (
    <AdminLayout title="Config">
      <h4>Edit</h4>

      <EditConfigValueForm />

      <h4>Values</h4>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(config).map(function mapConfigRow([key, value]) {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{JSON.stringify(value)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </AdminLayout>
  );
}
