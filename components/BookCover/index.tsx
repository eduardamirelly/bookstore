import type * as Stitches from '@stitches/react';
import Image from 'next/image';
import React from 'react';
import { AfterBlock, BookCoverStyle, TouchableBookStyle } from './styles';

interface BookCoverProps {
  imgSrc?: string;
  beforeShadow?: boolean;
  css?: Stitches.CSS;
  id?: string;
  canRedirect?: boolean;
  width?: number;
  height?: number;
}

export const BookCover: React.FC<BookCoverProps> = ({
  imgSrc = '/assets/cover-example.webp',
  beforeShadow,
  css,
  id,
  canRedirect = true,
  width = 200,
  height = 298,
}) => {
  return (
    <TouchableBookStyle
      href={
        canRedirect
          ? {
              pathname: '/book/[slug]',
              query: { slug: id },
            }
          : '#'
      }
    >
      <BookCoverStyle css={css}>
        <Image
          src={imgSrc}
          width={width}
          height={height}
          alt=""
        />
      </BookCoverStyle>
      {beforeShadow && <AfterBlock />}
    </TouchableBookStyle>
  );
};
