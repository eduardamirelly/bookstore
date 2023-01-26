import { Book } from '../../store/@types/books';
import { Box } from '../../styles/Box';
import { BookBuy } from '../BookBuy';
import { BookFavorite } from '../BookFavorite';
import { Filters } from '../Filters';
import { InputSearch } from '../InputSearch';

interface CatalogBooksProps {
  isFavorites: boolean;
  books: Book[];
}

export const CatalogBooks: React.FC<CatalogBooksProps> = ({
  isFavorites,
  books,
}) => {
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
            {books.map((book) => (
              <BookFavorite key={book.id} imgSrc={book.cover} />
            ))}
          </>
        ) : (
          <>
            {books.map((book) => (
              <BookBuy
                key={book.id}
                imgSrc={book.cover}
                isFavorited={book.isFavorite}
                price={book.price}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};
