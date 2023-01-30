import { MinusCircle, PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { Box } from '../../styles/Box';
import { ButtonCount, CountBox } from './styles';

export const CountBooks = () => {
  const [count, setCount] = useState(0);

  return (
    <Box css={{ gap: '10px', alignItems: 'center' }}>
      <ButtonCount onClick={() => (count > 0 ? setCount(count - 1) : () => {})}>
        <MinusCircle size={24} weight="regular" />
      </ButtonCount>

      <CountBox>{`${count < 10 ? '0' : ''}${count}`}</CountBox>

      <ButtonCount onClick={() => setCount(count + 1)}>
        <PlusCircle size={24} weight="regular" />
      </ButtonCount>
    </Box>
  );
};
