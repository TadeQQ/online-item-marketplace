import React from "react";
import { GoSearch } from "react-icons/go";
import { SearchStyled } from "./Search.styled";

const Search = () => {
  return (
    <div>
      <form>
        <input type="text">Search</input>
        <SearchStyled.Button>
          <GoSearch />
        </SearchStyled.Button>
      </form>
    </div>
  );
};

export default Search;

//GoSearch
