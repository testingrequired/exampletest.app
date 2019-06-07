import { createContext, useState } from "react";

export const ConfigContext = createContext();

export function ConfigProvider({ children }) {
  const [loadingDelay, setLoadingDelay] = useState(250);

  return (
    <ConfigContext.Provider value={{ loadingDelay, setLoadingDelay }}>
      {children}
    </ConfigContext.Provider>
  );
}
