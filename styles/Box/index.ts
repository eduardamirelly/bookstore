import { styled } from "../stitches.config";

export const Box = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    justify: {
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
    gap: {
      10: {
        gap: '.625rem',
      },
      14: {
        gap: '.875rem',
      },
      38: {
        gap: '2.375rem',
      },
    }
  },
});
