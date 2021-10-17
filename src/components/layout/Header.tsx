import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import SearchUi from "../Search";
import { toast } from "../../services/alerts";
import { Context } from "../../context/GlobalStore";

const HeaderUi = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context);
  /**
   * Filter Function
   */

  const filter = async (params: string) => {
    dispatch({ type: "SEARCH_CHARACTERS", payload: [] });
    dispatch({ type: "SEARCH_BOOKS", payload: [] });
    dispatch({ type: "SEARCH_PARAMS", payload: params });
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
      books.filter(async (book: any) => {
        if (
          book.name.toUpperCase() === searchParams ||
          book.publisher.toUpperCase() === searchParams ||
          book.isbn.toUpperCase() === searchParams ||
          book.authors.join(" ").toUpperCase() === searchParams ||
          book.released.toUpperCase() === searchParams
        ) {
          await FoundBook.push(book);
          if (FoundBook.length >= 1) {
            await dispatch({ type: "SEARCH_BOOKS", payload: [...FoundBook] });
          } else {
            dispatch({
              type: "EMPTY",
              payload: "Book not found!, try another search value",
            });
          }
        }
        return false;
      });
      /**
       * Function to filter through the character array
       */
      character.filter(async (el: any) => {
        if (
          el.name.toUpperCase() === searchParams ||
          el.culture.toUpperCase() === searchParams
        ) {
          await FoundCharacter.push(...el.books);
          if (FoundCharacter.length >= 1) {
            FoundCharacter.map(async (el: any) => {
              books.filter(async (book: any) => {
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
          } else {
            dispatch({
              type: "EMPTY",
              payload: "Book not found!, try another search value",
            });
            return false;
          }
        }
      });
    } catch (error) {
      toast(`${error}`);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <>
      <Navbar bg="light" expand="md" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand>Book-Inventory</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end w-100">
              <SearchUi filter={filter} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderUi;
