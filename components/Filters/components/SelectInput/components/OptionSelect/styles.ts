import { styled } from "../../../../../../styles/stitches.config";

export const OptionStyle = styled('span', {
  width: '100%',
  display: 'inline-block',
  paddingBlock: '10px',
  paddingInline: '20px',

  fontFamily: '$secondary',
  fontSize: '$16',
  color: '$gray800',

  cursor: 'pointer',

  backgroundColor: 'white',
  borderTop: '2px solid transparent',
  borderBottom: '2px solid transparent',

  transition: 'all .1s ease',

  '&:hover': {
    backgroundColor: '$blue500',
    borderTop: '2px solid $gray800',
    borderBottom: '2px solid $gray800',
  },
})
