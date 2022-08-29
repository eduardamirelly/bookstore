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

  position: 'relative',

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
    colorText: {
      gray800: {
        color: '$gray800',
        borderColor: '$gray800',
      },
      gray600: {
        color: '$gray600',
        borderColor: '$gray600',
      },
    },
    backgroundColorHover: {
      yellow: {
        backgroundColor: 'white',

        '&:hover': {
          backgroundColor: '$yellow500',
        },
      },
      orange: {
        backgroundColor: 'white',

        '&:hover': {
          backgroundColor: '$orange500',
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
      full: {
        borderRadius: '50%',
      }
    },
    beforeShadow: {
      orange: {
        '&:before': {
          content: '',
          width: '100%',
          height: '100%',

          backgroundColor: '$orange500',
          position: 'absolute',

          borderRadius: '10px',
          top: '15px',
          left: '15px ',
          zIndex: '-1',
        },
      },
      blue: {
        '&:before': {
          content: '',
          width: '100%',
          height: '100%',

          backgroundColor: '$blue500',
          position: 'absolute',

          borderRadius: '50%',
          top: '8px',
          left: '5px ',
          zIndex: '-1',
        },
      },
    },
  }
});
