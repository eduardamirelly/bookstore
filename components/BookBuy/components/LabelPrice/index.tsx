import React from 'react';
import { TextLarge } from '../../../../styles/Texts/TextLarge';
import { LabelStyle } from './styles';

interface LabelPriceProps {
  price: string;
}

export const LabelPrice: React.FC<LabelPriceProps> = ({ price }) => {
  return (
    <LabelStyle>
      <TextLarge>${price}</TextLarge>
    </LabelStyle>
  );
};
