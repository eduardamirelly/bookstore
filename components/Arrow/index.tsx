import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import { PaginationStyle } from './styles';

interface ArrowProps {
  isRight: boolean;
}

export const Arrow: React.FC<ArrowProps> = ({ isRight }) => {
  return (
    <PaginationStyle>
      {isRight ? (
        <CaretRight size={32} weight="light" />
      ) : (
        <CaretLeft size={32} weight="light" />
      )}
    </PaginationStyle>
  );
};
