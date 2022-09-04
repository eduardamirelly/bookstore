import { styled } from "../../styles/stitches.config";

export const GifBox = styled('div', {
  maxWidth: '465px',
  height: '230px',

  '@md': {
    height: '320px',
  },

  img: {
    transform: 'translateY(-100px)',
    width: '365px',
    '@md': {
      width: '465px',
    }
  }
})
