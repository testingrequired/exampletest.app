import { createContext, useState, useContext } from "react";
import { useChanceContext } from "./chanceContext";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const { chance } = useChanceContext();

  const [users, setUsers] = useState([
    makeUser("testUser", "password"),
    ...chance.n(() => makeUser(chance.word(), chance.word()), 10)
  ]);

  function register(username, password) {
    setUsers([...users, { username, password }]);
  }

  function getByUsername(username) {
    return users.find(user => user.username === username);
  }

  return (
    <UsersContext.Provider value={{ users, register, getByUsername }}>
      {children}
    </UsersContext.Provider>
  );

  function makeUser(username, password) {
    const profile = {
      name: chance.name(),
      location: `${chance.city()}, ${chance.state()}`
    };

    return {
      username,
      password,
      profile
    };
  }
}

export function useUsersContext() {
  return useContext(UsersContext);
}
