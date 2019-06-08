import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, setUsers] = useState([
    makeUser("testUser", "password"),
    makeUser("testUser2", "password"),
    makeUser("testUser3", "password")
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function register(username, password) {
    setUsers([...users, { username, password }]);
  }

  function login(username, password) {
    if (
      users.find(
        user => user.username === username && user.password === password
      )
    ) {
      setIsLoggedIn(true);
    }
  }

  return (
    <AuthContext.Provider
      value={{ users, register, isLoggedIn, setIsLoggedIn, login }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function makeUser(username, password) {
  return { username, password };
}
