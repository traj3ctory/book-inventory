import { useContext } from 'react';
import FooterUi from './Footer';
import HeaderUi from './Header';
import Container from 'react-bootstrap/Container';
import LoaderUi from '../../components/Loader';
import { Context } from '../../context/GlobalStore';

const LayoutUi = ({ children }: any) => {
    // @ts-ignore
    const [state] = useContext(Context);

  return (
    <>
      <HeaderUi />
      <main className="main">
        <Container>{children}</Container>
      </main>
      <FooterUi />
      {state.loading && <LoaderUi />}
    </>
  );
};

export default LayoutUi;
