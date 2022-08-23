import { Box } from '../../../../styles/Box';

export const CategoriesSection = () => {
  return (
    <Box
      css={{
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '150px',

        '@lg': {
          marginTop: '220px',
        },
      }}
    ></Box>
  );
};
