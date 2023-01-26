import { Path } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { useReduxSelector } from '../../../../store';
import { Book } from '../../../../store/@types/books';
import { Box } from '../../../../styles/Box';
import { TitleH2 } from '../../../../styles/Titles/TitleH2';
import { CarouselAutoplay } from './components/CarouselAutoplay';

interface CategoryBookProps {
  category: string;
}

export const CategoryBookSection: React.FC<CategoryBookProps> = ({
  category,
}) => {
  const [booksFiltered, setBooksFiltered] = useState<Book[]>([]);
  const books = useReduxSelector((state) => state.books.data);

  useEffect(() => {
    if (books.length > 0) {
      setBooksFiltered(
        books.filter(
          (book) =>
            book.categories.filter((catObj) => catObj.category.name == category)
              .length > 0
        )
      );
    }
    console.log(booksFiltered);
  }, [books]);

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
        {books.length > 0 ? (
          booksFiltered.length > 0 ? (
            <CarouselAutoplay sliders={booksFiltered} />
          ) : (
            <div>Não tem livros disponível para essa categoria...</div>
          )
        ) : (
          <div>Carregando...</div>
        )}
      </Box>
    </Box>
  );
};
