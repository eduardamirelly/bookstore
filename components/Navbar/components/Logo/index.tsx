import { BookOpen } from 'phosphor-react';
import { LogoStyle } from './styles';

export const Logo = () => {
  return (
    <LogoStyle href="/">
      <span>
        <BookOpen size={32} weight="light" />
      </span>
      <span>BookStore</span>
    </LogoStyle>
  );
};
