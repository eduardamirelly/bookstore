import { styled } from "../../../../styles/stitches.config";

export const SelectStyle = styled('div', {
  minWidth: '150px',
  height: '50px',
  paddingInline: '20px',

  outline: 'none',
  cursor: 'pointer',

  borderRadius: '20px',
  border: '2px solid $gray800',

  fontFamily: '$secondary',
  fontSize: '$16',
  color: '$gray800',

  backgroundColor: 'white',

  display: 'flex',
  alignItems: 'center',
  zIndex: '10',
});

export const AfterBlock = styled('span', {
  width: '100%',
  height: '100%',

  backgroundColor: '$orange500',
  position: 'absolute',

  borderRadius: '20px',
  top: '8px',
  left: '6px ',
  zIndex: '-2',
});

export const SpanArrow = styled('span', {
  color: '$gray800',
  backgroundColor: 'transparent',
  border: '0',

  position: 'absolute',
  right: '15px',
  top: '12px',

  cursor: 'pointer',

  '&:hover': {
    color: '$blue500',
  },
});

export const OptionsStyle = styled('div', {
  position: 'absolute',
  top: '30px',
  left: '0',
  zIndex: '5',

  width: '100%',
  minHeight: '60px',

  paddingTop: '30px',
  paddingBottom: '20px',

  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  border: '2px solid $gray800',

  backgroundColor: 'white',
});
