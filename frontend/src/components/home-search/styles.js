import styled from "styled-components";
import { OrangeButton } from "../elements";
import { LightInput } from "../../components/elements";

export const SearchFrame = styled.div`
  width: 700px;
  background-color: ${({ theme }) => theme.colors.softWhite};
  padding: 2.5em 3.3em;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  margin: auto;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  p {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 70%;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 10px;

  .advanced-setting {
    display: ${({ showAdvanced }) => (showAdvanced ? "block" : "none")};
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .flex-grow-mobile {
      flex: 1;
    }
  }
`;

export const SearchButton = styled(OrangeButton)`
  width: 20%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 120px;
    order: ${({ mobileOrder }) => mobileOrder || "initial"};
  }
`;

export const SearchAdvanced = styled.div`
  margin-top: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
  }
`;

export const SearchAdvancedSpan = styled.span`
  color: ${({ theme }) => theme.colors.mutedBlue};
  font-size: 0.75em;
  margin-left: 6px;
`;

export const Input = styled(LightInput)`
  border: 1px solid ${({ theme }) => theme.colors.whiteInputColor};
`;
