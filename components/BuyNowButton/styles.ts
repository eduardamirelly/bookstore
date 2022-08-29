import { styled } from "../../styles/stitches.config";

export const BuyNowButtonStyle = styled('button', {
  width: '100%',
  height: '44px',
  color: '$gray800',

  fontFamily: '$secondary',
  fontSize: '$20',

  border: '2px solid $gray800',
  borderRadius: '20px',
  backgroundColor: '$orange500',

  cursor: 'pointer',
  transition: 'background-color .3s ease',

  '&:hover': {
    backgroundColor: '$yellow500',
  },
});
