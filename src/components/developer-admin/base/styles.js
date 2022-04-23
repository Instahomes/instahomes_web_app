import styled from "styled-components";

export const BaseFrame = styled.main`
  min-height: 100vh;
  display: flex;
  overflow-y: scroll;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  // width: calc(100% - clamp(180px, 40vw, 324px));
  padding: 1.5em 1.8em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: var(--main-padding-x);
    padding-right: var(--main-padding-x);
  }
`;

export const MainHeader = styled.div`
  margin-top: 1.5em;
  margin-bottom: 2em;
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

export const OrangeButton = styled.button.attrs(({ type }) => ({
  type: type || "submit",
}))`
  padding: 0.7em 1.2em;

  font-size: 0.9em;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.softWhite};
`;

export const OutlineButton = styled(OrangeButton)`
  background-color: inherit;
  color: ${({ theme }) => theme.colors.darkHeader};
  border: 1px solid ${({ theme }) => theme.colors.darkHeader};
`;
