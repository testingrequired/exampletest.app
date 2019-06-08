import { createContext, useReducer } from "react";

export const ConfigContext = createContext();

export function ConfigProvider({ children }) {
  const [config, dispatch] = useReducer(reducer, {
    loadingDelay: 250,
    loadingJitter: true
  });

  const setConfigValue = (key, value) => {
    dispatch({ type: "SET", key, value });
  };

  return (
    <ConfigContext.Provider value={{ config, setConfigValue }}>
      {children}
    </ConfigContext.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return { ...state, [action.key]: action.value };

    default:
      throw new Error(`Invalid config dispatch: ${JSON.stringify(action)}`);
  }
}
