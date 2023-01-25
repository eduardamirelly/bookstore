import { Box } from '../../styles/Box';
import { BookCover } from '../BookCover';
import { BookMark } from '../BookMark';
import { BuyButton } from '../BuyButton';
import { LabelPrice } from '../LabelPrice';

interface BookBuyProps {
  imgSrc?: string;
}

export const BookBuy = ({ imgSrc }: BookBuyProps) => {
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
        <LabelPrice price="30.00" />
        <BookMark />
      </Box>

      <BuyButton />
    </Box>
  );
};
