import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BookDetail } from '../../components/BookDetail';
import { CategoryBookSection } from '../../components/Home/components/CategoryBookSection';
import { useReduxSelector } from '../../store';
import { loadBooksRequest } from '../../store/features/books';
import Layout from '../../templates/Layout';

const Book: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;

  const books = useReduxSelector((state) => state.books.data);
  const bookDetail = books.find((book) => book.id === slug);

  useEffect(() => {
    dispatch(loadBooksRequest());
  }, []);

  return (
    <>
      <Layout>
        <BookDetail book={bookDetail} />
        <CategoryBookSection category="View More" />
      </Layout>
    </>
  );
};

export default Book;
