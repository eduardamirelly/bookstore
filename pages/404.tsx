import { ErrorPage } from '../components/ErrorPage';
import { Container } from '../styles/Container';

const Custom404 = () => {
  return (
    <Container>
      <ErrorPage
        subtitle="Opps! This page don't exist"
        description="Please, return to one page existent"
      />
    </Container>
  );
};

export default Custom404;
