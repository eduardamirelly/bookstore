import { useDispatch } from 'react-redux';
import { Book } from '../../store/@types/books';
import { addBookOnCart } from '../../store/features/booksOnCart';
import { Box } from '../../styles/Box';
import { BookCover } from '../BookCover';
import { BookMark } from '../BookMark';
import { BuyButton } from '../BuyButton';
import { LabelPrice } from '../LabelPrice';

interface BookBuyProps {
  book: Book;
}

export const BookBuy = ({ book }: BookBuyProps) => {
  const dispatch = useDispatch();

  const handleAddBookOnCart = () => {
    dispatch(addBookOnCart(book));
  };

  return (
    <Box
      direction="column"
      css={{
        maxWidth: '200px',
      }}
    >
      <Box>
        <BookCover id={book.id} imgSrc={book.cover} />
      </Box>

      <Box
        justify="between"
        align="center"
        css={{
          marginBlock: '10px',
        }}
      >
        <LabelPrice price={book.price.toFixed(2)} />
        <BookMark isFavorited={book.isFavorite} />
      </Box>

      <BuyButton onClick={handleAddBookOnCart} />
    </Box>
  );
};
