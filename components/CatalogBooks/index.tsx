import { useEffect, useState } from 'react';
import { useReduxSelector } from '../../store';
import { Book } from '../../store/@types/books';
import { Box } from '../../styles/Box';
import { BookBuy } from '../BookBuy';
import { BookFavorite } from '../BookFavorite';
import { Filters } from '../Filters';
import { SelectInput } from '../Filters/components/SelectInput';
import { InputSearch } from '../InputSearch';

interface CatalogBooksProps {
  isFavorites: boolean;
  books: Book[];
}

export const CatalogBooks: React.FC<CatalogBooksProps> = ({
  isFavorites,
  books,
}) => {
  const categories = useReduxSelector((state) => state.categories.data);
  const [optionsCategory, setOptionsCategory] = useState<string[]>([]);

  useEffect(() => {
    if (categories.length > 0) {
      setOptionsCategory(
        categories.map((category) => {
          return category.name;
        })
      );
    }
  }, [categories]);

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

      <Filters>
        <SelectInput
          selectInitial="Categories"
          collection={optionsCategory}
          css={{ width: '308px' }}
        />
        <SelectInput selectInitial="Filter By" css={{ width: '168px' }} />
      </Filters>

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
              <BookFavorite key={book.id} id={book.id} imgSrc={book.cover} />
            ))}
          </>
        ) : (
          <>
            {books.map((book) => (
              <BookBuy key={book.id} book={book} />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};
