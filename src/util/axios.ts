import axios from 'axios';
import { alert } from './alerts';

/**
 * @title GLOBAL AXIOS REQUEST
 * @param {*} path: PARSE IN THE PATH
 */
const request = async (path: string) => {
  try {
    const url = `${process.env.REACT_APP_API}${path}`
    let res = await axios.get(url, {timeout: 5000});
    return res.data;
  } catch (error: any) {
    alert("Error", error?.message || 'Something went wrong!', "error");
  }
};

export default request;


  // /**
  //  * function to get character
  //  */
  //  const getCharacter = async () => {
  //   try {
  //     setLoading(true);
  //     const response: any = await request("characters");
  //     if (response.length) {
  //       dispatch({ type: "SET_CHARACTER", payload: response });
  //     }
  //   } catch (error) {
  //     toast(`${error}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // /**
  //  * function to get books
  //  */
  // const getBooks = async () => {
  //   try {
  //     setLoading(true);
  //     const response: any = await request("books");
  //     if (response.length) {
  //       dispatch({ type: "SET_BOOKS", payload: response });
  //     }
  //   } catch (error) {
  //     toast(`${error}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };