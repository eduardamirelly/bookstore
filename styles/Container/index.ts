import { styled, theme } from "../stitches.config";

export const Container = styled('div', theme, {
  // width: '100%',
  maxWidth: '1440px',
  minHeight: '100vh',
  margin: '0 1rem',

  '@md': {
    margin: '0 5.625rem',
  },
  '@sm': {
    margin: '0 3rem',
  },

  fontFamily: '$primary',
});
