import React, { createContext, useReducer } from "react";
import Reducer from "./GlobalReducer";

interface initial {
  books: Array<any>;
  character: Array<any>;
  error: string;
  loading: boolean;
}

const initialState: initial = {
  books: [],
  character: [],
  error: "",
  loading: false,
};


const Store = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
      // @ts-ignore
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
