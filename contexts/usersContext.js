import { createContext, useState, useContext, useEffect } from "react";
import { useChanceContext } from "./chanceContext";
import { useConfigContext } from "./configContext";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const { chance } = useChanceContext();
  const { config } = useConfigContext();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (chance) {
      setUsers([
        {
          username: "testUser",
          password: "password",
          profile: { name: "Test User", location: "Test, QA" }
        },
        ...chance.n(() => makeUser("password"), config.usersAmount)
      ]);
    }
  }, [chance, config.usersAmount]);

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

  function makeUser(password) {
    const first = chance.first();
    const last = chance.last();

    const username = chance.pickone([
      chance.word(),
      first + last,
      `${first.toLowerCase()}${chance.integer({ min: 2, max: 99 })}`
    ]);

    const profile = {
      name: `${first} ${last}`,
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
