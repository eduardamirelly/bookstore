import Link from 'next/link';
import { BookmarkSimple } from 'phosphor-react';
import { IconClick } from '../../../../styles/IconClick';

export const BookmarkButton = () => {
  return (
    <Link href="/favorites">
      <IconClick>
        <BookmarkSimple size={32} weight="light" />
      </IconClick>
    </Link>
  );
};
