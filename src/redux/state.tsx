import { createContext, useContext, useReducer } from "react";

// TODO: Later update typing for this
export const StateContext = createContext(null as any);

export const StateProvider = ({ initialState, reducer, children }: any) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);