import React, { createContext, useEffect, useState } from "react";
import { LotteryContextProps, Props, ProviderProps } from "../types";
import { getLottery } from "../services/Lottery";

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
  const [megasena, setMegasena] = useState<Props | undefined>();

  useEffect(() => {
    (async function () {
      const result = await getLottery();
      if ("megasena" in result) {
        setMegasena(result.megasena);
        console.log("result", result.megasena);
      }
    })();
  }, []);

  return (
    <LotteryContext.Provider value={{ megasena }}>
      {children}
    </LotteryContext.Provider>
  );
}