import styled from "styled-components";
import { theme } from "../../../globalStyles";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.mainBg};
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const OutlineButton = styled.button.attrs(({ type }) => ({
  type: type || "submit",
}))`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: right;
  padding: 0.531rem 2.5rem;
  margin-left: 37rem;
  background: ${({ theme }) => theme.colors.softWhite};
  font-size: 1em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.softWhite};
  color: ${({ theme }) => theme.colors.darkHeader};
  border: 1px solid ${({ theme }) => theme.colors.darkHeader};
`;


