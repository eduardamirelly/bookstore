import { styled } from "../stitches.config";

export const RectButton = styled('a', {
  paddingInline: '1rem',
  paddingBlock: '1.5rem',
  fontFamily: '$secondary',
  color: '$gray800',

  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  border: '2px solid $gray800',

  transition: 'background-color .2s',

  variants: {
    color: {
      yellow: {
        backgroundColor: '$yellow500',

        '&:hover': {
          backgroundColor: '$orange500',
        },
      },
      orange: {
        backgroundColor: '$orange500',

        '&:hover': {
          backgroundColor: '$yellow500',
        },
      },
    },
    fontSize: {
      small: {
        fontSize: '$16',
      },
      large: {
        fontSize: '$24',
      }
    },
    borderRadius: {
      small: {
        borderRadius: '10px',
      },
      medium: {
        borderRadius: '20px',
      },
    },
  }
});
