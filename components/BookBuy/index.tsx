import { Box } from '../../styles/Box';
import { BookCover } from '../BookCover';
import { BuyButton } from '../BuyButton';
import { LabelPrice } from './components/LabelPrice';
import { MarkBook } from './components/MarkBook';

export const BookBuy = () => {
  return (
    <Box
      css={{
        flexDirection: 'column',
      }}
    >
      <Box>
        <BookCover imgSrc="/assets/cover-book.svg" />
      </Box>

      <Box
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',

          marginTop: '10px',
        }}
      >
        <LabelPrice price="30.00" />
        <MarkBook />
      </Box>

      <BuyButton />
    </Box>
  );
};
