import { Path } from 'phosphor-react';
import React from 'react';
import { Box } from '../../../../styles/Box';
import { TitleH2 } from '../../../../styles/Titles/TitleH2';
import { BookBuy } from '../../../BookBuy';

interface CategorieBookProps {
  categorie: string;
}

export const CategorieBookSection: React.FC<CategorieBookProps> = ({
  categorie,
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
        {categorie}
      </TitleH2>

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
