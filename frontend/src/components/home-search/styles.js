import styled from "styled-components";
export const HomeSearchContainer = styled.div`
  width: 800px;
  margin: auto;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  p,
  li {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  ul {
    font-size: 1em;
    list-style: none;
    margin-left: 0;
    padding-left: 8px;
  }

  li:before {
    content: "✓";
    padding-right: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
    font-size: 0.9em;

    h1 {
      font-size: 1.8em;
    }
  }
`;

export const HomeSearchFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.softWhite};
  padding: 3em 3em;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
  border-radius: 9px;
`;

export const TabRow = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 15px;
`;

export const Tab = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 5px;

  span {
    font-size: 1em;
    color: ${({ theme }) => theme.colors.mainBg};
  }

  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.8)};
  border-bottom: ${({ theme, isSelected }) =>
    isSelected && `2px solid ${theme.colors.softWhite}`};
`;

export const GuidedButtons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;
