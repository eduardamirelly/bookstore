import type * as Stitches from '@stitches/react';
import { LoadingStyle } from "./styles";
import { Box } from '../../styles/Box';

interface LoadingProps {
  cssSvg?: Stitches.CSS;
  cssBox?: Stitches.CSS;
  textLoading?: string;
  hasTextLoading?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  cssBox,
  cssSvg,
  textLoading = 'Loading...',
  hasTextLoading = false,
}) => {
  return (
    <Box
      gap={14}
      css={cssBox}
    >
      <LoadingStyle css={cssSvg} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="url(#paint0_linear_63_793)" strokeWidth="8"/>
        <defs>
          <linearGradient id="paint0_linear_63_793" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3AB8EB"/>
            <stop offset="0.352083" stopColor="#F9784B"/>
            <stop offset="0.732292" stopColor="#FDBF0F"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
        </defs>
      </LoadingStyle>
      {hasTextLoading && textLoading}
    </Box>
  );
}
