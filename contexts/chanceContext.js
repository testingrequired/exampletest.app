import { createContext, useState, useEffect, useContext } from "react";
import Chance from "chance";

export const ChanceContext = createContext();

export function ChanceProvider({ children }) {
  const [seed, setSeed] = useState(getSeed());
  const [chance, setChance] = useState(new Chance(seed));

  useEffect(() => {
    setChance(new Chance(seed));
  }, [seed]);

  const randomSeed = () => setSeed(getSeed());

  return (
    <ChanceContext.Provider value={{ seed, setSeed, randomSeed, chance }}>
      {children}
    </ChanceContext.Provider>
  );
}

export function useChanceContext() {
  return useContext(ChanceContext);
}

function getSeed() {
  return Math.floor(Math.random() * 10000000000);
}
