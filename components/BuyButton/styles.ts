import { styled } from "../../styles/stitches.config";

export const BuyButtonStyle = styled('button', {
  width: '100%',
  height: '44px',
  color: '$gray800',

  border: '2px solid $gray800',
  borderRadius: '20px',
  backgroundColor: '$yellow500',

  cursor: 'pointer',
  transition: 'background-color .3s ease',

  '&:hover': {
    backgroundColor: '$orange500',
  },
});
