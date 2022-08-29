import type { NextPage } from 'next';
import { BookDetail } from '../../components/BookDetail';
import { Footer } from '../../components/Footer';
import { CategoryBookSection } from '../../components/Home/components/CategoryBookSection';
import { Navbar } from '../../components/Navbar';
import { Container } from '../../styles/Container';

const Book: NextPage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <BookDetail />
        {/* <CategoryBookSection category="View More" /> */}
        <Footer />
      </Container>
    </>
  );
};

export default Book;
