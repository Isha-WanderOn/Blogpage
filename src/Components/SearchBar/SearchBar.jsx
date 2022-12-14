import React from "react";
import { Button } from "../Button/Button.css";
import { SearchBox, SearchBtnDiv, SearchInput } from "./SearchBar.css";

const SearchBar = () => {
  return (
    <SearchBox>
      <SearchInput placeholder="🔍 Search" />
      <SearchBtnDiv>
        <Button search>Search</Button>
        
      </SearchBtnDiv>
    </SearchBox>
  );
};

export default SearchBar;
