import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, setUsers] = useState([
    makeUser("testUser", "password"),
    makeUser("testUser2", "password2"),
    makeUser("testUser3", "password3")
  ]);

  const [currentUser, setCurrentUser] = useState(null);

  function register(username, password) {
    setUsers([...users, { username, password }]);
  }

  function login(username, password) {
    const foundUser = users.find(
      u => u.username === username && u.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
    }
  }

  return (
    <AuthContext.Provider value={{ users, register, login, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

function makeUser(username, password) {
  return { username, password };
}
