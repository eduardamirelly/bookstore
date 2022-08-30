import { styled } from "../../styles/stitches.config";

export const CountBox = styled('div', {
  paddingInline: '15px',
  paddingBlock: '5px',
  border: '2px solid $gray800',
  borderRadius: '10px',

  fontFamily: '$secondary',
  fontSize: '$20',

  color: '$gray800',
});

export const ButtonCount = styled('button', {
  border: 'none',
  cursor: 'pointer',

  color: '$gray800',

  '&:hover': {
    color: '$blue500',
  },
});
