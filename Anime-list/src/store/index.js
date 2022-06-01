import React, { useReducer, useContext,useEffect } from "react";
// create context
export const appContext = React.createContext();
import { reducer } from "./reducer";
import { initialState } from "./reducer";
// create context provider
export const AnimeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=>{
    if (localStorage.getItem("collection")) {
      dispatch({
        type: "SET_COLLECTION",
        payload: JSON.parse(localStorage.getItem("collection")),
      });
    }
  },[])
  return (
    <appContext.Provider value={[state, dispatch]}>
      {props.children}
    </appContext.Provider>
  );
};
