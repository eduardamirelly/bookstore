import React from 'react';
import { TextSmall } from '../../../../styles/Texts/TextSmall';
import { DashBG } from './styles';

interface LabelInfoProps {
  children: React.ReactNode;
}

export const LabelInfo: React.FC<LabelInfoProps> = ({ children }) => {
  return (
    <DashBG>
      <TextSmall>{children}</TextSmall>
    </DashBG>
  );
};
