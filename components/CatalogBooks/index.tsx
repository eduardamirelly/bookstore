import { Box } from '../../styles/Box';
import { BookBuy } from '../BookBuy';
import { BookFavorite } from '../BookFavorite';
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
          alignItems: 'center',

          gap: '30px',
          marginTop: '70px',

          flexWrap: 'wrap',
          flexDirection: 'column',

          '@sm': {
            flexDirection: 'row',
          },
        }}
      >
        {isFavorites ? (
          <>
            <BookFavorite />
            <BookFavorite />
            <BookFavorite />
            <BookFavorite />
          </>
        ) : (
          <>
            <BookBuy />
            <BookBuy />
            <BookBuy />
            <BookBuy />
          </>
        )}
      </Box>
    </Box>
  );
};
