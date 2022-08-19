import type { NextPage } from 'next';
import { HeroSection } from '../components/Home/components/HeroSection';
import { Navbar } from '../components/Navbar';
import { Container } from '../styles/Container';

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
    </Container>
  );
};

export default Home;
