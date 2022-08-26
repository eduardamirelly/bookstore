import { styled } from "../../styles/stitches.config";

export const BookCoverStyle = styled('div', {
  width: '200px',
  height: '298px',

  position: 'relative',

  variants: {
    beforeShadow: {
      on: {
        '&:before': {
          content: '',
          width: '100%',
          height: '100%',

          backgroundColor: '$blue500',
          position: 'absolute',

          borderRadius: '20px',
          top: '15px',
          left: '15px ',
        },
      }
    }
  }
});
