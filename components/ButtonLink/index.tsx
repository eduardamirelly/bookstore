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
          width: '153px',
          height: '51px',
        }}
      >
        {children}
      </RectButton>
    </Link>
  );
};
