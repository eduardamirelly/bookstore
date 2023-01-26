import type * as Stitches from '@stitches/react';
import Image from 'next/image';
import React from 'react';
import { AfterBlock, BookCoverStyle, TouchableBookStyle } from './styles';

interface BookCoverProps {
  imgSrc?: string;
  beforeShadow?: boolean;
  css?: Stitches.CSS;
  to?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({
  imgSrc = '/assets/cover-example.webp',
  beforeShadow,
  css,
  to,
}) => {
  return (
    <TouchableBookStyle href={to}>
      <BookCoverStyle css={css}>
        <Image
          src={imgSrc}
          width={200}
          height={298}
          layout="responsive"
          objectFit="cover"
          alt=""
        />
      </BookCoverStyle>
      {beforeShadow && <AfterBlock />}
    </TouchableBookStyle>
  );
};
