import Image from 'next/image';
import React from 'react';
import { BookCoverStyle } from './styles';

interface BookCoverProps {
  imgSrc: string;
  beforeShadow?: 'on';
}

export const BookCover: React.FC<BookCoverProps> = ({
  imgSrc,
  beforeShadow,
}) => {
  return (
    <BookCoverStyle beforeShadow={beforeShadow}>
      <Image
        src={imgSrc}
        width={200}
        height={298}
        layout="responsive"
        objectFit="cover"
        alt=""
      />
    </BookCoverStyle>
  );
};
