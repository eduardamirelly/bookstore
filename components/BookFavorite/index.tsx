import { BookmarkSimple, Trash } from 'phosphor-react';
import { Box } from '../../styles/Box';
import { BookCover } from '../BookCover';
import { BookMarkerStyle, BookUnMarker } from './styles';

interface BookFavoriteProps {
  imgSrc?: string;
  id?: string;
}

export const BookFavorite = ({ imgSrc, id }: BookFavoriteProps) => {
  return (
    <Box css={{ position: 'relative' }}>
      <BookCover id={id} imgSrc={imgSrc} />

      <BookMarkerStyle>
        <BookmarkSimple size={32} weight="regular" />
      </BookMarkerStyle>

      <BookUnMarker>
        <Trash size={32} weight="regular" />
      </BookUnMarker>
    </Box>
  );
};
