import { createContext, useState } from "react";

export const StateContext = createContext();

const StateContextProvider = ({children}) => {
  const [state, setState] = useState({
    wentWell: [],
    toImprove: [],
    actionItems: [],
  });

  return (
    <StateContext.Provider value={{ state, setState }}>{children}</StateContext.Provider>
  );
};

export default StateContextProvider;
