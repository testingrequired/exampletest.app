import { useState } from "react";
import { useAuthContext } from "../contexts/authContext";
import styled from "styled-components";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuthContext();

  function onSubmit(e) {
    e.preventDefault();
    auth.login(username, password);
  }

  return (
    <form onSubmit={onSubmit} className={props.className}>
      <div className="formGroup">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoFocus
        />
      </div>

      <div className="formGroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button>Login</button>
    </form>
  );
}

export default styled(LoginForm)`
  & input {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #aaa;
    border-radius: 3px;
  }

  & button {
    margin-top: 1em;
    padding: 0.5em;
    border: 1px solid #aaa;
    border-radius: 3px;
    font-size: 0.9em;
  }

  & .formGroup label {
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;
