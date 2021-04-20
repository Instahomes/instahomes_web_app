import React from "react";
import arrow from "../../assets/product/gray_arrow.svg";
import {
  SearchFrame,
  SearchInput,
  SearchButton,
  SearchAdvanced,
  SearchAdvancedSpan,
} from "./styles";

const ProductSearch = () => {
  return (
    <div>
      <SearchFrame>
        <SearchInput placeholder="Search for location/city/subdivision" />
        <SearchButton>FIND MY HOME</SearchButton>
      </SearchFrame>
      <SearchAdvanced>
        <img src={arrow} alt="Arrow" />
        <SearchAdvancedSpan>Show Advanced Settings</SearchAdvancedSpan>
      </SearchAdvanced>
    </div>
  );
};

export default ProductSearch;
