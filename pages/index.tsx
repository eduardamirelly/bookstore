import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CategoriesSection } from '../components/Home/components/CategoriesSection';
import { CategoryBookSection } from '../components/Home/components/CategoryBookSection';
import { HeroSection } from '../components/Home/components/HeroSection';
import { TrendingBooksSection } from '../components/Home/components/TrendingBooksSection';
import { loadBooksRequest } from '../store/features/books';
import { loadCategoriesRequest } from '../store/features/categories';
import Layout from '../templates/Layout';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksRequest());
    dispatch(loadCategoriesRequest());
  }, []);

  return (
    <Layout>
      <HeroSection />
      <TrendingBooksSection />
      <CategoriesSection />
      <CategoryBookSection category="Romance" />
      <CategoryBookSection category="Adventure" />
    </Layout>
  );
};

export default Home;
