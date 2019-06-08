import { useContext } from "react";
import Conditional from "./conditional";
import LoginForm from "./loginForm";
import { AuthContext } from "../contexts/authContext";

export default function Protected(props) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Conditional when={isLoggedIn} else={<LoginForm />}>
      {props.children}
    </Conditional>
  );
}
