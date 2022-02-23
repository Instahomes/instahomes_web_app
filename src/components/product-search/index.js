import React, { useState } from "react";
import arrow from "../../assets/product/gray_arrow.svg";
import {
  SearchFrame,
  SearchInput,
  SearchButton,
  SearchAdvanced,
  SearchAdvancedSpan,
} from "./styles";

const ProductSearch = ({ className }) => {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    console.log(query);
  };

  return (
    <div className={className}>
      <SearchFrame>
        <SearchInput
          placeholder="Search for location/city/subdivision"
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton onClick={onSubmit}>FIND&nbsp;MY&nbsp;HOME</SearchButton>
      </SearchFrame>
      <SearchAdvanced>
        <img src={arrow} alt="Arrow" />
        <SearchAdvancedSpan>Show Advanced Settings</SearchAdvancedSpan>
      </SearchAdvanced>
    </div>
  );
};

export default ProductSearch;
