import type * as Stitches from '@stitches/react';
import Link from 'next/link';
import { RectButton } from '../../styles/RectButtonLink';

interface ButtonLinkProps {
  href: string;
  color?: 'yellow' | 'orange';
  fontSize: 'small' | 'large';
  borderRadius: 'small' | 'medium';
  backgroundColorHover?: 'orange' | 'yellow';
  beforeShadow?: 'orange';
  css?: Stitches.CSS;
  children?: React.ReactNode;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  color,
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
