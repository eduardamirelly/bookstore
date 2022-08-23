import { styled } from '../../stitches.config';

export const TitleH1 = styled('h1', {
  fontFamily: '$secondary',
  fontSize: '$36',
  fontWeight: '400',
  marginBottom: '1.5rem',
  color: '$gray800',

  '@xs': {
    fontSize: '$64',
  }
});
