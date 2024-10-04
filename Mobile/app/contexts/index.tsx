
import { ContextReducers } from "@/reducers";
import { initialState } from "@/state";
import { AppAction, ChildrenProps, InitialProps } from "@/utils/interface";
import { createContext, useReducer } from "react";

const MyContext = createContext<{
  state: InitialProps;
  dispatch: React.Dispatch<AppAction>;
}>({ state: initialState, dispatch: () => null });

export const ContextProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(ContextReducers, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;