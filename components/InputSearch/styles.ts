import { styled } from '../../styles/stitches.config';

export const InputSearchContainer = styled('form', {
  width: '100%',
  height: '42px',
  position: 'relative',

  marginTop: '2.125rem',
  marginBottom: '1.5rem',

  '@xl': {
    width: '530px',
  },
  '@md': {
    width: '90%',
  },
});

export const InputSearchStyle = styled('input', {
  border: '2px solid $gray800',
  borderRadius: '20px',
  fontFamily: '$secondary',
  color: '$gray800',

  '&::placeholder': {
    color: '$gray800',
  },

  backgroundColor: 'white',
  paddingBlock: '.5rem',
  paddingInline: '1.25rem',

  minWidth: '100%',
  height: '42px',
});

export const AfterBlock = styled('span', {
  width: '100%',
  height: '100%',

  backgroundColor: '$yellow500',
  position: 'absolute',

  borderRadius: '20px',
  top: '10px',
  left: '5px ',
  zIndex: '-1',
});

export const ButtonSearch = styled('button', {
  width: '42px',
  height: '42px',

  color: '$gray800',
  backgroundColor: 'transparent',
  border: '0',

  position: 'absolute',
  right: '10px',
  top: '0',

  cursor: 'pointer',

  '&:hover': {
    color: '$blue500',
  },
});
