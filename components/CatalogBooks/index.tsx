import { Box } from '../../styles/Box';
import { BookBuy } from '../BookBuy';
import { Filters } from '../Filters';
import { InputSearch } from '../InputSearch';

interface CatalogBooksProps {
  isFavorites: boolean;
}

export const CatalogBooks: React.FC<CatalogBooksProps> = ({ isFavorites }) => {
  return (
    <Box
      css={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        css={{
          justifyContent: 'center',
          width: '100%',
          '@md': { width: '535px' },
        }}
      >
        <InputSearch />
      </Box>

      <Filters />

      <Box
        css={{
          width: '100%',
          justifyContent: 'flex-start',
          gap: '75px',
          marginTop: '70px',
        }}
      >
        {isFavorites ? <h1>Livros favoritados</h1> : <BookBuy />}
      </Box>
    </Box>
  );
};
