import { styled } from "../../styles/stitches.config";

export const PaginationStyle = styled('button', {
  cursor: 'pointer',
  color: '$gray800',

  border: '0',
  transition: 'color .3s ease',

  '&:hover': {
    color: '$blue500',
  },

  '&:disabled': {
    color: '$gray600',
  },
});
