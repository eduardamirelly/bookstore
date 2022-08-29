import type * as Stitches from '@stitches/react';
import { ShoppingCartSimple } from 'phosphor-react';
import React from 'react';
import { BuyButtonStyle } from './styles';

interface BuyButtonProps {
  css?: Stitches.CSS;
}

export const BuyButton: React.FC<BuyButtonProps> = ({ css }) => {
  return (
    <BuyButtonStyle css={css}>
      <ShoppingCartSimple size={32} weight="light" />
    </BuyButtonStyle>
  );
};
