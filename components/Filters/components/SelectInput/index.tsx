import type * as Stitches from '@stitches/react';

import { CaretDown } from 'phosphor-react';
import React, { useState } from 'react';
import { Category } from '../../../../store/@types/categories';
import { Box } from '../../../../styles/Box';
import { OptionSelect } from './components/OptionSelect';
import { AfterBlock, SelectStyle, SpanArrow, OptionsStyle } from './styles';

interface SelectProps {
  selectInitial: string;
  css?: Stitches.CSS;
  collection?: string[];
}

export const SelectInput: React.FC<SelectProps> = ({
  selectInitial,
  css,
  collection = ['First Added', 'Last Added'],
}) => {
  const [nameSelect, setNameSelect] = useState(selectInitial);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box onClick={() => setIsOpen(!isOpen)} css={{ position: 'relative' }}>
      <SelectStyle css={css}>
        <span>{nameSelect}</span>
        <SpanArrow>
          <CaretDown size={24} weight="regular" />
        </SpanArrow>
      </SelectStyle>

      {isOpen && (
        <OptionsStyle>
          {collection.map((collect, index) => (
            <OptionSelect key={index} option={collect} />
          ))}
        </OptionsStyle>
      )}

      <AfterBlock />
    </Box>
  );
};
