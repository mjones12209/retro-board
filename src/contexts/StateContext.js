import { createContext, useState } from "react";

export const StateContext = createContext();

const StateContextProvider = ({children}) => {
  const [state, setState] = useState({
    wentWell: {columnId: "wentWell", data: []},
    toImprove: {columnId: "toImprove", data: []},
    actionItems: {columnId: "actionItems", data: []},
  });

  return (
    <StateContext.Provider value={{ state, setState }}>{children}</StateContext.Provider>
  );
};

export default StateContextProvider;
