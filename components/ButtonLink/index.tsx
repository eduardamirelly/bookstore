import type * as Stitches from '@stitches/react';
import Link from 'next/link';
import React from 'react';
import { RectButton } from '../../styles/RectButton';

interface ButtonLinkProps {
  href: string;
  color?: 'yellow' | 'orange';
  colorText?: 'gray800' | 'gray600';
  fontSize?: 'small' | 'medium' | 'large';
  borderRadius: 'small' | 'medium' | 'full';
  backgroundColorHover?: 'orange' | 'yellow';
  beforeShadow?: 'orange' | 'blue';
  css?: Stitches.CSS;
  children?: React.ReactNode;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  color,
  colorText,
  fontSize,
  borderRadius,
  backgroundColorHover,
  beforeShadow,
  css,
  children,
}) => {
  return (
    <Link href={href}>
      <RectButton
        color={color}
        colorText={colorText}
        fontSize={fontSize}
        borderRadius={borderRadius}
        backgroundColorHover={backgroundColorHover}
        beforeShadow={beforeShadow}
        css={css}
      >
        {children}
      </RectButton>
    </Link>
  );
};
