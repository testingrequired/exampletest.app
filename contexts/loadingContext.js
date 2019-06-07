import { createContext, useState } from "react";

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingDelay, setLoadingDelay] = useState(250);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        loadingDelay,
        setLoadingDelay
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
