import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import img from "../../logo.svg";

const HeaderUi = () => {
  return (
    <>
      <Navbar bg="light" expand="sm" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">
            <img src={img} alt="header-img" width="34%" />
            &nbsp;Book-Inventory
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto d-flex justify-content-end w-100">
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderUi;
