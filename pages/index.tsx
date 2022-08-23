import type { NextPage } from 'next';
import { CategoriesSection } from '../components/Home/components/CategoriesSection';
import { HeroSection } from '../components/Home/components/HeroSection';
import { TreendingBooksSection } from '../components/Home/components/TreendingBooksSection';
import { Navbar } from '../components/Navbar';
import { Container } from '../styles/Container';

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <TreendingBooksSection />
      <CategoriesSection />
    </Container>
  );
};

export default Home;
