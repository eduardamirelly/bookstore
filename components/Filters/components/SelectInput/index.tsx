import type * as Stitches from '@stitches/react';

import { CaretDown } from 'phosphor-react';
import React, { useState } from 'react';
import { Box } from '../../../../styles/Box';
import { OptionSelect } from './components/OptionSelect';
import { AfterBlock, SelectStyle, SpanArrow, OptionsStyle } from './styles';

interface SelectProps {
  selectInitial: string;
  css?: Stitches.CSS;
  collection?: string[];
  isRequired?: boolean;
  onSelect: (value: string) => void;
}

export const SelectInput: React.FC<SelectProps> = ({
  selectInitial,
  css,
  collection = ['First Added', 'Last Added'],
  isRequired = false,
  onSelect,
}) => {
  const [nameSelect, setNameSelect] = useState(selectInitial);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectValue = (value: string) => {
    setNameSelect(value);
    onSelect(value);
  }

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
          {!isRequired && (
            <OptionSelect onClick={() => handleSelectValue(selectInitial)} key={0} option={'None'} />
          )}

          {collection.map((collect, index) => (
            <OptionSelect onClick={() => handleSelectValue(collect)} key={index + 1} option={collect} />
          ))}
        </OptionsStyle>
      )}

      <AfterBlock />
    </Box>
  );
};
