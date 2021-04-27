import React from "react";
import arrow from "../../assets/home/arrow.svg";
import {
  SearchFrame,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchAdvanced,
  SearchAdvancedSpan,
} from "./styles.js";

const HomeSearch = (props) => {
  return (
    <SearchFrame>
      <h1 className="center">Find your home instantly</h1>
      <p className="center">
        Skip the line and get the best offers from the best developers in
        Manila.
      </p>
      <SearchForm>
        <SearchInput placeholder="Search for location/city/subdivision" />
        <SearchButton>FIND&nbsp;MY&nbsp;HOME</SearchButton>
      </SearchForm>
      <SearchAdvanced>
        <img src={arrow} alt="Arrow" />
        <SearchAdvancedSpan>Show Advanced Settings</SearchAdvancedSpan>
      </SearchAdvanced>
    </SearchFrame>
  );
};

export default HomeSearch;
