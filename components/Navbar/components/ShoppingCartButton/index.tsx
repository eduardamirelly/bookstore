import { ShoppingCart } from 'phosphor-react';
import { IconClick } from '../../../../styles/IconClick';

export const ShoppingCartButton = () => {
  return (
    <IconClick>
      <ShoppingCart size={32} weight="light" />
    </IconClick>
  );
};
