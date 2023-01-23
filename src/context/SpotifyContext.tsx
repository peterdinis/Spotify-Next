import { InitialStateI} from "@/typing/contextTypes";
import { ReactNode, createContext, useReducer } from "react";

export const SpotifyContext = createContext(null);

interface ISpotifyContextProps {
  initialState: InitialStateI,
  reducer: any,
  children?: ReactNode
}

export const SpotifyLayer = ({initialState, reducer, children}: ISpotifyContextProps) => {
  return (
    <SpotifyContext.Provider value={useReducer(reducer, initialState) as any}>
    {children}
  </SpotifyContext.Provider>
  )
}