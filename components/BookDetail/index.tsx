import { Book } from '../../store/@types/books';
import { Box } from '../../styles/Box';
import { TextExtraLarge } from '../../styles/Texts/TextExtraLarge';
import { TitleH2 } from '../../styles/Titles/TitleH2';
import { BookCover } from '../BookCover';
import { BookMark } from '../BookMark';
import { BuyButton } from '../BuyButton';
import { BuyNowButton } from '../BuyNowButton';
import { CountBooks } from '../CountBooks';
import { LabelInfo } from './components/LabelInfo';

interface BookDetailProps {
  book?: Book;
}

export const BookDetail = ({ book }: BookDetailProps) => {
  return (
    <Box
      direction="column"
      justify="center"
      align="center"
      gap="80"
      css={{
        marginTop: '80px',

        '@lg': {
          gap: '138px',
          flexDirection: 'row',
        },
      }}
    >
      <BookCover
        canRedirect={false}
        imgSrc={book?.cover}
        css={{
          width: '300px',
        }}
      />

      <Box direction="column" justify="start">
        <Box
          direction="column"
          justify="between"
          align="center"
          gap="30"
          css={{
            '@lg': {
              gap: '100px',
              flexDirection: 'row',
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
            {book?.title}
          </TitleH2>

          <Box gap="20">
            <BookMark isFavorited={book?.isFavorite} />

            <BuyButton
              onClick={() => {}}
              css={{
                minWidth: '57px',
                height: '48px',

                '@lg': {
                  display: 'none',
                },
              }}
            />
          </Box>
        </Box>

        <LabelInfo>Author (a): {book?.author}</LabelInfo>
        <LabelInfo>{book?.description}</LabelInfo>

        <Box
          justify="between"
          align="center"
          gap="50"
          css={{
            marginTop: '50px',

            '@lg': {
              gap: '100px',
            },
          }}
        >
          <TextExtraLarge css={{ color: '$orange500' }}>
            ${book?.price.toFixed(2)}
          </TextExtraLarge>
          <CountBooks />
        </Box>

        <Box
          gap="20"
          wrap="rwrap"
          css={{
            marginTop: '20px',

            '@md': { flexWrap: 'nowrap' },
          }}
        >
          <BuyButton onClick={() => {}} />
          <BuyNowButton />
        </Box>
      </Box>
    </Box>
  );
};
