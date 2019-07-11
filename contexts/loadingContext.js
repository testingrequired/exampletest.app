import { createContext, useState, useContext, useEffect } from "react";
import { Router } from "next/router";
import { useConfigContext } from "./configContext";

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const config = useConfigContext();

  useEffect(() => {
    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);

    setIsLoadingFalseDelayed();

    return function() {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };

    function handleRouteChangeStart() {
      setIsLoading(true);
    }

    function handleRouteChangeComplete() {
      setIsLoadingFalseDelayed();
    }

    function setIsLoadingFalseDelayed() {
      const { loadingJitter: jitter, loadingDelay: delay } = config;
      const loadingDelay = jitter ? Math.random() * (delay - 0) + 0 : delay;

      setTimeout(() => setIsLoading(false), loadingDelay);
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoadingContext() {
  return useContext(LoadingContext);
}
