import { styled, theme } from "../stitches.config";

export const Container = styled('div', theme, {
  maxWidth: '1440px',
  minHeight: '100vh',
  margin: '0 1.5rem',

  '@xxl': {
    margin: '0 auto',
  },

  fontFamily: '$primary',
});
