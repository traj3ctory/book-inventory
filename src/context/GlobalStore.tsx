import React, { createContext, useReducer } from "react";
import Reducer from "./GlobalReducer";

interface initial {
  books: Array<any>;
  character: Array<any>;
  error: string;
  loading: boolean;
  bookFound: Array<any>;
  characterFound: Array<any>;
  message: string;
  searchParams: string;
}

const initialState: initial = {
  books: [],
  character: [],
  error: "",
  loading: false,
  bookFound: [],
  characterFound: [],
  message: '',
  searchParams: '',
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
