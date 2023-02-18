import Link from "next/link";
import { styled } from "../../../../styles/stitches.config";

export const LogoStyle = styled(Link, {
  color: '$gray800',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '$20',
  cursor: 'pointer',

  '&:hover': {
    color: '$blue500'
  }
});
