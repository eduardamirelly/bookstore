import { Box } from '../../styles/Box';
import { DashLine } from '../../styles/DashLine';

export const Footer = () => {
  return (
    <footer>
      <Box
        css={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',

          marginTop: '150px',
          marginBottom: '114px',

          '@lg': {
            marginTop: '220px',
          },
        }}
      >
        {/* <DashLine width="1280" /> */}

        <DashLine />
      </Box>
    </footer>
  );
};
