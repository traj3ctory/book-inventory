import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import img from '../../logo.svg';

const HeaderUi = () => {
  return (
    <>
      <Navbar bg="light" expand="sm" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">
            <img src={img} alt="header-img" width="34%" />
            &nbsp;Book-Inventory
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderUi;
