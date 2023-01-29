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
      css={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: '80px',
        marginTop: '80px',
        flexDirection: 'column',

        '@lg': {
          gap: '138px',
          flexDirection: 'row',
        },
      }}
    >
      <BookCover
        // beforeShadow
        canRedirect={false}
        imgSrc={book?.cover}
        css={{
          width: '300px',
        }}
      />

      <Box css={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Box
          css={{
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px',

            flexDirection: 'column',

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

          <Box css={{ gap: '20px' }}>
            <BookMark isFavorited={book?.isFavorite} />

            <BuyButton
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
          css={{
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '50px',

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
          css={{
            gap: '18px',
            marginTop: '20px',
            flexWrap: 'wrap-reverse',

            '@md': { flexWrap: 'nowrap' },
          }}
        >
          <BuyButton />
          <BuyNowButton />
        </Box>
      </Box>
    </Box>
  );
};
