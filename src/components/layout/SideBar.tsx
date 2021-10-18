import { useContext } from "react";
import Card from "react-bootstrap/Card";
import SearchUi from "../Search";
import DateSearchUi from "../DateSearch";
import { Context } from "../../context/GlobalStore";

const SideBarUi = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context);
  /**
   * Filter Function
   */

   interface dataObject {
    url: string;
    name: string;
    isbn: string;
    authors: Array<string>;
    numberOfPages: string;
    publisher: string;
    country: string;
    mediaType: string;
    released: string;
    character: Array<string>;
    povCharacters: Array<string>;
  }

  const filter = async (params: string) => {
    // clear specific global store before running the function
    dispatch({ type: "SEARCH_CHARACTERS", payload: [] });
    dispatch({ type: "SEARCH_BOOKS", payload: [] });
    dispatch({ type: "SEARCH_PARAMS", payload: params });
    dispatch({ type: "EMPTY", payload: "" });
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      if (params === "") {
        dispatch({ type: "SEARCH_BOOKS", payload: [] });
        dispatch({ type: "SEARCH_CHARACTERS", payload: [] });
        return false;
      }
      const searchParams = params.toUpperCase().trim().replace(/" "/g, "");
      const { books, character } = state;
      const FoundBook: Array<any> = [];
      const FoundCharacter: Array<any> = [];
      const CharacterBook: Array<any> = [];

      /**
       * Function to filter through the books array
       */
      await books.filter(async (book: dataObject) => {
        if (
          book.name.toUpperCase() === searchParams ||
          book.publisher.toUpperCase() === searchParams ||
          book.isbn.toUpperCase() === searchParams ||
          book.authors.join(" ").toUpperCase() === searchParams ||
          book.released.split("T")[0] === searchParams.toString()
        ) {
          await FoundBook.push(book);
          if (FoundBook.length >= 1) {
            await dispatch({ type: "SEARCH_BOOKS", payload: [...FoundBook] });
          }
        } else if (FoundBook === [] && CharacterBook.length === 0) {
          dispatch({
            type: "EMPTY",
            payload: `Book matching ${searchParams} not found!, try another search value`,
          });
        }
        return false;
      });
      /**
       * Function to filter through the character array
       */
      await character.filter(async (el: any) => {
        if (
          el.name.toUpperCase() === searchParams ||
          el.culture.toUpperCase() === searchParams
        ) {
          await FoundCharacter.push(...el.books);
          if (FoundCharacter.length >= 1) {
            FoundCharacter.map(async (el: any) => {
              books.filter(async (book: dataObject) => {
                if (book.url === el) {
                  CharacterBook.push(book);
                  await dispatch({
                    type: "SEARCH_CHARACTERS",
                    payload: [...CharacterBook],
                  });
                }
                return true;
              });
              return true;
            });
          }
        }
        return false;
      });
      // Toast book not found when book doesn't exist
      if (FoundBook.length === 0 && CharacterBook.length === 0) {
        dispatch({
          type: "EMPTY",
          payload: `Book matching ${searchParams} not found!, try another search value`,
        });
      }
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: "Something went wrong, refresh the page and try again",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
  return (
    <>
      <Card className="side_card">
        <Card.Header>Search By:</Card.Header>
        <Card.Body>
          <SearchUi filter={filter} />
          <DateSearchUi filter={filter} />
        </Card.Body>
      </Card>
    </>
  );
};

export default SideBarUi;
