import { ShoppingCartSimple } from 'phosphor-react';
import { BuyButtonStyle } from './styles';

export const BuyButton = () => {
  return (
    <BuyButtonStyle>
      <ShoppingCartSimple size={32} weight="light" />
    </BuyButtonStyle>
  );
};
