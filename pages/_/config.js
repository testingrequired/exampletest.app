import { useConfigContext } from "../../contexts/configContext";
import EditConfigValueForm from "../../components/editConfigValueForm";
import AdminLayout from "./layout";
import Layout from "../../layouts/layout";
import Table from "../../components/design/table";

export default function AdminConfigPage() {
  const { config } = useConfigContext();

  return (
    <Layout>
      <AdminLayout>
        <h4>Edit</h4>

        <EditConfigValueForm />

        <h4>Values</h4>

        <Table>
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
        </Table>
      </AdminLayout>
    </Layout>
  );
}
