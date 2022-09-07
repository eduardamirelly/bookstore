import { Path } from 'phosphor-react';
import React from 'react';
import { Box } from '../../../../styles/Box';
import { TitleH2 } from '../../../../styles/Titles/TitleH2';
import { CarouselClick } from './components/CarouselAutoplay';

interface CategoryBookProps {
  category: string;
}

export const CategoryBookSection: React.FC<CategoryBookProps> = ({
  category,
}) => {
  return (
    <Box
      css={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '150px',
        gap: '36px',
      }}
    >
      <TitleH2
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          alignSelf: 'flex-start',
        }}
      >
        <Path size={36} weight="regular" />
        {category}
      </TitleH2>

      <Box
        css={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <CarouselClick />
      </Box>
    </Box>
  );
};
