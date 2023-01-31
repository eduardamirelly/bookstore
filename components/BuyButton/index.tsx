import type * as Stitches from '@stitches/react';
import { ShoppingCartSimple } from 'phosphor-react';
import React from 'react';
import { BuyButtonStyle } from './styles';

interface BuyButtonProps {
  css?: Stitches.CSS;
  onClick: () => void;
}

export const BuyButton: React.FC<BuyButtonProps> = ({ css, onClick }) => {
  return (
    <BuyButtonStyle css={css} onClick={onClick}>
      <ShoppingCartSimple size={32} weight="light" />
    </BuyButtonStyle>
  );
};
