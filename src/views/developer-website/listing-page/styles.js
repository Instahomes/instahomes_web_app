import styled from "styled-components";
import { theme } from "../../../globalStyles";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.mainBg};
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const OrangeButton = styled.button.attrs(({ type }) => ({
  type: type || "submit",
}))`
  padding: 0.7em 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 15.313rem;
  font-size: 2rem;

  background: #ff6700;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.softWhite};
`;

export const OutlineButton = styled(OrangeButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;

  background: #f6f6f6;
  /* #3F526A */

  border: 1px solid #3f526a;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 16px;
  margin-top: -60px;
  margin-left: 900px;
  background-color: ${({ theme }) => theme.colors.softWhite};
  color: ${({ theme }) => theme.colors.darkHeader};
  border: 1px solid ${({ theme }) => theme.colors.darkHeader};
`;
