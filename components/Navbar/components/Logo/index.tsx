import Link from 'next/link';
import { BookOpen } from 'phosphor-react';
import { LogoStyle } from './styles';

export const Logo = () => {
  return (
    <Link href="/">
      <LogoStyle>
        <span>
          <BookOpen size={32} weight="light" />
        </span>
        <span>BookStore</span>
      </LogoStyle>
    </Link>
  );
};
