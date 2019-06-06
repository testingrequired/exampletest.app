import { createContext, useState } from "react";

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function provider(Component) {
  return (
    <LoadingProvider>
      <Component />
    </LoadingProvider>
  );
}
