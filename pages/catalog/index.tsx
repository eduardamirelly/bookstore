import type { NextPage } from 'next';
import { CatalogBooks } from '../../components/CatalogBooks';
import Layout from '../../templates/Layout';

const Catalog: NextPage = () => {
  return (
    <>
      <Layout>
        <CatalogBooks isFavorite={false} />
      </Layout>
    </>
  );
};

export default Catalog;
