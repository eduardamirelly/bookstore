import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Footer } from '../components/Footer';
import { CategoriesSection } from '../components/Home/components/CategoriesSection';
import { CategoryBookSection } from '../components/Home/components/CategoryBookSection';
import { HeroSection } from '../components/Home/components/HeroSection';
import { TrendingBooksSection } from '../components/Home/components/TrendingBooksSection';
import { Navbar } from '../components/Navbar';
import { loadBooksRequest } from '../store/features/books';
import { loadCategoriesRequest } from '../store/features/categories';
import { Container } from '../styles/Container';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooksRequest());
    dispatch(loadCategoriesRequest());
  }, []);

  return (
    <Container>
      <Navbar />
      <HeroSection />
      <TrendingBooksSection />
      <CategoriesSection />
      <CategoryBookSection category="Romance" />
      <CategoryBookSection category="Adventure" />
      <Footer />
    </Container>
  );
};

export default Home;
