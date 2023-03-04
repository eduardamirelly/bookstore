import { Trash } from 'phosphor-react';
import { Book } from '../../../../../../store/@types/books';
import { Box } from '../../../../../../styles/Box';
import { IconClick } from '../../../../../../styles/IconClick';
import { TextLarge } from '../../../../../../styles/Texts/TextLarge';
import { TextSmall } from '../../../../../../styles/Texts/TextSmall';
import { TextXSmall } from '../../../../../../styles/Texts/TextXSmall';
import { BookCover } from '../../../../../BookCover';
import { CountBooks } from '../../../../../CountBooks';
import { BookInCartStyle } from './styles';

interface BookInCartProps {
  book: Book;
}

export const BookInCart = ({ book }: BookInCartProps) => (
  <BookInCartStyle>
    <Box
      justify="between"
      css={{
        gap: '1.25rem',
      }}
    >
      <BookCover
        css={{
          minWidth: '70px',
          minHeight: '104px',
          '@sm': { minWidth: '100px', minHeight: '148px' },
        }}
      />

      <Box css={{ flexGrow: 2 }}>
        <Box
          direction="column"
          justify="between"
          css={{
            color: '$gray600',
            flexGrow: '2',
          }}
        >
          <Box direction="column" gap="10">
            <TextSmall>{book.title}</TextSmall>
            <TextXSmall>{book.author}</TextXSmall>
          </Box>

          <CountBooks />
        </Box>

        <Box
          direction="column"
          justify="between"
          align="end"
          css={{
            color: '$gray600',
          }}
        >
          <TextLarge css={{ color: '$orange500', marginTop: '-5px' }}>
            ${book.price}
          </TextLarge>

          <IconClick>
            <Trash size={32} weight="light" />
          </IconClick>
        </Box>
      </Box>
    </Box>
  </BookInCartStyle>
);
