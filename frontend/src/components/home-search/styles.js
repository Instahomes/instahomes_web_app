import styled from "styled-components";
import { Input, OrangeButton } from "../elements";

export const SearchFrame = styled.div`
  width: 700px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 2.5em 3.3em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  margin: auto;
  // margin-top: 8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 70%;
    margin-top: 3rem;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const SearchInput = styled(Input)`
  margin-right: 16px;
  width: 70%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 0;
    margin-bottom: 16px;
    width: initial;
  }
`;

export const SearchButton = styled(OrangeButton)`
  width: 20%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const SearchAdvanced = styled.div`
  margin-top: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const SearchAdvancedSpan = styled.span`
  color: ${({ theme }) => theme.colors.mutedBlue};
  font-size: 0.75em;
  margin-left: 6px;
`;
