import styled from "styled-components";
import { OrangeButton } from "../../components/elements";

export const SearchContainer = styled.main`
  padding: 2em var(--main-padding-x);
  padding-top: 6em;

  #beta {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 0.7em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBody};
    border: 1px solid ${({ theme }) => theme.colors.darkBody};
    border-radius: 20px;
    padding: 0.3em 0.5em;
    margin-left: 5px;
  }
`;

export const SearchFields = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 7px;

  .advanced-setting {
    display: ${({ showAdvanced }) => (showAdvanced ? "block" : "none")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    & > * {
      flex: 1;
    }
  }
`;

export const SearchButton = styled(OrangeButton)`
  font-size: 0.9em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: ${({ mobileOrder }) => mobileOrder || "initial"};
  }
`;
