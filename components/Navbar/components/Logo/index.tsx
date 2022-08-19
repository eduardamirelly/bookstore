import { BookOpen } from 'phosphor-react';
import { styled, theme } from '../../../../styles/stitches.config';

export const Logo = () => {
  const LogoStyle = styled('div', {
    color: '$gray800',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '$20',
  });

  return (
    <LogoStyle>
      <span>
        <BookOpen size={32} weight="light" />
      </span>
      <span>BookStore</span>
    </LogoStyle>
  );
};
