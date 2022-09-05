import Link from 'next/link';
import { BookmarkSimple } from 'phosphor-react';
import { IconClick } from '../../../../styles/IconClick';

export const BookmarkButton = () => {
  return (
    <Link href="/favorites">
      <a>
        <IconClick>
          <BookmarkSimple size={32} weight="light" />
        </IconClick>
      </a>
    </Link>
  );
};
