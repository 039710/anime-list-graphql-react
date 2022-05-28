import React, { useReducer, useContext } from "react";
// create context
export const appContext = React.createContext();
import { reducer } from "./reducer";
import { initialState } from "./reducer";
// create context provider
export const AnimeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <appContext.Provider value={[state, dispatch]}>
      {props.children}
    </appContext.Provider>
  );
};
