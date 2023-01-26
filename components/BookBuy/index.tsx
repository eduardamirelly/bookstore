import { Box } from '../../styles/Box';
import { BookCover } from '../BookCover';
import { BookMark } from '../BookMark';
import { BuyButton } from '../BuyButton';
import { LabelPrice } from '../LabelPrice';

interface BookBuyProps {
  imgSrc?: string;
  price: number;
  isFavorited: boolean;
}

export const BookBuy = ({ imgSrc, price, isFavorited }: BookBuyProps) => {
  return (
    <Box
      css={{
        flexDirection: 'column',
        maxWidth: '200px',
      }}
    >
      <Box>
        <BookCover imgSrc={imgSrc} />
      </Box>

      <Box
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',

          marginBlock: '10px',
        }}
      >
        <LabelPrice price={price.toFixed(2)} />
        <BookMark />
      </Box>

      <BuyButton />
    </Box>
  );
};
