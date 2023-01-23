import type * as Stitches from '@stitches/react';
import Image from 'next/image';
import React from 'react';
import { AfterBlock, BookCoverStyle } from './styles';

interface BookCoverProps {
  imgSrc?: string;
  beforeShadow?: boolean;
  css?: Stitches.CSS;
}

export const BookCover: React.FC<BookCoverProps> = ({
  imgSrc = 'https://picsum.photos/id/29/200/300',
  beforeShadow,
  css,
}) => {
  return (
    <>
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
    </>
  );
};
