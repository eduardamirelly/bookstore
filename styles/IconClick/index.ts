import { styled } from '../stitches.config';

export const IconClick = styled('div', {
  cursor: 'pointer',
  color: '$gray800',

  '&:hover': {
    color: '$blue500',
  },
});
