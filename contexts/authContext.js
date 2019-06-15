import { createContext, useState, useContext } from "react";
import { useUsersContext } from "./usersContext";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { users } = useUsersContext();

  const [currentUser, setCurrentUser] = useState(users[0]);

  function login(username, password) {
    const foundUser = users.find(
      u => u.username === username && u.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
    }
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
