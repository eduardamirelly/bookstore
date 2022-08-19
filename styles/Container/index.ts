import { styled, theme } from "../stitches.config";

export const Container = styled('div', theme, {
  // width: '100%',
  maxWidth: '1440px',
  minHeight: '100vh',
  margin: '0 2.5rem',

  '@md': {
    margin: '0 5.625rem',
  },

  fontFamily: '$primary',
});
