import Conditional from "./conditional";
import LoginForm from "./loginForm";
import { useAuthContext } from "../contexts/authContext";

export default function Protected(props) {
  const { currentUser } = useAuthContext();

  return (
    <Conditional when={!!currentUser} else={<LoginForm />}>
      {props.children}
    </Conditional>
  );
}
