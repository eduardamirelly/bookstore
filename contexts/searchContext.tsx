import { ReactNode, createContext } from "react";

interface SearchContextType {

}

export const SearchContext = createContext<SearchContextType>({} as SearchContextType);

interface SearchContextProviderProps {
  children: ReactNode;
}

export function SearchContextProvider({ children }: SearchContextProviderProps) {
  return (
    <SearchContext.Provider value={{}}>
      {children}
    </SearchContext.Provider>
  )
}
