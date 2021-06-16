import { LightInput } from "../../components/elements";
import styled from "styled-components";

export const SearchFrame = styled.div`
  background: ${({ theme }) => theme.colors.softWhite};
  border: 1px solid ${({ theme }) => theme.colors.mutedGray};
  border-radius: 9px;

  width: 50%;
  display: flex;
  padding: 10px;
`;

export const SearchInput = styled(LightInput)`
  font-size: 0.9em;
  width: 75%;
`;

export const SearchButton = styled.button`
  font-size: 0.9em;
  background-color: ${({ theme }) => theme.colors.mutedLightBlue};
  color: ${({ theme }) => theme.colors.softWhite};
  border-radius: 1px;
  margin-left: 10px;
`;

export const SearchAdvanced = styled.div`
  margin-top: 0.75rem;
`;

export const SearchAdvancedSpan = styled.span`
  color: ${({ theme }) => theme.colors.mutedGray};
  font-size: 0.9em;
  margin-left: 6px;
`;
