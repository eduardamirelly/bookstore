import { Box } from '../../styles/Box';
import { DashLine } from '../../styles/DashLine';
import { OptionStyle } from '../../styles/OptionStyle';
import { SelectStyle } from '../../styles/SelectStyle';
import { styled } from '../../styles/stitches.config';
import { TextLarge } from '../../styles/Texts/TextLarge';

export const Filters = () => {
  const TextBlueResult = styled('span', {
    color: '$blue500',
  });
  return (
    <Box
      css={{
        width: '100%',
        flexDirection: 'column',
        marginTop: '20px',
        '@md': { marginTop: '52px' },
      }}
    >
      <Box
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '30px',
          gap: '50px',

          flexDirection: 'column',

          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        <TextLarge css={{ fontFamily: '$primary', textAlign: 'center' }}>
          Results "<TextBlueResult>Name book or name author</TextBlueResult>"
        </TextLarge>

        <Box css={{ gap: '17px' }}>
          <SelectStyle>
            <OptionStyle value="">Texto</OptionStyle>
          </SelectStyle>

          <SelectStyle>
            <OptionStyle value="">Texto</OptionStyle>
          </SelectStyle>
        </Box>
      </Box>

      <DashLine />
    </Box>
  );
};
