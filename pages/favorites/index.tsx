import type { NextPage } from 'next';
import { CatalogBooks } from '../../components/CatalogBooks';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Container } from '../../styles/Container';

const Favorites: NextPage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <CatalogBooks isFavorites={true} />
        <Footer />
      </Container>
    </>
  );
};

export default Favorites;
