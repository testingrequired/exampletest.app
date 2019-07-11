import { createContext, useState, useContext } from "react";
import { useChanceContext } from "./chanceContext";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const { chance } = useChanceContext();

  const [users, setUsers] = useState([
    makeUser("testUser", "password"),
    ...chance.n(() => makeUser(chance.word(), chance.word()), 5)
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
  return {
    username,
    password
  };
}
