import { Path } from 'phosphor-react';
import React from 'react';
import { Box } from '../../../../styles/Box';
import { TitleH2 } from '../../../../styles/Titles/TitleH2';
import { Arrow } from '../../../Arrow';
import { BookBuy } from '../../../BookBuy';

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
      <Box
        css={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
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
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Arrow isRight={false} />
          <Arrow isRight={true} />
        </Box>
      </Box>

      <Box
        css={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '50px',
          flexDirection: 'column',

          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        <BookBuy />
        <BookBuy />
        <BookBuy />
        <BookBuy />
        <BookBuy />
      </Box>
    </Box>
  );
};
