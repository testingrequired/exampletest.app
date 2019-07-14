import { createContext, useState, useEffect, useContext } from "react";
import Chance from "chance";

export const ChanceContext = createContext();

export function ChanceProvider({ children }) {
  const [seed, setSeed] = useState();
  const [chance, setChance] = useState();

  useEffect(() => {
    setRandomSeed();
  }, []);

  useEffect(() => {
    if (seed) {
      setChance(new Chance(seed));
    }
  }, [seed]);

  return (
    <ChanceContext.Provider value={{ seed, setSeed, setRandomSeed, chance }}>
      {children}
    </ChanceContext.Provider>
  );

  function setRandomSeed() {
    setSeed(getSeed());
  }
}

export function useChanceContext() {
  return useContext(ChanceContext);
}

function getSeed() {
  return Math.floor(Math.random() * 10000000000);
}
