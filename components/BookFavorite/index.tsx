import { BookmarkSimple, Trash } from 'phosphor-react';
import { Box } from '../../styles/Box';
import { BookCover } from '../BookCover';
import { BookMarkerStyle, BookUnMarker } from './styles';

export const BookFavorite = () => {
  return (
    <Box css={{ position: 'relative' }}>
      <BookCover />

      <BookMarkerStyle>
        <BookmarkSimple size={32} weight="regular" />
      </BookMarkerStyle>

      <BookUnMarker>
        <Trash size={32} weight="regular" />
      </BookUnMarker>
    </Box>
  );
};
