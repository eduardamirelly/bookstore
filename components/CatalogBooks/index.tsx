import { Box } from '../../styles/Box';
import { BookBuy } from '../BookBuy';
import { Filters } from '../Filters';
import { InputSearch } from '../InputSearch';

export const CatalogBooks = () => {
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
        <BookBuy />
        {/* <BookBuy />
        <BookBuy />
        <BookBuy />
        <BookBuy /> */}
      </Box>
    </Box>
  );
};
