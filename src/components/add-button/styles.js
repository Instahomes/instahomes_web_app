import styled from "styled-components";
import { theme } from "../../globalStyles";
import { isDisabled } from "./index.js";

export const ButtonCard = styled.section`
  cursor: pointer;
  padding: 1.5rem 1.2rem 1.8rem 1.2rem;
  background-color: ${({ theme, isDisabled }) =>
    isDisabled ? "#f3f3f3" : "#FFFBF8"};
  border-radius: 0.875rem;
  margin: 0.75rem;
  border: 0.094rem solid
    ${({ theme, isDisabled }) => (isDisabled ? "#f3f3f3" : theme.colors.orange)};
  box-sizing: border-box;
  box-shadow: 0rem 0.25rem 1.125rem rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
    padding: 1.125rem;
  }
`;

export const ButtonInfo = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: left; */

  info {
    color: ${({ theme, isDisabled }) =>
      isDisabled ? "#f3f3f3" : theme.colors.orange};
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0.5rem 0rem 0.5rem 0rem;

    img {
      display: inline-block;
      vertical-align: middle;
      width: 0.8rem;
      margin-bottom: 0.3rem;
      height: auto;
      margin-right: 0.5rem;
      filter: invert(50%) sepia(26%) saturate(6713%) hue-rotate(359deg)
        brightness(99%) contrast(110%);
    }
  }

  para {
    font-size: 1rem;
    color: #a14a0f;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    flex-direction: row;
  }
`;
