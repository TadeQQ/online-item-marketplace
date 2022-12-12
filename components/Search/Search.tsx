import React from "react";
import { GoSearch } from "react-icons/go";
import { SearchStyled } from "./Search.styled";

const Search = () => {
  return (
    <SearchStyled.Form>
      <SearchStyled.Input
        type="text"
        placeholder="Search for anything"
      ></SearchStyled.Input>
      <SearchStyled.Button>
        <GoSearch />
      </SearchStyled.Button>
    </SearchStyled.Form>
  );
};

export default Search;
