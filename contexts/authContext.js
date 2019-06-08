import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const users = [{ username: "testUser", password: "password" }];
  return (
    <AuthContext.Provider value={{ users }}>{children}</AuthContext.Provider>
  );
}
