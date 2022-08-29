import { Box } from '../../styles/Box';
import { TitleH2 } from '../../styles/Titles/TitleH2';
import { BookCover } from '../BookCover';
import { BookMark } from '../BookMark';

export const BookDetail = () => {
  return (
    <Box css={{ justifyContent: 'center', gap: '138px', marginTop: '80px' }}>
      <BookCover
        imgSrc="/assets/cover-book.svg"
        beforeShadow="on"
        css={{
          width: '300px',
        }}
      />

      <Box css={{ flexDirection: 'column', justifyContent: 'space-around' }}>
        <Box
          css={{
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
          }}
        >
          <TitleH2>A Hipótese do Amor</TitleH2>
          <BookMark />
        </Box>

        <span>Author</span>
        <span>Description</span>

        <Box>
          <span>Price</span>
          <span>Count</span>
        </Box>

        <Box>
          <span>Shopping Cart</span>
          <span>Buy Now</span>
        </Box>
      </Box>
    </Box>
  );
};
