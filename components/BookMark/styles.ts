import { styled } from "../../styles/stitches.config";

export const MarkStyle = styled('button', {
  minWidth: '57px',
  height: '46px',

  border: '2px solid $gray800',
  borderRadius: '20px',
  padding: '5px',

  textAlign: 'center',
  cursor: 'pointer',

  transition: 'color .3s ease',

  variants: {
    mark: {
      active: {
        backgroundColor: '$blue500',
        color: 'white',
        '&:hover': {
          color: 'white',
        },
      },
      off: {
        backgroundColor: 'white',
        color: '$gray800',
        '&:hover': {
          color: '$blue500',
        },
      },
    },
  },
});
