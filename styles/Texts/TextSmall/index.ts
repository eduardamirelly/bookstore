import { styled } from '../../stitches.config';

export const TextSmall = styled('h1', {
  fontFamily: '$secondary',
  fontSize: '$14',
  fontWeight: '400',

  '@md': {
    fontSize: '$16',
  }
});
