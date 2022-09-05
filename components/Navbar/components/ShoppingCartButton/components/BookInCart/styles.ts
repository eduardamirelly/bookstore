import { styled } from "../../../../../../styles/stitches.config";

export const BookInCartStyle = styled('div', {
  height: '146px',

  '@sm': {
    height: '200px',
  },

  marginInline: '20px',
  padding: '20px',

  borderRadius: '20px',
  border: '2px dashed $gray600',
});
