import { styled } from "../../../../styles/stitches.config";

export const DashBG = styled('div', {
  width: '100%',
  paddingBlock: '18px',
  paddingInline: '26px',

  backgroundColor: 'white',
  border: '2px dashed $gray800',
  borderRadius: '20px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  gap: '52px',

  position: 'relative',
  marginTop: '24px',

  '@lg': {
    width: '526px',
  },

  '&:after': {
    content: '',
    width: '100%',
    height: '100%',

    backgroundColor: '$gray600',
    position: 'absolute',

    borderRadius: '20px',
    top: '10px',
    left: '12px ',
    zIndex: '-10',
  },
});
