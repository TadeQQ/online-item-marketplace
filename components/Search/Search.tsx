import React from 'react';
import { GoSearch } from 'react-icons/go';
import { SearchStyled } from './Search.styled';

const Search = () => {
  return (
    <SearchStyled.Form>
      <SearchStyled.Input
        type="text"
        placeholder="Search for anything"
      ></SearchStyled.Input>
      <SearchStyled.Button>
        <GoSearch style={{ marginTop: '2px' }} />
      </SearchStyled.Button>
    </SearchStyled.Form>
  );
};
//ttry to commit 12345 and push
export default Search;
