import LoginForm from "../components/loginForm";
import { useAuthContext } from "../contexts/authContext";
import Conditional from "../components/design/conditional";

/**
 * Main site layout
 * @param {object} props
 */
export default function ProtectedLayout({ children }) {
  const { currentUser } = useAuthContext();

  return (
    <Conditional when={!!currentUser} else={<LoginForm />}>
      {children}
    </Conditional>
  );
}
