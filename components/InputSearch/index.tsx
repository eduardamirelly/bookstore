import { MagnifyingGlass } from 'phosphor-react';
import {
  AfterBlock,
  ButtonSearch,
  InputSearchContainer,
  InputSearchStyle,
} from './styles';

export const InputSearch = () => {
  return (
    <InputSearchContainer>
      <InputSearchStyle
        type="search"
        name="search"
        id="search"
        placeholder="Type the name of book or author..."
      />
      <AfterBlock />

      <ButtonSearch type="submit">
        <MagnifyingGlass size={24} weight="regular" />
      </ButtonSearch>
    </InputSearchContainer>
  );
};
