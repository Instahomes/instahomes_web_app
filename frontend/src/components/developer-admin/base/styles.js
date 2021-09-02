import styled from "styled-components";

export const BaseFrame = styled.main`
  height: 100vh;
  display: flex;
`;

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  padding: 1.5em 1.8em;
`;

export const MainHeader = styled.div`
  margin-top: 1.5em;
  display: flex;
  align-items: center;

  .header {
    font-size: 1.5em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .right-side {
    margin-left: auto;
  }
`;

export const OrangeButton = styled.button`
  padding: 0.7em 1.2em;

  font-size: 0.9em;
  font-family: Rubik, sans-serif;
  font-weight: normal;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.softWhite};
`;
