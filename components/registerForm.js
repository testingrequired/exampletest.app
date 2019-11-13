import { useState } from "react";
import { useUsersContext } from "../contexts/usersContext";
import styled from "styled-components";
import { useAuthContext } from "../contexts/authContext";

function RegisterForm(props) {
  const auth = useAuthContext();
  const users = useUsersContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    users.register(username, password);
    auth.login(username, password);
  }

  return (
    <form onSubmit={onSubmit} className={props.className} id="registerForm">
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

      <button id="registerButton">Register</button>
    </form>
  );
}

export default styled(RegisterForm)`
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
