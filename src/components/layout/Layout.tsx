import FooterUi from "./Footer";
import HeaderUi from "./Header";
import Container from "react-bootstrap/container";

const LayoutUi = ({ children }: any) => {
  return (
    <>
      <HeaderUi />
      <main className="main">
        <Container>{children}</Container>
      </main>
      <FooterUi />
    </>
  );
};

export default LayoutUi;
