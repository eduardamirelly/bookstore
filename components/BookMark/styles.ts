import { styled } from "../../styles/stitches.config";

export const MarkStyle = styled('button', {
  width: '57px',
  height: '46px',

  color: '$gray800',

  border: '2px solid $gray800',
  borderRadius: '20px',
  backgroundColor: 'white',
  padding: '5px',

  textAlign: 'center',
  cursor: 'pointer',

  transition: 'color .3s ease',

  '&:hover': {
    color: '$blue500',
  },
});
