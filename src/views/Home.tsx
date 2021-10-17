import { useEffect, useContext } from "react";
import axios from "axios";
import { alert } from "../services/alerts";
import ListUi from "../components/List";
import { Context } from "../context/GlobalStore";

const HomeUi = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context);

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
        alert("Error", error?.message || "Something went wrong!", "error");
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
      {loading === false && bookFound.length >= 1 && (
        <>
          <h5>
            Search Result for : <i>{searchParams}</i>
          </h5>
          <ListUi data={bookFound} />
        </>
      )}

      {loading === false && characterFound.length >= 1 && (
        <>
          <h5>
            Search Result for : <i>{searchParams}</i>
          </h5>
          <ListUi data={characterFound} />
        </>
      )}
      {books &&
        loading === false &&
        bookFound.length < 1 &&
        characterFound.length < 1 && <ListUi data={books} />}
    </>
  );
};

export default HomeUi;
