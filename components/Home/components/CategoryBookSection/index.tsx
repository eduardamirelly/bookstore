import { Path } from 'phosphor-react';
import React from 'react';
import { useReduxSelector } from '../../../../store';
import { Box } from '../../../../styles/Box';
import { TitleH2 } from '../../../../styles/Titles/TitleH2';

interface CategoryBookProps {
  category: string;
}

export const CategoryBookSection: React.FC<CategoryBookProps> = ({
  category,
}) => {
  const books = useReduxSelector((state) => state.books.data);
  if (books.length > 0) {
    books[0].categories.map((categoryObj) => {
      console.log(categoryObj.category.name);
    });
  }

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
        {/* {books.length > 0 ? (
          books.filter(.categories.map(
            (categoryObj) => categoryObj.category.name == category
          ).length > 0 ? (
            <CarouselAutoplay
              sliders={books[0].categories.map(
                (categoryObj) => categoryObj.category.name == category
              )}
            />
          ) : (
            <div>Não tem livros disponível para essa categoria...</div>
          )
        ) : (
          <div>Carregando...</div>
        )} */}
      </Box>
    </Box>
  );
};
