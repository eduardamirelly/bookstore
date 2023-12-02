import { useCallback, useEffect, useState } from 'react';
import { useReduxSelector } from '../../store';
import { Box } from '../../styles/Box';
import { BookBuy } from '../BookBuy';
import { BookFavorite } from '../BookFavorite';
import { Filters } from '../Filters';
import { SelectInput } from '../Filters/components/SelectInput';
import { InputSearch } from '../InputSearch';
import { useSearch } from '../../hooks/useSearch';

interface CatalogBooksProps {
  isFavorite: boolean;
}

export const CatalogBooks: React.FC<CatalogBooksProps> = ({
  isFavorite,
}) => {
  const categories = useReduxSelector((state) => state.categories.data) || [];
  const [optionsCategory, setOptionsCategory] = useState<string[]>([]);

  const {
    handleInputText,
    handleOrderBy,
    handleSetBooksFiltered,
    search,
    booksFiltered,
  } = useSearch();

  useEffect(() => {
    if (categories.length > 0) {
      setOptionsCategory(
        categories.map((category) => {
          return category.name;
        })
      );
    }

    if (isFavorite && booksFiltered.length > 0) {
      handleSetBooksFiltered(booksFiltered.filter((book) => book.isFavorite));
    }
  }, [categories, booksFiltered]);

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
        <InputSearch onChange={(e) => handleInputText(e.target.value)} />
      </Box>

      <Filters valueSearch={search}>
        <SelectInput
          onSelect={() => {}}
          selectInitial="Categories"
          collection={optionsCategory}
          css={{ width: '308px' }}
        />
        <SelectInput onSelect={() => {}} selectInitial="Sort By" collection={['Book title']} css={{ width: '168px' }} />
        <SelectInput onSelect={handleOrderBy} isRequired selectInitial="Order By" collection={['ASC', 'DESC']} css={{ width: '168px' }} />
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
        {isFavorite ? (
          <>
            {booksFiltered.map((book) => (
              <BookFavorite key={book.id} id={book.id} imgSrc={book.cover} />
            ))}
          </>
        ) : (
          <>
            {booksFiltered.map((book) => (
              <BookBuy key={book.id} book={book} />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};
