import { MinusCircle, PlusCircle } from 'phosphor-react';
import { Box } from '../../styles/Box';
import { ButtonCount, CountBox } from './styles';

export const CountBooks = () => {
  return (
    <Box css={{ gap: '10px', alignItems: 'center' }}>
      <ButtonCount>
        <MinusCircle size={24} weight="regular" />
      </ButtonCount>

      <CountBox>00</CountBox>

      <ButtonCount>
        <PlusCircle size={24} weight="regular" />
      </ButtonCount>
    </Box>
  );
};
