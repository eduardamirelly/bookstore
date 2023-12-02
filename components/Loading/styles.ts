import { keyframes, styled } from "../../styles/stitches.config";

const rotateLoading = keyframes({
  '0%': {
    rotate: '0deg',
  },
  '100%': {
    rotate: '360deg'
  }
})

export const LoadingStyle = styled('svg', {
  animation: `${rotateLoading} 1s linear infinite`,
});
