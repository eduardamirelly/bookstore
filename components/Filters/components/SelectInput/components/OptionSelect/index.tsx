import { OptionStyle } from './styles';

interface OptionProps {
  option: string;
  onClick: () => void;
}

export const OptionSelect = ({ option, onClick }: OptionProps) => {
  return <OptionStyle onClick={onClick}>{option}</OptionStyle>;
};
