import { Book } from '../../store/@types/books';
import { Box } from '../../styles/Box';
import { BookCover } from '../BookCover';
import { BookMark } from '../BookMark';
import { BuyButton } from '../BuyButton';
import { LabelPrice } from '../LabelPrice';

interface BookBuyProps {
  book: Book;
}

export const BookBuy = ({ book }: BookBuyProps) => {
  return (
    <Box
      css={{
        flexDirection: 'column',
        maxWidth: '200px',
      }}
    >
      <Box>
        <BookCover id={book.id} imgSrc={book.cover} />
      </Box>

      <Box
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',

          marginBlock: '10px',
        }}
      >
        <LabelPrice price={book.price.toFixed(2)} />
        <BookMark isFavorited={book.isFavorite} />
      </Box>

      <BuyButton onClick={() => {}} />
    </Box>
  );
};
