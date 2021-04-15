import React from "react";
import styled from "styled-components";
import arrow from "../../assets/home/arrow.svg";
import { Input, OrangeButton } from "../elements";

const SearchFrame = styled.div`
  width: 700px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 2.5em 3.3em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  margin: auto;
  margin-top: 8rem;
`;

const SearchHeading = styled.h1`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 2em;
  text-align: center;
`;

const SearchBody = styled.p`
  color: ${({ theme }) => theme.colors.mutedLightBlue};
  font-size: 1em;
  text-align: center;
`;

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  margin-top: 2rem;
`;

const SearchInput = styled(Input)`
  margin-right: 16px;
  width: 70%;
`;

const SearchButton = styled(OrangeButton)`
  width: 20%;
`;

const SearchAdvanced = styled.div`
  margin-top: 0.75rem;
`;

const SearchAdvancedSpan = styled.span`
  color: ${({ theme }) => theme.colors.mutedBlue};
  font-size: 0.75em;
  margin-left: 6px;
`;

const HomeSearch = (props) => {
  return (
    <SearchFrame>
      <SearchHeading>Find your home instantly</SearchHeading>
      <SearchBody>
        Skip the line and get the best offers from the best developers in
        Manila.
      </SearchBody>
      <SearchForm>
        <SearchInput placeholder="Search for location/city/subdivision" />
        <SearchButton>FIND MY HOME</SearchButton>
      </SearchForm>
      <SearchAdvanced>
        <img src={arrow} alt="Arrow" />
        <SearchAdvancedSpan>Show Advanced Settings</SearchAdvancedSpan>
      </SearchAdvanced>
    </SearchFrame>
  );
};

export default HomeSearch;
