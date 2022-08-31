import type { NextPage } from 'next';
import { CatalogBooks } from '../../components/CatalogBooks';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Container } from '../../styles/Container';

const Catalog: NextPage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <CatalogBooks />
        <Footer />
      </Container>
    </>
  );
};

export default Catalog;
