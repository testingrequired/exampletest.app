import { createContext, useState, useContext } from "react";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([
    makeUser("testUser", "password"),
    makeUser("testUser2", "password2"),
    makeUser("testUser3", "password3")
  ]);

  function register(username, password) {
    setUsers([...users, { username, password }]);
  }

  return (
    <UsersContext.Provider value={{ users, register }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsersContext() {
  return useContext(UsersContext);
}

function makeUser(username, password) {
  return { username, password };
}
