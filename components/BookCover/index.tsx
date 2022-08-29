import type * as Stitches from '@stitches/react';
import Image from 'next/image';
import React from 'react';
import { BookCoverStyle } from './styles';

interface BookCoverProps {
  imgSrc: string;
  beforeShadow?: 'on';
  css?: Stitches.CSS;
}

export const BookCover: React.FC<BookCoverProps> = ({
  imgSrc,
  beforeShadow,
  css,
}) => {
  return (
    <BookCoverStyle beforeShadow={beforeShadow} css={css}>
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
