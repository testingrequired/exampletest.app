import { createContext, useState, useContext, useEffect } from "react";
import { useChanceContext } from "./chanceContext";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const { chance, seed } = useChanceContext();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      makeUser("testUser", "password"),
      ...chance.n(() => makeUser(chance.word(), chance.word()), 10)
    ]);
  }, [seed]);

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
