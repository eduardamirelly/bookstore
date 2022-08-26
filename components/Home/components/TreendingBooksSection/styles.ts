import { styled } from "../../../../styles/stitches.config";

export const BannerDash = styled('div', {
  width: '100%',
  paddingBlock: '40px',

  backgroundColor: 'white',
  border: '2px dashed $gray800',
  borderRadius: '20px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
  marginTop: '36px',

  '&:after': {
    content: '',
    width: '100%',
    height: '100%',

    backgroundColor: '$yellow500',
    position: 'absolute',

    borderRadius: '20px',
    top: '20px',
    left: '20px ',
    zIndex: '-10',
  },
});
