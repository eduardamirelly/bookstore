import { createStitches } from "@stitches/react";

import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  '@import': ["url('https://fonts.googleapis.com/css2?family=Syne&family=Unica+One&display=swap')"]
});

globalStyles();

export const { styled, theme, css, keyframes } = createStitches({
  theme: {
    colors: {
      blue500: '#3AB8EB',
      orange500: '#F9784B',
      yellow500: '#FDBF0F',
      gray800: '#3D3C3C',
      gray600: '#676767',
    },
    fontSizes: {
      8: '.5rem',
      12: '.75rem',
      14: '.875rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      36: '2.25rem',
      64: '4rem',
    },
    fonts: {
      primary: 'Unica One, cursive',
      secondary: 'Syne, sans-serif',
    },
    borderWidths: {
      bw1: '1px',
      bw2: '2px',
    },
    borderStyles: {
      dash: 'dashed',
    },
  },
  media: {
    xs: '(min-width: 450px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1440px)',
  },
})
