import { Box } from '../../styles/Box';

export const Footer = () => {
  return (
    <Box
      css={{
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '150px',
        marginBottom: '114px',

        '@lg': {
          marginTop: '220px',
        },
      }}
    >
      <h1>Footer</h1>
    </Box>
  );
};
