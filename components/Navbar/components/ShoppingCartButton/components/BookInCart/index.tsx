import { Trash } from 'phosphor-react';
import { Box } from '../../../../../../styles/Box';
import { IconClick } from '../../../../../../styles/IconClick';
import { TextLarge } from '../../../../../../styles/Texts/TextLarge';
import { TextSmall } from '../../../../../../styles/Texts/TextSmall';
import { TextXSmall } from '../../../../../../styles/Texts/TextXSmall';
import { BookCover } from '../../../../../BookCover';
import { CountBooks } from '../../../../../CountBooks';
import { BookInCartStyle } from './styles';

export const BookInCart = () => (
  <BookInCartStyle>
    <Box
      css={{
        justifyContent: 'space-between',
        gap: '20px',
      }}
    >
      <BookCover
        imgSrc="/assets/cover-book.svg"
        css={{
          minWidth: '70px',
          minHeight: '104px',
          '@sm': { minWidth: '100px', minHeight: '148px' },
        }}
      />

      <Box css={{ flexGrow: 2 }}>
        <Box
          css={{
            color: '$gray600',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: '2',
          }}
        >
          <Box css={{ flexDirection: 'column', gap: '10px' }}>
            <TextSmall>Book Name...</TextSmall>
            <TextXSmall>Author Name...</TextXSmall>
          </Box>

          <CountBooks />
        </Box>

        <Box
          css={{
            color: '$gray600',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <TextLarge css={{ color: '$orange500', marginTop: '-5px' }}>
            $30.00
          </TextLarge>

          <IconClick>
            <Trash size={32} weight="light" />
          </IconClick>
        </Box>
      </Box>
    </Box>
  </BookInCartStyle>
);
