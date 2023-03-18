import { MagnifyingGlass } from 'phosphor-react';
import {
  AfterBlock,
  ButtonSearch,
  InputSearchContainer,
  InputSearchStyle,
} from './styles';

interface InputSearchProps {
  placeholder?: string;
  onInput?: () => void;
  onClick?: () => void;
}

export const InputSearch = ({
  placeholder = 'Type the name of book or author...',
  onInput,
  onClick,
}: InputSearchProps) => {
  return (
    <InputSearchContainer>
      <InputSearchStyle
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        onInput={onInput}
      />
      <AfterBlock />

      <ButtonSearch type="submit" onClick={onClick}>
        <MagnifyingGlass size={24} weight="regular" />
      </ButtonSearch>
    </InputSearchContainer>
  );
};
