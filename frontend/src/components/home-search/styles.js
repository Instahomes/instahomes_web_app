import styled from "styled-components";
import { Input, OrangeButton } from "../elements";

export const SearchFrame = styled.div`
  width: 700px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 2.5em 3.3em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  margin: auto;
  margin-top: 8rem;
`;

export const SearchBody = styled.p`
  color: ${({ theme }) => theme.colors.mutedLightBlue};
  font-size: 1em;
  text-align: center;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  margin-top: 2rem;
`;

export const SearchInput = styled(Input)`
  margin-right: 16px;
  width: 70%;
`;

export const SearchButton = styled(OrangeButton)`
  width: 20%;
`;

export const SearchAdvanced = styled.div`
  margin-top: 0.75rem;
`;

export const SearchAdvancedSpan = styled.span`
  color: ${({ theme }) => theme.colors.mutedBlue};
  font-size: 0.75em;
  margin-left: 6px;
`;
