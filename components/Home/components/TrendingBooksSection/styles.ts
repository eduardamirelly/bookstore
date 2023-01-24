import { styled } from "../../../../styles/stitches.config";

export const BannerDash = styled('div', {
  width: '100%',
  height: '440px',
  paddingBlock: '60px',
  paddingInline: '20px',

  backgroundColor: 'white',
  border: '2px dashed $gray800',
  borderRadius: '20px',
  marginTop: '36px',

  display: 'flex',
  justifyContent: 'center',
});
