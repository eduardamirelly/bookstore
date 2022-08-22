import { styled } from '../../../../styles/stitches.config';

export const HeroHeader = styled('div', {
  color: '$gray800',
  width: '100%',

  '@lg': {
    maxWidth: '535px',
  },
});

export const HeroImage = styled('div', {
  width: '485px',
  maxHeight: '503px',
  position: 'relative',

  '&:before': {
    content: '',
    width: '100%',
    height: '100%',

    backgroundColor: '$blue500',
    position: 'absolute',

    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',

    marginTop: '-38px',
    marginLeft: '-46px',
  },

  display: 'none',

  '@lg': {
    display: 'block',
  },
});

export const GifBox = styled('span', {
  position: 'absolute',

  '@xl': {
    right: '45px',
    bottom: '-60px',
  },

  img: {
    width: '60px',
    '@xl': {
      width: '141px',
    },
  },
});
