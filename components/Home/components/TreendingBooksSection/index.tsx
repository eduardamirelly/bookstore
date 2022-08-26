import { Sparkle } from 'phosphor-react';
import { Box } from '../../../../styles/Box';
import { TextXSmall } from '../../../../styles/Texts/TextXSmall';
import { TitleH2 } from '../../../../styles/Titles/TitleH2';
import { BookCover } from '../../../BookCover';
import { BannerDash } from './styles';

export const TreendingBooksSection = () => {
  return (
    <Box
      css={{
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '150px',

        '@lg': {
          marginTop: '220px',
        },
      }}
    >
      <TitleH2>Treending Books</TitleH2>

      <TextXSmall
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <Sparkle size={16} weight="regular" />
        Scroll to explore
      </TextXSmall>

      <BannerDash>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </BannerDash>
    </Box>
  );
};
