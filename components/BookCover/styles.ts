import { styled } from "../../styles/stitches.config";

export const BookCoverStyle = styled('div', {
  minWidth: '200px',
  minHeight: '298px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',

  boxShadow: '10px 12px 10px -6px rgba(61,60,60,0.36)',
});

export const AfterBlock = styled('span', {
  minWidth: '200px',
  minHeight: '298px',

  backgroundColor: '$blue500',
  position: 'absolute',

  borderRadius: '10px',
  top: '15px',
  left: '15px ',
  zIndex: '-1',
});
