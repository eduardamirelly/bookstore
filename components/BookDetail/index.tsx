import { Box } from '../../styles/Box';
import { TitleH2 } from '../../styles/Titles/TitleH2';
import { BookCover } from '../BookCover';
import { BookMark } from '../BookMark';
import { LabelInfo } from './components/LabelInfo';

export const BookDetail = () => {
  return (
    <Box
      css={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: '80px',
        marginTop: '80px',
        flexDirection: 'column',

        '@lg': {
          gap: '138px',
          flexDirection: 'row',
          alignItems: 'flex-start',
        },
      }}
    >
      <BookCover
        imgSrc="/assets/cover-book.svg"
        beforeShadow="on"
        css={{
          width: '300px',
        }}
      />

      <Box css={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Box
          css={{
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '50px',

            '@lg': {
              gap: '100px',
            },
          }}
        >
          <TitleH2
            css={{
              fontSize: '$24',

              '@sm': {
                fontSize: '$36',
              },
            }}
          >
            A Hipótese do Amor
          </TitleH2>
          <BookMark />
        </Box>

        <LabelInfo>Author (a): Name Author</LabelInfo>
        <LabelInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </LabelInfo>

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
