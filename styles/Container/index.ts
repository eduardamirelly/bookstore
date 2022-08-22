import { styled, theme } from "../stitches.config";

export const Container = styled('div', theme, {
  maxWidth: '1440px',
  minHeight: '100vh',
  margin: '0 1rem',

  '@lg': {
    margin: '0 auto',
  },
  '@sm': {
    margin: '0 2rem',
  },

  fontFamily: '$primary',
});
