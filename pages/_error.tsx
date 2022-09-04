import { NextPage, NextPageContext } from 'next';
import { ErrorPage } from '../components/ErrorPage';
import { Container } from '../styles/Container';

interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <Container>
      {statusCode === 404 ? (
        <ErrorPage
          subtitle="Opps! This page don't exist"
          description="Please, return to one page existent"
        />
      ) : (
        <ErrorPage
          subtitle="Something went wrong"
          description="Please, refresh the page or try again later"
        />
      )}
    </Container>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
