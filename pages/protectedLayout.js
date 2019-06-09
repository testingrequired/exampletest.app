import Protected from "../components/protected";
import Layout from "./layout";

/**
 * Main site layout
 * @param {object} props
 */
export default function ProtectedLayout({ children }) {
  return (
    <Layout>
      <Protected>{children}</Protected>
    </Layout>
  );
}
