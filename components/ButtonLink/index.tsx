import Link from 'next/link';
import { RectButton } from '../../styles/RectButtonLink';

interface ButtonLinkProps {
  href: string;
  color: 'yellow' | 'orange';
  children?: React.ReactNode;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  color,
  children,
}) => {
  return (
    <Link href={href}>
      <RectButton
        color={color}
        fontSize="small"
        borderRadius="small"
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
