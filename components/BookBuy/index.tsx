import { Box } from '../../styles/Box';
import { BookCover } from '../BookCover';
import { BookMark } from '../BookMark';
import { BuyButton } from '../BuyButton';
import { LabelPrice } from '../LabelPrice';

interface BookBuyProps {
  imgSrc?: string;
  price: number;
  isFavorited: boolean;
  id: string;
}

export const BookBuy = ({ imgSrc, price, isFavorited, id }: BookBuyProps) => {
  return (
    <Box
      css={{
        flexDirection: 'column',
        maxWidth: '200px',
      }}
    >
      <Box>
        <BookCover id={id} imgSrc={imgSrc} />
      </Box>

      <Box
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',

          marginBlock: '10px',
        }}
      >
        <LabelPrice price={price.toFixed(2)} />
        <BookMark isFavorited={isFavorited} />
      </Box>

      <BuyButton />
    </Box>
  );
};
