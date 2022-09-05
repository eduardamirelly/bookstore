import { styled } from '../../stitches.config';

export const TextSmall = styled('p', {
  fontFamily: '$secondary',
  fontSize: '$14',
  fontWeight: '400',
  color: '$gray600',

  '@md': {
    fontSize: '$16',
  },

  '& span': {
    color: '$blue500',
  },
});
