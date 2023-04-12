import { Box } from '../../styles/Box';
import { DashLine } from '../../styles/DashLine';
import { styled } from '../../styles/stitches.config';
import { TextLarge } from '../../styles/Texts/TextLarge';

interface FiltersProps {
  children: React.ReactNode;
  valueSearch: string;
}

export const Filters = ({ children, valueSearch = '*' }: FiltersProps) => {
  const TextBlueResult = styled('span', {
    color: '$blue500',
  });
  return (
    <Box
      direction="column"
      css={{
        width: '100%',
        marginTop: '20px',
        '@md': { marginTop: '52px' },
      }}
    >
      <Box
        direction="column"
        justify="between"
        align="center"
        gap="40"
        css={{
          marginBottom: '30px',

          '@lg': {
            gap: '20px',
            flexDirection: 'row',
          },
        }}
      >
        <TextLarge css={{ fontFamily: '$primary', textAlign: 'center' }}>
          Results "<TextBlueResult>{valueSearch}</TextBlueResult>"
        </TextLarge>

        <Box
          justify="end"
          gap="20"
          wrap="wrap"
          css={{
            '@lg': {
              flexWrap: 'nowrap',
            },
          }}
        >
          {children}
        </Box>
      </Box>

      <DashLine />
    </Box>
  );
};
