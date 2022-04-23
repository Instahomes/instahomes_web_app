import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  width: clamp(150px, 45vw, 324px);
  min-height: 100vh;
  border-right: 1px solid #dddddd;

  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  padding: 1.5em 1.8em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: initial;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InstahomesLogo = styled.img`
  width: 70%;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 150px;
  }
`;

export const DeveloperName = styled.div`
  margin-top: 1em;
  padding: 0.7em 1em;

  border-radius: 8px;
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8em;

  .logo {
    max-width: 2em;
    height: 100%;
    object-fit: cover;
  }

  .dev-name {
    color: ${({ theme }) => theme.colors.darkHeader};
    font-size: 1em;
    font-weight: 500;
    line-height: 120%;
  }
`;

export const TabGroup = styled.div`
  display: flex !important;
  flex-direction: column;
  margin-top: 2em;
  height: 100%;
  padding-bottom: 2em;
`;

export const Tab = styled(Link)`
  box-sizing: border-box;
  padding: 1em 3em;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? "rgba(255, 103, 0, 0.1)" : "inherit"};
  border-right: ${({ theme, active }) =>
    active ? `5px solid ${theme.colors.orange}` : "none"};
  text-decoration: none;

  display: flex;
  align-items: flex-start;
  gap: 1.3em;

  .tab-name {
    font-size: 0.9em;
    color: ${({ theme, active }) =>
      active ? theme.colors.orange : theme.colors.darkGray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.9em;
  }
`;

export const MenuContainer = styled.section`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -1px;

    background: ${({ theme }) => theme.colors.mainBg};
    padding: 2em var(--main-padding-x) 0 var(--main-padding-x);
  }
`;

export const menuStyles = (theme) => ({
  bmBurgerButton: {
    position: "relative",
    width: "1.4em",
    height: "1.1em",
    background: theme.colors.mainBg,
  },
  bmBurgerBars: {
    background: theme.colors.darkBlue,
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    top: 0,
    height: "100%",
  },
  bmMenu: {
    background: "#fafafa",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: 0,
    left: 0,
  },
});
