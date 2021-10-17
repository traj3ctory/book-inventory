import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterUi from "./Footer";
import HeaderUi from "./Header";
import SideBarUi from "./SideBar";
import LoaderUi from "../../components/Loader";
import { Context } from "../../context/GlobalStore";
import { toast } from "../../services/alerts";

const LayoutUi = ({ children }: any) => {
  // @ts-ignore
  const [state] = useContext(Context);
  const { message, error, loading } = state;

  if (error !== "") {
    toast(error, "", "danger");
  }
  if (message !== "") {
    toast(message);
  }

  return (
    <>
      <HeaderUi />
      <main className="main">
        <Container>
          <Row>
            <Col lg="8" md="7" sm="12" className="order-md-1 order-2">
              <section>{children}</section>
            </Col>
            <Col lg="4" md="5" sm="12" className="mx-auto order-md-2 order-1">
              <aside>
                <SideBarUi />
              </aside>
            </Col>
          </Row>
        </Container>
      </main>
      <FooterUi />
      {loading && <LoaderUi />}
    </>
  );
};

export default LayoutUi;
