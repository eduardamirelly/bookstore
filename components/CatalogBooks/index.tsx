import { useEffect, useState } from 'react';
import { useReduxSelector } from '../../store';
import { Book } from '../../store/@types/books';
import { Box } from '../../styles/Box';
import { BookBuy } from '../BookBuy';
import { BookFavorite } from '../BookFavorite';
import { Filters } from '../Filters';
import { SelectInput } from '../Filters/components/SelectInput';
import { InputSearch } from '../InputSearch';
import { useSearch } from '../../hooks/useSearch';

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

  const { handleInputText } = useSearch();

  return (
    <Box
      direction="column"
      justify="center"
      align="center"
    >
      <Box
        justify="center"
        css={{
          width: '100%',
          '@md': { width: '535px' },
        }}
      >
        <InputSearch onChange={handleInputText} />
      </Box>

      <Filters>
        <SelectInput
          selectInitial="Categories"
          collection={optionsCategory}
          css={{ width: '308px' }}
        />
        <SelectInput selectInitial="Sort By" collection={['Book title']} css={{ width: '168px' }} />
        <SelectInput isRequired selectInitial="Order By" collection={['ASC', 'DESC']} css={{ width: '168px' }} />
      </Filters>

      <Box
        direction="column"
        justify="start"
        align="center"
        gap="30"
        wrap="wrap"
        css={{
          width: '100%',
          marginTop: '70px',

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
