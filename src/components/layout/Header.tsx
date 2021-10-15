import { useContext } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import SearchUi from "../Search";
import request from "../../services/axios";
import { toast } from "../../services/alerts";
import { Context } from "../../context/GlobalStore";

const HeaderUi = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context);
  /**
   * filter function
   */

  const filter = async (params: string) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response: any = await request(`books?name=${params}`);
      if (response.length) {
        dispatch({ type: "SET_BOOKS", payload: response });
        console.log(state);
      }
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
