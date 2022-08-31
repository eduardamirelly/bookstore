import { styled } from "../../../../styles/stitches.config";

export const LogoStyle = styled('a', {
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
