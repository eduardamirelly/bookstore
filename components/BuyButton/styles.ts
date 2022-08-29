import { styled } from "../../styles/stitches.config";

export const BuyButtonStyle = styled('button', {
  width: '100%',
  color: '$gray800',

  border: '2px solid $gray800',
  borderRadius: '20px',
  backgroundColor: '$yellow500',

  paddingBlock: '2px',
  marginTop: '10px',

  cursor: 'pointer',
  transition: 'background-color .3s ease',

  '&:hover': {
    backgroundColor: '$orange500',
  },
});
