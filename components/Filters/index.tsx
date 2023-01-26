import { CaretDown } from 'phosphor-react';
import { Box } from '../../styles/Box';
import { DashLine } from '../../styles/DashLine';
import { styled } from '../../styles/stitches.config';
import { TextLarge } from '../../styles/Texts/TextLarge';
import { SelectInput } from './components/SelectInput';

interface FiltersProps {
  optionsFilter?: string[];
}

export const Filters = ({ optionsFilter }: FiltersProps) => {
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
          gap: '40px',

          flexDirection: 'column',

          '@lg': {
            gap: '20px',
            flexDirection: 'row',
          },
        }}
      >
        <TextLarge css={{ fontFamily: '$primary', textAlign: 'center' }}>
          Results "<TextBlueResult>Name book or name author</TextBlueResult>"
        </TextLarge>

        <Box
          css={{
            gap: '17px',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',

            '@lg': {
              flexWrap: 'nowrap',
            },
          }}
        >
          <SelectInput
            selectInitial="Categories"
            collection={optionsFilter}
            css={{ width: '308px' }}
          />
          <SelectInput selectInitial="Filter By" css={{ width: '168px' }} />
        </Box>
      </Box>

      <DashLine />
    </Box>
  );
};
