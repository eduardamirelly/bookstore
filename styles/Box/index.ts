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
      around: {
        justifyContent: 'space-around',
      },
      end: {
        justifyContent: 'flex-end',
      },
      start: {
        justifyContent: 'flex-start',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      rwrap: {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      10: {
        gap: '.625rem',
      },
      14: {
        gap: '.875rem',
      },
      20: {
        gap: '1.25rem',
      },
      30: {
        gap: '1.875rem',
      },
      38: {
        gap: '2.375rem',
      },
      40: {
        gap: '2.5rem',
      },
      45: {
        gap: '2.8125rem',
      },
      50: {
        gap: '3.125rem',
      },
      80: {
        gap: '5rem',
      },
    },
  },
});
