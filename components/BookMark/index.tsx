import { BookmarkSimple } from 'phosphor-react';
import { useState } from 'react';
import { MarkStyle } from './styles';

interface BookMarkProps {
  isFavorited?: boolean;
}

export const BookMark = ({ isFavorited }: BookMarkProps) => {
  const [isMarked, setIsMarked] = useState(isFavorited);

  return (
    <MarkStyle
      mark={isMarked ? 'active' : 'off'}
      onClick={() => setIsMarked(!isMarked)}
    >
      <BookmarkSimple size={28} weight="regular" />
    </MarkStyle>
  );
};
