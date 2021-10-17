import React, { createContext, useReducer } from 'react';
import Reducer from './GlobalReducer';

/**
 * @title GLOBAL STORE TYPE
 */
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

/**
 * @title GLOBAL STORE INITIALIZATION
 * @returns {*} books[]: Store the book array data
 * @returns {*} character[]: Store the character array data
 * @returns {*} error "" : Store error to be displayed
 * @returns {*} loading : Store loading status
 * @returns {*} bookFound[]: Store the found book array data
 * @returns {*} characterFound[]: Store the found character array data
 * @returns {*} message: Store the error message gotten from search
 * @returns {*} searchParams: Store the search value
 */
const initialState: initial = {
  books: [],
  character: [],
  error: "",
  loading: false,
  bookFound: [],
  characterFound: [],
  message: "",
  searchParams: "",
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
