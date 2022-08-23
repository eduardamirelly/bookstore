import Link from 'next/link';
import { RectButton } from '../../styles/RectButtonLink';

interface ButtonLinkProps {
  href: string;
  color: 'yellow' | 'orange';
  fontSize: 'small' | 'large';
  borderRadius: 'small' | 'medium';
  children?: React.ReactNode;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  color,
  fontSize,
  borderRadius,
  children,
}) => {
  return (
    <Link href={href}>
      <RectButton
        color={color}
        fontSize={fontSize}
        borderRadius={borderRadius}
        css={{
          height: '51px',
          '@sm': {
            width: '153px',
          },
        }}
      >
        {children}
      </RectButton>
    </Link>
  );
};
