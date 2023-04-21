import type { NextPage } from 'next';
import { CatalogBooks } from '../../components/CatalogBooks';
import Layout from '../../templates/Layout';

const Favorites: NextPage = () => {
  return (
    <>
      <Layout>
        <CatalogBooks
          isFavorite={true}
        />
      </Layout>
    </>
  );
};

export default Favorites;
