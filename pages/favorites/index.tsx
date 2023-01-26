import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CatalogBooks } from '../../components/CatalogBooks';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { useReduxSelector } from '../../store';
import { loadBooksRequest } from '../../store/features/books';
import { loadCategoriesRequest } from '../../store/features/categories';
import { Container } from '../../styles/Container';

const Favorites: NextPage = () => {
  const dispatch = useDispatch();
  const books = useReduxSelector((state) => state.books.data);

  useEffect(() => {
    dispatch(loadBooksRequest());
    dispatch(loadCategoriesRequest());
  }, []);

  return (
    <>
      <Container>
        <Navbar />
        <CatalogBooks
          isFavorites={true}
          books={books.filter((book) => book.isFavorite)}
        />
        <Footer />
      </Container>
    </>
  );
};

export default Favorites;
