import React from 'react';

import type * as Stitches from '@stitches/react';

import { TextLarge } from '../../styles/Texts/TextLarge';
import { LabelStyle } from './styles';

interface LabelPriceProps {
  price: string;
  css?: Stitches.CSS;
}

export const LabelPrice: React.FC<LabelPriceProps> = ({ price, css }) => {
  return (
    <LabelStyle css={css}>
      <TextLarge>${price}</TextLarge>
    </LabelStyle>
  );
};
