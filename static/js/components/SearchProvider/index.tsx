// libs
import React, { memo, useState, useMemo } from 'react';

// context
import SearchContext from './context';

// defs
interface ISearchProvider {
  children: React.ReactNode;
}

function SearchProvider({ children }: ISearchProvider) {
  const [searchText, setSearchText] = useState('');

  const values = useMemo(
    () => ({
      searchText,
      setSearchText,
    }),
    [searchText, setSearchText]
  );

  // clear search upon back button click
  window.onpopstate = () => {
    if (searchText.length > 0) {
      setSearchText('');
    }
  };

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
}

export default memo(SearchProvider);
