import { OptionStyle } from './styles';

interface OptionProps {
  option: string;
}

export const OptionSelect = ({ option }: OptionProps) => {
  return <OptionStyle>{option}</OptionStyle>;
};
