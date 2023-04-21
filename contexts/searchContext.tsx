import { ReactNode, createContext, useEffect, useState } from "react";
import { useReduxSelector } from "../store";
import { Book } from "../store/@types/books";
import { loadBooksRequest } from "../store/features/books";
import { loadCategoriesRequest } from "../store/features/categories";
import { useDispatch } from "react-redux";

interface SearchContextType {
  search: string;
  orderBy: string;
  booksFiltered: Book[];
  handleInputText: (value: string) => void;
  handleOrderBy: (value: string) => void;
  handleSortBy?: () => void;
  handleSetBooksFiltered: (value: Book[]) => void;
}

export const SearchContext = createContext<SearchContextType>({} as SearchContextType);

interface SearchContextProviderProps {
  children: ReactNode;
}

export function SearchContextProvider({ children }: SearchContextProviderProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksRequest());
    dispatch(loadCategoriesRequest());
  }, []);

  const books = useReduxSelector((state) => state.books.data);

  const [booksFiltered, setBooksFiltered] = useState<Book[]>(books);
  const [search, setSearch] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const handleInputText = (value: string) => {
    setSearch(value);

    if (search) {
      setBooksFiltered(
        books.filter((item) => {
          let matchEvent = false;

          Object.values(item).map((valueItem) => {
            let value = ['string', 'number'].includes(typeof valueItem) ? String(valueItem).toLowerCase() : null;
            if (value && value.match(search.toLowerCase())) {
              matchEvent = true;
            }
          });

          if (matchEvent) {
            return item;
          }
        })
      )
    }
  }

  const handleSetBooksFiltered = (value: Book[]) => {
    setBooksFiltered(value);
  }

  const handleOrderBy = (value: string) => {
    setOrderBy(value);
  }

  return (
    <SearchContext.Provider value={{
      search,
      orderBy,
      booksFiltered,
      handleInputText,
      handleOrderBy,
      handleSetBooksFiltered,
    }}>
      {children}
    </SearchContext.Provider>
  )
}
