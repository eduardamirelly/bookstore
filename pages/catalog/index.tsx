import type { NextPage } from 'next';
import { CatalogBooks } from '../../components/CatalogBooks';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { useReduxSelector } from '../../store';
import { Container } from '../../styles/Container';

const Catalog: NextPage = () => {
  const books = useReduxSelector((state) => state.books.data);

  return (
    <>
      <Container>
        <Navbar />
        <CatalogBooks isFavorites={false} books={books} />
        <Footer />
      </Container>
    </>
  );
};

export default Catalog;
