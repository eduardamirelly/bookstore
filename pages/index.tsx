import type { NextPage } from 'next';
import { Footer } from '../components/Footer';
import { CategoriesSection } from '../components/Home/components/CategoriesSection';
import { CategoryBookSection } from '../components/Home/components/CategoryBookSection';
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
      <CategoryBookSection category="Romance" />
      <CategoryBookSection category="Adventure" />
      <Footer />
    </Container>
  );
};

export default Home;
