import { ReactNode, createContext, useState } from "react";
import { useReduxSelector } from "../store";

interface SearchContextType {
  search: string;
  orderBy: string;
  handleInputText: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleOrderBy: (value: string) => void;
  handleSortBy?: () => void;
}

export const SearchContext = createContext<SearchContextType>({} as SearchContextType);

interface SearchContextProviderProps {
  children: ReactNode;
}

export function SearchContextProvider({ children }: SearchContextProviderProps) {
  const books = useReduxSelector((state) => state.books.data);

  const [search, setSearch] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const handleInputText = (value: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value.target.value);
  }

  const handleOrderBy = (value: string) => {
    setOrderBy(value);
  }

  return (
    <SearchContext.Provider value={{
      search,
      orderBy,
      handleInputText,
      handleOrderBy
    }}>
      {children}
    </SearchContext.Provider>
  )
}
