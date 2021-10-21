import { SearchWrapper, StyledSearchBar, SearchResults } from './SearchBar.styles';
import { useState } from 'react';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  return (
    <SearchWrapper>
      <StyledSearchBar placeholder="Search" onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} />
      <SearchResults />
    </SearchWrapper>
  );
};

//@ToDo add some debouncing//
//@To do backend not working !!!!!!!//
