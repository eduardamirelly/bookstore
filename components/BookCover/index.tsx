import type * as Stitches from '@stitches/react';
import Image from 'next/image';
import React from 'react';
import { AfterBlock, BookCoverStyle, TouchableBookStyle } from './styles';

interface BookCoverProps {
  imgSrc?: string;
  beforeShadow?: boolean;
  css?: Stitches.CSS;
  id?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({
  imgSrc = '/assets/cover-example.webp',
  beforeShadow,
  css,
  id,
}) => {
  return (
    <TouchableBookStyle
      href={{
        path: '/book',
        query: {
          slug: id,
        },
      }}
    >
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
