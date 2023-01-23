import { Box } from '../../styles/Box';
import { TextExtraLarge } from '../../styles/Texts/TextExtraLarge';
import { TitleH2 } from '../../styles/Titles/TitleH2';
import { BookCover } from '../BookCover';
import { BookMark } from '../BookMark';
import { BuyButton } from '../BuyButton';
import { BuyNowButton } from '../BuyNowButton';
import { CountBooks } from '../CountBooks';
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
        },
      }}
    >
      <BookCover
        beforeShadow
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
            A Hipótese do Amor
          </TitleH2>

          <Box css={{ gap: '20px' }}>
            <BookMark />

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

        <LabelInfo>Author (a): Name Author</LabelInfo>
        <LabelInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </LabelInfo>

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
          <TextExtraLarge css={{ color: '$orange500' }}>$30.00</TextExtraLarge>
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
