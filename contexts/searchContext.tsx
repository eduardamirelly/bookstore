import { ReactNode, createContext, useState } from "react";

interface SearchContextType {
  search: string;
  handleInputText: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<SearchContextType>({} as SearchContextType);

interface SearchContextProviderProps {
  children: ReactNode;
}

export function SearchContextProvider({ children }: SearchContextProviderProps) {
  const [search, setSearch] = useState('');

  const handleInputText = (value: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value.target.value);
  }

  return (
    <SearchContext.Provider value={{
      search,
      handleInputText
    }}>
      {children}
    </SearchContext.Provider>
  )
}
