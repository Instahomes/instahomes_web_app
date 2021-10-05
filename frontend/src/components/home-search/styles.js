import styled from "styled-components";
import check from "../../assets/card/check.svg";

export const HomeSearchContainer = styled.div`
  width: 900px;
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

  &.tight-flex {
    padding: 1.7em;
    display: flex;
    gap: 1.5em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    // &.tight-flex {
    //   flex-direction: column;
    // }
  }
`;

export const SearchImage = styled.div`
  border-radius: 28px;
  width: 250px;
  min-height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const SearchFooter = styled.div`
  margin-top: 2.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;

  img {
    width: 0.7em;
    height: 0.7em;
  }

  span {
    color: ${({ theme }) => theme.colors.green};
    font-size: 0.7em;
  }
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
