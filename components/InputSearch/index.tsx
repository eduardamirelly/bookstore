import { MagnifyingGlass } from 'phosphor-react';
import {
  AfterBlock,
  ButtonSearch,
  InputSearchContainer,
  InputSearchStyle,
} from './styles';
import React from 'react';

interface InputSearchProps {
  placeholder?: string;
  onChange: (value: string) => void;
  onClick?: () => void;
}

export const InputSearch = ({
  placeholder = 'Type the name of book or author...',
  onChange,
  onClick,
}: InputSearchProps) => {
  return (
    <InputSearchContainer>
      <InputSearchStyle
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <AfterBlock />

      <ButtonSearch type="submit" onClick={onClick}>
        <MagnifyingGlass size={24} weight="regular" />
      </ButtonSearch>
    </InputSearchContainer>
  );
};
