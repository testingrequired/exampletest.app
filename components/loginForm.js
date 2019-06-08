import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import styles from "./loginForm.css";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthContext);

  function onSubmit(e) {
    e.preventDefault();
    auth.login(username, password);
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoFocus
        />
      </div>

      <div className={styles.formGroup}>
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
