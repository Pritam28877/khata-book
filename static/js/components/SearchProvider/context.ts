// libs
import { createContext, useContext } from 'react';

interface ISearchContext {
  searchText: string;
  setSearchText: (search: string) => void;
}

const VOID_FUNC = (search: string) => {
  /** DO NOTHING */
};

const initialValue: ISearchContext = {
  searchText: '',
  setSearchText: VOID_FUNC,
};

const searchContext = createContext(initialValue);

export const useSearchContext = () => useContext(searchContext);

export default searchContext;
