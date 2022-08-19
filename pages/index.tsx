import type { NextPage } from 'next';
import { Navbar } from '../components/Navbar';
import { Container } from '../styles/Container';
import { Grid } from '../styles/Grid';

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <Grid>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
      </Grid>
    </Container>
  );
};

export default Home;
