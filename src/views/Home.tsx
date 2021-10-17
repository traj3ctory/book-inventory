import { useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../context/GlobalStore';
import ListUi from '../components/List';

const HomeUi = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context);

  /**
   * On mount of this component || page fetch book and character data from the API
   * When a change is the made on the global store re-render this page
   */
  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();

    (async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const characterUrl = `${process.env.REACT_APP_API}characters`;
        const bookUrl = `${process.env.REACT_APP_API}books`;
        let res = await axios.get(characterUrl, { timeout: 5000 });
        let resp = await axios.get(bookUrl, { timeout: 5000 });

        if (!unmounted && res.data && resp.data) {
          dispatch({ type: "SET_CHARACTER", payload: res.data });
          dispatch({ type: "SET_BOOKS", payload: resp.data });
        }
      } catch (error: any) {
        // alert("Error", error?.message || "Something went wrong!", "error");
        dispatch({
          type: "EMPTY",
          payload: "Something went wrong!, Please reload the page",
        });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    })();

    return function () {
      unmounted = true;
      source.cancel("Cancelling in cleanup");
    };
  }, [dispatch]);

  /**
   * DESTRUCTURE STATE INTO VARIOUS OBJECT KEYS
   */
  const { loading, characterFound, bookFound, books, searchParams } = state;

  return (
    <>
      {/* Display the items in the book found section of the global store */}
      {loading === false && bookFound.length >= 1 && (
        <>
          <h5>
            Search Result for : <i>{searchParams}</i>
          </h5>
          <ListUi data={bookFound} />
        </>
      )}

      {/* Display the items in the character found section of the global store */}
      {loading === false && characterFound.length >= 1 && (
        <>
          <h5>
            Search Result for : <i>{searchParams}</i>
          </h5>
          <ListUi data={characterFound} />
        </>
      )}

      {/* Display the items in the book and character section of the global store, data is gottent from the Api*/}
      {books &&
        loading === false &&
        bookFound.length < 1 &&
        characterFound.length < 1 && <ListUi data={books} />}
    </>
  );
};

export default HomeUi;
