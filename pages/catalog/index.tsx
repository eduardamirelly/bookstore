import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CatalogBooks } from '../../components/CatalogBooks';
import { useReduxSelector } from '../../store';
import { loadBooksRequest } from '../../store/features/books';
import { loadCategoriesRequest } from '../../store/features/categories';
import Layout from '../../templates/Layout';

const Catalog: NextPage = () => {
  const dispatch = useDispatch();
  const books = useReduxSelector((state) => state.books.data);

  useEffect(() => {
    dispatch(loadBooksRequest());
    dispatch(loadCategoriesRequest());
  }, []);

  return (
    <>
      <Layout>
        <CatalogBooks isFavorites={false} books={books} />
      </Layout>
    </>
  );
};

export default Catalog;
