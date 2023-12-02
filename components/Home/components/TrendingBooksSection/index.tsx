import { Sparkle } from 'phosphor-react';
import { useReduxSelector } from '../../../../store';
import { Box } from '../../../../styles/Box';
import { TextXSmall } from '../../../../styles/Texts/TextXSmall';
import { TitleH2 } from '../../../../styles/Titles/TitleH2';
import { Carousel } from './components/Carousel';
import { BannerDash } from './styles';
import { Loading } from '../../../Loading';

export const TrendingBooksSection = () => {
  const books = useReduxSelector((state) => state.books.data);

  return (
    <Box
      direction="column"
      align="center"
      css={{
        marginTop: '150px',

        '@lg': {
          marginTop: '220px',
        },
      }}
    >
      <TitleH2 css={{ marginBottom: '1rem' }}>Treending Books</TitleH2>

      <TextXSmall
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <Sparkle size={16} weight="regular" />
        Drag to explore
      </TextXSmall>

      <BannerDash>
        {books.length > 0 && books.filter((book) => book.isInTrending) ? (
          <Carousel sliders={books.filter((book) => book.isInTrending)} />
        ) : (
          // <div>Carregando...</div>
          <Loading />
        )}
      </BannerDash>
    </Box>
  );
};
